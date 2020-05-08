// lets try to make this document a prompt sequence that ends in a generated password.
// 1. create first prompt: would you like to make a random password?
//object.addEventListener("load", myScript);
//document.onload();
questionare();
// var txt;
var lengthX;
var lowercase;
var uppercase;
var numbers;
var SpecialCharacters;
function questionare() {
	if (confirm("Press OK to create a randomized password!")) {
		lengthX = prompt(
			"How many characters for your password? Please pick a number btwn 8 & 128."
		);
		console.log(lengthX);

		if (lengthX >= 8 && lengthX <= 128) {
			lowercase = confirm("Press OK to include lowercase letters.");
			uppercase = confirm("Press OK to include uppercase letters.");
			numbers = confirm("Press OK to include numbers.");
			SpecialCharacters = confirm("Press OK to include symbols.");
			if (
				lowercase === false &&
				uppercase === false &&
				numbers === false &&
				SpecialCharacters === false
			) {
				alert("Please select at least one character type.");
				questionare();
			}
			// ---QUESTION: how do i make this a checkbox prompt?
		} else {
			alert("Invalid length selected. Please try again.");

			// rerun function here!!??
			questionare();

			//---create a function to make it run again after this. _QUESTION: at this point, it should automatically generate the first prompt. How do i do this??
		}
	} else {
		alert("Password generator canceled!");
	}

	GenPassword(lengthX, lowercase, uppercase, numbers, SpecialCharacters);
}

function GenPassword(lng, lowerY, upperY, numberY, symY) {
	// init password var.

	// filter out unchecked types.
	if (
		lowerY === false &&
		upperY === false &&
		numberY === false &&
		symY === false
	) {
		// 	alert("no boxes selected!");
		return;
	}
	var GenPassW = "";
	var w = 0;
	// console.log(GenPassW);
	for (var i = 0; i < lng; i++) {
		w++;
		// it's interesting to see how many times this has to run before a password is generated. using new variable w.
		console.log(w);
		var newvar = randomCharacter();
		// if randomCharacter function returns nothing, subtract the i that was added.
		if (newvar.length === 0) {
			i -= 1;
		}
		// add final pw to the pw var and return it.
		GenPassW += newvar;

		console.log(GenPassW);
	}

	// loop over length, and call generator function for each type.

	function randomCharacter() {
		var generatedNumber = Math.floor(Math.random() * 4) + 1;
		if (generatedNumber === 1) {
			return getRandomLower(lowerY);
		} else if (generatedNumber === 2) {
			return getRandomUpper(upperY);
		} else if (generatedNumber === 3) {
			return getRandomNumber(numberY);
		} else if (generatedNumber === 4) {
			return getRandomSymbol(symY);
		}
	}

	function getRandomLower(checklow) {
		if (checklow === true) {
			return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
		} else {
			return "";
		}
	}
	// generate random upper. math.floor rounds down, math.random starts at pos 65 of the character code and moves up to 26 places (65-). returning string, because it's a letter.
	function getRandomUpper(checkupper) {
		if (checkupper === true) {
			return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
		} else {
			return "";
		}
	}
	// generate random number. the + before String forces it to return a number.
	function getRandomNumber(checknumber) {
		if (checknumber === true) {
			// console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
			return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
		} else {
			return "";
		}
	}
	// generate random symbol.
	function getRandomSymbol(checksymbol) {
		if (checksymbol === true) {
			return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
		} else {
			return "";
		}
	}
	if (
		lowercase === true ||
		uppercase === true ||
		numbers === true ||
		SpecialCharacters === true
	) {
		alert(GenPassW);
	}
}
