class PracticeScene extends Phaser.Scene {
  constructor() {
    super({key: 'PracticeScene'}),
    this.isAsleep = false,
    this.turn = 1
  }

  create() {
    let enemy = new Enemy(this, 'disciple', 100, 10);
    let enemySprite = enemy.createSprite()
    let enemyFight = discipleFightAnimation(this);
    let enemyDeath = discipleDeathAnimation(this);

    enemySprite.setScale(2.5);
    enemySprite.anims.play(enemyFight['key']);
    let enemyHealth =  enemy.health;
    let enemyHealthbox = this.add.graphics();
    this.discipleHealthBox.fillStyle(0x222222, 0.8);
    this.discipleHealthBox.fillRect(755, 250, 100, 25);
    this.discipleHealthBar = this.add.graphics();
    this.discipleHealthBar.fillStyle(0xff0000, 1);
    this.discipleHealthBar.fillRect(760, 255, 90 * (enemyHealth/100), 15);
    this.disciple.flipX = true;

    this.player = this.add.sprite(200, 200, 'characters', 35);
    this.player.setScale(2.5);
    let playerHealth = this.player.health = playerStats.health;
    this.playerHealthBox = this.add.graphics();
    this.playerHealthBox.fillStyle(0x222222, 0.8);
    this.playerHealthBox.fillRect(150, 250, 100, 25);
    this.playerHealthBar = this.add.graphics();
    this.playerHealthBar.fillStyle(0xff0000, 1);
    this.playerHealthBar.fillRect(155, 255, 90 * (playerHealth/100), 15);



    this.playerAttackButton = this.add.rectangle(200, 335, 50,50, 0xff0000).setInteractive();
    this.playerAttackButton.on('pointerdown', () => {
      playerStats.attackEnemy(this.enemyStats)
      this.turn++;
      console.log(this.turn)
      if (this.enemyStats.health <= 0) {
        this.disciple.anims.play(enemyDeath['key']);
        this.discipleHealthBar.clear()
        this.discipleHealthBox.clear()
        setTimeout(stopCurrentScene, 1000, 'SceneTwo')
        setTimeout(startNewScene , 1000, 'SceneOne')
        return
      }
      this.discipleHealthBar.clear()
      this.discipleHealthBar.fillStyle(0xff0000, 1);
      this.discipleHealthBar.fillRect(760, 255, 90 * (this.enemyStats.health/100), 15);
    }, this)


    this.key_P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.input.keyboard.on('keyup_P', function(){
      stopCurrentScene('SceneTwo');
      startNewScene('SceneOne')
    });
  }

  update() {
    if (this.turn % 2 === 0) {
      this.playerAttackButton.disableInteractive()
      this.turn++
      setTimeout(enemyAttack, 1500, this.enemyStats, playerStats, this)
    } else {
      this.playerAttackButton.setInteractive()
    }
  }
}
