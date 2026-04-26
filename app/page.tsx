'use client';
import { useState } from 'react';

const features = [
  { icon: '🌿', title: '100% Organic & Chemical-Free', desc: 'Every batch is free from synthetic chemicals, pesticides, and harmful additives — pure nature, nothing else.' },
  { icon: '🌱', title: 'Improves Soil Fertility Naturally', desc: 'Rich in humus and beneficial microbes that rebuild depleted soil and restore its natural balance over time.' },
  { icon: '🌾', title: 'Enhances Crop Yield & Quality', desc: 'Farmers report up to 30% better yields with visibly healthier, more nutritious produce season after season.' },
  { icon: '♻️', title: 'Eco-Friendly & Sustainable', desc: 'Produced through zero-waste composting processes that give back to the earth instead of depleting it.' },
  { icon: '✅', title: 'Certified Quality Assurance', desc: 'Lab-tested for NPK content, moisture, and microbial load. Every bag meets strict organic standards before dispatch.' },
  { icon: '👨‍🌾', title: 'Trusted by Thousands of Farmers', desc: 'Over 10,000 farmers across India rely on our products for consistent, proven results year after year.' },
];

const certs = [
  { icon: '🏅', name: 'Organic Certification', body: 'NPOP / NOP', desc: 'Certified under National Programme for Organic Production' },
  { icon: '🔬', name: 'ISO Certified', body: 'ISO 9001:2015', desc: 'International standard for quality management systems' },
  { icon: '📋', name: 'FCO Certified', body: 'Govt. of India', desc: 'Compliant with Fertiliser Control Order regulations' },
  { icon: '🏭', name: 'GMP Certified', body: 'Good Mfg. Practice', desc: 'Manufactured under strict good manufacturing practices' },
  { icon: '🧪', name: 'Lab Quality Tested', body: 'NABL Lab', desc: 'Every batch tested at NABL accredited laboratories' },
  { icon: '🌍', name: 'Eco-Friendly Standards', body: 'Zero Waste', desc: 'Meets international eco-friendly production benchmarks' },
];

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', qty: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [certHovered, setCertHovered] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.product) {
      alert('Please fill in Name, Phone, and Product.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;500&display=swap');

        /* WHY SECTION */
        .why-section {
          position: relative;
          padding: 6rem 2rem;
          background: #0d2b0d;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
        .why-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,109,17,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 30%, rgba(107,76,42,0.15) 0%, transparent 60%);
        }
        .leaf-pattern {
          position: absolute; inset: 0; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cellipse cx='50' cy='30' rx='12' ry='25' fill='%23fff' transform='rotate(-30 50 30)'/%3E%3Cellipse cx='70' cy='70' rx='10' ry='20' fill='%23fff' transform='rotate(20 70 70)'/%3E%3Cellipse cx='20' cy='75' rx='8' ry='18' fill='%23fff' transform='rotate(-15 20 75)'/%3E%3C/svg%3E");
        }
        .why-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .why-header { text-align: center; margin-bottom: 4rem; }
        .why-eyebrow {
          display: inline-block; font-size: 0.75rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: #a8d878;
          border: 1px solid rgba(168,216,120,0.3); padding: 0.35rem 1.2rem;
          border-radius: 20px; margin-bottom: 1.5rem;
        }
        .why-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 700;
          color: #f5f0e8; line-height: 1.15; margin-bottom: 1.2rem;
        }
        .why-title span { color: #a8d878; }
        .why-subtitle {
          font-size: 1rem; color: rgba(245,240,232,0.6);
          max-width: 600px; margin: 0 auto; line-height: 1.8; font-weight: 300;
        }
        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem; margin-bottom: 3.5rem;
        }
        .feature-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(168,216,120,0.12);
          border-radius: 16px; padding: 2rem 1.75rem;
          cursor: default; transition: all 0.35s ease;
          position: relative; overflow: hidden;
        }
        .feature-card.hovered {
          border-color: rgba(168,216,120,0.4);
          transform: translateY(-6px);
          background: rgba(255,255,255,0.07);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(168,216,120,0.2);
        }
        .feature-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
        .feature-title {
          font-family: 'Cormorant Garamond', serif; font-size: 1.25rem;
          font-weight: 600; color: #f5f0e8; margin-bottom: 0.6rem;
        }
        .feature-desc { font-size: 0.875rem; color: rgba(245,240,232,0.55); line-height: 1.75; font-weight: 300; }
        .why-cta { text-align: center; }
        .cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #3B6D11, #5a9e1a);
          color: #fff; padding: 1rem 2.5rem; border-radius: 4px;
          font-family: 'Jost', sans-serif; font-size: 0.95rem; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
          transition: all 0.3s ease; box-shadow: 0 8px 30px rgba(59,109,17,0.4);
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(59,109,17,0.5); }
        .curved-divider { display: block; width: 100%; overflow: hidden; line-height: 0; background: #0d2b0d; }

        /* CERT SECTION */
        .cert-section { padding: 5rem 2rem; background: #faf7f0; font-family: 'Jost', sans-serif; }
        .cert-container { max-width: 1100px; margin: 0 auto; }
        .cert-header { text-align: center; margin-bottom: 3.5rem; }
        .cert-eyebrow {
          display: inline-block; font-size: 0.75rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: #3B6D11;
          border: 1px solid rgba(59,109,17,0.25); padding: 0.35rem 1.2rem;
          border-radius: 20px; margin-bottom: 1.2rem;
        }
        .cert-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 700;
          color: #1a3a0a; margin-bottom: 0.8rem;
        }
        .cert-subtitle { font-size: 0.95rem; color: #666; max-width: 560px; margin: 0 auto; line-height: 1.8; font-weight: 300; }
        .certs-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem; margin-bottom: 3rem;
        }
        .cert-card {
          background: #fff; border: 1px solid #e8e0d0; border-radius: 12px;
          padding: 1.75rem 1.5rem; text-align: center;
          transition: all 0.3s ease; position: relative; overflow: hidden; cursor: default;
        }
        .cert-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #c9a227, #e8c84a, #c9a227);
          transform: scaleX(0); transition: transform 0.3s ease;
        }
        .cert-card.hovered { transform: translateY(-5px); border-color: #c9a227; box-shadow: 0 16px 48px rgba(201,162,39,0.15); }
        .cert-card.hovered::after { transform: scaleX(1); }
        .cert-badge {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, #f5f0e0, #ede5c8);
          border: 2px solid #c9a227; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem; font-size: 1.6rem;
          box-shadow: 0 4px 16px rgba(201,162,39,0.2);
        }
        .cert-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 700; color: #1a3a0a; margin-bottom: 0.25rem; }
        .cert-body { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em; color: #c9a227; text-transform: uppercase; margin-bottom: 0.5rem; }
        .cert-desc { font-size: 0.82rem; color: #888; line-height: 1.6; font-weight: 300; }
        .trust-statement {
          text-align: center; padding: 2rem;
          background: linear-gradient(135deg, #1a3a0a, #2d5a14);
          border-radius: 12px; color: #fff;
        }
        .trust-statement p { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.3rem; }
        .trust-statement span { font-size: 0.85rem; opacity: 0.7; font-weight: 300; letter-spacing: 0.05em; }
      `}</style>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="badge">100% Certified Organic</div>
          <h1>Premium Vermicompost<br />& Organic Manure</h1>
          <p>Supplying high-quality worm castings and organic fertilizers to farmers, exporters, and agri-businesses. Bulk supply available across India and for export.</p>
          <div className="hero-btns">
            <a href="#enquiry" className="btn">Request a Quote</a>
            <a href="#products" className="btn btn-outline">Our Products</a>
          </div>
        </section>

        {/* PRODUCTS */}
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

        {/* WHY FARMERS TRUST US */}
        <section id="why" className="why-section">
          <div className="why-bg" />
          <div className="leaf-pattern" />
          <div className="why-container">
            <div className="why-header">
              <div className="why-eyebrow">Our Promise to You</div>
              <h2 className="why-title">Why Farmers <span>Trust Us</span></h2>
              <p className="why-subtitle">Delivering Pure, Sustainable, and High-Performance Organic Solutions for Healthier Soil and Better Harvests.</p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`feature-card ${hovered === i ? 'hovered' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="feature-icon">{f.icon}</span>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="why-cta">
              <a href="#enquiry" className="cta-btn">Discover Our Difference</a>
            </div>
          </div>
        </section>

        {/* CURVED DIVIDER */}
        <div className="curved-divider">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '60px', width: '100%' }}>
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#faf7f0" />
          </svg>
        </div>

        {/* CERTIFICATIONS */}
        <section className="cert-section">
          <div className="cert-container">
            <div className="cert-header">
              <div className="cert-eyebrow">Verified & Trusted</div>
              <h2 className="cert-title">Certified for Quality and Trust</h2>
              <p className="cert-subtitle">Our products meet the highest standards of organic integrity, safety, and sustainability.</p>
            </div>
            <div className="certs-grid">
              {certs.map((c, i) => (
                <div
                  key={i}
                  className={`cert-card ${certHovered === i ? 'hovered' : ''}`}
                  onMouseEnter={() => setCertHovered(i)}
                  onMouseLeave={() => setCertHovered(null)}
                >
                  <div className="cert-badge">{c.icon}</div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-body">{c.body}</div>
                  <div className="cert-desc">{c.desc}</div>
                </div>
              ))}
            </div>
            <div className="trust-statement">
              <p>Committed to Excellence, Backed by Certification.</p>
              <span>Every product we ship carries the weight of our promise — pure, safe, and verified.</span>
            </div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section id="enquiry" className="form-section">
          <div className="container">
            <div className="form-wrap">
              <h3>Request a Quote</h3>
              <p>Fill in your details and we will contact you with pricing within 24 hours.</p>
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
    </>
  );
}
