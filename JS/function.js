	
	var vid = document.getElementById('reproductor');
	var barra = document.getElementById('barra');
	vid.volume = 0.1;
	var porcentaje = vid.volume*100;
	barra.style.width = porcentaje;

	
	
//Volumen	
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
document.body.addEventListener("keyup", soltar);

var tu = 0;
var pelota = 100;

//CANVAS
var canvas = document.getElementById("canvas");
var objeto = canvas.getContext('2d');

const getCharacter = (color='blue') => ({
	x:0,
	y:0,
	w:10,
	h:30,
	collision:this.y + this.h,
	color,
	
	aparece(x,y) {
		objeto.fillStyle = this.color
		objeto.fillRect(x,y,this.w,this.h)
	}
});

const getBall = (t=5,color='black') => ({
	x:100,
	y:100,
	w:t,
	h:t,
	color,
	direction:'r',
	
	
	aparece(x) {
	
	if(this.direction == 'r'){
		
			this.x++;
		if(this.x > canvas.width - prota.w){
			this.direction = 'l';
		}
	}else{
			this.x--;
		if (this.x < prota.w && this.y == prota.y){
			this.direction = 'r';
		}
	}
		
		objeto.fillStyle = this.color
		objeto.fillRect(this.x,this.y,this.w,this.h)
	}
});

const prota = getCharacter();
const enemy = getCharacter('red');
const ball = getBall();

var x_Prota = 0;
var y_Prota = 0;

var x_Enemy = canvas.width - prota.w;
var y_Enemy = 100;

console.log('PROTAGONISTA: '+prota);
console.log('ENEMIGO: '+enemy);

const update = () => {
	objeto.clearRect(0,0,canvas.width,canvas.height);
	
	if(tu == 0){
	prota.aparece(x_Prota,y_Prota);
	enemy.aparece(x_Enemy,y_Enemy);
	
	}else if(tu > 0){
	prota.aparece(x_Prota,y_Prota++);
	enemy.aparece(x_Enemy,y_Enemy);
	
	}else if(tu < 0){
	prota.aparece(x_Prota,y_Prota--);
	enemy.aparece(x_Enemy,y_Enemy);
	}
	
	

	
	
	if(ball.x < (canvas.x - prota.w)){
		ball.aparece();
	}else{
		ball.aparece();
	}
	
	
console.log('POSITION: '+prota.y);
console.log('TAMANO: '+ prota.h);
	
	requestAnimationFrame(update);
}

requestAnimationFrame(update);

//movimientos
function avanzar(){

}

//controles
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
		
		tu = 1;
		
		//ARRIBA
		}else if(value == 119 || value == 87 || value == 38){
		console.log('W => ARRIBA ' + value);
		
		btnUp.style.background = 'red';
		btnLeft.style.background = 'black';
		btnRight.style.background = 'black';
		btnDown.style.background = 'black';
		btnEspacio.style.background = 'black';
		
		tu = -1;
		
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

function soltar(){
tu = 0;
}