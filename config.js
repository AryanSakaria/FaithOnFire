const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  heigth: 640,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  // scene: {
  //   preload,
  //   create,
  //   update,
  // },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
    debug: false
    },
  }
};

const game = new Phaser.Game(config);

var enemy_1_array = [] 
var tether_1_array = [] 

var enemy_2_array = []
var tether_2_array = [] 

var comic_1_flag = false ; 
var comic_2_flag = false ; 

var found_girl = false  ; 
var returned_home = false; 


get_mid_tether = function(L,R){
  pair = [(L+R)/2,(R-L)/2] ; 
  return pair 
}