let btnRandom = document.querySelector('#boutonRandom');
let btnCouleur = document.querySelector('#boutonCouleur');
let btnAjouterH1 = document.querySelector('#boutonAjouterH1');
let ilFautAjouterH1 = document.createElement("h1");

function couleurRandom(){
    document.body.style.backgroundColor = "#0075a2";
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

function ajouterH1(){
    ilFautAjouterH1.innerHTML = 'TITRE';
}

btnRandom.addEventListener('click',couleurRandom);
btnCouleur.addEventListener('click',boutonCouleur);
btnAjouterH1.addEventListener('click',ajouterH1)