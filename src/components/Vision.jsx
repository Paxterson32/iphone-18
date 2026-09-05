const VCARDS = [
  { img: '/iphone-18/Photos/iphone 18 propre.webp',                  title: '48 Mpx Fusion',     sub: 'Capteur principal' },
  { img: '/iphone-18/Photos/iphone 18 bleu.jpg',                     title: 'Photonique ultra',  sub: 'Traitement IA en temps réel' },
  { img: '/iphone-18/Photos/iphone 18 noir.jpg',                     title: 'Téléobjectif 5×',   sub: 'Pro Max exclusif' },
  { img: '/iphone-18/Photos/iPhone-18-Pro-Max-Dark-Cherry-et-Light-Blue.jpg', title: 'Vidéo 4K 240fps', sub: 'Log & ProRes' },
]

export default function Vision() {
  return (
    <section id="vision" className="section-graphite" style={{ paddingLeft:0, paddingRight:0 }}>
      <div className="vision-head reveal" style={{ padding:'0 clamp(1.1rem,5vw,5rem)', maxWidth:1320, margin:'0 auto' }}>
        <span className="eyebrow">Appareil photo</span>
        <h2 className="reveal" style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'20ch' }}>
          Le photophone repensé, pas seulement remodelé.
        </h2>
      </div>
      <div className="vision-scroll" style={{ display:'flex', gap:'1.3rem', overflowX:'auto', padding:'2.6rem clamp(1.1rem,5vw,5rem) 1.2rem', scrollSnapType:'x proximity', WebkitOverflowScrolling:'touch' }}>
        {VCARDS.map((c, i) => (
          <div key={i} className="vcard reveal" style={{ flex:'0 0 auto', width:'min(280px,76vw)', scrollSnapAlign:'start', display:'flex', flexDirection:'column', gap:'.9rem' }}>
            <div style={{ borderRadius:12, overflow:'hidden', background:'var(--ink-2)', aspectRatio:'4/3' }}>
              <img
                src={c.img}
                alt={c.title}
                style={{ width:'100%', height:'100%', objectFit:'cover' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p style={{ fontFamily:'var(--f-display)', fontWeight:480, fontSize:'clamp(1rem,2.5vw,1.2rem)' }}>{c.title}</p>
              <p style={{ fontSize:'.8rem', color:'var(--ash)', marginTop:'.3rem' }}>{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
