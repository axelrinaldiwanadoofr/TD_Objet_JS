
class Meuble
{
    constructor( largeur=40, hauteur=50, profondeur=20)
    {
        this._largeur = largeur ;
        this._hauteur = hauteur ;
        this._profondeur = profondeur ;
    }

    static hauteurMin = 50 ;
    static hauteurMax = 180 ;
    static largeurMin = 40 ;
    static largeurMax = 200 ;
    static profondeurMin = 20 ;
    static profondeurMax = 60 ;

    setLargeur( valeur )
    {
        if( valeur >= Meuble.largeurMin && valeur <= Meuble.largeurMax ) 
            this._largeur = valeur ;
        else throw "La largeur ne peut etre " + valeur + 
            " et doit etre comprise entre " + Meuble.largeurMin + 
            " et " + Meuble.largeurMax ;
    }
    get largeur()
    {
       return this._largeur ;
    }

    set largeur( valeur )
    {
        this.setLargeur( valeur ) ;
    }


    setHauteur( valeur )
    {
        if( valeur >= Meuble.hauteurMin && valeur <= Meuble.hauteurMax )
            this._hauteur = valeur ;
        else throw "La hauteur ne peut etre " + valeur + 
            " et doit etre comprise entre " + Meuble.hauteurMin + 
            " et " + Meuble.hauteurMax ;
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
        if( valeur >= Meuble.profondeurMin && valeur <= Meuble.profondeurMax ) 
            this._profondeur = valeur ;
        else throw "La profondeur ne peut etre " + valeur + 
            " et doit etre comprise entre " + Meuble.profondeurMin + 
            " et " + Meuble.profondeurMax ;
    }

    get profondeur()
    {
       return this._profondeur ;
    }

    set profondeur( valeur )
    {
        this.setProfondeur( valeur ) ;
    }

}