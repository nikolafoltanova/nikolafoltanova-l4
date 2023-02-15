// tady je místo pro náš program - https://kodim.cz/kurzy/javascript-vyuka/js-1/retezce-podminky/cv-retezce
// ukol 1
const title = 'Harry Potter'
console.log("Počet znaků: " + title.length)
console.log("Velký název: " + title.toUpperCase())
console.log("Prvních 5 písmen: " + title.slice(0, 5))
console.log("Posledních 5 písmen: " + title.slice(title.length - 5, title.length))

// ukol 2
const email = prompt("Uveď svůj email")
document.body.innerHTML += email
let atIndex = email.indexOf('@')
console.log(email.slice(0, atIndex))
console.log(email.slice(atIndex + 1, email.length))
const parsedEmail = {
	userName: email.slice(0, atIndex),
	domain: email.slice(atIndex + 1, email.length)
}
document.body.innerHTML += '<p>Uživatel: ' + parsedEmail.userName + '</p>'
document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>'

// ukol 3
const street = prompt('Zadej ulici:')
const houseNumber = prompt('Zadej číslo domu:')
const city = prompt('Zadej město:')
const zipCode = prompt('Zadej psč:')
document.body.innerHTML +=
'<address>' +
	'<p>'+ street +' '+ houseNumber + '</p>'+
	'<p>'+ zipCode + ' '+ city + '</p>'+
'</address>'

// knihovna
const book1 = {
    name: 'Harry Potter',
    author: {
		firstname: 'Joanne',
		surname: 'Rowlingová'
	},
    pages: 350,
    publisher: 'Bloomsbury',
	year: 1997
}
const book2 = {
    name: 'The Witcher',
    author: {
		firstname: 'Andrzej',
		surname: 'Sapkowský'
	},
    pages: 400,
    publisher: 'Leonardo',
	year: 1993
}
const library = [];
library.push(book1);
library.push(book2);
console.log(library);