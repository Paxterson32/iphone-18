export default function Footer() {
  return (
    <footer id="mentions-legales">
      <div style={{ maxWidth:1320, margin:'0 auto 2.4rem', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'2rem 3rem', textAlign:'left' }}>
        <div>
          <p style={{ fontFamily:'IBM Plex Mono,monospace', fontSize:'.62rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--c-cherry-soft)', marginBottom:'.8rem' }}>Mentions légales</p>
          <p style={{ fontSize:'.78rem', color:'var(--ash)', lineHeight:1.75 }}>
            Éditeur : <strong style={{ color:'var(--bone)' }}>NOM / SOCIÉTÉ À COMPLÉTER</strong><br/>
            SIRET : À COMPLÉTER<br/>
            Adresse : À COMPLÉTER<br/>
            Contact : <a href="mailto:contact@VOTRE-DOMAINE.fr" style={{ color:'var(--ash)' }}>contact@VOTRE-DOMAINE.fr</a><br/>
            Hébergeur : GitHub Pages (Microsoft)
          </p>
        </div>
        <div>
          <p style={{ fontFamily:'IBM Plex Mono,monospace', fontSize:'.62rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--c-cherry-soft)', marginBottom:'.8rem' }}>À propos</p>
          <p style={{ fontSize:'.78rem', color:'var(--ash)', lineHeight:1.75 }}>
            Ce site est un guide d'achat indépendant dédié à l'iPhone 18 Pro & Pro Max. Les informations publiées sont basées sur les rumeurs, leaks et tendances historiques d'Apple avant l'annonce officielle.
          </p>
        </div>
        <div>
          <p style={{ fontFamily:'IBM Plex Mono,monospace', fontSize:'.62rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--c-cherry-soft)', marginBottom:'.8rem' }}>Données personnelles</p>
          <p style={{ fontSize:'.78rem', color:'var(--ash)', lineHeight:1.75 }}>
            Les adresses email collectées sont utilisées uniquement pour vous informer en priorité du lancement de l'iPhone 18. Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression en nous contactant à{' '}
            <a href="mailto:contact@VOTRE-DOMAINE.fr" style={{ color:'var(--ash)' }}>contact@VOTRE-DOMAINE.fr</a>.
          </p>
        </div>
      </div>
      <div style={{ borderTop:'1px solid rgba(243,239,231,.1)', paddingTop:'1.4rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'.8rem' }}>
        <a href="#entree" style={{ fontSize:'.78rem', color:'var(--ash)' }}>Retour en haut ↑</a>
        <p style={{ fontSize:'.72rem', color:'#6b6357' }}>
          © 2026 AJagency — Les spécifications affichées sont basées sur les informations disponibles avant lancement officiel et peuvent différer du produit final.
        </p>
      </div>
    </footer>
  )
}
