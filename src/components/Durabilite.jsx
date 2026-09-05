export default function Durabilite() {
  return (
    <section id="durabilite" className="section-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Durabilité</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'24ch' }}>
            Pensé pour sortir, pas pour rester sous verre.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1.4rem', marginTop:'2.6rem' }}>
          {[
            { icon:'💧', label:'IP68 — 6m / 30min' },
            { icon:'🛡️', label:'Verre Ceramic Shield v3' },
            { icon:'🔩', label:'Cadre titane grade 5' },
            { icon:'♻️', label:'80% matériaux recyclés' },
          ].map((it, i) => (
            <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`}
              style={{ border:'1px solid var(--line-dark)', borderRadius:16, padding:'1.4rem', display:'flex', flexDirection:'column', gap:'.7rem' }}>
              <span style={{ fontSize:'1.8rem' }}>{it.icon}</span>
              <p style={{ fontFamily:'var(--f-mono)', fontSize:'.78rem', color:'var(--bone)' }}>{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
