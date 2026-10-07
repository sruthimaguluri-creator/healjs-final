import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("HEALTHY");
  const [message, setMessage] = useState("System is running normally");

  const [logs, setLogs] = useState([
    "System initialized successfully",
    "HealJS Runtime started",
  ]);

  const [activeError, setActiveError] = useState(null);

  const simulateFailure = (type) => {
    setActiveError(type);
    setStatus("DETECTED");
    setMessage(`${type} detected`);

    setLogs((old) => [
      ...old,
      `🚨 ${type} detected`,
    ]);

    setTimeout(() => {
      setStatus("DIAGNOSED");
      setMessage(`Root cause identified: ${type}`);

      setLogs((old) => [
        ...old,
        "🧠 Root cause diagnosed",
      ]);
    }, 1000);

    setTimeout(() => {
      setStatus("RECOVERING");
      setMessage("Recovery strategy applied");

      setLogs((old) => [
        ...old,
        "🔧 Recovery strategy executed",
      ]);
    }, 2000);

    setTimeout(() => {
      setStatus("VERIFIED");
      setMessage("Application state restored successfully");

      setLogs((old) => [
        ...old,
        "✅ Recovery verified",
      ]);
    }, 3000);

    setTimeout(() => {
      setStatus("HEALTHY");
      setMessage("Application is healthy again");
      setActiveError(null);

      setLogs((old) => [
        ...old,
        "🟢 System returned to healthy state",
      ]);
    }, 4000);
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">🛡️ HealJS</div>

        <h1>Self-Healing Frontend Runtime</h1>

        <p className="flow">
          Detect → Diagnose → Recover → Verify
        </p>
      </header>


      {/* ABOUT */}
      <section className="about-section">

        <h2>🛡️ What is HealJS?</h2>

        <p>
          <strong>HealJS is a self-healing frontend runtime</strong>{" "}
          that detects, diagnoses, recovers from, and verifies
          frontend failures without requiring a full page reload.
        </p>

        <p>
          It handles controlled scenarios such as runtime errors,
          API failures, state inconsistencies, race conditions,
          and invalid data.
        </p>

        <p>
          After detecting a failure, it identifies the cause,
          applies a suitable recovery strategy, and checks
          application invariants to verify that the state is
          consistent again.
        </p>

        <p>
          Our prototype demonstrates this process interactively
          through failure simulation, recovery pipeline,
          diagnostic logs, and recovery certificates.
        </p>

      </section>


      {/* MANAGEENGINE */}
      <section className="incident-section">

        <div className="incident-content">

          <div className="incident-icon">🏢</div>

          <div>
            <h2>ManageEngine</h2>

            <h3>Best IT Incident Management</h3>

            <p>
              Log and handle IT incidents easily with
              multimodal ticket creation and custom workflows.
            </p>
          </div>

        </div>

      </section>


      {/* STATUS */}
      <section className="status-card">

        <div className="status-title">
          <span
            className={
              status === "HEALTHY"
                ? "dot green"
                : "dot red"
            }
          ></span>

          SYSTEM STATUS
        </div>

        <h2>{status}</h2>

        <p>{message}</p>

      </section>


      {/* FAILURE SIMULATION */}
      <section className="demo-section">

        <h2>🧪 Failure Simulation</h2>

        <p>
          Intentionally create frontend failures and watch
          HealJS recover automatically.
        </p>

        <div className="buttons">

          <button onClick={() => simulateFailure("Runtime Error")}>
            ⚠️ Runtime Error
          </button>

          <button onClick={() => simulateFailure("API Failure")}>
            🌐 API Failure
          </button>

          <button onClick={() => simulateFailure("State Inconsistency")}>
            💥 Corrupt State
          </button>

          <button onClick={() => simulateFailure("Race Condition")}>
            🔄 Race Condition
          </button>

          <button onClick={() => simulateFailure("Invalid Data")}>
            📦 Invalid Data
          </button>

          <button onClick={() => simulateFailure("Component Failure")}>
            🧩 Component Failure
          </button>

        </div>

      </section>


      {/* PIPELINE */}
      <section className="pipeline">

        <h2>🔧 Self-Healing Pipeline</h2>

        <div className="pipeline-box">

          <div className={status !== "HEALTHY" ? "step active" : "step"}>
            <span>1</span>
            <b>Detect</b>
            <small>Failure Detection</small>
          </div>

          <div className="arrow">→</div>

          <div
            className={
              ["DIAGNOSED", "RECOVERING", "VERIFIED"].includes(status)
                ? "step active"
                : "step"
            }
          >
            <span>2</span>
            <b>Diagnose</b>
            <small>Root Cause</small>
          </div>

          <div className="arrow">→</div>

          <div
            className={
              ["RECOVERING", "VERIFIED"].includes(status)
                ? "step active"
                : "step"
            }
          >
            <span>3</span>
            <b>Recover</b>
            <small>Restore State</small>
          </div>

          <div className="arrow">→</div>

          <div className={status === "VERIFIED" ? "step active" : "step"}>
            <span>4</span>
            <b>Verify</b>
            <small>Check Integrity</small>
          </div>

        </div>

      </section>


      {/* CURRENT ERROR */}
      {activeError && (
        <section className="error-card">

          <h2>🚨 Current Failure</h2>

          <p>
            <strong>Error Type:</strong> {activeError}
          </p>

          <p>
            <strong>Recovery:</strong> Automatic recovery strategy
          </p>

          <p>
            <strong>Page Reload:</strong> ❌ Not required
          </p>

          <p>
            <strong>State Preservation:</strong> ✅ Enabled
          </p>

        </section>
      )}


      {/* STATE INTEGRITY */}
      <section className="integrity">

        <h2>🛡️ State Integrity Monitor</h2>

        <div className="integrity-grid">

          <div>
            <span>Cart Items</span>
            <strong>3</strong>
          </div>

          <div>
            <span>Expected Total</span>
            <strong>₹300</strong>
          </div>

          <div>
            <span>Current Total</span>
            <strong>₹300</strong>
          </div>

          <div>
            <span>Invariant</span>
            <strong className="success">PASSED ✓</strong>
          </div>

        </div>

      </section>


      {/* LOGS */}
      <section className="logs">

        <h2>📋 Diagnostic Log</h2>

        <div className="log-box">

          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}

        </div>

      </section>


      {/* CERTIFICATE */}
      <section className="certificate">

        <h2>📜 Recovery Certificate</h2>

        <div className="certificate-box">

          <p>
            <strong>Recovery Status:</strong>{" "}
            <span>VERIFIED ✓</span>
          </p>

          <p>
            <strong>Error:</strong>{" "}
            {activeError || "None"}
          </p>

          <p>
            <strong>Root Cause:</strong>{" "}
            Automatically diagnosed
          </p>

          <p>
            <strong>Recovery:</strong>{" "}
            State restoration
          </p>

          <p>
            <strong>Invariant:</strong> PASSED
          </p>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section className="architecture">

        <h2>🏗️ HealJS Architecture</h2>

        <div className="architecture-flow">

          <div>Frontend Application</div>
          <span>↓</span>

          <div>Error Detector</div>
          <span>↓</span>

          <div>Diagnostic Engine</div>
          <span>↓</span>

          <div>Recovery Manager</div>
          <span>↓</span>

          <div>Invariant Checker</div>
          <span>↓</span>

          <div className="healthy">
            Healthy Application ✓
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <p>
          🛡️ HealJS — Detect. Diagnose. Recover. Verify.
        </p>

        <small>
          Self-Healing Frontend Runtime Prototype
        </small>

      </footer>

    </div>
  );
}

export default App;