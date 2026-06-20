import { useState, useEffect } from "react";

const projects = [
  {
    id: "sentinel-soc-lab",
    tag: "8-Day Sprint • Cloud SIEM",
    title: "Microsoft Sentinel SOC Lab Setup",
    description:
      "Full 8-day Sentinel sprint: connector configuration, analytics rules, SSH brute-force investigation, malicious PowerShell detection via 4104 script block logging, and a flagship two-investigation incident report.",
    tools: ["Microsoft Sentinel", "Azure", "KQL", "MITRE ATT&CK"],
    impact: "Confirmed SSH brute-force compromise (88 fails/8 successes) — contained via UFW",
    repo: "sentinel-soc-lab-setup",
    status: "published",
  },
  {
    id: "ai-era-detection",
    tag: "4-Day Lab • Emerging Threats",
    title: "SOC AI-Era Detection Lab",
    description:
      "Detection engineering for AI-native threats: non-human identity (NHI) detection, prompt injection analysis, MCP threat modeling via STRIDE, and a correlated kill-chain incident report.",
    tools: ["STRIDE", "MITRE ATT&CK", "Splunk"],
    impact: "Correlated 4-day kill chain via shared IOC (185.220.101.34)",
    repo: "soc-ai-era-detection-lab",
    status: "published",
  },
  {
    id: "corpops-suite",
    tag: "8 Projects • Tier 1 Incident Response",
    title: "CorpOps Shell Suite",
    description:
      "Eight Tier 1 incident investigations across a fictional corporate environment: Nmap detection, WebSift, OSINT recon, user enumeration, threat intel enrichment, Whois spoofing detection, recon mapping, and phishing header analysis.",
    tools: ["Nmap", "Python", "OSINT", "SMTP Analysis"],
    impact: "8 fully documented SOC Tier 1 incident reports, each with LinkedIn + X writeups",
    repo: "CorpOps-Shell-Suite",
    status: "published",
  },
  {
    id: "wazuh-lab",
    tag: "Lab 1 • Detection Engineering Suite",
    title: "Wazuh Monitoring Lab",
    description:
      "First of a three-lab detection engineering suite (Wazuh → Ransomware Behavioral Detection → Cloud Misconfig Auto-Remediation), closing gaps not covered by the existing 28-day portfolio.",
    tools: ["Wazuh", "MITRE ATT&CK"],
    impact: "Baseline established — active build in progress",
    repo: "soc-detection-engineering-suite",
    status: "in-progress",
  },
  {
    id: "linux-triage",
    tag: "7-Week Build • Live Response",
    title: "Linux Triage Toolkit",
    description:
      "Modular Bash live-response collector for Linux incident response, built on a Sunday-only weekly cadence. Captures system info and user activity for forensic triage.",
    tools: ["Bash", "Linux", "Live Forensics"],
    impact: "2 of 7 weekly modules committed and version-controlled",
    repo: "linux-triage-toolkit",
    status: "in-progress",
  },
  {
    id: "sigma",
    tag: "Open Source Contribution",
    title: "SigmaHQ Detection Rule Contribution",
    description:
      "Verified contribution to the SigmaHQ open-source detection rules repository — the community standard for SIEM-agnostic detection logic.",
    tools: ["Sigma Rules", "Detection Engineering"],
    impact: "Verified merged contribution — issue #6057",
    repo: "SigmaHQ/sigma",
    status: "published",
  },
];

const foundationProjects = [
  {
    title: "SSH Brute-Force Detection",
    description: "Hydra-driven brute-force simulation detected and investigated via Splunk SPL, mapped to MITRE T1110.",
    tools: ["Hydra", "Splunk", "SPL", "T1110"],
  },
  {
    title: "Phishing Email Forensics",
    description: "Header and payload analysis on a phishing sample, tracing sender spoofing and malicious link infrastructure.",
    tools: ["Email Headers", "OSINT", "Forensics"],
  },
  {
    title: "DNS Tunneling Detection",
    description: "Identified covert data exfiltration over DNS queries using traffic pattern analysis.",
    tools: ["DNS", "Wireshark", "Traffic Analysis"],
  },
  {
    title: "Azure Sentinel Brute-Force Lab",
    description: "Early Sentinel build detecting brute-force authentication attempts, the foundation for the later 8-day Sentinel sprint.",
    tools: ["Azure Sentinel", "KQL"],
  },
  {
    title: "SOC IOC Tracker",
    description: "Centralized tracker for indicators of compromise across investigations, built for analyst handoff and reporting.",
    tools: ["IOC Management", "Documentation"],
  },
];

const skills = [
  { label: "SIEM", items: ["Splunk", "Microsoft Sentinel", "Wazuh"] },
  { label: "Network", items: ["Wireshark", "Nmap", "TCP/IP", "DNS"] },
  { label: "Platforms", items: ["Windows", "Linux (Ubuntu)", "macOS", "Active Directory"] },
  { label: "Frameworks", items: ["MITRE ATT&CK", "STRIDE", "Cyber Kill Chain"] },
  { label: "Scripting", items: ["Bash", "Python", "KQL", "SPL"] },
  { label: "Cloud", items: ["Azure", "AWS CloudTrail"] },
];

