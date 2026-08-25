import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import './Shop.css';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const journals = [
    { id: 1, title: 'The Self Love Journal', price: 8, image: '/images/journal_cover_1.jpg', color: 'Charcoal Black' },
    { id: 2, title: 'The Mindfulness Journal', price: 8, image: '/images/journal_cover_2.jpg', color: 'Charcoal Black' },
  ];

  const addToCart = (journal) => {
    setCart([...cart, journal]);
  };

  const handleCheckout = () => {
    const subject = encodeURIComponent('Inquiry: Purchasing a Journal');
    let body = 'Hello Dominique,\n\nI am interested in purchasing the following journal(s):\n\n';
    
    cart.forEach(item => {
      body += `- ${item.title} (${item.color})\n`;
    });
    
    const total = (cart.length * 8).toFixed(2);
    body += `\nTotal expected: $${total}\n\nPlease let me know the next steps for payment and shipping.\n\nThank you!`;
    
    window.location.href = `mailto:dsupreme2013@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    
    setIsSuccess(true);
    setCart([]);
  };

  if (isSuccess) {
    return (
      <div className="container mt-8 text-center animate-fade-in shop-success">
        <div className="success-icon">
          <Check size={48} />
        </div>
        <h1>Request Sent!</h1>
        <p>Your email client should have opened to send your request directly to Dominique.</p>
        <p>He will get back to you shortly with payment and shipping details.</p>
        <button className="btn-primary mt-4" onClick={() => setIsSuccess(false)}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in shop-page">
      <div className="shop-header">
        <h1>Shop Journals</h1>
        <p>Elevate your daily reflection with our premium paperback journals.</p>
      </div>

      <div className="shop-content">
        <div className="products-grid">
          {journals.map(journal => (
            <div key={journal.id} className="product-card">
              <img src={journal.image} alt={journal.title} />
              <div className="product-info">
                <h3>{journal.title}</h3>
                <p className="product-color">{journal.color} Edition</p>
                <p className="price">${journal.price.toFixed(2)}</p>
                <button className="btn-secondary w-100" onClick={() => addToCart(journal)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-sidebar">
          <h2>Your Cart <ShoppingBag size={20} className="inline-icon" /></h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <span>{item.title}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <span>Total:</span>
                <span>${(cart.length * 8).toFixed(2)}</span>
              </div>
              
              <button className="btn-primary w-100 mt-4" onClick={handleCheckout}>
                Email to Purchase
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
