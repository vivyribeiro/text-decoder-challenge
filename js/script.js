function encryptText(text) {
	if (text.includes('e')) {
		text = text.replaceAll('e', 'enter')
	}

	if (text.includes('i')) {
		text = text.replaceAll('i', 'imes')
	}

	if (text.includes('a')) {
		text = text.replaceAll('a', 'ai')
	}

	if (text.includes('o')) {
		text = text.replaceAll('o', 'ober')
	}

	if (text.includes('u')) {
		text = text.replaceAll('u', 'ufat')
	}

	return text
}

function decryptText(text) {
	if (text.includes('enter')) {
		text = text.replaceAll('enter', 'e')
	}

	if (text.includes('imes')) {
		text = text.replaceAll('imes', 'i')
	}

	if (text.includes('ai')) {
		text = text.replaceAll('ai', 'a')
	}

	if (text.includes('ober')) {
		text = text.replaceAll('ober', 'o')
	}

	if (text.includes('ufat')) {
		text = text.replaceAll('ufat', 'u')
	}

	return text
}

let textInput = document.getElementById('text-input')
let asideContent = document.getElementById('aside-content')
let paragraph = asideContent.querySelector('p')
let btnCopy = asideContent.querySelector('button')

function verifyEmptyText() {
	let form = textInput.parentElement

	if (textInput.value == '') {
		form.setAttribute('style', 'border: 1px solid red;')

		setTimeout(() => {
			form.setAttribute('style', 'border: none;')
		}, 3000)

		return false
	}

	return true
}

function normalizeText(value) {
	// let form = textInput.parentElement

	// if (value == '') {
	// 	form.setAttribute('style', 'border: 1px solid red;')

	// 	setTimeout(() => {
	// 		form.setAttribute('style', 'border: none;')
	// 	}, 3000);

	// 	return false
	// }

	return value
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
}

function showText(text) {
	let emptyContent = asideContent.querySelector('div')

	paragraph.setAttribute('style', 'display: flex')
	paragraph.innerText = text

	btnCopy.setAttribute('style', 'display: block')

	emptyContent.setAttribute('style', 'display: none')
}

function textEncoder() {
	let isNotEmpty = verifyEmptyText()

	if (isNotEmpty) {
		let textToEncrypt = normalizeText(textInput.value)

		let encryptedText = encryptText(textToEncrypt)

		showText(encryptedText)
	}
}

function textDecoder() {
	let isNotEmpty = verifyEmptyText()

	if (isNotEmpty) {
		let textToDecrypt = normalizeText(textInput.value)

		let decryptedText = decryptText(textToDecrypt)

		showText(decryptedText)
	}
}

function copyTextToClipboard() {
	navigator.clipboard.writeText(paragraph.innerText)
	btnCopy.innerText = 'Copiado!'

	setTimeout(() => {
		btnCopy.innerText = 'Copiar'
	}, 3000)
}
