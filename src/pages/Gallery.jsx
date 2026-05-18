import React, { useState, useEffect, useRef } from 'react';
import Placeholder from '../components/Placeholder.jsx';

const TILES = [
  { id: 1,  kind: 'beforeafter', cat: 'restoration', title: 'Rug Burn Repair',        tag: 'Restoration', desc: 'Full pile restoration on a burn-damaged area — colour matched to original · London',                                                           imgB: 'assets/gallery/burn-repair-before.webp',     imgA: 'assets/gallery/burn-repair-after.webp',    aspect: '3/4' },
  { id: 2,  kind: 'beforeafter', cat: 'onsite',      title: 'Column Cut-Out',          tag: 'Onsite',      desc: 'Rug required in the space but a column stood in the way — cut and hand-bound around the column to allow the rug to lie flush · London',          imgB: 'assets/gallery/column-cutout-before.webp',   imgA: 'assets/gallery/column-cutout-after.webp',  aspect: '4/3' },
  { id: 3,  kind: 'sidebyside',  cat: 'alteration',  title: 'Cotswolds Rug Joining',   tag: 'Alteration',  desc: 'Client found the perfect rug but only in one size — two pieces joined seamlessly into a single large rug to suit the space · Cotswolds',        imgL: 'assets/gallery/cotswolds-before.webp',       imgR: 'assets/gallery/cotswolds-after.webp',      sbsAspect: '3/4', lightbox: true },
  { id: 4,  kind: 'sidebyside',  cat: 'onsite',      title: 'Floorbox Cut-Out',        tag: 'Onsite',      desc: 'Office floor box needed to remain accessible — precise cut-out with hand-bound edges to prevent fraying · London',                             imgL: 'assets/gallery/floorbox-cutout-before.webp', imgR: 'assets/gallery/floorbox-cutout-after.webp',sbsAspect: '1/1' },
  { id: 5,  kind: 'sidebyside',  cat: 'onsite',      title: 'Floorbox Access Flap',    tag: 'Onsite',      desc: 'A discreet operational flap cut and finished to cover and reveal the floorbox on demand · Manchester',                                         imgL: 'assets/gallery/floorbox-flap-closed.webp',   imgR: 'assets/gallery/floorbox-flap-open.webp',   sbsAspect: '1/1' },
  { id: 6,  kind: 'sidebyside',  cat: 'alteration',  title: 'Mayfair Dining Room',     tag: 'Alteration',  desc: 'Rug sourced for a Mayfair dining room was too large for the space — cut down to the exact required dimensions and rebound · Mayfair',           imgL: 'assets/gallery/mayfair-before.webp',         imgR: 'assets/gallery/mayfair-after.webp',        sbsAspect: '4/5', lightbox: true },
  { id: 7,  kind: 'tile',        cat: 'alteration',  title: 'Rug Joining, Bath',       tag: 'Alteration',  desc: 'Rug too small for the room — two rugs joined as a foundation and cut to size to achieve the client\'s desired design · Bath',                  img: 'assets/gallery/rug-joining-1.webp',           aspect: '1/1', lightbox: true },
  { id: 8,  kind: 'multi',       cat: 'consultation',title: 'Table Cut-Out',           tag: 'Consultation',desc: 'Fixed table could not be moved — rug cut precisely around the base and fitted in place, edges hand-bound throughout · London',                  imgs: ['assets/gallery/table-cutout-before.webp', 'assets/gallery/table-cutout-after.webp', 'assets/gallery/table-cutout-design.webp', 'assets/gallery/table-cutout-dimensions.webp'], featured: 1 },
  { id: 9,  kind: 'beforeafter', cat: 'onsite',      title: 'Floor Vent Cut-Out',      tag: 'Onsite',      desc: 'Floor vents overlooked at purchase stage — onsite alteration to cut around each vent, exposing airflow while keeping the rug intact · London', imgB: 'assets/gallery/vent-cutout-before.webp',     imgA: 'assets/gallery/vent-cutout-after.webp',    aspect: '4/3' },
];

const CATS = [
  ['all', 'All Work'], ['restoration', 'Restoration'], ['alteration', 'Alteration'],
  ['fabrication', 'Fabrication'], ['onsite', 'Onsite'], ['cleaning', 'Cleaning'],
  ['installation', 'Installation'], ['consultation', 'Consultation'],
];

function Lightbox({ imgs, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % imgs.length);
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [imgs.length, onClose]);
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>
      {imgs.length > 1 && <button className="lightbox-prev" onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + imgs.length) % imgs.length); }}>‹</button>}
      <img src={imgs[idx]} alt="" className="lightbox-img" onClick={e => e.stopPropagation()} />
      {imgs.length > 1 && <button className="lightbox-next" onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % imgs.length); }}>›</button>}
      {imgs.length > 1 && <div className="lightbox-count">{idx + 1} / {imgs.length}</div>}
    </div>
  );
}

