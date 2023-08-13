
/*var a = prompt("Texto agregar en parrafo");
*/

alert("Hi");

//ejemplo de funcion
function suma(){
	return 1+4;
}

//Ejemplo de Objeto
const celular ={
	marca:"LG",
	modelo:"V5",
	ano:"2018"
};

//variables de los elementos
let x = document.getElementById("contenidoX");
var y = document.getElementById("contenidoY");
var z = document.getElementById("contenidoZ");
var d = document.getElementById("derechos");

//nuevos valores de los elementos
x.innerHTML = suma();
//y.innerHTML = a;

//consulta de respuesta
/*if (a=="suma"){
	
	z.innerHTML = "FUNCIONO!";
}else if (a=="resta"){
	z.innerHTML = "YEIIII";
}else{
	z.innerHTML = celular.modelo;
}
*/

//Calculadora de botones en javascript
var x1 = document.getElementById("1");
var x2 = document.getElementById("2");
var x3 = document.getElementById("3");
var x4 = document.getElementById("4");
var x5 = document.getElementById("5");
var x6 = document.getElementById("6");
var x7 = document.getElementById("7");
var x8 = document.getElementById("8");
var x9 = document.getElementById("9");
var x0 = document.getElementById("0");

var signoMas = document.getElementById("+");
var signoMenos = document.getElementById("-");
var signoMulti = document.getElementById("*");
var signoDivision = document.getElementById("/");

const calculo = new Array(0,"n",0,"n");

var z = 0;

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
		
		y.innerHTML = calculo[z];
		
		z++;
	}
	
	
		
		
	return;
}
