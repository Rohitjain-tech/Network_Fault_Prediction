# 🌐 AI Network Fault Prediction & Monitoring System

An AI-powered network monitoring and fault prediction system developed using **Python, Flask, Bayesian AI, JavaScript, Chart.js, Cisco Packet Tracer, and Wireshark-based network analysis**.

The system analyzes important network parameters such as CPU usage, latency, packet loss, and bandwidth to predict possible network faults and provide intelligent recommendations.

---

## 📌 Project Overview

Network failures can cause downtime, performance degradation, packet loss, and security issues.

The **AI Network Fault Prediction & Monitoring System** provides a centralized dashboard that combines:

- 🤖 AI-based network fault prediction
- 🌐 Cisco Packet Tracer network topology visualization
- 📦 Wireshark-style packet monitoring
- 📈 Live network traffic visualization
- 🚨 Intrusion detection
- 🧠 AI root cause analysis
- 📊 Protocol distribution
- 📜 Live network event monitoring
- 💡 AI recommendations

The main goal of the project is to identify possible network problems early and help administrators understand their possible causes.

---

## ✨ Features

### 🤖 AI Network Fault Prediction

The system uses a Bayesian AI-based prediction approach to analyze:

- CPU Usage
- Network Latency
- Packet Loss
- Bandwidth

Based on these parameters, the system determines the possible network risk level.

### 🌐 Cisco Packet Tracer Integration

The dashboard provides a simulated network topology containing:

- Internet
- Firewall
- Router
- Switch
- PC-1
- PC-2
- Server
- WiFi Access Point
- Mobile Device

This helps visualize the network infrastructure and device status.

### 📦 Wireshark-Style Packet Monitoring

The system displays simulated network packet information such as:

- Time
- Source
- Destination
- Protocol
- Packet Length
- Status

This provides a simplified representation of packet-level network monitoring.

### 📈 Live Network Traffic

The dashboard provides a live traffic graph using **Chart.js**.

The graph represents network bandwidth/traffic activity and updates automatically.

### 📊 Protocol Distribution

The dashboard provides protocol statistics for common network traffic such as:

- TCP
- UDP
- HTTP
- DNS
- ICMP

### 🚨 Intrusion Detection System

The system provides simulated security monitoring and generates alerts for suspicious network conditions.

Example alerts include:

- Packet Loss Detected
- Router Congestion
- Possible DoS Traffic
- Network Load Increasing

### 🧠 AI Root Cause Analysis

The system analyzes network conditions and identifies possible causes of faults, such as:

- Router Congestion
- Network Overload
- Bandwidth Bottleneck
- Switch Failure
- High Latency
- Packet Loss

### 📜 Live Network Event Log

The dashboard continuously displays network events such as:

- Router Started
- Server Connected
- TCP Connection Established
- DNS Query Completed
- Packet Loss Detected
- AI Prediction Completed

### 💡 AI Recommendation

Based on the prediction result, the system provides recommendations to help the administrator respond to the detected network condition.

### 📥 AI Report

The system also provides an option to download an AI-based network analysis report.

---

## 🛠️ Technologies Used

### Backend

- Python
- Flask
- Bayesian AI

### Frontend

- HTML5
- CSS3
- JavaScript
- Chart.js

### Networking

- Cisco Packet Tracer
- Wireshark

### Development Tools

- Visual Studio Code
- Git
- GitHub

---

## 📂 Project Structure

```text
Network_Fault_Prediction/
│
├── app.py
├── predict.py
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    ├── dashboard.js
    ├── topology.js
    ├── packet.js
    ├── charts.js
    ├── alerts.js
    ├── rootcause.js
    ├── protocolChart.js
    └── eventlog.js