function BeforeAfter({ imgBefore, imgAfter, palBefore = 'rose', palAfter = 'warm', label, aspect = '4/3' }) {
  const [split, setSplit] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const onMove = (clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSplit(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      className="beforeafter"
      style={{ aspectRatio: aspect, '--split': split + '%' }}
      ref={ref}
      onMouseDown={e => { dragging.current = true; onMove(e.clientX); }}
      onMouseMove={e => { if (dragging.current) onMove(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={e => onMove(e.touches[0].clientX)}
      onTouchMove={e => { e.preventDefault(); onMove(e.touches[0].clientX); }}
    >
      <div className="pane before">
        {imgBefore ? <img src={imgBefore} alt="Before" loading="lazy" /> : <Placeholder palette={palBefore} style={{width:'100%',height:'100%'}}/>}
      </div>
      <div className="pane after">
        {imgAfter ? <img src={imgAfter} alt="After" loading="lazy" /> : <Placeholder palette={palAfter} style={{width:'100%',height:'100%'}}/>}
      </div>
      <div className="ba-label left">Before</div>
      <div className="ba-label right">After</div>
      <div className="handle"></div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const visible = TILES.filter(t => filter === 'all' || t.cat === filter);
  const counts = Object.fromEntries(CATS.map(([k]) => [k, TILES.filter(t => k === 'all' || t.cat === k).length]));

  return (
    <main className="fade-in">
      {lightbox && <Lightbox imgs={lightbox.imgs} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
      <section className="pagehead">
        <div className="shell">
          <div className="label">Portfolio · 2018–2026</div>
          <h1>Our work, <em>quietly photographed</em>.</h1>
          <div className="pagehead-meta">
            <p className="lede">A selection of recent commissions from antique restorations to hotel-wide installations. Drag the handle on any before/after to see the transformation.</p>
            <dl>
              <div><dt>Projects shown</dt><dd>{TILES.length} commissions</dd></div>
              <div><dt>Date range</dt><dd>2018 – present</dd></div>
            </dl>
            <dl>
              <div><dt>Confidentiality</dt><dd>Some clients omitted by request</dd></div>
              <div><dt>Photography</dt><dd>By the studio, in-house</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="shell">
          <div className="gallery-controls">
            <span className="label">Filter</span>
            {CATS.map(([k, l]) => (
              <button key={k} className={`chip ${filter === k ? 'active' : ''}`} onClick={() => setFilter(k)}>
                {l} <span className="count">{counts[k]}</span>
              </button>
            ))}
          </div>

          <div className="masonry">
            {visible.map(t => (
              <figure key={t.id} className="tile">
                {t.kind === 'beforeafter'
                  ? <BeforeAfter imgBefore={t.imgB} imgAfter={t.imgA} palBefore={t.palB} palAfter={t.palA} label={t.desc} aspect={t.aspect || '4/3'} />
                  : t.kind === 'sidebyside'
                  ? (
                    <div className={`sbs-grid${t.lightbox ? ' sbs-clickable' : ''}`} style={{'--sbs-aspect': t.sbsAspect || '4/3'}}>
                      <img src={t.imgL} alt={t.title + ' left'}  loading="lazy" onClick={t.lightbox ? () => setLightbox({ imgs: [t.imgL, t.imgR], index: 0 }) : undefined} />
                      <img src={t.imgR} alt={t.title + ' right'} loading="lazy" onClick={t.lightbox ? () => setLightbox({ imgs: [t.imgL, t.imgR], index: 1 }) : undefined} />
                    </div>
                  )
                  : t.kind === 'multi'
                  ? (
                    <div className="multi-grid">
                      {t.imgs.map((src, i) => <img key={i} src={src} alt={t.title + ' ' + (i+1)} loading="lazy" className={t.featured === i ? 'featured' : ''} />)}
                    </div>
                  )
                  : (
                    <div style={{aspectRatio: t.aspect, overflow: 'hidden', cursor: t.lightbox ? 'zoom-in' : 'default'}}
                         onClick={t.lightbox && t.img ? () => setLightbox({ imgs: [t.img], index: 0 }) : undefined}>
                      {t.img
                        ? <img src={t.img} alt={t.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                        : <Placeholder palette={t.pal} style={{width:'100%',height:'100%'}} />
                      }
                    </div>
                  )
                }
                <figcaption className="tile-meta">
                  <div className="row"><h4>{t.title}</h4><span className="tag">{t.tag}</span></div>
                  <div className="desc">{t.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
