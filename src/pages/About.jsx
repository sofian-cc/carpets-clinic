import React from 'react';
import Placeholder from '../components/Placeholder.jsx';

export default function About({ setRoute }) {
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };
  return (
    <main className="fade-in">
      <section className="pagehead linen">
        <div className="shell">
          <div className="label">About · Who We Are</div>
          <h1>A hybrid of Central Asian expertise and <em>modern design influences</em>.</h1>
          <div className="pagehead-meta">
            <p className="lede">We believe in helping interior designers and homeowners deliver the final touch with confidence. Rugs are often overlooked, so we help simplify the complexities around fibres, dyes, construction and size.</p>
            <dl>
              <div><dt>Founded</dt><dd>2018, London</dd></div>
              <div><dt>Specialism</dt><dd>Rug consultants and craftspeople</dd></div>
            </dl>
            <dl>
              <div><dt>Service area</dt><dd>UK mainland, nationwide</dd></div>
              <div><dt>Approach</dt><dd>Central Asian craft, modern design</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="section">
        <div className="shell">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(40px, 6vw, 96px)', alignItems:'start'}} className="about-grid">
            <Placeholder palette="warm" style={{width:'100%', aspectRatio:'4/5'}} label="Founder · Carpets Clinic" />
            <div>
              <div style={{fontFamily:'var(--mono)', fontSize:12, letterSpacing:'0.2em', color:'var(--bronze-deep)', marginBottom:18}}>Founder's story</div>
              <h2 className="h-section" style={{marginBottom:28}}>Two worlds, <em>one workshop</em>.</h2>
              <p style={{fontSize:17, color:'var(--ink-60)', lineHeight:1.6, marginBottom:18}}>
                Our founder is an engineer by training and Afghan-Uzbek by heritage. Two worlds that shape everything about how this business operates.
              </p>
              <p style={{fontSize:17, color:'var(--ink-60)', lineHeight:1.6, marginBottom:18}}>
                Central Asian rug culture is built on precision, patience and generational craft. Chemical engineering brings systematic thinking, material science and a passion for problem-solving. Together they create a business that treats every rug with the rigour of a specialist and the care of a craftsman.
              </p>
              <p style={{fontSize:17, color:'var(--ink-60)', lineHeight:1.6, marginBottom:18}}>
                Rugs are often overlooked, so we help simplify the complexities around fibres, dyes, construction and size. We come in and provide solutions suited to homes and offices, big and small.
              </p>
              <p style={{fontSize:17, lineHeight:1.6, fontFamily:'var(--serif)', fontStyle:'italic', color:'var(--charcoal)'}}>
                We help integrate rugs within spaces.
              </p>
            </div>
          </div>
          <style>{`@media (max-width: 800px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* STATS */}
      <section className="section linen-paper">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="num">By the numbers</div>
              <h2 className="h-section">A quiet record, <em>kept honestly</em>.</h2>
            </div>
            <p className="lede">We're not the largest. We don't intend to be. These are the figures that matter most to us.</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0}} className="stats-grid">
            {[
              ['2018', 'Founded in London', 'Hybrid studio, designer-led'],
              ['6', 'Service disciplines', 'From consultation to aftercare'],
              ['UK', 'Nationwide coverage', 'Collection, delivery, on-site'],
              ['£1m', 'Insurance cover', 'In transit & on site'],
            ].map(([n, l, sub], i) => (
              <div key={i} className="about-stat" style={{padding:'32px 24px 32px 0', borderRight:'1px solid var(--rule-soft)'}}>
                <div className="num"><em>{n}</em></div>
                <div className="lbl">{l}</div>
                <div style={{fontSize:13, color:'var(--ink-60)', marginTop:6}}>{sub}</div>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="num">What we believe</div>
              <h2 className="h-section">Four principles, <em>in plain English</em>.</h2>
            </div>
            <p className="lede">We don't have a manifesto. We do have four rules we've never broken.</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(32px, 4vw, 56px)'}} className="principles-grid">
            {[
              ['i.',   'Restoration over replacement.', 'In a world of fast consumption and throwaway culture, we stand for the opposite. New life over landfill. A rug restored is a story continued.'],
              ['ii.',  'Solutions, not products.',      'Rugs are often overlooked. We come in and provide solutions suited to homes and offices, big and small, rather than pushing whatever is on the shelf.'],
              ['iii.', 'Honest quotes, in writing.',   'If a piece isn\'t worth saving, we\'ll tell you. If a job grows mid-project, we stop and call. No surprises on invoice.'],
              ['iv.',  'A hybrid practice.',            'Central Asian craft heritage where it matters, engineering precision where it matters. The work sits in the middle and tries to be quiet about both.'],
            ].map(([n, t, p]) => (
              <div key={n} style={{borderTop:'1px solid var(--rule-soft)', paddingTop:28}}>
                <div style={{fontFamily:'var(--serif)', fontStyle:'italic', fontSize:36, color:'var(--bronze)', marginBottom:14, lineHeight:1}}>{n}</div>
                <h4 style={{fontFamily:'var(--serif)', fontSize:26, marginBottom:12, lineHeight:1.15}}>{t}</h4>
                <p style={{color:'var(--ink-60)', fontSize:15.5}}>{p}</p>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 720px) { .principles-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section linen">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="num">Selected clients</div>
              <h2 className="h-section">In good <em>company</em>.</h2>
            </div>
            <p className="lede">A discreet selection of the residences, hotels, designers and houses we've worked alongside. Many more prefer not to be named.</p>
          </div>

          <div className="clients-headline">
            {['Windsor Castle', 'Kensington Palace Gardens', 'Four Seasons', 'Christie\'s', 'Nike', 'Warner Brothers', 'Omaze'].map((c, i) => (
              <div key={i} className="client-headline-cell">{c}</div>
            ))}
          </div>

          <div style={{paddingTop:8}}>
            <div style={{fontFamily:'var(--mono)', fontSize:12, letterSpacing:'0.2em', color:'var(--ink-40)', marginBottom:18}}>Studios &amp; houses</div>
            <div className="clients-grid-2">
              {['Bryan O\'Sullivan Studio', 'Designed by Woulfe', 'P Joseph', 'STUDIO M.H.D', 'Vanderhurd', 'Christopher Farr', 'The Rug Company', 'FLOOR_STORY', 'Peter Page', 'Dunhill &amp; Lisney'].map((c, i) => (
                <div key={i} className="client-cell" dangerouslySetInnerHTML={{__html: c}} />
              ))}
            </div>
          </div>

          <p style={{marginTop:32, fontSize:13, color:'var(--ink-60)', fontFamily:'var(--mono)', letterSpacing:'0.08em', textTransform:'uppercase'}}>
            Display here is by permission.
          </p>
        </div>
      </section>
    </main>
  );
}
