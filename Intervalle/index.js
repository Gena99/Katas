//En TDD, écrivez une fonction qui réduise une liste d'entiers positifs sous la forme d'intervalles.
// Exemples : [1, 2, 3, 5, 7, 8] => [1-3, 5, 7-8]
//fonction de comparaison de deux tableaux parce que js ne sait pas le faire
const areArraysEqual = require('../TDD.js');

// Que me donne t-on ?
let liste = [1, 2, 3, 5, 7, 8];
//Quel est le résultat attendu ?
let resultatAttendu = ['1-3', '5', '7-8'];

//Que me demande t-on de faire ? (écrire une fonction)
function intervalle(uneListe) {
    let intervalles = [];
    let debut = uneListe[0];
    let fin = "";
// récuperer chacun des éléments de liste
    for (var i = 0; i < uneListe.length; i++) {
        console.log(uneListe[i], uneListe[i+1],uneListe[i + 1] - uneListe[i],(uneListe[i + 1] - uneListe[i] > 1));
        //on teste la fin de l'intervalle

        if (uneListe[i + 1]===undefined || uneListe[i + 1] - uneListe[i] > 1) {
            fin = uneListe[i];
            //si j'ai une fin d'intervalle c'est que j'ai trouvé un intervalle, alors on l'ajoute à la liste des intervalles
            if (fin > debut) {
                nouvelIntervalle = debut + "-" + fin;
            }
            else {
                nouvelIntervalle = '' + debut;
            }
            intervalles.push(nouvelIntervalle);
            debut = uneListe[i + 1];

        }
    }
    console.log(intervalles);
    return intervalles;
};

//Que doit faire le test ? (prend une liste qui retourne un intervalle en appelant la fonction)
if (areArraysEqual(intervalle(liste),resultatAttendu)) {
    console.log('green');
}
else {
    console.log('red');
}
// test rouge because je n'ai pas implémenté ma fonction
// faire passer le test au green (Red, Green, Refactor), il faut que la fonction retourne le résultat attendu




