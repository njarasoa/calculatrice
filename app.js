////// librarie /////
function somme(a, b){
    return a + b;
}

function soustraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

//////////////////////////////////////

// variables globales
let premier = undefined;
let second = undefined;
let resultat = 0;
let operateur = undefined;
let allume = false;

// fonctions
function allumer(){
    allume = !allume;
    if (allume) {
        afficher("saisir 1er nombre");
    } else {
        afficher("");
    }
}


function afficher(valeur){
    window.document.getElementById("calcScreen").value = valeur;
}

function saisir(nombre){
    if (!allume) return alert("Veuillez allumer la calculatrice");
    if (operateur === undefined) {
        // première saisie
        premier = (premier === undefined) ? nombre : premier.toString() + nombre.toString();
        afficher(premier);
    } else {
        // deuxième saisie
        second = (second === undefined) ? nombre : second.toString() + nombre.toString();
        afficher(second);
    }
}

function choisirOperateur(operation){
    if (premier === undefined) {
        alert("Vous devez saisir une valeur d'abord");
    } else {
        operateur = operation;
        afficher("saisir 2eme nombre");
    }
}

function calculer(){
    premier = parseInt(premier);
    second = parseInt(second);
    switch (operateur) {
        case '+':
            resultat = somme(premier, second) ;
            break;
        case '-':
            resultat = soustraction(premier, second) ;
            break;
        case '*':
            resultat = multiplication(premier, second) ;
            break;
        case '/':
            resultat = division(premier, second) ;
            break;
        default:
            break;
    }
    afficher(resultat);
    reinitiliser();
}

function reinitiliser(){
    premier = undefined;
    second = undefined;
    operateur = undefined;
}
