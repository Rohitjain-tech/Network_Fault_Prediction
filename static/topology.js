// ==========================================
// AI NETWORK TOPOLOGY
// Version 1.0
// ==========================================

function updateTopology(probability){

const router=document.getElementById("router");

const status=document.getElementById("routerStatus");

if(!router || !status) return;

router.classList.remove("healthy");
router.classList.remove("warning");
router.classList.remove("critical");

if(probability>0.70){

router.classList.add("critical");

status.innerHTML="🔴 Critical";

}

else if(probability>0.40){

router.classList.add("warning");

status.innerHTML="🟡 Warning";

}

else{

router.classList.add("healthy");

status.innerHTML="🟢 Healthy";

}

}

window.addEventListener("load",()=>{

let p=0;

const hidden=document.getElementById("predictionProbability");

if(hidden){

p=parseFloat(hidden.value);

}

updateTopology(p);

});