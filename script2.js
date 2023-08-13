//prueba de lectura de este archivo JS.
alert("Javascript Funcionando!");

//Array que uso como base de datos temporal
const calculo = new Array(0,"n",0,"n");

//contador que uso para el orden dentro del array
var z = 0;

//Funcion calculadora basica (suma, resta, multiplicacion y Division)
function calc(x){

	if(z == 1){
		document.getElementById("resultados").value = calculo[0];
	}else{
		document.getElementById("resultados").value = x;
	}
		
		if(z>2){
					
				if(calculo[1] == "suma" ){
					document.getElementById("resultados").value = calculo[0] + calculo[2];
				}else if(calculo[1] == "resta" ){
					document.getElementById("resultados").value = calculo[0] - calculo[2];
				}else if(calculo[1] == "multi" ){
					document.getElementById("resultados").value = calculo[0] * calculo[2];
				}else if(calculo[1] == "division" ){
					document.getElementById("resultados").value = calculo[0] / calculo[2];
				}
				
			z = 0;
		}else{
		
			calculo[z] = x;
			
			document.getElementById("resultados").innerHTML = calculo[z];
			
			z++;
		}
	return;
}
