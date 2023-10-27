
var espacioLista = document.getElementById('lista');

var btnAgregar = document.getElementById('btn_agregar');

function newTask(){
	let task = prompt("agrege nueva tarea");
	//const nuevaTarea = '<li class="list_item"><input type="checkbox" class="check_seleccion"><div><span>"'+task+'"</span><i>30 AGO - 17:00</i></div></li>';
	/*
	const taskCreate = document.createElement("li");	
	const taskAdd = taskCreate.innerHTML = nuevaTarea;	
	const espacioAdd = document.espacioLista.appendChild(taskCreate);
	*/
	
	//LISTA
	const nuevaLista = document.createElement("li");
	
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
}
