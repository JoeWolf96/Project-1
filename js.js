//need a hero
 class Hero {
	constructor(){
		this.name="Belmont";
		this.health=100;
		this.weapon={
			name:"whip",
			damage:5
		}
	    this.location= document.getElementById("#room1")
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
    	console.log("button up working")
    	
    let position = $("#room1").offset()

    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
    this.location=position
        if(position== location) {
    	position= $("#room4").offset();
           $("#hero-image").css({ position:'absolute', top:position.top, left: position.left})
                  }
 
    }
     moveRight(){
     	console.log("button right working")
        let position = $("#room2").offset()

    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});

     }
 }


 //need a room class
 class Room{
 	constructor(){
 		this.room1=$("#room1")
 		this.room2=$("#room2")
 		this.room3=$("#room3")
 		this.room4=$("#room4")
 		this.room5=$("#room5")
 		this.room6=$("#room6")
 		this.room7=$("#room7")

 	}
 }
const map = new Room
console.log(map)



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






