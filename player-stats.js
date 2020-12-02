class PlayerStats {
  constructor() {
    this.health = 100,
    this.damage = 15
  }

  attackEnemy(enemyStats) {
    enemyStats.health -= this.damage
  }
}
