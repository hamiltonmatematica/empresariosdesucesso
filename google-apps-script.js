// Google Apps Script para a Planilha Empresários de Sucesso Norte de Minas
// Link da Planilha: https://docs.google.com/spreadsheets/d/1qNdRRrX0j0NXn9US1AldMrPdm0o92Smzj_qUABfbykc/edit

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById('1qNdRRrX0j0NXn9US1AldMrPdm0o92Smzj_qUABfbykc');
    const sheet = ss.getActiveSheet();
    
    // Suporta tanto JSON quanto FormData
    let name = '', phone = '', city = '', ticketType = '';
    
    if (e.postData && e.postData.contents) {
      try {
        const data = JSON.parse(e.postData.contents);
        name = data.name || '';
        phone = data.phone || '';
        city = data.city || '';
        ticketType = data.ticketType || '';
      } catch (err) {
        name = e.parameter.name || '';
        phone = e.parameter.phone || '';
        city = e.parameter.city || '';
        ticketType = e.parameter.ticketType || '';
      }
    }

    const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const ticketName = ticketType === 'day1-2' ? 'Dia 01 + 02 (Imersão + Bônus)' : 'Dia 01 (Apenas)';

    // Adiciona linha na planilha
    sheet.appendRow([timestamp, name, phone, city, ticketName]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setupSheet() {
  const ss = SpreadsheetApp.openById('1qNdRRrX0j0NXn9US1AldMrPdm0o92Smzj_qUABfbykc');
  const sheet = ss.getActiveSheet();
  const headers = ['Data/Hora', 'Nome Completo', 'WhatsApp', 'Cidade do Evento', 'Tipo de Ingresso'];

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#00d1ff')
      .setFontColor('#020617');
  }
}
