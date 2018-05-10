function interval(uneListe){
    uneListe.sort(function (a, b) {
        if (a < b )
        return -1;
        if (a > b)
        return 1;
        // a doit être égal à b
        return 0;
    });

    let intervallesTrouves = [];
    let debutInterval = uneListe[0];

    uneListe.forEach(function(entier, i, liste){
        var entierSuivant = liste[i+1];
        var finIntervalTrouve = entierSuivant === undefined || entierSuivant - entier > 1;
        if(finIntervalTrouve){
            nouvelIntervalle = debutInterval == entier ? debutInterval + '' : debutInterval + '-' + entier;
            intervallesTrouves.push(nouvelIntervalle);
            debutInterval = entierSuivant;
        }
    });

    return intervallesTrouves;
}


module.exports = interval;