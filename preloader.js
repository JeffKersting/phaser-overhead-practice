class Preloader extends Phaser.Scene {
  constructor() {
    super({key: 'Preloader'});
  }

  preload() {
    this.load.spritesheet('characters', 'assets/characters.png', { frameWidth: 32, frameHeight: 32 } );
    this.load.spritesheet('grass', 'assets/grass.png', { frameWidth: 32 , frameHeight: 32 });
    this.load.spritesheet('disciple', 'assets/disciple.png', { frameWidth: 45 , frameHeight: 51 });
    this.load.audio('jump', 'assets/jump.mp3');


    let progressBar = this.progressBar = this.add.graphics();
    let progressBox = this.progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(340, 270, 320, 50);


    this.load.on('progress', function (value) {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(345, 275, 310 * value, 40);
    });

    this.load.on('fileprogress', function (file) {

    });

    this.load.on('complete', function () {
      game.scene.start('Splash');
      progressBar.destroy();
      progressBox.destroy();
    });
  }
}
