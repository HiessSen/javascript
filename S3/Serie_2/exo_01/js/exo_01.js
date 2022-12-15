//saisir le nombre d'étoiles
let nombreSaisi = parseInt(prompt('Combien d\'étoiles?'));
// vérifier s'il est compris entre 1 et 10 inclus
if ((!isNaN(nombreSaisi))&&(estDansIntervalle(nombreSaisi,1,10)))
{
// si le nombre d etoile est ok: afficher les étoiles
    console.log(retournerTexteEtoiles(nombreSaisi));
}
else
{
// sinon afficher un message d'erreur
console.log("Saisie incorrecte");
}
