var curId;
function setId(id){
	curId = id;
}

function moveNumbers(num){
	var test = isFocused();
	if(test){
		var elemId = curId;
		var txt = document.getElementById(elemId).value;
		txt = txt + num;
		document.getElementById(elemId).value=txt;
	}
}

function isFocused(){
	var el1 = "broj1";
	var inFocus = curId;
	var el2 = "broj2";
	if(el1===inFocus || el2===inFocus){
		return true;
	}else{
		window.alert("Morate fokusirati na textbox.");
		return false;
	}
}

function moveOperator(op){
	var place = document.getElementById("operator").innerHTML = op;
}

function resetuj(){
	document.getElementById("broj1").value=" ";
	document.getElementById("broj2").value=" ";
	document.getElementById("operator").innerHTML=" ";
	document.getElementById("jednako").innerHTML=" ";
	document.getElementById("broj3").value=" ";
	document.getElementById("broj3").type="hidden";
}

function calcul(){
	var operator = document.getElementById("operator").textContent;
	var br1 = document.getElementById("broj1").value;
	var br2 = document.getElementById("broj2").value;
	if(operator == "/" && parseInt(br2, 10)==0){
		window.alert("Deljenje sa nulom je nemoguce!");
	}else{
		document.getElementById("jednako").innerHTML="=";
		document.getElementById("broj3").type="text";
		var pom = br1+operator+br2;
		var br3 = eval(pom);		
	}
	document.getElementById("broj3").value=br3;
}