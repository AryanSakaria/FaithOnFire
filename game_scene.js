gamescene.preload = function () {

  this.load.image('background', 'assets/tilesets/background.png');
  this.load.image('barrels', 'assets/tilesets/barrels.png');
  this.load.image('dark_road', 'assets/tilesets/dark_road.png');
  this.load.image('help_cars2', 'assets/tilesets/help_cars2.png');
  this.load.image('ruins_tileset', 'assets/tilesets/ruins_tileset.png');
  this.load.image('background_2', 'assets/tilesets/background_2.png');
  this.load.image('background_3', 'assets/tilesets/background_3.png');
  this.load.image('background_4', 'assets/tilesets/background_4.png');
  this.load.image('background_5', 'assets/tilesets/background_5.png');
  this.load.image('background_6', 'assets/tilesets/background_6.png');
  this.load.image('background_7', 'assets/tilesets/background_7.png');
  this.load.image('background_8', 'assets/tilesets/background_8.png');
  this.load.image('background_9', 'assets/tilesets/background_9.png');
  this.load.image('background_11', 'assets/tilesets/background_11.png');
  this.load.image('barricade', 'assets/tilesets/barricade.png');
  this.load.image('Blood', 'assets/tilesets/Blood.png');
  this.load.image('school1', 'assets/tilesets/school1.png');


  this.load.tilemapTiledJSON('map', 'assets/tilemaps/riot_begginer2.json');
  this.load.atlas('player', 'assets/images/manfull.png',
    'assets/images/man_atlas.json');
  this.load.atlas('enemy', 'assets/images/kenney_player.png',
    'assets/images/kenney_player_atlas.json');
  this.load.atlas('girl', 'assets/images/girl.png',
    'assets/images/girl_atlas.json');
  this.load.atlas('enemy1', 'assets/images/enemy1.png',
    'assets/images/enemy1_atlas.json');
  this.load.atlas('enemy2', 'assets/images/fighter2.png',
    'assets/images/fighter2_atlas.json');

}

