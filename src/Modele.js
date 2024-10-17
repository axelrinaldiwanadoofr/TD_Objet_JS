
class Modele
{
    constructor()
    {

    }

    setProperty( property, valeur )
    {
        if( valeur != this["_" + property] )
        {
            let myEvent = new CustomEvent("ModeleChanged", {
                detail: {
                    modele: this,
                    propriete: property,
                    oldValue: this["_" + property],
                    newValue: valeur
                },
                bubbles: true,
                cancelable: true,
                composed: false,
              });

              this["_" + property] = valeur ;

            document.body.dispatchEvent( myEvent ) ;
        }        
    }
}
