/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 8;
const num2 = 10;

console.log("ESERCIZIO 1");
if (num1 === num2) {
  console.log("I numeri sono uguali!", num1);
} else if (num1 > num2) {
  console.log("Il numero più grande è", num1);
} else {
  console.log("Il numero più grande è", num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let inputNumber = 10;
const refNumber = 5;
console.log("ESERCIZIO 2");
if (inputNumber !== refNumber) {
  console.log("Not Equal!");
} else {
  console.log("Equal!");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 3");

if (inputNumber % 5 === 0) {
  console.log("Divisibile per 5");
} else {
  console.log("Il numero non è divisibile perfettamente per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let e4Number1 = 3;
let e4Number2 = 5;
console.log("ESERCIZIO 4");

if (e4Number1 === 8 || e4Number2 === 8) {
  console.log("C'è il numero 8 tra i valori.");
} else if (e4Number1 + e4Number2 === 8) {
  console.log("La somma dei valori è uguale a 8.");
} else {
  console.log("Il numero 8 non compare tra i valori o i risultati della somma.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
console.log("ESERCIZIO 5");
console.log("Il totale nel carrello è di €", totalShoppingCart);

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita per ordini superiori a € 50.");
} else {
  totalShoppingCart += 10;
  console.log("L'ordine minimo per la spedizione gratuita è di € 50. Dovrai pagare € 10 euro aggiuntivi per la spedizione");
}

console.log("Dovrai pagare €", totalShoppingCart);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("ESERCIZIO 6");
totalShoppingCart = 60;
let coupon = (totalShoppingCart * 20) / 100;
totalShoppingCart -= coupon;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita per ordini superiori a € 50.");
} else {
  totalShoppingCart += 10;
  console.log("L'ordine minimo per la spedizione gratuita è di € 50. Dovrai pagare € 10 euro aggiuntivi per la spedizione");
}

console.log("Dovrai pagare €", totalShoppingCart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("ESERCIZIO 7");

let n1 = 1;
let n2 = 20;
let n3 = 5;

let first = null;
let second = null;
let third = null;

if (n1 > n2 && n1 > n3 && n2 > n3) {
  first = n1;
  second = n2;
  third = n3;
} else if (n1 > n2 && n1 > n3 && n3 > n2) {
  first = n1;
  second = n3;
  third = n2;
} else if (n2 > n1 && n2 > n3 && n1 > n3) {
  first = n2;
  second = n1;
  third = n3;
} else if (n2 > n1 && n2 > n3 && n3 > n1) {
  first = n2;
  second = n3;
  third = n1;
} else if (n3 > n1 && n3 > n2 && n1 > n2) {
  first = n3;
  second = n1;
  third = n2;
} else {
  first = n3;
  second = n2;
  third = n1;
}

console.log("L'ordine dei numeri in ordine decrescente è:", first, second, third);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("ESERCIZIO 8");
let typeNumber = 42;

if (typeof typeNumber === "number") {
  console.log("Il valore fornito è un numero.");
} else {
  console.log("Il valore fornito non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9");
if (typeNumber % 2 === 0) {
  console.log("Il numero fornito è pari.");
} else {
  console.log("Il numero fornito è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log("ESERCIZIO 10");
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log("ESERCIZIO 11");
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.table(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log("ESERCIZIO 12");
delete me.lastName;
console.table(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("ESERCIZIO 13");
delete me.skills.pop();
console.table(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log("ESERCIZIO 14");
let daveArray = [];

daveArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(daveArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("ESERCIZIO 15");
daveArray.pop();
daveArray.push(100);
console.log(daveArray);
