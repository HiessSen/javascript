class Rectangle
{
    longueur;
    largeur;
    constructor(pLongueur="",pLargeur="")
        {
            this.longueur = Math.round(pLongueur);
            this.largeur = Math.round(pLargeur);
        }
    afficher(){
        return `Ma longueur est de ${this.longueur} cm, ma largeur de ${this.largeur} cm. Mon périmètre est de ${this.longueur+this.largeur*2} cm et ma surface est de ${this.longueur*this.largeur} cm²`;
    }
}
