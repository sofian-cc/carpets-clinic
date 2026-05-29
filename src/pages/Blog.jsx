import React, { useState, useEffect } from 'react';

const POSTS = [
  {
    slug: 'rug-resizing-mayfair-dining-room',
    title: 'Project: Rug Resizing for a Mayfair Dining Room',
    excerpt: 'The perfect rug was sourced, but at 350 x 250cm it was too large for the dining room. Here is how we cut it down, rebound it and installed it on site.',
    category: 'Alteration & Fabrication',
    date: 'May 2026',
    isoDate: '2026-05-15',
    read: '4 min read',
    relatedService: { label: 'Alteration & Fabrication', service: 'alteration' },
    content: [
      { type: 'img', src: 'assets/gallery/mayfair-before.webp', alt: 'Mayfair dining room rug before resizing — original 350 x 250cm piece', caption: 'Before: the original 350 x 250cm rug, too large for the dining room' },
      { type: 'p', text: 'Interior designers regularly encounter the same problem: the right rug exists, but not in the right size. Retailers stock standard dimensions. Rooms do not come in standard dimensions. This project, completed for a dining room in Mayfair, is a good example of how a precise alteration resolves the gap between the two.' },
      { type: 'h2', text: 'The brief' },
      { type: 'p', text: 'The client had sourced a rug they loved. At 350 x 250cm, it was too large for the dining room it was intended for. The desired size was 250 x 200cm. Simply buying a smaller version was not an option: the pattern and quality of this particular piece was exactly what the space needed.' },
      { type: 'h2', text: 'The process' },
      { type: 'p', text: 'Before any cutting takes place, we assess the rug construction. The position of the pile, the direction of the weave, and the structure of the border all determine where cuts can be made without compromising the design. On this piece, the proportions allowed for clean reductions on two sides while keeping the central field and border fully intact.' },
      { type: 'p', text: 'The rug was collected from the property and brought to our London studio. We made the cuts using specialist tools, then applied new binding along both cut edges, matched in colour and material to the original selvedge finish. The result is indistinguishable from a rug made to that size.' },
      { type: 'h2', text: 'On-site installation' },
      { type: 'p', text: 'Once the alteration was complete, we returned to Mayfair for installation. This is a step we include as standard on alteration projects where the rug needs to sit precisely within the room. Getting the placement right in context, with the furniture in situ, matters.' },
      { type: 'img', src: 'assets/gallery/mayfair-after.webp', alt: 'Mayfair dining room rug after resizing — installed in place', caption: 'After: the resized rug installed in the Mayfair dining room' },
      { type: 'h2', text: 'What interior designers should know' },
      { type: 'ul', items: [
        'Most rugs can be resized without visible impact on the design, depending on pattern placement',
        'Always commission a structural assessment before cutting: some borders cannot be removed without reconstruction',
        'Binding can be matched to the original finish in most cases',
        'Collection, alteration and reinstallation can typically be completed within 5 to 7 working days',
      ]},
      { type: 'p', text: 'If you are working on a project where a rug needs resizing, send us the dimensions and a few photos. We will confirm feasibility and provide a written quote within 48 hours.' },
    ],
  },
  {
    slug: 'rug-joining-large-living-space',
    title: 'Joining Two Rugs: How to Create a Larger Seamless Piece',
    excerpt: 'When a space needs a rug larger than the market stocks, joining two identical pieces is one of the most reliable solutions. Here is how it works.',
    category: 'Alteration & Fabrication',
    date: 'April 2026',
    isoDate: '2026-04-20',
    read: '4 min read',
    relatedService: { label: 'Alteration & Fabrication', service: 'alteration' },
    content: [
      { type: 'p', text: 'Large open-plan spaces present a recurring problem in interior design. The room needs a rug at 4m x 3m or larger. Almost nothing at that scale is available off the shelf, and bespoke commission timelines are often impractical. Joining two rugs is one of the most effective solutions — and one of the least known.' },
      { type: 'img', src: 'assets/gallery/rug-joining-1.webp', alt: 'Completed joined rug in situ — seamless finish across the full field', caption: 'A joined rug in place: the seam is not visible from the front' },
      { type: 'h2', text: 'How rug joining works' },
      { type: 'p', text: 'The two rugs are laid face down and aligned so the pattern matches precisely across the seam. The edges are prepared and the pieces are joined using a combination of specialist adhesive and hand-stitching through the backing. The seam is then reinforced and the pile adjusted on either side so the join disappears into the field of the rug.' },
      { type: 'p', text: 'When done correctly, the join is not visible from the front and does not create a ridge underfoot. The finished piece functions as a single rug in every respect.' },
      { type: 'h2', text: 'Pattern matching' },
      { type: 'p', text: 'On patterned rugs, the alignment of the join must account for repeat spacing. We provide a mock-up before any work begins, showing exactly where the seam will fall in relation to the pattern. The client approves this before we proceed.' },
      { type: 'img', src: 'assets/gallery/rug-joining-2.webp', alt: 'Joined rug laid flat showing clean finish and even pile', caption: 'The finished piece: even pile and a clean outer edge' },
      { type: 'h2', text: 'When joining is the right solution' },
      { type: 'p', text: 'Joining works best when two pieces from the same production batch are available. Consistent dye lots and pile direction are essential for an invisible result. For plain or near-plain rugs, this is straightforward. For patterned pieces, we assess the repeat and advise on placement before any work begins.' },
      { type: 'img', src: 'assets/gallery/rug-joining-3.webp', alt: 'Joined rug installed in a large living space', caption: 'Installed: the joined rug scaled to the room' },
      { type: 'h2', text: 'What interior designers should know' },
      { type: 'ul', items: [
        'Joining works on most pile types including wool, silk and synthetic',
        'Pattern-matched joins require two rugs from the same batch for consistent dye lots',
        'The finished rug can be bound or serged around the outer edge for a clean finish',
        'Turnaround from collection to delivery is typically 7 to 10 working days',
        'We provide a visual mock-up before work begins on all joining projects',
      ]},
      { type: 'p', text: 'This is one of the most underused solutions in interior design. If you have a space that needs a larger rug than the market provides, get in touch and we will talk through the options.' },
    ],
  },
  {
    slug: 'custom-cut-outs-rugs-interior-design',
    title: 'On-Site Cut-Outs: Making Rugs Work Around Fixed Features',
    excerpt: 'Floor vents, electric boxes, pillars, table legs. When a space has fixed features a rug cannot go around, we cut the rug to fit them precisely.',
    category: 'Alteration & Fabrication',
    date: 'March 2026',
    isoDate: '2026-03-15',
    read: '5 min read',
    relatedService: { label: 'Alteration & Fabrication', service: 'alteration' },
    content: [
      { type: 'p', text: 'Floor vents, electric boxes, access panels, structural columns and fixed table bases all create the same problem: a rug cannot sit cleanly in the space without being cut around them. This is more common than it might seem, particularly on commercial fit-outs and high-specification residential projects where the floor architecture is complex.' },
      { type: 'p', text: 'This project is a good illustration of how the process works. The client needed a rug placed under a fixed dining table that could not be moved. The table base sat at a precise position in the room, and the rug had to fit cleanly around it with bound edges on all cut sides.' },
      { type: 'img', src: 'assets/gallery/table-cutout-design.jpg', alt: 'Rug design reference showing the piece selected for the fixed table project', caption: 'The rug selected for the project — assessed for pile structure and border position before cutting' },
      { type: 'h2', text: 'Starting with a mock-up' },
      { type: 'p', text: 'Before any cutting takes place, we take precise measurements of the fixed feature and produce a mock-up to confirm the cut positions. For table bases, this means measuring all four sides of the base footprint, accounting for any asymmetry, and marking the cut lines on a template before touching the rug.' },
      { type: 'img', src: 'assets/gallery/table-cutout-dimensions.png', alt: 'Technical dimensions drawing for the table base cut-out', caption: 'Mock-up stage: the table base dimensions mapped out to confirm cut positions' },
      { type: 'h2', text: 'Cutting and binding' },
      { type: 'p', text: 'Once the mock-up is approved, the rug is cut to the confirmed dimensions. Every exposed edge is immediately bound to prevent fraying and to give the cut-out a clean, finished appearance. The binding is matched to the existing selvedge finish in colour and material wherever possible.' },
      { type: 'p', text: 'The rug is then delivered and installed on site. For fixed table projects, final positioning is done with the table in place to confirm the cut-out sits flush and all edges are clear of the base.' },
      { type: 'img', src: 'assets/gallery/table-cutout-after.jpg', alt: 'Finished rug installed around the fixed table base', caption: 'Installed: the rug sitting flush around the fixed table base with clean bound edges' },
      { type: 'h2', text: 'What interior designers should know' },
      { type: 'ul', items: [
        'Cut-outs should be planned before installation where possible, not as a correction after the fact',
        'Always flag floor features at the quoting stage so we can build the cut-out into the project plan',
        'Flap cut-outs for access panels can be hinged on either side depending on access requirements',
        'All cut edges are bound to match the existing selvedge finish',
        'We can work around most fixed features regardless of shape',
      ]},
      { type: 'p', text: 'If you are specifying a rug for a space with fixed floor features, include the measurements and a photo when you contact us and we will give you a clear answer on what is possible.' },
    ],
  },
  {
    slug: 'cut-join-bind-custom-rug-size',
    title: 'Project: Cut, Join and Bind to Create a Custom Rug Size',
    excerpt: 'When a retailer could not supply the required size, we cut two standard rugs to the correct dimensions, joined them and created a seamless 200 x 300cm piece.',
    category: 'Alteration & Fabrication',
    date: 'February 2026',
    isoDate: '2026-02-15',
    read: '4 min read',
    relatedService: { label: 'Alteration & Fabrication', service: 'alteration' },
    content: [
      { type: 'img', src: 'assets/gallery/cotswolds-before.webp', alt: 'Two standard rugs before cutting and joining', caption: 'Before: two 170 x 240cm rugs sourced from the same batch' },
      { type: 'p', text: 'Standard rug sizes are dictated by production runs, not by the dimensions of the rooms they are going into. When a client needs a specific size that simply does not exist in the range, the options are a custom commission with a long lead time, or a specialist alteration. This project shows what the alteration route looks like in practice.' },
      { type: 'h2', text: 'The brief' },
      { type: 'p', text: 'The client needed a rug at 200 x 300cm. The retailer stocked the design in 170 x 240cm only. Two pieces were purchased. The brief was to cut both down to 150 x 200cm each and join them to produce a finished rug of 200 x 300cm, preserving the proportions and visual balance of the original design.' },
      { type: 'h2', text: 'Why this works' },
      { type: 'p', text: 'Cutting a rug reduces its dimensions. Joining adds them back together in a different configuration. By cutting two pieces and joining on the long edge, the result is a rug with the proportions of a size that was never available in the original range. The design, pile and finish are all continuous across the join.' },
      { type: 'h2', text: 'The execution' },
      { type: 'p', text: 'Both rugs were assessed for consistency of pile direction, dye lot and pattern before any cutting began. The cuts were made to precise measurements on all four sides of each piece. The two cut pieces were then joined along the centre seam with pattern alignment confirmed before the join was fixed. The outer edges were rebound to complete the piece.' },
      { type: 'img', src: 'assets/gallery/cotswolds-after.webp', alt: 'Completed 200 x 300cm rug in bedroom after cut, join and bind', caption: 'After: a seamless 200 x 300cm rug, a size the retailer did not stock' },
      { type: 'h2', text: 'When to use this approach' },
      { type: 'ul', items: [
        'When the required size sits between two standard sizes in a range',
        'When a custom commission is not practical within the project timeline',
        'When two pieces from the same batch are available for consistent dye and pattern matching',
        'When the design has a field that can absorb a central seam without disrupting the visual balance',
      ]},
      { type: 'h2', text: 'What interior designers should know' },
      { type: 'p', text: 'This approach is not appropriate for every design, particularly those with a large central medallion or a pattern that cannot be mirrored. But for field patterns, geometric designs and plain or near-plain rugs, it is a reliable way to achieve a size the market does not stock. Send us the rug details and the dimensions you need and we will tell you whether it is feasible.' },
    ],
  },
  {
    slug: 'how-to-clean-a-persian-rug',
    title: 'How to Clean a Persian Rug at Home',
    excerpt: 'Persian rugs can outlast several generations if properly maintained, and be ruined in an afternoon if they are not. Here is what to do, and what to avoid.',
    category: 'Care & Maintenance',
    date: 'January 2026',
    isoDate: '2026-01-15',
    read: '5 min read',
    relatedService: { label: 'Rug Cleaning & Stain Removal', service: 'cleaning' },
    content: [
      { type: 'p', text: 'Persian rugs are among the most durable floor coverings ever made. A well-knotted Tabriz or Kashan can outlast several generations if properly maintained. But they are also among the easiest to damage through incorrect cleaning. Here is what to do, and what to avoid.' },
      { type: 'h2', text: 'Vacuuming the right way' },
      { type: 'p', text: 'Vacuum regularly but carefully. Use a low-suction setting and always vacuum in the direction of the pile, never against it. Avoid the fringes entirely: the suction can pull fibres loose over time. For antique or fragile pieces, place a mesh screen over the rug and vacuum through it.' },
      { type: 'h2', text: 'Spot cleaning spills' },
      { type: 'p', text: 'Act immediately. Blot, never rub, with a clean white cloth to absorb as much of the spill as possible. Work from the outside of the stain inward to prevent it spreading. Apply a small amount of cold water and blot again. Repeat until the cloth comes away clean.' },
      { type: 'h2', text: 'Full hand-washing every 2 to 3 years' },
      { type: 'p', text: 'Take the rug outside and lay it pile-side down on a clean surface. Gently apply cold water. Mix a small amount of pH-neutral soap in a bucket of cold water and apply with a soft brush, working in the direction of the pile. Rinse thoroughly: soap residue attracts dirt. Lay flat to dry away from direct sunlight. Never tumble dry.' },
      { type: 'h2', text: 'What to avoid' },
      { type: 'ul', items: ['Hot water: it shrinks wool and causes dye bleed', 'Enzyme cleaners: they break down the protein fibres in wool', 'Steam cleaners: excessive heat damages pile and backing', 'Rubbing: it damages pile direction and spreads stains', 'Machine washing: almost always causes irreversible damage'] },
      { type: 'h2', text: 'When to call a professional' },
      { type: 'p', text: 'Antique or heirloom pieces, silk rugs, large rugs over 4m², persistent stains, moth damage, or any rug where colour bleeding has started all require professional attention. A specialist hand-wash will clean far more thoroughly than anything achievable at home, and without the risk.' },
    ],
  },
  {
    slug: 'what-size-rug-do-i-need',
    title: 'What Size Rug Do I Need? A Room-by-Room Guide',
    excerpt: 'The most common mistake in interior design is a rug that is too small. Here is how to get the sizing right in every room.',
    category: 'Consultation & Design',
    date: 'December 2025',
    isoDate: '2025-12-01',
    read: '6 min read',
    relatedService: { label: 'Rug Consultation & Design', service: 'consultation' },
    content: [
      { type: 'p', text: 'One of the most common mistakes in interior design is buying a rug that is too small. A rug that floats in the centre of a room, too far from the furniture, makes the space feel disjointed no matter how beautiful the piece itself is. Here is how to get it right, room by room.' },
      { type: 'h2', text: 'Living room' },
      { type: 'p', text: 'The most common approach is to have all front legs of sofas and armchairs sitting on the rug. This visually anchors the furniture group. For a larger room, all four legs on the rug creates a more formal, cohesive look. Leave at least 40cm of floor visible around the edges of the rug.' },
      { type: 'ul', items: ['2.4m x 1.7m: smaller sitting room or apartment', '2.9m x 2.0m: standard UK living room', '3.5m x 2.5m or larger: open-plan or formal reception'] },
      { type: 'h2', text: 'Dining room' },
      { type: 'p', text: 'The rug must extend at least 60cm beyond each edge of the table so chairs remain on the rug when pulled back. This is the rule most people get wrong. The table looks fine, but the moment someone pulls their chair out, the back legs catch the edge.' },
      { type: 'ul', items: ['6-seater table (1.8m x 0.9m): minimum rug 3.0m x 2.1m', '8-seater table (2.2m x 1.0m): minimum rug 3.4m x 2.2m', 'Round tables suit round rugs: add 120cm to the table diameter'] },
      { type: 'h2', text: 'Bedroom' },
      { type: 'p', text: 'Three approaches work well. Full coverage extends the rug 50 to 60cm beyond all sides of the bed. Two-thirds sits under the lower portion of the bed with 60cm extending on each side and at the foot. A pair of runners, one on each side, works well in narrower rooms.' },
      { type: 'h2', text: 'Hallway' },
      { type: 'p', text: 'A runner should leave 15 to 20cm of floor visible on each side. For a standard UK hallway around 90cm wide, a 60cm wide runner is the right proportion.' },
      { type: 'h2', text: 'What if the right size does not exist?' },
      { type: 'p', text: 'This is more common than you would think. Rugs come in standard sizes; rooms do not. If you find the perfect rug in the wrong dimensions, it can often be cut down and rebound, or two smaller pieces can be joined to achieve the size you need. Both are specialist jobs, but they are not uncommon. We do them regularly.' },
    ],
  },
  {
    slug: 'moth-damage-in-rugs',
    title: 'Moth Damage in Rugs: How to Identify, Treat and Prevent It',
    excerpt: 'Moth damage is the single most common cause of rug deterioration in UK homes. By the time you notice it, the larvae have often been feeding for months.',
    category: 'Repair & Restoration',
    date: 'November 2025',
    isoDate: '2025-11-01',
    read: '7 min read',
    relatedService: { label: 'Rug Repair & Restoration', service: 'repair' },
    content: [
      { type: 'p', text: 'Moth damage is the single most common cause of rug deterioration in UK homes. It can destroy decades of value silently, because by the time you notice it, the larvae have often been feeding for months.' },
      { type: 'h2', text: 'Understanding the moth lifecycle' },
      { type: 'p', text: 'The damage is not caused by the adult moth. It is caused by the larvae. The common clothes moth (Tineola bisselliella) lays eggs in dark, undisturbed areas. When the larvae hatch, they feed on keratin, the protein found in wool. Synthetic rugs are not at risk. Natural fibre rugs in wool, silk and cotton are.' },
      { type: 'h2', text: 'Signs of moth damage' },
      { type: 'ul', items: ['Thin, flat areas where the pile has been eaten down to the backing', 'Sandy or gritty debris (larval casings) on the underside of the rug', 'Small cream-coloured larvae or tiny cocoons visible in the pile', 'Adult moths, small and golden-brown at around 6 to 8mm, seen nearby', 'An unusual dusty or musty smell from the rug'] },
      { type: 'h2', text: 'Where rugs are most at risk' },
      { type: 'p', text: 'Moths prefer dark, undisturbed environments. The most commonly affected areas are edges and corners under furniture, the underside of stored or folded rugs, and areas under heavy pieces that rarely move. The damage often goes unnoticed until the furniture is repositioned.' },
      { type: 'h2', text: 'Treatment' },
      { type: 'p', text: 'If you discover active moths, act immediately. Remove the rug from the room and seal it in a plastic bag. Vacuum all floor surfaces thoroughly and seal the bag. Freezing a rug at -20 degrees for 72 hours kills both eggs and larvae, but this is impractical for large pieces. A professional wash combined with an insecticide treatment is the most reliable method.' },
      { type: 'h2', text: 'Prevention' },
      { type: 'ul', items: ['Vacuum regularly, including along edges and under furniture', 'Rotate rugs twice a year so no area stays in permanent shade', 'Use cedar blocks or lavender sachets in storage areas', 'Never store rugs in damp or dark conditions without moth protection', 'Have stored rugs inspected annually'] },
      { type: 'h2', text: 'Can moth-damaged rugs be repaired?' },
      { type: 'p', text: 'Yes, in most cases. If the damage is caught before it reaches the foundation (the warp and weft backing), pile can be reknotted by hand to restore the rug to near-original condition. Extensive foundation damage takes longer but is still usually repairable. The key is acting quickly: the longer moth damage is left, the more costly and complex the repair.' },
    ],
  },
  {
    slug: 'rug-repair-or-replace',
    title: 'Rug Repair or Replace? How to Decide',
    excerpt: 'When a rug is damaged, the question is almost always the same: is it worth repairing? The answer depends on four factors.',
    category: 'Repair & Restoration',
    date: 'October 2025',
    isoDate: '2025-10-01',
    read: '4 min read',
    relatedService: { label: 'Rug Repair & Restoration', service: 'repair' },
    content: [
      { type: 'p', text: 'When a rug is damaged, whether from a burn, a spill, moth damage, or simply decades of use, the question is almost always the same: is it worth repairing? The answer depends on four factors: the value of the rug, the extent of the damage, the type of damage, and the cost of repair relative to replacement.' },
      { type: 'h2', text: 'What is the rug worth?' },
      { type: 'p', text: 'Hand-knotted rugs from Central Asia, Iran or Turkey tend to increase in value over time. A 1970s Tabriz or a vintage Afghan may be worth considerably more than you paid for it, and considerably more than its replacement cost would suggest. Machine-made rugs, by contrast, rarely justify extensive repair investment.' },
      { type: 'h2', text: 'What type of damage is it?' },
      { type: 'p', text: 'Some damage types are straightforward and inexpensive to repair: fraying edges, loose selvedge, small burns (pile only), minor staining, and small holes up to about 10cm². More involved but still worth repairing on a quality rug: moth damage (if not through to the foundation), larger burns, and torn or split sections.' },
      { type: 'h2', text: 'What is the cost of repair?' },
      { type: 'p', text: 'A full restoration quote should always be free and written. Compare it honestly against the cost of a like-for-like replacement, not just in price but in quality. A genuinely equivalent hand-knotted replacement for a good antique rug can cost several times the repair price. The repair is almost always the better economic decision.' },
      { type: 'h2', text: 'Does it have sentimental value?' },
      { type: 'p', text: 'This is often the factor that tips the decision. A rug inherited from a grandparent, purchased on a special trip, or chosen for a first home carries a value no price comparison captures. These pieces are always worth repairing.' },
      { type: 'h2', text: 'Our default recommendation' },
      { type: 'p', text: 'We will always default to repair. Every rug restored is a piece of material culture kept out of landfill. In the vast majority of cases, the repair is both invisible and cost-effective. If you are unsure, send us a few photos. The quote is free and there is no obligation.' },
    ],
  },
];

