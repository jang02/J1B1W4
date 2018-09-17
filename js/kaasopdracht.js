var answer1 = "Emmenthaler";
var answer2 = "Leerdammer";
var answer3 = "Parmigiano Reggiano";
var answer4 = "Goudse kaas";
var answer5 = "Blue de Rochbaron";
var answer6 = "Fourme d'Ambert";
var answer7 = "Camembert";
var answer8 = "Mozzarella";

var yellow = false;
var holes = true;
var expensive = true;
var likestone = true;
var bluethings = false;
var korst = true;

document.getElementById("getcheese").onclick= mycheese;

function mycheese(){
if (yellow == true){
	if (holes == true){
		if (expensive == true){
			document.write("De kaas: " + answer1)
		}
		else{
			document.write("De kaas: " + answer2)
		}
		}
			else if (likestone == true){
				document.write("De kaas: " + answer3)
		}
			else{
				document.write("De kaas: " + answer4)
	}
}else if (bluethings == true){
	if (korst == true){
		document.write("De kaas: " + answer5)
	}
	else{
		document.write("De kaas: " + answer6)
	}
}else if (korst == true){
	document.write("De kaas: " + answer7)
}
	else{
		document.write("De kaas: " + answer8)
	}
}
