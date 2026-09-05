/**
 * GOOGLE APPS SCRIPT — Collecte des leads iPhone 18
 *
 * ÉTAPES D'INSTALLATION :
 * 1. Ouvrez Google Drive → Nouveau → Google Sheets → nommez-le "Leads iPhone 18"
 * 2. Dans le sheet, allez sur Extensions → Apps Script
 * 3. Remplacez tout le contenu par ce fichier
 * 4. Cliquez sur "Déployer" → "Nouveau déploiement"
 *    - Type : Application Web
 *    - Exécuter en tant que : Moi
 *    - Accès autorisé à : Tout le monde
 * 5. Autorisez les permissions Google
 * 6. Copiez l'URL de déploiement
 * 7. Dans Offre.jsx, remplacez VOTRE_APPS_SCRIPT_URL par cette URL
 */

const SHEET_NAME = 'Leads' // Nom de l'onglet dans le Google Sheet

function doGet(e) {
  try {
    const prenom = e.parameter.prenom || ''
    const email  = e.parameter.email  || ''
    const date   = e.parameter.date   || new Date().toISOString()

    if (!email) {
      return json({ result: 'error', message: 'Email manquant' })
    }

    const ss    = SpreadsheetApp.getActiveSpreadsheet()
    let sheet   = ss.getSheetByName(SHEET_NAME)

    // Créer l'onglet + en-têtes si premier lancement
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME)
      sheet.appendRow(['Date', 'Prénom', 'Email'])
      sheet.getRange('1:1').setFontWeight('bold')
      sheet.setFrozenRows(1)
    }

    // Vérifier si l'email est déjà inscrit (évite les doublons)
    const emails = sheet.getRange(2, 3, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat()
    if (emails.includes(email)) {
      return json({ result: 'duplicate', message: 'Email déjà inscrit' })
    }

    // Ajouter la ligne
    sheet.appendRow([
      Utilities.formatDate(new Date(date), Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss'),
      prenom,
      email,
    ])

    return json({ result: 'success' })

  } catch (err) {
    return json({ result: 'error', message: err.toString() })
  }
}

function json(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
}
