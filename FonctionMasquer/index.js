//En Javascript, écrire une fonction “masquer()” telle que :

// 1 string en entrée
//remplace tous les caractères sauf les 4 derniers par “#”

const tdd = require('../TDD.js');

function masquer(unTexte) {
//return unTexte.replace('s', '#');
//regex : prend tous les carctères sauf les 4 derniers
    return unTexte.replace(/.(?=.{4,}$)/g, '#');
}

tdd.assertStringsEquals('#alut', masquer('salut'));
tdd.assertStringsEquals('###############ns !', masquer('salut les copains !'));
tdd.assertStringsEquals('##########Fini', masquer('&@#!? Ayé Fini'));

let texte1 = 'salut';

if (masquer(texte1) == '#alut') {
    console.log('green');
}
else {
    console.log('red');

}

let texte = 'salut les copains !';
if (masquer(texte) == '###############ns !') {
    console.log('green');
}
else {
    console.log('red');
}
let texte2 = '&@#!? Ayé Fini';
if (masquer(texte2) == '##########Fini') {
    console.log('green');
}
else {
    console.log('red');
}



