export default function Createurs() {
  return (
    <section id="createurs" className="section-graphite">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Créateurs</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'20ch' }}>
            Un studio qui tient dans une poche.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'2rem', marginTop:'2.8rem' }}>
          {[
            { img:'/iphone-18/Photos/image00009.jpeg', title:'Cinematic Mode 4K', body:'Profondeur de champ adaptative en temps réel, en 4K 60fps.' },
            { img:'/iphone-18/Photos/image00010.jpeg', title:'Spatial Video', body:'Filmez en 3D pour Vision Pro dès le premier jour.' },
            { img:'/iphone-18/Photos/image00011.jpeg', title:'Log & ProRes', body:'Filmer en qualité broadcast directement depuis l\'application caméra.' },
          ].map((it, i) => (
            <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`}>
              <div style={{ borderRadius:12, overflow:'hidden', aspectRatio:'16/9', background:'var(--ink)' }}>
                <img src={it.img} alt={it.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" decoding="async" />
              </div>
              <h3 style={{ marginTop:'1rem', fontSize:'clamp(1rem,2.4vw,1.2rem)', fontWeight:460 }}>{it.title}</h3>
              <p style={{ color:'var(--ash)', fontSize:'.9rem', lineHeight:1.65, marginTop:'.5rem' }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
