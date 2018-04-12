
/*----------  Vars  ----------*/


//base vars
let xLength = 3;		//hardcoded
let yLength = 3;		//hardcoded
let zLength = 3;		//hardcoded
let tLength = 3;		//hardcoded

let hiperCube = [];

let nuberOfPlanets = 5;

let planet = ()=>{
	// location
	x;
	y;
	z;
	t;

	//other vars
	ownedBy;
	numberOfArmysThatPlanetGenorates;

}

let nuberOfPlayers = 2;

let player = ()=>{
	id;					//name
	// planets = [];	//all the planets the pleyr ouns	//should be on planet

}

planets = [];
players = [];

/*----------  FUNCTIONS  ----------*/


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

//set up planets
let setPlanets = ()=>{	//this is going to change as time gose on
	for(let i = 0; i < nuberOfPlanets; i++){
		//hardcoded for now will fix later NOT DONE YET
		switch(i){
			case 0:
				planets[i] = planets();
				break;
			case 1:
				planets[i] = planets();
				break;
			case 2:
				planets[i] = planets();
				break;
			case 3:
				planets[i] = planets();
				break;
			case 4:
				planets[i] = planets();
				break;
			default:
				planets[i] = planets();
		}
	}
}

