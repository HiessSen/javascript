// exo 1
// let dateExo1 = new Date(2012, 20, 1, 3, 12, 0, 0);
// console.log(dateExo1);


// exo 2
// function getWeekDay(pDate) {
//     let resultat = "";
//     console.log(pDate.getDay());
//     switch (pDate.getDay()) {
//         case 0:resultat = "SU";
//             break;
//         case 1:resultat = "MO";
//             break;
//         case 2:resultat = "TU";
//             break;
//         case 3:resultat = "WE";
//             break;
//         case 4:resultat = "TH";
//             break;
//         case 5:resultat = "FR";
//             break;
//         case 6:resultat = "SA";
//             break;
//     }
//     return resultat
// }

// let date = new Date();
// console.log(getWeekDay(date));


// exo 3
// function getLocalDay(pDate){
//     let resultat = 0;
//     if(pDate.getDay()!=0){
//         resultat = pDate.getDay();
//     }else{
//         resultat = 7;
//         return resultat;
//     }
// }
// let date = new Date();
// console.log(date);
// console.log(getLocalDay(date));


// exo 4
function getDateAgo(pDate,pNombreJours){
    let resultat = pDate-(24*60*60*100)-pNombreJours;
    return new Date(resultat);
}

let date = new Date();
console.log(getDateAgo(date,1));
console.log(getDateAgo(date,2));
console.log(getDateAgo(date,365));
console.log(getDateAgo(date,1));


// exo 5
// function getLastDayOfMonth(pAnnee, pIndiceMois){
//     //pIndiceMOIS va de 0 a 11
//     let mois = pIndiceMois+1;
//     let annee = pAnnee;
//     if(mois>11){
//         mois = 0;
//         annee++;
//     }
//     let date = new Date(annee,mois,1);
//     let dernierJour = getDateAgo(date,1);
//     return dernierJour.getDate();
// }
// function getDateAgo(pDate,pNombreJours)
// {
//     // on enleve le nombre de jours converti en milli seconde
//     let resultat = pDate-(24*60*60*1000)*pNombreJours;
//     // resultat contient la date cherchée sous forme de 
//     // milli secondes
// // console.log(pDate.getTime());
// // console.log(resultat);
//     // a partir des milli secondes depuis 1/1/1970 on crée la date
//     return new Date(resultat);
// }
