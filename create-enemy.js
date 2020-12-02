class Enemy {
  constructor(scene, enemyType, health, damage) {
    this.scene = scene,
    this.enemyType = enemyType,
    this.health = health,
    this.damage = damage
  }

  attackPlayer(playerStats) {
    playerStats.health -= this.damage;
  }

  createSprite() {
    let sprite = this.scene.add.sprite(790, 175, this.enemyType, 0)
    return sprite
  }
}
