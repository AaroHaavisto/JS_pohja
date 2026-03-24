'use strict';

let sivu1 = prompt('Anna kolmion sivu 1: ');
let sivu2 = prompt('Anna kolmion sivu 2: ');
let sivu3 = prompt('Anna kolmion sivu 3: ');

if (sivu1 === sivu2 && sivu2 === sivu3) {
  document.querySelector('#target1').innerHTML = 'Kolmio on tasasivuinen';
} else if (sivu1 === sivu2 || sivu1 === sivu3 || sivu2 === sivu3) {
  document.querySelector('#target2').innerHTML = 'Kolmio on tasakylkinen';
} else {
  document.querySelector('#target3').innerHTML = 'Kolmio on skaleeninen';
}
