import pickle
from pgmpy.inference import VariableElimination

# load trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

infer = VariableElimination(model)

def predict_fault(cpu, latency, packetloss, bandwidth):

    result = infer.query(
        variables=['Fault'],
        evidence={
            'CPU': cpu,
            'Latency': latency,
            'PacketLoss': packetloss,
            'Bandwidth': bandwidth
        }
    )

    # probabilities
    prob_no_fault = float(result.values[0])
    prob_fault = float(result.values[1])

    # prediction message
    if prob_fault > prob_no_fault:
        message = "⚠ Network Fault Likely"
    else:
        message = "✅ Network Operating Normally"

    # return message + FAULT probability (not predicted class)
    return message, round(prob_fault, 2)