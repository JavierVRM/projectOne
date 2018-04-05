$("document").ready(function() {
    var game = new Game();

    $(".stage-container").click(function(event) {
        game.player.hitEffect();
        game.player.removeBullets();
    });
    $("#index-container").click(function() {
        game.intro.frontPageAdvance();
    });
    $("#instructions-container").click(function(){
        game.intro.instructionsAdvance();
    });
    // document.getElementsByClassName("stage-container")[0].addEventListener("click", function(event){
    //     console.log(event);
    //     $(".hit").css("display", "block" );
    //     $(".hit").css("left", event.x - 30 );
    //     $(".hit").css("top", event.y  - 30);
    //     setTimeout(function(){
    //         $(".hit").css("display", "none" );
    //     },500)
    // }); 
});
