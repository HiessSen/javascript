// let personne1 = new Personne();
// personne1.prenom = prompt("Quel est votre prenom?");
// personne1.nom = prompt("Quel est votre nom ?");

// let animal1 = new Animal();
// animal1.prenom = prompt("Quel est cet animal ?");
// animal1.nom = prompt("Quel est son nom ?");

// let vehicule1 = new Vehicule();
// vehicule1.marque = prompt("C'est quoi la marque de votre voiture ?");
// vehicule1.modele = prompt("C'est quel modèle ?");
// vehicule1.nombrePlaces = prompt("C'est une combien de place ?");


// let maison1 = new Maison();
// maison1.numeroRue = prompt("Numero de rue");
// maison1.typeVoie = prompt("Type de voie");
// maison1.nomVoie maison1.nomVoie= prompt("nom de voie");
// maison1.codePostal = prompt("Code postal");
// maison1.ville = prompt("Ville");

// formateur.afficher()
// maison1.numeroRue.afficher()
// maison1.typeVoie.afficher()
// maison1.nomVoie.afficher()
// maison1.codePostal.afficher()
// maison1.ville.afficher()

let formateur = new Personne('BRU','Thierry');
let animalFormateur = new Animal ('Arwen','chat');
let vehiculeFormateur = new Vehicule('ninebot','NavBOT G30MAX','1');
let domicileFormateur = new Maison(1,'rue','du paradis','18999','Las Angelos');

    
    
console.log(formateur.afficher(), animalFormateur.afficher(), vehiculeFormateur.afficher(), domicileFormateur.afficher());