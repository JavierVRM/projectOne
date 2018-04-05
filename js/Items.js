function Items(game) {
  this.game = game;
  this.drawCharacter();
  this.assignCharacter();
  this.removeCharacter();
}

Items.prototype.drawCharacter = function() {
  for (var i = 0; i < 10; i++) {
    $("<div class='character' id='character" + i + "'></div>").appendTo(
      ".stage-container"
    );
  }
};

Items.prototype.assignCharacter = function() {
  var randomNumber = 0;
  var totalCharacters = document.getElementsByClassName("character");
  for (var i = 0; i < totalCharacters.length; i = i + 2) {
    $("#character" + i).addClass("caco");
    $("#character" + (i + 1)).addClass("police");
  }
  setInterval(function() {
    $("#character" + randomNumber).css("display", "block");
    randomNumber++;
  }, 700);
};
Items.prototype.removeCharacter = function() {
  var totalHorseheads = 0;
  $(".police").click(function() {
    $(this).css("display","none");
    $("#green").fadeIn(300, function() {
      $("#green").fadeOut(100);
    });
  });
  $(".caco").click(function() {
    totalHorseheads++;
    $("<div class='horsehead background-cover'></div>").appendTo(
      "#interface-r"
    );
    $(this).css("display","none");
    $("#red").fadeIn(300, function() {
      $("#red").fadeOut(100);
    });
    if (totalHorseheads == 3) {
      setTimeout(function() {
        document.location = "game-over.html"
      }, 500);
    }
  });
};


