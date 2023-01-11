class Stagiaire
{
    nom;
    prenom;

    constructor(pPrenom="", pNom="")
    {
        this.prenom = pPrenom[0].charAt(0).toUpperCase() + pPrenom.slice(1);
        this.nom = pNom.toUpperCase();
    }

    salutation()
    {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
}
