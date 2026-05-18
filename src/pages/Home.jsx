import React from 'react';
import Placeholder from '../components/Placeholder.jsx';

const REVIEWS = [
  { stars: 5, text: 'Sofian is brilliant. His knowledge of and expertise in weaving must be extremely rare these days. He conducts business with perfect transparency and honesty. The result is so good we will use it as a wall hanging. We recommend him unreservedly.', name: 'Frances Magee', service: 'Repair, Re-weaving & Cleaning · Google' },
  { stars: 5, text: 'Carpet clinic renovated my Axminster stair runner by hand so it looks completely new — and the cost was less than buying a new carpet. My local carpet firm say they have never seen work like it.', name: 'Cheryl Juckes', service: 'Restoration & Moth Treatment · Google' },
  { stars: 5, text: 'They restored a large valuable silk and wool Persian rug to pristine condition after a radiator leak left a horrendous orange stain. The craftsmanship, knowledge and efficiency is excellent. We wish we had found Carpet Clinic earlier.', name: 'Sally Tolan', service: 'Restoration · Google' },
  { stars: 5, text: 'Now yearly we get a deep clean done — third year running — so we can enjoy the rug throughout the winter. Their service is impeccable, considerate and well organised. We will be back again in the summer.', name: 'Saduf Naqvi', service: 'Annual Deep Clean · Google' },
  { stars: 5, text: 'It is impossible to differentiate between the original rug pile and the repaired areas. The rug now looks as it did when we first bought it 40 years ago. Our options were carefully explained and we were kept well informed throughout.', name: 'Tony G', service: 'Repair & Restoration · Trustpilot' },
  { stars: 5, text: 'Faultless service. They came next day to review and collect my rugs, confirm the origins, measure up and provide a transparent quote. Communication throughout. Lovely family-run business — these will be my go-to from now on.', name: 'Emman El-Badawy', service: 'Cleaning & Repair · Trustpilot' },
];

const CLIENTS = [
  { name: "Windsor Castle",          logo: "assets/logos/windsor-castle.webp" },
  { name: "Four Seasons",            logo: "assets/logos/four-seasons.webp" },
  { name: "Nike",                    logo: "assets/logos/nike.webp" },
  { name: "Warner Brothers",         logo: "assets/logos/warner-brothers.webp" },
  { name: "The Rug Company",         logo: "assets/logos/the-rug-company.webp" },
  { name: "Bryan O'Sullivan Studio", logo: "assets/logos/bryan-osullivan.webp" },
  { name: "Christopher Farr",        logo: "assets/logos/christopher-farr.webp" },
  { name: "Floor Story",             logo: "assets/logos/floor-story.webp" },
  { name: "Designed by Woulfe",      logo: "assets/logos/designed-by-woulfe.webp" },
  { name: "Vanderhurd",              logo: "assets/logos/vanderhurd.webp" },
  { name: "Peter Page",              logo: "assets/logos/peter-page.webp" },
];

const HOME_SERVICES = [
  { n: '01', t: 'Rug Consultation & Design',       p: 'Expert guidance on rug type, construction and materials — every decision informed from the start.',           img: 'assets/services/consultation.webp', pal: 'warm' },
  { n: '02', t: 'Alteration & Fabrication',        p: 'Rug joining, shape alteration and floor-box cut-outs, bespoke fits for any space.',                            img: 'assets/services/alteration.webp',   pal: 'rose' },
  { n: '03', t: 'Project Planning & Installation', p: 'Flexible scheduling, collection, delivery and final-stage installation, all handled by our own team.',         img: 'assets/services/installation.webp', pal: 'sage' },
  { n: '04', t: 'Cleaning & Stain Removal',        p: 'Expert cleaning and stain removal, wool-safe and dye-stable.',                                                  img: 'assets/services/cleaning.avif',     pal: 'cream' },
  { n: '05', t: 'Repair & Restoration',            p: 'Damage repairs, colour correction and pile resurfacing on antique and contemporary pieces.',                   img: 'assets/services/repair.webp',       pal: 'blue' },
  { n: '06', t: 'Aftercare & Maintenance',         p: 'In-depth care plans for the longevity of your rug, with optional scheduled checks.',                           img: 'assets/services/aftercare.webp',    pal: 'deep' },
];

