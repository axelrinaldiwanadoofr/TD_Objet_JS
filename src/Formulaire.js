
class Formulaire extends Vue
{
    constructor( id )
    {
        super( id ) ;

        // Cree les écouteurs de click sur les boutons OK et Cancel
        let div = document.getElementById( this.id ) ;
        // On recupère les boutons OK
        let buttonsOk = div.getElementsByClassName( "BtnOk" ) ;
        // On cree un EventListener sur le premier bouton OK
        buttonsOk[0].addEventListener( "click", (event)=>
        {
            this.onOk() ;
        }) ;
    }

    onOk()
    {
        this.updateModele() ;
    }

    updateVue( modele=null )
    {
        // Appel de la méthode updateVue de la classe mère Vue
        super.updateVue( modele ) ;

        if( this.modele )
        {
            let div = document.getElementById( this.id ) ;
            let inputs = div.getElementsByClassName( "Input") ;

            for( let i=0 ; i<inputs.length ; i++)
            {
                let input = inputs[i] ;
                if( this.modele[input.name] != undefined )
                    input.value = this.modele[input.name] ;
                else
                    input.value = "" ;
            }
        }
    }

    updateModele( modele=null )
    {
        // Appel de la méthode updateModele de la classe mère Vue
        super.updateModele( modele ) ;

        if( this.modele )
        {
            let div = document.getElementById( this.id ) ;
            let inputs = div.getElementsByClassName( "Input") ;

            for( let i=0 ; i<inputs.length ; i++)
            {
                let input = inputs[i] ;
                if( this.modele[input.name] != undefined )
                {
                    try
                    {
                        if( input.type == "number" )
                            this.modele[input.name] = parseInt( input.value ) ;
                        else
                            this.modele[input.name] = input.value ;
                    }
                    catch( error )
                    {
                        this.onError( error ) ;
                    }
                }
            }
        }
    }
}