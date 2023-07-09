var puzzlelist = [['images/LITS_6_6_1.png', 'nosolpuzzle.png'], ['images/NL_6_6_1.png', 'nosolpuzzle.png']];

function ShowPuzzle(index) {
  document.getElementById("puzzlepreview").innerHTML = puzzlelist[index][0];
}

function ShowSoln(index) {
  document.getElementById("solnpreview").innerHTML = puzzlelist[index][1];
}
