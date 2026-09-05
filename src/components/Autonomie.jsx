export default function Autonomie() {
  return (
    <section id="autonomie" className="section-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Autonomie</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'22ch' }}>
            Le vrai progrès, c'est la fin de journée.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'2rem', marginTop:'2.8rem' }}>
          <div className="reveal">
            <img
              src="/iphone-18/Photos/image00013.jpeg"
              alt="iPhone 18 Pro — autonomie"
              style={{ width:'100%', borderRadius:16, marginBottom:'1.4rem' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'1.6rem' }}>
            {[
              { model: 'iPhone 18 Pro', hours: '~26h', label: 'Lecture vidéo' },
              { model: 'iPhone 18 Pro Max', hours: '~33h', label: 'Lecture vidéo — record de la gamme Pro' },
            ].map((m, i) => (
              <div key={i} className={`reveal${i > 0 ? ' reveal-d1' : ''}`}
                style={{ border:'1px solid var(--line-dark)', borderRadius:16, padding:'1.4rem' }}>
                <p style={{ fontFamily:'var(--f-mono)', fontSize:'.65rem', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--accent-soft)', marginBottom:'.7rem' }}>{m.model}</p>
                <p style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(2rem,5vw,3rem)', fontWeight:600, lineHeight:1 }}>{m.hours}</p>
                <p style={{ fontSize:'.82rem', color:'var(--ash)', marginTop:'.4rem' }}>{m.label}</p>
              </div>
            ))}
            <p className="reveal" style={{ fontSize:'.8rem', color:'var(--ash)', fontFamily:'var(--f-mono)' }}>
              + Charge MagSafe 30W · USB-C 3 · Charge inversée
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
