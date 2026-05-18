import React, { useState } from 'react';
import Placeholder from '../components/Placeholder.jsx';

const SERVICES = [
  {
    n: '01', t: 'Rug Consultation & Design',
    sub: 'Establishing your needs and delivering expert guidance, from the start.',
    p: 'Carpets Clinic has set out to provide effective solutions when it comes to integrating a rug within a space. Our consultation establishes your needs and delivers expert guidance on rug type, construction and materials, so every decision is informed from the start. We work from concept boards through to final specification, alongside homeowners, designers and architects.',
    bullets: ['Site visits, sample reviews and design boards', 'Material, weave and pile recommendations', 'Bespoke colour matching and dye-lot management', 'Knot count and weave specification', 'Sourcing from our network of weavers in Central Asia'],
    img: 'assets/services/consultation.webp', pal: 'warm', tag: 'Studio or on-site',
    detail: {
      long: 'Our consultation process begins with understanding the space as a whole — the scale, light quality, traffic patterns, existing palette and how the rug will be used day to day. We work alongside homeowners, interior designers, architects and property developers to match the right rug to the right room, or to design one from scratch where nothing in stock will do. We bring samples, discuss pile heights and weave structures, and advise on what will hold up well in your specific context. For bespoke commissions, we work with our network of weavers in Afghanistan, Iran and Morocco, overseeing the design from first sketch to finished piece.',
      process: [['01','Enquiry','Call or email us with details of the space and your brief.'],['02','Site visit','We visit the space to measure, photograph and assess light and traffic.'],['03','Samples','We bring samples for pile height, weave structure, colour and material.'],['04','Specification','We produce a written specification: size, construction, colour, pile.'],['05','Sourcing','We source from existing stock or commission from our weaver network.'],['06','Delivery','Rug delivered and, if needed, installed by our team.']],
      faqs: [
        { q: 'Can you source any style of rug?', a: 'Yes. We have relationships with weavers across Afghanistan, Iran, Morocco and India. If you have a reference piece in mind, we can usually match the construction and approximate the palette.' },
        { q: 'Do you charge for the initial consultation?', a: 'Initial consultations are free. London site visits carry no charge. Outside London, travel costs may apply for the first visit, which is credited against any order placed.' },
        { q: 'How long does a bespoke commission take?', a: 'It depends on complexity and origin. A hand-knotted Afghan commission typically takes 3–6 months. A Moroccan flatweave can be ready in 6–8 weeks.' },
      ],
    },
  },
  {
    n: '02', t: 'Alteration & Fabrication',
    sub: 'Rug joining, shape alteration, and floor-box cut-outs.',
    p: 'We provide specialist expertise including rug joining, shape alteration, and floor-box cut-outs. When a beautiful rug is the wrong size or shape for the room, the answer isn\'t to buy another, we re-make it, invisibly, to fit the space exactly.',
    bullets: ['Trimming and resizing to exact dimensions', 'Invisible joining of two rugs into one', 'Round, oval and bespoke shapes', 'Floor-box and socket cut-outs, precisely bound', 'Hand-bound and hand-stitched edge finishing'],
    img: 'assets/services/alteration.webp', pal: 'rose', tag: 'Studio · 1-3 weeks', flip: true,
    detail: {
      long: 'Rugs come in standard sizes; rooms and spaces do not. When the dimensions do not match — or when a floor box, column or table leg stands in the way — we step in with a precise alteration. Our most common work includes trimming and resizing, joining two rugs into a single seamless piece, cutting custom shapes for round rooms, fireplaces and bay windows, and making precise cut-outs for floor boxes, column bases and table legs. Every cut edge is hand-bound using matched wool to prevent fraying and restore the finished appearance. The results are designed to be invisible.',
      process: [['01','Assessment','We examine the rug and agree on the exact alteration required.'],['02','Pattern marking','The new shape or join line is marked before any cutting begins.'],['03','Cutting','Cut made with specialist tools following the pile direction precisely.'],['04','Binding','Edges hand-bound with matched wool, mirroring the original finish.'],['05','Quality check','Finished piece inspected under studio lighting from multiple angles.'],['06','Return','Rug returned flat or rolled, ready to lay.']],
      faqs: [
        { q: 'Will you be able to see where the rug was cut?', a: 'In the vast majority of cases, no. Our hand-binding technique uses matched wool and replicates the original edge treatment. For pile rugs, the binding sits below the pile level and is not visible from above.' },
        { q: 'Can you join two rugs from different sources?', a: 'Yes, provided the pile heights are compatible. We have joined rugs of similar type from different origins to create larger seamless pieces. We assess compatibility before committing to the job.' },
        { q: 'What is the minimum size cut-out you can make?', a: 'There is no practical minimum. We have made cut-outs as small as 5cm around column bases. The limiting factor is the pile height and construction of the rug, not the size of the cut.' },
      ],
    },
  },
  {
    n: '03', t: 'Project Planning & Installation',
    sub: 'Scheduling, collection, delivery and installation, all by our own team.',
    p: 'We deliver flexible scheduling, fast turnarounds, collection, delivery and final-stage installation, all handled by our own team. For trade clients juggling multiple projects, we sit inside your timeline, not alongside it. Our on-site team carries the workshop with them, so any last-minute adjustment can be made in place.',
    bullets: ['Project-managed for designers and contractors', 'Insured collection and delivery, UK-wide', 'Photo updates at every milestone', 'On-site trimming for irregular rooms, doorways, fireplaces', 'Quiet out-of-hours and weekend installs'],
    img: 'assets/services/installation.webp', pal: 'sage', tag: 'On-site · UK-wide',
    detail: {
      long: 'We handle the full logistics of getting a rug from our studio to its final position — measured, fitted and signed off. For trade clients managing multiple projects, we work inside your timeline and your supplier chain rather than alongside it. Our team carries a full on-site kit, so last-minute adjustments — trimming for an irregular doorway, fitting around a hearth — are made in place without the rug needing to return to the studio. We document each install with photographs at every stage and provide a condition report on arrival and completion.',
      process: [['01','Schedule','We agree an installation date to fit your project timeline.'],['02','Collection','Fully insured collection from studio, supplier or storage.'],['03','Preparation','Final checks in studio — dimensions confirmed, edges inspected.'],['04','On-site','Team arrives with full kit for any last-minute fitting adjustments.'],['05','Installation','Rug laid, fitted and photographed. On-site trimming completed if needed.'],['06','Sign-off','Condition report issued and client or site manager sign-off obtained.']],
      faqs: [
        { q: 'Do you work outside London?', a: 'Yes. We carry out installations across the UK mainland and regularly work in Bath, Manchester, Edinburgh, the Cotswolds and the Home Counties. Travel costs are included in the project quote.' },
        { q: 'Can you work out of hours or at weekends?', a: 'Yes. For hotel, hospitality and commercial projects where daytime disruption is not possible, we offer quiet out-of-hours and weekend installs at no additional charge for pre-agreed bookings.' },
        { q: 'Do you supply underlay?', a: 'Yes. We source and supply non-slip underlay cut to the exact rug dimensions as part of the installation service. We recommend underlay for all installations over hard flooring.' },
      ],
    },
  },
  {
    n: '04', t: 'Cleaning & Stain Removal',
    sub: 'Hand-immersion wash for the pieces machines can\'t touch.',
    p: 'We deliver expert cleaning and stain removal to improve the appearance of rugs and carpets. Our wash is fully manual: pH-balanced shampoos, soft brushes, cold-water rinse, flat-dried over six to twelve days. Wool-safe, dye-stable, returned to its natural lustre.',
    bullets: ['Specialist Persian, Tabriz, Heriz and Kashan rugs', 'Pet-stain and odour neutralisation', 'Moth treatment and insect-proofing', 'Silk-safe twelve-day cycle for delicate pieces', 'Free collection across UK mainland'],
    img: 'assets/services/cleaning.avif', pal: 'cream', tag: 'Studio · 6-12 days', flip: true,
    detail: {
      long: 'Our cleaning process is fully manual from start to finish. Every rug is first beaten on a mechanical duster to extract years of embedded particulate — the volume of dust released at this stage often surprises clients. It then goes through our hand-immersion wash: pH-balanced shampoos chosen for the fibre type, soft-bristle agitation in the direction of the pile, cold-water rinse until the water runs completely clear, and flat-dried over a minimum of six days. Silk rugs go through a separate twelve-day cycle with a lower-pH wash and extended drying time. Moth and insect treatment is included as standard on every wash.',
      process: [['01','Assessment','Rug examined for fibre type, condition and any existing damage.'],['02','Dust extraction','Mechanical duster removes embedded particulate from the pile.'],['03','Pre-treatment','Stains and problem areas pre-treated with targeted solutions.'],['04','Immersion wash','Full hand-wash with pH-balanced shampoo, agitated in pile direction.'],['05','Rinse and dry','Cold rinse until clear, then flat-dried over 6–12 days.'],['06','Inspection','Inspected under studio lighting before rolling and returning.']],
      faqs: [
        { q: 'How often should a rug be professionally cleaned?', a: 'For a rug in regular domestic use, once every two to three years is sufficient. Households with pets or young children may benefit from annual cleaning. A light vacuum between cleans is enough for day-to-day maintenance.' },
        { q: 'Can you remove old or set stains?', a: 'We can significantly reduce or eliminate most stains including red wine, coffee, pet stains and dye transfer. Success depends on how long the stain has been present and whether it has been treated previously — some home treatments set stains permanently.' },
        { q: 'Is moth treatment included in the price?', a: 'Yes. Every rug that comes through our studio is treated for moth and insect as part of the standard wash at no extra charge. We also offer standalone moth treatment for rugs that do not need a full clean.' },
      ],
    },
  },
  {
    n: '05', t: 'Repair & Restoration',
    sub: 'Damage repairs, colour correction and pile resurfacing.',
    p: 'Our team completes damage repairs, colour correction, and pile resurfacing on antique and contemporary pieces alike. Our restorers are trained in traditional Persian and Anatolian techniques, matching wool, dye, knot count and tension to the original, so the repair becomes invisible.',
    bullets: ['Reweaving fields, borders and guard stripes', 'Reknotting damaged pile to single-knot accuracy', 'Selvedge and kilim-end rebuilding', 'Hand-dyed wool matched to existing patina', 'Structural foundation repair on antique pieces'],
    img: 'assets/services/repair.webp', pal: 'blue', tag: 'Workshop · 3-16 weeks',
    detail: {
      long: 'Our restoration work draws on the same techniques used to make the rugs in the first place. Our restorers are trained in Persian (Farsi) and Turkish (Ghiordes) hand-knotting, selvedge wrapping and kilim-end rebuilding. We source wool for each repair individually, hand-dyed to match the existing patina rather than the original colour — because antique rugs fade in ways that no stock yarn can replicate. Every repair is inspected at three stages: after pile work, after washing, and under studio lighting before return. The aim is always the same: a repair that cannot be found.',
      process: [['01','Assessment','Full inspection, including reverse side, to map the extent of damage.'],['02','Photography','Detailed record of condition before any work begins.'],['03','Material sourcing','Wool sourced and hand-dyed to match existing pile colour and patina.'],['04','Repair work','Hand-knotting, reweaving or edge work carried out in the studio.'],['05','Wash','Repaired area washed to blend with surrounding pile.'],['06','Final inspection','Inspected under studio lighting and photographed before return.']],
      faqs: [
        { q: 'How invisible is a good repair?', a: 'On a quality hand-knotted rug, a well-executed repair should be effectively invisible under normal viewing conditions. From standing height it should not be detectable. To find it, you would need to know approximately where it is and examine the pile closely.' },
        { q: 'Can you repair foundation damage?', a: 'Yes. Rebuilding the warp and weft on which the knots are tied is one of the most complex restoration tasks we undertake, but it is achievable on most rug constructions. It is more time-intensive than pile-only repair and we always explain the full scope before work begins.' },
        { q: 'How long does restoration take?', a: 'Minor repairs typically take one to three weeks. Full field reweaving on an antique piece in poor condition can take up to sixteen weeks. We agree a timeline with every client before work starts.' },
      ],
    },
  },
  {
    n: '06', t: 'Aftercare & Maintenance',
    sub: 'In-depth care plans for the longevity of your rug.',
    p: 'Our team provides in-depth care plans for the longevity of the rug, with optional scheduled checks. We call back twelve months after installation to see how it\'s wearing, and arrange annual servicing for trade clients managing larger portfolios.',
    bullets: ['Annual servicing across portfolios', 'Twelve-month aftercare check post-installation', 'On-call advice for spills and accidents', 'Moth and pest monitoring contracts', 'Storage and handling guidance for clients'],
    img: 'assets/services/aftercare.webp', pal: 'deep', tag: 'Ongoing · By plan', flip: true,
    detail: {
      long: 'A rug that receives regular attention will outlast one that does not by decades. Our aftercare service is designed to keep the rugs we work on in long-term good health, with minimal effort on your part. We call back twelve months after any installation or restoration to inspect the rug in situ — checking for moth activity, wear patterns, edge condition and pile loss. For trade clients managing larger portfolios, we offer contracted annual servicing with written condition reports for each piece. We also provide on-call advice for spills and unexpected damage at any time.',
      process: [['01','Check-in','We contact you twelve months after installation or restoration.'],['02','Inspection','Rug examined for moth, wear, edge condition and pile loss.'],['03','Recommendation','Written report with any recommended action, from nothing to a full clean.'],['04','Scheduling','Any agreed work scheduled around your calendar.'],['05','Service','Cleaning, moth treatment or minor repair carried out as needed.'],['06','Report','Updated condition record issued and filed for future reference.']],
      faqs: [
        { q: 'What does the annual service include?', a: 'A standard service visit includes a full inspection (pile, foundation, edges, backing), moth and insect check, a light clean if needed, and a written condition report. Rugs requiring a full wash or repair receive a separate quote.' },
        { q: 'Do you provide aftercare for rugs you did not originally clean?', a: 'Yes. We take on aftercare contracts for any quality rug, regardless of where it was previously cleaned or restored. The first visit includes a baseline condition assessment.' },
        { q: 'What should I do immediately if something spills on my rug?', a: 'Act immediately. Blot from the outside in with a clean white cloth — do not rub. Apply cold water and blot again. Call or email us if the stain persists. Avoid anything containing bleach, enzymes or heat.' },
      ],
    },
  },
];

