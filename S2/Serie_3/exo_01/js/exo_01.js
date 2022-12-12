let etoile = parseInt(prompt('Veuillez entrer un nombre entre 1 et 10'));
let i = etoile;

if(isNaN(etoile) == true){
    console.log('Vous n\'avez pas saisi un nombre');
}
for(i=0 ; i<=etoile ; i++){
    if(etoile>0 && etoile<11){
        console.log(etoile + ' Étoiles ont été saisies : ' + '*'.repeat(etoile));
    }else if(etoile<1 || etoile>10){
        console.log('Le nombre d\'étoile n\'est pas valide');
    }
}