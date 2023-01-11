class Cercle
{
    rayon;
    constructor(pRayon="")
        {
            this.rayon = Math.round(pRayon);
        }
    calculerSurface(){
        return `Ma surface est de ${Math.round(this.rayon*this.rayon*Math.PI)} cm²`;
    }
    calculerPerimetre(){
        return `Mon rayon est de ${Math.round(this.rayon*Math.PI)} cm`;
    }
}
