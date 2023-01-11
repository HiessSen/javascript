class Personne
{
    prenom;
    nom;
constructor(pPrenom="",pNom="")
    {
        this.prenom = pPrenom;
        this.nom = pNom;
    }
    afficher(){
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
}
