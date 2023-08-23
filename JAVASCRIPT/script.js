var opciones = document.getElementById("menu");
var cover = document.getElementById("cover");

function OpenCloseMenu(){
	
	opciones.classList.toggle("menu");
	cover.opacity = 100%;
	
	console.log("dentro de funcion");
	
	if(opciones.classList.contains("menu")){
		console.log("EXISTE");
		
	}else{
		console.log("NO EXISTE");
	}
}
