$("document").ready(function(){
    // var game = new Game();

    // FADE DE INICIO
    $("body").css("display", function() {
        $(this).fadeIn(2000);
    });

    // PASAR A LA INTRO
    $("#index-container").click(function(){
        location.href = "instructions.html";
    });

    // AVANZAR EN LA INTRO
    $(".container").click(function(){
        var displayed = $(".display-on").next();
        $(".display-on").removeClass("display-on").addClass("display-off")
        displayed.removeClass("display-off").addClass("display-on").fadeIn("2000");
    });

    // WEAPON SHOT
    function shot() {
        $('#main-weapon2').fadeIn(100,function(){
            $('#main-weapon2').fadeOut(100)
            $('#main-weapon3').fadeIn(100,function(){
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
    };
    $(".stage-container").click(function(){
        shot() ;
    });
     // ASIGNAR POLI O GANSTA 
       
   
   
});

