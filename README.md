# 👾 William Gokah — SOC Analyst Portfolio

> **Blue-team defender** building hands-on experience in threat detection, incident response, and SIEM operations.
> 28+ documented projects. Every one shows the work, the reasoning, and the impact not just a description of it.

[![Twitter](https://img.shields.io/badge/@WilliamInCyber-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/WilliamInCyber)
[![GitHub](https://img.shields.io/badge/WiLL75G-181717?style=flat&logo=github&logoColor=white)](https://github.com/WiLL75G)
![Focus](https://img.shields.io/badge/Focus-SOC%20Tier%201%20%2F%20Tier%202-00ff9d?style=flat)
![Status](https://img.shields.io/badge/Status-Available%20for%20Roles-brightgreen?style=flat)

---

## 🔍 About

Aspiring SOC Analyst (Tier 1/2) targeting remote MSSP roles in the UK, UAE, and Australia. ISC2 Certified in Cybersecurity (CC), Security+ in progress (target Aug 2026).

Home lab: Splunk on macOS, UTM-based Kali/Ubuntu/Windows 11 lab, plus a Proxmox homelab on a repurposed ThinkPad. Public brand: **Blue Team Notes / @WilliamInCyber**.

---

## 🗂️ Flagship Projects

### 📁 [Microsoft Sentinel SOC Lab Setup](https://github.com/WiLL75G/sentinel-soc-lab-setup)
**8-Day Sprint · Cloud SIEM**

Full Sentinel sprint covering connector configuration, analytics rule migration to the unified Defender portal, an SSH brute-force investigation, malicious PowerShell detection via 4104 script block logging, and a flagship two-investigation PDF incident report.

| | |
|---|---|
| **Tools** | Microsoft Sentinel · Azure · KQL · MITRE ATT&CK |
| **Impact** | Confirmed SSH brute-force compromise (88 fails / 8 successes) contained via UFW |
| **Deliverable** | 8-day repo, flagship PDF report, job-ready package (resume + 15-MSSP outreach tracker) |

---

### 📁 [SOC AI-Era Detection Lab](https://github.com/WiLL75G/soc-ai-era-detection-lab)
**4-Day Lab · Emerging Threats**

Detection engineering for AI-native threats: non-human identity (NHI) detection, prompt injection analysis, MCP threat modeling via STRIDE, and a correlated kill-chain incident report tying all four days together.

| | |
|---|---|
| **Tools** | STRIDE · MITRE ATT&CK · Splunk |
| **Impact** | Correlated a 4-day kill chain via a shared IOC (185.220.101.34) |
| **Deliverable** | Full 4-day repo with correlated incident report |

---

### 📁 [CorpOps Shell Suite](https://github.com/WiLL75G/CorpOps-Shell-Suite)
**8 Projects · Tier 1 Incident Response**

Eight Tier 1 incident investigations across a fictional Nexus Corp environment: Nmap detection, WebSift, Tookie-OSINT, user enumeration, IP threat intel enrichment, Whois spoofing detection, EternalView recon mapping, and Python SMTP phishing header analysis.

| | |
|---|---|
| **Tools** | Nmap · Python · OSINT · SMTP Header Analysis |
| **Impact** | 8 fully documented SOC Tier 1 incident reports, each with a LinkedIn post + X 5-thread |
| **Deliverable** | Locked incident-report README per project |

---

### 📁 [Wazuh Monitoring Lab](https://github.com/WiLL75G/soc-detection-engineering-suite) *(In Progress)*
**Lab 1 of 3 · Detection Engineering Suite**

First lab in a three-part suite (Wazuh → Ransomware Behavioral Detection → Cloud Misconfig Auto-Remediation) scoped specifically to close gaps not covered by the existing 28-day portfolio.

| | |
|---|---|
| **Tools** | Wazuh · MITRE ATT&CK |
| **Impact** | Baseline established — active build |
| **Deliverable** | Lab 1 README in progress |

---

### 📁 [Linux Triage Toolkit](https://github.com/WiLL75G/linux-triage-toolkit) *(In Progress)*
**7-Week Build · Live Response**

Modular Bash live-response collector for Linux incident response, built on a Sunday-only weekly cadence.

| | |
|---|---|
| **Tools** | Bash · Linux · Live Forensics |
| **Impact** | 2 of 7 weekly modules committed (system info, users) |
| **Deliverable** | Modular collector scripts, weekly commits |

---

### 📁 [SigmaHQ Detection Rule Contribution](https://github.com/SigmaHQ/sigma)
**Open Source Contribution**

Verified merged contribution to SigmaHQ the community standard for SIEM-agnostic detection logic.

| | |
|---|---|
| **Reference** | Issue #6057 |
| **Impact** | Verified, merged, publicly attributable open-source contribution |

---

## 🌱 28-Day Foundation, Best of

Selected highlights from the original 28-day SOC career launch system, the foundation everything above was built on.

- **SSH Brute-Force Detection** Hydra-driven brute-force simulation detected via Splunk SPL, mapped to MITRE T1110
- **Phishing Email Forensics** Header and payload analysis tracing sender spoofing and malicious link infrastructure
- **DNS Tunneling Detection** Covert data exfiltration over DNS identified through traffic pattern analysis
- **Azure Sentinel Brute-Force Lab** — Early Sentinel detection build, the foundation for the later 8-day Sentinel sprint
- **SOC IOC Tracker** — Centralized IOC tracker built for analyst handoff and reporting

---

## 🛠️ Technical Stack

| Domain | Tools & Technologies |
|--------|---------------------|
| **SIEM** | Splunk, Microsoft Sentinel, Wazuh |
| **Network Analysis** | Wireshark, Nmap, TCP/IP, DNS |
| **Platforms** | Windows, Linux (Ubuntu), macOS, Active Directory |
| **Frameworks** | MITRE ATT&CK, STRIDE, Cyber Kill Chain |
| **Scripting** | Bash, Python, KQL, SPL |
| **Cloud** | Azure, AWS CloudTrail |

---

## 🎓 Certifications

- **ISC2 Certified in Cybersecurity (CC)** Earned
- **CompTIA Security+ (SY0-701)** In Progress, target August 2026

---

## 📐 How I Document Work

Every incident report in this portfolio follows a locked structure:

```
Title → Incident Summary → Executive Summary → Affected System
→ Investigation Methodology → IOCs → MITRE ATT&CK Mapping
→ SOC Analyst Findings → SOC Analyst Response → Analyst Insight
→ Learning Outcome → Repository Structure → Conclusion
```

Four standing principles:

1. **Results, not tasks** every report quantifies impact, not just activity
2. **Show the actual work** full reports, queries, and PDFs live in the repo
3. **Explain the reasoning** methodology and analyst insight, not just outcomes
4. **Build in public** every project ships with a LinkedIn post + X thread

---

## 📊 Currently Working On

- [ ] Wazuh Monitoring Lab (Lab 1 of soc-detection-engineering-suite)
- [ ] Linux Triage Toolkit weekly module builds
- [ ] PowerShell SOC Detection Suite (5-day scope, awaiting execution)
- [ ] SOC Gap-Closer Suite (false-positive tuning, phishing triage at volume, playbooks)
- [ ] "Recon for Defenders" content series completed, archived

---

## 🤝 Connect

- **Twitter / X**: [@WilliamInCyber](https://twitter.com/WilliamInCyber)
- **GitHub**: [WiLL75G](https://github.com/WiLL75G)
- Open to **SOC Analyst Tier 1 / Tier 2** roles remote, UK / UAE / Australia

---

*Portfolio updated continuously documented as I build.*
