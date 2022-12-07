// let largeur = prompt('Quelle est la largeur du rectangle ?');
// let longueur = prompt('Quelle est la longueur du rectangle ?');
// let aireRectangle = largeur * longueur
// alert('Le rectangle a une aire de ' + aireRectangle);

let rayon = prompt('Quelle est le rayon du cercle ?');
// parseInt permet de recuperer un nombre dans un string ecrit en caracteres numériques.
// Math.pow permet de calculer les puissances : parseInt(nombre),exposant
// Math.PI permet de recuperer Pi
let aireCercle = Math.PI * Math.pow(parseInt(rayon),2);
alert('Le rayon du cerle est de ' + aireCercle);