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
genEL.addEventListener("click", () => {
	const lengthY = +lengthEL.value;
	const lowerY = lowerEL.checked;
	const upperY = upperEL.checked;
	const numberY = numEL.checked;
	const symY = symEL.checked;
	resultEL.innerText = GenPassword(lengthY, lowerY, upperY, numberY, symY);
});
// function GenPasswordDumb() {
// 	return "dumbpassword";
// }
// add password function
function GenPassword(lng, lwr, upr, num, sym) {
	// 1-init pw var.
	var GenPassW = "";

	// 3-loop over length, and call generator function for each type.
	for (i = 0; i < lng; i++) {
		console.log(i);
		console.log(GenPassW);
		GenPassW = GenPassW + "" + i;
		GenPassW += ("lwr", "upr", "num", "sym");
	}

	// 2-filter out unchecked types.
	return GenPassW;
	// 4-add final pw to the pw var and return it.
}
if (GenPassword == 0) {
	getRandomLower();
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} else if (GenPassword == 1) {
	getRandomUpper();
	String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} else {
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
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// generate random upper. math.floor rounds down, math.random starts at pos 65 of the character code and moves up to 26 places (65-). returning string, because it's a letter.
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// generate random number.
function getRandomNumber() {
	return +String.fromCharCode(math.floor(math.random() * 10) + 48);
}
// generate random symbol.
function getRandomSymbol() {
	return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
