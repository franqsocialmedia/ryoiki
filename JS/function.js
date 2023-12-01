const naipePalo = [];
const naipeNumero = [];
const naipeColor = [];
const naipe = [];
let signo = 1;
var azar = 0;
var siguiente = 0;
let orden = 0;
let next = 0;
const baraja = [];

var playmat = document.getElementById('playmat');
var yourCards = document.getElementById('yourSide');
var foeCards = document.getElementById('foeSide');
var nextCard = document.getElementById('batterySide');
var texto = document.querySelector('.nextCard');
var deck = document.getElementById('deckSide');

document.getElementById('centralSide').addEventListener('click',mostrar);
let five = 1;


function nuevosNaipes(){
	for(x = 0; x<=52; x++){
				
	//DAR NUMERO CODIGO	
		naipeNumero[x] = x;
		
	//DAR COLOR
		if(x<=26){
			naipeColor[x] = "Negra";
		}else{
			naipeColor[x] = "Roja";
		}
		
	//DAR PALO
		if(x<=13){
			naipePalo[x] = "Picas";
		}else if(x<=26 && x>13){
			naipePalo[x] = "Treboles";
		}else if(x<=39 && x>26){
			naipePalo[x] = "Corazones";
		}else if(x<=52 && x>39){
			naipePalo[x] = "Diamantes";
		}
		
	//DAR CARTA
		if(signo<=13){
			if(signo==1){
				naipe[x] = "A";
		signo++;
				
			}else if(signo<=10 && signo>1){
				naipe[x] = signo;
		signo++;
					
			}else if(signo<=13 && signo>10){
				if(signo == 11){
				naipe[x] = "J";
		signo++;
				
				}else if(signo == 12){
				naipe[x] = "Q";
		signo++;
				
				}else if(signo == 13){
				naipe[x] = "K";
		signo=1;
				
				}
			}
		
		}else{
			signo = 1;
		}		
		
	}

	//EL JOKER
	naipeNumero[0] = 'Joker';
	naipe[0] = 'Joker';
}

nuevosNaipes();

function rand(MIN,MAX){
	var numero = [MIN];
	
	for(var x=MIN; x<=MAX; x++){
		numero.push(x);
	}
	
	numero = numero.sort(function() {return Math.random() - 0.5});
	
	return numero[0];
}

function barajar(){
	
	for(x=0; x<naipeNumero.length; x++){
		baraja.push(x);
	}
	
	baraja.sort(function(){return 0.5 - Math.random()});
	console.log("NUEVO ORDEN: "+baraja);
	console.log("NUEVO NAIPE: "+naipe);
}

function mostrar(){
	next = baraja[orden];
	
	if(next == 0){
		orden++;
		next = baraja[orden];
	}
	
	if(orden>52){
		confirm("YA NO QUEDAN CARTAS!!!");
	}else{
		console.log("QUEDAN LAS CARTAS: "+(52-orden));
		
		console.log("----------");
		console.log("CODIGO: "+naipeNumero[next]);
		console.log("CARTA: "+naipe[next]);
		console.log("PALO: "+naipePalo[next]);
		console.log("COLOR: "+naipeColor[next]);
		console.log("----------");
		console.log("");
		
		//baraja.splice(orden,1);
		
		orden++;
	}
}

barajar();



