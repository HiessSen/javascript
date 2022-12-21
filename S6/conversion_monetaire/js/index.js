let convertirGo = document.querySelector('#btn_convert');
let boutonsEntrees = document.querySelectorAll('.btn_entree');
let boutonClear = document.querySelector('#btn_effacer');
let boutonClearLast = document.querySelector('#btn_effacer_last');
// let boutonConvert = document.querySelector('#btn_convert');

convertirGo.addEventListener('click',convertir)

boutonsEntrees.forEach(boutonEntree=>{
    boutonEntree.addEventListener('click',ajouterEntree);
});

boutonClear.addEventListener('click',effacerTout);

boutonClearLast.addEventListener('click',effacerUn);

// boutonConvert.addEventListener('click',convertirExpression);


















// console.log(euroVersDollar(1))
// console.log(euroVersCouronne(1))
// console.log(dollarVersEuro(1))
// console.log(couronneVersEuro(1))

// let btnConvertir = document.querySelector('#btn_convertir');
// btnConvertir.addEventListener('click',convertir)