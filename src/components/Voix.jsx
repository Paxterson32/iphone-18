const TWEETS = [
  { handle: '@techfr_pierre', text: 'Les leaks du 18 Pro sont incroyables. Le module caméra arrière est d\'un autre niveau. Je précommande dès l\'ouverture.' },
  { handle: '@amelie_apple', text: 'Dark Cherry sur titane... Apple a définitivement compris l\'élégance. Prête à upgrader depuis mon 15 Pro.' },
  { handle: '@julien_geek', text: 'Si les specs autonomie sont confirmées, le 18 Pro Max est game over pour les concurrents. 33h c\'est énorme.' },
  { handle: '@mathilde_photo', text: 'Le téléobjectif 5× sur Pro Max + ProRes... c\'est un vrai appareil photo compact. Mon Lumix G7 tremble.' },
]

export default function Voix() {
  return (
    <section id="voix" className="section-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Avis</span>
          <h2 style={{ fontSize:'clamp(1.5rem,4.2vw,2.2rem)', fontWeight:420, marginTop:'.7rem' }}>
            La communauté Apple<br/>attend l'iPhone 18.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.2rem', marginTop:'2.6rem' }}>
          {TWEETS.map((tw, i) => (
            <div key={i} className={`reveal${i > 0 ? ' reveal-d' + i : ''}`}
              style={{ border:'1px solid var(--line-dark)', borderRadius:16, padding:'1.4rem', display:'flex', flexDirection:'column', gap:'.9rem' }}>
              <p style={{ fontSize:'.88rem', lineHeight:1.65, color:'var(--bone)' }}>"{tw.text}"</p>
              <p style={{ fontFamily:'var(--f-mono)', fontSize:'.68rem', color:'var(--ash)' }}>{tw.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
