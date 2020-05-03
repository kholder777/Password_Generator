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

	resultEL.innerText = generatethePassword(
		lengthY,
		lowerY,
		upperY,
		numberY,
		symY
	);
});

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
