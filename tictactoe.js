
function init() {
	isFirst = true;
	cells = [];
	selectSkin();
}

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
 
function clickCell(elm, location) {

	if (cells[location] != null) {
		return;
	}
	if (checkWin()) {
		return;	
	}

	cells[location] = isFirst;
	drawPlayer(elm, isFirst);
	
	if (checkWin() || checkDraw()) {
		if (checkDraw()) {
			 message = "you are both losers!!!";	
		} else {
			message = winnerMessage(isFirst);
		}
		
		document.getElementById("resetTicTacToe").style.display = "inline";
		document.getElementById("result").style.display = "block";
		document.getElementById("result").innerHTML = message;
	}	

	isFirst = !isFirst;
}

function resetTicTacToe() {
	
	init();
	document.getElementById("resetTicTacToe").style.display = "none";
	document.getElementById("result").style.display = "none";
	
	tds = document.getElementsByTagName("td");	
	for (i = 0; i < tds.length; i++) {  
		tds[i].innerHTML = "";
	}

}


function getPlayer() {
	
	
}

function drawPlayer(elm, isFirst) {
	
	if (isFirst) {
		name = firstImage;
	} else {
		name = secondImage;
	}
	
	elm.innerHTML = '<img src="img/' + name + '"/>';

}

function winnerMessage(isFirst) {
	
	if (isFirst) {
		return "first player won!!!";
	} else {
		return "second player won!!!";
	}
}


function selectSkin() {
	option = document.getElementById("mySelect").value;
	
	switch (option) {
		case "1": 
			firstImage = "redx.png";
			secondImage = "circle.png";
			break;
		case "2":
			firstImage = "fangs.jpg";
			secondImage = "werewolf.jpg";
			break;
		case "3":
			firstImage = "redx.png";
			secondImage = "circle.png";
			break;
		case "4": 
			firstImage = "redx.png";
			secondImage = "circle.png";
			break;		
	}
}



