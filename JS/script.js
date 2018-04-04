$("document").ready(function(){
    // var game = new Game();

    // FADE DE INICIO
    $("body").css("display", function() {
        $(this).fadeIn(2000);
    });
    

    

    // PINTAR CARACTER
    // function createCharacter () {
    //     for (var j = 0; j < 10; j++) {
    //         $("<div class='character'></div>").appendTo(".stage-container");
    //         $(".character").last().addClass("character"+i)
    //     }
    // };
    // createCharacter ();
    

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

