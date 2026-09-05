const PLANS = [
  {
    id: 'pro',
    label: 'iPhone 18 Pro',
    price: '~1 299 €',
    sub: 'Prix de départ estimé — 128 Go',
    highlight: false,
    rows: [
      { storage: '128 Go', price: '~1 299 €' },
      { storage: '256 Go', price: '~1 429 €' },
      { storage: '512 Go', price: '~1 659 €' },
      { storage: '1 To',   price: '~1 899 €' },
    ],
  },
  {
    id: 'promax',
    label: 'iPhone 18 Pro Max',
    price: '~1 479 €',
    sub: 'Prix de départ estimé — 256 Go',
    highlight: true,
    badge: 'Plus vendu',
    rows: [
      { storage: '256 Go', price: '~1 479 €' },
      { storage: '512 Go', price: '~1 699 €' },
      { storage: '1 To',   price: '~1 979 €' },
    ],
  },
]

export default function Prix() {
  return (
    <section id="prix" className="section-paper">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Prix</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.6rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'28ch', color:'var(--ink)' }}>
            iPhone 18 Pro : quel prix attendre en France ?
          </h2>
          <p style={{ color:'var(--ash)', marginTop:'1rem', maxWidth:'54ch', fontSize:'.98rem', lineHeight:1.7 }}>
            Estimations basées sur la grille tarifaire de l'iPhone 17 Pro et les tendances historiques d'Apple sur le marché français.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'2rem', marginTop:'2.8rem' }}>
          {PLANS.map(plan => (
            <div key={plan.id} className="reveal"
              style={{
                border: `1px solid ${plan.highlight ? 'var(--c-cherry)' : 'var(--line-light)'}`,
                borderRadius:18, padding:'2rem', background:'var(--paper-2)', position:'relative'
              }}>
              {plan.badge && (
                <div style={{ position:'absolute', top:'1rem', right:'1rem', background:'var(--c-cherry)', color:'#fff',
                  fontFamily:'var(--f-mono)', fontSize:'.58rem', letterSpacing:'.1em', textTransform:'uppercase',
                  padding:'.3rem .7rem', borderRadius:100 }}>
                  {plan.badge}
                </div>
              )}
              <p style={{ fontFamily:'var(--f-mono)', fontSize:'.65rem', letterSpacing:'.12em', textTransform:'uppercase',
                color: plan.highlight ? 'var(--c-cherry)' : 'var(--accent)', marginBottom:'1rem' }}>
                {plan.label}
              </p>
              <p style={{ fontSize:'clamp(2rem,4.5vw,2.8rem)', fontWeight:600, fontFamily:'var(--f-mono)', color:'var(--ink)', lineHeight:1 }}>
                {plan.price}
              </p>
              <p style={{ fontSize:'.82rem', color:'var(--ash)', marginTop:'.4rem', marginBottom:'1.5rem' }}>{plan.sub}</p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.6rem' }}>
                {plan.rows.map((row, i) => (
                  <li key={i} style={{ display:'flex', justifyContent:'space-between', fontSize:'.85rem', color:'var(--ink)',
                    borderBottom: i < plan.rows.length - 1 ? '1px solid var(--line-light)' : 'none', paddingBottom: i < plan.rows.length - 1 ? '.6rem' : 0 }}>
                    <span>{row.storage}</span><strong>{row.price}</strong>
                  </li>
                ))}
              </ul>
              <a
                href="#offre"
                className="btn btn-solid btn-buy"
                style={{ display:'block', textAlign:'center', marginTop:'1.6rem', borderRadius:100 }}>
                Être alerté à la sortie →
              </a>
            </div>
          ))}
        </div>
        <p className="reveal" style={{ marginTop:'1.8rem', fontSize:'.74rem', color:'var(--ash)', fontFamily:'var(--f-mono)' }}>
          * Estimations avant annonce officielle. Prix définitifs communiqués par Apple lors du lancement.
        </p>
      </div>
    </section>
  )
}
