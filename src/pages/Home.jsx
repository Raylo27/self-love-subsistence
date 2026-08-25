import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Nurture Your Mind, <br /> Elevate Your Life.</h1>
            <p>Self Love Subsistence is dedicated to prioritizing your mental well-being. Explore our curated paperback journals and daily mental health insights.</p>
            <div className="hero-actions">
              <Link to="/shop" className="btn-primary">Shop Journals</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-journals">
        <div className="container">
          <div className="section-header">
            <h2>Featured Journals</h2>
            <Link to="/shop" className="view-all-link">View All <ArrowRight size={16} /></Link>
          </div>
          
          <div className="journal-grid" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="journal-card" style={{ maxWidth: '400px', width: '100%' }}>
              <div className="journal-image">
                <img src="/images/journal_cover_1.jpg" alt="The Self Love Journal" />
              </div>
              <div className="journal-info">
                <h3>The Self Love Journal</h3>
                <p className="price">$8.00</p>
                <Link to="/shop" className="btn-primary w-100">View in Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tips-teaser">
        <div className="container tips-teaser-container">
          <div className="tips-content">
            <h2>Daily Mental Health Insights</h2>
            <p>Practical strategies and grounded advice for managing anxiety, navigating stress, and cultivating self-love.</p>
            <Link to="/tips" className="btn-secondary mt-4">Read the Tips</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