export default function Home({ setRoute }) {
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };
  return (
    <main className="fade-in">

      {/* HERO */}
      <section className="hero">
        <div className="shell">
          <div className="hero-meta">
            <span className="eyebrow">Est. London 2018 · Nationwide UK</span>
            <span className="line"></span>
            <span className="eyebrow muted">Carpets Clinic</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="display">We help integrate rugs <em>within spaces</em>.</h1>
              <p className="lede">A specialist rug studio where craft heritage meets engineering precision. We treat every rug with the rigour of a specialist and the care of a craftsman, in homes, offices and hotels nationwide across the UK.</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => go('contact')}>Get a Free Quote <span className="arrow">→</span></button>
                <button className="btn btn-ghost" onClick={() => go('services')}>See our services</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="assets/hero.webp" alt="Hand-knotted rug being woven on the loom at the Carpets Clinic studio" className="hero-photo" />
              <div className="hero-corner">
                <div className="label">From the Studio</div>
                <div className="value">Hand-knotted on the loom, Carpets Clinic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="trust-strip">
        <div className="trust-meta shell">
          <span className="trust-tag">Founded 2018</span>
          <span className="dot-sep">·</span>
          <span className="trust-tag">Nationwide Service</span>
          <span className="dot-sep">·</span>
          <span className="trust-tag muted-tag">Trusted by</span>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map(dup => (
              <div className="marquee-row" key={dup} aria-hidden={dup === 1}>
                {CLIENTS.map((c, i) => (
                  <span className="marquee-item" key={i}>
                    <img src={c.logo} alt={c.name} title={c.name} className="marquee-logo" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="num">01 What we do</div>
              <h2 className="h-section">Comprehensive rug solutions, <em>start to finish</em>.</h2>
            </div>
            <p className="lede">Six disciplines under one roof, from first consultation through to long-term aftercare.</p>
          </div>
          <div className="services-grid">
            {HOME_SERVICES.map(s => (
              <div key={s.n} className="service-card" onClick={() => go('services')}>
                <div className="num">{s.n}</div>
                <div className="svc-thumb">
                  {s.img
                    ? <img src={s.img} alt={s.t} loading="lazy" />
                    : <Placeholder palette={s.pal} style={{height: '100%'}} />
                  }
                </div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
                <span className="more">Learn more <span>→</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="section sustain-section">
        <div className="shell">
          <div className="sustain-grid">
            <div>
              <div className="num">02 What drives us</div>
              <h2 className="h-section" style={{marginTop: 0, marginBottom: 28}}>Restoration over <em>replacement</em>.</h2>
              <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--bronze-deep)', lineHeight: 1.3, marginTop: 24}}>
                A rug restored is a story continued.
              </p>
            </div>
            <div>
              <p style={{fontSize: 19, lineHeight: 1.6, color: 'var(--charcoal-soft)', marginBottom: 24}}>
                In a world of fast consumption and throwaway culture, Carpets Clinic stands for the opposite. Every rug that comes through the studio is treated as a piece worth keeping, with material science applied to extend its life by decades, not seasons.
              </p>
              <p style={{fontSize: 17, lineHeight: 1.6, color: 'var(--ink-60)'}}>
                Rooted in engineering principles of material analysis and sustainable process thinking, we champion re-use, repair and longevity. Our default recommendation will always be the option that keeps a rug in service for another generation, new life over landfill, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section">
        <div className="shell">
          <div className="section-head" style={{borderTop: '1px solid var(--rule)', paddingTop: 'clamp(40px, 5vw, 72px)'}}>
            <div>
              <div className="num">03 How we work</div>
              <h2 className="h-section">A <em>considered</em> seven-step process.</h2>
            </div>
            <p className="lede">From first call to final fit. Every rug is logged, photographed and assessed before any work begins.</p>
          </div>
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true"></div>
            {[
              ['01', 'Contact',  'Discuss your needs and what\'s possible.'],
              ['02', 'Research', 'Brainstorming and preparation.'],
              ['03', 'Consult',  'Advice on construction and materials.'],
              ['04', 'Design',   'Mock-up of the final rug specification.'],
              ['05', 'Check',    'On-site visit to confirm fit and suitability.'],
              ['06', 'Execute',  'Project execution, in-house or on-site.'],
              ['07', 'Install',  'Delivery and installation by our team.'],
            ].map(([n, t, p]) => (
              <div key={n} className="timeline-step">
                <div className="timeline-node"><span>{n}</span></div>
                <h4>{t}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="num">04 Client reviews</div>
              <h2 className="h-section">Trusted by clients <em>across the UK</em>.</h2>
            </div>
            <a href="https://uk.trustpilot.com/review/www.carpetsclinic.co.uk" target="_blank" rel="noopener" className="tp-badge">
              <span className="tp-stars">★★★★★</span>
              <span className="tp-label">5.0 on Trustpilot</span>
            </a>
          </div>
          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-meta">
                  <span className="review-name">{r.name}</span>
                  <span className="review-service">{r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-light">
        <div className="shell">
          <div className="cta-light-inner">
            <h2 className="cta-light-title">Have a rug that needs attention? <em>Let's talk.</em></h2>
            <p className="cta-light-sub">Free quotes, written within 48 hours. UK-wide collection and delivery.</p>
            <div className="cta-light-actions">
              <button className="btn btn-primary" onClick={() => go('contact')}>Get a Free Quote <span className="arrow">→</span></button>
              <a className="btn btn-ghost" href="tel:+442087955215">Or call +44 (0)20 8795 5215</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
