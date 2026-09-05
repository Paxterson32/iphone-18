const TRUST = [
  { icon: <path d="M3 7h13v10H3zM16 10h3l2 3v4h-5zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>, label:'Livraison suivie par Amazon' },
  { icon: <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5z"/>, label:'Paiement sécurisé Amazon' },
  { icon: <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0zM12 8v4l3 2"/>, label:'Service client Amazon, 7j/7' },
  { icon: <path d="M20 6 9 17l-5-5"/>, label:'Appareils garantis authentiques' },
]

export default function Reassurance() {
  return (
    <section id="reassurance" className="section-graphite">
      <div className="wrap">
        <p className="trust-intro reveal">
          En tant que partenaire du programme Amazon, chaque commande passée depuis ce site est traitée directement par Amazon — livraison, paiement et service client sont assurés dans leurs meilleures conditions habituelles.
        </p>
        <div className="trust-row">
          {TRUST.map((t, i) => (
            <div key={i} className={`trust-item reveal${i > 0 ? ' reveal-d' + i : ''}`}>
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {t.icon}
              </svg>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
