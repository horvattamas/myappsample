/*
Global variable and function for focus assist.
*/
let currentTextboxId;
function setId(id){
	currentTextboxId = id;
}
/*
This function takes the value from the button on the HTML 
and puts it inside the textbox. It also calls the isFocused method
to test whether the user has focus on the textboxes. 
*/
function moveValue(btnValue){
	const test = isFocused();
	if(test){
		let elementValue = document.getElementById(currentTextboxId).value;
		elementValue = elementValue + btnValue;
		document.getElementById(currentTextboxId).value=elementValue;
	}
}
/*
Test the user's focus on the textbox, returns true if the user has 
focus or an alert and false if there is no focus.
*/
function isFocused(){
	const element1 = "expression";
	if(element1 === currentTextboxId){
		return true;
	}else{
		window.alert("You must focus on the textbox first.");
		return false;
	}
}

/*
Resets every elements value and text to an empty String.
*/
function resetCalculator(){
	document.getElementById("expression").value=" ";
	document.getElementById("equals").innerHTML=" ";
}
/*
Gets the numbers from the textboxes and calls upon the calculate(number1,operator,number2)
function gets the result and writes it on the HTML.
*/
function writeResult(){
	const result = calculate();
	document.getElementById("equals").innerHTML="= "+result;
}

function calculate(){
	const wholeExpression = document.getElementById("expression").value;
	const operators = wholeExpression.split("").filter(isAdditionNegation);
	const polinom = wholeExpression.split(/[+-]/);
	const polinom2 = polinom.map(calc);
	if(operators.length!==0){
		let i = 0;
		let sum = 0;
		while(i!==polinom2.length-1){
			if(i===0){
				if(operators[i] === "+"){
					sum += polinom2[i]+polinom2[i+1];
				}else{
					sum = polinom2[i] - polinom2[i+1];
				}
			}else{
				if(operators[i] === "+"){
					sum = sum+polinom2[i+1];
				}else{
					sum = sum - polinom2[i+1];
				}
			}
			i++;
		}
		return sum;
	}else{
		return polinom2;
	}
	
}

/*Makes use of a backspace button on screen
*/
function backspace(){
	const expression = document.getElementById("expression").value;
	document.getElementById("expression").value = expression.substring(0, expression.length-1);
}

function calc(num){
	if(num.includes("*") || num.includes("/")){
		const operator = num.match(/[/*]/g);
		const numbers = num.split(/[*/]/g);
		let sum = 0;
		for(let i = 0; i<numbers.length-1; i++){
			if(i===0){
				if(operator[i] == "*"){
					sum += numbers[i] * numbers[i+1];
				}else{
					sum += numbers[i]/numbers[i+1];
				}
			}else{
				if(operator[i] == "*"){
					sum = sum * numbers[i+1];
				}else{
					sum = sum/numbers[i+1];
				}
			}
		}
		return sum;
	}else{
		return parseFloat(num);
	}
}
function isAdditionNegation(op){
	if(op === "+" || op === "-"){
		return true;
	}else{
		return false;
	}
}
