// tady je místo pro náš program

//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'

const address = {
    streetNumber: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11', 
}

let vstupUzivatel = prompt("Zadej správné číslo domu:")
address.number = Number(vstupUzivatel)

//přiřazení k objektu se dela dvojtečkou
// tečková notace říka do jake hloubky jit v ramci objektu

const user1 = {
    fullName: 'Lubomír Větvička',
    login: 'lubos',
    address: {
        streetNumber: 'Pod Kaštany',
        number: 31,
        city: 'Horní Dlouhonosy',
        postalCode: '123 11',
    },
    cartItems: 0,
}

const product = {
	name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč',
}

/*
const name = product.name
const price = product.price
const currency = product.currency
*/

const {name, price, currency} = product
