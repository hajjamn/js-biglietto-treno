/* console.log('ciao mondo') */

//Richiedo e salvo costante Età

const eta = parseInt(prompt('Inserire età'))
console.log(eta)

//Richiedo e salvo costante Kilometri

const kilometraggio = parseFloat(prompt('Inserire kilometraggio'))
console.log(kilometraggio)

//Calcolo Prezzo Base Biglietto facendo Kilometri x 0.21

const prezzoBase = kilometraggio * 0.21;
console.log(prezzoBase)

//Calcolo Sconto per Minorenne o Oltre i 65 anni, altrimenti lo fisso per 0%

//Calcolo Prezzo Finale come Prezzo Base - Sconto e lo fisso a 2 decimali e lo mostro come alert