function Game() {
  this.totalBullets = 8;
  this.drawBullets();
  this.player = new Player();
  this.intro = new Intro();
}

Game.prototype.drawBullets = function() {
  $("#interface").html("");
  for (var i = 0; i < this.totalBullets; i++) {
    $("<div class='bullet background-cover'></div>").appendTo("#interface");
  }
  if (this.totalBullets == 0) {
    alert("Play reload animation");
    this.totalBullets = 8;
  }
};

