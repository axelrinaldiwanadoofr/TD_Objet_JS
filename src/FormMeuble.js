
class FormMeuble
{
    constructor()
    {}

    updateForm( meuble )
    {
        for( let membre in meuble )
        {
            let propriete = membre.substring( 1 ) ;
            document.getElementById( propriete ).value = meuble[propriete] ;
         }
        
        /*
        let inputLargeur = document.getElementById( "largeur" ) ;
        inputLargeur.value = meuble.largeur ;

        document.getElementById( "hauteur" ).value = meuble.hauteur ;
        document.getElementById( "profondeur" ).value = meuble.profondeur ;
        */
    }
}