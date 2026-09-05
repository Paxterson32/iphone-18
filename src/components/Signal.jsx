import { useEffect, useRef } from 'react'

export default function Signal() {
  const timerRef = useRef(null)

  useEffect(() => {
    const btn = document.getElementById('defuse-btn')
    const dialProg = document.getElementById('dial-prog')
    const dialTime = document.getElementById('dial-time')
    const reveal = document.getElementById('signal-reveal')
    const continueBtn = document.getElementById('reveal-continue')
    if (!btn || !dialProg || !dialTime) return

    let secs = 45
    const TOTAL = 45
    const CIRCUM = 339

    const fmt = (s) => `00:${String(s).padStart(2, '0')}`
    dialTime.textContent = fmt(secs)

    timerRef.current = setInterval(() => {
      secs--
      if (secs < 0) {
        clearInterval(timerRef.current)
        if (reveal) { reveal.classList.add('show'); document.body.style.overflow = 'hidden' }
        return
      }
      dialTime.textContent = fmt(secs)
      dialProg.style.strokeDashoffset = CIRCUM * (1 - secs / TOTAL)
    }, 1000)

    btn.addEventListener('click', () => {
      clearInterval(timerRef.current)
      if (reveal) { reveal.classList.add('show'); document.body.style.overflow = 'hidden' }
    })

    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        if (reveal) { reveal.classList.remove('show'); document.body.style.overflow = '' }
        const next = document.getElementById('mouvement')
        if (next) next.scrollIntoView({ behavior: 'smooth' })
      })
    }

    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <>
      <section id="signal" className="section-dark">
        <div className="section-seam seam-to-dark" />
        <div className="signal-inner">
          <span className="eyebrow">Signal</span>
          <p className="signal-copy" id="signal-copy">La page va se <span className="accentword">transformer</span>.<br/>Trouvez comment l'arrêter.</p>
          <div className="dial">
            <svg viewBox="0 0 120 120">
              <circle className="track" cx="60" cy="60" r="54" />
              <circle className="prog" id="dial-prog" cx="60" cy="60" r="54" strokeDasharray="339" strokeDashoffset="0" />
            </svg>
            <div className="dial-face">
              <span className="dial-time mono" id="dial-time">00:45</span>
              <span className="dial-hint">avant transformation</span>
            </div>
          </div>
          <button id="defuse-btn">Désamorcer</button>
        </div>
      </section>

      <div className="signal-reveal" id="signal-reveal" role="dialog" aria-modal="true" aria-label="Révélation">
        <img
          src="/iphone-18/Photos/iPhone-18-Pro-colors-mockup-1.webp"
          alt="iPhone 18 Pro — toutes les couleurs"
          width="380"
          height="280"
          loading="lazy"
        />
        <h3>Voilà ce qui arrive.</h3>
        <p>iPhone 18 Pro et iPhone 18 Pro Max. Deux tailles, une seule idée : aller plus loin sans rien perdre en simplicité.</p>
        <button id="reveal-continue">Continuer ↓</button>
      </div>
    </>
  )
}
