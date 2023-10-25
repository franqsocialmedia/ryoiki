function menuClick(){
	console.log("listo!");

	var menu_activo = document.querySelector('.menu').classList.toggle('menu_activo');
	var cover_activo = document.querySelector('.cover').classList.toggle('cover_activo');
}

var x = document.getElementById('galeria');
var IMG_muestra = document.getElementById('none');
var IMG_fondo = document.getElementById('fondo');

let agregar = document.getElementById('galeria');

var viendo = 0;

function muestraIMG() {

	if(viendo == 0){
	let new_img = document.createElement('img');

	var IMG_link = event.target.src;
	console.log(IMG_link);
	
	IMG_muestra.classList.toggle("NOviendo");
	IMG_fondo.classList.toggle("NOviendo");
	IMG_muestra.src = IMG_link;
	
	console.log("ESTO ES: " + IMG_muestra.src);
	
	new_img.classList.add("galeria_img");
	new_img.classList.add("NOviendo");
	
	new_img.src = "IMG/no-found.png";
	new_img.onclick = "muestraIMG()";
	new_img.id = "imagen_galeria";
	
	agregar.appendChild(new_img);

	viendo = 1;
	}else{
		
		IMG_muestra.classList.toggle("NOviendo");
		IMG_fondo.classList.toggle("NOviendo");
	
		
		viendo = 0;
	}
}
