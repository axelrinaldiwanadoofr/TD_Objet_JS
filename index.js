// On crée l'article tomate au nombre de 15

let monArticle = {
    article: "tomate",
    quantite: 15
} ;

// Ajout de la méthode affiche() qui le contenu de l'article

monArticle.affiche = function()
{
    console.log( this.article + " " + this.quantite ) ;
}

// Appel de la méthode affiche() pour l'objet référencé par monArticle

monArticle.affiche() ;

let a = monArticle ;

a.affiche() ;

//let b = {
//    article: "carotte",
//    quantite: 3,
//    affiche: a.affiche
//} ;

//b.affiche = a.affiche ;

let b = {
    article: "carotte",
    quantite: 3,
    affiche: function ()
    {
        console.log( this.article + " " + this.quantite + " c'est très bon" ) ;
    }
} ;

// Redéfinition de la méthode toString 
b.toString = function()
{
    return this.article + " " + this.quantite ;
}


b.affiche() ;

console.log( "Voici le nouvel article: b " + b.toString() ) ;
console.log( "Voici le nouvel article: b " + b ) ;
console.log( "Voici le nouvel article: a " + a ) ;

let s = "J'aime bien manger " + b + ". Car elles sont très bonnes" ;

console.log( s ) ;





/*
Affiche chaque article du panier référencé par unPanier avec
la fonction référencé par fct
*/
function AffichePanier( unPanier, fct )
{
    for(let i = 0; i < unPanier.length; i++){
        fct( unPanier[i] );
    }
}

console.log( "Le panier de la menagere..." ) ;



