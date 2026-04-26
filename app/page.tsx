'use client';
import { useState } from 'react';

const products = [
  {
    name: 'Vermi Compost', tagline: '100% Organic',
    desc: 'Rich in organic matter and essential nutrients. Improves soil structure, water retention and root development.',
    color: '#3B6D11', lightColor: '#EAF3DE', icon: '🪱',
    benefits: ['Improves Soil Health', 'Enhances Nutrient Uptake', 'Boosts Plant Growth'],
    bestFor: 'All Crops, Vegetables, Fruits & Gardens',
  },
  {
    name: 'Cow Manure', tagline: '100% Natural',
    desc: 'A traditional organic manure packed with nutrients. Improves soil fertility and supports healthy crop growth.',
    color: '#7a4f1e', lightColor: '#f5ede0', icon: '🐄',
    benefits: ['Adds Organic Matter', 'Improves Soil Fertility', 'Promotes Root Growth'],
    bestFor: 'Field Crops, Cereals, Pulses & Flowering Plants',
  },
  {
    name: 'Neem Khali', tagline: '100% Organic',
    desc: 'Natural source of nitrogen and organic compounds. Helps control pests and improves soil health naturally.',
    color: '#4a7c1f', lightColor: '#eef5e0', icon: '🌿',
    benefits: ['Natural Pest Repellent', 'Enhances Soil Microbes', 'Supports Green Growth'],
    bestFor: 'Vegetables, Fruits, Spices & Cash Crops',
  },
  {
    name: 'Poultry Manure', tagline: '100% Natural',
    desc: 'High in nitrogen and essential nutrients. Promotes vigorous growth and significantly higher yields.',
    color: '#8B5E3C', lightColor: '#f7ede2', icon: '🐓',
    benefits: ['Rich in Nitrogen', 'Boosts Plant Growth', 'Increases Yield'],
    bestFor: 'Leafy Vegetables, Maize, Sugarcane & All Crops',
  },
];

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

