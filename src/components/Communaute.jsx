const PHOTOS = [
  '/iphone-18/Photos/iPhone-18-Pro-Max-Dark-Cherry-et-Light-Blue.jpg',
  '/iphone-18/Photos/iPhone-18-Pro-Max-noir.jpg',
  '/iphone-18/Photos/image00007.jpeg',
  '/iphone-18/Photos/iphone 18 noir.jpg',
]

export default function Communaute() {
  return (
    <section id="communaute" className="section-paper">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Communauté</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'24ch', color:'var(--ink)' }}>
            On en parle déjà, ailleurs.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1rem', marginTop:'2.4rem' }}>
          {PHOTOS.map((p, i) => (
            <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`}
              style={{ borderRadius:16, overflow:'hidden', aspectRatio: i % 2 === 0 ? '4/3' : '3/4', background:'var(--paper-2)' }}>
              <img
                src={p}
                alt={`iPhone 18 Pro — photo communauté ${i+1}`}
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
