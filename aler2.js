
const iframe = document.querySelector('.asd');
iframe.addEventListener('load', () => {
    const iframeWindow = iframe.contentWindow;
    const documentIframeWindow = iframeWindow.document;    
    iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
