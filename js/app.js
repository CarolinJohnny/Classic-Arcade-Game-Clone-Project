// Enemies our player must avoid
var Enemy = function(row, column, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = row;
  this.y = column;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/Star.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += dt * this.speed;
  if (this.x >= 505) {
    this.x = -60;
    this.speed = 200 + Math.floor(Math.random() * 100 + 1)
  }
  if(player.x + 50 > this.x && player.x < this.x + 50 && player.y < this.y + 50
   && player.y +50 > this.y) {
      player.reset();
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
  this.sprite = 'images/char-princess-girl.png';
};

// This class requires an update() method
Player.prototype.update = function() {
  if (this.y > 400) {
    this.y = 400;
  }
  if (this.x > 400) {
    this.x = 400;
  }
  if (this.y < -19) {
    this.y = 400;
    this.x = 200;
    modal.classList.toggle("show-modal");
  }
  if (this.x < 0) {
    this.x = 0;
  }

};

//This class requires a render() method
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(){
  this.x = 200;
  this.y = 500;
};

// This class requires a handleInput() method.
Player.prototype.handleInput = function(KeyDown) {
  switch (KeyDown) {
    case 'left':
      this.x -= 90;
      break;
    case 'up':
      this.y -= 90;
      break;
    case 'right':
      this.x += 90;
      break;
    case 'down':
      this.y += 90;
      break;
  }



};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(0, 75, 230), new Enemy(0, 160, 400), new Enemy(0, 240, 500), new Enemy(0, 75, 230)];
// Place the player object in a variable called player
let player = new Player(200, 500);


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

// Modal Popup
let modal = document.querySelector(".modal");
//let againButton = document.querySelector(".again-button");
