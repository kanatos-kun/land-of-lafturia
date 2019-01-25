export default class MapForest01  extends Phaser.Scene{
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
                        this.objectLayer;
                        this.layer_collision;
            }

            create(){
                        console.log("la scene map_forest01 a bien été chargée");
                        this.gameManager = this.game.manager;


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

                        this.characters =[
                                    this.physics.add.sprite(1130,833,"monsterstimefantasyrpgspritepack_monster1",2),
                                    this.physics.add.sprite(744,322,"monsterstimefantasyrpgspritepack_monster1",2),
                                    this.physics.add.sprite(512,44,"monsterstimefantasyrpgspritepack_monster1",2)
                        ];

                        this.characters[0].body.setSize(24,24);
                        this.characters[1].body.setSize(24,24);
                        this.characters[2].body.setSize(24,24);
                        this.characters[0].body.setOffset(10,40);
                        this.characters[1].body.setOffset(10,40);
                        this.characters[2].body.setOffset(10,40);
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

                        this.debugGraphics = this.add.graphics();
                        this.input.keyboard.on('keydown_C', function (event) {
                              this.showDebug = !this.showDebug;
                              this.drawDebug();
                        },this);


                        this.physics.add.overlap(this.hero,this.characters[0],function(e1, e2){


                                    if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                                                console.log("combat!");
                                                this.scene.start("BattleScene",{monster:[0,0,0]});
                                    }

                        },function(){},this);

                        this.physics.add.overlap(this.hero,this.objectLayer[0],function(e1, e2){
                                    if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                                                this.gameManager.setWarpPosition("TP:map_forest01>village01");
                                                this.scene.start(this.gameManager.location);
                                    }

                        },function(){},this);

            }

            update(time,delta){
                        this.hero.body.setVelocity(0);
                        if(this.cursors.left.isDown){
                                    this.hero.body.setVelocityX(-100);
                        }
                        if(this.cursors.right.isDown){
                                    this.hero.body.setVelocityX(100);

                        }
                        if(this.cursors.down.isDown){
                                    this.hero.body.setVelocityY(100);

                        }
                        if(this.cursors.up.isDown){
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

                        var tiles = [
                                    this.map.addTilesetImage('terrain','tileset_terrain'),
                                    this.map.addTilesetImage('water','tileset_water'),
                                    this.map.addTilesetImage('house','tileset_house'),
                                    this.map.addTilesetImage('outside','tileset_outside'),
                                    this.map.addTilesetImage('collision','tileset_collision')
                        ];
                        var layer_ground = this.map.createStaticLayer("ground", tiles, 0, 0);
                        var layer_ground_varyes = this.map.createStaticLayer("ground-varyes", tiles, 0, 0);
                        var layer_hill = this.map.createStaticLayer("hill", tiles, 0, 0);
                        var layer_hill2 = this.map.createStaticLayer("hill2", tiles, 0, 0);
                        var layer_tree = this.map.createStaticLayer("tree", tiles, 0, 0);
                        var layer_tree2 = this.map.createStaticLayer("tree2", tiles, 0, 0);
                        var layer_props = this.map.createStaticLayer("props", tiles, 0, 0);
                        this.objectLayer = this.map.createFromObjects('objects',"village",{key:"tp_image"});
                        this.layer_collision = this.map.createStaticLayer("collision", tiles, 0,0);
                        this.layer_collision.setVisible(false);
                        this.map.setCollision(this.layer_collision.tilemap.tilesets[1].firstgid);
                        this.physics.add.existing(this.objectLayer[0]);
                        this.objectLayer[0].body.setSize(this.objectLayer[0].width,this.objectLayer[0].height);
            }
}
