const music = document.getElementById("myAudio"); 
const isPlaying =false

function togglePlay() {
return myAudio.paused ? myAudio.play() : myAudio.pause();
};//grabbed from stack overflow after i set it up to make it clean
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
	    this.key=false
	}

	announceHealth() {

	console.log(this.health)
    
	}
	raiseWeapon() {

		console.log(this.name+" raises his "+this.weapon.name);
		
    }
     fightBegins() {
     	const message="a Skeleton attacks you! press one of the buttons to decide what to do"
     	const eventLog=$(".log")
     	eventLog.append(message)
    }
    attack(){ 
    	const message=" ,you attack the skeleton with "+this.weapon.name+" and deal "+this.weapon.damage+" damage!"
     	const eventLog=$(".log")
     	eventLog.append(message)
    }
    usePotion(){
    	const message=", you use a potion and restore your HP for 50"
     	const eventLog=$(".log")
     	eventLog.append(message)
    }

    
 
 }


 //need a room class




 //need an enemy class
class Monster{
	constructor(name,health,damage,position){
		this.name=name ;
		this.health=health ;
		this.damage=damage 
		this.position=$("#room1")

	}
}
const skeleton= new Monster("skeleton",10,1)
console.log(skeleton)

const zombie = new Monster("zombie",15,2)
console.log(zombie)

//inventory
const inventory={
	key:false ,
	HolyWater:80 ,
	Potion:50 ,
    
}
 const items=$(".inventory")
 items.append(inventory)

//create hero

const belmont = new Hero();


console.log(belmont)
belmont.announceHealth();
belmont.raiseWeapon()




//need a final boss
class FinalBoss{
	constructor(name){
        this.name=name
		this.health=100
		this.damage=10
	}
	fight(){

	}
}

const Dracula = new FinalBoss("Dracula")
console.log(Dracula)



//movement



function onDragStart(event) {
  
    event.dataTransfer
    event.setData('text/plain', event.target.id);
   
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop1(event){
	 event.preventDefault()
	 belmont.fightBegins()  
    let position = $("#room1").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
    $("#skeleton").css({ visibility: 'visibile',position:'absolute', top:position.top, left: position.left});
}
function onDrop2(event){
	 event.preventDefault()
  
    let position = $("#room2").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
    
  
}
function onDrop3(event){
	 event.preventDefault()
  
    let position = $("#room3").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
  
}
function onDrop4(event){
	 event.preventDefault()
  
    let position = $("#room4").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
  
}
function onDrop5(event){
	 event.preventDefault()
  
    let position = $("#room5").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
  
}
function onDrop6(event){
	 event.preventDefault()
  
    let position = $("#room6").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
  
}
function onDrop7(event){
	 event.preventDefault()
	 if(inventory.key == true){
  
    let position = $("#room7").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
     }
     else {
     	const message="The door is locked! You ll need a key to access this"
     	const eventLog=$(".log")
     	eventLog.append(message)
     }
  
}







