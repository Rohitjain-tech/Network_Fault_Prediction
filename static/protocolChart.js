// =====================================
// Protocol Distribution Chart
// =====================================

const protocolCanvas=document.getElementById("protocolChart");

if(protocolCanvas){

const protocolChart=new Chart(protocolCanvas,{

type:"pie",

data:{

labels:[

"TCP",

"UDP",

"HTTP",

"DNS",

"ICMP"

],

datasets:[{

data:[45,20,15,10,10],

backgroundColor:[

"#2563eb",

"#16a34a",

"#f59e0b",

"#7c3aed",

"#dc2626"

],

borderWidth:2

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

}

}

});

setInterval(()=>{

protocolChart.data.datasets[0].data=[

Math.floor(Math.random()*40)+20,

Math.floor(Math.random()*20)+10,

Math.floor(Math.random()*15)+10,

Math.floor(Math.random()*15)+5,

Math.floor(Math.random()*10)+5

];

protocolChart.update();

},5000);

}