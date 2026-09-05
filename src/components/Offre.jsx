import { useState } from 'react'

// Collez ici l'URL de votre Google Apps Script après déploiement
const SHEET_URL = 'VOTRE_APPS_SCRIPT_URL'

export default function Offre() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const prenom = form.querySelector('#offre-prenom').value.trim()
    const email = form.querySelector('#offre-email').value.trim()
    setStatus('loading')
    try {
      // Google Apps Script n'accepte pas de JSON body en POST cross-origin,
      // on passe les données en query string via fetch no-cors
      const params = new URLSearchParams({ prenom, email, date: new Date().toISOString() })
      await fetch(`${SHEET_URL}?${params}`, { method: 'GET', mode: 'no-cors' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="offre" className="section-dark">
      <div className="offre-inner">
        <span className="eyebrow" style={{ justifyContent:'center' }}>Alerte lancement</span>
        <h2>Soyez le premier alerté à la sortie.</h2>
        <p>Dès que la date de lancement est confirmée, vous recevez en avant-première : notre comparatif final Pro vs Pro Max, les meilleures configurations selon votre budget, et le lien de précommande dès son ouverture.</p>
        <div className="offre-perks">
          {['Alerte J-0 à la sortie', 'Comparatif Pro vs Pro Max', 'Meilleure config selon votre budget'].map(perk => (
            <span key={perk}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              {perk}
            </span>
          ))}
        </div>

        {status === 'success' ? (
          <div className="offre-confirm">
            <p>Merci — vous serez alerté en priorité lors du lancement 🎉</p>
          </div>
        ) : (
          <form className="offre-form" id="offre-form" onSubmit={handleSubmit}>
            <label htmlFor="offre-prenom" className="visually-hidden">Prénom</label>
            <input
              type="text"
              id="offre-prenom"
              name="prenom"
              placeholder="Votre prénom"
              required
              autoComplete="given-name"
              style={{ marginBottom: '.6rem' }}
            />
            <label htmlFor="offre-email" className="visually-hidden">Adresse email</label>
            <input
              type="email"
              id="offre-email"
              name="email"
              placeholder="votre@email.com"
              required
              autoComplete="email"
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi…' : 'M\'alerter à la sortie'}
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
