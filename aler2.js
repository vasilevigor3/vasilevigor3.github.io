
const iframe = document.querySelector('.asd');

iframe.addEventListener('load', () => {
    const iframeWindow = iframe.contentWindow;
    iframeWindow.location.href = 'https://wikipedia.org';
    iframeWindow.location.href = 'https://kinopoisk.ru/';
    iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
