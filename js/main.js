$("document").ready(function() {
    var game = new Game();

    $(".stage-container").click(function(event) {
        game.player.hitEffect();
        game.player.removeBullets();
        game.player.shotAudio('audios/shot.mp3')  
    });
    $("#index-container").click(function() {
        game.intro.frontPageAdvance();
    });
    $("#instructions-container").click(function(){
        game.intro.instructionsAdvance();
    });
    $(".play").click(function(){
        game.intro.playAgain();
    });
});

