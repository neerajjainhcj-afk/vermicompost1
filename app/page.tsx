'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', qty: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.product) {
      alert('Please fill in Name, Phone, and Product.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <main>
      <section className="hero">
        <div className="badge">100% Certified Organic</div>
        <h1>Premium Vermicompost<br />& Organic Manure</h1>
        <p>Supplying high-quality worm castings and organic fertilizers to farmers, exporters, and agri-businesses. Bulk supply available across India and for export.</p>
        <div className="hero-btns">
          <a href="#enquiry" className="btn">Request a Quote</a>
          <a href="#products" className="btn btn-outline">Our Products</a>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="container">
          <h2>Our Products</h2>
          <p className="subtitle">Naturally processed, nutrient-rich organic inputs for every crop</p>
          <div className="products-grid">
            {[
              { title: 'Vermicompost', desc: 'Worm-processed organic waste rich in NPK, micronutrients, and beneficial microbes. Ideal for all crops and soil types.', tags: ['Bulk Available', 'Export Ready'] },
              { title: 'Organic Cow Manure', desc: 'Well-composted farmyard manure, odour-free and pathogen-free. Improves soil texture and long-term fertility.', tags: ['Bulk Available', 'Certified'] },
              { title: 'Bio-Compost', desc: 'Aerobically decomposed plant matter enriched with trichoderma and bio-agents. Boosts root growth and disease resistance.', tags: ['Custom Blends', 'Organic'] },
            ].map((p) => (
              <div key={p.title} className="product-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div>{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="why-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p className="subtitle">Trusted by farmers and agri-exporters for quality and reliability</p>
          <div className="why-grid">
            {[
              { icon: '🌱', title: '100% Organic', desc: 'No chemicals, no shortcuts. Pure natural composting process from start to finish.' },
              { icon: '📦', title: 'Bulk Supply', desc: 'Available in 1kg, 5kg, 25kg, and loose bulk quantities for large orders.' },
              { icon: '🌍', title: 'Export Ready', desc: 'Proper documentation, phytosanitary certificates, and export packaging available.' },
              { icon: '✅', title: 'Lab Tested', desc: 'Every batch tested for NPK content, moisture, and microbial load for consistency.' },
            ].map((w) => (
              <div key={w.title} className="why-item">
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="form-section">
        <div className="container">
          <div className="form-wrap">
            <h3>Request a Quote</h3>
            <p>Fill in your details and we'll contact you with pricing within 24 hours.</p>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Product Interested In *</label>
                <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })}>
                  <option value="">Select product</option>
                  <option>Vermicompost</option>
                  <option>Organic Cow Manure</option>
                  <option>Bio-Compost</option>
                  <option>Custom Blend</option>
                  <option>Mixed / Not Sure</option>
                </select>
              </div>
              <div className="form-group">
                <label>Approximate Quantity</label>
                <select value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })}>
                  <option value="">Select quantity</option>
                  <option>Less than 100 kg</option>
                  <option>100 – 500 kg</option>
                  <option>500 kg – 1 Ton</option>
                  <option>1 – 5 Tons</option>
                  <option>5+ Tons (Bulk)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Message / Requirements</label>
              <textarea placeholder="Tell us about your use case, delivery location, or any special requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            {!submitted ? (
              <button className="submit-btn" onClick={handleSubmit}>Submit Enquiry</button>
            ) : (
              <div className="success">✓ Thank you! We will call or email you within 24 hours with a quote.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}