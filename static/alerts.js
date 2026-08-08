// ==========================================
// AI Intrusion Detection System
// ==========================================

const alerts=[

"🟢 Network Stable",

"⚠ High CPU Usage Detected",

"⚠ Packet Loss Increasing",

"🚨 SYN Flood Attack Detected",

"🚨 ICMP Flood Detected",

"⚠ Port Scan Detected",

"⚠ DNS Amplification Attempt",

"🟢 Firewall Operating Normally",

"⚠ High Latency Observed",

"🚨 Router Congestion"

];

function generateAlert(){

const box=document.getElementById("alertBox");

if(!box) return;

const msg=alerts[Math.floor(Math.random()*alerts.length)];

let cls="success";

if(msg.includes("⚠")) cls="warning";

if(msg.includes("🚨")) cls="danger";

box.className="alert "+cls;

box.innerHTML=msg;

}

generateAlert();

setInterval(generateAlert,5000);