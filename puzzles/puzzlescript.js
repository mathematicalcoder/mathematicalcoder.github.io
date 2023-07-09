var puzzlelist = [['images/LITS_6_6_1.png', 'nosolpuzzle.png'], ['images/NL_6_6_1.png', 'nosolpuzzle.png']];

function ShowPuzzle(index) {
  document.getElementById("puzzlepreview").innerHTML = '<img src='.concat(puzzlelist[index][0].concat('></img>'));
}

function ShowSoln(index) {
  document.getElementById("solnpreview").innerHTML = '<img src='.concat(puzzlelist[index][1].concat('></img>'));
}
