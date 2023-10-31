
var espacioLista = document.getElementById('lista');

var btnAgregar = document.getElementById('btn_agregar');

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
	nuevoCheck.setAttribute("onclick", "seleccionando(event)");
	
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
	borrador.id = identify;
	
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
	}
}

document.body.addEventListener("click",eliminarTask);

function eliminarTask(event){

	var x = event.target;
	var xID = x.id;
	
	if(x.tagName == "IMG" && x.id > 0){
		
//		document.getElementById('lista').removeChild(x);
		
		console.log("ELIMINADO!!!!");	
		
	}else{
		console.log("ERROR DE BORRADO...");
	}
	
	}

function seleccionando(event){
	
	//var selectA = event.target.nextElementSibling;
	//var selectB = event.target.parentElement;
	//var selectC = selectB.contains();
	
//	selectA.classList.toggle('selected');
	//selectB.classList.toggle('selected');
	
	var list = document.querySelector("#lista");
	list.querySelectorAll(".hijos").classList.toggle('selected');
	//selectC.classList.
	
	
	
	/*if()
	document.querySelector('.basura').classList.toggle('activa');
	
	alert(document.querySelector('.basura').classList.toggle('activa'));
	*/
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