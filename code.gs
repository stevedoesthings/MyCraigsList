var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1DG9w6_ylKXFe4Xdlsflhh5W8_rH809Ry3uuQZFjFWys/edit#gid=0');

function doGet(e) {

  if (!e.parameter.page) {
    return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  return HtmlService.createTemplateFromFile(e.parameter['page'])
  .evaluate()
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getFilterCraigsListings() {
  var craigsListingsSheet = ss.getSheetByName("Listings");
  var craigsListings = craigsListingsSheet.getRange('A1:'+craigsListingsSheet.getLastRow()).getValues();
  var craigsListingsLen = craigsListings.length;
  var latLongValues = [];
  
  return craigsListings;
}

function deleteListing(row) {
  var craigsListingsSheet = ss.getSheetByName("Listings");
  craigsListingsSheet.deleteRow([row]);  
  return row;
}