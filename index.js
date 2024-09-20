

t = [] ; // On cree un tableau
t["nom"] = "BURY" ;
t["prenom"] = "Matheo" ;
t["age"] = 18 ;

console.log( t["prenom"] ) ;

t.ville = "Selestat" ;

for( let key in t )
{
    console.log( key + ": " + t[key] ) ;
}

function chercheValeur(tableau, nomCase){
    if( tableau[nomCase] === undefined )
        return ("La case " + nomCase + " n'existe pas dans le tableau.") ;      
    return tableau[nomCase] ;
}

console.log( t.nom + " " + t.prenom + " " + t.age ) ;

let objet = {
    nom: "COULON",
    prenom: "Ethan",
    age: 19 
} ;

console.log( objet.nom + " " + objet.prenom + " " + objet.age ) ;
console.log( objet["nom"] + " " + objet["prenom"] + " " + objet["age"] ) ;

let objet1 = new Object() ;
objet1.nom = "TEKBAS" ;
objet1.prenom = "Kenan" ;
objet1.age = 19 ;

console.log( objet1["nom"] + " " + objet1["prenom"] + " " + objet1["age"] ) ;

objet.ville = "Colmar" ;
objet["pays"] = "France" ;

for( let key in objet )
{
    console.log( key + ": " + objet[key] ) ;
}

function AfficheObjet(){
    for( let key in objet)
    {
        alert(key + ": " + objet[key]);
    }
}

// Lucas continue la fonction
function AjouteAttribut()
{
    DocumentByGetE
}