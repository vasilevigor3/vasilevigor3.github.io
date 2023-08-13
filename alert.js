		const iframe = document.querySelector('.asd');
		iframe.addEventListener('load', () => {
		    const iframeWindow = iframe.contentWindow;
		    iframeWindow.alert('This is an alert within the iframe!');
		});
