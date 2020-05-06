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
});
// add password function
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

	if (lowerY === true) {
		var randLowerRes = getRandomLower();
		// console.log("lowr y true");
		console.log(randLowerRes);
	}
	if (upperY === true) {
		var randUpperRes = getRandomUpper();
		// console.log("upr y true");
		console.log(randUpperRes);
	}
	if (numberY === true) {
		var randNumRes = getRandomNumber();
		// console.log("num y true");
		console.log(randNumRes);
	}
	if (symY === true) {
		var randSymRes = getRandomSymbol();
		// console.log("sym y true");
		console.log(randSymRes);
	}
	if (
		lowerY === false &&
		upperY === false &&
		numberY === false &&
		symY === false
	) {
		alert("no boxes selected!");
	}
	var GenPassW = randLowerRes + randUpperRes + randNumRes + randSymRes;
	// console.log(GenPassW);

	for (var i = 1; i < lng; i++) {
		// console.log(i);
		// console.log(GenPassW);
		// GenPassW = GenPassW + "";
		// characters to choose for pw
		var firstrand = getRandomLower();
		var secondrand = getRandomUpper();
		var thirdrand = getRandomNumber();
		var forthrand = getRandomSymbol();
		GenPassW += firstrand + secondrand + thirdrand + forthrand;
		console.log(GenPassW);

		// console.log(GenPassW);
		// add final pw to the pw var and return it.
	}

	// getRandomNumber();

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
	// generate random number. the + before String forces it to return a number.
	function getRandomNumber() {
		// console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
		return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	}
	// generate random symbol.
	function getRandomSymbol() {
		return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
	}
	return GenPassW;
}
