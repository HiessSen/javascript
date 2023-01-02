let etoile = parseInt(prompt('Veuillez entrer un nombre entre 1 et 10'));
let i;

while(etoile<1 || etoile>10 || isNaN(etoile) == true){
    console.log('La valeur entrée n\'est pas valide');
    etoile = parseInt(prompt('Veuillez entrer un nombre entre 1 et 10'));
}
for(i=1 ; i<=etoile ; i++){
    console.log(i + ' Étoiles ont été saisies : ' + '*'.repeat(i));
}