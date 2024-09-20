

t = [] ; // On cree un tableau
t["nom"] = "BURY" ;
t["prenom"] = "Matheo" ;
t["age"] = 18 ;

console.log( t["prenom"] ) ;

for( let key in t )
{
    console.log( key + ": " + t[key] ) ;
}

function chercheValeur(tableau, nomCase){
    if( tableau[nomCase] === undefined )
        return ("La case " + nomCase + " n'existe pas dans le tableau.") ;      
    return tableau[nomCase] ;
}


console.log( "ville: " + chercheValeur(t, "ville")) ;
console.log( "prenom: " + chercheValeur(t, "prenom")) ;

