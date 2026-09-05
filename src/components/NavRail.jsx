const SECTIONS = [
  'entree','signal','mouvement','matiere','finitions','choix',
  'vision','createurs','moteur','autonomie','secret','durabilite',
  'connexion','communaute','voix','prix','faq','offre'
]

export default function NavRail() {
  return (
    <nav id="rail" aria-label="Navigation des sections">
      {SECTIONS.map(s => (
        <button key={s} data-target={s} aria-label={s.charAt(0).toUpperCase() + s.slice(1)} />
      ))}
    </nav>
  )
}