function ProductBagSVG({ color, lightColor, icon, name }: { color: string; lightColor: string; icon: string; name: string }) {
  return (
    <svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '150px', margin: '0 auto', display: 'block' }}>
      <rect x="20" y="30" width="120" height="150" rx="12" fill={lightColor} stroke={color} strokeWidth="2" />
      <rect x="20" y="30" width="120" height="22" rx="10" fill={color} />
      <rect x="65" y="22" width="30" height="16" rx="4" fill={color} />
      <rect x="30" y="62" width="100" height="90" rx="8" fill="white" opacity="0.7" />
      <circle cx="80" cy="90" r="24" fill={color} opacity="0.15" />
      <text x="80" y="98" textAnchor="middle" fontSize="26">{icon}</text>
      <text x="80" y="128" textAnchor="middle" fontSize="10" fontWeight="700" fill={color} fontFamily="Georgia, serif">{name.toUpperCase()}</text>
      <ellipse cx="80" cy="182" rx="50" ry="10" fill={color} opacity="0.12" />
      <ellipse cx="80" cy="178" rx="40" ry="8" fill={color} opacity="0.18" />
      <circle cx="130" cy="55" r="16" fill={color} />
      <text x="130" y="52" textAnchor="middle" fontSize="7" fill="white" fontWeight="600">100%</text>
      <text x="130" y="62" textAnchor="middle" fontSize="6" fill="white">ORGANIC</text>
    </svg>
  );
}

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', qty: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [prodHovered, setProdHovered] = useState<number | null>(null);
  const [whyHovered, setWhyHovered] = useState<number | null>(null);
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
        .prod-section { background: linear-gradient(180deg, #f5f0e8 0%, #fff 100%); padding: 5rem 2rem; font-family: 'Jost', sans-serif; }
        .prod-header { text-align: center; margin-bottom: 1rem; }
        .prod-eyebrow { display: flex; align-items: center; justify-content: center; gap: 0.75rem; font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; color: #3B6D11; margin-bottom: 1rem; }
        .prod-eyebrow::before, .prod-eyebrow::after { content: ''; width: 40px; height: 1px; background: #3B6D11; opacity: 0.4; }
        .prod-main-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: #1a3a0a; line-height: 1.1; margin-bottom: 0.5rem; }
        .prod-main-title span { color: #3B6D11; }
        .prod-tagline { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: #7a4f1e; font-weight: 600; margin-bottom: 1rem; }
        .prod-divider { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1.2rem; }
        .prod-divider::before, .prod-divider::after { content: ''; width: 60px; height: 1px; background: #3B6D11; opacity: 0.25; }
        .prod-desc { font-size: 0.95rem; color: #666; max-width: 520px; margin: 0 auto 3rem; line-height: 1.8; font-weight: 300; }
        .prod-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.5rem; max-width: 1100px; margin: 0 auto 3rem; }
        .prod-card { background: #fff; border-radius: 16px; border: 1px solid #e8e0d0; overflow: hidden; transition: all 0.35s ease; cursor: default; }
        .prod-card.hovered { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(0,0,0,0.12); }
        .prod-card-top { padding: 1.5rem 1.5rem 0.5rem; text-align: center; }
        .prod-card-name { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; }
        .prod-card-desc { font-size: 0.82rem; color: #777; line-height: 1.65; font-weight: 300; margin-bottom: 1rem; }
        .prod-benefits { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; padding: 0 1rem 1rem; }
        .prod-benefit-tag { font-size: 0.72rem; padding: 0.25rem 0.6rem; border-radius: 20px; font-weight: 500; }
        .prod-best-for { margin: 0 1rem 1rem; padding: 0.6rem 0.8rem; border-radius: 8px; font-size: 0.78rem; line-height: 1.5; }
        .prod-best-for strong { display: block; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.2rem; }
        .prod-strip { max-width: 1100px; margin: 0 auto; background: #1a3a0a; border-radius: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); overflow: hidden; }
        .strip-item { padding: 1.25rem 1rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.1); color: #fff; }
        .strip-item:last-child { border-right: none; }
        .strip-icon { font-size: 1.5rem; margin-bottom: 0.4rem; }
        .strip-title { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #a8d878; margin-bottom: 0.2rem; }
        .strip-sub { font-size: 0.75rem; color: rgba(255,255,255,0.55); font-weight: 300; }
        .why-section { position: relative; padding: 6rem 2rem; background: #0d2b0d; overflow: hidden; font-family: 'Jost', sans-serif; }
        .why-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,109,17,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(107,76,42,0.15) 0%, transparent 60%); }
        .leaf-pattern { position: absolute; inset: 0; opacity: 0.04; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cellipse cx='50' cy='30' rx='12' ry='25' fill='%23fff' transform='rotate(-30 50 30)'/%3E%3C/svg%3E"); }
        .why-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .why-header { text-align: center; margin-bottom: 4rem; }
        .why-eyebrow { display: inline-block; font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; color: #a8d878; border: 1px solid rgba(168,216,120,0.3); padding: 0.35rem 1.2rem; border-radius: 20px; margin-bottom: 1.5rem; }
        .why-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 700; color: #f5f0e8; line-height: 1.15; margin-bottom: 1.2rem; }
        .why-title span { color: #a8d878; }
        .why-subtitle { font-size: 1rem; color: rgba(245,240,232,0.6); max-width: 600px; margin: 0 auto; line-height: 1.8; font-weight: 300; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3.5rem; }
        .feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(168,216,120,0.12); border-radius: 16px; padding: 2rem 1.75rem; cursor: default; transition: all 0.35s ease; }
        .feature-card.hovered { border-color: rgba(168,216,120,0.4); transform: translateY(-6px); background: rgba(255,255,255,0.07); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .feature-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
        .feature-title { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 600; color: #f5f0e8; margin-bottom: 0.6rem; }
        .feature-desc { font-size: 0.875rem; color: rgba(245,240,232,0.55); line-height: 1.75; font-weight: 300; }
        .why-cta { text-align: center; }
        .cta-btn { display: inline-block; background: linear-gradient(135deg, #3B6D11, #5a9e1a); color: #fff; padding: 1rem 2.5rem; border-radius: 4px; font-family: 'Jost', sans-serif; font-size: 0.95rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 8px 30px rgba(59,109,17,0.4); }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(59,109,17,0.5); }
        .curved-divider { display: block; width: 100%; overflow: hidden; line-height: 0; background: #0d2b0d; }
        .cert-section { padding: 5rem 2rem; background: #faf7f0; font-family: 'Jost', sans-serif; }
        .cert-container { max-width: 1100px; margin: 0 auto; }
        .cert-header { text-align: center; margin-bottom: 3.5rem; }
        .cert-eyebrow { display: inline-block; font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; color: #3B6D11; border: 1px solid rgba(59,109,17,0.25); padding: 0.35rem 1.2rem; border-radius: 20px; margin-bottom: 1.2rem; }
        .cert-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: #1a3a0a; margin-bottom: 0.8rem; }
        .cert-subtitle { font-size: 0.95rem; color: #666; max-width: 560px; margin: 0 auto; line-height: 1.8; font-weight: 300; }
        .certs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-bottom: 3rem; }
        .cert-card { background: #fff; border: 1px solid #e8e0d0; border-radius: 12px; padding: 1.75rem 1.5rem; text-align: center; transition: all 0.3s ease; position: relative; overflow: hidden; cursor: default; }
        .cert-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #c9a227, #e8c84a, #c9a227); transform: scaleX(0); transition: transform 0.3s ease; }
        .cert-card.hovered { transform: translateY(-5px); border-color: #c9a227; box-shadow: 0 16px 48px rgba(201,162,39,0.15); }
        .cert-card.hovered::after { transform: scaleX(1); }
        .cert-badge { width: 64px; height: 64px; background: linear-gradient(135deg, #f5f0e0, #ede5c8); border: 2px solid #c9a227; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.6rem; box-shadow: 0 4px 16px rgba(201,162,39,0.2); }
        .cert-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 700; color: #1a3a0a; margin-bottom: 0.25rem; }
        .cert-body { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em; color: #c9a227; text-transform: uppercase; margin-bottom: 0.5rem; }
        .cert-desc { font-size: 0.82rem; color: #888; line-height: 1.6; font-weight: 300; }
        .trust-statement { text-align: center; padding: 2rem; background: linear-gradient(135deg, #1a3a0a, #2d5a14); border-radius: 12px; color: #fff; }
        .trust-statement p { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.3rem; }
        .trust-statement span { font-size: 0.85rem; opacity: 0.7; font-weight: 300; }
        @media (max-width: 600px) {
          .prod-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .prod-strip { grid-template-columns: 1fr 1fr; }
          .features-grid, .certs-grid { grid-template-columns: 1fr; }
        }
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

        {/* PREMIUM PRODUCTS */}
        <section id="products" className="prod-section">
          <div className="prod-header">
            <div className="prod-eyebrow">Our Products</div>
            <h2 className="prod-main-title">Pure. <span>Natural.</span> Powerful.</h2>
            <div className="prod-tagline">Organic Manure for Healthier Soil and Better Harvests</div>
            <div className="prod-divider">🌱</div>
            <p className="prod-desc">Enriched with essential nutrients and completely natural, our manures improve soil fertility, boost plant growth, and support a sustainable future.</p>
          </div>
          <div className="prod-grid">
            {products.map((p, i) => (
              <div key={i} className={`prod-card ${prodHovered === i ? 'hovered' : ''}`} onMouseEnter={() => setProdHovered(i)} onMouseLeave={() => setProdHovered(null)} style={{ borderTop: `4px solid ${p.color}` }}>
                <div className="prod-card-top" style={{ background: p.lightColor }}>
                  <ProductBagSVG color={p.color} lightColor={p.lightColor} icon={p.icon} name={p.name} />
                </div>
                <div style={{ padding: '1rem 1.25rem 0' }}>
                  <div className="prod-card-name" style={{ color: p.color }}>{p.name}</div>
                  <div className="prod-card-desc">{p.desc}</div>
                </div>
                <div className="prod-benefits">
                  {p.benefits.map((b, j) => (
                    <span key={j} className="prod-benefit-tag" style={{ background: p.lightColor, color: p.color }}>{b}</span>
                  ))}
                </div>
                <div className="prod-best-for" style={{ background: p.lightColor }}>
                  <strong style={{ color: p.color }}>🌾 Best For</strong>
                  <span style={{ color: '#555' }}>{p.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="prod-strip">
            {[
              { icon: '🌿', title: '100% Organic', sub: 'No Chemicals' },
              { icon: '🌱', title: 'Improves Soil Health', sub: 'Naturally Enriched' },
              { icon: '♻️', title: 'Sustainable & Eco-Friendly', sub: 'Zero Waste Process' },
              { icon: '🛡️', title: 'Safe for Plants', sub: 'People & Planet' },
            ].map((s, i) => (
              <div key={i} className="strip-item">
                <div className="strip-icon">{s.icon}</div>
                <div className="strip-title">{s.title}</div>
                <div className="strip-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY FARMERS TRUST US */}
        <section id="why" className="why-section">
          <div className="why-bg" /><div className="leaf-pattern" />
          <div className="why-container">
            <div className="why-header">
              <div className="why-eyebrow">Our Promise to You</div>
              <h2 className="why-title">Why Farmers <span>Trust Us</span></h2>
              <p className="why-subtitle">Delivering Pure, Sustainable, and High-Performance Organic Solutions for Healthier Soil and Better Harvests.</p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} className={`feature-card ${whyHovered === i ? 'hovered' : ''}`} onMouseEnter={() => setWhyHovered(i)} onMouseLeave={() => setWhyHovered(null)}>
                  <span className="feature-icon">{f.icon}</span>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="why-cta"><a href="#enquiry" className="cta-btn">Discover Our Difference</a></div>
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
                <div key={i} className={`cert-card ${certHovered === i ? 'hovered' : ''}`} onMouseEnter={() => setCertHovered(i)} onMouseLeave={() => setCertHovered(null)}>
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
                    <option>Vermi Compost</option>
                    <option>Cow Manure</option>
                    <option>Neem Khali</option>
                    <option>Poultry Manure</option>
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
