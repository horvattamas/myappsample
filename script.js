/*
Global variable and function for focus assist.
*/
let currentTextboxId;
function setId(id){
	currentTextboxId = id;
}
/*
This function takes the number value from the button on the HTML 
and puts it inside the testbox. It also calls the isFocused method
to test whether the user has focus on the textboxes. 
*/
function moveNumber(number){
	const test = isFocused();
	if(test){
		let elementValue = document.getElementById(currentTextboxId).value;
		elementValue = elementValue + number;
		document.getElementById(currentTextboxId).value=elementValue;
	}
}
/*
Test the user's focus on the textbox, returns true if the user has 
focus or an alert and false if there is no focus.
*/
function isFocused(){
	const element1 = "firstNumber";
	const element2 = "secondNumber";
	if(element1 === currentTextboxId || element2 === currentTextboxId){
		return true;
	}else{
		window.alert("You must focus on a textbox first.");
		return false;
	}
}
/*
Gets the operator from the button and puts it inside a span.
*/
function moveOperator(op){
	const operator = document.getElementById("operator").innerHTML = op;
}
/*
Resets every elements value and text to an empty String.
*/
function resetCalculator(){
	document.getElementById("firstNumber").value=" ";
	document.getElementById("secondNumber").value=" ";
	document.getElementById("operator").innerHTML=" ";
	document.getElementById("equals").innerHTML=" ";
}
/*
Gets the numbers from the textboxes and calls upon the calculate(number1,operator,number2)
function gets the result and writes it on the HTML.
*/
function writeResult(){
	const operator = document.getElementById("operator").textContent;
	const number1 = document.getElementById("firstNumber").value;
	const number2 = document.getElementById("secondNumber").value;
	const resultNumber = calculate(number1, operator, number2);
	document.getElementById("equals").innerHTML="="+resultNumber;
}
/*
Takes 2 numbers(variable 1 and 3) and an operator all of them as a String,
parses the numbers into integers and calculates the result.
*/
function calculate(number1, operator, number2){
	const num1 = parseInt(number1, 10);
	const num2 = parseInt(number2, 10);
	if(operator === "+"){
		return num1 + num2;
	}else if(operator === "-"){
		return num1 - num2;
	}else if(operator === "*"){
		return num1 * num2;
	}else if(operator === "/"){
		if(num2 === 0){
			window.alert("Division by 0 is not possible.");
		}else{
			return num1 / num2;
		}
	}
}