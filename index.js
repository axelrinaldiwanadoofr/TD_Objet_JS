

t = [] ; // On cree un tableau
t["nom"] = "BURY" ;
t["prenom"] = "Matheo" ;
t["age"] = 18 ;

console.log( t["prenom"] ) ;

for( let key in t )
{
    console.log( key + ": " + t[key] ) ;
}