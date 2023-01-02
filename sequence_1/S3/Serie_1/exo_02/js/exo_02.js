let etoile = parseInt(prompt('Veuillez entrer un nombre entre 1 et 10'));
let i;

while(etoile<1 || etoile>10 || isNaN(etoile) === true){
    console.log('Vous n\'avez pas entré une valeur correcte');
    etoile = parseInt(prompt('Veuillez entrer un nombre entre 1 et 10'));
}
for(i=0 ; i<1 ; i++){
    console.log(etoile + ' Étoiles ont été saisies : ' + '*'.repeat(etoile));
}