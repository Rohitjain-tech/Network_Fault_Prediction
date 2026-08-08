// =======================================
// LIVE NETWORK EVENT LOG
// =======================================

const events=[

"Router Started",

"Server Connected",

"Firewall Enabled",

"Packet Loss Detected",

"TCP Connection Established",

"UDP Packet Received",

"DNS Query Completed",

"HTTP Request Forwarded",

"ICMP Packet Blocked",

"Port Scan Detected",

"Switch Connected",

"WiFi Client Connected",

"Router Congestion Warning",

"Bandwidth Increased",

"AI Prediction Completed",

"Network Stable"

];

function addLog(){

const log=document.getElementById("eventLog");

if(!log) return;

const time=new Date().toLocaleTimeString();

const event=events[Math.floor(Math.random()*events.length)];

const row=document.createElement("div");

row.className="log-row";

row.innerHTML=`

<span class="log-time">${time}</span>

<span class="log-text">${event}</span>

`;

log.prepend(row);

while(log.children.length>12){

log.removeChild(log.lastChild);

}

}

addLog();

setInterval(addLog,3000);