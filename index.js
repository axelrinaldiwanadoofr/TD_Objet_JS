// Stoker les informations d'un étudiant
let nom = "DELON" ;
let prenom = "Alain" ;
let civilite = "Monsieur" ;
let age = 85 ;
let section = "cinéma" ;

// Affiche les informations de l'étudiant
console.log(civilite + " " + nom + " " + prenom);

// Création d'un objet JSON

let etudiant = {
    nom: "DELON",
    prenom: "Alain",
    civilite: "Monsieur",
    age: 85,
    section: "cinéma"
} ;

console.log( etudiant ) ;

let etudiant1 ;

etudiant1 = etudiant ; // Copie de la référence de l'objet

console.log( etudiant1 ) ;

etudiant1.age = 50 ;

console.log( "etudiant1: " ) ;
console.log( etudiant1 ) ;

console.log( "etudiant: " ) ;
console.log( etudiant ) ;

// Les 2 variables pointent vers le même objet



