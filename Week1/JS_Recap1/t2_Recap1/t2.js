'use strict';

let x1 = prompt('Anna x1: ');
let x2 = prompt('Anna x2: ');
let y1 = prompt('Anna y1: ');
let y2 = prompt('Anna y2: ');

const Distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.querySelector('#target1').innerHTML +=
  'Kordinaattien väli on ' + Distance.toFixed(2);
