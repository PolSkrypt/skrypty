// kozyrPopups start
const kozyrObrazki = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AINAB4S7lM2HgAAAHlJREFUKM+dkkEOAjEMA8fmB/D/F8LyBMwBIXWrJkX4GHni1oruOCLc8hI/6KFLgrAIIjyl7KBDnxARlJyha7JMnj2ezavk1WKvkkZj9RolKbePmr/gnaGamT/lrohu5q69rm3v2qtgd1AH64Dt1YxQEOUBVPp6gngDx5pd6+vWKlAAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAuJAAALiQE3ycutAAAAB3RJTUUH5AITBTc7XqrT3gAABaVJREFUWMO1mW1o1VUcxz/3OmUrSIrMMrzmA44sKcvtyF5EYKjVjpElWEeNXuUSMoiInojeRC8izB5cD2SaJyotyDMhrZASbWcLFcNqbmqmKJaw0tSLzq0X93fm6e4+/O+cBy73v3seft//7/F7fkuRcBivscqF55HAJKABuAOYCowDqmV5FjgI/Az8AGwHuqxy/1DhqKoEnPG6BlgN3Ctg0kW2VAO18nkQ6AVSJdYXHelywGRkjNcfAqeB+cBlwK/ACmARoIAMMEo+Y4F6mVsha1OVgjNeF9ZgACZaawScTJ0DtgGLrXKHcmsbsaql0DGHTZtut/VurZw5oQJg1wApq9yxkpozXq8zXvfJZ5PxuraAdhNpotwe43VKvp81Xp82Xn9DvtqjA6qBVuAW4CywzCrXzCUYkX9fC6wC5sjUcWDCAB+USA3gTgE3WOWaK9FY0vFwaz+42cD+CFw3MN4qdzJV4E3WSeSdAm63ynXEKeYSaLAZeCz6qVvkHjBeDzBxCIizormjQw6o7QFs/RcYr0dJnhwdTf9Nioytdyf/l2aM1xivM1G0LrPKHR1qsxqvA7hGoDMPHECdrXcnTdsFuenIfC/Lb5uDzw2lWSMXMqKIkdF0LzDdKteVe4kLckNo10gSPgdMtcp1XKJIfRt4vMCSOVa5TYWUEhL1avneNpTgxEVSQEqCb16BZS8WA4dsHAkckfKVCRXiosG1NmJntASg24RY5I+vrXJ3l6vFkyQx77HKHRqywKgaFsDtLgKuE9Brjj9Zliw0yPd3UaKOy9ONxuvJScubaZU153uvMF7vFyqWP3qAO61yPYuvXl7INa4yXk82Xo9KC58DaDe+Md+pF0mu6jBez5ffSgK0M/r9aAcwvsCSPmCWVe5IibNmB7ZUFb3hXqtaAoC08fpV4Ono0M+N169Y5Z4v5NAL2uZS1deX6oMaATexiPD3rHJbciyoaBrbJ1adlhYmDHA0MvGSCFxMKp4TllGVb/JP6zewVrk+4HshqoXGLqvcktwLtpQyRKhg49IRTT8TCV0JvFtk813APuP1xGDyyF+/BaaXEPyQ8fclKQBnAqsqxmb6rHJLgI+LHJABuozXjVa54K9vADNLCG2yyv1m1VcVU/6sPNfEIMXPFgPrS+x3xuu3jNdPAU+UWLcLeN+0z0uK6/Jw+UrL7QvgunxNCsj5QCmHWQq8Vkbg/Va587buy6QAA4k4mJY0AjDZ+LkDzL0w5zMa2DLIlL3UKvd7f35MVh5DkO1Oy701R3XUhgEbejnPwhzwWYCvEFw38IHxOs6PpfNoLgbq5M+tablU9wYHz0+en6gW1qoNkKbHKjdDrgNJxz1WubNJaVske6Zg2p4GuiRQbjJejy16WG//U4Mk0nJjvVWuNalpI7/PAFMEU2da2hEbZc2aMqrH5pJxLbCnjLwXKjFtNAKGFqvciYsirMbrw8D1BaaarXJNg+CPtRK0w4Eaq1w2UP4zwEcy8WaCS3Z4vBn4K2/6BPDMIIgtIns4sMoql+2/1cmCTJQTm5LeS4zXw4AD0o8B+Mwqt2AQ14Em4J2oUh2yypW8do63yh1JePiVwJ9CIq6yynVXqMEx8pIjgEar3MYB3S0R1iKlbQSwN/Riipk7CpxuYAzwulWuOxGxvUAwaoG9InO9VW5j0f3Rpp3SMPpX3i5xs6hCcGNERp/xekeh/aWaRz8Ct16q5pH43HLR3E7Jr9nYMgMamIE6AVmr3LTI3CuN15svtv0WTGq83iwBEcx6G8PIRvILazBhA3O7NDD/yO9dl+lrZyQJN0gqIQSE+UlDDwWTeiphlI6V1sij0fQvchNsBzqAY9IRC3xutFScOqmtU6K9q4CXwjW3VCpLVZirqkUL5ZrohSp5VnjlIyEJJyERqUoTaoX/htgNbBW36LTKnSjnFvnjP1VDwmqDWcjQAAAAAElFTkSuQmCC', 'data:image/png;base64,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', 'data:image/png;base64,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'];

function kozyrStyler(typ) {
	let styl = `
		.kozyr${typ}Window {${(typ === 'Alert' || typ === 'Confirm' ? 'padding:5px;' : '')}background-image:linear-gradient(#c2c2c2, #878787);width:300px;margin:auto;border:2px solid #1f1f1f;cursor:default;font-family:calibri;margin-top:-100px;max-height:0px;overflow:hidden;transition:max-height 0.8s, margin-top 0.8s;}
		.kozyr${typ}Window.show {max-height:180px;margin-top:0;transition:max-height 0.8s,margin-top 0.8s;}
		.kozyr${typ}TopBar {display:flex;align-items:center;background:#292929;color:#e0e0e0;font-family:calibri;position:relative;padding:3px 5px;font-size:14px;font-weight:bold;border-bottom:1px solid black;height:15px;}
		.kozyr${typ}Closer {position:absolute;right:0;top:0;background:black;line-height:0;padding:2px;cursor:pointer;}}
		.kozyr${typ}Closer img {width:14px;height:14px;margin-right:0;}
		.kozyr${typ}Closer:hover {background:#474747;}
		.kozyr${typ}Closer:active {background:#292929;}
		.kozyr${typ}Text {font-size:14px;line-height:1.2;font-family:'Palatino Linotype';}
		.kozyr${typ}Buttons {display:flex;justify-content:center;margin-top:10px;}
		.kozyr${typ}OkButton {display:inline-flex;align-items:center;background:#2727ff;border-width:2px;border-style:outset;border-color:#3b3bff;border-radius:5px;cursor:pointer;text-align:center;padding:2px 6px;color:white;line-height:1;font-size:14px;font-family:'Palatino Linotype';}
		.kozyr${typ}OkButton:not(.unactive):hover {background:#6262ff;border-color:#7676ff;}
		.kozyr${typ}OkButton:not(.unactive):active, .kozyrPromptOkButton.clicked {border-style:inset;padding:3px 5px 1px 7px;}
		.kozyr${typ}OkButton.unactive {background:#7a7a7a;border:2px solid #7a7a7a;cursor:default;}
	`;
	if (typ === 'Alert' || typ === 'Confirm' || typ === 'Prompt' || typ === 'AddImgUrl' || typ === 'TableCreator') {
		styl += `
			@media (min-width:320px) {
				.kozyr${typ}Window {width:300px;}
			}
			@media (max-width:319px) {
				.kozyr${typ}Window {width:90%;}
			}
			@media (min-height:400px) {
				.kozyr${typ} {padding-top:100px;}
			}
		`;
	}
	return styl;
}

function kozyrPudlak(el, typ) {
	el.style.position = 'fixed';
	el.style.zIndex = '99999999';
	el.style.left = '0';
	el.style.top =  '0';
	el.style.width = '100%';
	el.style.height = '100%';
	el.style.overflow = 'auto';
	el.style.background = 'rgba(0, 0, 0, 0.8)';
	el.setAttribute('class', 'kozyr' + typ);
}

function kozyrAlert(tresc, kalbak, okTekst, css) {
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'Alert');
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrAlertWindow');
	pudlo.appendChild(okno);
	let tekst = document.createElement('div');
	tekst.setAttribute('class', 'kozyrAlertText');
	okno.appendChild(tekst);
	tekst.innerHTML = tresc;
	let przyciski = document.createElement('div');
	przyciski.setAttribute('class', 'kozyrAlertButtons');
	okno.appendChild(przyciski);
	let ok = document.createElement('span');
	przyciski.appendChild(ok);
	ok.innerHTML = okTekst ? okTekst : 'OK';
	ok.setAttribute('class', 'kozyrAlertOkButton');
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('Alert');
	if (typeof css == 'string') {
		styl.innerHTML += css;
	}
	document.head.appendChild(styl);
	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10);
	
	ok.onclick = function() {
		if (!this.classList.contains('clicked')) {
			this.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.head.removeChild(styl);
				if (typeof kalbak === 'function') {
					kalbak();
				}
			}, 800);
		}
	}
}

function kozyrConfirm(tresc, takKalbak, nieKalbak, takHTML, nieHTML, css) {
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'Confirm');
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrConfirmWindow');
	pudlo.appendChild(okno);
	let tekst = document.createElement('div');
	tekst.setAttribute('class', 'kozyrConfirmText');
	okno.appendChild(tekst);
	tekst.innerHTML = tresc;
	let przyciski = document.createElement('div');
	przyciski.setAttribute('class', 'kozyrConfirmButtons');
	okno.appendChild(przyciski);
	let tak = document.createElement('span');
	przyciski.appendChild(tak);
	tak.innerHTML = takHTML ? takHTML : 'Yes';
	tak.setAttribute('class', 'kozyrConfirmOkButton');
	let nie = document.createElement('span');
	przyciski.appendChild(nie);
	nie.innerHTML = nieHTML ? nieHTML : 'No';
	nie.setAttribute('class', 'kozyrConfirmNoButton');
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('Confirm');
	styl.innerHTML += `
		.kozyrConfirmNoButton {display:inline-block;background:#ff1414;border-width:2px;border-style:outset;border-color:#ff2828;border-radius:5px;cursor:pointer;text-align:center;padding:2px 6px;color:white;line-height:1;font-size:14px;font-family:'Palatino Linotype';margin-left:10px;}
		.kozyrConfirmNoButton:not(.unactive):hover {background:#ff3c3c;border-color:#ff5050;}
		.kozyrConfirmNoButton:not(.unactive):active, .kozyrPromptButton.clicked {border-style:inset;padding:3px 5px 1px 7px;}
		.kozyrConfirmNoButton.unactive {background:#7a7a7a;border:2px solid #7a7a7a;cursor:default;}
	`;
	if (typeof css == 'string') {
		styl.innerHTML += css;
	}
	
	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10);
	
	document.head.appendChild(styl);
	tak.onclick = function() {
		if (!this.classList.contains('clicked')) {
			this.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.head.removeChild(styl);
				if (typeof takKalbak === 'function') {
					takKalbak();
				}
			}, 800);
		}
	}
	nie.onclick = function() {
		if (!this.classList.contains('clicked')) {
			this.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.head.removeChild(styl);
				if (typeof nieKalbak === 'function') {
					nieKalbak();
				}
			}, 800);
		}
	}
}

function kozyrPrompt(tresc, kalbak, typInputa, tytul, wartoscDomyslna, placeholder, okTekst, css) {
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'Prompt');
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrPromptWindow');
	pudlo.appendChild(okno);
	let pasek = document.createElement('div');
	pasek.setAttribute('class', 'kozyrPromptTopBar');
	pasek.innerHTML = tytul ? tytul : '';
	let zamek = document.createElement('span');
	pasek.appendChild(zamek);
	zamek.setAttribute('class', 'kozyrPromptCloser');
	zamek.setAttribute('title', 'Close')
	zamek.innerHTML = '<img src="' + kozyrObrazki[0] + '">';
	okno.appendChild(pasek);
	if (tresc) {
		let tekst = document.createElement('div');
		tekst.setAttribute('class', 'kozyrPromptText');
		tekst.innerHTML = tresc;
		okno.appendChild(tekst);
	}
	let dzialanie = document.createElement('div');
	dzialanie.setAttribute('class', 'kozyrPromptAction');
	okno.appendChild(dzialanie);
	let enput = document.createElement('input');
	if (typInputa === 'checkbox' || typInputa === 'color' || typInputa === 'date' || typInputa === 'datetime-local' || typInputa === 'email' || typInputa === 'file' || typInputa === 'month' || typInputa === 'number' || typInputa === 'password' || typInputa === 'radio' || typInputa === 'range' || typInputa === 'radio' || typInputa === 'tel' || typInputa === 'time' || typInputa === 'url' || typInputa === 'week') {
		enput.type = typInputa;
	} else {
		enput.type = 'text';
	}
	if (placeholder) enput.placeholder = placeholder
	enput.setAttribute('class', 'kozyrPromptInput');
	dzialanie.appendChild(enput);
	let zapis = document.createElement('span');
	zapis.setAttribute('class', 'kozyrPromptOkButton unactive');
	if (wartoscDomyslna) {
		enput.value = wartoscDomyslna;
		zapis.classList.remove('unactive');
	}
	zapis.innerHTML = okTekst ? okTekst : 'OK';
	dzialanie.appendChild(zapis);
	
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('Prompt');
	styl.innerHTML += `
		.kozyrPromptText {padding:5px 10px;}
		.kozyrPromptAction {display:flex;align-items:center;padding:6px 10px 10px 10px;}
		.kozyrPromptInput {width:180px;border:2px inset gray;padding:2px 4px;font-size:12px;margin-right:7px;}
	`;
	if (typeof css == 'string') {
		styl.innerHTML += css;
	}
	document.head.appendChild(styl);

	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10)
	enput.focus();
	
	zamek.onclick = function() {
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.head.removeChild(styl);
		}, 800);
	}
	zapis.onclick = function() {
		if (!this.classList.contains('unactive') && !this.classList.contains('clicked')) {
			this.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.head.removeChild(styl);
				if (typeof kalbak === 'function') {
					kalbak(enput.value);
				}
			}, 800);
		}
	}
	enput.oninput = function() {
		if (this.value.length > 0) {
			zapis.classList.remove('unactive');
		} else {
			zapis.classList.add('unactive');
		}
	}
	enput.onkeydown = function(e) {
		if (e.keyCode === 13 && !zapis.classList.contains('unactive') && !zapis.classList.contains('clicked')) {
			zapis.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.head.removeChild(styl);
				if (typeof kalbak === 'function') {
					kalbak(enput.value);
				}
			}, 800);
		}
	}
}

function kozyrAddImageFromURL(kalbak, tytul, placeholder, okTekst, css) {
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'AddImgUrl');
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrAddImgUrlWindow');
	pudlo.appendChild(okno);
	let pasek = document.createElement('div');
	pasek.setAttribute('class', 'kozyrAddImgUrlTopBar');
	pasek.innerHTML = tytul;
	let zamek = document.createElement('span');
	pasek.appendChild(zamek);
	zamek.setAttribute('class', 'kozyrAddImgUrlCloser');
	zamek.setAttribute('title', 'Close')
	zamek.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AINAB4S7lM2HgAAAHlJREFUKM+dkkEOAjEMA8fmB/D/F8LyBMwBIXWrJkX4GHni1oruOCLc8hI/6KFLgrAIIjyl7KBDnxARlJyha7JMnj2ezavk1WKvkkZj9RolKbePmr/gnaGamT/lrohu5q69rm3v2qtgd1AH64Dt1YxQEOUBVPp6gngDx5pd6+vWKlAAAAAASUVORK5CYII=">';
	okno.appendChild(pasek);
	
	let dzialanie = document.createElement('div');
	dzialanie.setAttribute('class', 'kozyrAddImgUrlAction');
	okno.appendChild(dzialanie);
	let enput = document.createElement('input');
	enput.setAttribute('type', 'text');
	enput.setAttribute('placeholder', placeholder);
	enput.setAttribute('class', 'kozyrAddImgUrlInput');
	dzialanie.appendChild(enput);
	
	let podglad = document.createElement('div');
	podglad.setAttribute('class', 'kozyrAddImgUrlPreview')
	okno.appendChild(podglad);
	let podBlok = document.createElement('div');
	podBlok.setAttribute('class', 'kozyrUnderIMG');
	podglad.appendChild(podBlok);
	let podImg = new Image();
	podBlok.appendChild(podImg);
	podImg.src = kozyrObrazki[3];
	podImg.setAttribute('class', 'kozyrAddImgUrlImage');
	
	let podPraw = document.createElement('div');
	podPraw.setAttribute('class', 'kozyrPrevRight');
	podglad.appendChild(podPraw);
	
	let z = document.createElement('div');
	z.setAttribute('class', 'kozyrSaveDIV');
	podPraw.appendChild(z);
	let zapis = document.createElement('span');
	zapis.setAttribute('class', 'kozyrAddImgUrlOkButton unactive');
	zapis.innerHTML = okTekst ? okTekst : 'OK';
	z.appendChild(zapis);
	
	let info = document.createElement('span');
	info.setAttribute('class', 'kozyrAddImgUrlImageInfo')
	podPraw.appendChild(info);
	
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('AddImgUrl');
	styl.innerHTML += `
		.kozyrAddImgUrlWindow {width:260px;}
		.kozyrAddImgUrlWindow.show {max-height:240px;transition:max-height 0.8s,margin-top 0.8s;}
		.kozyrAddImgUrlAction {display:flex;align-items:center;padding:8px 10px 10px 10px;background:#cfcfcf;}
		.kozyrAddImgUrlInput {width:100%;border:2px inset gray;padding:2px 4px;font-size:12px;margin-right:7px;}
		.kozyrAddImgUrlPreview {background:#cfcfcf;height:105px;padding:3px 0 0 8px;}
		.kozyrAddImgUrlPreview:after {content:'';display:block;clear:both;}
		.kozyrUnderIMG {display:flex;align-items:center;justify-content:center;float:left;width:90px;height:90px;border:1px dotted black;background:white;margin-right:5px;border-radius:5px;overflow:hidden;}
		.kozyrAddImgUrlPreview .kozyrUnderIMG img {max-width:90px;max-height:90px;width:auto;height:auto;}
		.kozyrPrevRight {display:block;float:left;width:135px;height:90px;}
		.kozyrAddImgUrlImageInfo {display:block;height:65px;overflow:auto;}
		.kozyrSaveDIV {text-align:center;}
	`;
	if (typeof css == 'string') {
		styl.innerHTML += css;
	}
	document.getElementsByTagName('head')[0].appendChild(styl);

	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10);
	enput.focus();
	
	zamek.onclick = function() {
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
	zapis.onclick = function() {
		if (!this.classList.contains('unactive') && !this.classList.contains('clicked')) {
			this.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.getElementsByTagName('head')[0].removeChild(styl);
				if (typeof kalbak === 'function') {
					kalbak(podImg);
				}
			}, 800);
		}
	}
	podImg.onload = function() {
		if (this.src !== kozyrObrazki[2] && this.src !== kozyrObrazki[3]) {
			info.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><img src="' + kozyrObrazki[1] + '" height="40"></div>';
			zapis.classList.remove('unactive');
		}
	}
	podImg.onerror = function() {
		zapis.classList.add('unactive');
		this.src = kozyrObrazki[2];
		info.innerHTML = '<div style="font-size:12px;">Image could not be loaded. The entered url is not a valid image, or you are not connected to the internet.</div>';
	}
	enput.oninput = function() {
		zapis.classList.add('unactive');
		if (this.value) {
			info.textContent = 'Wczytuję...';
			podImg.src = this.value;
		} else {
			podImg.src = kozyrObrazki[3];
			info.textContent = '';
		}
	}
	enput.onkeydown = function(e) {
		if (e.keyCode === 13 && !zapis.classList.contains('unactive') && !zapis.classList.contains('clicked')) {
			zapis.classList.add('clicked');
			okno.classList.remove('show');
			setTimeout(function() {
				document.body.removeChild(pudlo);
				document.getElementsByTagName('head')[0].removeChild(styl);
				if (typeof kalbak === 'function') {
					kalbak(podImg);
				}
			}, 800);
		}
	}
}

