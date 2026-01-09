import "../styles/App.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Blockchain Micro-Payments<span className="gradient-text"> CRYPLET</span>
        </h1>
        <p className="hero-subtitle">Secure • Decentralized • Lightning Fast</p>
        <div className="hero-stats">
          <div>
            <span>10M+</span>
            Transactions
          </div>
          <div>
            <span>0.001s</span>
            Speed
          </div>
          <div>
            <span>99.99%</span>
            Uptime
          </div>
        </div>
        <div className="buttons">
          <button className="btn primary">Launch DApp</button>
          <button className="btn secondary">Whitepaper</button>
        </div>
      </div>
      <div className="scroll-indicator">↓</div>
    </section>
  );
}

export default Hero;
