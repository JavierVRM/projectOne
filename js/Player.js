function Player(game) {
  this.game = game;
}

Player.prototype.shotAnimation = function() {
  $("#shoot").fadeIn(50, function() {
    $("#main-weapon2").fadeIn(100, function() {
      $("#main-weapon2").fadeOut(100);
      $("#main-weapon3").fadeIn(100, function() {
        $("#shoot").fadeOut(100);
        $("#main-weapon3").fadeOut(100);
        $("#main-weapon4").fadeIn(100, function() {
          $("#main-weapon4").fadeOut(100);
          $("#main-weapon3").fadeIn(100, function() {
            $("#main-weapon3").fadeOut(100);
            $("#main-weapon2").fadeIn(100, function() {
              $("#main-weapon2").fadeOut(100);
            });
          });
        });
      });
    });
  });
};