const statusBadge = {
  published: { label: "Live", color: "#00ff9d" },
  "in-progress": { label: "In Progress", color: "#ffd166" },
};

function TerminalLine({ text, delay = 0, color = "#00ff9d" }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        color,
        fontFamily: "'Courier New', monospace",
        fontSize: "0.85rem",
        lineHeight: 1.7,
      }}
    >
      {text}
    </div>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const badge = statusBadge[project.status];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(0,255,157,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(0,255,157,0.35)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "4px",
        padding: "28px 32px",
        cursor: "default",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: hovered ? "#00ff9d" : "transparent",
          transition: "background 0.25s ease",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "12px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.7rem", color: "#00ff9d", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {project.tag}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: badge.color }} />
          <span style={{ fontSize: "0.7rem", color: badge.color, fontFamily: "'Courier New', monospace" }}>{badge.label}</span>
        </div>
      </div>

      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f0f0f0", margin: "0 0 10px", fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.04em" }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.85rem", color: "#8a9bb0", lineHeight: 1.7, margin: "0 0 18px" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "18px", padding: "10px 14px", background: "rgba(0,255,157,0.05)", borderLeft: "2px solid rgba(0,255,157,0.3)", borderRadius: "0 3px 3px 0" }}>
        <span style={{ fontSize: "0.75rem", color: "#00ff9d", fontFamily: "'Courier New', monospace" }}>IMPACT →</span>
        <span style={{ fontSize: "0.78rem", color: "#b0c4d4" }}>{project.impact}</span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
        {project.tools.map((t) => (
          <span key={t} style={{ fontSize: "0.7rem", padding: "3px 9px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", color: "#6a7f8e", fontFamily: "'Courier New', monospace" }}>
            {t}
          </span>
        ))}
      </div>

      <a
        href={`https://github.com/WiLL75G/${project.repo}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "0.75rem", color: hovered ? "#00ff9d" : "#4a6070", fontFamily: "'Courier New', monospace", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
      >
        → github.com/WiLL75G/{project.repo}
      </a>
    </div>
  );
}

function FoundationCard({ item }) {
  return (
    <div
      style={{
        padding: "20px 22px",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#d0dde8", margin: "0 0 8px" }}>
        {item.title}
      </h4>
      <p style={{ fontSize: "0.78rem", color: "#6a7f8e", lineHeight: 1.6, margin: "0 0 14px" }}>
        {item.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {item.tools.map((t) => (
          <span key={t} style={{ fontSize: "0.65rem", padding: "2px 8px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", color: "#4a6070", fontFamily: "'Courier New', monospace" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#080c10", color: "#c8d8e8", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(0,255,157,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,157,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: "80px", paddingBottom: "72px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00ff9d", boxShadow: "0 0 10px #00ff9d" }} />
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.75rem", color: "#00ff9d", letterSpacing: "0.15em" }}>AVAILABLE FOR SOC ANALYST ROLES</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 6px", fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.03em", color: "#ffffff" }}>
              William Gokah
            </h1>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 28px", fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.03em", color: "#00ff9d" }}>
              SOC Analyst
            </h1>

            <p style={{ fontSize: "1rem", color: "#7a90a4", lineHeight: 1.8, maxWidth: "580px", margin: "0 0 12px" }}>
              Blue-team defender with 28+ documented portfolio projects spanning Splunk, Microsoft Sentinel, Wazuh, MITRE ATT&CK, and AI-era detection. ISC2 Certified in Cybersecurity (CC).
            </p>
            <p style={{ fontSize: "0.85rem", color: "#4a6070", lineHeight: 1.8, maxWidth: "580px", margin: "0 0 36px", fontFamily: "'Courier New', monospace" }}>
              @WilliamInCyber · Blue Team Notes
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://github.com/WiLL75G" target="_blank" rel="noopener noreferrer"
                style={{ padding: "11px 24px", background: "#00ff9d", color: "#080c10", fontFamily: "'Courier New', monospace", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", borderRadius: "3px", letterSpacing: "0.08em" }}>
                → GitHub
              </a>
              <a href="https://twitter.com/WilliamInCyber" target="_blank" rel="noopener noreferrer"
                style={{ padding: "11px 24px", border: "1px solid rgba(0,255,157,0.3)", color: "#00ff9d", fontFamily: "'Courier New', monospace", fontSize: "0.8rem", textDecoration: "none", borderRadius: "3px", letterSpacing: "0.08em" }}>
                → @WilliamInCyber
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", background: "rgba(255,255,255,0.04)", display: "flex", gap: "8px", alignItems: "center" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.72rem", color: "#4a6070", marginLeft: "8px" }}>william@socanalyst:~$</span>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <TerminalLine text="$ whoami" delay={200} color="#4a6070" />
              <TerminalLine text="→ William Gokah | SOC Analyst (Tier 1/2) | ISC2 CC" delay={500} />
              <TerminalLine text="" delay={700} />
              <TerminalLine text="$ cat focus.txt" delay={800} color="#4a6070" />
              <TerminalLine text="→ Threat Detection | SIEM Engineering | MITRE ATT&CK | AI-Era Defense" delay={1100} />
              <TerminalLine text="" delay={1300} />
              <TerminalLine text="$ ls portfolio/ | wc -l" delay={1400} color="#4a6070" />
              <TerminalLine text="→ 28+ documented projects" delay={1700} />
              <TerminalLine text="" delay={1900} />
              <TerminalLine text="$ git log --oneline SigmaHQ/sigma | grep merged" delay={2000} color="#4a6070" />
              <TerminalLine text="→ issue #6057 — verified contribution" delay={2300} />
              <TerminalLine text="" delay={2500} />
              <TerminalLine text="$ _" delay={2600} color="#00ff9d" />
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "2rem", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "0.06em" }}>
              FLAGSHIP PROJECTS
            </h2>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.7rem", color: "#00ff9d" }}>// of 28+ total</span>
          </div>
          <div style={{ display: "grid", gap: "20px" }}>
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        <section style={{ padding: "64px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "1.7rem", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "0.06em" }}>
              28-DAY FOUNDATION, BEST OF
            </h2>
          </div>
          <p style={{ fontSize: "0.82rem", color: "#6a7f8e", lineHeight: 1.7, margin: "0 0 28px", maxWidth: "600px" }}>
            Selected highlights from the original 28-day SOC career launch system, the foundation that everything above was built on.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
            {foundationProjects.map((item) => <FoundationCard key={item.title} item={item} />)}
          </div>
        </section>

        <section style={{ padding: "64px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "2rem", fontWeight: 900, color: "#ffffff", margin: "0 0 36px", letterSpacing: "0.06em" }}>
            TECHNICAL STACK
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {skills.map((s) => (
              <div key={s.label} style={{ padding: "20px 24px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.7rem", color: "#00ff9d", letterSpacing: "0.1em", marginBottom: "12px" }}>{s.label.toUpperCase()}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontSize: "0.78rem", color: "#8a9bb0" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "64px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "2rem", fontWeight: 900, color: "#ffffff", margin: "0 0 36px", letterSpacing: "0.06em" }}>
            CERTIFICATIONS
          </h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ padding: "16px 22px", border: "1px solid rgba(0,255,157,0.3)", borderRadius: "4px", background: "rgba(0,255,157,0.04)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#00ff9d" }}>ISC2 Certified in Cybersecurity (CC)</div>
              <div style={{ fontSize: "0.72rem", color: "#6a7f8e", fontFamily: "'Courier New', monospace", marginTop: "4px" }}>Earned</div>
            </div>
            <div style={{ padding: "16px 22px", border: "1px solid rgba(255,209,102,0.3)", borderRadius: "4px", background: "rgba(255,209,102,0.04)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffd166" }}>CompTIA Security+ (SY0-701)</div>
              <div style={{ fontSize: "0.72rem", color: "#6a7f8e", fontFamily: "'Courier New', monospace", marginTop: "4px" }}>In Progress — Target Aug 2026</div>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", fontSize: "2rem", fontWeight: 900, color: "#ffffff", margin: "0 0 36px", letterSpacing: "0.06em" }}>
            HOW I DOCUMENT WORK
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { n: "01", t: "Results, not tasks", d: "Every report quantifies impact — hosts affected, IOCs identified, compromise vectors confirmed." },
              { n: "02", t: "Show the actual work", d: "Full reports, queries, and PDFs live on GitHub under locked repo structures — never just summaries." },
              { n: "03", t: "Explain the reasoning", d: "Each project documents methodology, findings, and analyst insight — not just the outcome." },
              { n: "04", t: "Build in public", d: "Every project ships with a LinkedIn post and X thread documenting the investigation as it happens." },
            ].map((item) => (
              <div key={item.n} style={{ padding: "24px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "2rem", fontWeight: 900, color: "rgba(0,255,157,0.15)", lineHeight: 1, marginBottom: "12px" }}>{item.n}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#d0dde8", marginBottom: "8px" }}>{item.t}</div>
                <div style={{ fontSize: "0.8rem", color: "#6a7f8e", lineHeight: 1.7 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ padding: "40px 0 60px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.75rem", color: "#3a4f5e" }}>
            © 2026 William Gokah · SOC Portfolio
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="https://github.com/WiLL75G" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Courier New', monospace", fontSize: "0.75rem", color: "#3a4f5e", textDecoration: "none" }}>GitHub</a>
            <a href="https://twitter.com/WilliamInCyber" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Courier New', monospace", fontSize: "0.75rem", color: "#3a4f5e", textDecoration: "none" }}>Twitter</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
