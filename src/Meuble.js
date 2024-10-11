
class Meuble
{
    constructor( largeur=40, hauteur=50, profondeur=20)
    {
        this.largeur = largeur ;
        this._hauteur = hauteur ;
        this.profondeur = profondeur ;
    }

    static hauteurMin = 50 ;
    static hauteurMax = 180 ;

    setLargeur( valeur )
    {
        if( valeur >= 40 && valeur <= 200 ) this.largeur = valeur ;
    }

    setHauteur( valeur )
    {
        if( valeur >= Meuble.hauteurMin && valeur <= Meuble.hauteurMax ) this._hauteur = valeur ;
        else throw "La hauteur ne peut etre " + valeur + " et doit etre comprise entre 50 et 180" ;
        //else console.error( "La hauteur ne peut etre " + valeur + " et doit etre comprise entre 50 et 180" ) ;
    }

    getHauteur()
    {
        return this._hauteur ;
    }

    get hauteur()
    {
       return this._hauteur ;
    }

    set hauteur( valeur )
    {
        this.setHauteur( valeur ) ;
    }

    setProfondeur( valeur )
    {
        if( valeur >= 20 && valeur <= 60 ) this.profondeur = valeur ;
    }
}