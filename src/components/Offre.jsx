import { useState } from 'react'

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID' // Replace with real Formspree form ID

export default function Offre({ affiliate }) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.querySelector('#offre-email').value
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="offre" className="section-dark">
      <div className="offre-inner">
        <span className="eyebrow" style={{ justifyContent:'center' }}>Offre</span>
        <h2>Soyez prêt dès l'ouverture des précommandes.</h2>
        <p>Recevez en priorité : l'alerte Amazon dès que les précommandes ouvrent, notre comparatif final Pro vs Pro Max, et les meilleures configurations selon votre budget.</p>
        <div className="offre-perks">
          {['Recommandation personnalisée', 'Alertes en avant-première', 'Offres réservées'].map(perk => (
            <span key={perk}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              {perk}
            </span>
          ))}
        </div>

        {status === 'success' ? (
          <p className="offre-confirm">Merci — votre recommandation arrive par email.</p>
        ) : (
          <form className="offre-form" id="offre-form" onSubmit={handleSubmit}>
            <label htmlFor="offre-email" className="visually-hidden">Adresse email</label>
            <input type="email" id="offre-email" name="email" placeholder="votre@email.com" required />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi…' : 'Recevoir ma recommandation'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p style={{ color:'var(--accent-soft)', fontSize:'.82rem', marginTop:'.5rem' }}>
            Une erreur est survenue. Réessayez ou contactez-nous directement.
          </p>
        )}

        <div className="offre-buy">
          <a className="btn btn-solid btn-buy" href={affiliate.pro} rel="nofollow sponsored" target="_blank">
            Précommander le Pro sur Amazon
          </a>
          <a className="btn btn-ghost" href={affiliate.proMax} rel="nofollow sponsored" target="_blank">
            Précommander le Pro Max →
          </a>
        </div>
      </div>
    </section>
  )
}
