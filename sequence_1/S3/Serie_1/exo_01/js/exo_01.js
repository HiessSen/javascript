let etoileIn = prompt('Veuillez entrer un nombre entre 1 et 10');
let etoileOut = "*";
if(etoileIn<1 || etoileIn>10){
    console.log(etoileIn + ' : Le nombre d\'étoile n\'est pas correct');
}else if(isNaN(etoileIn)){
    console.log('Erreur : Veuillez entrer un nombre compris entre 1 et 10.');
}else{
    for(i=1 ; i< etoileIn ; i++){
        etoileOut = etoileOut + '*';
    }
    console.log('Afficher ' + i + ' : ' + etoileOut);
}