// =======================================
// Wireshark Packet Simulator
// =======================================

const packets = [

["192.168.1.2","Router","TCP","1500"],
["Router","Server","HTTP","512"],
["Server","8.8.8.8","DNS","120"],
["Unknown","Router","ICMP","84"],
["PC-1","PC-2","UDP","640"],
["PC-2","Server","TCP","1280"],
["Server","Router","HTTPS","980"],
["Router","Google","DNS","96"]

];

function addPacket(){

const table=document.getElementById("packetBody");

if(!table) return;

const packet=packets[Math.floor(Math.random()*packets.length)];

const row=document.createElement("tr");

const time=new Date().toLocaleTimeString();

let status="Normal";

let color="green";

if(packet[2]=="ICMP"){

status="Suspicious";

color="red";

}

else if(packet[2]=="DNS"){

status="Lookup";

color="orange";

}

row.innerHTML=`

<td>${time}</td>

<td>${packet[0]}</td>

<td>${packet[1]}</td>

<td>${packet[2]}</td>

<td>${packet[3]}</td>

<td style="color:${color};font-weight:bold;">

${status}

</td>

`;

table.prepend(row);

while(table.rows.length>10){

table.deleteRow(10);

}

}

setInterval(addPacket,2500);

window.onload=addPacket;