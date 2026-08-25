import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Self Love Subsistence</h3>
          <p>Prioritizing mental well-being, one tip and journal at a time.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop Journals</Link>
          <Link to="/tips">Mental Health Tips</Link>
          <Link to="/portfolio">Our Team</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Self Love Subsistence. All rights reserved.</p>
      </div>
    </footer>
  );
}
