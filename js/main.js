$("document").ready(function() {
    var game = new Game();

    $(".stage-container").click(function(ev) {
        game.player.shotAnimation();
    });
    $("#index-container").click(function() {
        game.intro.frontPageAdvance();
    });
    $("#instructions-container").click(function(){
        game.intro.instructionsAdvance();
    });

});
