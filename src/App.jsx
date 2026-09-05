import { useEffect } from 'react'
import LaunchStrip from './components/LaunchStrip'
import AffiliateNotice from './components/AffiliateNotice'
import NavRail from './components/NavRail'
import FloatCta from './components/FloatCta'
import Hero from './components/Hero'
import Signal from './components/Signal'
import Mouvement from './components/Mouvement'
import Matiere from './components/Matiere'
import Finitions from './components/Finitions'
import Choix from './components/Choix'
import Vision from './components/Vision'
import Createurs from './components/Createurs'
import Moteur from './components/Moteur'
import Autonomie from './components/Autonomie'
import Secret from './components/Secret'
import Durabilite from './components/Durabilite'
import Connexion from './components/Connexion'
import Communaute from './components/Communaute'
import Voix from './components/Voix'
import Prix from './components/Prix'
import FAQ from './components/FAQ'
import Reassurance from './components/Reassurance'
import Offre from './components/Offre'
import Footer from './components/Footer'
import RgpdBanner from './components/RgpdBanner'

export default function App() {
  // Mouse glow follower
  useEffect(() => {
    const glow = document.getElementById('glow')
    if (!glow || window.matchMedia('(hover:none)').matches) return
    const move = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Rail active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]')
    const buttons = document.querySelectorAll('#rail button')
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            buttons.forEach(b => b.classList.remove('active'))
            const btn = document.querySelector(`#rail button[data-target="${e.target.id}"]`)
            if (btn) btn.classList.add('active')
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Float CTA visibility
  useEffect(() => {
    const hero = document.getElementById('entree')
    const cta = document.getElementById('floatcta')
    if (!hero || !cta) return
    const io = new IntersectionObserver(
      ([e]) => cta.classList.toggle('show', !e.isIntersecting),
      { threshold: 0.1 }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  // Rail button scroll
  useEffect(() => {
    const rail = document.getElementById('rail')
    if (!rail) return
    const handler = (e) => {
      const target = e.target.closest('button[data-target]')
      if (!target) return
      const section = document.getElementById(target.dataset.target)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    }
    rail.addEventListener('click', handler)
    return () => rail.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <div id="glow" aria-hidden="true" />
      <LaunchStrip />
      <AffiliateNotice />
      <NavRail />
      <FloatCta />
      <main>
        <Hero />
        <Signal />
        <Mouvement />
        <Matiere />
        <Finitions />
        <Choix />
        <Vision />
        <Createurs />
        <Moteur />
        <Autonomie />
        <Secret />
        <Durabilite />
        <Connexion />
        <Communaute />
        <Voix />
        <Prix />
        <FAQ />
        <Reassurance />
        <Offre />
      </main>
      <Footer />
      <RgpdBanner />
    </>
  )
}