function startGame(){
	let you = 0;
	let foe = 0;
	let nxt = 0;
	let dck = 0;
	
	for(let x of baraja){
	
		if(x == 0){
		//alert("ES JOKER "+ baraja[x]);
		}else{
		//NAIPE
		const nuevoNaipe = document.createElement("b");
		//SIMBOLO/PALO
		const nuevoPalo = document.createElement("span");

		if(you <= 5){
		you++;
		nxt++;
		//TUS CARTAS
		const nuevaCarta = document.createElement("div");
		nuevaCarta.classList.add('yourCard');
			
		nuevoNaipe.innerHTML = naipe[x];
			if(naipePalo[baraja[x]] == "Picas"){
				nuevoPalo.innerHTML = "&spades;";
			}else if(naipePalo[baraja[x]] == "Treboles"){
				nuevoPalo.innerHTML = "&clubs;";
			}else if(naipePalo[baraja[x]] == "Corazones"){
				nuevoPalo.innerHTML = "&hearts;";
			}else if(naipePalo[baraja[x]] == "Diamantes"){
				nuevoPalo.innerHTML = "&diams;";
			}
					
		//COLOR
			if(naipeColor[baraja[nxt]] == "Negra"){
				nuevaCarta.style.color = "white";
			}else if(naipeColor[baraja[nxt]] == "Roja"){
				nuevaCarta.style.color = "red";
			}
			

		//CREACION	
		yourCards.appendChild(nuevaCarta);
		nuevaCarta.appendChild(nuevoNaipe);
		nuevaCarta.appendChild(nuevoPalo);
		
		console.log("Tomaste una carta!");
		
		
		}else if(foe<=5){
		foe++;
		nxt++;
		//SUS CARTAS (FOE)
		const nuevaCarta = document.createElement("div");
		nuevaCarta.classList.add('foeCard');
		
		nuevoNaipe.innerHTML = naipe[x];
			if(naipePalo[baraja[x]] == "Picas"){
				nuevoPalo.innerHTML = "&spades;";
			}else if(naipePalo[baraja[x]] == "Treboles"){
				nuevoPalo.innerHTML = "&clubs;";
			}else if(naipePalo[baraja[x]] == "Corazones"){
				nuevoPalo.innerHTML = "&hearts;";
			}else if(naipePalo[baraja[x]] == "Diamantes"){
				nuevoPalo.innerHTML = "&diams;";
			}
						
		//COLOR
			if(naipeColor[baraja[nxt]] == "Negra"){
				nuevaCarta.style.color = "white";
			}else if(naipeColor[baraja[nxt]] == "Roja"){
				nuevaCarta.style.color = "red";
			}
			

		//CREACION	
		foeCards.appendChild(nuevaCarta);
		nuevaCarta.appendChild(nuevoNaipe);
		nuevaCarta.appendChild(nuevoPalo);
		
		console.log("El rival tomo una carta!");
		
		}
}
}
	
	
	if(naipe[baraja[nxt]] == "Joker"){
		nxt++;
	}
	
	
	if(foe>5 && you>5){
	
	if(naipe[baraja[nxt]] == "Joker"){
		nxt++;
	}else{
	//NAIPE
	const nuevoNaipe = document.createElement("b");
	//SIMBOLO/PALO
	const nuevoPalo = document.createElement("span");
	//SIGUIENTE CARTA
		const nuevaCarta = document.createElement("div");
		nuevaCarta.classList.add('nextCard');
		
		
		nuevoNaipe.innerHTML = naipe[baraja[nxt]];
			if(naipePalo[baraja[nxt]] == "Picas"){
				nuevoPalo.innerHTML = "&spades;";
			}else if(naipePalo[baraja[nxt]] == "Treboles"){
				nuevoPalo.innerHTML = "&clubs;";
			}else if(naipePalo[baraja[nxt]] == "Corazones"){
				nuevoPalo.innerHTML = "&hearts;";
			}else if(naipePalo[baraja[nxt]] == "Diamantes"){
				nuevoPalo.innerHTML = "&diams;";
			}
					
		//COLOR
			if(naipeColor[baraja[nxt]] == "Negra"){
				nuevaCarta.style.color = "white";
			}else if(naipeColor[baraja[nxt]] == "Roja"){
				nuevaCarta.style.color = "red";
			}
			
	
		//CREACION	
		nextCard.appendChild(nuevaCarta);
		nuevaCarta.appendChild(nuevoNaipe);
		nuevaCarta.appendChild(nuevoPalo);
		
		console.log("SIGUIENTE CARTA");
		
		nxt++;
	}
	
	if(foe>5 && you>5){
	
	if(naipe[baraja[nxt]] == "Joker"){
		
		nxt++;
	
	}else{
	//BARAJA RESTANTE
	const deckRestante = document.createElement("b");
	//SIMBOLO/PALO
	const nuevoPalo = document.createElement("span");
	
		const nuevaCarta = document.createElement("div");
		nuevaCarta.classList.add('deckCard');
		
		
		deckRestante.innerHTML = naipe[baraja[nxt]];
			if(naipePalo[baraja[nxt]] == "Picas"){
				nuevoPalo.innerHTML = "&spades;";
			}else if(naipePalo[baraja[nxt]] == "Treboles"){
				nuevoPalo.innerHTML = "&clubs;";
			}else if(naipePalo[baraja[nxt]] == "Corazones"){
				nuevoPalo.innerHTML = "&hearts;";
			}else if(naipePalo[baraja[nxt]] == "Diamantes"){
				nuevoPalo.innerHTML = "&diams;";
			}
			
		//COLOR
			if(naipeColor[baraja[nxt]] == "Negra"){
				nuevaCarta.style.color = "white";
			}else if(naipeColor[baraja[nxt]] == "Roja"){
				nuevaCarta.style.color = "red";
			}
			
			
		//CREACION	
		deck.appendChild(nuevaCarta);
		nuevaCarta.appendChild(deckRestante);
		nuevaCarta.appendChild(nuevoPalo);
		
		console.log("RESTANTE EN BATTERY");
		}
	}
	}
	
	
console.log('---------------');
console.log('Tu tienes: '+yourCards.childElementCount+' cartas');
console.log('El rival tiene: '+foeCards.childElementCount+' cartas');
console.log('');
console.log('La siguiente carta es: '+nextCard.value+' cartas');
console.log('Quedan en el Deck: '+deck.childElementCount+' cartas');

}

startGame();