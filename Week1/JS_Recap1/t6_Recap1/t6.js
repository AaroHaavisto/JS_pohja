//Kirjoita JavaScript-koodi, joka kehottaa käyttäjää syöttämään positiivisen kokonaisluvun prompt()-funktion avulla. Tallenna käyttäjän syöte muuttujaan.
// Muunna käyttäjän syöte merkkijonosta numeroksi.
// Käytä sisäkkäisiä for-silmukoita kertotaulun luomiseen.
// Ulompi silmukka iteroi luvusta 1 syötettyyn lukuun asti, edustaen taulukon rivejä.
// Myös sisempi silmukka iteroi luvusta 1 syötettyyn lukuun asti, edustaen taulukon sarakkeita.
// Laske sisäkkäisten silmukoiden sisällä nykyisten rivi- ja sarakearvojen tulo.
// Näytä jokainen tulo muotoillussa muodossa luodaksesi kertotaulun HTML-dokumenttiin.
'use strict';

const luku = prompt('Anna kokonaisluku: ');

const lukuNumero = parseInt(luku);

for (let i = 1; i <= lukuNumero; i++) {
  let rivi = '';
  for (let j = 1; j <= lukuNumero; j++) {
    const tulo = i * j;
    rivi += tulo + '\t';
  }
  document.querySelector('#target1').innerHTML += rivi + '<br>';
}
