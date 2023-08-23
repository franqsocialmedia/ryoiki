var opciones = document.getElementById("menu");
var cover = document.getElementById("cover");
var perfil = document.querySelector(".perfil");

function OpenCloseMenu(){
	
	opciones.classList.toggle("menu");
	cover.classList.toggle("cover_off");
	
	console.log("dentro de funcion");
	
	if(opciones.classList.contains("menu")){
		console.log("EXISTE");
		
	}else{
		console.log("NO EXISTE");
	}
}

function adios(){
	console.log("Adios a la figura");
	
	perfil.classList.add("perfil_off");
}

function hola(){
	console.log("Hola a la figura");
	
	perfil.classList.remove("perfil_off");
}