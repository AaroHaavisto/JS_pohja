'use strict';

const arvosana = prompt('Anna kurssin arvosana: ');

if (arvosana <= 39) {
  document.querySelector('#target1').innerHTML = 'Kurssin arvosana on 0';
}
if (arvosana >= 40 && arvosana <= 51) {
  document.querySelector('#target2').innerHTML = 'Kurssin arvosana on 1';
}
if (arvosana >= 52 && arvosana <= 63) {
  document.querySelector('#target3').innerHTML = 'Kurssin arvosana on 2';
}
if (arvosana >= 64 && arvosana <= 75) {
  document.querySelector('#target4').innerHTML = 'Kurssin arvosana on 3';
}
if (arvosana >= 76 && arvosana <= 87) {
  document.querySelector('#target5').innerHTML = 'Kurssin arvosana on 4';
}
if (arvosana >= 88 && arvosana <= 100) {
  document.querySelector('#target6').innerHTML = 'Kurssin arvosana on 5';
}
if (arvosana > 100) {
  document.querySelector('#target7').innerHTML = 'Mahdotonta!';
}
