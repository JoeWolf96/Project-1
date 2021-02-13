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
        this.key=false


    }
     fightBegins(Monster , room) {
        //prevent belmont from escape
        $('#hero-image').attr('draggable', false);

        let snd = new Audio("walk.wav")
         snd.play()

        const message="--an enemy attacks you! press one of the buttons to decide what to do"
        const eventLog=$(".log")

        eventLog.append(message)
        

    }
    attack(Monster){ 
        //play sound

         let snd = new Audio("whip.wav")
         snd.play()
        

        const message="--you attack "+Monster.name+" with "+this.weapon.name+" and deal "+this.weapon.damage+" damage"
        const eventLog=$(".log");
        eventLog.append(message);

        let  dmg = this.weapon.damage ;
        Monster.health -= dmg

        const enemyHp="--"+Monster.name+" has "+Monster.health+"HP remaining"
        const eventLog2=$(".log");
        eventLog2.append(enemyHp)

        console.log(Monster.health)

       //enemy attacks

        this.health -= Monster.damage
        console.log(this.health)

        if(this.health <=0){
            alert("You Lost, refresh the page to try again")
            $(".fight-buttons").off("click");
         $('#hero-image').attr('draggable', false);
        }


       // update hp 
       
       let hp= $(".health")
         hp.value -= this.health;
         
         $(".health").animate({
             width: this.health + "%"
                  },1000);

        //condition to stop fight
        if (Monster.health <= 0){

        const message="--you defeated "+ Monster.name
        const eventLog=$(".log");
        eventLog.append(message);

       //end of the fight ui disappears and you can move again
       $('#hero-image').attr('draggable', true);
       $("#skeleton").css("visibility","hidden")
        
        
        $(".fight-buttons").css("visibility","hidden")
        }

    }
    attackBoss(Boss){

        let snd = new Audio("whip.wav")
         snd.play()

        const message= "--your "+this.weapon.name+" deal "+this.weapon.damage+" damage to "+Boss.name
        const eventLog=$(".log");
        eventLog.append(message);

        let  dmg = this.weapon.damage ;
        Boss.health -= dmg

          const enemyHp=Boss.name+" has "+Boss.health+"HP remaining"
        const eventLog2=$(".log");
        eventLog2.append(enemyHp)
       //enemy attacks

        this.health -= Boss.damage

        if(this.health <=0){
            alert("You Lost, refresh the page to try again")
            $(".fight-buttons").off("click");
         $('#hero-image').attr('draggable', false);
        }

        



       // update hp 
       
       let hp= $(".health")
         hp.value -= this.health;
         
         $(".health").animate({
             width: this.health + "%"
                  },1000);

        //condition to stop fight
        if (Boss.health <= 0){
            $("#dracula").css("visibility","hidden")
            $(".holy-water").css("visibility","hidden")
            $(".fight-buttons").css("visibility","hidden")

        const message="--VICTORY  you slayed--"+Boss.name
        alert(message)

        
         $(".fight-buttons").off("click");
         $('#hero-image').attr('draggable', false);
             }
    
    }
    attackSlogra(Monster)
    {

        let snd = new Audio("whip.wav")
         snd.play()

        const message="--you attack "+Monster.name+" with "+this.weapon.name+" and deal "+this.weapon.damage+" damage"
        const eventLog=$(".log");
        eventLog.append(message);

        let  dmg = this.weapon.damage ;
        Monster.health -= dmg
        console.log(Monster.health)

        const enemyHp="--"+Monster.name+" has "+Monster.health+"HP remaining"
        const eventLog2=$(".log");
        eventLog2.append(enemyHp)

       //enemy attacks
        this.health -= Monster.damage





        if(this.health <=0){
            alert("You Lost, refresh the page to try again")
            $(".fight-buttons").off("click");
         $('#hero-image').attr('draggable', false);
         $("#dracula").attr("draggable",false)

        }

         
 

        console.log(this.health)


       // update hp 
       
       let hp= $(".health")
         hp.value -= this.health;
         
         $(".health").animate({
             width: this.health + "%"
                  },1000);

        //condition to stop fight
        if (Monster.health <= 0){

        const message="--you defeated "+ Monster.name
        const eventLog=$(".log");
        eventLog.append(message);


       //end of the fight ui disappear
        $("#slogra").remove()
        $('#hero-image').attr('draggable', true);
        
        $(".fight-buttons").css("visibility","hidden")
        //key is now true
          this.key= true

        alert("you found the key! now you can enter the Boss Room")
          //change weapon
          this.weapon ={
            name:"morning star",
            damage:20}

        const newWeapon="--you found your family "+ this.weapon.name
       
        eventLog.append(newWeapon);
        }
          
        

          

    }
    usePotion(Monster){

        let snd = new Audio("potion.wav")
         snd.play()
         
        //message
        const message="--you use a potion and restore your HP fully"
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

        let snd = new Audio("holy.wav")
         snd.play()

        const message="--you use  your HOLY WATER and deal 80 dmg"
        const eventLog=$(".log")
        eventLog.append(message)



        let  dmg = 80 ;
        Boss.health -= dmg

        const enemyHp=Boss.name+" has "+Boss.health+"HP remaining"
        const eventLog2=$(".log");
        eventLog2.append(enemyHp)
       
         this.inventory.holy_waters -= 1
 
        if(this.inventory.holy_waters== 0){
            const holyButton = $("#holywater")
            holyButton.remove()}

        if (Boss.health <= 0){
            $("#dracula").css("visibility","hidden")
            $(".holy-water").css("visibility","hidden")
            $(".fight-buttons").css("visibility","hidden")

        const message="--VICTORY  you slayed--"+Boss.name
        alert(message)

        
         $(".fight-buttons").off("click");
         $('#hero-image').attr('draggable', false);
             }
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






//movement



function onDragStart(event) {
  
    event.dataTransfer
    event.setData('text/plain', event.target.id);
   
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop1(event){
 
    if(skeleton1.health >= 0){

    //movement
    event.preventDefault()
    let position = $("#room1")
    position.append($("#hero-image"))
    position.append($("#skeleton"))


    $("#skeleton").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    belmont.fightBegins()
    //change button function
    document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton1)") 
    }
      else{
       event.preventDefault()
    let position = $("#room1")
    position.append($("#hero-image"))
       
}


function onDrop2(event){
     event.preventDefault()
  
    let position = $("#room2")
    belmont.fightBegins()
   
    position.append($("#hero-image"))
    position.append($("#skeleton"))
     $("#skeleton").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton2)") 
    
  
}



function onDrop3(event){
     event.preventDefault()
     belmont.fightBegins()
  
    let position = $("#room3")
    position.append($("#hero-image"))
    position.append($("#skeleton"))
      $("#skeleton").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    document.getElementById("fight").setAttribute("onclick","belmont.attack(skeleton3)") 
  
}


function onDrop4(event){
     event.preventDefault()
     belmont.fightBegins()
  
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
     belmont.fightBegins()
  
    let position = $("#room6")
    position.append($("#hero-image"))
    position.append($("#slogra"))

    $("#slogra").css("visibility","visible ")
    $(".fight-buttons").css("visibility","visible")
    document.getElementById("fight").setAttribute("onclick","belmont.attackSlogra(slogra)") 
  
}


function onDrop7(event){


    



     event.preventDefault()

     if(belmont.key == true){


     $("#myAudio").remove()
     let snd = new Audio("final_boss.mp3")
     snd.play()

    
     let position = $("#room7")
     position.append($("#hero-image"))
     position.append($("#dracula"))
     $(".fight-buttons").css("visibility","visible")
     $("#holywater").css("visibility","visible")
     document.getElementById("fight").setAttribute("onclick","belmont.attackBoss(dracula)") 
     document.getElementById("holywater").setAttribute("onclick","belmont.useHolyWater(dracula)")


     }
     else {
        const message="The door is locked! You ll need a key to access this"
        alert(message)
     }
  
}







