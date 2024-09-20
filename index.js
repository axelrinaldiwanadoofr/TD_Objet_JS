

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
    for(var key in tableau){
        if(key == nomCase){
            return tableau[key]
        }
    }  
    return ("La case " + nomCase + " n'existe pas dans le tableau.")  
}

console.log( "ville: " + ( t["ville"] === undefined ) ) ;
console.log( "prenom: " + ( t["prenom"] === undefined ) ) ;

console.log(chercheValeur(t, "ville"))

