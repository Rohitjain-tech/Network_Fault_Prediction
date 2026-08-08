from flask import Flask, render_template, request, redirect, url_for, session, send_file
from predict import predict_fault
import io

app = Flask(__name__)
app.secret_key = "networkfaultsecret"


# -------------------------------
# Suggestion generator
# -------------------------------

def generate_suggestion(probability):

    if probability > 0.7:
        return "High network fault risk detected. Please check routers, restart services and inspect cables."

    elif probability > 0.4:
        return "Moderate network load detected. Monitor latency and CPU usage."

    else:
        return "Network appears stable. Continue normal monitoring."


# -------------------------------
# Risk level indicator
# -------------------------------

def get_risk_level(probability):

    if probability > 0.7:
        return "High Risk", "high-risk"

    elif probability > 0.4:
        return "Medium Risk", "medium-risk"

    else:
        return "Low Risk", "low-risk"


# -------------------------------
# Dynamic rule evaluation
# -------------------------------

def evaluate_rules(cpu, latency, packetloss, bandwidth):

    rules = []

    rules.append(f"CPU = High AND Latency = High → {'TRUE' if cpu == 3 and latency == 3 else 'FALSE'}")
    rules.append(f"Packet Loss = 1 → {'TRUE' if packetloss == 1 else 'FALSE'}")
    rules.append(f"Bandwidth = Low AND CPU = High → {'TRUE' if bandwidth == 1 and cpu == 3 else 'FALSE'}")
    rules.append(f"Latency = High AND Packet Loss = 1 → {'TRUE' if latency == 3 and packetloss == 1 else 'FALSE'}")

    return rules


# -------------------------------
# Main route
# -------------------------------

@app.route("/", methods=["GET", "POST"])
def index():

    if request.method == "POST":

        cpu = request.form.get("cpu")
        latency = request.form.get("latency")
        packetloss = request.form.get("packetloss")
        bandwidth = request.form.get("bandwidth")

        if not cpu or not latency or not packetloss or not bandwidth:
            session["error"] = "Please select all values before predicting."
            return redirect(url_for("index"))

        cpu = int(cpu)
        latency = int(latency)
        packetloss = int(packetloss)
        bandwidth = int(bandwidth)

        message, probability = predict_fault(cpu, latency, packetloss, bandwidth)

        suggestion = generate_suggestion(probability)

        risk_text, risk_class = get_risk_level(probability)

        rules = evaluate_rules(cpu, latency, packetloss, bandwidth)

        session["message"] = message
        session["probability"] = probability
        session["suggestion"] = suggestion
        session["risk_text"] = risk_text
        session["risk_class"] = risk_class
        session["rules"] = rules

        session["report"] = f"""
AI Network Fault Prediction Report

CPU Usage: {cpu}
Latency: {latency}
Packet Loss: {packetloss}
Bandwidth: {bandwidth}

Prediction: {message}
Fault Probability: {round(probability*100,2)}%

Risk Level: {risk_text}

Suggestion:
{suggestion}
"""

        return redirect(url_for("index"))

    message = session.pop("message", None)
    probability = session.pop("probability", None)
    error = session.pop("error", None)
    suggestion = session.pop("suggestion", None)
    risk_text = session.pop("risk_text", None)
    risk_class = session.pop("risk_class", None)
    rules = session.pop("rules", None)

    return render_template(
        "index.html",
        message=message,
        probability=probability,
        error=error,
        suggestion=suggestion,
        risk_text=risk_text,
        risk_class=risk_class,
        rules=rules
    )


# -------------------------------
# Download report
# -------------------------------

@app.route("/download")
def download():

    report = session.get("report")

    if not report:
        return redirect(url_for("index"))

    buffer = io.BytesIO()
    buffer.write(report.encode())
    buffer.seek(0)

    return send_file(
        buffer,
        as_attachment=True,
        download_name="network_fault_report.txt",
        mimetype="text/plain"
    )


# -------------------------------
# Run server
# -------------------------------

if __name__ == "__main__":
    app.run(debug=True)