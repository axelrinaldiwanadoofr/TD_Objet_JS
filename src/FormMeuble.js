
class FormMeuble
{
    constructor()
    {}

    updateForm( meuble )
    {
        let inputLargeur = document.getElementById( "largeur" ) ;
        inputLargeur.value = meuble.largeur ;

        document.getElementById( "hauteur" ).value = meuble.hauteur ;
        document.getElementById( "profondeur" ).value = meuble.profondeur ;
    }
}