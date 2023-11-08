	
	var vid = document.getElementById('reproductor');
	var barra = document.getElementById('barra');
	vid.volume = 0.1;
	var porcentaje = vid.volume*100;
	
	barra.style.width = porcentaje;
	
function subir(){

	vid.volume = vid.volume + 0.1;
	console.log("subio volumen: " + Math.round(vid.volume*100));
	
	porcentaje = vid.volume*100;
	barra.style.width = porcentaje+'%';
	
	console.log(barra.style.width);
	}
	
function bajar(){

	vid.volume = vid.volume - 0.1;
	console.log("bajo volumen: " + Math.round(vid.volume*100));
	

	porcentaje = vid.volume*100;
	barra.style.width = porcentaje+'%'
	
	console.log(barra.style.width);
	}