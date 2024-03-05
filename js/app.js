/* console.log('ciao mondo') */

//Richiedo e salvo costante Età

const eta = parseInt(prompt('Inserire età'))
console.log('Età = ' + eta)

//Richiedo e salvo costante Kilometri

const kilometraggio = parseFloat(prompt('Inserire kilometraggio'))
console.log('Kilometraggio = ' + kilometraggio)

//Calcolo Prezzo Base Biglietto facendo Kilometri x 0.21

let prezzo = kilometraggio * 0.21;
console.log('Prezzo base = ' + prezzo)

//Calcolo Sconto per Minorenne o Oltre i 65 anni, altrimenti lo fisso per 0%

if (eta <= 18) {
  let sconto = prezzo * 0.2;
  console.log('Sconto = ' + sconto)
  prezzo = prezzo - sconto;
} else if (eta >= 65) {
  let sconto = prezzo * 0.4;
  console.log('Sconto = ' + sconto)
  prezzo = prezzo - sconto;
} else {
}

console.log('Prezzo finale = ' + prezzo)