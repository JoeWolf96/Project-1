//add music to the page cause why not

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

	}

	announceHealth() {

	    const message="HP:"+this.health
	    console.log(message)
        const health=$(".HP")
        health.append(message)
    
	}
	raiseWeapon() {

		console.log(this.name+" raises his "+this.weapon.name);
		
    }
     fightBegins() {
     	const message="a Skeleton attacks you! press one of the buttons to decide what to do"
     	const eventLog=$(".log")
     	eventLog.append(message)
    }
    attack(Monster){ 
    	const message=" ,you attack the skeleton with "+this.weapon.name+" and deal "+this.weapon.damage+" damage!"
     	const eventLog=$(".log");
     	eventLog.append(message);

     	let  dmg = this.weapon.damage ;
     	Monster.health -= dmg
     	console.log(Monster.health)

     	if(Monster.health <= 0){

        const message=" you defeated your enemy"
     	const eventLog=$(".log");
     	eventLog.append(message);

     	$("#skeleton").remove()

     	}










    }
    usePotion(){
    	const message=", you use a potion and restore your HP for 50"
     	const eventLog=$(".log")
     	eventLog.append(message)
    }

    
 
 }
//create hero

const belmont = new Hero();


console.log(belmont)
belmont.announceHealth();
belmont.raiseWeapon()


 //need an enemy class
class Monster{
	constructor(name,health,damage,position){
		this.name=name ;
		this.health=health ;
		this.damage=damage 
		this.position=$("#room1")

	}
	announceHealth(){
		console.log(this.health)
	}
}




const skeleton= new Monster("skeleton",10,1)
console.log(skeleton)
skeleton.announceHealth();





//inventory
const inventory={
	key:false ,
	HolyWater:80 ,
	Potion:50 ,
    
}






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
    let position = $("#room1")
    
    position.append($("#hero-image"))

    position.append($("#skeleton"))
    $("#skeleton").css("visibility","visibile ")


}
function onDrop2(event){
	 event.preventDefault()
  
    let position = $("#room2")
    position.append($("#hero-image"))
    
  
}
function onDrop3(event){
	 event.preventDefault()
  
    let position = $("#room3")
    position.append($("#hero-image"))
  
}
function onDrop4(event){
	 event.preventDefault()
  
    let position = $("#room4")
    position.append($("#hero-image"))
  
}
function onDrop5(event){
	 event.preventDefault()
  
    let position = $("#room5")
    position.append($("#hero-image"))
  
}
function onDrop6(event){
	 event.preventDefault()
  
    let position = $("#room6")
    position.append($("#hero-image"))
  
}
function onDrop7(event){
	 event.preventDefault()
	 if(inventory.key == true){
  
    let position = $("#room7")
    position.append($("#hero-image"))
     }
     else {
     	const message="The door is locked! You ll need a key to access this"
     	const eventLog=$(".log")
     	eventLog.append(message)
     }
  
}







