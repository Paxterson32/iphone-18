const ACCESSORIES = [
  { img:'/iphone-18/Photos/image00002.jpeg',  name:'AirPods Pro 3',      badge:'Compatible' },
  { img:'/iphone-18/Photos/iPhone-18-Pro-Max-noir.jpg',  name:'Apple Watch Series 10', badge:'MagSafe' },
  { img:'/iphone-18/Photos/iPhone-18-Pro-colors-mockup-1.webp',  name:'MacBook Pro',        badge:'Continuité' },
]

export default function Connexion() {
  return (
    <section id="connexion" className="section-paper">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Écosystème</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'24ch', color:'var(--ink)' }}>
            L'iPhone ne vit pas seul.
          </h2>
          <p style={{ color:'var(--ash)', fontSize:'.95rem', lineHeight:1.7, marginTop:'.8rem', maxWidth:'50ch' }}>
            Chaque appareil Apple s'intègre de manière transparente : Universal Clipboard, Handoff, AirDrop, et la nouvelle Continuity Camera font de votre iPhone le cœur d'un écosystème fluide.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.4rem', marginTop:'2.8rem' }}>
          {ACCESSORIES.map((acc, i) => (
            <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`}
              style={{ borderRadius:16, overflow:'hidden', border:'1px solid var(--line-light)', background:'var(--paper-2)' }}>
              <div style={{ aspectRatio:'4/3', overflow:'hidden' }}>
                <img src={acc.img} alt={acc.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" decoding="async" />
              </div>
              <div style={{ padding:'1rem' }}>
                <p style={{ fontFamily:'var(--f-mono)', fontSize:'.6rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'.3rem' }}>{acc.badge}</p>
                <p style={{ fontWeight:600, fontSize:'.95rem', color:'var(--ink)' }}>{acc.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