gamescene.create = function () {
  // Create a tile map, which is used to bring our level in Tiled
  // to our game world in Phaser
  const map = this.make.tilemap({ key: 'map' });
  // Add the tileset to the map so the images would load correctly in Phaser
  const tileset1 = map.addTilesetImage('barrels', 'barrels');
  const tileset2 = map.addTilesetImage('dark_road', 'dark_road');
  const tileset3 = map.addTilesetImage('help_cars2', 'help_cars2');
  const tileset4 = map.addTilesetImage('ruins_tileset', 'ruins_tileset');
  const tileset5 = map.addTilesetImage('background', 'background');
  const tileset6 = map.addTilesetImage('background_2', 'background_2');
  const tileset7 = map.addTilesetImage('background_3', 'background_3');
  const tileset8 = map.addTilesetImage('background_4', 'background_4');
  const tileset9 = map.addTilesetImage('background_5', 'background_5');
  const tileset10 = map.addTilesetImage('background_6', 'background_6');
  const tileset11 = map.addTilesetImage('background_7', 'background_7');
  const tileset12 = map.addTilesetImage('background_8', 'background_8');
  const tileset13 = map.addTilesetImage('background_9', 'background_9');
  const tileset14 = map.addTilesetImage('background_11', 'background_11');
  const tileset15 = map.addTilesetImage('barricade', 'barricade');
  const tileset16 = map.addTilesetImage('Blood', 'Blood');
  const tileset17 = map.addTilesetImage('school1', 'school1');
  

  const background = map.createStaticLayer('Background', [tileset4,tileset17, tileset2,tileset5,tileset6,tileset7,tileset8,tileset9,tileset10,tileset11,tileset12,tileset13, tileset14, tileset15, tileset16],0,100) ;
  const houses = map.createStaticLayer('Background Houses',[tileset17,tileset4,tileset2,tileset3,tileset1, tileset15, tileset16, tileset14],0,100) ;
  const housedeco = map.createStaticLayer('Houses Decoration',[tileset17,tileset4,tileset2,tileset3,tileset1, tileset15, tileset16],0,100) ; 
  const platforms = map.createStaticLayer('Platform', [tileset17, tileset1, tileset2, tileset3, tileset4, tileset15, tileset16], 0, 95);
  
  

  this.physics.world.bounds.width = platforms.width;
  this.physics.world.bounds.height = platforms.height;
  platforms.setCollisionByExclusion(-1, true);

  // Add the player to the game world
  this.player = this.physics.add.sprite(9500, 300, 'player');
  this.player.setBounce(0.1); // our player will bounce from items
  this.player.setCollideWorldBounds(true); // don't go out of the map
  this.physics.add.collider(this.player, platforms);

  this.girl = this.physics.add.sprite(500, 300, 'girl');
  this.girl.setBounce(0.1); // our player will bounce from items
  this.girl.setCollideWorldBounds(true); // don't go out of the map
  this.girl.setScale(0.5);
  this.physics.add.collider(this.girl, platforms);
  

  this.physics.add.collider(this.girl,this.player)

  this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'manr',
      start: 2,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1
  });

  // Create an idle animation i.e the first frame
  this.anims.create({
    key: 'idle',
    frames: [{ key: 'player', frame: 'manf1' }],
    frameRate: 10,
  });

  // Use the second frame of the atlas for jumping
  this.anims.create({
    key: 'jump',
frames: this.anims.generateFrameNames('player', {
      prefix: 'manr',
      start: 2,
      end: 7,
    }),
    frameRate: 10,
  });

  this.anims.create({
    key: 'girlwalk',
    frames: this.anims.generateFrameNames('girl', {
      prefix: 'girlr',
      start: 1,
      end: 5,
    }),
    frameRate: 10,
    // repeat: -1
  });

  // Create an idle animation i.e the first frame
  this.anims.create({
    key: 'girlidle',
    frames: [{ key: 'girl', frame: 'girlf1' }],
    frameRate: 10,
  });

  // Use the second frame of the atlas for jumping
  this.anims.create({
    key: 'girljump',
	frames: this.anims.generateFrameNames('girl', {
      prefix: 'girlf',
      start: 1,
      end: 5,
    }),
    frameRate: 10,
  });

  this.anims.create({
    key: 'riot',
    frames: this.anims.generateFrameNames('enemy1', {
      prefix: 'enemy1_right_',
      start: 1,
      end: 9,
    }),
    frameRate: 10,
    // repeat: -1
  });

  this.anims.create({
    key: 'patrol',
    frames: this.anims.generateFrameNames('enemy2', {
      prefix: 'enemy2_right_',
      start: 1,
      end: 8,
    }),
    frameRate: 10,
    // repeat: -1
  });

  enemies_rel1 = this.physics.add.group();
  this.physics.add.collider(enemies_rel1, platforms);
  this.physics.add.collider(enemies_rel1, this.player, enemyCollisionRel1, null, true)

  enemies_rel2 = this.physics.add.group();
  this.physics.add.collider(enemies_rel2, platforms);
  this.physics.add.collider(enemies_rel2, this.player, enemyCollisionRel2, null, true)

  temp = enemies_rel2.create(8000,350,'enemy1') ; 
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([400,8050,2])

  temp = enemies_rel1.create(8000,300,'enemy1') ; 
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([400,8050,1])

  coords = get_mid_tether(7594,8559) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1])

  coords = get_mid_tether(2028,2608) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_1_array.push(temp) ; 
  tether_1_array.push([coords[1],coords[0],2])

  coords = get_mid_tether(2796,3344) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2])

  coords = get_mid_tether(2796,3344) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1])

  coords = get_mid_tether(2796,3344) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_1_array.push(temp) ; 
  tether_1_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(3500,3790) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(4750,5450) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(4748,5455) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(4800,5350) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_1_array.push(temp) ; 
  tether_1_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(4748,5455) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(4850,5350) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_1_array.push(temp) ; 
  tether_1_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(6338,6531) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_1_array.push(temp) ; 
  tether_1_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(6752,7438) ; 
  temp = enemies_rel1.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(6755,7430) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(6760,7420) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(6757,7438) ; 
  temp = enemies_rel2.create(coords[0],300,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(14396,14676) ; 
  temp = enemies_rel1.create(coords[0],230,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(14892,15406) ; 
  temp = enemies_rel1.create(coords[0],230,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.setScale(1.25);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],1]) ; 

  coords = get_mid_tether(14890,15400) ; 
  temp = enemies_rel2.create(coords[0],230,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  coords = get_mid_tether(15540,15780) ; 
  temp = enemies_rel2.create(coords[0],230,'enemy1') ;
  temp.setBounce(0.1) ; 
  temp.setCollideWorldBounds(true) ; 
  temp.setVelocity(50, 20);
  temp.body.immovable = true ; 
  enemy_2_array.push(temp) ; 
  tether_2_array.push([coords[1],coords[0],2]) ; 

  const illusion = map.createStaticLayer('Illusionlayer', [tileset4,tileset14,tileset17], 0, 100);


  // Enable user input via cursor keys
  this.cursors = this.input.keyboard.createCursorKeys();

  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  // make the camera follow the player
  this.cameras.main.startFollow(this.player);

}



