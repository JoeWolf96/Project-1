//need a hero
 class Hero {
	constructor(){
		this.name="Belmont";
		this.health=100;
		this.weapon={
			name:"whip",
			damage:5
		}
	}

	announceHealth() {

		console.log(this.health);

	}

	raiseWeapon() {

		console.log(this.name+" raises his "+this.weapon.name);

	}

}

const belmont = new Hero();
console.log(belmont)
belmont.announceHealth();
belmont.raiseWeapon()
//need an enemy class
//need a monkey
//need a final boss
// disappearing hud
// spells items
//inventory
//log
//movement
