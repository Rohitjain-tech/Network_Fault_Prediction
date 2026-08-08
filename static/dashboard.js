// =========================================
// AI NETWORK DASHBOARD
// VERSION 2.0
// =========================================

// Live Clock

function updateClock(){

const clock=document.getElementById("liveClock");

if(!clock) return;

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


// =========================================
// Random Traffic Counter
// =========================================

function randomTraffic(){

const traffic=document.getElementById("trafficCounter");

if(!traffic) return;

let value=Math.floor(Math.random()*40)+40;

traffic.innerHTML=value+" Mbps";

}

setInterval(randomTraffic,3000);

randomTraffic();


// =========================================
// Device Counter
// =========================================

function animateCounter(id,target){

const obj=document.getElementById(id);

if(!obj) return;

let count=0;

const timer=setInterval(()=>{

count++;

obj.innerHTML=count;

if(count>=target){

clearInterval(timer);

}

},80);

}

animateCounter("deviceCount",6);

animateCounter("alertCount",3);


// =========================================
// Health Animation
// =========================================

function animateHealth(){

const health=document.getElementById("healthScore");

if(!health) return;

let value=parseInt(health.innerHTML);

health.style.transition=".4s";

if(value>80){

health.style.color="#16a34a";

}

else if(value>50){

health.style.color="#f59e0b";

}

else{

health.style.color="#dc2626";

}

}

animateHealth();


// =========================================
// Floating Panels
// =========================================

const panels=document.querySelectorAll(".panel");

panels.forEach(panel=>{

panel.addEventListener("mouseenter",()=>{

panel.style.transform="translateY(-6px)";

});

panel.addEventListener("mouseleave",()=>{

panel.style.transform="translateY(0px)";

});

});


// =========================================
// Status Animation
// =========================================

const statusCards=document.querySelectorAll(".status-card");

statusCards.forEach(card=>{

setInterval(()=>{

card.style.boxShadow="0px 0px 25px rgba(37,99,235,.3)";

setTimeout(()=>{

card.style.boxShadow="0px 5px 20px rgba(0,0,0,.1)";

},700);

},5000);

});
