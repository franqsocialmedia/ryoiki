//SESION

sessionStorage.setItem("prota_x",0);
sessionStorage.setItem("prota_y",115);

sessionStorage.setItem("enemy_x",200);
sessionStorage.setItem("enemy_y",120);

sessionStorage.setItem("ball_x",150);
sessionStorage.setItem("ball_y",30);
sessionStorage.setItem("tamano",5);

sessionStorage.setItem("direccion","r");

sessionStorage.setItem('diagonal',0)

var inicio = 0;

var r;
var nivel1 = 1;
var nivel2 = 0.3;
	
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

//CANVAS
var canvas = document.getElementById("canvas");
canvas.style.width = '80%';
canvas.style.height = '30%';

var objeto = canvas.getContext('2d');

var ancho = 10;
var alto = 30;

var limitW = canvas.width - ancho;
var limitH = canvas.width - alto;

var mitad = canvas.width / 2;

sessionStorage.setItem('enemy_x',(canvas.width-ancho));

//TU PERSONAJE
const getCharacter = (x=sessionStorage.getItem('prota_x'),y=sessionStorage.getItem('prota_y'),color='green') => ({
	x,
	y,
	w:ancho,
	h:alto,
	collision:this.y + this.h,
	color,
	
	aparece(x,y) {
		if(tu < 0){
			this.y --;
		}else if (tu > 0){
			this.y ++;
		}
	
			objeto.fillStyle = this.color
			objeto.fillRect(x,y,this.w,this.h)
	}
});

//ENEMIGOS
const getFoe = (x2=sessionStorage.getItem('enemy_x'),y2=sessionStorage.getItem('enemy_y'),color='green') => ({
	x2,
	y2,
	w:ancho,
	h:alto,
	collision:this.y2 + this.h,
	color,
	
	aparece(x2,y2) {
	
			objeto.fillStyle = this.color
			objeto.fillRect(x2,y2,this.w,this.h)
	}
});

const prota = getCharacter(sessionStorage.getItem("prota_x"), sessionStorage.getItem("prota_y"), 'blue');
const enemy = getFoe(sessionStorage.getItem('enemy_x'), sessionStorage.getItem('enemy_y'),'red');

var x_Prota = sessionStorage.getItem('prota_x');
var y_Prota = sessionStorage.getItem('prota_y');

var x_Enemy = sessionStorage.getItem('enemy_x');
var y_Enemy = sessionStorage.getItem('enemy_y');

//PELOTA
const getBall = (t=sessionStorage.getItem('tamano'),x3=sessionStorage.getItem('ball_x'),y3=sessionStorage.getItem('ball_y'),color='black',direction=sessionStorage.getItem('direccion')) => ({
	x3,
	y3,
	w:t,
	h:t,
	color,
	direction,

	aparece(x3,y3,direction){
		objeto.fillStyle = this.color
		objeto.fillRect(this.x3,this.y3,this.w,this.h)
}
});

const ball = getBall(t=sessionStorage.getItem('tamano'),x3=sessionStorage.getItem('ball_x'),y3=sessionStorage.getItem('ball_y'),color='black',direction=sessionStorage.getItem('direccion'));

console.log('PROTAGONISTA: '+prota);
console.log('ENEMIGO: '+enemy);

var nivel = ball.x3;

//FUNCION: REBOTE
function rebote(MAX,MIN){
	var g = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
	
	return g;
}

const update = () => {
	objeto.clearRect(0,0,canvas.width,canvas.height);
	
//MOVIMIENTO PELOTA
	if(ball.direction == 'r'){
		
		ball.aparece(ball.x3,ball.y3,sessionStorage.getItem('direccion'));
		sessionStorage.setItem('ball_x',ball.x3++);
		sessionStorage.setItem('ball_y',ball.y3);
		}
	if(ball.direction == 'l'){	
	
		ball.aparece(ball.x3,ball.y3,sessionStorage.getItem('direccion'));
		sessionStorage.setItem('ball_x',ball.x3--);
		sessionStorage.setItem('ball_y',ball.y3);
	}	
	
	
	if(ball.direction == 'r' && ball.x3 == canvas.width - enemy.w && enemy.y2 <= ball.y3 && enemy.y2 + enemy.h > ball.y3){
		ball.color = 'red';
		ball.direction = 'l';
		sessionStorage.setItem('direccion',ball.direction);
		
		console.log('GOLPEO AL RIVAL!');
	}
	
	if(ball.direction == 'l' && prota.x + prota.w >= ball.x3 && prota.y <= ball.y3 && prota.y + prota.h > ball.y3){
		ball.color = 'orange';
		ball.direction = 'r';
		sessionStorage.setItem('direccion',ball.direction);
		
		console.log('TE GOLPEO!');
	}
	
	
//REBOTE PELOTA
	if(ball.y3 == 0){
		sessionStorage.setItem('direccion','r');
	
	}else if(ball.y3 == canvas.height){
		sessionStorage.setItem('direccion','l');
	}

	
	
//TUS MOVIMIENTOS
	if(tu < 0){
		prota.aparece(sessionStorage.getItem('prota_x'),prota.y--);
		sessionStorage.setItem('prota_y',prota.y);
	}else if(tu > 0){
		prota.aparece(sessionStorage.getItem('prota_x'),prota.y++);
		sessionStorage.setItem('prota_y',prota.y);	
	}else if(tu == 0){
		prota.aparece(sessionStorage.getItem('prota_x'),prota.y);
		sessionStorage.setItem('prota_y',prota.y);
	}
	
//MOVIMIENTO ENEMIGO
	if(ball.y3 > enemy.y2){
		enemy.aparece(sessionStorage.getItem('enemy_x'),enemy.y2++);
		sessionStorage.setItem('enemy_y',enemy.y2);
		
	}else if(ball.y3 < enemy.y2){
		enemy.aparece(sessionStorage.getItem('enemy_x'),enemy.y2--);
		sessionStorage.setItem('enemy_y',enemy.y2);
		
	}else if(ball.y3 == enemy.y2){
		enemy.aparece(sessionStorage.getItem('enemy_x'),enemy.y2);
		sessionStorage.setItem('enemy_y',enemy.y2);
	}
	
//PUNTOS
	if(ball.x3 > canvas.width){
		alert("PUNTO PARA TI");
		
		sessionStorage.setItem('direccion','l');
		ball.direction = 'l';
		ball.x3 = mitad;
		ball.aparece(ball.x3,ball.y3);
		
	}else if(ball.x3 < 0){
		alert("PUNTO PARA EL RIVAL");
		
		sessionStorage.setItem('direccion','r');
		ball.direction = 'r';
		ball.x3 = mitad;
		ball.aparece(ball.x3,ball.y3);
		
	}
console.log('POSITION: '+sessionStorage.getItem('prota_y'));
	
	requestAnimationFrame(update);
}

requestAnimationFrame(update);


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
		
		rebote(1,canvas.height);
		
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