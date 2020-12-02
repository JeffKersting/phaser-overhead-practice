function discipleFightAnimation(scene) {
  var discipleFight = scene.anims.create({
    key: 'discipleFight',
    repeat: -1,
    frameRate: 7,
    yoyo: true,
    frames: scene.anims.generateFrameNames('disciple', {
      start: 0,
      end: 4
    })
  })
  return discipleFight;
}

function discipleDeathAnimation(scene) {
  var discipleDeath = scene.anims.create({
    key: 'discipleDeath',
    repeat: 0,
    frameRate: 7,
    frames: scene.anims.generateFrameNames('disciple', {
      start: 5,
      end: 11
    })
  })
  return discipleDeath;
}
