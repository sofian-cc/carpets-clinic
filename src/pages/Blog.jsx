import React, { useState } from 'react';

const POSTS = [
  {
    slug: 'how-to-clean-a-persian-rug',
    title: 'How to Clean a Persian Rug at Home',
    excerpt: 'Persian rugs can outlast several generations if properly maintained — and be ruined in an afternoon if they\'re not. Here\'s what to do, and what to avoid.',
    category: 'Care & Maintenance',
    date: 'May 2026',
    read: '5 min read',
    content: [
      { type: 'p', text: 'Persian rugs are among the most durable floor coverings ever made — a well-knotted Tabriz or Kashan can outlast several generations if properly maintained. But they are also among the easiest to damage through incorrect cleaning. Here is what to do, and what to avoid.' },
      { type: 'h2', text: 'Vacuuming — the right way' },
      { type: 'p', text: 'Vacuum regularly but carefully. Use a low-suction setting and always vacuum in the direction of the pile, never against it. Avoid the fringes entirely — the suction can pull fibres loose over time. For antique or fragile pieces, place a mesh screen over the rug and vacuum through it.' },
      { type: 'h2', text: 'Spot cleaning spills' },
      { type: 'p', text: 'Act immediately. Blot — never rub — with a clean white cloth to absorb as much of the spill as possible. Work from the outside of the stain inward to prevent it spreading. Apply a small amount of cold water and blot again. Repeat until the cloth comes away clean.' },
      { type: 'h2', text: 'Full hand-washing (every 2–3 years)' },
      { type: 'p', text: 'Take the rug outside and lay it pile-side down on a clean surface. Gently apply cold water. Mix a small amount of pH-neutral soap in a bucket of cold water and apply with a soft brush, working in the direction of the pile. Rinse thoroughly — soap residue attracts dirt. Lay flat to dry away from direct sunlight. Never tumble dry.' },
      { type: 'h2', text: 'What to avoid' },
      { type: 'ul', items: ['Hot water — it shrinks wool and causes dye bleed', 'Enzyme cleaners — they break down the protein fibres in wool', 'Steam cleaners — excessive heat damages pile and backing', 'Rubbing — it damages pile direction and spreads stains', 'Machine washing — almost always causes irreversible damage'] },
      { type: 'h2', text: 'When to call a professional' },
      { type: 'p', text: 'Antique or heirloom pieces, silk rugs, large rugs over 4m², persistent stains, moth damage, or any rug where colour bleeding has started — these all require professional attention. A specialist hand-wash will clean far more thoroughly than anything achievable at home, and without the risk.' },
    ],
  },
  {
    slug: 'what-size-rug-do-i-need',
    title: 'What Size Rug Do I Need? A Room-by-Room Guide',
    excerpt: 'The most common mistake in interior design is a rug that\'s too small. Here\'s how to get the sizing right in every room.',
    category: 'Consultation & Design',
    date: 'April 2026',
    read: '6 min read',
    content: [
      { type: 'p', text: 'One of the most common mistakes in interior design is buying a rug that is too small. A rug that floats in the centre of a room, too far from the furniture, makes the space feel disjointed — no matter how beautiful the piece itself is. Here is how to get it right, room by room.' },
      { type: 'h2', text: 'Living room' },
      { type: 'p', text: 'The most common approach is to have all front legs of sofas and armchairs sitting on the rug. This visually anchors the furniture group. For a larger room, all four legs on the rug creates a more formal, cohesive look. Leave at least 40cm of floor visible around the edges of the rug.' },
      { type: 'ul', items: ['2.4m x 1.7m — smaller sitting room or apartment', '2.9m x 2.0m — standard UK living room', '3.5m x 2.5m or larger — open-plan or formal reception'] },
      { type: 'h2', text: 'Dining room' },
      { type: 'p', text: 'The rug must extend at least 60cm beyond each edge of the table, so chairs remain on the rug when pulled back. This is the rule most people get wrong — the table looks fine, but the moment someone pulls their chair out, the back legs catch the edge.' },
      { type: 'ul', items: ['6-seater table (1.8m x 0.9m): minimum rug 3.0m x 2.1m', '8-seater table (2.2m x 1.0m): minimum rug 3.4m x 2.2m', 'Round tables suit round rugs — add 120cm to the table diameter'] },
      { type: 'h2', text: 'Bedroom' },
      { type: 'p', text: 'Three approaches work well. Full coverage extends the rug 50–60cm beyond all sides of the bed. Two-thirds sits under the lower portion of the bed with 60cm extending on each side and at the foot. A pair of runners — one on each side — works well in narrower rooms.' },
      { type: 'h2', text: 'Hallway' },
      { type: 'p', text: 'A runner should leave 15–20cm of floor visible on each side. For a standard UK hallway around 90cm wide, a 60cm wide runner is the right proportion.' },
      { type: 'h2', text: 'What if the right size does not exist?' },
      { type: 'p', text: 'This is more common than you would think. Rugs come in standard sizes; rooms do not. If you find the perfect rug in the wrong dimensions, it can often be cut down and rebound, or two smaller pieces can be joined to achieve the size you need. Both are specialist jobs, but they are not uncommon — we do them regularly.' },
    ],
  },
  {
    slug: 'moth-damage-in-rugs',
    title: 'Moth Damage in Rugs — How to Identify, Treat and Prevent It',
    excerpt: 'Moth damage is the single most common cause of rug deterioration in UK homes. By the time you notice it, the larvae have often been feeding for months.',
    category: 'Repair & Restoration',
    date: 'March 2026',
    read: '7 min read',
    content: [
      { type: 'p', text: 'Moth damage is the single most common cause of rug deterioration in UK homes. It can destroy decades of value silently, because by the time you notice it, the larvae have often been feeding for months.' },
      { type: 'h2', text: 'Understanding the moth lifecycle' },
      { type: 'p', text: 'The damage is not caused by the adult moth — it is caused by the larvae. The common clothes moth (Tineola bisselliella) lays eggs in dark, undisturbed areas. When the larvae hatch, they feed on keratin, the protein found in wool. Synthetic rugs are not at risk; natural fibre rugs — wool, silk, cotton — are.' },
      { type: 'h2', text: 'Signs of moth damage' },
      { type: 'ul', items: ['Thin, flat areas where the pile has been eaten down to the backing', 'Sandy or gritty debris (larval casings) on the underside of the rug', 'Small cream-coloured larvae or tiny cocoons visible in the pile', 'Adult moths — small, golden-brown, around 6–8mm — seen nearby', 'An unusual dusty or musty smell from the rug'] },
      { type: 'h2', text: 'Where rugs are most at risk' },
      { type: 'p', text: 'Moths prefer dark, undisturbed environments. The most commonly affected areas are edges and corners under furniture, the underside of stored or folded rugs, and areas under heavy pieces that rarely move. The damage often goes unnoticed until the furniture is repositioned.' },
      { type: 'h2', text: 'Treatment' },
      { type: 'p', text: 'If you discover active moths, act immediately. Remove the rug from the room and seal it in a plastic bag. Vacuum all floor surfaces thoroughly and seal the bag. Freezing a rug at -20°C for 72 hours kills both eggs and larvae, but this is impractical for large pieces. A professional wash combined with an insecticide treatment is the most reliable method.' },
      { type: 'h2', text: 'Prevention' },
      { type: 'ul', items: ['Vacuum regularly, including along edges and under furniture', 'Rotate rugs twice a year so no area stays in permanent shade', 'Use cedar blocks or lavender sachets in storage areas', 'Never store rugs in damp or dark conditions without moth protection', 'Have stored rugs inspected annually'] },
      { type: 'h2', text: 'Can moth-damaged rugs be repaired?' },
      { type: 'p', text: 'Yes, in most cases. If the damage is caught before it reaches the foundation — the warp and weft backing — pile can be reknotted by hand to restore the rug to near-original condition. Extensive foundation damage takes longer but is still usually repairable. The key is acting quickly: the longer moth damage is left, the more costly and complex the repair.' },
    ],
  },
  {
    slug: 'rug-repair-or-replace',
    title: 'Rug Repair or Replace? How to Decide',
    excerpt: 'When a rug is damaged, the question is almost always the same: is it worth repairing? The answer depends on four factors.',
    category: 'Repair & Restoration',
    date: 'February 2026',
    read: '4 min read',
    content: [
      { type: 'p', text: 'When a rug is damaged — whether from a burn, a spill, moth damage, or simply decades of use — the question is almost always the same: is it worth repairing? The answer depends on four factors: the value of the rug, the extent of the damage, the type of damage, and the cost of repair relative to replacement.' },
      { type: 'h2', text: 'What is the rug worth?' },
      { type: 'p', text: 'Hand-knotted rugs from Central Asia, Iran or Turkey tend to increase in value over time. A 1970s Tabriz or a vintage Afghan may be worth considerably more than you paid for it — and considerably more than its replacement cost would suggest. Machine-made rugs, by contrast, rarely justify extensive repair investment.' },
      { type: 'h2', text: 'What type of damage is it?' },
      { type: 'p', text: 'Some damage types are straightforward and inexpensive to repair: fraying edges, loose selvedge, small burns (pile only), minor staining, and small holes up to about 10cm². More involved but still worth repairing on a quality rug: moth damage (if not through to the foundation), larger burns, and torn or split sections.' },
      { type: 'h2', text: 'What is the cost of repair?' },
      { type: 'p', text: 'A full restoration quote should always be free and written. Compare it honestly against the cost of a like-for-like replacement — not just in price, but in quality. A genuinely equivalent hand-knotted replacement for a good antique rug can cost several times the repair price. The repair is almost always the better economic decision.' },
      { type: 'h2', text: 'Does it have sentimental value?' },
      { type: 'p', text: 'This is often the factor that tips the decision. A rug inherited from a grandparent, purchased on a special trip, or chosen for a first home carries a value no price comparison captures. These pieces are always worth repairing.' },
      { type: 'h2', text: 'Our default recommendation' },
      { type: 'p', text: 'We will always default to repair. Every rug restored is a piece of material culture kept out of landfill. In the vast majority of cases, the repair is both invisible and cost-effective. If you are unsure, send us a few photos — the quote is free and there is no obligation.' },
    ],
  },
];

