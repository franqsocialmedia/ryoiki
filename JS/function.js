var espacioLista = document.getElementById('lista');
var btnAgregar = document.getElementById('btn_agregar');
var btnEliminar = document.getElementById('btn_borrar');
var identify = 0;

function newTask(){
	//let task = prompt("agrege nueva tarea");
	
	var screen = document.querySelector('.x');
	screen.classList.toggle('activo');
	document.querySelector('.pantalla2').classList.toggle('activo');
	
	document.querySelector('.tarea').focus;
}
	
	
function registrarTask(){
	
	var screen = document.querySelector('.x');
	var task = document.querySelector('.tarea').value;
	screen.classList.toggle('activo');
	document.querySelector('.pantalla2').classList.toggle('activo');
	
	
	if (task == ""){
		alert("ESTA VACIO");
		
		console.log("CAMPO VACIO");
	}else{
	
	//ID DIV
	identify ++;
	
	//LISTA
	const nuevaLista = document.createElement("li");
	nuevaLista.className = "list_item";
	nuevaLista.id = identify;
	
	//INPUT
	const nuevoCheck = document.createElement("input");
	nuevoCheck.type = "checkbox";
	nuevoCheck.classList.add('check_seleccion');
	nuevoCheck.setAttribute("onclick", "seleccionando("+identify+")");
	
	//DIV
	const nuevoDiv = document.createElement("div");
	nuevoDiv.id = identify;

	//p
	const nuevop = document.createElement("p");
	
	//ITALIC
	const nuevoItalic = document.createElement("i");

	//Date
	const d = new Date("30 Oct 2013");
	
	//IMG
	const borrador = document.createElement("img");
	borrador.setAttribute("src","IMG/bin.png");
	borrador.classList.add('basura');
	borrador.classList.add('inactiva');
	borrador.id = "btn_borrar";
	borrador.setAttribute("value", identify);
	borrador.setAttribute("name", identify);
	borrador.setAttribute("onclick", "eliminarTask("+identify+")");
	
	espacioLista.appendChild(nuevaLista);
	
	nuevaLista.appendChild(nuevoCheck);
	nuevaLista.appendChild(nuevoDiv);
	nuevaLista.appendChild(borrador);
	
	nuevop.innerHTML = task;
	nuevoItalic.innerHTML = d;
	
	nuevoDiv.appendChild(nuevop);
	nuevoDiv.appendChild(nuevoItalic);
	
	console.log("agregando...");
	
	document.querySelector('.tarea').value = "";
	
	sessionStorage.setItem("no",identify);
	sessionStorage.setItem("task",task);
	sessionStorage.setItem("hora",d);
	}
}

//document.body.addEventListener("click",eliminarTask);

function eliminarTask(a){

	var x = document.getElementById(a);
	var xParent = x.parentElement;
	
			x.style.display = "none";
		
			console.log("ELIMINADO LISTA: "+ x.id);
			
		
	}

function seleccionando(x){
	
	var selectLi = document.getElementById(x);
	
	console.log(selectLi);
	
	selectLi.classList.toggle('selected');
	selectLi.querySelector('.basura').classList.toggle('inactiva');
	
}


if(sessionStorage.getItem("no")){

console.log("La sesion tiene el No." + sessionStorage.getItem("no"));

var identify = sessionStorage.getItem("no");
var task = sessionStorage.getItem("task");
var d = sessionStorage.getItem("hora");

	
	//LISTA
	const nuevaLista = document.createElement("li");
	nuevaLista.className = "list_item";
	nuevaLista.id = identify;
	
	//INPUT
	const nuevoCheck = document.createElement("input");
	nuevoCheck.type = "checkbox";
	nuevoCheck.classList.add('check_seleccion');
	nuevoCheck.setAttribute("onclick", "seleccionando("+identify+")");
	
	//DIV
	const nuevoDiv = document.createElement("div");
	nuevoDiv.id = identify;

	//p
	const nuevop = document.createElement("p");
	
	//ITALIC
	const nuevoItalic = document.createElement("i");
	
	//IMG
	const borrador = document.createElement("img");
	borrador.setAttribute("src","IMG/bin.png");
	borrador.classList.add('basura');
	borrador.classList.add('inactiva');
	borrador.id = "btn_borrar";
	borrador.setAttribute("value", identify);
	borrador.setAttribute("name", identify);
	borrador.setAttribute("onclick", "eliminarTask("+identify+")");
	
	espacioLista.appendChild(nuevaLista);
	
	nuevaLista.appendChild(nuevoCheck);
	nuevaLista.appendChild(nuevoDiv);
	nuevaLista.appendChild(borrador);
	
	nuevop.innerHTML = task;
	nuevoItalic.innerHTML = d;
	
	nuevoDiv.appendChild(nuevop);
	nuevoDiv.appendChild(nuevoItalic);
	
	console.log("agregando...");
	
	document.querySelector('.tarea').value = "";

}else{
sessionStorage.setItem("no",0);

console.log("Se ha creado una nueva sesion");

}
	
/*codigo posiblemente funcional para un juego de click

//document.body.addEventListener("click", moverElemento);
function moverElemento(event){
	var objeto = event;
	var idObjeto = objeto.target.id;
	var nuevoLugar = document.getElementById(idObjeto);
	
	console.log("MOVIENDO:" + objeto.target.tagName);
	console.log(objeto.pageX);
	
	var newPosition = document.getElementById('pruebaMove');

	newPosition.style.top = objeto.pageY;
	newPosition.style.bottom = objeto.pageY;
	newPosition.style.left = objeto.pageX;
	newPosition.style.right = objeto.pageX;
	
}

function depositarElemento(event){
	
	console.log("DEPOSITO: " + event.target.tagName);
}*/