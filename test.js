let test = true ;

t = [] ; // On cree un tableau
t["nom"] = "BURY" ;
t["prenom"] = "Matheo" ;
t["age"] = 18 ;

if( chercheValeur(t, "prenom") != "Matheo" ) test = false ;
if( chercheValeur(t, "ville") != "La case ville n'existe pas dans le tableau." ) test = false ;

if( test ) console.log( "Test ok pour chercheValeur" ) ;
else console.log( "!!!!!!!!Test mauvais pour chercheValeur!!!!" ) ;

