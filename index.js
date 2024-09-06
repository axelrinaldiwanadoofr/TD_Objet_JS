// On crée l'article tomate au nombre de 15

let monArticle = {
    article: "tomate",
    quantite: 15
} ;



// Fonction qui affiche les données d'un article
function AfficheUnArticle( unArticle )
{
    console.log( "Nom de l'article: " + unArticle.article ) ;
    console.log( "Quantite: " + unArticle.quantite ) ;
}

// Appel de la fonction avec l'article référencé par monArticle
AfficheUnArticle( monArticle ) ;

// Qu'est ce que font ces deux lignes ?

let f = AfficheUnArticle ;

f( monArticle ) ;


// Cree un panier avec des fruits

let panier = [
    { article: "tomate", quantite: 15},
    { article: "banane", quantite: 9 },
    { article: "pommes", qte: 5}
];

function AffichePanier( unPanier )
{
    for(let i = 0; i < unPanier.length; i++){
        f(unPanier[i]);
    }
}

console.log( "Le panier de la menagere" ) ;

AffichePanier( panier ) ;






