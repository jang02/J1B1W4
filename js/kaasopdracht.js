document.getElementById("getcheese").onclick= mycheese;

function mycheese(){
if (prompt('Is de kaas geel?\nVul ja of nee in.') == "ja"){
	if (prompt('Zitten er gaten in?\nVul ja of nee in.') == "ja"){
		if (prompt('Is de kaas belachelijk duur?\nVul ja of nee in.') == "ja"){
			document.write("De kaas: Emmenthaler")
		}
		else{
			document.write("De kaas: Leerdammer")
		}
		}
			else if (prompt('Is de kaas hard als steen?\nVul ja of nee in.') == "ja"){
				document.write("De kaas: Parmigiano Reggiano")
		}
			else{
				document.write("De kaas: Goudse kaas")
	}
}else if (prompt('Heeft de kaas blauwe schimmels?\nVul ja of nee in.') == "ja"){
	if (prompt('Heeft de kaas een korst?\nVul ja of nee in.') == "ja"){
		document.write("De kaas: Blue de Rochbaron")
	}
	else{
		document.write("De kaas: Fourme d'Ambert")
	}
}else if (prompt('Heeft de kaas een korst?\nVul ja of nee in.') == "ja"){
	document.write("De kaas: Camembert")
}
	else{
		document.write("De kaas: Mozzarella")
	}
}
