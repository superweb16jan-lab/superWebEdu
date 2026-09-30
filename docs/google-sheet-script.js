/**
 * superWebSiksha - Google Sheets Lead Receiver Script
 * ---------------------------------------------------
 * INSTRUCTIONS:
 * 1. Create or open your Google Sheet for admission inquiries.
 * 2. Click on "Extensions" in the top menu -> select "Apps Script".
 * 3. Delete any default code in Code.gs, and paste this entire code below.
 * 4. Click the blue "Deploy" button (top right) -> choose "New deployment".
 * 5. Click the gear icon beside "Select type" -> choose "Web app".
 * 6. Set Description: "superWebSiksha Lead Receiver".
 * 7. Set "Execute as": "Me".
 * 8. Set "Who has access": "Anyone" (IMPORTANT: must be Anyone so the website can post).
 * 9. Click "Deploy", review/authorize permissions with your Google account.
 * 10. Copy the generated "Web App URL" (starts with https://script.google.com/macros/s/...)
 * 11. Paste this URL into your .env.local as:
 *     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent requests

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    // Auto-create header row if the sheet is blank
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp (IST)",
        "Student Name",
        "Phone Number",
        "Email Address",
        "Selected Course",
        "Preferred University",
        "City / Location",
        "Remarks / Message",
        "Lead Source"
      ];
      sheet.appendRow(headers);

      // Style header row: Navy background, White bold text
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#102957");
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var now = new Date();
    var istFormattedDate = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy, hh:mm:ss a");

    var row = [
      data.timestamp || istFormattedDate,
      data.name || "",
      data.phone || "",
      data.email || "Not Provided",
      data.course || "",
      data.university || "",
      data.city || "Not Specified",
      data.message || "",
      data.source || "Website Query Form"
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("superWebSiksha Lead Receiver is LIVE and healthy.");
}
