// Exercice 1 :
// 
// let laDate = new Date(2023, 08, 21);
// console.log(getOldDate(laDate));
// function getOldDate(pDate)
// {
//     let nomMois =""
//     if ((pDate.getMonth()==8 && pDate.getDate()>21) || (pDate.getMonth()==9 && pDate.getDate()<22)){
//         nomMois ='nous sommes en Vendemiaire';
//     }else if((pDate.getMonth()==9 && pDate.getDate()>21) || (pDate.getMonth()==10 && pDate.getDate()<22)){
//         nomMois ='nous sommes en Brumaire';
//     }else if((pDate.getMonth()==10 && pDate.getDate()>21) || (pDate.getMonth()==11 && pDate.getDate()<22)){
//         nomMois ='nous sommes en Frimaire';
//     }else if((pDate.getMonth()==11 && pDate.getDate()>21) || (pDate.getMonth()==0 && pDate.getDate()<21)){
//         nomMois ='nous sommes en Nivôse';
//     }else if((pDate.getMonth()==0 && pDate.getDate()>20) || (pDate.getMonth()==1 && pDate.getDate()<20)){
//         nomMois ='nous sommes en Pluviôse';
//     }else if((pDate.getMonth()==1 && pDate.getDate()>19) || (pDate.getMonth()==2 && pDate.getDate()<22)){
//         nomMois ='nous sommes en Ventôse';
//     }else if((pDate.getMonth()==2 && pDate.getDate()>21) || (pDate.getMonth()==3 && pDate.getDate()<20)){
//         nomMois ='nous sommes en Germinal';
//     }else if((pDate.getMonth()==3 && pDate.getDate()>19) || (pDate.getMonth()==4 && pDate.getDate()<20)){
//         nomMois ='nous sommes en Floréal';
//     }else if((pDate.getMonth()==4 && pDate.getDate()>19) || (pDate.getMonth()==5 && pDate.getDate()<19)){
//         nomMois ='nous sommes en Prairial';
//     }else if((pDate.getMonth()==5 && pDate.getDate()>20) || (pDate.getMonth()==6 && pDate.getDate()<19)){
//         nomMois ='nous sommes en Messidor';
//     }else if((pDate.getMonth()==6 && pDate.getDate()>20) || (pDate.getMonth()==7 && pDate.getDate()<18)){
//         nomMois ='nous sommes en Thermidor';
//     }else if((pDate.getMonth()==7 && pDate.getDate()>19) || (pDate.getMonth()==8 && pDate.getDate()<18)){
//         nomMois ='nous sommes en Fructidor';
//     }else{
//         nomMois ='nous sommes dans les jours supplémentaires (pire idée)';
//     }
//      return nomMois;
// }


// Exercice 2 :
// Correction : 
// let birth = new Date(1756,0,27)
// let death = new Date(1791,11,5)
// let age = death-birth;
// let ageAnnee = death.getFullYear()-birth.getFullYear()
// console.log(age/(1000*60*60*24*365));
// console.log(ageAnnee);

let birth = new Date(1756, 00, 27);
let death = new Date (1791, 11, 05);
let ageEnAnnee = death.getFullYear() - birth.getFullYear();
let ageAns = death.getFullYear() - birth.getFullYear();
let ageMois = death.getMonth() - birth.getMonth();
let ageJours = birth.getDate() - death.getDate();
ageAns = Math.round(ageAns);
ageMois = Math.round(ageMois);
ageJours = Math.round(ageJours);

// let ageJour = new Date - birth * (1000/60/60/24);
// ageJour = Math.round(ageJour);
// let ageMois = new Date - birth * (1000/60/60/24/30);
// ageMois = Math.round(ageMois);

console.log('Mozart est mort à ' + ageEnAnnee + ' ans.');
console.log('Mozart est aujourd\'hui agé de ' + ageAns + ' ans, ' + ageMois + ' mois et ' + ageJours + ' jours.');