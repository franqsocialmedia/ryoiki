const puntajes = [2,2,2,2,2,2,2,2,2,2];

var x = 1;
var turno = x;

var num = 2;
var cuadro = num;

function x_o(a){
num = a;
cuadro = document.getElementById(num).innerHTML;
console.log(cuadro);

	if(cuadro == 1 || cuadro == 0){
alert("ESE YA FUE ELEGIDO. ELIJA OTRO POR FAVOR");
	
	}else{

	document.getElementById(num).innerHTML = x;

			console.log("TURNO DEL: "+ turno);
	
		//turno del X
		if(turno == 1){
			puntajes[num] = turno;
			
				console.log("Si revisa X");
			if(turno == puntajes[1] && turno == puntajes[2] && turno == puntajes[3]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[4] && turno == puntajes[5] && turno == puntajes[6]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[7] && turno == puntajes[8] && turno == puntajes[9]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[1] && turno == puntajes[5] && turno == puntajes[9]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[3] && turno == puntajes[5] && turno == puntajes[7]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[1] && turno == puntajes[4] && turno == puntajes[7]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[2] && turno == puntajes[5] && turno == puntajes[8]){
				alert("X GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[3] && turno == puntajes[6] && turno == puntajes[9]){
				alert("X GANO EL JUEGO!!!")
			}else{
				//no pasa nada
				console.log("no pasa nada X");
			}
			turno = 0;
			x = 0;
			document.getElementById('jugador').innerHTML = "O";
			document.getElementById('jugador').value = 0;
				console.log("Cambio de jugador: O");
		//turno del 0
		}else{
			puntajes[cuadro] = turno;
			
				console.log("Si revisa O");
			if(turno == puntajes[1] && turno == puntajes[2] && turno == puntajes[3]){
				
			}else if(turno == puntajes[4] && turno == puntajes[5] && turno == puntajes[6]){
				alert("O GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[7] && turno == puntajes[8] && turno == puntajes[9]){
				alert("O GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[1] && turno == puntajes[5] && turno == puntajes[9]){
				alert("O GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[3] && turno == puntajes[5] && turno == puntajes[7]){
				alert("O GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[1] && turno == puntajes[4] && turno == puntajes[7]){
				alert("O GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[2] && turno == puntajes[5] && turno == puntajes[8]){
				alert("O GANO EL JUEGO!!!")
				
			}else if(turno == puntajes[3] && turno == puntajes[6] && turno == puntajes[9]){
				alert("O GANO EL JUEGO!!!")
			}else{
				console.log("No pasa nada O");
				//no pasa nada
			}
			turno = 1;
			x = 1;
			document.getElementById('jugador').innerHTML = "X";
			document.getElementById('jugador').value = 1;
				console.log("Cambio de jugador: X");
		}
	}
	console.log(cuadro);
}

function reseteo(){
	console.log("reseteado");

	puntajes[0] = 2;
	puntajes[1] = 2;
	puntajes[2] = 2;
	puntajes[3] = 2;
	puntajes[4] = 2;
	puntajes[5] = 2;
	puntajes[6] = 2;
	puntajes[7] = 2;
	puntajes[8] = 2;
	puntajes[9] = 2;
	
	cuadro = 2;
	document.getElementById(1).innerHTML = "-";
	document.getElementById(2).innerHTML = "-";
	document.getElementById(3).innerHTML = "-";
	document.getElementById(4).innerHTML = "-";
	document.getElementById(5).innerHTML = "-";
	document.getElementById(6).innerHTML = "-";
	document.getElementById(7).innerHTML = "-";
	document.getElementById(8).innerHTML = "-";
	document.getElementById(9).innerHTML = "-";
}