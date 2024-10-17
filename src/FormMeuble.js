
class FormMeuble extends Formulaire
{
    constructor( id )
    {
        super( id ) ;
    }

    onError( error )
    {
        alert( "Attention pour un meuble " + error ) ;
    }
}