function kozyrImageSettings(obrazek) {
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'ImgSettings');
	pudlo.style.background = 'rgba(0, 0, 0, 0.5)';
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrImgSettingsWindow');
	pudlo.appendChild(okno);
	let pasek = document.createElement('div');
	pasek.setAttribute('class', 'kozyrImgSettingsTopBar');
	pasek.innerHTML = 'Image settings';
	let zamek = document.createElement('span');
	pasek.appendChild(zamek);
	zamek.setAttribute('class', 'kozyrImgSettingsCloser');
	zamek.setAttribute('title', 'Close without saving')
	zamek.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AINAB4S7lM2HgAAAHlJREFUKM+dkkEOAjEMA8fmB/D/F8LyBMwBIXWrJkX4GHni1oruOCLc8hI/6KFLgrAIIjyl7KBDnxARlJyha7JMnj2ezavk1WKvkkZj9RolKbePmr/gnaGamT/lrohu5q69rm3v2qtgd1AH64Dt1YxQEOUBVPp6gngDx5pd6+vWKlAAAAAASUVORK5CYII=">';
	okno.appendChild(pasek);
	let ustawienia = document.createElement('div');
	ustawienia.setAttribute('class', 'kozyrImgSettingsContent');
	
	let wartosciStartowe = [obrazek.style.width, obrazek.style.height, obrazek.style.float, obrazek.style.display, obrazek.style.margin];
	
	let szerokosc = document.createElement('div');
	szerokosc.setAttribute('class', 'kozyrSettingBlock');
	szerokosc.innerHTML = '<span class="settingName">Width:</span>';
	
	let szerOp1 = document.createElement('span');
	szerOp1.setAttribute('class', 'optionAuto');
	szerokosc.appendChild(szerOp1);
	let szerLab1 = document.createElement('label');
	szerOp1.appendChild(szerLab1);
	let szeRad1 = document.createElement('input');
	szeRad1.type = 'radio';
	szeRad1.name = 'imageWidth';
	szeRad1.value = '';
	szeRad1.onchange = ustawStyl;
	szerLab1.appendChild(szeRad1);
	let szeWar1 = document.createElement('span');
	szeWar1.setAttribute('class', 'optionValue');
	szeWar1.textContent = 'Auto';
	szerLab1.appendChild(szeWar1);
	
	let szerOp2 = document.createElement('span');
	szerOp2.setAttribute('class', 'optionPX');
	szerokosc.appendChild(szerOp2);
	let szerLab2 = document.createElement('label');
	szerOp2.appendChild(szerLab2);
	let szeRad2 = document.createElement('input');
	szeRad2.type = 'radio';
	szeRad2.name = 'imageWidth';
	szeRad2.onchange = ustawStyl;
	szerLab2.appendChild(szeRad2);
	let szeWar2 = document.createElement('span');
	szeWar2.setAttribute('class', 'optionValue');
	let szeNumer = document.createElement('input');
	szeNumer.type = 'number';
	szeNumer.min = 1;
	szeNumer.onfocus = function() {
		szeRad2.checked = true;
	}
	szeNumer.oninput = ustawStyl;
	szeWar2.appendChild(szeNumer)
	
	szeWar2.appendChild(document.createTextNode('px'));
	szerLab2.appendChild(szeWar2);
	
	let szerOp3 = document.createElement('span');
	szerOp3.setAttribute('class', 'optionFull');
	szerokosc.appendChild(szerOp3);
	let szerLab3 = document.createElement('label');
	szerOp3.appendChild(szerLab3);
	let szeRad3 = document.createElement('input');
	szeRad3.type = 'radio';
	szeRad3.name = 'imageWidth';
	szeRad3.value = '100%';
	szeRad3.onchange = ustawStyl;
	szerLab3.appendChild(szeRad3);
	let szeWar3 = document.createElement('span');
	szeWar3.setAttribute('class', 'optionValue');
	szeWar3.textContent = 'Full';
	szerLab3.appendChild(szeWar3);
	if (wartosciStartowe[0] && wartosciStartowe[0] !== '100%') {
		szeNumer.value = parseInt(wartosciStartowe[0], 10);
		szeRad2.checked = true;
	} else if (wartosciStartowe[0] === '100%') {
		szeNumer.value = obrazek.naturalWidth;
		szeRad3.checked = true;
	} else {
		szeNumer.value = obrazek.naturalWidth;
		szeRad1.checked = true;
	}
	
	let wysokosc = document.createElement('div');
	wysokosc.setAttribute('class', 'kozyrSettingBlock');
	wysokosc.innerHTML = '<span class="settingName">Height:</span>';
	
	let wysOp1 = document.createElement('span');
	wysOp1.setAttribute('class', 'optionAuto');
	wysokosc.appendChild(wysOp1);
	let wysLab1 = document.createElement('label');
	wysOp1.appendChild(wysLab1);
	let wysRad1 = document.createElement('input');
	wysRad1.type = 'radio';
	wysRad1.name = 'imageHeight';
	wysRad1.onchange = ustawStyl;
	wysLab1.appendChild(wysRad1);
	let wysWar1 = document.createElement('span');
	wysWar1.setAttribute('class', 'optionValue');
	wysWar1.textContent = 'Auto';
	wysLab1.appendChild(wysWar1);
	
	let wysOp2 = document.createElement('span');
	wysOp2.setAttribute('class', 'optionPX');
	wysokosc.appendChild(wysOp2);
	let wysLab2 = document.createElement('label');
	wysOp2.appendChild(wysLab2);
	let wysRad2 = document.createElement('input');
	wysRad2.type = 'radio';
	wysRad2.name = 'imageHeight';
	wysRad2.onchange = ustawStyl;
	wysLab2.appendChild(wysRad2);
	let wysWar2 = document.createElement('span');
	wysWar2.setAttribute('class', 'optionValue');
	let wysNumer = document.createElement('input');
	wysNumer.type = 'number';
	wysNumer.min = 1;
	if (wartosciStartowe[1]) {
		wysNumer.value = parseInt(wartosciStartowe[1], 10);
		wysRad2.checked = true;
	} else {
		wysNumer.value = obrazek.naturalHeight;
		wysRad1.checked = true;
	}
	wysNumer.onfocus = function() {
		wysRad2.checked = true;
	}
	wysNumer.oninput = ustawStyl;
	wysWar2.appendChild(wysNumer);
	wysWar2.appendChild(document.createTextNode('px'));
	wysLab2.appendChild(wysWar2);
	
	let wyroWartosci = [{
		'title' : 'Align left',
		'float' : 'left',
		'display' : '',
		'margin' : '0px 5px 5px 0px',
		'img' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AIbEzU2zzI6zAAAAPlJREFUOMutkjFOxDAQRd9f5Uo07rkDPRwLeu5An2tsT71i2U3iT7GTaGKRVBnJsuxEb963LcA8yjEmYAB+gR/gAlxsP0n6Asb4/xRDwKkD7H4BVaCqUN1TAzqqcAew/cxGda2RyjJX9w9QGCLpE7jFnsMGQF10XYzcM6kwBWRSYZzj2H7ZM1pAs0WCTHO8MPoArmFYUxo6eORPkSb33FUYAjDOzWy/7hndVNa3FpCh7SzpPW6zNdJilEA1mdR8qLbf9oyGBuQEmd9Ll25tiKjORrLNESXgnNY5Xk1vqD34lQ3AoUbfzV5+6bWZs8kadKTRdeObNyz/rT/mA6OZrao5gAAAAABJRU5ErkJggg=='
	}, {
		'title' : 'Align center',
		'float' : '',
		'display' : 'block',
		'margin' : 'auto',
		'img' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAB3RJTUUH5AIbEzM2mWidSgAAAGdJREFUOMvtUUEKwCAMS2Sv8v/4rXjYyuxU3EbZaYEiKSaNlZLQgqRvTCCJLd+Gl4rnzL7H3GvSarKJRuJHRpbEzplhupNmZWJLcwVAKhBw1pXvMq9j1K8lBCHMqHvaa6NjeX+iDxJVvDJJ4xdp5REAAAAASUVORK5CYII='
	}, {
		'title' : 'Align right',
		'float' : 'right',
		'display' : '',
		'margin' : '0px 0px 5px 5px',
		'img' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAB3RJTUUH5AIbEzYwDXzMOgAAAG1JREFUOMvtkUkKwDAMA6XQV+X/5FvTSwxNydJQ6KkCYZxFFrIloQEA2x7eX3EAXj2itL1ze+YsJduM2BN1bmsgAR5x5i5qCG45ik93kQh0SklQRF0KvV4S/nRrj4RmE3eGuObwGtOMtoR+R0ucWRpy9cclf/cAAAAASUVORK5CYII='
	}, {
		'title' : 'Display inline',
		'float' : '',
		'display' : '',
		'margin' : '',
		'img' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAB3RJTUUH5AIbEzQgIv2+3AAAAG9JREFUOMvtUVsOgCAMawmn4v7hWvVDFmWgzsenTRZg0G50lAQPkmNyAkm0fT58VJ146XMs/X2KVDaSJ98Wsk5snQmmaDdnImbYEACkCgFb+PNK3Tj8amohjyLIvvq+SmiijT/92hOwGfde6O/oEgs5Ek7n6I2vEAAAAABJRU5ErkJggg=='
	}]
	let wyrownanie = document.createElement('div');
	wyrownanie.innerHTML = '<span class="settingName">Align:</span>';
	wyrownanie.setAttribute('class', 'setImageAlign')
	wyroWartosci.forEach(function(a) {
		let lbl = document.createElement('label');
		lbl.setAttribute('title', a.title);
		let rd = document.createElement('input');
		rd.name = 'imgAlign';
		rd.value = a.float + ',' + a.display + ',' + a.margin;
		rd.type = 'radio';
		if (wartosciStartowe[2] == a.float && wartosciStartowe[3] == a.display && wartosciStartowe[4] == a.margin) {
			rd.checked = true;
		}
		rd.onchange = function() {
			let ustawienia = document.querySelector('input[name="imgAlign"]:checked').value.split(',');
			obrazek.style.float = ustawienia[0];
			obrazek.style.display = ustawienia[1];
			obrazek.style.margin = ustawienia[2];
			zapis.classList.remove('unactive');
		}
		lbl.appendChild(rd);
		let img = document.createElement('img');
		img.src = a.img;
		lbl.appendChild(img);
		wyrownanie.appendChild(lbl);
	});
	
	let deleteIMG = document.createElement('span');
	deleteIMG.title = 'Delete image';
	deleteIMG.setAttribute('class', 'kozyrDeleteImage');
	deleteIMG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>';
	deleteIMG.onclick = function() {
		obrazek.remove();
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
	wyrownanie.appendChild(deleteIMG);
	
	let zapisDIV = document.createElement('div');
	zapisDIV.setAttribute('class', 'kozyrSaveDIV');
	let zapis = document.createElement('span');
	zapis.setAttribute('class', 'kozyrImgSettingsOkButton unactive');
	zapis.innerHTML = 'Save';
	zapisDIV.appendChild(zapis);
	
	ustawienia.appendChild(szerokosc);
	ustawienia.appendChild(wysokosc);
	ustawienia.appendChild(wyrownanie);
	ustawienia.appendChild(zapisDIV);
	okno.appendChild(ustawienia);
	
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('ImgSettings');
	styl.innerHTML += `
		.kozyrImgSettingsWindow {margin-top:0;max-height:none;width:300px;position:absolute;left:calc(50% - 150px);top:60px;border:1px solid black;cursor:default;height:0;transition:height 0.8s;}
		.kozyrImgSettingsWindow.show {margin-top:0;max-height:none;height:180px;transition:height 0.8s;}
		.kozyrImgSettingsContent {background:#cfcfcf;height:160px;font-size:12px;font-family:calibri;}
		.kozyrImgSettingsTopBar {cursor:grab;}
		.kozyrImgSettingsTopBar:active {cursor:grabbing;}
		.kozyrSettingBlock {display:flex;align-items:center;padding:5px;border-bottom:1px dotted black;}
		.kozyrSettingBlock label {display:flex;align-items:center;}
		.kozyrSettingBlock input[type="radio"] {width:14px;height:14px;}
		.kozyrSettingBlock input[type="number"] {width:50px;font-size:12px;margin-right:2px;}
		.kozyrSettingBlock .settingName, .setImageAlign .settingName {width:60px;text-align:center;font-weight:bold;}
		.kozyrSettingBlock .optionAuto {width:70px;text-align:center;}
		.kozyrSettingBlock .optionPX {width:100px;text-align:center;}
		.kozyrSettingBlock input[type="radio"] + .optionValue {opacity:0.5;transition:opacity 0.5s;}
		.kozyrSettingBlock input[type="radio"]:checked + .optionValue {opacity:1;transition:opacity 0.5s;}
		.setImageAlign {display:flex;align-items:center;padding:5px;}
		.setImageAlign input {display:none;}
		.setImageAlign input + img {padding:2px;margin-right:4px;background:white;}
		.setImageAlign input:checked + img {background:yellow;}
		.setImageAlign input:not(:checked) + img:hover {background:orange;cursor:pointer;}
		.kozyrDeleteImage {margin-left:50px;cursor:pointer;}
		.kozyrDeleteImage svg {fill:#890000;height:15px;}
		.kozyrDeleteImage:hover svg {fill:#d70000;}
		.kozyrDeleteImage:active svg {height:14px;}
		.kozyrSaveDIV {text-align:center;margin-top:10px;}
	`;
	document.getElementsByTagName('head')[0].appendChild(styl);

	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10);
	
	function ustawStyl() {
		obrazek.style.width = szeRad2.checked ? szeNumer.value + 'px' : document.querySelector('input[name="imageWidth"]:checked').value;
		obrazek.style.height = wysRad2.checked ? wysNumer.value + 'px' : '';
		zapis.classList.remove('unactive');
	}
	
	zamek.onclick = function() {
		obrazek.style.width = wartosciStartowe[0];
		obrazek.style.height = wartosciStartowe[1];
		obrazek.style.float = wartosciStartowe[2];
		obrazek.style.display = wartosciStartowe[3];
		obrazek.style.margin = wartosciStartowe[4];
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
	
	zapis.onclick = function() {
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
	
	let trzymX = -1;
	let trzymY = -1;
	
	pasek.onmousedown = function(e) {
		if (!zamek.contains(e.target)) {
			trzymX = e.offsetX;
			trzymY = e.offsetY;
		}
	}
	
	pudlo.onmouseup = function(e) {
		trzymX = -1;
		trzymY = -1;
	}
	
	pudlo.onmousemove = function(e) {
		if (window.getComputedStyle(pasek).getPropertyValue('cursor') === 'grabbing' && trzymX >= 0 && trzymY >= 0) {
			if (e.clientX - trzymX < 0) {
				okno.style.left = '0';
			} else if (e.clientX - trzymX + okno.offsetWidth > window.innerWidth) {
				okno.style.left = (window.innerWidth - okno.offsetWidth) + 'px';
			} else {
				okno.style.left = (e.clientX - trzymX) + 'px';
			}
			if (e.clientY - trzymY < 0) {
				okno.style.top = '0';
			} else if (e.clientY - trzymY + okno.offsetHeight > window.innerHeight) {
				okno.style.top = (window.innerHeight - okno.offsetHeight) + 'px';
			} else {
				okno.style.top = (e.clientY - trzymY) + 'px';
			}
		}
	}
}

function kozyrTableCreator(waco) {
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'TableCreator');
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrTableCreatorWindow');
	pudlo.appendChild(okno);
	let pasek = document.createElement('div');
	pasek.setAttribute('class', 'kozyrTableCreatorTopBar');
	pasek.innerHTML = 'Create table';
	let zamek = document.createElement('span');
	pasek.appendChild(zamek);
	zamek.setAttribute('class', 'kozyrTableCreatorCloser');
	zamek.setAttribute('title', 'Close')
	zamek.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AINAB4S7lM2HgAAAHlJREFUKM+dkkEOAjEMA8fmB/D/F8LyBMwBIXWrJkX4GHni1oruOCLc8hI/6KFLgrAIIjyl7KBDnxARlJyha7JMnj2ezavk1WKvkkZj9RolKbePmr/gnaGamT/lrohu5q69rm3v2qtgd1AH64Dt1YxQEOUBVPp6gngDx5pd6+vWKlAAAAAASUVORK5CYII=">';
	okno.appendChild(pasek);
	let ustawienia = document.createElement('div');
	ustawienia.setAttribute('class', 'kozyrTableCreatorContent');
	okno.appendChild(ustawienia);
	
	let kolumny = document.createElement('div');
	kolumny.setAttribute('class', 'numOfCols');
	kolumny.innerHTML = '<span class="optionName">Cols:</span>';
	let iloscKolumn = document.createElement('input');
	iloscKolumn.type = 'number';
	iloscKolumn.value = 3;
	iloscKolumn.min = 1;
	iloscKolumn.max = 99;
	kolumny.appendChild(iloscKolumn);
	ustawienia.appendChild(kolumny);
	
	let wiersze = document.createElement('div');
	wiersze.setAttribute('class', 'numOfRows');
	wiersze.innerHTML = '<span class="optionName">Rows:</span>';
	let iloscWierszy = document.createElement('input');
	iloscWierszy.type = 'number';
	iloscWierszy.value = 4;
	iloscWierszy.min = 1;
	iloscWierszy.max = 999;
	wiersze.appendChild(iloscWierszy);
	ustawienia.appendChild(wiersze);
	
	let zapisDIV = document.createElement('div');
	zapisDIV.setAttribute('class', 'kozyrSaveDIV');
	let zapis = document.createElement('span');
	zapis.setAttribute('class', 'kozyrTableCreatorOkButton');
	zapis.innerHTML = 'Create';
	zapis.title = 'Create Table';
	zapisDIV.appendChild(zapis);
	ustawienia.appendChild(zapisDIV);
	
	okno.appendChild(ustawienia);
	
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('TableCreator');
	styl.innerHTML += `
	.kozyrTableCreatorWindow {width:130px;}
		.kozyrTableCreatorContent .optionName {display:inline-block;width:35px;font-size:13px;font-family:calibri;padding:1px 3px;}
		.numOfCols {padding-bottom:4px;border-bottom:1px dotted black;}
		.numOfRows {padding-bottom:4px;border-bottom:1px dotted black;padding-top:4px;}
		.numOfCols input, .numOfRows input {width:45px;margin-left:3px;font-size:12px;padding:1px 3px;}
		.kozyrTableCreatorContent {padding:5px;}
		.kozyrSaveDIV {margin-top:7px;text-align:center;}
	`;
	document.getElementsByTagName('head')[0].appendChild(styl);

	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10);
	
	zapis.onclick = function() {
		let ileKolumn = iloscKolumn.value;
		let ileWierszy = iloscWierszy.value;
		let tabela = '<table style="border-collapse:collapse;margin:5px;">';
		for (let w=0; w<ileWierszy; w++) {
			tabela += '<tr>';
			for (let k=0; k<ileKolumn; k++) {
				tabela += '<td style="border:1px solid #292929;padding:1px 3px;"></td>';
			}
			tabela += '</tr>';
		}
		tabela += '</table>';
		przywrocZaznaczenie(waco.selekcja);
		
		if (waco.htmlMode) {
			waco.formujHTML('', tabela);
		} else {
			waco.formujTekst('insertHTML', tabela);
		}
		waco.richTextEditor.querySelectorAll('table:not(.resizable)').forEach(t => kozyrTableResizer(t));
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
	zamek.onclick = function() {
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
}

function zlapRodzica(dziecko, rodzic) {
	if (dziecko.tagName.toUpperCase() === rodzic.toUpperCase()) {
		return dziecko;
	} else if (dziecko.parentNode && dziecko.parentNode.tagName !== 'BODY') {
		return zlapRodzica(dziecko.parentNode, rodzic);
	} else {
		return null;
	}
}

function kozyrTableChanger(kom) {
	let opcje = [{
		'typ' : 'kolor',
		'tekst' : 'Cell background',
		'pokaz' : function() {
			return true;
		},
		'fun' : function(w) {
			kom.bgColor = w;
		}
	}, {
		'typ' : 'kolor',
		'tekst' : 'Row background',
		'pokaz' : function() {
			return true;
		},
		'fun' : function(w) {
			let tr = zlapRodzica(kom, 'TR').cells;
			for (let b=0; b<tr.length; b++) {
				tr[b].bgColor = w;
			}
		}
	}, {
		'typ' : 'kolor',
		'tekst' : 'Col background',
		'pokaz' : function() {
			return true;
		},
		'fun' : function(w) {
			let tabka = zlapRodzica(kom, 'TABLE');
			let indeks = getCellIndex(kom);
			for (let c=0; c<tabka.rows.length; c++) {
				let i = 0;
				let komy = tabka.rows[c].cells;
				for (let b=0; b<komy.length; b++) {
					if (i >= indeks || (komy[b].colSpan > 1 && i + komy[b].colSpan >= indeks)) {
						komy[b].bgColor = w;
						break;
					}
					i += komy[b].colSpan;
				}
			}
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Merge right',
		'pokaz' : function() {
			if (kom.nextSibling) {
				return true;
			} else {
				return false;
			}
		},
		'fun' : function() {
			kom.appendChild(document.createTextNode(kom.nextSibling.textContent));
			kom.colSpan += kom.nextSibling.colSpan
			kom.nextSibling.parentNode.removeChild(kom.nextSibling);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Merge left',
		'pokaz' : function() {
			if (kom.previousSibling) {
				return true;
			} else {
				return false;
			}
		},
		'fun' : function() {
			kom.previousSibling.appendChild(document.createTextNode(kom.textContent));
			kom.previousSibling.colSpan += kom.colSpan;
			kom.parentNode.removeChild(kom);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Remove merge',
		'pokaz' : function() {
			return kom.colSpan > 1;
		},
		'fun' : function() {
			for (let c=1; c<kom.colSpan; c++) {
				let nKom = document.createElement('td');
				nKom.style.border = kom.style.border;
				kom.parentNode.insertBefore(nKom, kom.nextSibling);
			}
			kom.colSpan = 1;
			let tab = zlapRodzica(kom, 'TABLE')
			kozyrTableCleaner(tab);
			kozyrTableResizer(tab);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Insert row after',
		'pokaz' : function() {
			return true;
		},
		'fun' : function() {
			let tr = zlapRodzica(kom, 'TR');
			let nowy = document.createElement('tr');
			tr.parentNode.insertBefore(nowy, tr.nextSibling);
			for (let c=0; c<tr.cells.length; c++) {
				let ntd = document.createElement('td');
				ntd.colSpan = tr.cells[c].colSpan;
				ntd.bgColor = tr.cells[c].bgColor;
				nowy.appendChild(ntd);
			}
			let tab = zlapRodzica(kom, 'TABLE')
			kozyrTableCleaner(tab);
			kozyrTableResizer(tab);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Insert row before',
		'pokaz' : function() {
			return true;
		},
		'fun' : function() {
			let tr = zlapRodzica(kom, 'TR');
			let nowy = document.createElement('tr');
			tr.parentNode.insertBefore(nowy, tr);
			for (let c=0; c<tr.cells.length; c++) {
				let ntd = document.createElement('td');
				ntd.colSpan = tr.cells[c].colSpan;
				ntd.bgColor = tr.cells[c].bgColor;
				nowy.appendChild(ntd);
			}
			let tab = zlapRodzica(kom, 'TABLE')
			kozyrTableCleaner(tab);
			kozyrTableResizer(tab);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Insert col before',
		'pokaz' : function() {
			return true;
		},
		'fun' : function() {
			let tabka = zlapRodzica(kom, 'TABLE');
			let indeks = getCellIndex(zlapRodzica(kom, 'TD'));
			for (let c=0; c<tabka.rows.length; c++) {
				let i = 0;
				let komy = tabka.rows[c].cells;
				for (let b=0; b<komy.length; b++) {
					if (i >= indeks) {
						if (komy[b].colSpan > 1) {
							komy[b].colSpan += 1;
						} else {
							komy[b].parentNode.insertBefore(document.createElement('td'), komy[b]);
						}
						break;
					}
					i += komy[b].colSpan;
				}
			}
			kozyrTableCleaner(tabka);
			kozyrTableResizer(tabka);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Insert col after',
		'pokaz' : function() {
			return true;
		},
		'fun' : function() {
			let tabka = zlapRodzica(kom, 'TABLE');
			let indeks = getCellIndex(zlapRodzica(kom, 'TD'));
			for (let c=0; c<tabka.rows.length; c++) {
				let i = 0;
				let komy = tabka.rows[c].cells;
				for (let b=0; b<komy.length; b++) {
					if (i >= indeks) {
						if (komy[b].colSpan > 1) {
							komy[b].colSpan += 1;
						} else {
							komy[b].parentNode.insertBefore(document.createElement('td'), komy[b].nextSibling);
						}
						break;
					}
					i += komy[b].colSpan;
				}
			}
			kozyrTableCleaner(tabka);
			kozyrTableResizer(tabka);
		}
	}, {
		'typ' : 'kolor',
		'tekst' : 'Border color',
		'pokaz' : function() {
			return true;
		},
		'fun' : function(w) {
			let tab = zlapRodzica(kom, 'TABLE');
			tab.style.border = '1px solid ' + w;
			for (let c=0; c<tab.rows.length; c++) {
				let wierchy = tab.rows[c].cells;
				for (let d=0; d<wierchy.length; d++) {
					wierchy[d].style.border = '1px solid ' + w;
				}
			}
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Delete row',
		'pokaz' : function() {
			return true;
		},
		'fun' : function() {
			let wiersz = zlapRodzica(kom, 'TR');
			wiersz.parentNode.removeChild(wiersz);
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Delete col',
		'pokaz' : function() {
			return true;
		},
		'fun' : function() {
			
			let tabka = zlapRodzica(kom, 'TABLE');
			let indeks = getCellIndex(kom);
			for (let c=0; c<tabka.rows.length; c++) {
				let i = 0;
				let komy = tabka.rows[c].cells;
				for (let b=0; b<komy.length; b++) {
					if (i >= indeks || (komy[b].colSpan > 1 && i + komy[b].colSpan >= indeks)) {
						if (komy[b].colSpan > 1) {
							komy[b].colSpan--;
						} else {
							komy[b].parentNode.removeChild(komy[b]);
						}
						break;
					}
					i += komy[b].colSpan;
				}
			}
		}
	}, {
		'typ' : 'zwykly',
		'tekst' : 'Delete table',
		'pokaz' : function() {
			return true;
		},
		'fun' : function(w) {
			let tab = zlapRodzica(kom, 'TABLE');
			tab.parentNode.removeChild(tab);
		}
	}];
	let pudlo = document.createElement('div');
	kozyrPudlak(pudlo, 'TableChanger');
	pudlo.style.background = 'rgba(0, 0, 0, 0.5)';
	let okno = document.createElement('div');
	okno.setAttribute('class', 'kozyrTableChangerWindow');
	pudlo.appendChild(okno);
	let pasek = document.createElement('div');
	pasek.setAttribute('class', 'kozyrTableChangerTopBar');
	pasek.innerHTML = 'Table stylization';
	let zamek = document.createElement('span');
	pasek.appendChild(zamek);
	zamek.setAttribute('class', 'kozyrTableChangerCloser');
	zamek.title = 'Close';
	zamek.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AINAB4S7lM2HgAAAHlJREFUKM+dkkEOAjEMA8fmB/D/F8LyBMwBIXWrJkX4GHni1oruOCLc8hI/6KFLgrAIIjyl7KBDnxARlJyha7JMnj2ezavk1WKvkkZj9RolKbePmr/gnaGamT/lrohu5q69rm3v2qtgd1AH64Dt1YxQEOUBVPp6gngDx5pd6+vWKlAAAAAASUVORK5CYII=">';
	okno.appendChild(pasek);
	let ustawienia = document.createElement('div');
	okno.appendChild(ustawienia);
	ustawienia.setAttribute('class', 'kozyrTableChangerContent');
	
	opcje.forEach((a, i) => {
		if (a.pokaz()) {
			let opc = document.createElement('div');
			ustawienia.appendChild(opc);
			opc.setAttribute('class', 'tableChangerItem');
			if (a.typ === 'kolor') {
				let lbl = document.createElement('label');
				opc.appendChild(lbl);
				let kolInp = document.createElement('input');
				lbl.appendChild(kolInp);
				kolInp.type = 'color';
				kolInp.style.display = 'none';
				kolInp.value = kom.bgColor ? kom.bgColor : '#ffffff';
				if (i === 0) {
					let probka = document.createElement('span');
					probka.setAttribute('class', 'kozyrColorSample');
					probka.style.background = kolInp.value;
					lbl.appendChild(probka);
				}
				lbl.appendChild(document.createTextNode(a.tekst));
				kolInp.onchange = function() {
					a.fun(this.value);
					if (document.querySelector('.kozyrColorSample')) document.querySelector('.kozyrColorSample').style.backgroundColor = this.value;
					okno.classList.remove('show');
					setTimeout(function() {
						document.body.removeChild(pudlo);
						document.getElementsByTagName('head')[0].removeChild(styl);
					}, 800);
				}
			} else {
				opc.textContent = a.tekst;
				opc.onclick = function() {
					a.fun();
					okno.classList.remove('show');
					setTimeout(function() {
						document.body.removeChild(pudlo);
						document.getElementsByTagName('head')[0].removeChild(styl);
					}, 800);
				}
			}
		}
	});
	
	let styl = document.createElement('style');
	styl.innerHTML = kozyrStyler('TableChanger');
	styl.innerHTML += `
		.kozyrTableChangerWindow {width:400px;}
		.kozyrTableChangerWindow.show {max-height:500px;}
		.tableChangerItem {padding:2px 10px;border-bottom:1px dotted black;cursor:pointer;}
		.tableChangerItem:first-child {padding-left:2px;}
		.tableChangerItem label {cursor:pointer;}
		.tableChangerItem:hover {background:black;color:white;}
		.tableChangerItem .kozyrColorSample {display:inline-block;width:12px;height:12px;border:1px solid black;vertical-align:middle;margin:-3px 2px 0 0;border-radius:50%;}
		@media (min-height:400px) {
			.kozyrTableChanger {padding-top:50px;}
		}
	`;
	document.head.appendChild(styl);
	document.body.appendChild(pudlo);
	setTimeout(function() {
		okno.classList.add('show');
	}, 10);
	
	zamek.onclick = function() {
		okno.classList.remove('show');
		setTimeout(function() {
			document.body.removeChild(pudlo);
			document.getElementsByTagName('head')[0].removeChild(styl);
		}, 800);
	}
}
// kozyrPopups koniec

// kozyTooltip start
function kozyrTooltip() {
	document.querySelectorAll('[tooltip]').forEach(t => {
		if (window.getComputedStyle(t).position === 'static') t.style.position = 'relative';
		if (window.getComputedStyle(t).display === 'inline') t.style.display = 'inline-block';
		let wsk = document.createElement('div');
		wsk.setAttribute('class', 'kozyrTooltip');
		wsk.style.position = 'absolute';
		wsk.style.opacity = '0';
		wsk.innerHTML = t.getAttribute('tooltip');
		let wyrPrawX = 15;
		let wyrLewX = 7;
		let wyrDolY = 12;
		let wyrGorY = 0;
		t.addEventListener('mouseenter', e => {
			document.body.appendChild(wsk);
			setTimeout(function() {
				wsk.style.opacity = '1';
			}, 10);
		})
		t.addEventListener('mouseleave', e => {
			wsk.style.opacity = '0';
			document.body.removeChild(wsk);
		});
		t.addEventListener('mousemove', e => {
			wsk.style.left = (e.pageX + wyrPrawX + wsk.offsetWidth + 10 > window.scrollX + window.innerWidth ? e.pageX - wyrLewX - wsk.offsetWidth : e.pageX + wyrPrawX) + 'px';
			wsk.style.top = (e.pageY + wyrDolY + wsk.offsetHeight + 10 > window.scrollY + window.innerHeight ? e.pageY - wyrGorY - wsk.offsetHeight : e.pageY + wyrDolY) + 'px';
		});
	})
}
// kozyrTooltip koniec

// kozyrTableResizer start
function getCellIndex(cell) {
	function getRow(a) {
		if (a.tagName === 'TR') {
			return a;
		} else {
			if (a.parentNode) {
				return getRow(a.parentNode);
			} else {
				return false
			}
		}
	}
	let row = getRow(cell);
	if (row) {
		let nr = 0;
		for (let u=0; u<row.cells.length; u++) {
			if (row.cells[u] !== cell) {
				nr += row.cells[u].colSpan;
			} else {
				break;
			}
		}
		return nr;
	} else {
		return false;
	}
}

function kozyrTableCleaner(tab) {
	if (tab.rows && tab.classList.contains('resizable')) {
		for (let w=0; w<tab.rows.length; w++) {
			for (let k=0; k<tab.rows[w].cells.length; k++) {
				let komorka = tab.rows[w].cells[k];
				if (komorka.querySelector('.kozyrTableResizer')) komorka.querySelector('.kozyrTableResizer').remove();
				if (komorka.querySelector('.tableSettings')) komorka.querySelector('.tableSettings').remove();
				komorka.style.position = '';
			}	
		}
		tab.classList.remove('resizable');
	}
}

function kozyrTableResizer(tab) {
	if (tab.rows && !tab.classList.contains('resizable')) {
		let iloscKolumn = 0;
		for (let d=0; d<tab.rows[0].cells.length; d++) {
			iloscKolumn += tab.rows[0].cells[d].colSpan;
		}
		if (tab.querySelector('tr[class="kozyrWidthCatcher"]')) {
			var pozycjusz = tab.querySelector('tr[class="kozyrWidthCatcher"]');
		} else {
			var pozycjusz = tab.insertRow(0);
			for (let q=0; q<iloscKolumn; q++) {
				pozycjusz.insertCell(q);
			}
			pozycjusz.style.visibility = 'collapse';
			pozycjusz.setAttribute('class', 'kozyrWidthCatcher');
		}
		let zlapana = false;
		let startOffset;
		for (let w=0; w<tab.rows.length; w++) {
			for (let k=0; k<tab.rows[w].cells.length; k++) {
				let komorka = tab.rows[w].cells[k];
				if (!komorka.querySelector('.kozyrTableResizer')) {
					let cipka = document.createElement('span');
					cipka.setAttribute('class', 'tableSettings');
					cipka.contentEditable = false;
					cipka.title = 'Cell settings';
					komorka.appendChild(cipka);
					cipka.onmouseover = function() {
						komorka.style.outline = '2px solid #1414ff';
					}
					cipka.onmouseout = function() {
						komorka.style.outline = '';
					}
					cipka.onclick = function() {
						kozyrTableChanger(komorka);
					}
					
					komorka.style.position = 'relative';
					let hujek = document.createElement('div');
					hujek.setAttribute('class', 'kozyrTableResizer');
					hujek.contentEditable = false;
					hujek.style.position = 'absolute';
					hujek.style.top = '0';
					hujek.style.right = '-3px';
					hujek.style.bottom = '0';
					hujek.style.width = '5px';
					hujek.style.zIndex = '999';
					hujek.style.cursor = 'col-resize';
					hujek.addEventListener('mousedown', function(e) {
						zlapana = pozycjusz.cells[getCellIndex(komorka)];
						startOffset = zlapana.offsetWidth - e.pageX;
					});
					komorka.appendChild(hujek);
				}
			}
		}
		document.addEventListener('mousemove', function(e) {
			if (zlapana !== false) {
				zlapana.style.width = startOffset + e.pageX - 5 + 'px';
			}
		});
		document.addEventListener('mouseup', function () {
			zlapana = false;
		});
		
		tab.classList.add('resizable');
	}
}
// kozyrTableResizer koniec

// dataSaver start
function kozyrDataSaver(path, title, waco) {
	let ziomus = this;
	this.waco = waco;
	this.title = title ? title : path;
	this.path = path;
	this.data = localStorage[this.path];
	if (!this.data) {
		this.data = '[]';
		localStorage.setItem(this.path, this.data);
	}
	try {
		this.data = JSON.parse(this.data);
	} catch(e) {
		this.data = [];
		localStorage.setItem(this.path, JSON.stringify(this.data));
	}
	if (!(this.data[0] && typeof this.data[0].n !== 'undefined' && typeof this.data[0].w !== 'undefined' && typeof this.data[0].d !== 'undefined')) {
		this.data = [];
		localStorage.setItem(this.path, JSON.stringify(this.data));
	}
	this.insert = function(nazwa, wartosc) {
		if (this.data.filter(a => a.n == nazwa).length < 1) {
			this.data.push({
				'n' : nazwa,
				'w' : wartosc,
				'd' : Date.now()
			});
			localStorage.setItem(this.path, JSON.stringify(this.data));
			this.aktualizuj('date', 'desc');
			this.window.open();
		} else {
			kozyrConfirm('The file named "' + nazwa + '" already exists. Are you sure you want to replace it?', function() {
				ziomus.remove(nazwa);
				ziomus.insert(nazwa, wartosc);
				ziomus.aktualizuj('date', 'desc');
			}, function() {
				ziomus.save(wartosc, nazwa);
			}, 'Yes', 'No')
		}
	}
	this.remove = function(nazwa) {
		this.data = this.data.filter(a => a.n != nazwa);
		localStorage.setItem(this.path, JSON.stringify(this.data));
	}
	this.getData = function(wartosc, porzadek) {
		if (wartosc && wartosc.toUpperCase() === 'NAME') {
			this.data.sort((a, b) => b.n.localeCompare(a.n));
		} else if (wartosc && wartosc.toUpperCase() === 'DATE') {
			this.data.sort((a, b) => b.d - a.d);
		}
		if (porzadek && porzadek.toUpperCase() === 'ASC') {
			this.data.reverse();
		}
		return this.data;
	}
	this.window = {
		'glowne' : document.createElement('div'),
		'okienko' : document.createElement('div'),
		'pasek' : document.createElement('div'),
		'zamek' : document.createElement('span'),
		'tresc' : document.createElement('div'),
		'tableHead' : document.createElement('div'),
		'tableBody' : document.createElement('div'),
		'naglNazwa' : document.createElement('span'),
		'naglData' : document.createElement('span'),
		'naglUsun' : document.createElement('span'),
		'close' : function() {
			ziomus.window.okienko.classList.remove('show');
			setTimeout(function() {
				ziomus.window.glowne.style.display = 'none';
			}, 600);
		},
		'open' : function() {
			this.glowne.style.display = 'block';
			setTimeout(function() {
				ziomus.window.okienko.classList.add('show');
			}, 10)
			if (ziomus.data.length > 12) {
				this.tableHead.style.width = this.tableBody.clientWidth + 'px';
			}
		}
	}
	this.dataString = function(timestamp) {
		let czas = new Date(timestamp)
		return ('0' + czas.getDate()).slice(-2) + '.' + ('0' + (czas.getMonth() + 1)).slice(-2) + '.' + czas.getFullYear() + ' ' + ('0' + czas.getHours()).slice(-2) + ':' + ('0' + czas.getMinutes()).slice(-2);
	}
	this.aktualizuj = function(sort, porzadek) {
		if (sort && porzadek && sort === 'name') {
			this.window.naglData.removeAttribute('sort');
			this.window.naglNazwa.setAttribute('sort', porzadek);
		} else if (sort && porzadek && sort === 'date') {
			this.window.naglNazwa.removeAttribute('sort');
			this.window.naglData.setAttribute('sort', porzadek);
		}
		let dane = this.getData(sort, porzadek);
		while (this.window.tableBody.firstChild) {
    		this.window.tableBody.removeChild(this.window.tableBody.firstChild);
		}
		for (let z=0; z<dane.length; z++) {
			let wiersz = document.createElement('div');
			wiersz.setAttribute('class', 'kozyrSaverTableRow');
			this.window.tableBody.appendChild(wiersz);
			let span1 = document.createElement('span');
			span1.setAttribute('class', 'kozyrSaverTableCell columnName');
			span1.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAB3RJTUUH5AIIAjUKvxV3fQAAAEVJREFUGNPVjMENgEAMwxzpBuPGggHKWL3NwgtRQRfAvyiyRaR5c0w9I9IVIl0ltYVSEpH2vn0+nQuAUUfHAOgKt/iLwgWzCyxEYINVIgAAAABJRU5ErkJggg=="> ' + dane[z].n;
			wiersz.appendChild(span1);
			let span2 = document.createElement('span');
			span2.setAttribute('class', 'kozyrSaverTableCell columnDate');
			span2.innerHTML = this.dataString(dane[z].d);
			wiersz.appendChild(span2);
			let span3 = document.createElement('span');
			span3.setAttribute('class', 'kozyrSaverTableCell columnDelete');
			let deletor = document.createElement('span');
			deletor.setAttribute('class', 'deletor');
			span3.appendChild(deletor);
			deletor.setAttribute('title', 'Delete')
			deletor.onclick = function() {
				kozyrConfirm('Are you sure you want to delete "' + dane[z].n + '"?', function() {
					ziomus.remove(dane[z].n);
					ziomus.aktualizuj();
				}, false, 'Yes', 'No')
			}
			wiersz.onclick = function(e) {
				if (deletor !== e.target && !deletor.contains(e.target)) {
					if (waco.htmlMode) {
						waco.textArea.value = dane[z].w;
					} else {
						waco.richTextEditor.innerHTML = dane[z].w;
						waco.richTextEditor.querySelectorAll('table:not(.resizable)').forEach(t => kozyrTableResizer(t));
					}
					waco.actualize();
					ziomus.window.close();
				}
			}
			wiersz.appendChild(span3);
		}
		if (dane.length > 12) {
				this.window.tableBody.style.overflow = 'auto';
			} else {
				this.window.tableBody.style.overflow = 'visible';
			}
	}
	this.save = function(wartosc) {
		kozyrPrompt('Enter the title for this project:', function(w) {
			ziomus.insert(w, wartosc);
		}, 'text', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AIKASwZCOTpaQAAAGRJREFUKM/lU8kNwDAIs6Osk8myTlmsGch9tUqkHDR91i8EMjYgKAm0IjihnHjHxHGqKkyJtNI0CCslWnlIVU4u8qSpomPGYS32ZvJi23ajvNp0z+En5T+S4+6NASDUX/IGyokXrA4gWjFLjdIAAAAASUVORK5CYII=" height="14" style="margin-right:4px">Saving...', null, 'Title...', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AIKASwZCOTpaQAAAGRJREFUKM/lU8kNwDAIs6Osk8myTlmsGch9tUqkHDR91i8EMjYgKAm0IjihnHjHxHGqKkyJtNI0CCslWnlIVU4u8qSpomPGYS32ZvJi23ajvNp0z+En5T+S4+6NASDUX/IGyokXrA4gWjFLjdIAAAAASUVORK5CYII=" height="14" style="margin-right:6px">Save', '.kozyrPromptOkButton{display:inline-flex;align-items:center;}');
	}
	
	this.window.glowne.setAttribute('class', 'kozyrSaver');
	this.window.glowne.style.display = 'none';
	this.window.glowne.style.position = 'fixed';
	this.window.glowne.style.zIndex = '9999999';
	this.window.glowne.style.left = '0';
	this.window.glowne.style.top =  '0';
	this.window.glowne.style.width = '100%';
	this.window.glowne.style.height = '100%';
	this.window.glowne.style.overflow = 'auto';
	this.window.glowne.style.background = 'rgba(0, 0, 0, 0.8)';
	this.window.glowne.appendChild(this.window.okienko);
	this.window.okienko.setAttribute('class', 'kozyrSaverWindow');
	this.window.okienko.appendChild(this.window.pasek);
	this.window.pasek.setAttribute('class', 'kozyrSaverTopBar');
	this.window.pasek.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AIOAzQ0Q8ZufAAAAFFJREFUOMtj/P//PwMDAwPD6+2MEAYaEPX8z8hAJGDCZxAhOayGEQLEGsj4//9/BobjxNuOE1j+Z2T8f4yBcoNI8eaoYaOGDS7DLIkvFQhlJwDQ9hoyshF4uwAAAABJRU5ErkJggg==">' + this.title;
	this.window.pasek.appendChild(this.window.zamek);
	this.window.zamek.setAttribute('class', 'kozyrSaverCloser');
	this.window.zamek.setAttribute('title', 'Close')
	this.window.zamek.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AINAB4S7lM2HgAAAHlJREFUKM+dkkEOAjEMA8fmB/D/F8LyBMwBIXWrJkX4GHni1oruOCLc8hI/6KFLgrAIIjyl7KBDnxARlJyha7JMnj2ezavk1WKvkkZj9RolKbePmr/gnaGamT/lrohu5q69rm3v2qtgd1AH64Dt1YxQEOUBVPp6gngDx5pd6+vWKlAAAAAASUVORK5CYII=">';
	this.window.zamek.onclick = function() {
		ziomus.window.close();
	}
	this.window.okienko.appendChild(this.window.tresc);
	this.window.tresc.setAttribute('class', 'kozyrSaverContent');
	this.window.tresc.appendChild(this.window.tableHead);
	this.window.tableHead.setAttribute('class', 'kozyrSaverTableHeadRow');
	this.window.tableHead.appendChild(this.window.naglNazwa);
	this.window.tableHead.appendChild(this.window.naglData);
	this.window.tableHead.appendChild(this.window.naglUsun);
	this.window.naglNazwa.setAttribute('class', 'kozyrSaverTableHeaderCell columnName');
	this.window.naglData.setAttribute('class', 'kozyrSaverTableHeaderCell columnDate');
	this.window.naglUsun.setAttribute('class', 'kozyrSaverTableHeaderCell columnDelete');
	this.window.naglNazwa.innerHTML = 'Name<sorter></sorter>';
	this.window.naglData.innerHTML = 'Date<sorter></sorter>';
	this.window.naglData.setAttribute('sort', 'desc');
	this.window.naglNazwa.onclick = function() {
		if (this.getAttribute('sort') === 'asc') {
			ziomus.aktualizuj('name', 'desc');
		} else {
			ziomus.aktualizuj('name', 'asc');
		}
	}
	this.window.naglData.onclick = function() {
		if (this.getAttribute('sort') === 'desc') {
			ziomus.aktualizuj('date', 'asc');
		} else {
			ziomus.aktualizuj('date', 'desc');
		}
	}
	this.window.tresc.appendChild(this.window.tableBody);
	this.window.tableBody.setAttribute('class', 'kozyrSaverTableBody');
	document.body.appendChild(this.window.glowne);
	this.aktualizuj('date', 'desc');
	let styleTest = document.querySelectorAll("style[id='wacekSaverST']");
	if (styleTest.length < 1) {
		let styluj = document.createElement('style');
		styluj.id = 'wacekSaverST';
		styluj.innerHTML = `
			.kozyrSaver {display:none;}
			.kozyrSaver img {border:none;background:transparent;padding:0;margin:0;}
			.kozyrSaverWindow {margin:auto;background:white;border:1px solid black;cursor:default;margin-top:-100px;max-height:0px;overflow:hidden;transition:max-height 0.6s, margin-top 0.6s;}
			.kozyrSaverWindow.show {max-height:330px;margin-top:0;transition:max-height 0.8s,margin-top 0.8s;}
			.kozyrSaverTopBar {display:flex;align-items:center;background:#292929;color:#e0e0e0;font-family:calibri;position:relative;padding:2px 5px 4px;font-size:13px;border-bottom:1px solid black;}
			.kozyrSaverTopBar img {height:13px;margin-right:5px;}
			.kozyrSaverCloser {position:absolute;right:0;top:0;background:black;line-height:0;padding:2px;cursor:pointer;}
			.kozyrSaverCloser img {width:14px;height:14px;margin-right:0;}
			.kozyrSaverCloser:hover {background:#474747;}
			.kozyrSaverCloser:active {background:#292929;}
			.kozyrSaverContent {background:#afafaf;padding:0;font-family:calibri}
			.kozyrSaverTableHeadRow {display:flex;background:#afafaf;border-bottom:1px solid #888888;}
			.kozyrSaverTableHeaderCell {display:inline-block;color:black;padding:2px 2px 2px 4px;font-size:12px;font-weight:bold;position:relative;}
			.kozyrSaverTableHeaderCell:not(:last-child) {border-right:1px solid white;}
			.kozyrSaverTableHeaderCell:not(:last-child):hover {background:#9b9b9b;cursor:pointer;}
			.kozyrSaverTableBody {max-height:216px;}
			.kozyrSaverTableRow {display:flex;align-items:center;height:18px;}
			.kozyrSaverTableRow:nth-child(odd) {background:white;}
			.kozyrSaverTableRow:nth-child(even) {background:#ebebeb;}
			.kozyrSaverTableRow:hover {cursor:pointer;background:#cecece;}
			.kozyrSaverTableCell {display:inline-block;padding:1px 2px 1px 4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:18px;padding-top:4px;}
			.kozyrSaverTableCell:not(:last-child) {border-right:1px solid #c3c3c3;}
			.kozyrSaverWindow .columnName {width:315px;}
			.kozyrSaverWindow .columnDate {width:90px;}
			.kozyrSaverWindow .columnDelete {width:13px;padding-top:0;}
			.kozyrSaverTableCell.columnName {color:black;font-size:12px;}
			.kozyrSaverTableCell.columnName img {height:11px;margin-bottom:-1px;}
			.kozyrSaverTableCell.columnDelete .deletor {display:inline-block;height:11px;width:9px;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AIKEC4z/I2LegAAAEZJREFUGNNj/P//PwMMHBWQhHOsPzxnhLEZj/BLIFThAIzIJuECLOjWoAPrD88ZmdDdgE4zMDAwMDEQAQajIsb///8TDAIAQbwdL+qNjmEAAAAASUVORK5CYII=);background-repeat:no-repeat;}
			.kozyrSaverTableCell.columnDelete .deletor:hover {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AILDh8boWHNLQAAAEVJREFUGNNj/P//PwMMqHMxwDk3vzEwwtiMapxIqnAAxv+E1TCwoFuDDm5+Y2BkQncDOs3AwMDAxEAEGIyKGP///08wCAAyfBmpTcPahwAAAABJRU5ErkJggg==);background-repeat:no-repeat;}
			.kozyrSaverTableCell.columnDelete .deletor:active {height:10px;width:8px;background-size:8px 10px;}
			.kozyrSaverTableCell.columnDate {font-size:11px;color:#9c9c9c;}
			.kozyrSaverTableHeaderCell sorter {display:inline-block;position:absolute;top:6px;right:8px;border-left:5px solid transparent;border-right:5px solid transparent;margin-left:5px;}
			.kozyrSaverTableHeaderCell[sort=asc] sorter {border-bottom:7px solid #393939;}
			.kozyrSaverTableHeaderCell[sort=desc] sorter {border-top:7px solid #393939;}
			
			@media (min-width:480px) {
				.kozyrSaverWindow {width:460px;}
			}
			@media (max-width:479px) {
				.kozyrSaverWindow {width:90%;}
			}
			@media (min-height:400px) {
				.kozyrSaver {padding-top:100px;}
			}
		`
		document.getElementsByTagName('head')[0].appendChild(styluj);
	}	
}
// dataSaver koniec

// mark.js start
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";class e{constructor(e,t=!0,s=[],r=5e3){this.ctx=e,this.iframes=t,this.exclude=s,this.iframesTimeout=r}static matches(e,t){const s="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){let t=!1;return s.every(s=>!r.call(e,s)||(t=!0,!1)),t}return!1}getContexts(){let e,t=[];return(e=void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(e=>{const s=t.filter(t=>t.contains(e)).length>0;-1!==t.indexOf(e)||s||t.push(e)}),t}getIframeContents(e,t,s=(()=>{})){let r;try{const t=e.contentWindow;if(r=t.document,!t||!r)throw new Error("iframe inaccessible")}catch(e){s()}r&&t(r)}isIframeBlank(e){const t="about:blank",s=e.getAttribute("src").trim(),r=e.contentWindow.location.href;return r===t&&s!==t&&s}observeIframeLoad(e,t,s){let r=!1,i=null;const o=()=>{if(!r){r=!0,clearTimeout(i);try{this.isIframeBlank(e)||(e.removeEventListener("load",o),this.getIframeContents(e,t,s))}catch(e){s()}}};e.addEventListener("load",o),i=setTimeout(o,this.iframesTimeout)}onIframeReady(e,t,s){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,s):this.getIframeContents(e,t,s):this.observeIframeLoad(e,t,s)}catch(e){s()}}waitForIframes(e,t){let s=0;this.forEachIframe(e,()=>!0,e=>{s++,this.waitForIframes(e.querySelector("html"),()=>{--s||t()})},e=>{e||t()})}forEachIframe(t,s,r,i=(()=>{})){let o=t.querySelectorAll("iframe"),n=o.length,a=0;o=Array.prototype.slice.call(o);const c=()=>{--n<=0&&i(a)};n||c(),o.forEach(t=>{e.matches(t,this.exclude)?c():this.onIframeReady(t,e=>{s(t)&&(a++,r(e)),c()},c)})}createIterator(e,t,s){return document.createNodeIterator(e,t,s,!1)}createInstanceOnIframe(t){return new e(t.querySelector("html"),this.iframes)}compareNodeIframe(e,t,s){const r=e.compareDocumentPosition(s),i=Node.DOCUMENT_POSITION_PRECEDING;if(r&i){if(null===t)return!0;if(t.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}getIteratorNode(e){const t=e.previousNode();let s;return{prevNode:t,node:s=null===t?e.nextNode():e.nextNode()&&e.nextNode()}}checkIframeFilter(e,t,s,r){let i=!1,o=!1;return r.forEach((e,t)=>{e.val===s&&(i=t,o=e.handled)}),this.compareNodeIframe(e,t,s)?(!1!==i||o?!1===i||o||(r[i].handled=!0):r.push({val:s,handled:!0}),!0):(!1===i&&r.push({val:s,handled:!1}),!1)}handleOpenIframes(e,t,s,r){e.forEach(e=>{e.handled||this.getIframeContents(e.val,e=>{this.createInstanceOnIframe(e).forEachNode(t,s,r)})})}iterateThroughNodes(e,t,s,r,i){const o=this.createIterator(t,e,r);let n,a,c=[],h=[],l=()=>(({prevNode:a,node:n}=this.getIteratorNode(o)),n);for(;l();)this.iframes&&this.forEachIframe(t,e=>this.checkIframeFilter(n,a,e,c),t=>{this.createInstanceOnIframe(t).forEachNode(e,e=>h.push(e),r)}),h.push(n);h.forEach(e=>{s(e)}),this.iframes&&this.handleOpenIframes(c,e,s,r),i()}forEachNode(e,t,s,r=(()=>{})){const i=this.getContexts();let o=i.length;o||r(),i.forEach(i=>{const n=()=>{this.iterateThroughNodes(e,i,t,s,()=>{--o<=0&&r()})};this.iframes?this.waitForIframes(i,n):n()})}}class t{constructor(e){this.ctx=e,this.ie=!1;const t=window.navigator.userAgent;(t.indexOf("MSIE")>-1||t.indexOf("Trident")>-1)&&(this.ie=!0)}set opt(e){this._opt=Object.assign({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:()=>{},noMatch:()=>{},filter:()=>!0,done:()=>{},debug:!1,log:window.console},e)}get opt(){return this._opt}get iterator(){return new e(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}log(e,t="debug"){const s=this.opt.log;this.opt.debug&&"object"==typeof s&&"function"==typeof s[t]&&s[t](`mark.js: ${e}`)}escapeStr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}createRegExp(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}createSynonymsRegExp(e){const t=this.opt.synonyms,s=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(let i in t)if(t.hasOwnProperty(i)){const o=t[i],n="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o);""!==n&&""!==a&&(e=e.replace(new RegExp(`(${this.escapeStr(n)}|${this.escapeStr(a)})`,`gm${s}`),r+`(${this.processSynomyms(n)}|`+`${this.processSynomyms(a)})`+r))}return e}processSynomyms(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}setupWildcardsRegExp(e){return(e=e.replace(/(?:\\)*\?/g,e=>"\\"===e.charAt(0)?"?":"")).replace(/(?:\\)*\*/g,e=>"\\"===e.charAt(0)?"*":"")}createWildcardsRegExp(e){let t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}setupIgnoreJoinersRegExp(e){return e.replace(/[^(|)\\]/g,(e,t,s)=>{let r=s.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}createJoinersRegExp(e){let t=[];const s=this.opt.ignorePunctuation;return Array.isArray(s)&&s.length&&t.push(this.escapeStr(s.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join(`[${t.join("")}]*`):e}createDiacriticsRegExp(e){const t=this.opt.caseSensitive?"":"i",s=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"];let r=[];return e.split("").forEach(i=>{s.every(s=>{if(-1!==s.indexOf(i)){if(r.indexOf(s)>-1)return!1;e=e.replace(new RegExp(`[${s}]`,`gm${t}`),`[${s}]`),r.push(s)}return!0})}),e}createMergedBlanksRegExp(e){return e.replace(/[\s]+/gim,"[\\s]+")}createAccuracyRegExp(e){const t="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿";let s=this.opt.accuracy,r="string"==typeof s?s:s.value,i="string"==typeof s?[]:s.limiters,o="";switch(i.forEach(e=>{o+=`|${this.escapeStr(e)}`}),r){case"partially":default:return`()(${e})`;case"complementary":return`()([^${o="\\s"+(o||this.escapeStr(t))}]*${e}[^${o}]*)`;case"exactly":return`(^|\\s${o})(${e})(?=$|\\s${o})`}}getSeparatedKeywords(e){let t=[];return e.forEach(e=>{this.opt.separateWordSearch?e.split(" ").forEach(e=>{e.trim()&&-1===t.indexOf(e)&&t.push(e)}):e.trim()&&-1===t.indexOf(e)&&t.push(e)}),{keywords:t.sort((e,t)=>t.length-e.length),length:t.length}}isNumeric(e){return Number(parseFloat(e))==e}checkRanges(e){if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];const t=[];let s=0;return e.sort((e,t)=>e.start-t.start).forEach(e=>{let{start:r,end:i,valid:o}=this.callNoMatchOnInvalidRanges(e,s);o&&(e.start=r,e.length=i-r,t.push(e),s=i)}),t}callNoMatchOnInvalidRanges(e,t){let s,r,i=!1;return e&&void 0!==e.start?(r=(s=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-s>0?i=!0:(this.log("Ignoring invalid or overlapping range: "+`${JSON.stringify(e)}`),this.opt.noMatch(e))):(this.log(`Ignoring invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)),{start:s,end:r,valid:i}}checkWhitespaceRanges(e,t,s){let r,i=!0,o=s.length,n=t-o,a=parseInt(e.start,10)-n;return(r=(a=a>o?o:a)+parseInt(e.length,10))>o&&(r=o,this.log(`End range automatically set to the max value of ${o}`)),a<0||r-a<0||a>o||r>o?(i=!1,this.log(`Invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)):""===s.substring(a,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:a,end:r,valid:i}}getTextNodes(e){let t="",s=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,e=>{s.push({start:t.length,end:(t+=e.textContent).length,node:e})},e=>this.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT,()=>{e({value:t,nodes:s})})}matchesExclude(t){return e.matches(t,this.opt.exclude.concat(["script","style","title","head","html"]))}wrapRangeInTextNode(e,t,s){const r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),o=i.splitText(s-t);let n=document.createElement(r);return n.setAttribute("data-markjs","true"),this.opt.className&&n.setAttribute("class",this.opt.className),n.textContent=i.textContent,i.parentNode.replaceChild(n,i),o}wrapRangeInMappedTextNode(e,t,s,r,i){e.nodes.every((o,n)=>{const a=e.nodes[n+1];if(void 0===a||a.start>t){if(!r(o.node))return!1;const a=t-o.start,c=(s>o.end?o.end:s)-o.start,h=e.value.substr(0,o.start),l=e.value.substr(c+o.start);if(o.node=this.wrapRangeInTextNode(o.node,a,c),e.value=h+l,e.nodes.forEach((t,s)=>{s>=n&&(e.nodes[s].start>0&&s!==n&&(e.nodes[s].start-=c),e.nodes[s].end-=c)}),s-=c,i(o.node.previousSibling,o.start),!(s>o.end))return!1;t=o.end}return!0})}wrapMatches(e,t,s,r,i){const o=0===t?0:t+1;this.getTextNodes(t=>{t.nodes.forEach(t=>{let i;for(t=t.node;null!==(i=e.exec(t.textContent))&&""!==i[o];){if(!s(i[o],t))continue;let n=i.index;if(0!==o)for(let e=1;e<o;e++)n+=i[e].length;t=this.wrapRangeInTextNode(t,n,n+i[o].length),r(t.previousSibling),e.lastIndex=0}}),i()})}wrapMatchesAcrossElements(e,t,s,r,i){const o=0===t?0:t+1;this.getTextNodes(t=>{let n;for(;null!==(n=e.exec(t.value))&&""!==n[o];){let i=n.index;if(0!==o)for(let e=1;e<o;e++)i+=n[e].length;const a=i+n[o].length;this.wrapRangeInMappedTextNode(t,i,a,e=>s(n[o],e),(t,s)=>{e.lastIndex=s,r(t)})}i()})}wrapRangeFromIndex(e,t,s,r){this.getTextNodes(i=>{const o=i.value.length;e.forEach((e,r)=>{let{start:n,end:a,valid:c}=this.checkWhitespaceRanges(e,o,i.value);c&&this.wrapRangeInMappedTextNode(i,n,a,s=>t(s,e,i.value.substring(n,a),r),t=>{s(t,e)})}),r()})}unwrapMatches(e){const t=e.parentNode;let s=document.createDocumentFragment();for(;e.firstChild;)s.appendChild(e.removeChild(e.firstChild));t.replaceChild(s,e),this.ie?this.normalizeTextNode(t):t.normalize()}normalizeTextNode(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}markRegExp(e,t){this.opt=t,this.log(`Searching with expression "${e}"`);let s=0,r="wrapMatches";const i=e=>{s++,this.opt.each(e)};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),this[r](e,this.opt.ignoreGroups,(e,t)=>this.opt.filter(t,e,s),i,()=>{0===s&&this.opt.noMatch(e),this.opt.done(s)})}mark(e,t){this.opt=t;let s=0,r="wrapMatches";const{keywords:i,length:o}=this.getSeparatedKeywords("string"==typeof e?[e]:e),n=this.opt.caseSensitive?"":"i",a=e=>{let t=new RegExp(this.createRegExp(e),`gm${n}`),c=0;this.log(`Searching with expression "${t}"`),this[r](t,1,(t,r)=>this.opt.filter(r,e,s,c),e=>{c++,s++,this.opt.each(e)},()=>{0===c&&this.opt.noMatch(e),i[o-1]===e?this.opt.done(s):a(i[i.indexOf(e)+1])})};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),0===o?this.opt.done(s):a(i[0])}markRanges(e,t){this.opt=t;let s=0,r=this.checkRanges(e);r&&r.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(r)),this.wrapRangeFromIndex(r,(e,t,s,r)=>this.opt.filter(e,t,s,r),(e,t)=>{s++,this.opt.each(e,t)},()=>{this.opt.done(s)})):this.opt.done(s)}unmark(t){this.opt=t;let s=this.opt.element?this.opt.element:"*";s+="[data-markjs]",this.opt.className&&(s+=`.${this.opt.className}`),this.log(`Removal selector "${s}"`),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,e=>{this.unwrapMatches(e)},t=>{const r=e.matches(t,s),i=this.matchesExclude(t);return!r||i?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}}return function(e){const s=new t(e);return this.mark=((e,t)=>(s.mark(e,t),this)),this.markRegExp=((e,t)=>(s.markRegExp(e,t),this)),this.markRanges=((e,t)=>(s.markRanges(e,t),this)),this.unmark=(e=>(s.unmark(e),this)),this}});
// mark.js koniec

const emotikony = ["😁","😂","😃","😄","😅","😆","😉","😊","😋","😌","😍","😏","😒","😓","😔","😖","😘","😚","😜","😝","😞","😠","😡","😢","😣","😤","😥","😨","😩","😪","😫","😭","😰","😱","😲","😳","😵","😷","😀","😇","😈","😎","😐","😑","😕","😗","😙","😛","😟","😦","😧","😬","😮","😯","😴","😶","😸","😹","😺","😻","😼","😽","😾","😿","🙀","🙅","🙆","🙇","🙈","🙉","🙊","🙋","🙌","🙍","🙎","🙏","✂","✅","✈","✉","✊","✋","✌","✏","✒","✔","✖","✨","✳","✴","❄","❇","❌","❎","❓","❔","❕","❗","❤","➕","➖","➗","➡","➰","🚀","🚃","🚄","🚅","🚇","🚉","🚌","🚏","🚑","🚒","🚓","🚕","🚗","🚙","🚚","🚢","🚤","🚥","🚧","🚨","🚩","🚪","🚫","🚬","🚭","🚲","🚶","🚹","🚺","🚻","🚼","🚽","🚾","🛀","Ⓜ","🅰","🅱","🅾","🅿","🆎","🆑","🆒","🆓","🆔","🆕","🆖","🆗","🆘","🆙","🆚","🈁","🈂","🈚","🈯","🈲","🈳","🈴","🈵","🈶","🈷","🈸","🈹","🈺","🉐","🉑","⌚","⌛","⏩","⏪","⏫","⏬","⏰","⏳","☀","☁","☎","☑","☔","☕","☝","☺","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","♠","♣","♥","♦","♨","♻","♿","⚓","⚠","⚡","⚪","⚫","⚽","⚾","⛄","⛅","⛎","⛔","⛪","⛲","⛳","⛵","⛺","⛽","⬛","⬜","⭐","⭕","㊗","㊙","🀄","🃏","🌀","🌁","🌂","🌃","🌄","🌅","🌆","🌇","🌈","🌉","🌊","🌋","🌌","🌏","🌑","🌓","🌔","🌕","🌙","🌛","🌟","🌠","🌰","🌱","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","🌽","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🍅","🍆","🍇","🍈","🍉","🍊","🍌","🍍","🍎","🍏","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍠","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭","🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","🍶","🍷","🍸","🍹","🍺","🍻","🎀","🎁","🎂","🎃","🎄","🎅","🎆","🎇","🎈","🎉","🎊","🎋","🎌","🎍","🎎","🎏","🎐","🎑","🎒","🎓","🎠","🎡","🎢","🎣","🎤","🎥","🎦","🎧","🎨","🎩","🎪","🎫","🎬","🎭","🎮","🎯","🎰","🎱","🎲","🎳","🎴","🎵","🎶","🎷","🎸","🎹","🎺","🎻","🎼","🎽","🎾","🎿","🏀","🏁","🏂","🏃","🏄","🏆","🏈","🏊","🏠","🏡","🏢","🏣","🏥","🏦","🏧","🏨","🏩","🏪","🏫","🏬","🏭","🏮","🏯","🏰","🐌","🐍","🐎","🐑","🐒","🐔","🐗","🐘","🐙","🐚","🐛","🐜","🐝","🐞","🐟","🐠","🐡","🐢","🐣","🐤","🐥","🐦","🐧","🐨","🐩","🐫","🐬","🐭","🐮","🐯","🐰","🐱","🐲","🐳","🐴","🐵","🐶","🐷","🐸","🐹","🐺","🐻","🐼","🐽","🐾","👀","👂","👃","👄","👅","👆","👇","👈","👉","👊","👋","👌","👍","👎","👏","👐","👑","👒","👓","👔","👕","👖","👗","👘","👙","👚","👛","👜","👝","👞","👟","👠","👡","👢","👣","👤","👦","👧","👨","👩","👪","👫","👮","👯","👰","👱","👲","👳","👴","👵","👶","👷","👸","👹","👺","👻","👼","👽","👾","👿","💀","💁","💂","💃","💄","💅","💆","💇","💈","💉","💊","💋","💌","💍","💎","💏","💐","💑","💒","💓","💔","💕","💖","💗","💘","💙","💚","💛","💜","💝","💞","💟","💠","💡","💢","💣","💤","💥","💦","💧","💨","💩","💪","💫","💬","💮","💯","💰","💱","💲","💳","💴","💵","💸","💹","💺","💻","💼","💽","💾","💿","📀","📁","📂","📃","📄","📅","📆","📇","📈","📉","📊","📋","📌","📍","📎","📏","📐","📑","📒","📓","📔","📕","📖","📗","📘","📙","📚","📛","📜","📝","📞","📟","📠","📡","📢","📣","📤","📥","📦","📧","📨","📩","📪","📫","📮","📰","📱","📲","📳","📴","📶","📷","📹","📺","📻","📼","🔃","🔊","🔋","🔌","🔍","🔎","🔏","🔐","🔑","🔒","🔓","🔔","🔖","🔗","🔘","🔙","🔚","🔛","🔜","🔝","🔞","🔟","🔠","🔡","🔢","🔣","🔤","🔥","🔦","🔧","🔨","🔩","🔪","🔫","🔮","🔯","🔰","🔱","🔲","🔳","🔴","🔵","🔶","🔷","🔸","🔹","🔺","🔻","🔼","🔽","🕑","🗻","🗼","🗽","🗾","🗿","🚁","🚂","🚆","🚈","🚊","🚍","🚎","🚐","🚔","🚖","🚘","🚛","🚜","🚝","🚞","🚟","🚠","🚡","🚣","🚦","🚮","🚯","🚰","🚱","🚳","🚴","🚵","🚷","🚸","🚿","🛁","🛂","🛃","🛄","🛅","🌍","🌎","🌐","🌒","🌖","🌗","🌘","🌚","🌜","🌝","🌞","🌲","🌳","🍋","🍐","🍼","🏇","🏉","🏤","🐀","🐁","🐂","🐃","🐄","🐅","🐆","🐇","🐈","🐉","🐊","🐋","🐏","🐐","🐓","🐕","🐖","🐪","👥","👬","👭","💭","💶","💷","📬","📭","📯","📵","🔀","🔁","🔂","🔄","🔅","🔆","🔇","🔉","🔕","🔬","🔭"];

const znakiSpecjalne = ["©","®","™","@","¶","§","℀","℁","ℂ","℃","℄","℅","℆","ℇ","℈","℉","ℊ","ℋ","ℌ","ℍ","ℎ","ℏ","ℐ","ℑ","ℒ","ℓ","℔","ℕ","№","℗","℘","ℙ","ℚ","ℛ","ℜ","ℝ","℞","℟","℠","℡","℣","ℤ","℥","Ω","℧","ℨ","℩","K","Å","ℬ","ℭ","℮","ℯ","ℰ","ℱ","Ⅎ","ℳ","ℴ","ℵ","ℶ","ℷ","ℸ","ℹ","℺","℻","ℼ","ℽ","ℾ","ℿ","⅀","⅁","⅂","⅃","⅄","ⅅ","ⅆ","ⅇ","ⅈ","ⅉ","⅊","⅋","⅍","ⅎ","☀","☁","☂","☃","☄","★","☆","☇","☈","☉","☊","☋","☌","☍","☎","☏","☐","☑","☒","☓","☖","☗","☘","☙","☚","☛","☜","☞","☟","☠","☡","☢","☣","☤","☥","☦","☧","☨","☩","☪","☫","☬","☭","☮","☯","☰","☸","☹","☺","☻","☼","☽","☾","☿","♀","♁","♂","♃","♄","♅","♆","♇","♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟","♠","♡","♢","♣","♤","♥","♦","♧","♨","♩","♪","♫","♬","♭","♮","♯","♰","♱","♲","♳","♴","♵","♶","♷","♸","♹","♺","♻","♼","♽","♾","⚀","⚁","⚂","⚃","⚄","⚅","⚆","⚇","⚈","⚉","⚊","⚋","⚌","⚍","⚎","⚏","⚐","⚑","⚒","⚔","⚕","⚖","⚗","⚘","⚙","⚚","⚛","⚜","⚝","⚞","⚟","⚠","⚢","⚣","⚤","⚥","⚦","⚧","⚨","⚩","⚬","⚭","⚮","⚯","⚰","⚱","⚲","⛢","✁","✂","✃","✄","✆","✇","✈","✉","✎","✏","✐","✑","✒","✔","✖","✘","✙","✚","✛","✜","✝","✞","✟","✠","✡","✢","✣","✤","✥","✦","✧","✩","✪","✫","✬","✭","✯","✰","✱","✳","✴","✵","✷","✹","✺","✻","✼","✽","✾","✿","❀","❁","❂","❃","❄","❅","❆","❇","❈","❉","❊","❋","❍","❏","❖","❚","❛","❜","❝","❞","❡","❣","❤","❥","❦","❧","❪","❫","❬","❭","❮","❯","❰","❱","❲","❳","❴","❵","❶","❷","❸","❹","❺","❻","❼","❽","❾","❿","➀","➁","➂","➃","➄","➅","➆","➇","➈","➉","➔","➘","➚","➛","➝","➟","➠","➢","➤","➥","➦","➨","➩","➪","➫","➬","➴","➵","➶","➷","➸","➹","➺","➻","➼","➽","➾","←","↑","↓","↔","↕","↖","↗","↘","↙","↜","↝","↞","↟","↠","↡","↤","↥","↦","↧","↹","↺","↻","⇅","⇆","⇐","⇑","⇒","⇓","⇔","⇕","⇖","⇗","⇘","⇙","⤸","⤹","⤺","⤻","¼","½","¾","⅐","⅑","⅒","⅓","⅔","¼","½","¾","⅐","⅑","⅒","⅓","⅔","⅕","⅖","⅗","⅘","⅙","⅚","⅛","⅜","⅝","⅞","⅟","Ⅰ","Ⅱ","Ⅲ","Ⅳ","Ⅴ","Ⅵ","Ⅶ","Ⅷ","Ⅸ","Ⅹ","Ⅺ","Ⅻ","ↀ","ↁ","ↂ","Ↄ","ↄ","ↅ","ↆ","↉","+","−","×","÷","=","≠","±","¬","<",">","⋜","⋝","ƒ","%","‰","‱","∀","∁","∂","∃","∄","∅","∆","∇","∈","∉","∊","∋","∌","∍","∎","∏","∐","∑","∓","∔","∕","∖","∗","∘","∙","√","∛","∜","∝","∞","∟","∠","∡","∢","∣","∤","∥","∦","∧","∨","∩","∪","∫","∬","∭","∮","∯","∰","∱","∲","∳","∷","∻","∼","∾","∿","≀","≁","≂","≃","≄","≅","≆","≇","≈","≊","≋","≌","≍","≎","≏","≔","≕","≖","≗","≘","≙","≚","≛","≜","≝","≞","≟","≡","≢","≣","≤","≥","≦","≧","≨","≩","≪","≫","≬","≭","≮","≯","≰","≱","≲","≳","≴","≵","≶","≷","≸","≹","≺","≻","≼","≽","≾","≿","⊀","⊁","⊂","⊃","⊄","⊅","⊆","⊇","⊈","⊉","⊊","⊋","⊌","⊍","⊎","⊏","⊐","⊑","⊒","⊓","⊔","⊕","⊖","⊗","⊘","⊙","⊚","⊛","⊜","⊝","⊞","⊟","⊠","⊡","⊢","⊣","⊤","⊥","⊦","⊧","⊨","⊩","⊪","⊫","⊬","⊭","⊮","⊯","⊰","⊱","⊲","⊳","⊴","⊵","⊶","⊷","⊸","⊹","⊺","⊻","⊼","⊽","⊾","⊿","⋀","⋁","⋂","⋃","⋄","⋅","⋆","⋇","⋈","⋉","⋊","⋋","⋌","⋍","⋎","⋏","⋐","⋑","⋒","⋓","⋔","⋕","⋖","⋗","⋘","⋙","⋞","⋟","⋠","⋡","⋢","⋣","⋤","⋥","⋦","⋧","⋨","⋩","⋪","⋫","⋬","⋭","⋮","⋯","⋰","⋱","⋳","⋵","⋶","⋿","$","¢","£","€","¥","₽","¤","₠","₡","₣","₤","₱","₳","₴"]

const opcjonizator = {
	'bold' : {
		'typ' : 'kozyrType1',
		'kod' : 'M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z',
		'rozmiar' : '0 0 384 512',
		'akcja' : 'bold',
		'tultip' : 'Bold',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<b>', '</b>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'italic' : {
		'typ' : 'kozyrType1',
		'kod' : 'M320 48v16a16 16 0 0 1-16 16h-67l-88 352h59a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h67l88-352h-59a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z',
		'rozmiar' : '0 0 320 512',
		'akcja' : 'italic',
		'tultip' : 'Italic',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<i>', '</i>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'underline' : {
		'typ' : 'kozyrType1',
		'kod' : 'M32 48h32v208c0 88.22 71.78 160 160 160s160-71.78 160-160V48h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h32v208a96 96 0 0 1-192 0V48h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm400 416H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'underline',
		'tultip' : 'Underline',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<u>', '</u>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'strikethrough' : {
		'typ' : 'kozyrType1',
		'kod' : 'M150.39 208h113.17l-46.31-23.16a45.65 45.65 0 0 1 0-81.68A67.93 67.93 0 0 1 247.56 96H310a45.59 45.59 0 0 1 36.49 18.25l15.09 20.13a16 16 0 0 0 22.4 3.21l25.62-19.19a16 16 0 0 0 3.21-22.4L397.7 75.84A109.44 109.44 0 0 0 310.1 32h-62.54a132.49 132.49 0 0 0-58.94 13.91c-40.35 20.17-64.19 62.31-60.18 108 1.76 20.09 10.02 38.37 21.95 54.09zM496 240H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-92.5 80h-91.07l14.32 7.16a45.65 45.65 0 0 1 0 81.68 67.93 67.93 0 0 1-30.31 7.16H234a45.59 45.59 0 0 1-36.49-18.25l-15.09-20.13a16 16 0 0 0-22.4-3.21L134.4 393.6a16 16 0 0 0-3.21 22.4l15.11 20.17A109.44 109.44 0 0 0 233.9 480h62.54a132.42 132.42 0 0 0 58.93-13.91c40.36-20.17 64.2-62.31 60.19-108-1.19-13.69-5.89-26.27-12.06-38.09z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'strikethrough',
		'tultip' : 'Strikethrough',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<strike>', '</strike>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'alignLeft' : {
		'typ' : 'kozyrType1',
		'kod' : 'M12.83 344h262.34A12.82 12.82 0 0 0 288 331.17v-22.34A12.82 12.82 0 0 0 275.17 296H12.83A12.82 12.82 0 0 0 0 308.83v22.34A12.82 12.82 0 0 0 12.83 344zm0-256h262.34A12.82 12.82 0 0 0 288 75.17V52.83A12.82 12.82 0 0 0 275.17 40H12.83A12.82 12.82 0 0 0 0 52.83v22.34A12.82 12.82 0 0 0 12.83 88zM432 168H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'justifyLeft',
		'tultip' : 'Align left',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<div style="text-align:left">', '</div>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'alignCenter' : {
		'typ' : 'kozyrType1',
		'kod' : 'M108.1 88h231.81A12.09 12.09 0 0 0 352 75.9V52.09A12.09 12.09 0 0 0 339.91 40H108.1A12.09 12.09 0 0 0 96 52.09V75.9A12.1 12.1 0 0 0 108.1 88zM432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-92.09 176A12.09 12.09 0 0 0 352 331.9v-23.81A12.09 12.09 0 0 0 339.91 296H108.1A12.09 12.09 0 0 0 96 308.09v23.81a12.1 12.1 0 0 0 12.1 12.1z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'justifyCenter',
		'tultip' : 'Center',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<div style="text-align:center">', '</div>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'alignRight' : {
		'typ' : 'kozyrType1',
		'kod' : 'M16 216h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm416 208H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 52.83v22.34A12.82 12.82 0 0 0 172.83 88h262.34A12.82 12.82 0 0 0 448 75.17V52.83A12.82 12.82 0 0 0 435.17 40zm0 256H172.83A12.82 12.82 0 0 0 160 308.83v22.34A12.82 12.82 0 0 0 172.83 344h262.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'justifyRight',
		'tultip' : 'Align right',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<div style="text-align:right">', '</div>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'justify' : {
		'typ' : 'kozyrType1',
		'kod' : 'M432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 56v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'justifyFull',
		'tultip' : 'Justify',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<div style="text-align:justify">', '</div>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'undo' : {
		'typ' : 'kozyrType2',
		'kod' : 'M12 8h27.711c6.739 0 12.157 5.548 11.997 12.286l-2.347 98.568C93.925 51.834 170.212 7.73 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.835 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l19.738-19.738c4.498-4.498 11.753-4.785 16.501-.552C160.213 433.246 205.895 452 256 452c108.322 0 196-87.662 196-196 0-108.322-87.662-196-196-196-79.545 0-147.941 47.282-178.675 115.302l126.389-3.009c6.737-.16 12.286 5.257 12.286 11.997V212c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V20C0 13.373 5.373 8 12 8z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'undo',
		'tultip' : 'Undo',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				document.execCommand(this.akcja);
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'redo' : {
		'typ' : 'kozyrType2',
		'kod' : 'M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.568C418.075 51.834 341.788 7.73 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.165 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.322 0-196-87.662-196-196 0-108.322 87.662-196 196-196 79.545 0 147.941 47.282 178.675 115.302l-126.389-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'redo',
		'tultip' : 'Redo',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				document.execCommand(this.akcja);
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'clean' : {
		'typ' : 'kozyrType2',
		'kod' : 'M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'clean',
		'tultip' : 'Clean',
		'onklik' : function(waco) {
			kozyrConfirm('<i class="fas fa-question"></i> Are you sure you want to clean the text editor?', function() {
				waco.richTextEditor.innerHTML = '';
				if (waco.textArea) {
					waco.textArea.value = '';
				}
				if (waco.htmlMode) {
					waco.textArea.focus();
				} else {
					waco.richTextEditor.focus();
				}
			}, null, 'Yes', 'No');
		}
	},
	'background' : {
		'typ' : 'kozyrColor',
		'kod' : 'M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'backColor',
		'tultip' : 'Background color',
		'onklik' : function(waco, input) {
			waco.selekcja = zapiszZaznaczenie();
			input.value = zmieniarkaKolorow(document.queryCommandValue('backColor') ? document.queryCommandValue('backColor') : 'rgb(255, 255, 255)');
			input.click();
		},
		'onczendz' : function(waco, input) {
			if (waco.htmlMode) {
				waco.formujHTML('<span style="background-color:' + input.value + '">', '</span>');
			} else {
				przywrocZaznaczenie(waco.selekcja);
				waco.formujTekst('backColor', input.value);
			}
		}
	},
	'fontColor' : {
		'typ' : 'kozyrColor',
		'kod' : 'M432 432h-33.32l-135-389.24A16 16 0 0 0 248.55 32h-49.1a16 16 0 0 0-15.12 10.76L49.32 432H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-35.44l33.31-96h164.26l33.31 96H304a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM158.53 288L224 99.31 289.47 288z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'foreColor',
		'tultip' : 'Font color',
		'onklik' : function(waco, input) {
			waco.selekcja = zapiszZaznaczenie();
			input.value = zmieniarkaKolorow(document.queryCommandValue('foreColor') ? document.queryCommandValue('foreColor') : 'rgb(0, 0, 0)');
			input.click();
		},
		'onczendz' : function(waco, input) {
			if (waco.htmlMode) {
				waco.formujHTML('<span style="color:' + input.value + '">', '</span>');
			} else {
				przywrocZaznaczenie(waco.selekcja);
				waco.formujTekst('foreColor', input.value);
			}
		}
	},
	'copy' : {
		'typ' : 'kozyrType2',
		'kod' : 'M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'copy',
		'tultip' : 'Copy',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				document.execCommand(this.akcja);
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'paste' : {
		'typ' : 'kozyrType2',
		'kod' : 'M433.941 193.941l-51.882-51.882A48 48 0 0 0 348.118 128H320V80c0-26.51-21.49-48-48-48h-61.414C201.582 13.098 182.294 0 160 0s-41.582 13.098-50.586 32H48C21.49 32 0 53.49 0 80v288c0 26.51 21.49 48 48 48h80v48c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V227.882a48 48 0 0 0-14.059-33.941zm-84.066-16.184l48.368 48.368a6 6 0 0 1 1.757 4.243V240h-64v-64h9.632a6 6 0 0 1 4.243 1.757zM160 38c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18zm-32 138v192H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h55.414c9.004 18.902 28.292 32 50.586 32s41.582-13.098 50.586-32H266a6 6 0 0 1 6 6v42h-96c-26.51 0-48 21.49-48 48zm266 288H182a6 6 0 0 1-6-6V182a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v170a6 6 0 0 1-6 6z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'paste',
		'tultip' : 'Paste',
		'onklik' : function(waco) {
			navigator.clipboard.readText().then(schowek => {
				if (waco.htmlMode) {
					waco.formujHTML(schowek, '');
				} else {
					waco.formujTekst('insertHTML', schowek);
				}
			});
		}
	},
	'cut' : {
		'typ' : 'kozyrType2',
		'kod' : 'M263.39 256L445.66 73.37c3.12-3.12 3.12-8.19 0-11.31-18.74-18.74-49.14-18.74-67.88 0L223.82 216.35l-43.1-43.18C187.92 159.71 192 144.33 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c16.31 0 31.66-4.07 45.11-11.24L184.26 256l-43.15 43.24C127.66 292.07 112.31 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-16.33-4.08-31.71-11.28-45.17l43.1-43.18 153.95 154.29c18.74 18.74 49.14 18.74 67.88 0 3.12-3.12 3.12-8.19 0-11.31L263.39 256zM96 176c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm0 256c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'cut',
		'tultip' : 'Cut',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				document.execCommand(this.akcja);
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'indent' : {
		'typ' : 'kozyrType2',
		'kod' : 'M432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM435.17 168H204.83A12.82 12.82 0 0 0 192 180.83v22.34A12.82 12.82 0 0 0 204.83 216h230.34A12.82 12.82 0 0 0 448 203.17v-22.34A12.82 12.82 0 0 0 435.17 168zM432 48H16A16 16 0 0 0 0 64v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm3.17 248H204.83A12.82 12.82 0 0 0 192 308.83v22.34A12.82 12.82 0 0 0 204.83 344h230.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'indent',
		'tultip' : 'Indent',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<div style="margin-left:40px">', '</div>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'outdent' : {
		'typ' : 'kozyrType2',
		'kod' : 'M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 0 0 0 22.62zM432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 308.83v22.34A12.82 12.82 0 0 0 204.83 344h230.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296zM432 40H16A16 16 0 0 0 0 56v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16zm3.17 128H204.83A12.82 12.82 0 0 0 192 180.83v22.34A12.82 12.82 0 0 0 204.83 216h230.34A12.82 12.82 0 0 0 448 203.17v-22.34A12.82 12.82 0 0 0 435.17 168z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'outdent',
		'tultip' : 'Outdent',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<div style="margin-left:-40px">', '</div>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'horizontalLine' : {
		'typ' : 'kozyrType2',
		'kod' : 'M640 239.87v31.26A15.88 15.88 0 0 1 624.14 287H15.87A15.88 15.88 0 0 1 0 271.13v-31.26A15.88 15.88 0 0 1 15.87 224h608.27A15.88 15.88 0 0 1 640 239.87z',
		'rozmiar' : '0 0 640 512',
		'akcja' : 'insertHorizontalRule',
		'tultip' : 'Horizontal line',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<hr>', '');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'removeFormat' : {
		'typ' : 'kozyrType2',
		'kod' : 'M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z',
		'rozmiar' : '0 0 640 512',
		'akcja' : 'removeFormat',
		'tultip' : 'Remove formatting',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				kozyrConfirm('<i class="fas fa-question"></i> Are you sure you want to remove formatting from all text?', function() {
					let tkst = new DOMParser().parseFromString(waco.textArea.value, 'text/html');
					tkst = tkst.body.textContent;
					waco.textArea.value = tkst;
				}, null, 'Yes', 'No');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'selectAll' : {
		'typ' : 'kozyrType2',
		'kod' : 'M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z',
		'rozmiar' : '0 0 320 512',
		'akcja' : 'selectAll',
		'tultip' : 'Select all',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				document.execCommand(this.akcja);
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'subscript' : {
		'typ' : 'kozyrType1',
		'kod' : 'M336 64h-52.28a16 16 0 0 0-13.31 7.12L176 212.73 81.59 71.12A16 16 0 0 0 68.28 64H16A16 16 0 0 0 0 80v16a16 16 0 0 0 16 16h35.16l96 144-96 144H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h52.28a16 16 0 0 0 13.31-7.12L176 299.27l94.41 141.61a16 16 0 0 0 13.31 7.12H336a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-35.16l-96-144 96-144H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm160 400h-24V304a16 16 0 0 0-16-16h-32a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 408 352h16v112h-24a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'subscript',
		'tultip' : 'Subscript',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<span style="vertical-align:sub">', '</span>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'superscript' : {
		'typ' : 'kozyrType1',
		'kod' : 'M336 64h-52.28a16 16 0 0 0-13.31 7.12L176 212.73 81.59 71.12A16 16 0 0 0 68.28 64H16A16 16 0 0 0 0 80v16a16 16 0 0 0 16 16h35.16l96 144-96 144H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h52.28a16 16 0 0 0 13.31-7.12L176 299.27l94.41 141.61a16 16 0 0 0 13.31 7.12H336a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-35.16l-96-144 96-144H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm160 112h-24V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 408 64h16v112h-24a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'superscript',
		'tultip' : 'Superscript',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<span style="vertical-align:super">', '</span>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'orderedList' : {
		'typ' : 'kozyrType1',
		'kod' : 'M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.84a154.82 154.82 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.3 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.73 6.13-3.2 11.72 2.62 15.94 7.71 4.69 20.39 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 392H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.9 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.33c3.28-10.29 48.33-18.68 48.33-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.45 18.75-4.38 5.59-3 10.84 2.79 15.37l8.58 6.88c5.61 4.56 11 2.47 16.13-2.44a13.4 13.4 0 0 1 9.45-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.1 320z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'insertOrderedList',
		'tultip' : 'Ordered list',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<ol><li>', '</li></ol>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'unorderedList' : {
		'typ' : 'kozyrType1',
		'kod' : 'M48 368a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 24H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'insertUnorderedList',
		'tultip' : 'Unordered list',
		'onklik' : function(waco) {
			if (waco.htmlMode) {
				waco.formujHTML('<ul><li>', '</li></ul>');
			} else {
				waco.formujTekst(this.akcja, null);
			}
		}
	},
	'fontName' : {
		'typ' : 'kozyrSelect',
		'akcja' : 'fontName',
		'tultip' : 'Select font',
		'styluj' : 'fontFamily',
		'opcje' : [{
			'nazwa' : 'Times New Roman',
			'wartosc' : 'Times New Roman'
		}, {
			'nazwa' : 'Georgia',
			'wartosc' : 'Georgia'
		}, {
			'nazwa' : 'Palatino',
			'wartosc' : 'Palatino Linotype'
		}, {
			'nazwa' : 'Arial',
			'wartosc' : 'Arial'
		}, {
			'nazwa' : 'Arial Black',
			'wartosc' : 'Arial Black'
		}, {
			'nazwa' : 'Comic Sans',
			'wartosc' : 'Comic Sans MS'
		}, {
			'nazwa' : 'Impact',
			'wartosc' : 'Impact'
		}, {
			'nazwa' : 'Lucida Sans',
			'wartosc' : 'Lucida Sans Unicode'
		}, {
			'nazwa' : 'Tahoma',
			'wartosc' : 'Tahoma'
		}, {
			'nazwa' : 'Trebuchet',
			'wartosc' : 'Trebuchet MS'
		}, {
			'nazwa' : 'Verdana',
			'wartosc' : 'Verdana'
		}, {
			'nazwa' : 'Courier',
			'wartosc' : 'Courier New'
		}, {
			'nazwa' : 'Lucida Console',
			'wartosc' : 'Lucida Console'
		}, {
			'nazwa' : 'Verdana',
			'wartosc' : 'Verdana'
		}],
		'onczendz' : function(waco, wartosc) {
			if (waco.htmlMode) {
				waco.formujHTML('<span style="font-family:\'' + wartosc + '\'">', '</span>');
			} else {
				waco.formujTekst(this.akcja, wartosc);
			}
		}
	},
	'fontSize' : {
		'typ' : 'kozyrSelect',
		'akcja' : 'fontSize',
		'tultip' : 'Font size',
		'styluj' : 'fontSize',
		'opcje' : [{
			'nazwa' : 'Font size 1',
			'wartosc' : 'x-small'
		}, {
			'nazwa' : 'Font size 2',
			'wartosc' : 'small'
		}, {
			'nazwa' : 'Font size 3',
			'wartosc' : 'medium'
		}, {
			'nazwa' : 'Font size 4',
			'wartosc' : 'large'
		}, {
			'nazwa' : 'Font size 5',
			'wartosc' : 'x-large'
		}, {
			'nazwa' : 'Font size 6',
			'wartosc' : 'xx-large'
		}, {
			'nazwa' : 'Font size 7',
			'wartosc' : 'xxx-large'
		}],
		'onczendz' : function(waco, wartosc) {
			if (waco.htmlMode) {
				waco.formujHTML('<span style="font-size:' + this.opcje[Number(wartosc) - 1].wartosc + '">', '</span>');
			} else {
				waco.formujTekst(this.akcja, wartosc);
			}
		}
	},
	'formatting' : {
		'typ' : 'kozyrSelect',
		'akcja' : 'formatBlock',
		'tultip' : 'Format block',
		'styluj' : null,
		'opcje' : [{
			'nazwa' : 'Block',
			'wartosc' : 'div'
		}, {
			'nazwa' : 'Paragraph',
			'wartosc' : 'p'
		}, {
			'nazwa' : 'Preformatted',
			'wartosc' : 'pre'
		}, {
			'nazwa' : 'Heading H1',
			'wartosc' : 'h1'
		}, {
			'nazwa' : 'Heading H2',
			'wartosc' : 'h2'
		}, {
			'nazwa' : 'Heading H3',
			'wartosc' : 'h3'
		}, {
			'nazwa' : 'Heading H4',
			'wartosc' : 'h4'
		}, {
			'nazwa' : 'Heading H5',
			'wartosc' : 'h5'
		}, {
			'nazwa' : 'Heading H6',
			'wartosc' : 'h6'
		}],
		'onczendz' : function(waco, wartosc) {
			if (waco.htmlMode) {
				waco.formujHTML('<' + wartosc + '>', '</' + wartosc + '>');
			} else {
				waco.formujTekst(this.akcja, wartosc);
			}
		}
	},
	'save' : {
		'typ' : 'kozyrType2',
		'kod' : 'M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z',
		'rozmiar' : '0 0 448 512',
		'akcja' : 'save',
		'tultip' : 'Save',
		'onklik' : function(waco) {
			if (!waco.dataSaver) {
				waco.dataSaver = new kozyrDataSaver('kozyrTexts', 'Projects', waco);
			}
			waco.dataSaver.save(waco.html());
		}
	},
	'open' : {
		'typ' : 'kozyrType2',
		'kod' : 'M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z',
		'rozmiar' : '0 0 576 512',
		'akcja' : 'open',
		'tultip' : 'Open',
		'onklik' : function(waco) {
			if (!waco.dataSaver) {
				waco.dataSaver = new kozyrDataSaver('kozyrTexts', 'Projects', waco);
			}
			waco.dataSaver.window.open();
		}
	},
	'link' : {
		'typ' : 'kozyrType2',
		'kod' : 'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'createLink',
		'tultip' : 'Add link',
		'onklik' : function(waco) {
			kozyrPrompt('Enter URL Adress:', function(e) {
				przywrocZaznaczenie(waco.selekcja);
				if (waco.htmlMode) {
					waco.formujHTML('<a href="' + e + '">' + (waco.textArea.selectionStart === waco.textArea.selectionEnd ? e : ''), '</a>');
				} else {
					waco.formujTekst('createLink', e);
				}
			}, 'text', 'Enter URL', false, 'URL...', 'OK', false);
		}
	},
	'image' : {
		'typ' : 'kozyrExpand',
		'kod' : 'M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'insertImage',
		'tultip' : 'Add image',
		'dodaj' : function(waco, el) {
			let rozw = document.createElement('div');
			rozw.setAttribute('class', 'imagExpand');
			let sp1 = document.createElement('label');
			sp1.setAttribute('class', 'imagExpandAction');
			sp1.innerHTML = 'From disk';
			let inp = document.createElement('input');
			inp.type = 'file';
			inp.style.display = 'none';
			inp.accept = '.png, .jpg, .jpeg, .gif, .PNG, .JPG, .JPEG, .GIF';
			inp.multiple = true;
			inp.onchange = function(e) {
				let pliki = e.target.files;
				for (let p=0; p<pliki.length; p++) {
					if (!pliki[p].type.match('image.*')) {
						continue;
					}
					let reader = new FileReader();
					reader.onload = function() {
						if (waco.htmlMode) {
							waco.formujHTML('<img src="' + this.result + '">', '');
						} else {
							waco.formujTekst('insertImage', this.result);
						}
						inp.value = '';
					}
					reader.readAsDataURL(pliki[p]);
				}
			}
			sp1.appendChild(inp);
			sp1.onclick = function() {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			}
			rozw.appendChild(sp1);
			let sp2 = document.createElement('span');
			sp2.setAttribute('class', 'imagExpandAction');
			sp2.innerHTML = 'From URL';
			sp2.onclick = function() {
				waco.selekcja = zapiszZaznaczenie();
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
				kozyrAddImageFromURL(function(img) {
					przywrocZaznaczenie(waco.selekcja);
					waco.formujTekst('insertImage', img.src)
				}, 'Enter image URL', 'Image URL...', 'Add');
			}
			rozw.appendChild(sp2);
			
			el.appendChild(rozw);
			
			document.addEventListener('mousedown', (e) => {
				if (el.classList.contains('active') && !el.contains(e.target)) {
					el.classList.remove('active');
				}
			});
		},
		'onklik' : function(waco, el, event) {
			if (!el.getElementsByClassName('imagExpand')[0].contains(event.target)) {
				el.classList.toggle('active');
			}
		}
	},
	'emoticons' : {
		'typ' : 'kozyrExpand',
		'kod' : 'M200.3 248c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zm128 0c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3z',
		'rozmiar' : '0 0 496 512',
		'akcja' : 'insertText',
		'tultip' : 'Emoticons',
		'dodaj' : function(waco, el) {
			let rozw = document.createElement('div');
			rozw.setAttribute('class', 'emotExpand');
			emotikony.forEach(function(ikona) {
				let span = document.createElement('span');
				span.textContent = ikona;
				rozw.appendChild(span);
				span.onclick = function() {
					if (waco.htmlMode) {
						waco.formujHTML('', ikona);
					} else {
						waco.formujTekst('insertText', ikona);
					}
					el.classList.remove('active');
				}
				el.appendChild(rozw);
			});
			
			document.addEventListener('mousedown', (e) => {
				if (el.classList.contains('active') && !el.contains(e.target)) {
					el.classList.remove('active');
				}
			});
		},
		'onklik' : function(waco, el, event) {
			if (!el.getElementsByClassName('emotExpand')[0].contains(event.target)) {
				el.classList.toggle('active');
			}
		}
	},
	'symbols' : {
		'typ' : 'kozyrExpand',
		'kod' : 'M287.96 448H42.36a42.314 42.314 0 0 1-38.92-25.62C-3.26 406.8 0 388.8 11.7 376.52L126.63 256 11.7 135.48C0 123.2-3.26 105.2 3.44 89.62A42.325 42.325 0 0 1 42.36 64h245.6C305.65 64 320 78.33 320 96v48c0 8.84-7.17 16-16.02 16h-16.02c-8.85 0-16.02-7.16-16.02-16v-32H55.66l116.27 121.94c11.79 12.36 11.79 31.78 0 44.14L55.66 400h216.28v-32c0-8.84 7.17-16 16.02-16h16.02c8.85 0 16.02 7.16 16.02 16v48c0 17.67-14.35 32-32.04 32z',
		'rozmiar' : '0 0 320 512',
		'akcja' : 'insertText',
		'tultip' : 'Symbols',
		'dodaj' : function(waco, el) {
			let rozw = document.createElement('div');
			rozw.setAttribute('class', 'emotExpand');
			znakiSpecjalne.forEach(function(ikona) {
				let span = document.createElement('span');
				span.textContent = ikona;
				rozw.appendChild(span);
				span.onclick = function() {
					if (waco.htmlMode) {
						waco.formujHTML('', ikona);
					} else {
						waco.formujTekst('insertText', ikona);
					}
					el.classList.remove('active');
				}
				el.appendChild(rozw);
			});
			
			document.addEventListener('mousedown', (e) => {
				if (el.classList.contains('active') && !el.contains(e.target)) {
					el.classList.remove('active');
				}
			});
		},
		'onklik' : function(waco, el, event) {
			if (!el.getElementsByClassName('emotExpand')[0].contains(event.target)) {
				el.classList.toggle('active');
			}
		}
	},
	'HTMLmode' : {
		'typ' : 'kozyrModeChanger',
		'kod' : 'M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z',
		'rozmiar' : '0 0 576 512',
		'akcja' : 'modeChange',
		'tultip' : 'HTML mode',
		'onklik' : function(waco, el) {
			if (waco.htmlMode) {
				waco.htmlMode = false;
				waco.przelaczTryb('text');
				waco.toolbar.classList.remove('htmlMode');
				waco.toolbar.querySelectorAll('.kozyrModeChanger').forEach(a => a.classList.remove('active'));
			} else {
				waco.htmlMode = true;
				waco.przelaczTryb('html');
				waco.toolbar.classList.add('htmlMode');
				waco.toolbar.querySelectorAll('.kozyrModeChanger').forEach(a => a.classList.add('active'));
			}
		}
	},
	'table' : {
		'typ' : 'kozyrType2',
		'kod' : 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'insertHTML',
		'tultip' : 'Table',
		'onklik' : function(waco) {
			waco.selekcja = zapiszZaznaczenie();
			kozyrTableCreator(waco);
		}
	},
	'print' : {
		'typ' : 'kozyrType2',
		'kod' : 'M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'print',
		'tultip' : 'Print',
		'onklik' : function(waco) {
			let okno = window.open();
			okno.document.write('<!DOCTYPE html><html><head><title>Kozyr Text Editor Print</title><style>table {border-collapse:collapse;margin:5px;} table td {min-width:18px;border:1px solid #292929;padding:1px 3px;} table tr {height:18px;}</style></head><body>' + waco.html() + '</body></html>');
			okno.print();
			okno.close();
		}
	},
	'download' : {
		'typ' : 'kozyrType2',
		'kod' : 'M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'download',
		'tultip' : 'Download',
		'onklik' : function(waco) {
			let tworz = document.createElement('a');
			let html = '<!DOCTYPE html><html><head><title>Kozyr Text Editor</title><style>#kozyrTextEditorContent:after{content:"";display:block;clear:both;} table {border-collapse:collapse;margin:5px;} table td {min-width:18px;border:1px solid #292929;padding:1px 3px;} table tr {height:18px;}</style></head><body style="background:lightgray;"><div id="kozyrTextEditorContent" style="background:white;padding:5px;max-width:900px;margin:auto;border:2px inset gray;">' + waco.html() + '</div></body></html>';
			let plik = new Blob([html], {type: 'text/plain'});
			tworz.href = URL.createObjectURL(plik);
			tworz.download = waco.richTextEditor.textContent.trim().replace(/\s/g, '_').substring(0, 20) + '.html';
			document.body.appendChild(tworz);
			tworz.click();
			document.body.removeChild(tworz);
		}
	},
	'upload' : {
		'typ' : 'kozyrType2',
		'kod' : 'M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z',
		'rozmiar' : '0 0 512 512',
		'akcja' : 'upload',
		'tultip' : 'Load from file',
		'onklik' : function(waco, inp) {
			inp.click();
		},
		'onczendz' : function(waco, inp, ewent) {
			let plik = ewent.target.files[0];
			if (plik.type.match('text.*')) {
				let reader = new FileReader();
				reader.onload = function() {
					let rezult = this.result;
					let xtx = new DOMParser().parseFromString(rezult, 'text/html');
					if (xtx.querySelector('#kozyrTextEditorContent')) rezult = xtx.querySelector('#kozyrTextEditorContent').innerHTML;
					if (waco.htmlMode) {
						waco.textArea.value = rezult;
					} else {
						waco.richTextEditor.innerHTML = rezult;
						waco.richTextEditor.querySelectorAll('table:not(.resizable)').forEach(t => kozyrTableResizer(t));
						if (waco.search) {
							waco.searchBox.value = '';
							waco.powt.textContent = '';
						}
					}
					waco.actualize();
					inp.value = '';
				}
				reader.onerror = function() {
					kozyrAlert('An error occured during loading the file...');
				}
				reader.readAsText(plik);
			} else {
				kozyrAlert('Invalid file format...');
			}
		}
	}
}

function zapiszZaznaczenie() {
	if (window.getSelection) {
		let zazn = window.getSelection();
		if (zazn.getRangeAt && zazn.rangeCount) {
			return zazn.getRangeAt(0);
		}
	} else if (document.selection && document.selection.createRange) {
		return document.selection.createRange();
	}
	return null;
}

function przywrocZaznaczenie(a) {
	if (a) {
		if (window.getSelection) {
			var zazn = window.getSelection();
			zazn.removeAllRanges();
			zazn.addRange(a);
		} else if (document.selection && a.select) {
			a.select();
		}
	}
}

function zmieniarkaKolorow(rgb) {
	function nrNaHex(n) {
		let heks = n.toString(16);
		return heks.length == 1 ? "0" + heks : heks;
	}
	let kutas = rgb.split(',');
	kutas[0] = Number(kutas[0].replace('rgba(', '').replace('rgb(', ''));
	kutas[1] = Number(kutas[1]);
	kutas[2] = Number(kutas[2].replace(')', ''))
	return '#' + nrNaHex(kutas[0]) + nrNaHex(kutas[1]) + nrNaHex(kutas[2]);
}

function kozyrTextEditor(el, ust, css) {
	let waco = this;
	this.settings = {
		'toolbar' : 'top',
		'items' : [
			'bold', 'italic', 'underline', 'strikethrough', 'group', 'alignLeft', 'alignCenter', 'alignRight', 'justify', 'group', 'orderedList', 'unorderedList', 'indent', 'outdent', 'subscript', 'superscript', 'newLine', 'undo', 'redo', 'clean', 'copy', 'paste', 'cut', 'group', 'background', 'fontColor', 'group', 'removeFormat', 'selectAll', 'horizontalLine', 'save', 'open', 'link', 'image', 'emoticons', 'symbols', 'table', 'print', 'download', 'upload', 'HTMLmode', 'newLine', 'fontName', 'fontSize', 'formatting'
		],
		'texts' : {},
		'infoBox' : 'bottom',
		'infos' : ['chars', 'words', 'search'],
		'initialHTML' : true
	}
	if (el && el.tagName) {
		this.edytor = el;
		while (this.edytor.firstChild) {
    		this.edytor.removeChild(this.edytor.firstChild);
		}
	} else {
		this.edytor = document.createElement('div');
		document.body.appendChild(this.edytor);
	}
	if (typeof ust === 'object') {
		for (let klucz in ust) {
			if (this.settings[klucz]) {
				this.settings[klucz] = ust[klucz];
			}
		}	
	}
	
	this.htmlMode = false;
	
	let repeatsText = this.settings.texts.repeats ? this.settings.texts.repeats : 'repeats';
	
	this.richTextEditor = document.createElement('div');
	this.edytor.appendChild(this.richTextEditor);
	this.richTextEditor.contentEditable = 'true';
	this.richTextEditor.setAttribute('class', 'kozyrRichTextEditor');
	this.richTextEditor.style.position = 'relative';
	if (typeof this.settings.initialHTML == 'string') this.richTextEditor.innerHTML = this.settings.initialHTML;
	
	this.richTextEditor.addEventListener('click', (e) => {
		if (e.target.tagName.toUpperCase() === 'IMG') {
			kozyrImageSettings(e.target);
		}
	});
	
	if (this.settings.toolbar !== 'none') {
		this.toolbar = document.createElement('div');
		this.toolbar.setAttribute('class', 'kozyrToolbar')
		let pasek = document.createElement('div');
		pasek.setAttribute('class', 'kozyrLine');
		let grupa = document.createElement('kozyrToolsGroup');
		pasek.appendChild(grupa);
		this.toolbar.appendChild(pasek);
		let tulbar = this.toolbar;
		for (let o=0; o<this.settings.items.length; o++) {
			let opcja = this.settings.items[o];
			let opc = opcjonizator[opcja];
			if (opc) {
				if (opc.typ !== 'kozyrSelect') {
					let span = document.createElement('span');
					span.setAttribute('class', 'item ' + opc.typ);
					span.setAttribute('action', opc.akcja);
					let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
					svg.setAttribute('viewBox', opc.rozmiar);
					svg.setAttribute('class', 'kozyrSVG');
					let sciezka = document.createElementNS('http://www.w3.org/2000/svg', 'path');
					sciezka.setAttribute('d', opc.kod);
					svg.appendChild(sciezka);
					span.appendChild(svg);
					if (opc.typ === 'kozyrModeChanger') {
						let htmlMode = document.createElement('span');
						htmlMode.appendChild(document.createTextNode('HTML'));
						span.appendChild(htmlMode);
					}
					span.onmousedown = function(e) {
						e.preventDefault();
					}
					
					if (opcja === 'upload') {
						let imput = document.createElement('input');
						imput.type = 'file';
						imput.accept = 'text/plain, text/xml, text/html';
						imput.oninput = function(e) {
							opc.onczendz(waco, this, e);
						}
						imput.setAttribute('class', 'inputHidden');
						grupa.appendChild(imput);
						span.onclick = function() {
							opc.onklik(waco, imput);
						}
					} else if (opc.typ !== 'kozyrColor') {
						span.onclick = function(event) {
							if (opc.akcja === 'createLink') waco.selekcja = zapiszZaznaczenie();
							opc.onklik(waco, this, event);
						}
					} else {
						let kolorProbka = document.createElement('div');
						kolorProbka.setAttribute('class', 'kozyrColorSample');
						span.appendChild(kolorProbka);
						let imput = document.createElement('input');
						imput.type = 'color';
						imput.onchange = function() {
							opc.onczendz(waco, this);
						}
						imput.setAttribute('class', 'inputHidden');
						grupa.appendChild(imput);
						span.onclick = function() {
							opc.onklik(waco, imput);
						}
					}
					
					span.setAttribute('tooltip', this.settings.texts[opcja] ? this.settings.texts[opcja] : opc.tultip);
					
					grupa.appendChild(span);
					if (opc.typ === 'kozyrExpand') {
						opc.dodaj(this, span);
					}
				} else {
					let sp = document.createElement('span');
					sp.setAttribute('class', 'kozyrSelector');
					let selekt = document.createElement('select');
					sp.appendChild(selekt);
					sp.setAttribute('tooltip', this.settings.texts[opcja] ? this.settings.texts[opcja] : opc.tultip);
					
					selekt.setAttribute('action', opc.akcja);
					selekt.setAttribute('class', opc.typ);
					opc.opcje.forEach(function(p, b) {
						let opka = document.createElement('option');
						opka.textContent = p.nazwa;
						opka.value = opc.akcja === 'fontSize' ? b + 1 : p.wartosc;
						opka.style[opc.styluj] = p.wartosc;
						selekt.appendChild(opka);
					});
					if (opc.akcja === 'fontSize') selekt.value = '3';
					grupa.appendChild(sp);
					selekt.onchange = function() {
						opc.onczendz(waco, this.value);
					}
				}
			} else if (opcja === 'newLine') {
				pasek = document.createElement('div');
				pasek.setAttribute('class', 'kozyrLine');
				grupa = document.createElement('kozyrToolsGroup');
				pasek.appendChild(grupa);
				this.toolbar.appendChild(pasek);
			} else if (opcja === 'group') {
				grupa = document.createElement('kozyrToolsGroup');
				pasek.appendChild(grupa);
			}
		}
		let przed = this.settings.toolbar === 'bottom' ? this.richTextEditor.nextSibling : this.richTextEditor;
		this.richTextEditor.parentNode.insertBefore(this.toolbar, przed);
		
		document.addEventListener('selectionchange', () => {
			if (this.richTextEditor.contains(getSelection().anchorNode)) {
				this.activator();
			}
		});
		
		this.richTextEditor.onblur = function() {
			tulbar.querySelectorAll('.item:not(.kozyrModeChanger)').forEach(a => a.classList.remove('active'));
		}
		this.richTextEditor.oninput = function() {
			waco.actualize();
		}
		
		if (this.settings.items.indexOf('HTMLmode') >= 0) {
			this.textArea = document.createElement('textarea');
			this.textArea.setAttribute('class', 'kozyrHTMLeditor');
			this.textArea.style.display = 'none';
			this.textArea.oninput = function() {
				waco.actualize();
			}
			this.richTextEditor.parentNode.insertBefore(this.textArea, this.richTextEditor.nextSibling);
			
		}
		
	}
	
	this.actualize = function() {
		if (this.htmlMode) {
			if (this.chars) this.chars.textContent = this.textArea.value.length;
			if (this.words) {
				let mecz = this.textArea.value.match(/\S+/g);
				this.words.textContent = mecz ? mecz.length : 0;
			}
		} else {
			if (this.chars) this.chars.textContent = this.richTextEditor.textContent.length;
			if (this.words) {
				let mecz = this.richTextEditor.textContent.match(/\S+/g) ;
				this.words.textContent = mecz ? mecz.length : 0;
			}
		}
	}
	
	this.ustawMiejsce = function(gdzie, start, koniec) {
		const fullText = gdzie.value;
		gdzie.value = fullText.substring(0, koniec);
		const scrollHeight = gdzie.scrollHeight
		gdzie.value = fullText;
		gdzie.focus();
		let scrollTop = scrollHeight;
		const textareaHeight = gdzie.clientHeight;
		if (scrollTop > textareaHeight){
			scrollTop -= textareaHeight / 2;
		} else{
			scrollTop = 0;
		}
		gdzie.scrollTop = scrollTop;
		gdzie.setSelectionRange(start, koniec);
	}
	
	this.aktind = 0;
	this.results = [];
	this.currentClass = 'aktyw';
	
	this.instance = new Mark(this.richTextEditor);
	
	this.jumpTo = function() {
		if (this.results.length) {
			let kurent = this.results[this.aktind];
			this.results.forEach(t => t.classList.remove(this.currentClass));
			if (kurent) {
				kurent.classList.add(this.currentClass);
				this.richTextEditor.scrollTop = kurent.offsetTop - (this.richTextEditor.offsetHeight / 2) + kurent.offsetHeight;
			}
		}
	}
	
	this.szukarka = function(f, el, znal) {
		if (el.children.length > 0) {
			for (let c=0; c<el.children.length; c++) {
				if (znal && !el.children[c].classList.contains('znalezisko')) {
					continue;
				} else {
					
				}
				this.szukarka(f, el.children[c]);
			}
		} else {
			el.innerHTML = el.textContent.replace(f, '<span class="znalezisko">' + f + '</span>');
		}
	}
	
	this.find = function(co) {
		if (this.htmlMode) {
			let doZnalezienia = co.toLowerCase();
			let tekst = this.textArea.value.toLowerCase();
			let start = this.textArea.selectionStart === this.textArea.selectionEnd ? this.textArea.selectionStart : this.textArea.selectionStart + 1;
			let indeks = tekst.indexOf(doZnalezienia, start);
			if (indeks > -1) {
				this.ustawMiejsce(this.textArea, indeks, indeks + doZnalezienia.length)
			} else {
				indeks = tekst.indexOf(doZnalezienia);
				if (indeks > -1) {
					this.ustawMiejsce(this.textArea, indeks, indeks + doZnalezienia.length)
				}
			}
						
		} else {
			this.szukarka(co, this.richTextEditor)
		}
	}
	
	this.chars = false;
	this.words = false;
	this.search = false;
	if (this.settings.infoBox !== 'none') {
		this.infoBoks = document.createElement('div');
		this.infoBoks.setAttribute('class', 'kozyrInfoBox');
		if (this.settings.infos.indexOf('chars') >= 0) {
			let charsCounterBlock = document.createElement('div');
			charsCounterBlock.setAttribute('class', 'charsCounterBlock');
			let charsText = document.createElement('span');
			charsText.setAttribute('class', 'charsText');
			charsText.textContent = (this.settings.texts.chars ? this.settings.texts.chars : 'chars') + ':';
			this.chars = document.createElement('span');
			this.chars.setAttribute('class', 'charsCounter');
			this.chars.textContent = '0';
			charsCounterBlock.appendChild(charsText);
			charsCounterBlock.appendChild(this.chars);
			this.infoBoks.appendChild(charsCounterBlock);
		}
		if (this.settings.infos.indexOf('words') >= 0) {
			let wordsCounterBlock = document.createElement('div');
			wordsCounterBlock.setAttribute('class', 'wordsCounterBlock');
			let wordsText = document.createElement('span');
			wordsText.setAttribute('class', 'wordsText');
			wordsText.textContent = (this.settings.texts.words ? this.settings.texts.words : 'words') + ':';
			this.words = document.createElement('span');
			this.words.setAttribute('class', 'wordsCounter');
			this.words.textContent = '0';
			wordsCounterBlock.appendChild(wordsText);
			wordsCounterBlock.appendChild(this.words);
			this.infoBoks.appendChild(wordsCounterBlock);
		}
		this.actualize();
		if (this.settings.infos.indexOf('search') >= 0) {
			this.search = document.createElement('div');
			this.search.setAttribute('class', 'searchBlock');
			
			this.searchBox = document.createElement('input');
			this.searchBox.type = 'text';
			this.searchBox.placeholder = this.settings.texts.search ? this.settings.texts.search : 'Search...';
			this.searchBox.setAttribute('class', 'searchInput');
			this.searchBox.oninput = function() {
				if (waco.htmlMode) {
					waco.powt.textContent = this.value ? waco.textArea.value.toLowerCase().split(this.value.toLowerCase()).length - 1 + ' ' + repeatsText : '';
				} else {
					let searchVal = this.value;
					waco.instance.unmark({
						done: function() {
							waco.instance.mark(searchVal, {
								element: 'span',
								className: 'znalezisko',
								separateWordSearch: false,
								done: function() {
									waco.results = waco.richTextEditor.querySelectorAll('.znalezisko');
									waco.aktind = waco.results.length;
									waco.powt.textContent = searchVal ? waco.results.length + ' ' + repeatsText : '';
								}
							});
						}
					});
				}
			}
			this.search.appendChild(this.searchBox);
			this.searchButton = document.createElement('span');
			this.searchButton.setAttribute('class', 'searchButton item');
			this.searchButton.setAttribute('tooltip', this.settings.texts.search ? this.settings.texts.search : 'Search');
			this.searchButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="kozyrSVG"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>';
			this.searchButton.onclick = function() {
				if (waco.htmlMode) {
					waco.find(waco.searchBox.value);
				} else if (waco.results.length) {
					waco.aktind += 1;
					if (waco.aktind > waco.results.length - 1) {
						waco.aktind = 0;
					}
					waco.jumpTo();
				}
			}
			this.searchBox.onkeyup = function(e) {
				if (e.keyCode == '13' && !waco.htmlMode && waco.results.length) {
					waco.aktind += 1;
					if (waco.aktind > waco.results.length - 1) {
						waco.aktind = 0;
					}
					waco.jumpTo();
				}
			}
			this.search.appendChild(this.searchButton);
			this.powt = document.createElement('span');
			this.search.appendChild(this.powt);
			
			this.infoBoks.appendChild(this.search);
		}
		
		let przed;
		if (this.settings.infoBox === 'top') {
			przed = this.richTextEditor;
		} else if (this.textArea) {
			przed = this.textArea.nextSibling;
		} else {
			przed = this.richTextEditor.nextSibling;
		}
		
		this.richTextEditor.parentNode.insertBefore(this.infoBoks, przed);
	}
	
	kozyrTooltip();
	
	this.przelaczTryb = function(co) {
		if (co.toUpperCase() === 'HTML') {
			this.richTextEditor.querySelectorAll('table.resizable').forEach(t => kozyrTableCleaner(t));
			if (this.search) {
				this.searchBox.value = '';
				this.powt.textContent = '';
			}
			waco.instance.unmark({
				done: function() {
					waco.textArea.value = waco.richTextEditor.innerHTML;
					waco.richTextEditor.style.display = 'none';
					waco.textArea.style.display = '';
					waco.textArea.focus();
					waco.actualize();
				}
			});
		} else {
			this.richTextEditor.innerHTML = this.textArea.value.replace(/\n/g, '<br>');
			this.richTextEditor.querySelectorAll('table:not(.resizable)').forEach(t => kozyrTableResizer(t));
			if (this.search) {
				this.searchBox.value = '';
				this.powt.textContent = '';
			}
			this.textArea.style.display = 'none';
			this.richTextEditor.style.display = '';
			this.richTextEditor.focus();
			this.actualize();
		}
	}
	
	this.activator = function() {
		let standy = this.toolbar.getElementsByClassName('kozyrType1');
		for (let e=0; e<standy.length; e++) {
			if (document.queryCommandState(standy[e].getAttribute('action'))) {
				standy[e].classList.add('active');
			} else {
				standy[e].classList.remove('active');
			}
		}
		let kole = this.toolbar.getElementsByClassName('kozyrColor');
		for (let f=0; f<kole.length; f++) {
			kole[f].getElementsByClassName('kozyrColorSample')[0].style.background = document.queryCommandValue(kole[f].getAttribute('action'));
		}
		this.toolbar.querySelectorAll('.kozyrSelect').forEach(sel => {
			let w = document.queryCommandValue(sel.getAttribute('action'));
			sel.value = w.replace(/\"/g, '');
			if (sel.value === '') sel.value = sel.querySelector('option').getAttribute('value');
		})
	}
	
	this.formujTekst = function(komanda, wartosc) {
		if (!this.htmlMode) {
			if (!(document.activeElement === this.richTextEditor) && !this.richTextEditor.contains(document.activeElement)) {
				this.richTextEditor.focus();
			}
			document.execCommand(komanda, false, wartosc);
			this.richTextEditor.focus();
			this.activator();
		}
	}
	
	this.formujHTML = function(przed, po) {
		if (this.htmlMode) {
			if (!(document.activeElement === this.textArea)) {
				this.textArea.focus();
			}
			let txt = this.textArea.value;
			let start = this.textArea.selectionStart;
			let koniec = this.textArea.selectionEnd;
			let nowyTXT = txt.substring(0, start) + przed + txt.substring(start, koniec) + po + txt.substring(koniec);
			let indeks = koniec + przed.length;
			this.textArea.value = nowyTXT;
			this.textArea.setSelectionRange(indeks, indeks);
			this.textArea.focus();
		}
	}
	
	this.html = function(a) {
		if (this.htmlMode) {
			if (typeof a === 'string') this.textArea.value = a;
			return this.textArea.value.replace(/\n/g, '<br>');
		} else {
			if (typeof a === 'string') this.richTextEditor.innerHTML = a;
			this.richTextEditor.querySelectorAll('table.resizable').forEach(t => kozyrTableCleaner(t));
			this.instance.unmark();
			let zwrot = '';
			zwrot += this.richTextEditor.innerHTML;
			this.richTextEditor.querySelectorAll('table:not(.resizable)').forEach(t => kozyrTableResizer(t));
			this.instance.mark(this.searchBox.value, {
				element: 'span',
				className: 'znalezisko',
				separateWordSearch: false,
				done: function() {
					waco.results = waco.richTextEditor.querySelectorAll('.znalezisko');
					waco.aktind = waco.results.length;
					waco.powt.textContent = waco.searchBox.value ? waco.results.length + ' ' + repeatsText : '';
				}
			});
			return zwrot;
		}		
	}
	
	this.value = this.html;
	this.text = function() {
		return this.richTextEditor.textContent;
	}
	
	this.focus = function() {
		if (this.htmlMode) {
			this.textArea.focus();
		} else {
			this.richTextEditor.focus();
		}
	}
	
	this.blur = function() {
		if (this.htmlMode) {
			this.textArea.blur();
		} else {
			this.richTextEditor.blur();
		}
	}
	
	this.select = function() {
		if (this.htmlMode) {
			this.textArea.select();
		} else {
			this.formujTekst('selectAll', null);
		}
	}
	
	document.execCommand('styleWithCSS', false, true);
	
	let styleTest = document.querySelectorAll("style[id='wacekRTEst']");
	if (styleTest.length < 1) {
		let styluj = document.createElement('style');
		styluj.id = 'wacekRTEst';
		styluj.innerHTML = `
			${this.edytor.id ? '#' + this.edytor.id + '{margin:10px;}' : ''}
			.kozyrRichTextEditor, .kozyrHTMLeditor {display:block;cursor:text;height:300px;background:white;color:black;border:2px solid #292929;overflow:auto;padding:3px 5px;width:100%;box-sizing:border-box;font-size:medium;}
			
			.kozyrRichTextEditor:focus, .kozyrHTMLeditor:focus {outline:none;border:3px solid #292929;padding:2px 4px;}
			
			.kozyrRichTextEditor {font-family:"Times New Roman";}
			.kozyrHTMLeditor {resize:none;}
			
			.kozyrRichTextEditor img {max-width:calc(100% - 4px);cursor:pointer;border:1px solid ${window.getComputedStyle(this.edytor).backgroundColor};}
			.kozyrRichTextEditor img:hover {border:1px solid #292929;}
			.kozyrRichTextEditor table tr {height:18px;}
			.kozyrRichTextEditor table td {min-width:18px;position:relative;}
			.kozyrRichTextEditor table td .tableSettings {position:absolute;top:0;left:0;background:#0000c4;width:6px;height:6px;display:block;opacity:0;cursor:pointer;}
			.kozyrRichTextEditor table td:hover .tableSettings {opacity:1;transition:opacity 1s;}
			.kozyrRichTextEditor table td .tableSettings:hover {background:#1414ff;}
			
			.kozyrToolbar {background:#5c5c5c;padding:3px;border-width:${this.settings.toolbar === 'bottom' ? '0' : '2px'} 2px ${this.settings.infoBox !== 'top' && this.settings.toolbar !== 'bottom' ? '0' : '2px'} 2px;border-style:solid;border-color:#292929;width:100%;box-sizing:border-box;font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;}
			kozyrToolsGroup {display:inline-block;margin:2px;}
			kozyrToolsGroup:not(:first-child) {margin-left:5px;}
			kozyrToolsGroup:not(:last-child) {margin-right:5px;}
			.kozyrSVG {width:14px;height:14px;fill:currentColor;}
			.kozyrColor .kozyrSVG {height:11px;}
			.kozyrColor .kozyrColorSample {height:3px;}
			
			.kozyrToolbar .item, .kozyrInfoBox .item {display:inline-block;vertical-align:top;line-height:0;position:relative;padding:1px 2px 2px 1px;border:2px outset #e0e0e0;margin-right:3px;border-radius:2px;background:#d6d6d6;color:black;cursor:pointer;}
			.kozyrToolbar .item.active, .kozyrInfoBox .item.active {padding:2px 1px 1px 2px;border:2px inset #e0e0e0;}
			.kozyrToolbar .item:not(.active):hover, .kozyrInfoBox .item:not(.active):hover {background:#c2c2c2;border:2px outset #cccccc;}
			.kozyrToolbar .item:not(.active):active, .kozyrInfoBox .item:not(.active):active {padding:2px 1px 1px 2px;border:2px inset #cccccc;}
			.selekt {vertical-align:top;}
			
			.item.kozyrModeChanger {font-size:12px;}
			.item.kozyrModeChanger .kozyrSVG {margin-right:3px;}
			.item.kozyrModeChanger span {display:inline-block;line-height:1;vertical-align:top;margin-top:1px;}
			
			.kozyrToolbar .kozyrSelector {margin-right:5px;}
			.kozyrToolbar .kozyrSelect {font-size:12px;padding:1px 2px;cursor:pointer;border:2px solid #e0e0e0;}
			.kozyrToolbar .kozyrSelect:hover {background:#ffff9d;}
			.kozyrToolbar .kozyrSelect option {background:#cccccc;}
			
			.kozyrInfoBox {background:#5c5c5c;color:white;padding:3px;border-width:${this.settings.toolbar !== 'top' && this.settings.infoBox === 'top' ? '2px' : '0'} 2px ${this.settings.infoBox === 'top' ? '0' : '2px'} 2px;border-style:solid;border-color:#292929;width:100%;box-sizing:border-box;font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;font-size:15px;line-height:1.2;}
			.kozyrInfoBox .charsCounterBlock {display:inline-block;}
			.kozyrInfoBox .charsCounter {display:inline-block;min-width:50px;}
			.kozyrInfoBox .charsText {margin-right:4px;}
			.kozyrInfoBox .wordsCounterBlock {display:inline-block;}
			.kozyrInfoBox .wordsCounter {display:inline-block;min-width:50px;}
			.kozyrInfoBox .wordsText {margin-right:4px;}
			.kozyrInfoBox .searchBlock {display:inline-block;}
			.kozyrInfoBox .searchInput {height:23px;width:150px;border:2px inset gray;margin-top:-1px;outline:none;background:white;box-sizing:border-box;padding:1px 3px;font-size:13px;}
			.kozyrInfoBox .searchInput:focus {border:3px inset gray;}
			.kozyrInfoBox .searchButton {margin-right:8px;}
			
			.inputHidden {width:0;height:0;box-sizing:border-box;padding:0;vertical-align:bottom;border:none;visibility:hidden;}
			
			.imagExpand {display:block;position:absolute;top:calc(100% + 2px);left:-2px;background:#e0e0e0;color:black;width:100px;overflow:hidden;z-index:99999999;}
			.item:not(.active) .imagExpand {max-height:0;transition:max-height 0.6s;}
			.item.active .imagExpand {max-height:60px;transition:max-height 0.6s;border-width:0 1px 1px 1px;border-color:black;border-style:solid;}
			.imagExpandAction {line-height:1;display:block;padding:2px 4px;cursor:pointer;}
			.imagExpandAction:hover {background:#afafaf;}
			
			.emotExpand {display:block;position:absolute;top:calc(100% + 2px);left:-2px;background:#e0e0e0;width:200px;overflow:auto;z-index:99999999;cursor:default;box-sizing:border-box;}
			.item:not(.active) .emotExpand {max-height:0;transition:max-height 0.6s;}
			.item.active .emotExpand {max-height:250px;transition:max-height 0.6s;border-width:0 1px 1px 1px;border-color:black;border-style:solid;}
			.emotExpand span {width:25px;height:25px;display:inline-block;text-align:center;font-size:17px;line-height:normal;vertical-align:middle;cursor:pointer;}
			.emotExpand span:hover {background:#afafaf;}
			.emotExpand span:active {width:21px;height:21px;border:2px inset #afafaf;}
			
			.znalezisko {background:#9d9dff;}
			.znalezisko.aktyw {background:#3b3bff;color:white;}
			
			.kozyrTooltip {background:#333333;color:#e0e0e0;border:1px solid #e0e0e0;padding:2px 6px;border-radius:6px;transition:opacity 0.7s;font-size:14px;font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;z-index:9999999;}
		`;
		if (typeof css == 'string') styluj.innerHTML += css;
		document.head.appendChild(styluj);
	}
	
	this.toolbar.querySelectorAll('.item.kozyrColor').forEach(a => {
		let typ = a.getAttribute('action') === 'foreColor' ? 'color' : 'backgroundColor';
		a.querySelector('.kozyrColorSample').style.background = window.getComputedStyle(this.richTextEditor)[typ];
	});
}
