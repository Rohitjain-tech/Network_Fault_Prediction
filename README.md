# 🌐 AI Network Fault Prediction & Monitoring System

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Flask](https://img.shields.io/badge/Framework-Flask-green)
![AI](https://img.shields.io/badge/AI-Bayesian%20Network-purple)
![Chart.js](https://img.shields.io/badge/Charts-Chart.js-orange)
![Status](https://img.shields.io/badge/Status-Live-success)

An **AI-powered Network Fault Prediction and Monitoring System** designed to predict possible network failures, monitor network conditions, visualize network topology, analyze network packets, detect suspicious activities, and provide intelligent recommendations.

The system uses **Bayesian AI** to analyze important network parameters such as CPU usage, latency, packet loss, and bandwidth to estimate the probability of a network fault.

---

## 🚀 Live Project

### 🌐 Project Website

👉 **[Open AI Network Fault Prediction System](https://network-fault-prediction.onrender.com/)**

The application is deployed using **Render** and can be accessed directly through the link above.

---

## 📱 Scan QR Code

Scan the QR code below to directly open the live project website.

<p align="center">
  <img src="qr-code.png" alt="QR Code - AI Network Fault Prediction" width="250">
</p>

<p align="center">
  <b>Scan to Visit the Live Project</b>
</p>

---

## 📌 Project Overview

Network failures can result in downtime, slow performance, packet loss, congestion, and security problems.

The **AI Network Fault Prediction & Monitoring System** provides a centralized dashboard that combines AI-based prediction with network monitoring and visualization features.

The system analyzes:

- CPU Usage
- Network Latency
- Packet Loss
- Bandwidth

and uses these parameters to determine the possible network risk level.

The dashboard also provides network topology visualization, Wireshark-style packet monitoring, traffic visualization, intrusion detection, root cause analysis, and AI-based recommendations.

---

## ✨ Key Features

### 🤖 1. AI Network Fault Prediction

The system uses a **Bayesian Network-based AI approach** to estimate the probability of a network fault.

Input parameters include:

- CPU Usage
- Latency
- Packet Loss
- Bandwidth

The system classifies the network condition into different risk levels such as:

- 🟢 Low Risk
- 🟡 Medium Risk
- 🔴 High Risk

---

### 🌐 2. Cisco Packet Tracer Network Topology

The dashboard provides a simulated network topology inspired by **Cisco Packet Tracer**.

The topology contains:

```text
Internet
    ↓
Firewall
    ↓
Router
    ↓
Switch
 ┌──┼──────┬──────┐
PC-1 PC-2 Server WiFi AP
                ↓
             Mobile
