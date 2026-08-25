import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Self Love Subsistence
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/tips" onClick={() => setIsOpen(false)}>Mental Health Tips</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Team</Link>
        </div>

        <div className="navbar-actions">
          <button className="cart-btn" aria-label="Cart">
            <ShoppingBag size={24} />
            <span className="cart-badge">0</span>
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
