// link checkbox from html.
const lowerEL = document.getElementById("lowercase");
const upperEL = document.getElementById("uppercase");
const numEL = document.getElementById("numbers");
const symEL = document.getElementById("specialCharacters");
// link length slider from html.
const lengthEL = document.getElementById("lengthPW");
const resultEL = document.getElementById("result");
// link generate button from html.
const genEL = document.getElementById("generatePW");
// link clipboard button to html.
const clipEL = document.getElementById("clipboard");

// add event listeners for checkboxes.

// add event listener for generate button.
genEL.addEventListener("click", function () {
	const lengthY = +lengthEL.value;
	const lowerY = lowerEL.checked;
	const upperY = upperEL.checked;
	const numberY = numEL.checked;
	const symY = symEL.checked;
	resultEL.innerText = GenPassword(lengthY, lowerY, upperY, numberY, symY);
	//resultEL.innerText = GenPassword(5, true, false, false, false);
});
// add password function (a pass by parameter local variables.)
function GenPassword(lng, lowerY, upperY, numberY, symY) {
	// init password var.
	// filter out unchecked types.
	// var typesCount = lwr + upr + num + sym;
	// console.log("#ofTypes= ", typesCount);
	// const typeArry = [{ lwr }, { upr }, { num }, { sym }].filter(
	// 	(item) => Object.values(item)[0]
	// );
	// if (typesCount === 0) {
	// 	return "";
	// }
	// console.log("typeArry: ", typeArry);

	// loop over length, and call generator function for each type.

	if (
		lowerY === false &&
		upperY === false &&
		numberY === false &&
		symY === false
	) {
		alert("no boxes selected!");
		return false;
	}
	var GenPassW = "";
	// console.log(GenPassW);
	for (var i = 0; i < lng; i++) {
		// console.log(i);
		// characters to choose for pw
		var newvar = randomCharacter();
		if (newvar.length === 0) {
			i -= 1;
		}
		GenPassW += newvar;

		console.log(GenPassW);

		// console.log(GenPassW);
		// add final pw to the pw var and return it.
	}

	// getRandomNumber();
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
	// resultEL.innerText = generatethePassword(
	// 	lengthY,
	// 	lowerY,
	// 	upperY,
	// 	numberY,
	// 	symY
	// );

	// function generatethePassword(numEL, upperEL, lowerEL, symEL) {}

	// const randomFunction = {
	// 	getRandomLower,
	// 	getRandomUpper,
	// 	getRandomNumber,
	// 	getRandomSymbol,
	// };
	// generate random lower. math.floor rounds down, math.random starts at pos 97 of the character code and moves up to 26 places (97-123). returning string, because it's a letter.
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
	return GenPassW;
}
