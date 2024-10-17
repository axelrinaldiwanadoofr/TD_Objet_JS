
class Vue
{
    constructor( id )
    {
        this.id = id ;
        this.modele = null ;

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

    onModeleChanged( propriete, oldValue, newValue )
    {
        this.updateVue() ;
    }

    updateVue( modele=null )
    {
        if( modele ) // <=> a if( modele != null )
        {
            this.modele = modele ;
        }
    }

    updateModele( modele=null )
    {
        if( modele ) // <=> a if( modele != null )
        {
            this.modele = modele ;
        }
    }

    onError( error )
    {
        alert( "Attention: " + error ) ;
    }
}