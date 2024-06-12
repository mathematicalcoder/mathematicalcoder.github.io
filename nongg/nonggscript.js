let pts = 0;
let rate = 1;
let prestige = 0;

document.getElementById("prestige_button").disabled = true;

window.onload = function () {
  setInterval(function () {
    document.getElementById("pts").innerHTML = pts.toFixed(3);
    document.getElementById("rate").innerHTML = (rate*(prestige+1)).toFixed(3);
    pts+=(rate*(prestige+1));
    if (pts >= 1e+20) {
      document.write("<h2>Congratulations, you finished the game! Refresh to start over.</h2>");
    }
  }, 100);
}

function addptsA() {
  rand = Math.floor(Math.random() * 10);
  pts += Math.pow(Math.log(Math.pow(rand, 5)*100+10), 2);
  document.getElementById("pts").innerHTML = pts.toFixed(3);
}

function addptsB() {
  rand = Math.floor(Math.random() * 10);
  pts += Math.pow(Math.log(Math.pow(rand, 6)*100+1), 1);
  document.getElementById("pts").innerHTML = pts.toFixed(3);
}

function upA() {
  if (pts > 1e+5) {
    document.getElementById("boost3").innerHTML = "<button type=\"button\" class=\"btn-primary\" onclick=\"addptsC();\">Booster 3</button>"
    document.getElementById("u01").innerHTML = "(Bought!)"
    document.getElementById("u02place").innerHTML = '<button type="button" class="btn secondary" id="u2button" onclick="upB();">U02: Multiply point gain by 100</button> <span id="u02">(prerequisite: have 1e+8 points)</span>'
    document.getElementById("u1button").disabled = true;
    document.getElementById("prestige_button").disabled = false;
    pts -= 1e+5
    document.getElementById("pts").innerHTML = pts.toFixed(3);
  }
}

function addptsC() {
  rand = Math.floor(Math.random() * 10);
  pts += Math.pow(Math.log(Math.pow(rand, 5)*100+1), 2);
  document.getElementById("pts").innerHTML = pts.toFixed(3);
}

function upB() {
  if (pts > 1e+8) {
    rate = 100;
    document.getElementById("rate").innerHTML = (rate*(prestige+1)).toFixed(3);
    document.getElementById("u02").innerHTML = "(Bought!)"
    document.getElementById("u03place").innerHTML = '<button type="button" class="btn-secondary" id="u3button" onclick="upC();">U03: Multiply point gain by 500</button> <span id="u03">(prerequisite: have 1e+11 points)</span>'
    document.getElementById("u2button").disabled = true;
    pts -= 1e+8
    document.getElementById("pts").innerHTML = pts.toFixed(3);
  }
}

function upC() {
  if (pts > 1e+11) {
    rate = 50000;
    document.getElementById("rate").innerHTML = (rate*(prestige+1)).toFixed(3);
    document.getElementById("u03").innerHTML = "(Bought!)"
    document.getElementById("u3button").disabled = true;
    pts -= 1e+11
    document.getElementById("pts").innerHTML = pts.toFixed(3);
  }
}

function addPrestige() {
  prestige += Math.sqrt(pts - prestige);
  pts = 0;
  rate = 1;
  document.getElementById("prestige").innerHTML = prestige.toFixed(3);
document.getElementById("prestige_multiplier").innerHTML = (prestige + 1).toFixed(3);
    document.getElementById("prestige_button").disabled = true;
  console.log("disabled")

    setTimeout(function(){ 
        document.getElementById("prestige_button").disabled = false;  
    }, 5000);

}
