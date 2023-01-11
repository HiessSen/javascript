let stagiaire1= new Stagiaire("ilan","senouci");
let stagiaire2 = new Stagiaire("james","bernard");
let stagiaire3 = new Stagiaire("antoine","fernandes");
let stagiaire4 = new Stagiaire("berndon","devaux");
let anotherStagiaire = new Stagiaire("Natalie","robin");
let maGrosseCaillasse = new Stagiaire("Laurent","jojo");
let stagiaires = [stagiaire1,stagiaire2,stagiaire3,stagiaire4,anotherStagiaire,maGrosseCaillasse];
let classe1 = new Classe("DWWM Vierzon 2022/2023",new Date(2022,10,01),new Date(2023-06-01));
let classe2 = new Classe("DWWM Vierzon 2023/2024",new Date(2023-06-01),new Date(2024-02-01));

classe1.ajouterStagiaire(stagiaire1);
classe1.ajouterStagiaire(stagiaire2);
classe1.ajouterStagiaire(stagiaire3);
classe2.ajouterStagiaire(stagiaire4);
classe2.ajouterStagiaire(anotherStagiaire);
classe2.ajouterStagiaire(maGrosseCaillasse);

var stage;
let boutonCreerStage = document.querySelector('#boutonCreer');
boutonCreerStage.addEventListener('click',creerStage);
let boutonAfficherStage = document.querySelector('#boutonAfficher');
boutonAfficherStage.addEventListener('click',afficherStage);
function creerStage(pEvent){
// récupère les valeurs des inputs et crée un stage, stocké dans la variable stage
    pEvent.preventDefault();
let inputIntitule = '';
let inputDateDebut = '';
let inputDateFin = '';
inputIntitule = document.querySelector('#name').value;
inputDateDebut = document.querySelector('#dateDebut').value;
inputDateFin = document.querySelector('#dateFin').value;
// console.log(inputIntitule,inputDateDebut,inputDateFin);
stage = new Classe(inputIntitule,new Date(inputDateDebut).toLocaleDateString(),new Date(inputDateFin).toLocaleDateString())
}
function afficherStage(pEvent){
    // affiche le contenu de la variable stage
pEvent.preventDefault();    
console.log(stage);
document.querySelector('#innerLol2').innerHTML = stage.afficher();
}

// console.log(stagiaires[3].salutation());
// console.log(stagiaires);
// console.log(classe1)
// console.log(classe2)
// console.log(JSON.stringify(classe1));

// function retourner(pEvent){
//     pEvent.preventDefault();
//     document.querySelector('#innerLol').innerHTML = pEvent;
//     console.log(pEvent);
// }