import { useState } from 'react'

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID' // Replace with real Formspree form ID

export default function Offre() {
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
        <p>Dès que la date de lancement est confirmée, vous recevez en avant-première : notre comparatif final Pro vs Pro Max, les meilleures configurations selon votre budget, et le lien de précommande dès son ouverture.</p>
        <div className="offre-perks">
          {['Recommandation personnalisée', 'Alertes en avant-première', 'Offres réservées'].map(perk => (
            <span key={perk}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              {perk}
            </span>
          ))}
        </div>

        {status === 'success' ? (
          <p className="offre-confirm">Merci — vous serez alerté en priorité lors du lancement.</p>
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

      </div>
    </section>
  )
}
