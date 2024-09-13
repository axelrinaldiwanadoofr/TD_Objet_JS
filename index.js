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

// Autre version de fonction qui affiche les données d'un article
function AfficheUnArticleEnLigne( unArticle )
{
    console.log( "Nom: " + unArticle.article + " Quantite: " + unArticle.quantite ) ;
}

// Qu'est ce que font ces deux lignes ?

let f = AfficheUnArticle ;

f( monArticle ) ;


// Cree un panier avec des fruits

let panier = [
    { article: "tomate", quantite: 15},
    { article: "banane", quantite: 9 },
    { article: "pommes", quantite: 5}
];

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

AffichePanier( panier, AfficheUnArticle ) ;

AffichePanier( panier, AfficheUnArticleEnLigne ) ;







