scene1.preload = function(){
  this.load.image('scene1','assets/scenes/f1.png');
  this.load.image('imgButtonStartNormal','assets/images/imgButtonStartNormal.png');
  
}
scene1.create =  function(){
  this.add.image(50, 0, 'scene1').setOrigin(0,0);
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene2');
    this.scene.stop('scene1');

    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene2.preload = function(){
  this.load.image('scene2','assets/scenes/f2.png') ; 
}
scene2.create = function(){
  this.add.image(320,320,'scene2') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();

  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene3');
    this.scene.stop('scene2');

    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene3.preload = function(){
  this.load.image('scene3','assets/scenes/f3.jpg') ; 
}
scene3.create = function(){
  this.add.image(360,320,'scene3') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene4');
    this.scene.stop('scene3');
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}
scene4.preload = function(){
  this.load.image('scene4','assets/scenes/f4.png') ; 
}
scene4.create = function(){
  this.add.image(360,320,'scene4') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene5');
    this.scene.stop('scene4');

    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}
scene5.preload = function(){
  this.load.image('scene5','assets/scenes/f5.png') ; 
}
scene5.create = function(){
  this.add.image(360,320,'scene5') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('gamescene');
    this.scene.stop('scene5')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene6.preload = function(){
  this.load.image('scene6','assets/scenes/f6.png') ; 
}
scene6.create = function(){
  this.add.image(360,320,'scene6') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene7');
    this.scene.stop('scene6')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene7.preload = function(){
  this.load.image('scene7','assets/scenes/f7.png') ; 
}
scene7.create = function(){
  this.add.image(360,320,'scene7') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene8');
    this.scene.stop('scene7')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene8.preload = function(){
  this.load.image('scene8','assets/scenes/f8.png') ; 
}
scene8.create = function(){
  this.add.image(360,320,'scene8') ; 
  btnStart = this.add.sprite(640, 620, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene9');
    this.scene.stop('scene8')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene9.preload = function(){
  this.load.image('scene9','assets/scenes/f9.png') ; 
}
scene9.create = function(){
  this.add.image(360,320,'scene9') ; 
  btnStart = this.add.sprite(395, 325, 'imgButtonStartNormal').setInteractive();
  btnStart2 = this.add.sprite(470, 360, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene10');
    this.scene.stop('scene9')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);

  btnStart2.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene_end1');
    this.scene.stop('scene9')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene10.preload = function(){
  this.load.image('scene10','assets/scenes/f10.png') ; 
}
scene10.create = function(){
  this.add.image(360,320,'scene10') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('gamescene');
    this.scene.stop('scene10')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene_end1.preload = function(){
  this.load.image('scene_end1','assets/scenes/scene_end1.jpeg') ; 
}
scene_end1.create = function(){
  this.add.image(360,320,'scene_end1') ; 
  btnStart = this.add.sprite(640, 640, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    // this.scene.switch('gamescene');
    this.scene.stop('scene_end1') ; 
    alert("Game Over")
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}


scene11.preload = function(){
  this.load.image('scene11','assets/scenes/f11.jpg') ; 
}
scene11.create = function(){
  this.add.image(360,320,'scene11') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene12');
    this.scene.stop('scene11')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene12.preload = function(){
  this.load.image('scene12','assets/scenes/f12.jpg') ; 
}
scene12.create = function(){
  this.add.image(360,320,'scene12') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene13');
    this.scene.stop('scene12')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene13.preload = function(){
  this.load.image('scene13','assets/scenes/f13.jpg') ; 
}
scene13.create = function(){
  this.add.image(360,320,'scene13') ; 
  btnStart = this.add.sprite(520, 245, 'imgButtonStartNormal').setInteractive();
  btnStart2 = this.add.sprite(520, 320, 'imgButtonStartNormal').setInteractive();
  
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene_end2');
    this.scene.stop('scene13')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);

  btnStart2.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('gamescene');
    this.scene.stop('scene13')
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);

}

scene14.preload = function(){
  this.load.image('scene14','assets/scenes/f14.png') ; 
}
scene14.create = function(){
  this.add.image(360,320,'scene14') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    this.scene.switch('scene15');
    this.scene.stop('scene14')
    // alert("Game over")
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene15.preload = function(){
  this.load.image('scene15','assets/scenes/f15.jpg') ; 
}
scene15.create = function(){
  this.add.image(360,320,'scene15') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    // this.scene.switch('scene15');
    this.scene.stop('scene15')
    alert("Game over")
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}

scene_end2.preload = function(){
  this.load.image('scene_end2','assets/scenes/f14alt.jpg') ; 
}
scene_end2.create = function(){
  this.add.image(360,320,'scene_end2') ; 
  btnStart = this.add.sprite(590, 590, 'imgButtonStartNormal').setInteractive();
  btnStart.on('pointerdown', function(event){
    // console.log("inner");
    // this.scene.switch('gamescene');
    this.scene.stop('scene_end2')
    alert("Game over")
    // console.log("scene stopped")
    // console.log("game scene resumed")
    
  }, this);
}