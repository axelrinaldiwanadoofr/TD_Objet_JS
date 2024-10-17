
class FormMeuble
{
    constructor( id )
    {
        this.id = id ;
    }

    updateForm( meuble )
    {
        let div = document.getElementById( this.id ) ;
        let inputs = div.getElementsByClassName( "Input") ;

        for( let i=0 ; i<inputs.length ; i++)
        {
            let input = inputs[i] ;
            if( meuble[input.name] != undefined )
                input.value = meuble[input.name] ;
            else
                input.value = "" ;
        }
    }
}