export default function FloatCta({ affiliate }) {
  return (
    <div id="floatcta">
      <span>Précommandez sur Amazon dès l'ouverture</span>
      <a id="cta-pro" href={affiliate.pro} rel="nofollow sponsored" target="_blank">
        Précommander →
      </a>
    </div>
  )
}
