import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="container animate-fade-in portfolio-page">
      <div className="portfolio-content">
        <div className="portfolio-image">
          <img src="/images/dominique_real.jpg" alt="Dominique" />
        </div>
        <div className="portfolio-text">
          <h1>Hi, I'm Dominique.</h1>
          <h2 className="subtitle">Mental Health Advocate</h2>
          
          <div className="bio">
            <p>
              Welcome to Self Love Subsistence. My journey has been driven by a profound fascination with human resilience and the practical application of therapeutic techniques in daily life.
            </p>
            <p>
              I created this platform because I believe that mental health resources should be accessible, beautiful, and deeply practical. Through my studies, I've seen firsthand how small, consistent acts of reflection—like journaling—can fundamentally alter our neural pathways and improve our emotional regulation.
            </p>
            <p>
              The journals you see here are designed with intention. They aren't just empty pages; they are tools for self-discovery, designed to reduce the friction of starting a mindfulness practice.
            </p>
          </div>

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Interested in my research, or simply want to chat about mental well-being?</p>
            <a href="mailto:hello@selflovesubsistence.com" className="btn-secondary mt-2">Email Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}
