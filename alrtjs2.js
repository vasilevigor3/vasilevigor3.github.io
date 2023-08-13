
const iframe = document.querySelector('.asd');
const iframeWindow = iframe.contentWindow;
iframeWindow.location.href = "https://wikipedia.org";
iframeWindow.location.href = "https://kinopoisk.ru/";
iframe.addEventListener('load', () => {
    const iframeWindow = iframe.contentWindow;
    iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
