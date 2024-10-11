let ok = true ;

/*============================================
Scénario création d'un meuble avec les valeurs 
par défaut
==============================================*/

let m = new Meuble() ;

if( m.largeur != 40 )
{
    console.error( "La largeur par défaut doit être 40" ) ;
    ok = false ;
}

if( m.hauteur != 50 )
{
    console.error( "La hauteur par défaut doit être 50" ) ;
    ok = false ;
}

if( m.profondeur != 20 )
{
    console.error( "La profondeur par défaut doit être 20" ) ;
    ok = false ;
}

/*============================================
Scénario création d'un meuble avec les valeurs 
définies par l'utilisateur
==============================================*/

let m1 = new Meuble( 80, 100, 50 ) ;

try
{
    m1.setHauteur( 200 ) ;
} 
catch( error )
{
    console.error( error ) ;
}

console.log( m1 ) ;

if( m1.largeur < 40 || m1.largeur > 200 )
{
    console.error( "La largeur doit etre comprise entre 40 et 200" ) ;
    ok = false ;
}

if( m1.hauteur < 50 || m1.hauteur > 180 )
{
    console.error( "La hauteur doit etre comprise entre 50 et 180" ) ;
    ok = false ;
}

if( m1.profondeur < 20 || m1.profondeur > 60 )
{
    console.error( "La profondeur doit etre comprise entre 20 et 60" ) ;
    ok = false ;
}


if( ok ) console.log( "Test passé avec succès" ) ;
else console.error( "Test non passé") ;