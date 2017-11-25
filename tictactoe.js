
firstPlayer = true;
 
function ticTac(elm) {

	if (firstPlayer) {
		elm.innerHTML = "X";
		
	} else {
		elm.innerHTML = "O";
	}
	
	firstPlayer = !firstPlayer;
	elm.onclick = null;	

}
