//En TDD, écrivez une fonction qui réduise une liste d'entiers positifs sous la forme d'intervalles.
// Exemples : [1, 2, 3, 5, 7, 8] => [1-3, 5, 7-8]



// Que me donne t-on ?
let liste = [1,2,3,5,7,8];
//Quel est le résultat attendu ?
let resultatAttendu = [1-3,5,7-8];

//Que me demande t-on de faire ? (écrire une fonction)
function intervalle(uneListe){

};

//Que doit faire le test ? (prend une liste qui retourne un intervalle en appelant la fonction)
if(intervalle(liste)===resultatAttendu){
    console.log('green');
}
else{
    console.log('red');
}
// test rouge because je n'ai pas implémenté ma fonction



