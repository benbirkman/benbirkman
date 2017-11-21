function isNumeric(str) {
	return Number(str) == str;
}	

function randomNumber(a, b) {

	return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randomChar(str) {

	n = randomNumber(0, str.length - 1);
	return str[n];
}

function randomOperation() {
	
	return randomChar("/*^+-");
}

function factorial(n) {
	result = 1;
	
	for (i = 1; i <= n; i++) { 
		result = result * i;
	}
	
	return result;
}

function abs(n) {
	
	if (n < 0) {
		return -n;
	} else {
		return n;
	}
}

function exponent(n, m) {
	
	result = 1;
	
	for (i = 0; i < abs(m); i++) {
		result = result * n;
	}
	
	if (m < 0) {
		
		return 1 / result;
	} else {
		return result;
	}
}
 
function calculate(a, b, operation) {

	
	if (operation == "+") {
		result = a + b;
	}
	
	if (operation == "*") {
		result = a * b;
	}

	if (operation == "/") {
		result = a / b;
	}
	
	if (operation == "-") {
		result = a - b;
	}
	
	if (operation == "^") {
		result = exponent(a, b);
	}
	
	return result;
}

function calculator() {
			
	operation = document.getElementById("operation").value;
	a = Number(document.getElementById("a").value);
	b = Number(document.getElementById("b").value);
	
	document.getElementById("result").value = calculate(a, b, operation);
}

function randomExercise() {
	
	operation = randomOperation();
	
	if (operation == "^") {
		min = 2;
		max = 16;
	} else {
		min = -50000;
		max = -min;
	}
	
	random1 = randomNumber(min, max);
	random2 = randomNumber(min, max);
	
	document.getElementById("n1").innerHTML = random1;	
	document.getElementById("n2").innerHTML = random2;		
	document.getElementById("operation").innerHTML = operation;	
	document.getElementById("checkresult").disabled = false;
	document.getElementById("tick").style.display = "none";
	document.getElementById("result").value = "";


}

function checkResult() {
	
	result1 = document.getElementById("result").value;
	a = Number(document.getElementById("n1").innerHTML);
	b = Number(document.getElementById("n2").innerHTML); 
	operation = document.getElementById("operation").innerHTML;
	
	if (result1 == "") {
		return;
	}	
	
	if (!isNumeric(result1)) {
		for (i = 1; i <= 1000; i++) {
			 alert("not cool man you stupid");
		} 
		
		return;
	}
	
	result2 = calculate(a, b, operation);
	
	if (result1 == result2) {
		document.getElementById("tick").style.display = "inline";
		document.getElementById("checkresult").disabled = true;
			document.getElementById("redx").style.display = "none";

	} else {
		document.getElementById("redx").style.display = "inline";
		document.getElementById("tick").style.display = "none";

	}
	
}

