class EnemyStats {
  constructor(health, damage) {
    this.health = health,
    this.damage = damage
  }

  attackPlayer(playerStats) {
    playerStats.health -= this.damage;
  }
}
