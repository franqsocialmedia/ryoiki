
var a = prompt("Texto agregar en parrafo");


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
y.innerHTML = a;

//consulta de respuesta
if (a=="suma"){
	
	z.innerHTML = "FUNCIONO!";
}else if (a=="resta"){
	z.innerHTML = "YEIIII";
}else{
	z.innerHTML = celular.modelo;
}

