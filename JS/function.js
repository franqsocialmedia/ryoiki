	
	var vid = document.getElementById('reproductor');
	var barra = document.getElementById('barra');
	vid.volume = 0.1;
	var porcentaje = vid.volume*100;
	var protagonista = document.getElementById('personaje');
	var obstaculo = document.getElementById('obstaculo');
	
	if(protaPosition){
	
	}else{
	var protaPosition = protagonista.style.left = 0;
	}
	
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
	
document.body.addEventListener("keydown", boton);

function avanzar(){

	console.log('avanzar '+ protagonista.style.position.left);
	protagonista.style.position.left = protagonista.style.position.left + 700;
	
	
}

function boton(event){

		var btnRight = document.getElementById('btn_4');
		var btnLeft = document.getElementById('btn_1');
		var btnDown = document.getElementById('btn_3');
		var btnUp = document.getElementById('btn_2');
		var btnEspacio = document.getElementById('btn_5');
		
		let value= event.which;
		
		//DERECHA
		if(value == 97 || value == 68 || value == 39){
		console.log('A => DERECHA ' + value);
		
		var btnRight = document.getElementById('btn_4');
		
		btnRight.style.background = 'red';
		btnLeft.style.background = 'black';
		btnUp.style.background = 'black';
		btnDown.style.background = 'black';
		btnEspacio.style.background = 'black';
		
		avanzar();
		
		//IZQUIERDA
		}else if(value == 100 || value == 65 || value == 37){
		console.log('D => IZQUIERDA ' + value);
		
		btnLeft.style.background = 'red';
		btnRight.style.background = 'black';
		btnUp.style.background = 'black';
		btnDown.style.background = 'black';
		btnEspacio.style.background = 'black';
		
		//ABAJO
		}else if(value == 115 || value == 83 || value == 40){
		console.log('S => ABAJO ' + value);
		
		btnDown.style.background = 'red';
		btnLeft.style.background = 'black';
		btnUp.style.background = 'black';
		btnRight.style.background = 'black';
		btnEspacio.style.background = 'black';
		
		//ARRIBA
		}else if(value == 119 || value == 87 || value == 38){
		console.log('W => ARRIBA ' + value);
		
		btnUp.style.background = 'red';
		btnLeft.style.background = 'black';
		btnRight.style.background = 'black';
		btnDown.style.background = 'black';
		btnEspacio.style.background = 'black';
		
		//BARRA
		}else if(value == 32){
		console.log('ESPACIO => ESPACIO ' + value);
		
		
		btnEspacio.style.background = 'red';
		btnLeft.style.background = 'black';
		btnRight.style.background = 'black';
		btnDown.style.background = 'black';
		btnUp.style.background = 'black';
		
		//PARA TODOS LOS DEMAS
		}else{
		
		console.log(value);
		}
}