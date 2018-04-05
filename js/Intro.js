function Intro(game) {
    this.game = game;
    this.globalFadeIn();
};
  
Intro.prototype.globalFadeIn = function (){
    $("body").css("display", function() {
        $(this).fadeIn(1000);
    });
};

Intro.prototype.frontPageAdvance = function () {
    location.href = "instructions.html";
};

Intro.prototype.instructionsAdvance = function () {
    var displayed = $(".display-on").next();
    if ($(".paragraph").hasClass("display-on")) {
        $(".display-on").removeClass("display-on").addClass("display-off");
        displayed.removeClass("display-off").addClass("display-on");
    } else {
        location.href = "stage.html";
    } 
    console.log(displayed)
};
        










