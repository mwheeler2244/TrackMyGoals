import React from "react";

export default function Home() {
  return (
    <main className="mainContainer">
      <div className="heroContent">
        <h1>Turn Dreams Into Goals</h1>
        <p>Set, track, and achieve your goals with ease.</p>
        <a href="/dashboard" className="ctaButton">
          Start Tracking Now
        </a>
      </div>

      <section className="features">
        <h2>Features</h2>
        <div className="featureList">
          <div className="featureItem">
            <h3>Track Your Goals</h3>
            <p>Set clear objectives and monitor your progress.</p>
          </div>
          <div className="featureItem">
            <h3>Organize By Category</h3>
            <p>Group your goals into personal, work, fitness, and more.</p>
          </div>
          <div className="featureItem">
            <h3>Stay Motivated</h3>
            <p>Receive motivational tips and progress insights.</p>
          </div>
          <div className="featureItem">
            <h3>Update Goals</h3>
            <p>Check off completed goals!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
