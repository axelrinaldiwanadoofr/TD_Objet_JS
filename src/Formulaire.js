
class Formulaire
{
    constructor( id )
    {
        this.id = id ;
        this.modele = null ;

        // Cree les écouteurs de click sur les boutons OK et Cancel
        let div = document.getElementById( this.id ) ;
        // On recupère les boutons OK
        let buttonsOk = div.getElementsByClassName( "BtnOk" ) ;
        // On cree un EventListener sur le premier bouton OK
        buttonsOk[0].addEventListener( "click", (event)=>
        {
            this.onOk() ;
        }) ;

        // Cree un écouteur pour l'évenement ModeleChanged
        document.body.addEventListener( "ModeleChanged", (event)=>
        {
            if( event.detail.modele == this.modele )
            {
                this.onModeleChanged( event.detail.propriete,
                    event.detail.oldValue,
                    event.detail.newValue ) ;
            }
        });
    }

    onOk()
    {
        this.updateModele() ;
    }

    onModeleChanged( propriete, oldValue, newValue )
    {
        this.updateForm() ;
    }

    updateForm( modele=null )
    {
        if( modele ) // <=> a if( modele != null )
        {
            this.modele = modele ;
        }

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
        if( modele ) // <=> a if( modele != null )
        {
            this.modele = modele ;
        }

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

    onError( error )
    {
        alert( "Attention: " + error ) ;
    }
}