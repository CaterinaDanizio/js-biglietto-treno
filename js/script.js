// Chiedere all'utente quanti km vuole percorrere in treno

var km = parseInt(prompt("Inserisci il numero di km che desideri percorrere in treno"))

console.log(km)

// Chiedere all'utente quanti anni ha

var eta = parseInt(prompt("Quanti anni hai?"))

console.log(eta)

// Calcolo del prezzo totale del biglietto per km ('0,21 euro per km')

var prezzoIntero = (km * 0,21);
console.log(prezzoIntero)

var prezzoTreno

// Calcolo dello sconto da applicare

   // se il passeggero è minorenne (20% di sconto)

   var prezzoMinore = (prezzoIntero - (prezzoIntero * 0.20));
   console.log(prezzoMinore)

   // se il passeggero è over 65 anni (40% di sconto)

   var prezzoOver = (prezzoIntero - (prezzoIntero * 0.40));
   console.log(prezzoOver);

// Output: comunicazione dell'importo totale
  if (eta >= 65) { prezzoTreno = prezzoOver
    console.log(prezzoOver);
  }

  if else (eta <= 17) { prezzoTreno = prezzoMinore
    console.log(prezzoMinore);
  }

  else (eta >= 18) { prezzoTreno = prezzoIntero
    console.log(prezzoIntero);
  }

document.getElementById('price').innerHTML = "Il costo del biglietto del treno per la tratta che devi percorrrere è " + prezzoTreno + " euro "
