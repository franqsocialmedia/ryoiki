//controles

var btnRight = document.getElementById('btn_4');
var btnLeft = document.getElementById('btn_1');
var btnDown = document.getElementById('btn_3');
var btnUp = document.getElementById('btn_2');
var btnEspacio = document.getElementById('btn_5');

//al precionar
btnRight.addEventListener('keydown', boton);
btnLeft.addEventListener('keydown', boton);
btnDown.addEventListener('keydown', boton);
btnUp.addEventListener('keydown', boton);
btnEspacio.addEventListener('keydown', boton);

//al clickear
btnRight.addEventListener('click', boton);
btnLeft.addEventListener('click', boton);
btnDown.addEventListener('click', boton);
btnUp.addEventListener('click', boton);
btnEspacio.addEventListener('click', boton);

//al soltar
btnRight.addEventListener('keyup', soltar);
btnLeft.addEventListener('keyup', soltar);
btnDown.addEventListener('keyup', soltar);
btnUp.addEventListener('keyup', soltar);
btnEspacio.addEventListener('keyup', soltar);

function boton(event){
console.log('PRECIONADO BOTON');
		
		let valor = event.which;
		
		//DERECHA
		if(valor == 97 || valor == 68 || valor == 39){
		console.log('A => DERECHA ' + valor);
		
		btnRight.style.background = 'red';
		btnLeft.style.background = 'white';
		btnUp.style.background = 'white';
		btnDown.style.background = 'white';
		btnEspacio.style.background = 'white';
		
		
		//IZQUIERDA
		}else if(valor == 100 || valor == 65 || valor == 37){
		console.log('D => IZQUIERDA ' + valor);
		
		btnLeft.style.background = 'red';
		btnRight.style.background = 'white';
		btnUp.style.background = 'white';
		btnDown.style.background = 'white';
		btnEspacio.style.background = 'white';
		
		//ABAJO
		}else if(valor == 115 || valor == 83 || valor == 40){
		console.log('S => ABAJO ' + valor);
		
		btnDown.style.background = 'red';
		btnLeft.style.background = 'white';
		btnUp.style.background = 'white';
		btnRight.style.background = 'white';
		btnEspacio.style.background = 'white';
		
		
		//ARRIBA
		}else if(valor == 119 || valor == 87 || valor == 38){
		console.log('W => ARRIBA ' + valor);
		
		btnUp.style.background = 'red';
		btnLeft.style.background = 'white';
		btnRight.style.background = 'white';
		btnDown.style.background = 'white';
		btnEspacio.style.background = 'white';
		
		//BARRA
		}else if(valor == 32){
		console.log('ESPACIO => ESPACIO ' + valor);
		
		btnEspacio.style.background = 'red';
		btnLeft.style.background = 'white';
		btnRight.style.background = 'white';
		btnDown.style.background = 'white';
		btnUp.style.background = 'white';
		
		alert('salto');
		
		
		//PARA TODOS LOS DEMAS
		}else{
		
		console.log(valor);
		}
}

function soltar(event){
	
		btnEspacio.style.background = 'white';
		btnLeft.style.background = 'white';
		btnRight.style.background = 'white';
		btnDown.style.background = 'white';
		btnUp.style.background = 'white';
}