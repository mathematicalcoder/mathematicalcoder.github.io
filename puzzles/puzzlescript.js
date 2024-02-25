var puzzlelist = [['images/LITS_6_6_1.png', 'images/LITS_6_6_1_Sol.png'], ['images/NL_6_6_1.png', 'images/NL_6_6_1_Sol.png']];

function ShowPuzzle(index) {
  document.getElementById("puzzlepreview").innerHTML = '<img src='.concat(puzzlelist[index][0].concat(' height="200" width="200"></img>'));
}

function ShowSoln(index) {
  document.getElementById("puzzlepreview").innerHTML = '<img src='.concat(puzzlelist[index][1].concat(' height="200" width="200"></img>'));
}
