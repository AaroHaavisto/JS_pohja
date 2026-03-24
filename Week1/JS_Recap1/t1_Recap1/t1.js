'use strict';

const C = prompt('Anna lämpötila Celsius-asteina:');

const F = (C * 9) / 5 + 32;
const K = parseFloat(C) + 273.15;

document.querySelector('#target1').innerHTML +=
  'Lämpötila on ' + F + ' fahrenheitastetta';

document.querySelector('#target2').innerHTML +=
  'Lämpötila on ' + K + ' kelvinastetta';
