const ITEMS = [
  {
    q: 'Quand sort l\'iPhone 18 en France ?',
    a: 'Apple annonce ses nouveaux iPhone lors d\'un keynote en septembre. L\'iPhone 18 devrait être dévoilé lors de l\'Apple Event de septembre 2025, avec une mise en vente environ deux semaines après l\'annonce. Les précommandes s\'ouvrent généralement le vendredi suivant le keynote — parfois dès minuit.',
  },
  {
    q: 'Quel est le prix attendu de l\'iPhone 18 Pro en France ?',
    a: 'Sur la base de l\'iPhone 17 Pro, l\'iPhone 18 Pro devrait démarrer à ~1 299 € en 128 Go. L\'iPhone 18 Pro Max est attendu à ~1 479 € en 256 Go.',
  },
  {
    q: 'Quelle est la vraie différence entre l\'iPhone 18 Pro et le Pro Max ?',
    a: 'Trois différences majeures : la taille (6,3 vs 6,9 pouces), l\'autonomie (le Pro Max a une batterie plus grande, soit 1 à 2 heures supplémentaires), et le téléobjectif (5× exclusif Pro Max). Pour 80% des utilisateurs, le Pro offre le meilleur équilibre.',
  },
  {
    q: 'Vaut-il la peine de passer de l\'iPhone 17 Pro au 18 Pro ?',
    a: 'Depuis un iPhone 17 Pro, l\'upgrade est moins urgent sauf si la nouvelle puce A19 Bionic, les améliorations photo ou l\'autonomie sont des critères clés. Depuis un iPhone 16 Pro ou plus ancien, le saut est significatif et pleinement justifié.',
  },
  {
    q: 'Où acheter l\'iPhone 18 au meilleur prix ?',
    a: 'Amazon est le choix recommandé pour la précommande : livraison garantie le jour de la sortie, paiement 100% sécurisé, et garantie de prix — si le tarif baisse entre la précommande et la livraison, vous êtes automatiquement facturé au prix le plus bas.',
  },
  {
    q: 'Quelles couleurs seront disponibles pour l\'iPhone 18 Pro ?',
    a: 'Selon les leaks, l\'iPhone 18 Pro serait disponible en Dark Cherry (bordeaux profond, couleur signature), Bleu clair, Argent et Noir Sidéral. La disponibilité exacte sera confirmée lors du keynote Apple.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">FAQ</span>
          <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.6rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'28ch' }}>
            Les questions que tout le monde se pose avant d'acheter.
          </h2>
        </div>
        <div style={{ marginTop:'2.8rem', borderTop:'1px solid var(--line-dark)' }}>
          {ITEMS.map((item, i) => (
            <details key={i} className={`reveal${i > 0 ? ' reveal-d' + Math.min(i, 3) : ''}`}
              style={{ borderBottom:'1px solid var(--line-dark)', padding:'1.6rem 0' }}>
              <summary style={{ cursor:'pointer', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' }}>
                <h3 style={{ fontSize:'clamp(.98rem,2.2vw,1.15rem)', fontWeight:460, margin:0 }}>{item.q}</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ flexShrink:0, color:'var(--ash)' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </summary>
              <p style={{ marginTop:'1rem', paddingRight:'2rem', color:'var(--ash)', fontSize:'.94rem', lineHeight:1.75, maxWidth:'66ch' }}
                dangerouslySetInnerHTML={{ __html: item.a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
