// =======================================
// AI Root Cause Analysis
// =======================================

const causes=[

{
cpu:"High",
latency:"High",
loss:"Yes",
bandwidth:"Low",
reason:"Router Congestion",
confidence:"95%"
},

{
cpu:"Medium",
latency:"Medium",
loss:"No",
bandwidth:"Medium",
reason:"Network Overload",
confidence:"82%"
},

{
cpu:"Low",
latency:"Low",
loss:"No",
bandwidth:"High",
reason:"Network Healthy",
confidence:"99%"
},

{
cpu:"High",
latency:"Medium",
loss:"Yes",
bandwidth:"Medium",
reason:"Switch Failure",
confidence:"88%"
},

{
cpu:"Medium",
latency:"High",
loss:"Yes",
bandwidth:"Low",
reason:"Bandwidth Bottleneck",
confidence:"91%"
}

];

function updateRootCause(){

const c=causes[Math.floor(Math.random()*causes.length)];

document.getElementById("cpuStatus").innerHTML=c.cpu;

document.getElementById("latencyStatus").innerHTML=c.latency;

document.getElementById("lossStatus").innerHTML=c.loss;

document.getElementById("bandwidthStatus").innerHTML=c.bandwidth;

document.getElementById("rootCause").innerHTML=c.reason;

document.getElementById("confidence").innerHTML=c.confidence;

}

updateRootCause();

setInterval(updateRootCause,6000);