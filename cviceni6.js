// tady je místo pro náš program - https://kodim.cz/kurzy/javascript-vyuka/js-1/knihovny-vlastni-funkce/knihovny

let email = prompt('Jaký je tvůj email?')

let validaceEmail = document.querySelector('.msg')
if (validator.isEmail(email) === 'true') {
	validaceEmail.innerHTML = 'E-mail v pořádku'
} else {
	validaceEmail.innerHTML = 'Neplatný e-mail'
}
