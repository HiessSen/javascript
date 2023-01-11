class Classe
{
    intitule;
    listeStagiaires = new Array();
    dateDebut;
    dateFin;

    constructor(pIntitule="",pDateDebut="",pDateFin=""){
        this.intitule = pIntitule;
        this.dateDebut = pDateDebut;
        this.dateFin = pDateFin;
    }
    ajouterStagiaire(pStagiaire){
        this.listeStagiaires.push(pStagiaire)
    }
    afficher()
    {
        return `la formation ${this.intitule} commence le ${this.dateDebut} et se termine le ${this.dateFin}`
    }
}