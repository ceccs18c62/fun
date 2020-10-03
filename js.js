

const gameState = {};


  

  function preload() {
  
    // Load in the sprite sheet below:
		this.load.spritesheet('codey','https://cors-anywhere.herokuapp.com/https://sosproject2014djj.files.wordpress.com/2014/06/pygmy_sprite_preview.png',{ frameWidth:999, frameHeight: 1180 })
    
  }


  function create() {
    // gameState.active is true if the game is playble (not game over)
    gameState.active = true;

    // Creates the background image
    // Creates platforms group
    gameState.player=this.physics.add.sprite(1500,800,'codey').setScale(.19);
    gameState.player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    })
  }

 function update() {
    if (gameState.active) {
     
        gameState.player.setVelocityX(-152);
        // Add your code below:
			gameState.player.anims.play('run',true)
        
      
    }
     }

     



const config = {
  type: Phaser.AUTO,
  width: 1500,
  height: 260,
  backgroundColor:"#7FFFD4",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1500 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);


