function Player(game) {
  this.game = game;
  this.totalBullets = 4;
  this.drawBullets();
}

Player.prototype.drawBullets = function() {
  $("#interface").html("");
  for (var i = 0; i < this.totalBullets; i++) {
    $("<div class='bullet background-cover'></div>").appendTo("#interface");
  }
};

Player.prototype.hitEffect = function () { 
  
    $(".hit").css("display", "block" );
    $(".hit").css("left", event.x - 30 );
    $(".hit").css("top", event.y  - 30);
    setTimeout(function(){
      $(".hit").css("display", "none" );
    },500)
};

Player.prototype.removeBullets = function() {
  this.totalBullets--;
  $("#interface .bullet:last-child").remove();
  if(this.totalBullets > 0) {
    this.shotAnimation();
  } else if (this.totalBullets == 0) {
    this.reloadWeapon();
    this.totalBullets = 4;
    for (var i = 0; i < this.totalBullets; i++) {
      $("<div class='bullet background-cover'></div>").appendTo("#interface");
    }
  }
};

Player.prototype.reloadWeapon = function() {
  $("body").addClass("pointer-events");
  $("#main-weapon img").attr("src", "images/weapon3.png");
  $("#main-weapon").css("top", "43.5%");
  setTimeout(function() {
    $("body").removeClass("pointer-events");
    $("#main-weapon img").attr("src", "images/weapon1.png");
    $("#main-weapon").css("top", "78%");
  }, 1000);
};
Player.prototype.shotAudio = function play (title) {
    $("<audio>", {
        src: title
    }).each(function () {
        this.play();
    });
}

Player.prototype.shotAnimation = function() {
  $("#shoot").fadeIn(50, function() {
    $("#main-weapon2").fadeIn(160, function() {
      $("#main-weapon2").fadeOut(160);
      $("#main-weapon3").fadeIn(160, function() {
        $("#shoot").fadeOut(160);
        $("#main-weapon3").fadeOut(160);
        $("#main-weapon4").fadeIn(160, function() {
          $("#main-weapon4").fadeOut(160);
          $("#main-weapon3").fadeIn(160, function() {
            $("#main-weapon3").fadeOut(160);
            $("#main-weapon2").fadeIn(160, function() {
              $("#main-weapon2").fadeOut(160);
            });
          });
        });
      });
    });
  });
};
