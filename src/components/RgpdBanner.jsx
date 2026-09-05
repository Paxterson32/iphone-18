import { useState } from 'react'

export default function RgpdBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('rgpd_consent'))

  const accept = () => {
    localStorage.setItem('rgpd_consent', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('rgpd_consent', 'declined')
    setVisible(false)
    // Disable email form
    const emailInput = document.getElementById('offre-email')
    const submitBtn = document.querySelector('#offre-form button[type="submit"]')
    if (emailInput) { emailInput.disabled = true; emailInput.placeholder = 'Consentement requis' }
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Consentement requis' }
  }

  if (!visible) return null

  return (
    <div id="rgpd-banner" role="dialog" aria-modal="false" aria-label="Gestion des données personnelles">
      <p>
        Ce site collecte votre adresse email pour vous informer en priorité de la disponibilité de l'iPhone 18.{' '}
        <a href="#mentions-legales">Politique de confidentialité</a>
      </p>
      <div id="rgpd-btns">
        <button id="rgpd-accept" onClick={accept}>Accepter</button>
        <button id="rgpd-decline" onClick={decline}>Refuser</button>
      </div>
    </div>
  )
}
