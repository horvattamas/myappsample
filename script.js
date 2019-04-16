function moveNumbers(num){
	var txt = document.getElementById("broj1").value;
	txt = txt+ num;
	document.getElementById("broj1").value=txt;
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