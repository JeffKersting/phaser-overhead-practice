let config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0}
    }
  },

  scene: [ Preloader, Splash, SceneOne, SceneTwo ]
}

let game = new Phaser.Game(config);

let playerStats = new PlayerStats();

function updatePlayerLoader(value) {
  game.scene.scenes[0].player.x += 310 * value;
}

function startNewScene(scene) {

  if (game.scene.scenes[game.scene.getIndex(scene)].isAsleep) {
    game.scene.wake(scene)
    game.scene.resume(scene)
    game.scene.scenes[game.scene.getIndex(scene)].isAsleep = true;
  }
  game.scene.start(scene);
}


function stopCurrentScene(scene, sceneObject) {
  game.scene.pause(scene);
  game.scene.sleep(scene);
  game.scene.scenes[game.scene.getIndex(scene)].isAsleep = true;
}


function placeBlock(scene, position, key, spritesheet) {
  let block = scene.add.sprite(0,0, key, spritesheet);
  scene.aGrid.placeAtIndex(position, block);
  Align.scaleToGameW(block, .055);
}

function createMap(fromPosition, toPosition, scene, key, spritesheet) {
  for (let i = fromPosition; i < toPosition + 1; i++) {
    placeBlock(scene, i, key, spritesheet)
  }
}

function moveRight(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = false;
  player.x += 2.5;
}

function moveLeft(scene) {
  let player = game.scene.keys[scene].player;
  player.flipX = true;
  player.x -= 2.5;
}

function moveUp(scene) {
  let player = game.scene.keys[scene].player;
  player.y -= 2.5;
}

function moveDown(scene) {
  let player = game.scene.keys[scene].player;
  player.y += 2.5;
}

function enemyAttack(enemyStats, playerStats, scene) {
  enemyStats.attackPlayer(playerStats);
  scene.playerHealthBar.clear()
  scene.playerHealthBar.fillStyle(0xff0000, 1);
  scene.playerHealthBar.fillRect(155, 255, 90 * (playerStats.health/100), 15);

}
