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
		
		if(tu.jump == 0){
			tu.jump = 30;
		}else if(tu.jump > 25){
			tu.jump = 5;
		}
		
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

//CODIGO GAMEPLAY

var canvas = document.getElementById('canvas');

canvas.style.width = '90%';
canvas.style.height = '40%';

const lugar = canvas.getContext('2d');

class personaje{
	constructor(x,y,w,h,color,gravedad,speed,imagen,life,salto){
	this.x = 20;
	this.y = 20;
	this.w = 30;
	this.h = 30;
	this.color = 'blue';
	this.gravedad = 1;
	this.speed = 1;
	this.imagen = 'URL';
	this.life = 100;
	this.salto = 0;
	}
}

class foe{
	constructor(x,y,w,h,color,gravedad,speed,imagen,life,salto){
	this.x = 70;
	this.y = 20;
	this.w = 10;
	this.h = 10;
	this.color = 'red';
	this.gravedad = 0;
	this.speed = 1;
	this.imagen = 'URL';
	this.life = 100;
	this.salto = 30;
	}
}

const miPersonaje = new personaje();
const miEnemigo = new foe();

const getCharacter = () => ({
	x:miPersonaje.x,
	y:miPersonaje.y,
	w:miPersonaje.w,
	h:miPersonaje.h,
	color:miPersonaje.color,
	life:miPersonaje.life,
	speed:miPersonaje.speed,
	imagen:miPersonaje.imagen,
	g:miPersonaje.gravedad,
	jump:miPersonaje.salto,
	
	aparece(){
		if(this.jump > 0){
			this.g = 0;
			this.y--;
			this.jump--;
		}else{
			this.g = 1;
		}
		
		lugar.strokeStyle = this.color;
		lugar.strokeRect(this.x,this.y,this.w,this.h);
}

});
const getEnemigo = () => ({
	x:miEnemigo.x,
	y:miEnemigo.y,
	w:miEnemigo.w,
	h:miEnemigo.h,
	color:miEnemigo.color,
	life:miEnemigo.life,
	speed:miEnemigo.speed,
	imagen:miEnemigo.imagen,
	g:miEnemigo.gravedad,
	
	aparece(){
		lugar.strokeStyle = this.color;
		lugar.strokeRect(this.x,this.y,this.w,this.h);
	}

});

var tu = getCharacter();
var enemigo = getEnemigo();

console.log('TU: '+ tu);
console.log('ENEMIGO: '+ enemigo);


const update = () => {
lugar.clearRect(0,0,canvas.width,canvas.height);

//gravedad
if((tu.y+tu.h) < canvas.height){
	tu.y += tu.g;
}


tu.aparece();
enemigo.aparece();

console.log('TU: ');
console.log(tu);

requestAnimationFrame(update);
}
requestAnimationFrame(update);