import { useEffect } from 'react'

// Carousel slides — real image files from public/Photos/
const SLIDES = [
  { src: '/iphone-18/Photos/iPhone-18-Pro-colors-mockup-1.webp', alt: 'iPhone 18 Pro — toutes les couleurs' },
  { src: '/iphone-18/Photos/iPhone-18-Pro-Max-Dark-Cherry-et-Light-Blue.jpg', alt: 'iPhone 18 Pro Max — Dark Cherry et Bleu clair' },
  { src: '/iphone-18/Photos/iPhone-18-Pro-Max-noir.jpg', alt: 'iPhone 18 Pro Max — Noir Sidéral' },
]

export default function Hero() {
  useEffect(() => {
    let current = 0
    const imgs = document.querySelectorAll('.entree-bg img')
    if (!imgs.length) return

    const tick = () => {
      imgs[current].classList.remove('active')
      current = (current + 1) % imgs.length
      imgs[current].classList.add('active')
    }

    const timer = setInterval(tick, 4200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="entree" className="section-dark">
      <div className="entree-bg">
        {SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={i === 0 ? 'active' : ''}
            fetchpriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
      <div className="entree-content">
        <h1 className="entree-title">Quelque chose <em>approche.</em></h1>
        <p className="entree-sub">Une nouvelle génération d'iPhone se prépare. Avant de la découvrir en détail, un premier signal doit être désamorcé.</p>
      </div>
      <div className="entree-scrollhint" aria-hidden="true">
        <span>Défiler</span>
        <div className="line" />
      </div>
    </section>
  )
}
