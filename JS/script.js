$("document").ready(function(){
    // var game = new Game();

    // FADE DE INICIO
    $("body").css("display", function() {
        $(this).fadeIn(2000);
    });

    // ASIGNAR CHARACTER
    function  characterAssign () {
        var totalCharacters = document.getElementsByClassName("character");
        for (var i = 0; i < totalCharacters.length; i++) {
            var randomNumber = Math.floor(Math.random() * 10);
            if (randomNumber % 2 === 0) {
                totalCharacters[i].classList.add("caco");
            } else {
                totalCharacters[i].classList.add("police");
            }
        }  
    };
    characterAssign (); 

    // CHARACTER SHOOTED 
    function characterHitted () {
        $(".police").click(function(){
            $(this).removeClass("police");
             $("#green").fadeIn(300, function(){
                 $("#green").fadeOut(100)
             })
        });
        $(".caco").click(function(){
             $("<div class='horsehead'></div>").appendTo("#interface-r");
             $(this).removeClass("caco")
             $("#red").fadeIn(300, function(){
                 $("#red").fadeOut(100)
             })
         });
     }
     characterHitted ();

    // PINTAR CARACTER
    // function createCharacter () {
    //     for (var j = 0; j < 10; j++) {
    //         $("<div class='character'></div>").appendTo(".stage-container");
    //         $(".character").last().addClass("character"+i)
    //     }
    // };
    // createCharacter ();

    // INTERFAZ 
    var totalBullets = 0;
    function createBullets () {
        for (var i = 0; i < 8; i++) {
            totalBullets++;
            $("<div class='bullet'></div>").appendTo("#interface");
        }
    };
    createBullets ();

    function removeBullets () {
        $(".stage-container").click(function(){
            totalBullets--;
            $(".bullet").last().remove();
            if (totalBullets == 0) {
                location.href = "index.html"
            }
        })
    }
    removeBullets ();          
     
    // WEAPON SHOT
    function shot () {
        $("#shoot").fadeIn(10, function(){
            $('#main-weapon2').fadeIn(100,function(){
                $('#main-weapon2').fadeOut(100)
                $('#main-weapon3').fadeIn(100,function(){
                    $("#shoot").fadeOut(100)
                    $('#main-weapon3').fadeOut(100)
                    $('#main-weapon4').fadeIn(100,function(){
                        $('#main-weapon4').fadeOut(100)
                        $('#main-weapon3').fadeIn(100,function(){
                            $('#main-weapon3').fadeOut(100)
                            $('#main-weapon2').fadeIn(100,function(){
                                $('#main-weapon2').fadeOut(100)
                            });
                        });
                    });
                });
            });
        });
    };

    $(".stage-container").click(function(ev){
        shot() ;
    });

    // PASAR A LA INTRO
    $("#index-container").click(function(){
        location.href = "instructions.html";
    });

    // AVANZAR EN LA INTRO
    $("#instructions-container").click(function(){
        if ($(".paragraph").hasClass("display-on")) {
            var displayed = $(".display-on").next();
            $(".display-on").removeClass("display-on").addClass("display-off")
            displayed.removeClass("display-off").addClass("display-on");
        } else {
            location.href = "stage.html";
        } 
    });
});

