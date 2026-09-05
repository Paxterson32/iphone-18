import { useEffect } from 'react'

const COLOR_MAP = {
  cherry: { label: 'Dark Cherry', img: '/iphone-18/Photos/iPhone-18-Pro-dark-cherry-2.webp' },
  blue:   { label: 'Bleu clair',  img: '/iphone-18/Photos/iphone 18 bleu.jpg' },
  silver: { label: 'Argent',      img: '/iphone-18/Photos/iphone 18 propre.webp' },
  black:  { label: 'Noir Sidéral',img: '/iphone-18/Photos/iphone 18 noir.jpg' },
}

const CMP_ROWS = [
  { label: 'Taille d\'écran', pro: 6.3, promax: 6.9, fmtPro: '6,3"', fmtPromax: '6,9"' },
  { label: 'Mémoire vive',   pro: 12,  promax: 16,  fmtPro: '12 Go', fmtPromax: '16 Go' },
  { label: 'Zoom optique',   pro: 3,   promax: 5,   fmtPro: '3×',    fmtPromax: '5×' },
  { label: 'Poids',          pro: 205, promax: 243, fmtPro: '205 g', fmtPromax: '243 g' },
]

export default function Choix() {
  useEffect(() => {
    // Swatches
    const swatches = document.querySelectorAll('.swatch')
    const colorname = document.getElementById('colorname')
    const imgStack = document.getElementById('choix-imgstack')
    const halo = document.getElementById('choix-halo')

    swatches.forEach(sw => {
      sw.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'))
        sw.classList.add('active')
        const c = sw.dataset.c
        const info = COLOR_MAP[c]
        if (colorname) colorname.textContent = info.label
        if (imgStack) {
          const imgs = imgStack.querySelectorAll('img')
          imgs.forEach(img => img.classList.remove('active'))
          const target = imgStack.querySelector(`img[data-c="${c}"]`)
          if (target) target.classList.add('active')
        }
        if (halo) {
          const haloColors = { cherry: 'var(--c-cherry-soft)', blue: 'var(--c-blue-soft)', silver: 'var(--c-silver-soft)', black: 'var(--c-black-soft)' }
          halo.style.background = `radial-gradient(circle, ${haloColors[c]} 0%, transparent 70%)`
        }
      })
    })

    // Comparator dots
    const rows = document.querySelectorAll('.cmp-row')
    const animate = () => {
      rows.forEach(row => {
        const pro = parseFloat(row.dataset.pro)
        const pm = parseFloat(row.dataset.promax)
        const min = Math.min(pro, pm) * 0.6
        const max = Math.max(pro, pm) * 1.1
        const toPercent = v => ((v - min) / (max - min)) * 80 + 10
        const pPro = toPercent(pro)
        const pPm = toPercent(pm)
        const dotPro = row.querySelector('.cmp-dot-pro')
        const dotPm = row.querySelector('.cmp-dot-promax')
        const conn = row.querySelector('.cmp-connector')
        const valPro = row.querySelector('.cmp-dot-pro .cmp-dot-val')
        const valPm = row.querySelector('.cmp-dot-promax .cmp-dot-val')
        if (dotPro) dotPro.style.left = pPro + '%'
        if (dotPm) dotPm.style.left = pPm + '%'
        if (conn) { conn.style.left = Math.min(pPro, pPm) + '%'; conn.style.right = (100 - Math.max(pPro, pPm)) + '%' }
        if (valPro) valPro.textContent = row.dataset.fmtPro
        if (valPm) valPm.textContent = row.dataset.fmtPromax
      })
    }
    setTimeout(animate, 400)

    // Quiz
    const quizBtns = document.querySelectorAll('.quiz-opts button')
    const result = document.getElementById('quiz-result')
    const answers = {
      pro: '<strong>Le Pro Max</strong> — l\'écran plus grand et l\'autonomie supérieure correspondent à votre usage intensif.',
      promax: '<strong>L\'iPhone 18 Pro</strong> — taille optimale, performances identiques, et plus léger pour un usage quotidien varié.',
    }
    quizBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (result) { result.innerHTML = answers[btn.dataset.a]; result.classList.add('show') }
      })
    })
  }, [])

  return (
    <section id="choix" className="section-paper">
      <div className="wrap">
        <div className="choix-top reveal">
          <span className="eyebrow">Choix</span>
          <h2>Lequel est fait pour vous ?</h2>
        </div>

        {/* Color picker + image stack */}
        <div className="choix-layout">
          <div className="choix-visual reveal">
            <div className="choix-halo" id="choix-halo" />
            <div className="choix-imgstack" id="choix-imgstack" style={{ width:'min(340px,80vw)', minHeight:420 }}>
              {Object.entries(COLOR_MAP).map(([c, info], i) => (
                <img
                  key={c}
                  src={info.img}
                  alt={`iPhone 18 Pro ${info.label}`}
                  data-c={c}
                  className={i === 0 ? 'active' : ''}
                  width="340"
                  height="420"
                  loading="lazy"
                  decoding="async"
                  style={{ objectFit:'cover', objectPosition:'center top', borderRadius:18, height:'100%' }}
                />
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="swatches" role="group" aria-label="Choisir une finition">
              {Object.keys(COLOR_MAP).map((c, i) => (
                <button key={c} className={`swatch${i === 0 ? ' active' : ''}`} data-c={c} aria-label={COLOR_MAP[c].label} />
              ))}
            </div>
            <div className="colorname mono" id="colorname">Dark Cherry</div>
          </div>
        </div>

        {/* Comparator */}
        <div className="choix-layout" style={{ marginTop: '5rem' }}>
          <div className="reveal">
            <span className="eyebrow">Comparateur</span>
            <div className="cmp-legend" style={{ marginTop: '1.2rem' }}>
              <span className="lp"><i />iPhone 18 Pro</span>
              <span className="lpm"><i />iPhone 18 Pro Max</span>
            </div>
            <div className="cmp-panel" id="cmp-panel">
              {CMP_ROWS.map((row, i) => (
                <div key={i} className="cmp-row"
                  data-pro={row.pro} data-promax={row.promax}
                  data-fmt-pro={row.fmtPro} data-fmt-promax={row.fmtPromax}>
                  <div className="cmp-label">{row.label}</div>
                  <div className="cmp-track">
                    <div className="cmp-connector" />
                    <div className="cmp-dot cmp-dot-pro"><span className="cmp-dot-pulse" /><span className="cmp-dot-val" /></div>
                    <div className="cmp-dot cmp-dot-promax"><span className="cmp-dot-pulse" /><span className="cmp-dot-val" /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quiz-box reveal">
            <p className="eyebrow" style={{ marginBottom:'1rem' }}>Personnalisation</p>
            <p className="quiz-q">Vous filmez et photographiez au quotidien, ou surtout de temps en temps ?</p>
            <div className="quiz-opts">
              <button data-a="pro">Au quotidien, intensivement</button>
              <button data-a="promax">De temps en temps</button>
            </div>
            <p className="quiz-result mono" id="quiz-result" />
          </div>
        </div>

        {/* CTA */}
        <div className="choix-cta reveal" style={{ marginTop: '2.4rem', justifyContent: 'center' }}>
          <a className="btn btn-solid btn-buy" href="#offre">
            M'alerter à la sortie →
          </a>
        </div>
      </div>
    </section>
  )
}
