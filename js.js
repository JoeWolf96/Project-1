//need a hero
 class Hero {
	constructor(){
		this.name="Belmont";
		this.health=100;
		this.weapon={
			name:"whip",
			damage:5
		}
	    this.location= document.getElementsByClassName("room room1")
	}

	announceHealth() {

	console.log(this.health)
    
	}
	raiseWeapon() {

		console.log(this.name+" raises his "+this.weapon.name);
		
    }
     fight() {


    
    }
    moveUp() {
    	console.log("button works")
  //   	handleClick: function(e) {
		// console.log(this)
	 //         }
          
  //           const button = $(".button-up")
  //           button.addEventListener("click", e => moveUp.handleClick(e))

    }
     announceLocation(){
     	console.log(this.location)
     }
 }


 //need a room class



 //need an enemy class
class Monster{
	constructor(name,health,damage){
		this.name=name ;
		this.health=health ;
		this.damage=damage 

	}
}
const skeleton= new Monster("skeleton",10,1)
console.log(skeleton)

const zombie = new Monster("zombie",15,2)
console.log(zombie)

//inventory

class Inventory{
	constructor(){
		this.healthPotion="Health Potion"
		this.cross="Cross"
	}
	heal(){

	}

}


//create hero

const belmont = new Hero();


console.log(belmont)
belmont.announceHealth();
belmont.raiseWeapon()

window.onload = function(){
        const inventoryBox = document.getElementById("inventory");
        const inventory= new Inventory()
       

       inventoryBox.value=inventory
          }


//need a final boss
class FinalBoss{
	constructor(){
		this.health=100
		this.damage=10
	}


}


//log

//movement






