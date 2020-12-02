class Splash extends Phaser.Scene {
  constructor() {
    super({key: 'Splash'});
  }

  create() {
    this.player = this.physics.add.sprite(100, 0, 'characters', 23);
    this.player.setGravityY(150);
    this.text = this.add.text (
      380,
      200,
      "SomeGuy Software",
      {
        fontSize: '25px',
        color: '#ffffff',
        fontStyle: 'bold',
        opacity: 0
      }
    )
    this.text.alpha = 0.0

    this.tweens.add({
      targets: this.text,
      x: 380,
      y: 200,
      duration: 2000,
      ease: 'Sine.easeIn',
      alpha: 1
    })

    this.tweens.add({
      targets: this.text,
      x: 380,
      y: 200,
      duration: 2000,
      delay: 2000,
      ease: 'Sine.easeOut',
      alpha: 0
    })

    setTimeout(startNewScene, 4000, 'SceneOne');

  }

  update() {

  }
}
