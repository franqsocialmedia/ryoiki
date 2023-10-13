function menuClick(){
	console.log("listo!");

	var menu_activo = document.querySelector('.menu').classList.toggle('menu_activo');
	var cover_activo = document.querySelector('.cover').classList.toggle('cover_activo');
}


function gallery_show(){
	console.log("GALERIA");
	
	var img = document.getElementById('imagen_galeria').url;
	
	alert(img);
}