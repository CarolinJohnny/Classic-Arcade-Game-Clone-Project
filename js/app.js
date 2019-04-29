// Enemies our player must avoid
var Enemy = function(row, column, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = row;
  this.y = column;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
      this.x += dt * this.speed;
      if(this.x>=505) {
        this.x = -60;
        this.speed = 100 + Math.floor(Math.random()*100+1)
      }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(row, column) {
    this.x = row;
    this.y = column;


  // The image/sprite for our player, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/char-boy.png';
};

// This class requires an update() method
Player.prototype.update = function() {
  if(this.y> 400) {
    this.y = 400;
  }
  if(this.x> 400) {
    this.x = 400;
  }
if ( this.y < 0) {
    this.y = 0;
}
if (this.x < 0) {
  this.x = 0;
}

};

//This class requires a render() method
Player.prototype.render = function() {
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This class requires a handleInput() method.
Player.prototype.handleInput = function() {



};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(0, 60, 50), new Enemy(0, 120, 80),new Enemy(0, 180, 90)];
// Place the player object in a variable called player
let player = new Player(200,500);


  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.
  document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
