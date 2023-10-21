function menuClick(){
	console.log("listo!");

	var menu_activo = document.querySelector('.menu').classList.toggle('menu_activo');
	var cover_activo = document.querySelector('.cover').classList.toggle('cover_activo');
}

var x = document.getElementById('galeria');

x.addEventListener ('click', (e) => {
	console.log(x.target);
})

