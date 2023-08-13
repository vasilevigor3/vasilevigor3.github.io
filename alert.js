		const iframe = document.querySelector('.asd');
		iframe.addEventListener('load', () => {
		    const iframeWindow = iframe.contentWindow;
		    iframeWindow.alert(iframe.contentWindow.document.cookie);
		});
