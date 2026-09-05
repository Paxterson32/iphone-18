export default function Moteur() {
  return (
    <section id="moteur" className="section-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Performance</span>
          <h2 className="reveal" style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'22ch' }}>
            La puissance qu'il faut pour ce qui arrive après.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'2rem 3rem', marginTop:'3rem' }}>
          <div className="reveal">
            <img
              src="/iphone-18/Photos/image00012.jpeg"
              alt="Puce A19 Bionic — iPhone 18 Pro"
              style={{ width:'100%', borderRadius:16, marginBottom:'1.6rem' }}
              loading="lazy"
              decoding="async"
            />
            <h3 style={{ fontFamily:'var(--f-mono)', fontSize:'.72rem', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--accent-soft)', marginBottom:'.6rem' }}>Puce A19 Bionic</h3>
            <p style={{ color:'var(--ash)', fontSize:'.94rem', lineHeight:1.7 }}>Fabriquée en 3 nm de 2ème génération, la A19 Bionic offre +20% de performance CPU et +30% GPU par rapport à la A18 Pro.</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'1.4rem' }}>
            {[
              { label: 'Neural Engine', val: '36 cœurs', delta: '+40% IA' },
              { label: 'CPU', val: '6 cœurs', delta: '+20% perf.' },
              { label: 'GPU', val: '6 cœurs', delta: '+30% graphiques' },
              { label: 'RAM', val: '12–16 Go', delta: 'Selon modèle' },
            ].map((stat, i) => (
              <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`}
                style={{ borderTop:'1px solid var(--line-dark)', paddingTop:'1rem', display:'flex', justifyContent:'space-between', alignItems:'baseline', flexWrap:'wrap', gap:'.4rem' }}>
                <span style={{ fontSize:'.85rem', color:'var(--ash)' }}>{stat.label}</span>
                <div style={{ textAlign:'right' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontWeight:600, fontSize:'1.05rem' }}>{stat.val}</span>
                  <span style={{ fontSize:'.72rem', color:'var(--accent-soft)', display:'block', fontFamily:'var(--f-mono)' }}>{stat.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
