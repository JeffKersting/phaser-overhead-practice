class SceneOne extends Phaser.Scene {
  constructor() {
    super({key: 'SceneOne'}),
    this.isAsleep = false;
  }

  preload() {

  }

  create() {
    this.aGrid = new AlignGrid({scene: this, cols: 30, rows: 20});
    createMap(0, 599, this, 'grass', 17)
    this.disciple = this.physics.add.sprite(800, 500, 'disciple', 0);
    this.player = this.physics.add.sprite(100, 551.5, 'characters', 35);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.input.keyboard.on('keyup_P', function(){
      stopCurrentScene('SceneOne');
      startNewScene('SceneTwo');
    });

    this.physics.add.collider(this.player, this.disciple, function(){
      stopCurrentScene('SceneOne');
      startNewScene('SceneTwo');
    })

    this.anims.create({
      key: 'playerWalk',
      repeat: -1,
      frameRate: 8,
      frames: this.anims.generateFrameNames('characters', {
        start: 35,
        end: 40
      })
    });

    this.input.keyboard.on('keyup_D', function(event) {
      this.player.anims.stop()
    }, this);

    this.input.keyboard.on('keyup_A', function(event) {
      this.player.anims.stop()
    }, this);

    this.input.keyboard.on('keyup_W', function(event) {
      this.player.anims.stop()
    }, this);

    this.input.keyboard.on('keyup_S', function(event) {
      this.player.anims.stop()
    }, this);
  }




  update() {
    if (this.key_A.isDown) {
      moveLeft('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.key_D.isDown) {
      moveRight('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.key_W.isDown) {
      moveUp('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.key_S.isDown) {
      moveDown('SceneOne');
      this.player.anims.play('playerWalk', true);
    }

    if (this.player.x < this.disciple.x) {
      this.disciple.flipX = true
    } else {
      this.disciple.flipX = false
    }
  }
}
