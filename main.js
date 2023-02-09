// tady je místo pro náš program ->  https://kodim.cz/kurzy/javascript-vyuka/js-1/vstup-vystup-objekty/cv-objekty
// Realitka
const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

document.body.innerHTML += "<p>Dispozice bytu: " + apartment.disposition +"</p>"
document.body.innerHTML += "<p>Najem bytu: " + apartment.price.rent +"</p>"
document.body.innerHTML += "<p>Výměra bytu: " + apartment.area.floorage + apartment.area.units +"</p>"

//let realitka = document.querySelector('.realitka')
//realitka.innerHTML = "Dispozice bytu: " + apartment.disposition + '<br>' + "Najem bytu: " + apartment.price.rent

const city = apartment.city;
const district = apartment.district;
document.body.innerHTML += "<p>Mesto: "+ city +"</p>"
document.body.innerHTML += "<p>Mestska cast: "+ district +"</p>"
apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"

// Knihovna
const kniha = {
    name: 'Moje kniha',
    author: 'Autor',
    pages: 12,
    publisher: 'Albatros',

}

// Očkování
//let vstupJmeno = prompt("Jmeno")
//let vstupVek = Number(prompt('Vek'))

const person = {
    name: vstupJmeno,
    age: vstupVek,
}

let nadpis = document.querySelector('h1')
nadpis.innerText = person.name + ' ' + person.age

// bonus ukol - seznam knízek - předpripravit si a vkladat tam nejaky dalsi knizky
//git hub pages zkusit zprovoznit