function BlogPost({ post, onBack }) {
  return (
    <article className="blog-post fade-in">
      <div className="shell">
        <button className="back-btn" onClick={onBack}>← Back to Journal</button>
        <div className="post-header">
          <div className="post-meta-top">
            <span className="post-cat">{post.category}</span>
            <span className="post-date">{post.date} · {post.read}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
        </div>
        <div className="post-body">
          {post.content.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.type === 'p')  return <p key={i}>{block.text}</p>;
            if (block.type === 'ul') return (
              <ul key={i}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
            return null;
          })}
        </div>
        <div className="post-footer">
          <p>Have a rug that needs attention?</p>
          <button className="btn btn-primary" onClick={onBack}>← Back to Journal</button>
        </div>
      </div>
    </article>
  );
}

export default function Blog({ setRoute }) {
  const [openPost, setOpenPost] = useState(null);
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };

  if (openPost) {
    return (
      <main className="fade-in">
        <BlogPost post={openPost} onBack={() => { setOpenPost(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />
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

  return (
    <main className="fade-in">
      <section className="pagehead linen">
        <div className="shell">
          <div className="label">Journal · Rug Care &amp; Design</div>
          <h1>Insights on rugs, <em>restoration and design</em>.</h1>
          <div className="pagehead-meta">
            <p className="lede">Practical guides on rug care, sizing, repair and design — written by the Carpets Clinic team.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <article key={post.slug} className="blog-card" onClick={() => { setOpenPost(post); window.scrollTo({ top: 0, behavior: 'instant' }); }}>
                <div className="blog-card-meta">
                  <span className="post-cat">{post.category}</span>
                  <span className="post-date">{post.date} · {post.read}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-card-cta">Read article <span>→</span></span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
