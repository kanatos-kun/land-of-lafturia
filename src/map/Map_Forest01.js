var keys;
export default class Map_Forest01  extends Phaser.Scene{
            constructor(){
                        super({key:"map_forest01"});
                        this.gameManager;
                        this.hero;
                        this.characters;
                        this.map;
                        this.cursors;
                        this.spacekey;
                        this.debugText;
                        this.debugGraphics;
                        this.showDebug = false;
                        this.tpLayer;
                        this.layer_collision;
            }

            create(){
                        console.log("la scene map_forest01 a bien été chargée");
                        this.gameManager = this.game.manager;
                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );


                        this.spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
                        this.createMap();
                        this.physics.world.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels);


                        let heroPosition = {x:this.gameManager.heroPosition.x,y:this.gameManager.heroPosition.y};
                        this.hero = this.add.sprite(heroPosition.x,heroPosition.y,'monsterstimefantasyrpgspritepack_chara6',1);
                        this.physics.add.existing(this.hero);
                        this.hero.setDepth(4);
                        this.hero.body.setSize(12,12);
                        this.hero.body.setOffset(6,20);
                        this.hero.body.setCollideWorldBounds(true);
                        this.hero.setPosition(heroPosition.x,heroPosition.y);
                        this.physics.add.collider(this.hero,this.layer_collision);

                        this.characters = this.physics.add.group();
                        this.characters.create(1130,833,"monsterstimefantasyrpgspritepack_monster1",2);
                        this.characters.create(744,322,"monsterstimefantasyrpgspritepack_monster1",2);
                        this.characters.create(744,322,"monsterstimefantasyrpgspritepack_monster1",2);
                        var char = this.characters.getChildren();
                        for(let i = 0; i <this.characters.getLength(); i++){
                                    char[i].body.setSize(24,24);
                                    char[i].body.setOffset(10,40);
                        }
                        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
                        this.cameras.main.startFollow(this.hero,true,0.52,0.52);
                        this.cameras.main.setZoom(2);


                        this.cursors = this.input.keyboard.createCursorKeys();
                        this.debugText={
                                    heroPositionX:this.add.text(this.gameManager.CAM_X,
                                                                this.gameManager.CAM_Y,"position X hero: " + this.hero.x,{ color: '#ffffff', fontSize:10, fontFamily: "Gadugi"}),
                                    heroPositionY:this.add.text(this.gameManager.CAM_X,
                                                                this.gameManager.CAM_Y + 20,"position Y hero: " + this.hero.y,{ color: '#ffffff', fontSize:10, fontFamily: "Gadugi"}),
                                    information:this.add.text(  this.gameManager.CAM_X,
                                                                this.gameManager.CAM_Y + 40,"click 'C' for debug tile : " + this.showDebug,{ color: '#ffffff', fontSize:10,fontFamily: "Gadugi"})
                        };

                        this.debugText.heroPositionX.setDepth(999);
                        this.debugText.heroPositionY.setDepth(999);
                        this.debugText.information.setDepth(999);

                        this.debugText.heroPositionX.setScale(1);
                        this.debugText.heroPositionX.setScrollFactor(0);

                        this.debugText.heroPositionY.setScale(1);
                        this.debugText.heroPositionY.setScrollFactor(0);

                        this.debugText.information.setScale(1);
                        this.debugText.information.setScrollFactor(0);


                        this.debugText.heroPositionX.setVisible(false);
                        this.debugText.heroPositionY.setVisible(false);
                        this.debugText.information.setVisible(false);


                        this.debugGraphics = this.add.graphics();
                        this.input.keyboard.on('keydown_C', function (event) {
                              this.showDebug = !this.showDebug;
                              this.drawDebug();
                        },this);


                        this.physics.add.overlap(this.hero,this.characters,function(e1, e2){

                                    if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                                                console.log("combat!");
                                                this.scene.sleep("map_forest01");
                                                this.scene.run("BattleScene",{monster:[Object.create(this.gameManager.monsterDB[0]) ]});
                                    }

                        },function(){},this);

                        this.physics.add.overlap(this.hero,this.tpLayer,function(hero, tp){
                                    if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                                                this.gameManager.setWarpPosition(tp.data.x, tp.data.y, tp.data.warp);
                                                // this.gameManager.setWarpPosition("TP:map_forest01>village01");
                                                this.scene.start(this.gameManager.location);
                                    }

                        },function(){},this);

            }

            update(time,delta){
                        this.hero.body.setVelocity(0);
                        if(keys.LEFT.isDown){
                                    this.hero.body.setVelocityX(-100);
                        }
                        if(keys.RIGHT.isDown){
                                    this.hero.body.setVelocityX(100);
                        }
                        if(keys.DOWN.isDown){
                                    this.hero.body.setVelocityY(100);

                        }
                        if(keys.UP.isDown){
                                    this.hero.body.setVelocityY(-100);
                        }

                        this.drawDebug();

            }

            drawDebug(){
                        // --------------------------------------------------
                        //                 DEBUG SECTION
                        // --------------------------------------------------
                        this.debugGraphics.clear();
                        if (this.showDebug)
                        {
                            // Pass in null for any of the style options to disable drawing that component
                            this.map.renderDebug(this.debugGraphics, {
                                tileColor: null, // Non-colliding tiles
                                collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
                                faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges
                            });
                        }

                        this.debugText.heroPositionX.setText("position X hero: " + Phaser.Math.FloorTo(this.hero.x) );
                        this.debugText.heroPositionY.setText("position Y hero: " + Phaser.Math.FloorTo(this.hero.y) );
                        this.debugText.information.setText("click 'C' for debug tile : " + this.showDebug);
            }


            createMap(){
                        this.map = this.make.tilemap({key:'map_forest01'});

                        var tiles = [];
                        for(let i = 0; i < this.map.tilesets.length;i++){
                                    let name = this.map.tilesets[i].name;
                                    tiles.push( this.map.addTilesetImage(name,"tileset_"+name) );
                        }

                        for(let i = 0; i < this.map.layers.length;i++){
                                    let name = this.map.layers[i].name;
                                    if(name ==="collision"){
                                       this.layer_collision = this.map.createStaticLayer(name, tiles, 0,0);
                                    }else{
                                        this.map.createStaticLayer(name, tiles, 0, 0);
                                    }
                        }
                        // this.map.createFromObjects('objects',"village",{key:"tp_image"});

                        this.tpLayer = this.map.createFromObjects("tp","warp",{key:"tp_image"});

                        console.log(this.map);
                        for(let i =0 ; i < this.tpLayer.length;i++){
                                    // let tp = this.tpLayer[i];
                                    let _tempObj = {};
                                    _.forEach(this.tpLayer[i].data.list, function(v, key){
                                                _tempObj[v.name] = v.value;
                                    });
                                    this.tpLayer[i].data.warp = _tempObj.warp;
                                    this.tpLayer[i].data.x = _tempObj.x;
                                    this.tpLayer[i].data.y = _tempObj.y;
                                    console.log( this.tpLayer[i].data );
                        }

                        this.physics.add.existing(this.tpLayer[0]);
                        this.tpLayer[0].body.setSize(this.tpLayer[0].width,this.tpLayer[0].height);

                        // this.layer_collision = this.map.createStaticLayer("collision", tiles, 0,0);
                        // this.layer_collision.setVisible(false);
                        // this.map.setCollision(this.layer_collision.tilemap.tilesets[1].firstgid);

            }
}
