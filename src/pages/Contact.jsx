import React, { useState } from 'react';

const FORM_ACCESS_KEY = '24b4e257-14b4-47e3-a55a-ff6b0dd4cbd8';

const SERVICES_LIST = [
  'Rug Consultation & Design',
  'Alteration & Fabrication',
  'Project Planning & Installation',
  'Cleaning & Stain Removal',
  'Repair & Restoration',
  'Aftercare & Maintenance',
  'Trade Programme',
  'Not sure, please advise',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', services: [], postcode: '', message: '' });
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const toggleService = (s) => setForm(f => ({
    ...f,
    services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s],
  }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const res = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `New enquiry from ${form.name} — Carpets Clinic`,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          postcode: form.postcode || 'Not provided',
          services: form.services.join(', ') || 'Not specified',
          message: form.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        window.scrollTo({ top: 200, behavior: 'smooth' });
      } else {
        setError(json.message || 'Something went wrong. Please email us directly at info@carpetsclinic.co.uk');
      }
    } catch {
      setError('Could not send — please email info@carpetsclinic.co.uk directly.');
    }
    setSending(false);
  };

  const reset = () => { setSubmitted(false); setForm({ name:'', email:'', phone:'', services:[], postcode:'', message:'' }); setError(''); };

  return (
    <main className="fade-in">
      <section className="pagehead">
        <div className="shell">
          <div className="label">Contact · Free Quotes Within 48 Hours</div>
          <h1>Tell us about your rug. <em>We'll do the rest.</em></h1>
          <div className="pagehead-meta">
            <p className="lede">The fastest way to a quote is a few photographs and a short note. Send those over and we'll come back within 48 hours with a written estimate, no pressure, no obligation.</p>
            <dl>
              <div><dt>Phone</dt><dd style={{fontSize:17, fontFamily:'var(--serif)', fontWeight:500}}><a href="tel:+442087955215" style={{color:'inherit', textDecoration:'none'}}>+44 (0)20 8795 5215</a></dd></div>
              <div><dt>Email</dt><dd>info@carpetsclinic.co.uk</dd></div>
            </dl>
            <dl>
              <div><dt>Coverage</dt><dd>UK mainland · nationwide collection</dd></div>
              <div><dt>Response</dt><dd>Within 48 hours, Mon–Fri</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="shell">
          <div className="contact-grid">
            <div>
              {submitted ? (
                <div className="success">
                  <div className="check">✓</div>
                  <h3 className="h-card" style={{marginBottom:12}}>Thank you, {form.name || 'there'}.</h3>
                  <p style={{color:'var(--ink-60)', maxWidth:'40ch', margin:'0 auto 8px'}}>
                    We've received your enquiry
                    {form.services.length > 0 && <> about <em style={{color:'var(--bronze-deep)'}}>{form.services.join(', ').toLowerCase()}</em></>}
                    {' '}and will be in touch within 48 hours.
                  </p>
                  <button className="btn btn-ghost" style={{marginTop:32}} onClick={reset}>Send another enquiry</button>
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit}>
                  <div className="field col-2">
                    <label>01 Your name</label>
                    <input required value={form.name} onChange={set('name')} placeholder="Your full name" />
                  </div>
                  <div className="field col-1-l">
                    <label>02 Email</label>
                    <input required type="email" value={form.email} onChange={set('email')} placeholder="you@studio.co.uk" />
                  </div>
                  <div className="field col-1-r">
                    <label>03 Phone</label>
                    <input value={form.phone} onChange={set('phone')} placeholder="07000 000 000" />
                  </div>
                  <div className="field col-2">
                    <label>04 Services needed <span className="label-hint">select all that apply</span></label>
                    <div className="service-checkboxes">
                      {SERVICES_LIST.map(s => (
                        <label key={s} className={`service-check ${form.services.includes(s) ? 'is-checked' : ''}`}>
                          <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggleService(s)} />
                          <span className="check-box"><span className="check-tick">✓</span></span>
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="field col-2">
                    <label>05 Postcode</label>
                    <input value={form.postcode} onChange={set('postcode')} placeholder="W1S 1AA" style={{maxWidth:240}} />
                  </div>
                  <div className="field col-2">
                    <label>06 Tell us about your rug</label>
                    <textarea required value={form.message} onChange={set('message')} placeholder="Approximate size, age if known, what's happened to it, and the rough timescale you're thinking." />
                  </div>
                  {error && <div className="field col-2" style={{color:'#c0392b', fontSize:14, paddingTop:8}}>{error}</div>}
                  <div className="field col-2" style={{borderBottom:0, paddingTop:28, display:'flex', alignItems:'center', flexWrap:'wrap', gap:20}}>
                    <button type="submit" className="btn btn-primary" disabled={sending}>
                      {sending ? 'Sending…' : 'Request a Free Quote'} <span className="arrow">→</span>
                    </button>
                    <span style={{fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--ink-40)'}}>
                      Sent to info@carpetsclinic.co.uk · Reply within 48 hours
                    </span>
                  </div>
                </form>
              )}
            </div>

            <aside className="contact-info">
              <img src="assets/studio.webp" alt="Carpets Clinic studio, Park Royal, London NW10" loading="lazy" className="contact-studio" />
              <div className="contact-block">
                <div className="label">Call</div>
                <div className="value"><a href="tel:+442087955215">+44 (0)20 8795 5215</a></div>
                <div style={{fontSize:13, color:'var(--ink-60)', marginTop:6, fontFamily:'var(--mono)', letterSpacing:'0.05em'}}>Mon–Sat 9:00–18:00 · Sun 10:00–18:00</div>
              </div>
              <div className="contact-block">
                <div className="label">Email</div>
                <div className="value small"><a href="mailto:info@carpetsclinic.co.uk">info@carpetsclinic.co.uk</a></div>
              </div>
              <div className="contact-block">
                <div className="label">Instagram</div>
                <div className="value small"><a href="https://www.instagram.com/carpetsclinic/" target="_blank" rel="noopener">@carpetsclinic</a></div>
              </div>
              <div className="contact-block">
                <div className="label">Visit the studio</div>
                <div className="value small">Unit B2, 1 Chandos Road<br/>London, NW10 6NF</div>
                <div style={{fontSize:13, color:'var(--ink-60)', marginTop:8, fontStyle:'italic', fontFamily:'var(--serif)'}}>
                  By appointment only — we work better when we're expecting you.
                </div>
              </div>
              <div className="contact-block">
                <div className="label">Nationwide service</div>
                <div style={{fontSize:14, color:'var(--charcoal-soft)', lineHeight:1.55}}>
                  Insured collection &amp; delivery anywhere on the UK mainland. Onsite work routinely undertaken in London, Bath, Manchester, Edinburgh, Cotswolds &amp; the Home Counties.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
