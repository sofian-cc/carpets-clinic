import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

/* ================================================================
   LAZY PAGE IMPORTS — each page loads only when first visited
   ================================================================ */
const Home         = lazy(() => import('./pages/Home.jsx'));
const Services     = lazy(() => import('./pages/Services.jsx'));
const Gallery      = lazy(() => import('./pages/Gallery.jsx'));
const About        = lazy(() => import('./pages/About.jsx'));
const Contact      = lazy(() => import('./pages/Contact.jsx'));
const Blog         = lazy(() => import('./pages/Blog.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));

const ROUTES = ['home', 'services', 'gallery', 'about', 'blog', 'contact', 'privacy'];

const PAGE_META = {
  home:     { title: 'Carpets Clinic — Specialist Rug Care, Restoration & Installation', description: 'A specialist rug studio where craft heritage meets engineering precision. Expert rug consultation, cleaning, repair, restoration and installation nationwide across the UK.' },
  services: { title: 'Rug Cleaning, Repair, Restoration & Alteration Services | Carpets Clinic', description: 'Six specialist rug services: consultation & design, alteration, installation, cleaning, repair & restoration, and aftercare. Free quotes. UK-wide collection.' },
  gallery:  { title: 'Rug Restoration & Alteration Portfolio | Carpets Clinic', description: 'Before & after gallery of rug restorations, alterations, cut-outs and installations by Carpets Clinic. UK-wide commissions since 2018.' },
  about:    { title: 'About Carpets Clinic — Specialist Rug Studio, London NW10', description: 'Founded in 2018 by an engineer with Afghan-Uzbek heritage. Carpets Clinic combines Central Asian craft tradition with engineering precision.' },
  blog:     { title: 'Rug Care Journal — Expert Guides on Cleaning, Repair & Design | Carpets Clinic', description: 'Practical guides on rug care, sizing, moth damage, repair and restoration — written by the Carpets Clinic team.' },
  contact:  { title: 'Get a Free Rug Quote | Carpets Clinic London', description: 'Request a free written quote within 48 hours. Nationwide UK collection and delivery. Call +44 (0)20 8795 5215 or send us a message.' },
  privacy:  { title: 'Privacy Policy | Carpets Clinic', description: 'How Carpets Clinic collects, uses and protects your personal information under UK GDPR.' },
};

const BREADCRUMB_LABELS = { services: 'Services', gallery: 'Gallery', about: 'About', blog: 'Journal', contact: 'Contact', privacy: 'Privacy Policy' };

/* ================================================================
   NAV
   ================================================================ */
function Nav({ route, setRoute }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['home', 'Home'],
    ['services', 'Services'],
    ['gallery', 'Gallery'],
    ['about', 'About'],
    ['blog', 'Blog'],
    ['contact', 'Contact'],
  ];

  const go = (r) => { setRoute(r); setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="shell nav-inner">
        <button className="logo" onClick={() => go('home')} aria-label="Carpets Clinic home">
          <span className="logo-mark"><img src="assets/logo.webp" alt="Carpets Clinic" /></span>
          <span className="logo-text">
            <span className="name">Carpets Clinic</span>
            <span className="sub">Specialist Rug Care · UK</span>
          </span>
        </button>
        <ul className="nav-links">
          {links.map(([key, label]) => (
            <li key={key}>
              <button className={route === key ? 'active' : ''} onClick={() => go(key)}>{label}</button>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a className="nav-phone hide-mobile" href="tel:+442087955215"><span className="dot">●</span>&nbsp; +44 (0)20 8795 5215</a>
          <button className="btn btn-bronze" onClick={() => go('contact')}>Get a Quote <span className="arrow">→</span></button>
          <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <div className="shell">
            {links.map(([key, label]) => (
              <button key={key} className={`mm-link ${route === key ? 'active' : ''}`} onClick={() => go(key)}>{label}</button>
            ))}
            <a className="mm-phone" href="tel:+442087955215">+44 (0)20 8795 5215</a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer({ setRoute }) {
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };
  return (
    <footer className="footer linen-dark">
      <div className="shell">
        <div className="footer-cta">
          <span className="eyebrow light">Free Quote · Nationwide UK</span>
          <h2>Bring your rug back to <em>its finest hour</em>.</h2>
          <p>Whether it's a treasured Persian heirloom or a bespoke installation for a 200-room hotel, we'll handle it with the care it deserves.</p>
          <div className="btns">
            <button className="btn btn-bronze" onClick={() => go('contact')}>Get a Free Quote <span className="arrow">→</span></button>
            <a className="btn btn-ghost" href="tel:+442087955215">Call +44 (0)20 8795 5215</a>
          </div>
        </div>

        <div className="footer-mark">Carpets <em>Clinic</em></div>

        <div className="footer-grid">
          <div className="footer-col">
            <h5>Studio</h5>
            <p>Unit B2, 1 Chandos Road<br/>London, NW10 6NF</p>
            <p style={{marginTop: 12}}>Mon–Sat 9:00–18:00<br/>Sun 10:00–18:00</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><button onClick={() => go('services')}>Consultation &amp; Design</button></li>
              <li><button onClick={() => go('services')}>Alteration &amp; Fabrication</button></li>
              <li><button onClick={() => go('services')}>Planning &amp; Installation</button></li>
              <li><button onClick={() => go('services')}>Cleaning &amp; Stain Removal</button></li>
              <li><button onClick={() => go('services')}>Repair &amp; Restoration</button></li>
              <li><button onClick={() => go('services')}>Aftercare &amp; Maintenance</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><button onClick={() => go('about')}>Our Story</button></li>
              <li><button onClick={() => go('gallery')}>Portfolio</button></li>
              <li><button onClick={() => go('blog')}>Journal</button></li>
              <li><button onClick={() => go('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+442087955215">+44 (0)20 8795 5215</a></li>
              <li><a href="mailto:info@carpetsclinic.co.uk">info@carpetsclinic.co.uk</a></li>
              <li>Nationwide service</li>
              <li>Insured to £1m</li>
            </ul>
            <div className="footer-socials">
              <a href="https://www.instagram.com/carpetsclinic/" target="_blank" rel="noopener">Instagram</a>
              <a href="https://www.facebook.com/carpetsclinicuk/" target="_blank" rel="noopener">Facebook</a>
              <a href="https://x.com/carpetsclinic" target="_blank" rel="noopener">X</a>
              <a href="https://www.tiktok.com/@carpetsclinic" target="_blank" rel="noopener">TikTok</a>
            </div>
            <div className="footer-handle">@carpetsclinic</div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Carpets Clinic Ltd</span>
          <button className="footer-legal-link" onClick={() => go('privacy')}>Privacy Policy</button>
          <span>Made with care in London</span>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   APP — ROUTER
   ================================================================ */
function App() {
  const initial = ((window.location.hash || '').replace('#', ''));
  const [route, setRouteRaw] = useState(ROUTES.includes(initial) ? initial : 'home');

  const setRoute = (r) => {
    setRouteRaw(r);
    window.location.hash = r;
  };

  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || '').replace('#', '');
      if (ROUTES.includes(h)) setRouteRaw(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const meta = PAGE_META[route] || PAGE_META.home;
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    // Inject BreadcrumbList for non-home pages
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) existing.remove();
    if (route !== 'home') {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpetsclinic.co.uk/' },
          { '@type': 'ListItem', position: 2, name: BREADCRUMB_LABELS[route] || route, item: `https://carpetsclinic.co.uk/#${route}` },
        ],
      };
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'breadcrumb-schema';
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }, [route]);

  const pages = { home: Home, services: Services, gallery: Gallery, about: About, blog: Blog, contact: Contact, privacy: PrivacyPolicy };
  const Page = pages[route] || Home;

  return (
    <div>
      <Nav route={route} setRoute={setRoute} />
      <Suspense fallback={<div style={{minHeight:'60vh'}} />}>
        <Page key={route} setRoute={setRoute} />
      </Suspense>
      <Footer setRoute={setRoute} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
