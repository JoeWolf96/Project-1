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
     fight() {
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

//log
//found this on stack overflow https://stackoverflow.com/questions/20256760/javascript-console-log-to-html

 // !function(o){console.old=console.log,console.log=function(){var n,e,t="";for(e=0;e<arguments.length;e++)t+='<span class="log-'+typeof(n=arguments[e])+'">',"object"==typeof n&&"object"==typeof JSON&&"function"==typeof JSON.stringify?t+=JSON.stringify(n):t+=n,t+="</span>&nbsp;";o.innerHTML+=t+"<br>",console.old.apply(void 0,arguments)}}
 //    ($("#log"));
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
  
    let position = $("#room1").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
  
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
	 if(belmont.this.key == true){
  
    let position = $("#room7").offset()
    $("#hero-image").css({ position:'absolute', top:position.top, left: position.left});
     }
     else {
     	console.log( " the room is locked! you need a key to access it ")
     }
  
}







