export default function Secret() {
  return (
    <section id="secret" className="section-dark">
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'2rem', alignItems:'center' }}>
          <div className="reveal">
            <span className="eyebrow">Secret</span>
            <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'22ch' }}>
              Une porte apparaît au bout de la nuit.
            </h2>
            <p style={{ color:'var(--ash)', fontSize:'.94rem', lineHeight:1.72, marginTop:'1rem', maxWidth:'40ch' }}>
              Le bouton Action évolue. La détection de chutes, la vision nocturne sans lampe, et Apple Intelligence font leur entrée dans votre quotidien de manière transparente.
            </p>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="/iphone-18/Photos/IMG_8803.webp"
              alt="iPhone 18 Pro — détail"
              style={{ width:'100%', borderRadius:18, boxShadow:'0 40px 80px -30px rgba(0,0,0,.6)' }}
              loading="lazy"
              decoding="async"
            />
            <p style={{ marginTop:'.8rem', fontFamily:'var(--f-mono)', fontSize:'.62rem', color:'var(--ash)', letterSpacing:'.04em' }}>Ce qui vous attend derrière.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
