//add music to the page cause why not

const music = document.getElementById("myAudio"); 
const isPlaying =false

function togglePlay() {
return myAudio.paused ? myAudio.play() : myAudio.pause();
};
//grabbed from stack overflow after i set it up to make it clean





//need a hero
 class Hero {
    constructor(){
        this.name="Belmont";
        this.health=100;
        this.weapon={
            name:"whip",
            damage:5
        }
        this.inventory={
            potions: 1 ,
            holy_waters: 1,
        }

    }
     fightBegins(Monster , room) {

        const message="an enemy attacks you! press one of the buttons to decide what to do"
        const eventLog=$(".log")

        eventLog.append(message)
        console.log(eventLog.html())

    }
    attack(Monster){ 
        const message=" you attack "+Monster.name+" with "+this.weapon.name+" and deal "+this.weapon.damage+" damage!"
        const eventLog=$(".log");
        eventLog.append(message);

        let  dmg = this.weapon.damage ;
        Monster.health -= dmg
        console.log(Monster.health)
       //enemy attacks
        this.health -= Monster.damage
        console.log(this.health)


       // update hp 
       
       let hp= $(".health")
         hp.value -= this.health;
         
         $(".health").animate({
             width: this.health + "%"
                  },1000);

        //condition to stop fight
        if (Monster.health == 0){

        const message=" you defeated "+ Monster.name
        const eventLog=$(".log");
        eventLog.append(message);

       //end of the fight ui disappears
        $("#skeleton").css("visibility","hidden")
        $("#slogra").css("visibility","hidden")
        
        $(".fight-buttons").css("visibility","hidden")
        }

    }
    attackBoss(Boss){
        const message= "your "+this.weapon.name+" deal "+this.weapon.damage+" damage to "+Boss.name
        const eventLog=$(".log");
        eventLog.append(message);

        let  dmg = this.weapon.damage ;
        Boss.health -= dmg
        console.log(Boss.health)
       //enemy attacks
        this.health -= Boss.damage
        console.log(this.health)


       // update hp 
       
       let hp= $(".health")
         hp.value -= this.health;
         
         $(".health").animate({
             width: this.health + "%"
                  },1000);

        //condition to stop fight
        if (Boss.health == 0){
            $("#dracula").css("visibility","hidden")
            $(".holy-water").css("visibility","hidden")
            $(".fight-buttons").css("visibility","hidden")

        const message=" VICTORY  you slayed "+Boss.name
        alert(message)

        

         }
    
    }

    usePotion(Monster){
        //message
        const message=" you use a potion and restore your HP fully"
        const eventLog=$(".log")
        eventLog.append(message)


        //actual potion functionality
        this.health = 100
        this.inventory.potions -= 1
       
        let element = $(".potions")
        element.remove()

        if(this.inventory.potions== 0){
            const potionButton = $(".potion")
            potionButton.remove()
           }

       

         //hp updates
         let hp= $(".health")
         hp.value -= this.health;
         
         $(".health").animate({
             width: this.health + "%"
                  },1000);
    } 
    useHolyWater(Boss){
        const message=" you use a your HOLY WATER and deal 80 dmg"
        const eventLog=$(".log")
        eventLog.append(message)



        let  dmg = 80 ;
        Boss.health -= dmg
        console.log(Boss.health)




    }

    
 
 }
//create hero

const belmont = new Hero();


console.log(belmont)



 //need an enemy class
class Monster{
    constructor(name,health,damage){
        this.name=name ;
        this.health=health ;
        this.damage=damage 

    }       
}

const skeleton1= new Monster("skeleton",10,2)
const skeleton2= new Monster("skeleton",10,2)
const skeleton3= new Monster("skeleton",10,2)
const skeleton4= new Monster("skeleton",10,2)
const skeleton5= new Monster("skeleton",10,2)
const slogra= new Monster("slogra",20,10)




//need a final boss

class Boss{
    constructior(name,health,damage){
        this.name=name
        this.health=health
        this.damage=damage
    }
}

const dracula = new Monster("Dracula",100,15)


//key 


const key= true

//movement



function onDragStart(event) {
  
    event.dataTransfer
    event.setData('text/plain', event.target.id);
   
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop1(event){

    //movement
    event.preventDefault()
    let position = $("#room1")
    position.append($("#hero-image"))
    position.append($("#skeleton"))


    $("#skeleton").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    belmont.fightBegins(skeleton , $("#room2"))
    //change button function
    document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton1)") 
}


function onDrop2(event){
     event.preventDefault()
  
    let position = $("#room2")
   
    position.append($("#hero-image"))
    position.append($("#skeleton"))
     $("#skeleton").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton2)") 
    
  
}



function onDrop3(event){
     event.preventDefault()
  
    let position = $("#room3")
    position.append($("#hero-image"))
    position.append($("#skeleton"))
      $("#skeleton").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton3)") 
  
}


function onDrop4(event){
     event.preventDefault()
  
    let position = $("#room4")

    position.append($("#hero-image"))
    position.append($("#skeleton"))
     $("#skeleton").css("visibility","visible ")
     $(".fight-buttons").css("visibility","visible")
     document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton4)") 
  
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
    position.append($("#slogra"))

    $("#slogra").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    document.getElementById("fight").setAttribute("onclick","belmont.attack(slogra)") 
  
}


function onDrop7(event){

     event.preventDefault()
     if(key == true){
  
    let position = $("#room7")
    position.append($("#hero-image"))
    position.append($("#dracula"))
    $(".fight-buttons").css("visibility","visible")
    $(".holy-water").css("visibility","visibile")
    document.getElementById("fight").setAttribute("onclick","belmont.attackBoss(dracula)") 


     }
     else {
        const message="The door is locked! You ll need a key to access this"
        const eventLog=$(".log")
        eventLog.append(message)
     }
  
}







