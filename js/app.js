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

if (eta <= 18) {
  let sconto = prezzoBase * 0.2;
  let prezzoFinale = prezzoBase - sconto;
  alert(prezzoFinale)
} else if (eta >= 65) {
  let sconto = prezzoBase * 0.4;
  let prezzoFinale = prezzoBase - sconto;
  alert(prezzoFinale)
} else {
  sconto = 0;
  let prezzoFinale = prezzoBase - sconto;
  alert(prezzoFinale)
}

//Calcolo Prezzo Finale come Prezzo Base - Sconto e lo fisso a 2 decimali e lo mostro come alert

/* Ho dovuto fare tutto insieme perché altrimenti le variabili restavano definite solo nel blocco */