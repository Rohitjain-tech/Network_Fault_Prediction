document.addEventListener("DOMContentLoaded", function () {

    console.log("charts.js loaded");

    const canvas = document.getElementById("trafficChart");

    if (!canvas) {
        console.log("Canvas NOT found");
        return;
    }

    console.log("Canvas found");

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["1","2","3","4","5","6","7","8"],
            datasets: [{
                label: "Bandwidth (Mbps)",
                data: [20,25,30,28,35,40,38,45],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,0.2)",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});