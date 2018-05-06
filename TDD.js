const TDD =function(){
    return {
        areArraysEqual: function ( a, b ) {
            if(!Array.isArray(a) || !Array.isArray(b)){return false;}
            let a1 = new Set(a), b1 = new Set(b);
            let difference1 = [...new Set([...a].filter(x => !b1.has(x)))]
            let difference2 = [...new Set([...b].filter(x => !a1.has(x)))]
            if(difference1.length === 0 && difference2.length === 0){return true};
            return false;
        },

        assertStringsEquals: function(texte1, texte2){
            if (texte1 == texte2) {
                console.log('green');
            }
            else {
                console.log('red');

            }
        }
    }
}

module.exports = new TDD();


