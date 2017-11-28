
firstPlayer = true;
cells = [];

function checkWin() {
	tor = cells["tl"] != null && cells["tl"] == cells["tm"] && cells["tm"] == cells["tr"];
	mor = cells["ml"] != null && cells["ml"] == cells["mm"] && cells["mm"] == cells["mr"];
	bor = cells["bl"] != null && cells["bl"] == cells["bm"] && cells["bm"] == cells["br"];
	lc = cells["br"] != null && cells["br"] == cells["mr"] && cells["mr"] == cells["tr"];
	mc = cells["bm"] != null && cells["bm"] == cells["mm"] && cells["mm"] == cells["tm"];
	rc = cells["bl"] != null && cells["bl"] == cells["ml"] && cells["ml"] == cells["tl"];
	db = cells["tl"] != null && cells["tl"] == cells["mm"] && cells["mm"] == cells["br"];
	dt = cells["bl"] != null && cells["bl"] == cells["mm"] && cells["mm"] == cells["tr"];

	return tor || mor || bor || lc || mc || rc || db || dt;
}

function checkDraw() {
	
	return cells["tl"] != null && cells["tm"] != null && cells["tr"] != null && cells["ml"] != null && cells["mm"] != null && cells["mr"] != null && cells["bl"] != null && cells["bm"] != null && cells["br"] != null && checkWin() == false;
}
 
function ticTac(elm, location) {

	if (cells[location] != null) {
		return;
	}
	if (checkWin()) {
		return;	
	}

	if (firstPlayer) {
		sign = "X";
		otherSign = "O"
		
	} else {
		sign = "O";
		otherSign = "X"
	}
	
	cells[location] = sign;
	elm.innerHTML = sign;
	
	
	firstPlayer = !firstPlayer;
	
	if (checkWin()) {
		document.getElementById("result").innerHTML = sign + " wins!!! " + otherSign + " is a total loser";
		document.getElementById("resetTicTacToe").style.display = "inline";

	}
	
	if (checkDraw()) {
		document.getElementById("result").innerHTML = "you are both losers!!!";	
		document.getElementById("resetTicTacToe").style.display = "inline";

	}

	
}

function resetTicTacToe() {
	
	
}
