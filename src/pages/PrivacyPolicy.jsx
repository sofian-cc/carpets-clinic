import React from 'react';

export default function PrivacyPolicy({ setRoute }) {
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };
  return (
    <main className="fade-in">
      <section className="pagehead linen">
        <div className="shell">
          <div className="label">Legal · Privacy Policy</div>
          <h1>Privacy <em>Policy</em>.</h1>
          <div className="pagehead-meta">
            <p className="lede">How we collect, use and protect your personal information.</p>
            <dl>
              <div><dt>Last updated</dt><dd>May 2026</dd></div>
              <div><dt>Controller</dt><dd>Carpets Clinic Ltd</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="privacy-body">

            <div className="privacy-block">
              <h2>1. Who we are</h2>
              <p>Carpets Clinic Ltd ("we", "us", "our") is a rug consultancy and specialist rug care studio based at Unit B2, 1 Chandos Road, London, NW10 6NF. We are the data controller for personal information collected through this website.</p>
              <p>For any data-related queries, contact us at <a href="mailto:info@carpetsclinic.co.uk">info@carpetsclinic.co.uk</a>.</p>
            </div>

            <div className="privacy-block">
              <h2>2. What data we collect</h2>
              <p>When you submit an enquiry through our contact form, we collect:</p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Postcode</li>
                <li>Services you're interested in</li>
                <li>Your message</li>
              </ul>
              <p>We do not collect payment card details, government-issued ID, or any special-category data.</p>
            </div>

            <div className="privacy-block">
              <h2>3. How we use your data</h2>
              <p>We use the information you provide solely to:</p>
              <ul>
                <li>Respond to your enquiry and provide a quote</li>
                <li>Communicate with you about your project</li>
                <li>Fulfil any services you commission from us</li>
              </ul>
              <p>We do not sell, rent or share your personal data with third parties for marketing purposes.</p>
            </div>

            <div className="privacy-block">
              <h2>4. Legal basis for processing</h2>
              <p>We process your data on the basis of <strong>legitimate interests</strong> (responding to a business enquiry you have initiated) and, where a service agreement follows, <strong>contract performance</strong>.</p>
            </div>

            <div className="privacy-block">
              <h2>5. Third-party processors</h2>
              <p>Your enquiry data passes through the following third-party services, each operating under their own privacy policy:</p>
              <ul>
                <li><strong>Web3Forms</strong> — processes contact form submissions and forwards them to our inbox. Data is not stored permanently on their servers.</li>
                <li><strong>Google Analytics 4</strong> — collects anonymised, aggregated data about how visitors use this website (pages visited, session duration, device type). No personally identifiable information is passed to Google Analytics. Data is stored in accordance with Google's retention settings.</li>
              </ul>
            </div>

            <div className="privacy-block">
              <h2>6. How long we keep your data</h2>
              <p>Enquiry and project correspondence is retained for up to <strong>3 years</strong> from the date of last contact, after which it is securely deleted. You may request earlier deletion at any time (see section 8).</p>
            </div>

            <div className="privacy-block">
              <h2>7. Cookies</h2>
              <p>This website uses Google Analytics, which sets cookies to collect anonymised traffic data. No other tracking or advertising cookies are used. You can disable cookies in your browser settings at any time without affecting your ability to use this site.</p>
            </div>

            <div className="privacy-block">
              <h2>8. Your rights</h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                <li><strong>Rectification</strong> — ask us to correct inaccurate data</li>
                <li><strong>Erasure</strong> — ask us to delete your data ("right to be forgotten")</li>
                <li><strong>Restriction</strong> — ask us to limit how we use your data</li>
                <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
                <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
              </ul>
              <p>To exercise any of these rights, email <a href="mailto:info@carpetsclinic.co.uk">info@carpetsclinic.co.uk</a>. We will respond within 30 days.</p>
            </div>

            <div className="privacy-block">
              <h2>9. Complaints</h2>
              <p>If you believe we have mishandled your personal data, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.</p>
            </div>

            <div className="privacy-block">
              <h2>10. Changes to this policy</h2>
              <p>We may update this policy from time to time. The "last updated" date at the top of this page will always reflect the most recent version. Continued use of the website after any change constitutes acceptance of the updated policy.</p>
            </div>

            <div className="privacy-cta">
              <button className="btn btn-primary" onClick={() => go('contact')}>Get in Touch <span className="arrow">→</span></button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