// gamescene_created = false;
gamescene.update = function () {
  // console.log(this.player.y)
  // console.log(this.player.x)
  for ( var i = 0 ; i < enemy_1_array.length ; ++i){
    if (tether_1_array[i][2] == 2){
      enemy_1_array[i].play('patrol', true);
    }

    if (tether_1_array[i][2] == 1){
      enemy_1_array[i].play('riot', true);
    }

      if (enemy_1_array[i].body.velocity.x > 0) {
        enemy_1_array[i].setFlipX(false);
      } else if (enemy_1_array[i].body.velocity.x < 0) {
        // otherwise, make them face the other side
        enemy_1_array[i].setFlipX(true);
      }

  }

  for ( var i = 0 ; i < enemy_2_array.length ; ++i){

    if (tether_2_array[i][2] == 2){
      enemy_2_array[i].play('patrol', true);
    }

    if (tether_2_array[i][2] == 1){
      enemy_2_array[i].play('riot', true);
    }

      if (enemy_2_array[i].body.velocity.x > 0) {
        enemy_2_array[i].setFlipX(false);
      } else if (enemy_2_array[i].body.velocity.x < 0) {
        // otherwise, make them face the other side
        enemy_2_array[i].setFlipX(true);
      }

  }

  if (this.cursors.left.isDown) 
  {
    if (returned_home == false){
      this.player.setVelocityX(-200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
      if (found_girl){
        this.girl.setVelocityX(-200) ;
        if(this.girl.body.onFloor()){
          this.girl.play('girlwalk', true);
        }
      }
    }else if (returned_home == true && this.player.x >= 9300){
        this.player.setVelocityX(-200);
        if (this.player.body.onFloor()) {
          this.player.play('walk', true);
        }
        if (found_girl){
          this.girl.setVelocityX(-200) ;
          if(this.girl.body.onFloor()){
            this.girl.play('girlwalk', true);
          }
        }

    }
  } 
  else if (this.cursors.right.isDown) 
  {

  	// console.log(this.player.x)
    // this.cursors.right.isDown = false;
    if (this.player.x <= 9400){
      this.player.setVelocityX(200);
      if (this.player.body.onFloor()) 
      {
        this.player.play('walk', true);
      }
      if (found_girl){
        this.girl.setVelocityX(200) ;
        if(this.girl.body.onFloor()){
          this.girl.play('girlwalk', true);
        }
      }
    }else if (this.player.x >= 9400 && returned_home == true){
      this.player.setVelocityX(200);
      if (this.player.body.onFloor()) 
      {
        this.player.play('walk', true);
      }
      if (found_girl){
        this.girl.setVelocityX(200) ;
        if(this.girl.body.onFloor()){
          this.girl.play('girlwalk', true);
        }
      }
    }
  } 
  else 
  {
    // If no keys are pressed, the player keeps still
    this.player.setVelocityX(0);
    // Only show the idle animation if the player is footed
    // If this is not included, the player would look idle while jumping
    if (this.player.body.onFloor()) {
      this.player.play('idle', true);
    }
    if (found_girl){
      this.girl.setVelocity(0) ;
      if(this.girl.body.onFloor()){
        this.girl.play('girlidle', true);
      }
    }
    
  }

  // Player can jump while walking any direction by pressing the space bar
  // or the 'UP' arrow
  if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
    this.player.setVelocityY(-350);
    this.player.play('jump', true);
    if (found_girl){
      this.girl.setVelocityY(-350) ;
      this.girl.play('girljump', true);
    }
  }

  // If the player is moving to the right, keep them facing forward
  if (this.player.body.velocity.x > 0) {
    this.player.setFlipX(false);
    this.girl.setFlipX(false);
  } else if (this.player.body.velocity.x < 0) {
    // otherwise, make them face the other side
    this.player.setFlipX(true);
    this.girl.setFlipX(true);
  }

  if (this.player.x <= 510 && this.player.x >= 490 && this.player.y >= 350 && found_girl == false){
    found_girl = true 
    this.cursors.right.isDown = false; 
    this.cursors.left.isDown = false; 
    this.cursors.up.isDown = false ; 
    this.scene.switch('scene6');
  }

  if (found_girl == true){
    this.girl.x = this.player.x + 20 ; 
    this.girl.y = this.player.y + 5 ; 
  }

  if (this.player.x >= 9400 && this.player.x <= 9500 && this.player.y >= 350 && found_girl == true && returned_home == false){
    returned_home = true ; 
    this.cursors.right.isDown = false; 
    this.cursors.left.isDown = false; 
    this.cursors.up.isDown = false ;
    this.scene.switch('scene11') ; 
  }

  if (this.player.x <= 18735 && this.player.x >= 18640 ){
    this.scene.switch('scene14');
  }

  //  Enemy Update 
  // Patrol enemy 

  for ( var i = 0 ; i < enemy_1_array.length ; ++i){
    if (enemy_1_array[i].body.velocity.x > 0)
    enemy_1_array[i].body.velocity.x = 50 ; 
  else if (enemy_1_array[i].body.velocity.x < 0)
    enemy_1_array[i].body.velocity.x = -50 ; 
    if ( Math.abs(enemy_1_array[i].x - tether_1_array[i][1]) >= tether_1_array[i][0] ){


      enemy_1_array[i].body.velocity.x = -1 * enemy_1_array[i].body.velocity.x
      enemy_1_array[i].x += 0.1*enemy_1_array[i].body.velocity.x
    }
  }

  // Follow enemy 
  
  for ( var i = 0 ; i < enemy_2_array.length ; ++i){
    // Check if player is around 
    // If not 
    if (enemy_2_array[i].body.velocity.x > 0)
    enemy_2_array[i].body.velocity.x = 50 ; 
  else if (enemy_2_array[i].body.velocity.x < 0)
    enemy_2_array[i].body.velocity.x = -50 ; 
    
    if (Math.abs(this.player.x - enemy_2_array[i].x) >= tether_2_array[i][0]){
      if ( Math.abs(enemy_2_array[i].x - tether_2_array[i][1]) >= tether_2_array[i][0] ){
        enemy_2_array[i].body.velocity.x = -1 * enemy_2_array[i].body.velocity.x
        enemy_2_array[i].x += 0.1*enemy_2_array[i].body.velocity.x
      }
    }
    // If so
    // Follow player within bounds as long as player can be reached
    else {
    if ( Math.abs(enemy_2_array[i].x - tether_2_array[i][1]) <= tether_2_array[i][0] && Math.abs(this.player.x - tether_2_array[i][1]) <= tether_2_array[i][0] && (tether_2_array[i][2] == 1 || (tether_2_array[i][2]==2 && found_girl == true))){
      if (enemy_2_array[i].x - this.player.x < 0){
        if (enemy_2_array[i].body.velocity.x < 0)
          enemy_2_array[i].body.velocity.x = -1 * enemy_2_array[i].body.velocity.x ; 
      }
      else if (enemy_2_array[i].x - this.player.x > 0){

        if (enemy_2_array[i].body.velocity.x > 0)
          enemy_2_array[i].body.velocity.x = -1 * enemy_2_array[i].body.velocity.x ; 
        }
    }
    else {

      if ( Math.abs(enemy_2_array[i].x - tether_2_array[i][1]) >= tether_2_array[i][0] ){
        enemy_2_array[i].body.velocity.x = -1 * enemy_2_array[i].body.velocity.x
        enemy_2_array[i].x += 0.1*enemy_2_array[i].body.velocity.x
      }
    }
    }
  }
}