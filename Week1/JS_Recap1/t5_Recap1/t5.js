'use strict';

const luku = prompt('Anna kokonaisluku: ');

let summa = 0;
for (let i = 1; i <= luku; i++) {
  summa += i;
}
document.querySelector('#target1').innerHTML = 'Lukujen summa on ' + summa;
