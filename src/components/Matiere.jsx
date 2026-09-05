import { useEffect } from 'react'

const ITEMS = [
  {
    num: '01', title: 'Titane de grade 5.',
    body: 'Le même alliage utilisé en aéronautique — léger, indéformable, avec un toucher qui change selon la lumière.',
    img: '/iphone-18/Photos/image00007.jpeg',
    tag: 'Cadre titane grade 5'
  },
  {
    num: '02', title: 'Dynamic Island, encore plus discrète.',
    body: 'La découpe avant évolue : plus petite, mieux intégrée, et toujours aussi intelligente pour vos notifications.',
    img: '/iphone-18/Photos/image00003.jpeg',
    tag: 'Dynamic Island 2.0'
  },
  {
    num: '03', title: 'Quatre finitions, quatre caractères.',
    body: 'Dark Cherry, Bleu clair, Argent et Noir Sidéral. Chaque couleur est pensée pour vieillir avec le même éclat.',
    img: '/iphone-18/Photos/iPhone-18-Pro-dark-cherry-2.webp',
    tag: 'Finitions micro-texturées'
  },
]

export default function Matiere() {
  useEffect(() => {
    const items = document.querySelectorAll('.matiere-item')
    const visual = document.getElementById('matiere-visual-img')
    const tag = document.getElementById('matiere-tag')

    items.forEach((item, i) => {
      const head = item.querySelector('.matiere-item-head')
      head.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')
        items.forEach(it => it.classList.remove('open'))
        if (!isOpen) {
          item.classList.add('open')
          if (visual) visual.src = ITEMS[i].img
          if (tag) tag.textContent = ITEMS[i].tag
        }
      })
    })
    // Open first by default
    if (items[0]) items[0].classList.add('open')
  }, [])

  return (
    <section id="matiere" className="section-dark">
      <div className="wrap">
        <div className="matiere-grid">
          <div className="matiere-sticky">
            <div className="matiere-visual reveal">
              <img
                id="matiere-visual-img"
                src={ITEMS[0].img}
                alt="Détail matière iPhone 18 Pro"
                width="560"
                height="420"
                loading="lazy"
              />
              <div className="matiere-tag" id="matiere-tag">{ITEMS[0].tag}</div>
            </div>
          </div>
          <div className="matiere-text">
            <div className="reveal">
              <span className="eyebrow">Matière</span>
              <h2 style={{ fontSize:'clamp(1.6rem,4.4vw,2.5rem)', fontWeight:420, marginTop:'.7rem', maxWidth:'20ch' }}>
                Chaque détail pèse son poids.
              </h2>
            </div>
            <div className="matiere-acc">
              {ITEMS.map((it, i) => (
                <div key={i} className="matiere-item">
                  <button className="matiere-item-head">
                    <span className="num mono">{it.num}</span>
                    <h3>{it.title}</h3>
                    <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                  </button>
                  <div className="matiere-item-body">
                    <p>{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
