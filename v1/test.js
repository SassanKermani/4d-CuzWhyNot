/*	NOTES

ok so we are going to skip having complex 3d modles for now I lost the coin toss
so we are doing 4d space now 

hyepr cube 
0 is empty
1 is human player
2 is ai player

*/

//base vars
let xLength = 3;		//hardcoded
let yLength = 3;		//hardcoded
let zLength = 3;		//hardcoded
let tLength = 3;		//hardcoded


let hiperCube = [];

players = [];
totalPlayers = 5


// //players
// let player = (x, y, z, t, alive)=>{
// 	this.x = x;
// 	this.y = y;
// 	this.z = z;
// 	this.t = t;
// 	this.alive = alive;
// }


// //adding the players into the players array / inishal set up		hardcoded
// let creatingPlayers = ()=>{
// 	for(let i = 0; i < totalPlayers; i++){
// 		switch(i){
// 			case 0:
// 				players[i] = player(1, 1, 1, 1, true);
// 				break;
// 			case 1:

// 			case 2:
// 				players[i] = players(2, 0, 2, 0, true)
// 				break;
// 			case 3:
// 				players[i] = players(0, 2, 2, 0, true)
// 				break;
// 			case 4:
// 				players[i] = players(2, 2, 2, 2, true)
// 				break;
// 			default:
// 				players[i] = player(null, null, null, null, false);
// 		}
// 	}
// }



//inishaly seting up the hiperCube
let setCueb = ()=>{
	
	for(let i = 0; i > xLength; i++){
		
		hiperCube[i] = [];

		for(let ii = 0; ii > xLength; ii++){
			
			hiperCube[i][ii]= [];

			for(let iii = 0; iii > xLength; iii++){
				
				hiperCube[i][ii][iii] = [];

				for(let iiii = 0; iiii > xLength; iiii++){

					hiperCube[i][ii][iii][iiii];

				}
			}
		}
	}
}


// //adds playrs to cube
// let addPlayersToCube = ()=>{

// 	for(let i = 0; i < players.length; i++){
		
// 		if(players[i].alive = true ){
// 			hiperCube[players[i].x][players[i].y][players[i].z][players[i].t]
// 		}
// 	}
// }


// //handle colitions
// let handleColitions = ()=>{
// 	for(let i = 0; i < players.length; i++){
// 		for(let ii = 0; ii < players.length; ii++){
// 			if(players)										//NEW Chalange make this more
// 		}
// 	}
// }


//sanity cheack
console.log('working')

