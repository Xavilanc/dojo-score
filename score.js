const scores = [
    {
      "player": "Maggie",
      "score": 762
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 882
    },
    {
      "player": "Dee",
      "score": 609
    }
  ];
  


//Pour updateScore(array, player, newScore)
//1.Filtrer le nom du joueur boucle for + if
const updateScore = (array, newPlayer, newScore) => {
    for(let i = 0; i < array.length; i++) {
        if(newPlayer == array[i].player) {
            array[i].score += newScore;
        }
    }
    return array
}
//2.Ajouter le score du joueur
updateScore(scores, "Sanchez", 100);


//Pour podium(scores)
//1.Renvoyer un nouveau tableau avec les joueurs triés par score "sort()"
scores.sort (function(odile,deray) {
    return deray.score - odile.score;
});

//2.Renvoyer les 3 premiers index du tableau trié précédemment
const podiumScore = scores.slice(0, 3)
console.log(podiumScore)







