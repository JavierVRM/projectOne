// function Items (game) {
//     this.game = game;
// }

$("document").ready(function(){
 // CHARACTER CREATE
 function createCharacter () {
     for (var i = 0; i < 10; i++) {
        $("<div class='character' id='character`${></div>").appendTo("#interface-r");
     }
 }

// CHARACTER ASIGN
function  characterAssign () {
    var randomNumber = 0;
    var totalCharacters = document.getElementsByClassName("character");
    for (var i = 0; i < totalCharacters.length; i = i +2 ) {
        $("#character" + i).addClass("caco");
        $("#character" + (i+1)).addClass("police");
    }
        
    setInterval(function(){
        var newRandomNumber = Math.floor(Math.random() * totalCharacters.length);
        if (newRandomNumber != randomNumber) {
            randomNumber = newRandomNumber;
            $("#character" + newRandomNumber).css("display", "block")
        }
       
        
        // var totalCharacters = document.getElementsByClassName("character");
        // var randomNumber = Math.floor(Math.random() * 10);
        // for (var i = 0; i < totalCharacters.length; i++) {
        //     if (randomNumber % 2 === 0) {
        //         totalCharacters[i].classList.add("caco");
        //     } else {
        //         totalCharacters[i].classList.add("police");
        //     }
        // } 

    },1200); 
   
};
characterAssign (); 


// CHARACTER SHOOTED 
var totalHorseheads = 0;
function characterHitted () {
    $(".police").click(function(){
        $(this).removeClass("police");
         $("#green").fadeIn(300, function(){
             $("#green").fadeOut(100)
         })
    });
    $(".caco").click(function(){
        totalHorseheads ++;
         $("<div class='horsehead background-cover'></div>").appendTo("#interface-r");
         $(this).removeClass("caco")

         $("#red").fadeIn(300, function(){
             $("#red").fadeOut(100)
         })
         if (totalHorseheads == 3) {
            setTimeout(function(){ 
                alert ("insert gameOver here"); 
            }, 500); 
        }
     });
 };
 characterHitted ();


 // BULLETS
 var totalBullets = 0;
 function createBullets () {
     for (var i = 0; i < 8; i++) {
         totalBullets++;
         $("<div class='bullet background-cover'></div>").appendTo("#interface");
     }
 };
 createBullets ();
 
 function removeBullets () {
     $(".stage-container").click(function(){
         totalBullets--;
         $(".bullet").last().remove();
         if (totalBullets == 0) {
             setTimeout(function(){
                alert ("insert reload animation here")
             },200)  
         }
     })
 }
 removeBullets (); 

});
