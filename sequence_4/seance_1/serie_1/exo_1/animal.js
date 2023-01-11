class Animal
{
    nom;
    espece;
    constructor(pNom="",pEspece="")
        {
            this.nom = pNom;
            this.espece = pEspece;
        }
    afficher(){
        return `J'ai un ${this.espece} qui s'appelle ${this.nom}`;
    }
}

