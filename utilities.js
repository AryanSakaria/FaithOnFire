/**
 * playerHit resets the player's state when it dies from colliding with a spike
 * @param {*} player - player sprite
 * @param {*} spike - spike player collided with
 */


function playerHit(player, spike) {
  // Set velocity back to 0
  player.setVelocity(0, 0);
  // Put the player back in its original position
  player.setX(50);
  player.setY(300);
  // Use the default `idle` animation
  player.play('idle', true);
  // Set the visibility to 0 i.e. hide the player
  player.setAlpha(0);
  // Add a tween that 'blinks' until the player is gradually visible
  let tw = this.tweens.add({
    targets: player,
    alpha: 1,
    duration: 100,
    ease: 'Linear',
    repeat: 5,
  });
}

function enemyCollisionRel1(player, enemy){
  alert("Game Over") ; 
  this.scene.stop('gamescene') ; 
  // console.log("Game Over") ; 

}

function enemyCollisionRel2(player, enemy){
  if (found_girl){
    alert("Game Over")
    this.scene.stop('gamescene') ; 
    // console.log("Game Over") ; 
  }
}