function BlogPost({ post, onBack, goService }) {
  return (
    <article className="blog-post fade-in">
      <div className="shell">
        <button className="back-btn" onClick={onBack}>← Back to Journal</button>
        <div className="post-header">
          <div className="post-meta-top">
            <span className="post-cat">{post.category}</span>
            <span className="post-date">{post.date} · {post.read}</span>
            <span className="post-author">By Sofian Mohammed</span>
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
            if (block.type === 'img') return (
              <figure key={i} className="post-figure">
                <img src={block.src} alt={block.alt} loading="lazy" />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
            return null;
          })}
        </div>
        {post.relatedService && (
          <div className="post-related">
            <span className="post-related-label">Related service</span>
            <button className="post-related-link" onClick={() => goService('services')}>
              {post.relatedService.label} <span>→</span>
            </button>
          </div>
        )}
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

  // Inject Article schema + update page title when a post is open
  useEffect(() => {
    const existing = document.getElementById('article-schema');
    if (existing) existing.remove();
    if (openPost) {
      document.title = `${openPost.title} | Carpets Clinic`;
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: openPost.title,
        description: openPost.excerpt,
        datePublished: openPost.isoDate,
        author: { '@type': 'Person', name: 'Sofian Mohammed', url: 'https://carpetsclinic.co.uk' },
        publisher: {
          '@type': 'Organization',
          name: 'Carpets Clinic',
          logo: { '@type': 'ImageObject', url: 'https://carpetsclinic.co.uk/assets/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://carpetsclinic.co.uk/#blog' },
      };
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'article-schema';
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
    return () => { document.getElementById('article-schema')?.remove(); };
  }, [openPost]);

  if (openPost) {
    return (
      <main className="fade-in">
        <BlogPost post={openPost} onBack={() => { setOpenPost(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} goService={go} />
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
                  <span className="post-author">By Sofian Mohammed</span>
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