const FAQS = [
  { q: 'Do you work on all types of rugs?', a: 'Yes: Persian, Turkish, Afghan, Tibetan, Chinese, Indian, contemporary flatweaves, machine-made and hand-knotted. If it\'s a rug, we can help.' },
  { q: 'Do you offer free quotes?', a: 'Yes. Send us a few photos and a short description and we\'ll return a written quote within 48 hours, no obligation.' },
  { q: 'Do you collect and deliver across the UK?', a: 'Yes. We offer fully insured collection and delivery to any address on the UK mainland. London collections can often be arranged within 24 hours.' },
  { q: 'How long does rug cleaning take?', a: 'Our hand-immersion wash takes 6–12 days. Delicate silk pieces go through a 12-day cycle to protect the fibres.' },
  { q: 'How long does repair and restoration take?', a: 'Minor repairs take 1–3 weeks. Full field reweaving on an antique piece can take up to 16 weeks. We provide an accurate timeline with every quote.' },
  { q: 'Can you repair antique and heirloom rugs?', a: 'Yes. Our restorers are trained in traditional Persian and Anatolian knotting techniques, matching wool, dye, knot count and tension to the original so repairs become invisible.' },
  { q: 'Can you alter the size or shape of a rug?', a: 'Yes. We can trim, resize, join two rugs into one, cut bespoke shapes (round, oval, irregular) and make precision cut-outs for floor boxes, columns and table legs.' },
  { q: 'How much does it cost?', a: 'Pricing varies by service and rug size. All quotes are free and written. Send us photos and we\'ll come back with a fixed price, no hidden fees.' },
  { q: 'Do you work with interior designers and trade clients?', a: 'Yes. A significant part of our work is with designers, architects and property developers. We offer trade pricing, project management and quiet out-of-hours and weekend installs.' },
  { q: 'What areas of the UK do you cover?', a: 'We\'re based in London NW10 but serve clients nationwide. We regularly work in London, Bath, Manchester, Edinburgh, the Cotswolds and the Home Counties.' },
];

