// Créer un tableau contenant le nom des douze mois de l’année en Français.
// Créer un deuxième tableau contenant le nom des mêmes mois en anglais.
// Créez un troisième tableau contenant cela en espagnol.
// Créez une page HTML et affichez les douze mois de l’année dans les trois langues.
// Chaque mois est sur sa propre ligne, les trois traductions sur la même ligne.

tableaux.forEach(tableau => {
    console.log(employe)
});


function fonctiontab(texte){
    let reponse = document.getElementById("calendrier");
reponse.innerHTML="Message";
    let i;

    for(i=0 ; i<texte.length ; i++){
            console.log(texte[i]);
            reponse = texte[i];
    }
    return reponse;
}

tableauFr = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
tableauEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
tableauEs = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Juilio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
console.log(fonctiontab(tableauFr));
console.log(fonctiontab(tableauEn));
console.log(fonctiontab(tableauEs));