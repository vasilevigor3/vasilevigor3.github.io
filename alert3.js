const iframe = document.querySelector('.asd');
iframe.src="/css/bootstrap.min.css";
iframe.addEventListener('load', () => {
  
  const childDocument = iframe.contentDocument || iframe.contentWindow.document;  
  const iframeWindow = iframe.contentWindow;
  iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