function FAQ({ go }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  return (
    <section className="section faq-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="num">07 Common questions</div>
            <h2 className="h-section">Frequently asked <em>questions</em>.</h2>
          </div>
          <p className="lede">Can't find what you need? <button className="inline-link" onClick={() => go('contact')}>Send us a message →</button></p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-a"><p>{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({ service, onBack, setRoute }) {
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const [open, setOpen] = useState(null);
  return (
    <main className="fade-in">
      <section className="pagehead linen">
        <div className="shell">
          <button className="back-btn" onClick={onBack}>← Back to Services</button>
          <div className="label">Services · {service.tag}</div>
          <h1>{service.t.split(' & ').join(' &amp; ').split('&amp;').join(' & ')}</h1>
          <div className="pagehead-meta">
            <p className="lede">{service.sub}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className={`svc-row ${service.flip ? 'flip' : ''}`} style={{paddingTop:0, borderTop:'none'}}>
            <div className="svc-text">
              <p style={{fontSize:18, lineHeight:1.75, color:'var(--charcoal-soft)', marginBottom:28}}>{service.detail.long}</p>
              <ul className="svc-list">
                {service.bullets.map((b, i) => (
                  <li key={i}><span className="tick">✦</span><span>{b}</span></li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={() => go('contact')}>
                Get a free quote <span className="arrow">→</span>
              </button>
            </div>
            <div className="svc-image">
              {service.img
                ? <img src={service.img} alt={service.t} loading="lazy" />
                : <Placeholder palette={service.pal} style={{width:'100%',height:'100%',position:'absolute',inset:0}} />
              }
              <div className="tag">{service.tag}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--linen)'}}>
        <div className="shell">
          <div className="section-head" style={{borderTop:'none', paddingTop:0}}>
            <div>
              <div className="num">Process</div>
              <h2 className="h-section">How it <em>works</em>.</h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true"></div>
            {service.detail.process.map(([n,t,p]) => (
              <div key={n} className="timeline-step">
                <div className="timeline-node"><span>{n}</span></div>
                <h4>{t}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="num">Questions</div>
              <h2 className="h-section">Common <em>questions</em>.</h2>
            </div>
          </div>
          <div className="faq-list">
            {service.detail.faqs.map((item, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && <div className="faq-a"><p>{item.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner-light">
        <div className="shell">
          <div className="cta-light-inner">
            <h2 className="cta-light-title">Ready to get started? <em>Let's talk.</em></h2>
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

export default function Services({ setRoute }) {
  const [openService, setOpenService] = useState(null);
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };

  if (openService) {
    return <ServiceDetail service={openService} onBack={() => { setOpenService(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} setRoute={setRoute} />;
  }

  return (
    <main className="fade-in">
      <section className="pagehead linen">
        <div className="shell">
          <div className="label">Services · Comprehensive Rug Solutions</div>
          <h1>Six disciplines, <em>built around the rug</em>.</h1>
          <div className="pagehead-meta">
            <p className="lede">Carpets Clinic has set out to provide effective solutions when it comes to integrating a rug within a space, a hybrid of Central Asian craft heritage and engineering precision.</p>
            <dl>
              <div><dt>Service area</dt><dd>UK mainland, nationwide collection</dd></div>
              <div><dt>Turnaround</dt><dd>1 week to 4 months by service</dd></div>
            </dl>
            <dl>
              <div><dt>Insured to</dt><dd>£1,000,000 in transit &amp; on site</dd></div>
              <div><dt>Quote</dt><dd>Free, written, within 48 hours</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          {SERVICES.map(s => (
            <article key={s.n} className={`svc-row svc-row-clickable ${s.flip ? 'flip' : ''}`} onClick={() => { setOpenService(s); window.scrollTo({ top: 0, behavior: 'instant' }); }}>
              <div className="svc-text">
                <div className="num">{s.n} / 06</div>
                <h2 className="h-section">{s.t}</h2>
                <p className="lede" style={{fontStyle: 'italic', color: 'var(--charcoal-soft)', marginBottom: 18}}>{s.sub}</p>
                <p>{s.p}</p>
                <ul className="svc-list">
                  {s.bullets.map((b, i) => (
                    <li key={i}><span className="tick">✦</span><span>{b}</span></li>
                  ))}
                </ul>
                <div className="svc-row-actions">
                  <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); go('contact'); }}>
                    Enquire <span className="arrow">→</span>
                  </button>
                  <span className="svc-view-link">View service →</span>
                </div>
              </div>
              <div className="svc-image">
                {s.img
                  ? <img src={s.img} alt={s.t} loading="lazy" />
                  : <Placeholder palette={s.pal} style={{width: '100%', height: '100%', position: 'absolute', inset: 0}} />
                }
                <div className="tag">{s.tag}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FAQ go={go} />
    </main>
  );
}
