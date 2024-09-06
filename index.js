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

// Création d'un tableau vide pour y contenir des étudiants

let lesEtudiants = new Array() ;

// Insertion de Alain Delon dans le tableau
lesEtudiants[0] = etudiant ;

// Insertion d'un autre étudiant avec du JSON
lesEtudiants[1] = {
    nom: "DUPOND",
    prenom: "Aline",
    civilite: "Madame",
    age: 25,
    section: "BTS MCO"
} ;

lesEtudiants.push( {
    nom: "LUX",
    prenom: "Mathéo",
    civilite: "Monsieur",
    age: 21,
    section: "BTS SIO2"
} ) ;

console.log( lesEtudiants ) ;



