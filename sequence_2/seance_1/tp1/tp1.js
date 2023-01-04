let btnRandom = document.querySelector('#boutonRandom');
let btnCouleur = document.querySelector('#boutonCouleur');
let ajouterH1 = document.querySelector('#boutonAjouterH1');
let ajouterP = document.querySelector('#boutonAjouterP');
let toutMasquer = document.querySelector('#boutonMasquerTout');
var nbParagraphe =0;

function couleurRandom(){
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "#0075a2";
    }else{
        document.body.style.backgroundColor = "white";
    }
}

function boutonCouleur(){
    if(btnCouleur.style.backgroundColor == "white"){
        btnCouleur.style.backgroundColor = "black";
        btnCouleur.style.color = "white";
    }else{
        btnCouleur.style.backgroundColor = "white";
        btnCouleur.style.color = "black";
    }
}

function ajouterTitre(){
    let nouveauH1 = document.createElement('h1');
    let titre = prompt('Pense bien à ajouter un H1');
    nouveauH1.innerText = titre;
    let parent = document.querySelector('#main');
    parent.appendChild(nouveauH1);
}

function ajouterParagraphe(){
    let nouveauP = document.createElement('p');
    let paragraphe = prompt('Pense bien à ajouter un paragraphe');
    nouveauP.id="paraNo"+nbParagraphe;
    nouveauP.innerText = paragraphe;

    let boutonMasquer = document.createElement('button');
    boutonMasquer.innerText = 'Masquer / Reveler';
    boutonMasquer.value="pouet"
    boutonMasquer.id="boutonMasquerunique"
    boutonMasquer.addEventListener('click',masquerUnPara)

    let parent = document.querySelector('#main');
    parent.appendChild(nouveauP);
    parent.appendChild(boutonMasquer);
}

function masquerUnPara(event){
    console.log(event.srcElement.value);
    if(document.querySelector('#paragrapheMasquable').style.display=="none"){
        document.querySelector('#paragrapheMasquable').style.display = "block"
    }else{
        document.querySelector('#paragrapheMasquable').style.display = "none"
    }
}

function fonctionToutMasquer(){
    let parent = document.querySelector('#main');
    if(parent.style.display != 'none'){
        parent.style.display = 'none';
    }else{
        parent.style.display = 'block';
    }
}

btnRandom.addEventListener('click',couleurRandom);
btnCouleur.addEventListener('click',boutonCouleur);
ajouterH1.addEventListener('click',ajouterTitre);
ajouterP.addEventListener('click',ajouterParagraphe);
toutMasquer.addEventListener('click',fonctionToutMasquer);