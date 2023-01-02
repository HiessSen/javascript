function ajouterEntree(event) {
    // let saisie = document.querySelector('#saisie');
    // saisie.value = saisie.value + event.target.value;
    alert('Les gens qui utilisent leurs claviers virtuels sont des fils de putes !')
}
function effacerTout(){
    let saisie = document.querySelector('#saisie');
    saisie.value="";
}
function effacerUn(){
    let saisie = document.querySelector('#saisie');
    saisie.value = saisie.value.substring(0,saisie.value.length - 1);
}
/**
 *  
 * @returns un montant en  euro
 */
function calibreSommeSource(pMontant,pDeviseSource){

    let resultat =0;
    console.log(pDeviseSource);
    switch (pDeviseSource){
        case 'euros':
            resultat = pMontant;
            break;
        case 'dollars':
            resultat = pMontant / 1.06;
            break;
        default:
            resultat = pMontant / 152.30;
    }
    // console.log(sommeTamponEuro)
    return resultat;
}
/**
 * 
 * @returns un montant dans la devise demandée depuis une valeur en euro
 */
function sommeConvertie(pMontant,pDeviseTarget){
    console.log(pDeviseTarget);
    let resultat = 0;
    switch (pDeviseTarget){
        case 'euros':
            resultat = pMontant;
            break;
        case 'dollars':
            resultat = pMontant * 1.06;
            break;
        default:
            resultat = pMontant * 152.30;
    }
    return resultat;
}
function convertir()
{
    let deviseSource = document.querySelector('input[name=deviseSource]:checked').value;
    let saisie = document.querySelector('#saisie');
    let deviseTarget = document.querySelector('input[name=deviseTarget]:checked').value;
    let sommeEnEuro = calibreSommeSource(saisie.value,deviseSource);
    let resultat = sommeConvertie(sommeEnEuro, deviseTarget);
    document.querySelector('#result').innerHTML = saisie.value + " " + deviseSource + " font " + resultat + " " + deviseTarget;
}
// function genererEmoteSociale() {
//     let rang = document.querySelector('input[name=rank]:checked').value;
//  let emote = "";
//     switch (rang) {
//         case 'royal':
//             emote = emoteRoi();
//             break;
//         case 'noble':
//             emote = emoteNoble();
//             break;
//         default:
//             emote = emoteRoture();
//             break;
//     }
//     return emote;
// }


// function evaluerExpression() {
//     let saisie = document.querySelector('#saisie');
//     let result = document.querySelector('#result');
//     // let resultat = eval(saisie.value);
//     result.innerHTML = resultat;
//     saisie.value = resultat;
//     console.log(result);
// }
