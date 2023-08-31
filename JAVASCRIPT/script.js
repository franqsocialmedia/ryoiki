var cont = 0;

var secTimeOut = 2000; // 1000 = 1 segundo.
var time = setTimeout(scrollComentarios, secTimeOut);


var recorridoComentarios = document.getElementById("comentarios");

var conteoLikes = 0;
var conteoViews = 0;

let bloqueoViews = 1;
let bloqueoLikes = 1;

var likes = document.getElementById("likes");
var views = document.getElementById("views");

var video = document.getElementById("pkmVideo");
var tiempoView = 0;

function timeOut(){
time = setTimeout(scrollComentarios, secTimeOut);
}

function menu(){
	document.querySelector('.menu_pop').classList.toggle('open');
	
	console.log("leyo");
}


function verificacionPlay(){

	if((video.paused == false)){
		
		console.log("esta play");
		console.log("bloqueoViews: "+bloqueoViews);
		}else{
		console.log("esta pausado");
		console.log("bloqueoViews: "+bloqueoViews);
		}
}


function conteoPlay(tipo){
	
	verificacionPlay();
	
	if(tipo == "like" && bloqueoLikes == 1){
		console.log("FUE UN LIKE");
		
		conteoLikes = conteoLikes + 1;
		bloqueoLikes = 0;
		
		likes.innerHTML = conteoLikes;
		
	}else if(tipo == "view" && bloqueoViews == 1){
		console.log("FUE UN VIEW ");
		
		if(video.paused == false && video.currentTime > ((video.duration / 3) * 2)){
			conteoViews = conteoViews + 1;
			bloqueoViews = 0;
			
			views.innerHTML = conteoViews;
		}else{
			console.log("aun no se cumple. tiempo: "+video.currentTime + " y el limite es: "+ ((video.duration / 3) * 2))
		}
			
	
	}else{
		console.log("HAY PROBLEMO " + "BLOQUEO LIKES: "+ bloqueoLikes + ". BLOQUEO VIEWS: "+bloqueoViews);
	}
	
}

function preparando(x){
	x = x + 1;
	recorridoComentarios.children[x].classList.add("esperaComentario");
}

function scrollComentarios(){
	count = recorridoComentarios.children.length + 1;
	for (var limite = 0; limite != count; limite++){
	
		if(recorridoComentarios.children[limite].classList == "div_comentario"){
			recorridoComentarios.children[limite].classList.add("siguienteComentario");
			
			preparando(limite);
		}else{
			console.log("NO ES. " + recorridoComentarios.children[limite].classList);
		}
	}
}


/*function scrollComentarios(){
	let limite = recorridoComentarios.children.length + 1;
	
	if (recorridoComentarios.children[cont].classList == "div_comentario" && cont != limite){
	
		recorridoComentarios.children[cont].classList.add("siguienteComentario");
		cont = cont + 1;
		recorridoComentarios.children[cont].classList.add("esperaComentario");
		
		timeOut();
		
		console.log("encontro ... revisando")
	}else if (recorridoComentarios.children[cont].classList != "div_comentario" && cont == limite ){
		console.log("LIMITE")
	}else{
		cont = cont + 1;
		timeOut();
		
		console.log("revisando ... "+ limite + " Y " + recorridoComentarios.children[cont].classList)
	}
*/
