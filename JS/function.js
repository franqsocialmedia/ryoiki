
var espacioLista = document.getElementById('lista');

var btnAgregar = document.getElementById('btn_agregar');

function newTask(){
	//let task = prompt("agrege nueva tarea");
	
	var screen = document.querySelector('.x');
	screen.classList.toggle('activo');
	
	document.querySelector('.tarea').focus;
}
	
	
function registrarTask(){
	
	var screen = document.querySelector('.x');
	var task = document.querySelector('.tarea').value;
	screen.classList.toggle('activo');
	
	
	if (task == ""){
		alert("ESTA VACIO");
		
		console.log("CAMPO VACIO");
	}else{
	
	
	
	//LISTA
	const nuevaLista = document.createElement("li");
	nuevaLista.className = "list_item";
	//INPUT
	const nuevoCheck = document.createElement("input");
	nuevoCheck.type = "checkbox";
	
	//DIV
	const nuevoDiv = document.createElement("div");

	//SPAN
	const nuevoSpan = document.createElement("span");
	
	//ITALIC
	const nuevoItalic = document.createElement("i");

	espacioLista.appendChild(nuevaLista);
	
	nuevaLista.appendChild(nuevoCheck);
	nuevaLista.appendChild(nuevoDiv);
	
	nuevoSpan.innerHTML = task;
	nuevoItalic.innerHTML = "31 DIC - 12:00";
	
	nuevoDiv.appendChild(nuevoSpan);
	nuevoDiv.appendChild(nuevoItalic);
	
	console.log("agregando...");
	
	document.querySelector('.tarea').value = "";
	}
}

document.body.addEventListener("click",eliminarTask);

function eliminarTask(event){
	console.log("ELIMINANDO...");
	var x = event.target;
	
	if(x.classList == "list_item"){
	
	console.log("ELIMINANDO");
	document.getElementById('lista').removeChild(x);
	}else{
	console.log("NO ELIMINANDO");
	}
	
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