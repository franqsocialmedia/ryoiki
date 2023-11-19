
var tiempo = 1000;
var s = document.getElementById('segundos');

function newTime(){

const seg = new Date()
segundos = seg.getSeconds();
setTimeout(newTime, tiempo);

s.innerHTML = segundos;
//console.log(segundos);
};
newTime();

sessionStorage.setItem('apareceFoe',segundos);
var rango = sessionStorage.getItem('apareceFoe') + 5;

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
		
		if(tu.jump == 0 && tu.intento == 1){
			tu.jump = 50;
		}else{
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

var barra = document.getElementById('barra');
var header = document.getElementById('header');
var canvas = document.getElementById('canvas');
var gameOver = 0;


canvas.style.width = '90%';
canvas.style.height = '40%';

const lugar = canvas.getContext('2d');

class vida{
	constructor(){
	this.barra = 0;
	}
}

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
	this.life = canvas.width;
	this.salto = 0;
	this.intento = 1;
	this.inmunidad = 1;
	}
}

class foe{
	constructor(x,y,w,h,color,gravedad,speed,imagen,life,salto){
	this.x = canvas.width - 10;
	this.y = 20;
	this.w = 10;
	this.h = 10;
	this.color = 'red';
	this.gravedad = 1;
	this.speed = 1;
	this.imagen = 'URL';
	this.life = 100;
	this.salto = 30;
	this.intento = 1;
	this.damage = (canvas.width * 0.2);
	}
}

const miPersonaje = new personaje();
const miVida = new vida();
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
	intento:miPersonaje.intento,
	hit:miPersonaje.inmunidad,
	
	aparece(){
		if(gameOver == 0){
			if(this.life > 0){
				//salto por gravedad
				if(this.jump > 0){
					this.g = 0;
					this.y--;
					this.jump--;
					tu.intento = 0;
				}else{
					this.g = 1;
					if(this.y <= canvas.height){
						tu.intento = 1;
					}
				}
				
				//gravedad
				if((this.y+this.h) < canvas.height){
					this.y += this.g;
				}
				lugar.strokeStyle = this.color;
				lugar.strokeRect(this.x,this.y,this.w,this.h);
			}else{
				confirm('GAME OVER!');
				gameOver = 1;
			}
		}
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
	damage:miEnemigo.damage,
	
	aparece(){
	
		//gravedad
		if((this.y+this.h) < canvas.height){
			this.y += this.g;
		}
		
		//mecanismo de ataque
		if(this.life > 0 && this.x > 0){
			this.x -= this.speed;
			if(rango <= segundos){
				tu.hit = 1;
			}
			if(this.x <= (tu.w+tu.x) && (this.x+this.w) >= tu.x && (tu.y+tu.h)>(canvas.height-this.h) && tu.life > 0 && tu.hit == 1){
				
				tu.life = tu.life - enemigo.damage;
				tu.hit = 0;
				rango = segundos + 4;
			}
			
			lugar.strokeStyle = this.color;
			lugar.strokeRect(this.x,this.y,this.w,this.h);
		}else{
			enemigo.x = canvas.width;
			console.log(canvas.height-this.h);
			console.log(tu.h + tu.y);
		}
	}

});

const getVida = () => ({
	life:tu.life,
	h:20,
	x:0,
	y:0,
	color:'green',
	
	aparece(){
		lugar.fillStyle = this.color;
		lugar.fillRect(this.x,this.y,this.life,this.h);
	}
});

var tu = getCharacter();
var enemigo = getEnemigo();
var enemigo2 = getEnemigo();
var bar = getVida();

console.log('TU: '+ tu);
console.log('ENEMIGO: '+ enemigo);


const update = () => {
lugar.clearRect(0,0,canvas.width,canvas.height);

bar.life = tu.life;
if(bar.life < (canvas.width / 4)){
	bar.color = 'red';
}else if(bar.life < (canvas.width / 2)){
	bar.color = 'orange';
}

tu.aparece();
bar.aparece();

enemigo.aparece();


requestAnimationFrame(update);
}
requestAnimationFrame(update);