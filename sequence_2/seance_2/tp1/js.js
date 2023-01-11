let ouvrir = document.querySelector('#open');
let tailleBy = document.querySelector('#resizeBy');
let tailleTo = document.querySelector('#resizeTo');
let fermer = document.querySelector('#close');

ouvrir.addEventListener('click', boutonOpen);
tailleBy.addEventListener('click',boutonResizeBy);
tailleTo.addEventListener('click',boutonResizeTo);
fermer.addEventListener('click', boutonClose);
