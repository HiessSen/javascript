class Vehicule
{
    marque;
    modele;
    nombrePlaces;
    constructor(pMarque="",pModele="",pNombrePlaces="")
        {
            this.marque = pMarque;
            this.modele = pModele;
            this.nombrePlaces = pNombrePlaces;
        }
    afficher(){
        return `Je roule en ${this.marque} ${this.modele} ${this.nombrePlaces}`;
    }
}
