const COLORS = [
  { name: 'Dark Cherry', img: '/iphone-18/Photos/iPhone-18-Pro-dark-cherry-2.webp',            alt: 'iPhone 18 Pro Dark Cherry', pos: 'center' },
  { name: 'Bleu clair',  img: '/iphone-18/Photos/iphone 18 bleu.jpg',                          alt: 'iPhone 18 Pro Bleu clair',  pos: 'center top' },
  { name: 'Argent',      img: '/iphone-18/Photos/iphone 18 propre.webp',                       alt: 'iPhone 18 Pro Argent',      pos: 'center' },
  { name: 'Noir Sidéral',img: '/iphone-18/Photos/iPhone-18-Pro-Max-noir.jpg',                  alt: 'iPhone 18 Pro Noir Sidéral',pos: 'center top' },
]

export default function Finitions() {
  return (
    <section id="finitions" className="section-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Finitions</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'28ch' }}>
            Quatre teintes, quatre lumières différentes.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.4rem', marginTop:'2.8rem' }}>
          {COLORS.map((c, i) => (
            <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`} style={{ textAlign:'center' }}>
              <div style={{ borderRadius:18, overflow:'hidden', aspectRatio:'3/4', background:'var(--ink-2)' }}>
                <img
                  src={c.img}
                  alt={c.alt}
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition: c.pos }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p style={{ marginTop:'1rem', fontFamily:'var(--f-mono)', fontSize:'.7rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ash)' }}>
                {c.name}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop:'3rem', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'2rem' }}>
          <div className="reveal" style={{ borderTop:'1px solid var(--line-dark)', paddingTop:'1.4rem' }}>
            <h3 style={{ fontSize:'clamp(1rem,2.6vw,1.3rem)', fontWeight:460, marginBottom:'.7rem' }}>La couleur change la matière.</h3>
            <p style={{ color:'var(--ash)', fontSize:'.92rem', lineHeight:1.7 }}>Chaque teinte modifie la perception de la matière : le titane micro-texturé capte différemment la lumière selon la finition choisie.</p>
          </div>
          <div className="reveal reveal-d1" style={{ borderTop:'1px solid var(--line-dark)', paddingTop:'1.4rem' }}>
            <h3 style={{ fontSize:'clamp(1rem,2.6vw,1.3rem)', fontWeight:460, marginBottom:'.7rem' }}>Le module photo, sous tous les angles.</h3>
            <img
              src="/iphone-18/Photos/image00001.jpeg"
              alt="Détail module photo iPhone 18 Pro"
              style={{ width:'100%', borderRadius:12, marginTop:'.8rem' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
