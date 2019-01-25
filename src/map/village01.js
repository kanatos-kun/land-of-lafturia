import Personnage from '../Personnage';

export default class MapVillage01  extends Phaser.Scene {
// -------------// TODO:
// - Affichage map  => DONE
// - Interraction Personnage => DONE
// - Systeme combat (creer gfx ui/ personnage)
// - Boite de dialogue => DONE
// - changement de zone
//
//
//
//
// ------------------------------------------------------------------------------------------------------------------------
//  GOTO:constructor
// ------------------------------------------------------------------------------------------------------------------------
            constructor(){
                        super({key:"map_village01"});
                        this.gameManager;
                        this.hero;
                        this.characters;
                        this.cursors;
                        this.debugText;
                        this.debugGraphics;
                        this.showDebug = false;
                        this.showDialogueBox = false;
                        this.dialogueBox;
                        this.dialogueText;
                        this.map;
                        this.layer_collision;
                        this.dialogueIteration = 0;
                        this.spacekey;
                        this.objectLayer;
            }
// ------------------------------------------------------------------------------------------------------------------------
//  GOTO:create
// ------------------------------------------------------------------------------------------------------------------------
            create(){
                        console.log("la scene GamePrototype a bien été chargée");
                        this.gameManager = this.game.manager;

                        this.spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

                        this.createMap();
                        // heroPosition.x => set position in map in position X
                        // heroPosition.y => set position in map in position Y
                        let heroPosition = {x:this.gameManager.heroPosition.x,y:this.gameManager.heroPosition.y};
                        this.hero = this.add.sprite(heroPosition.x,heroPosition.y,'monsterstimefantasyrpgspritepack_chara6',1);
                        this.physics.add.existing(this.hero);
                        this.hero.setDepth(4);
                        this.hero.body.setSize(12,12);
                        this.hero.body.setOffset(6,20);
                        this.hero.body.setCollideWorldBounds(true);
                        this.hero.setPosition(heroPosition.x,heroPosition.y);
                        this.physics.add.collider(this.hero,this.layer_collision);

                        this.dialogueBox = this.add.image(this.gameManager.CAM_X + 30,
                                                          this.gameManager.CAM_Y + 127,
                                                          'dialogueBox').setScrollFactor(0);
                        this.dialogueBox.setOrigin(0,0);
                        this.dialogueBox.setVisible(false);
                        this.dialogueBox.setDepth(6);
                        this.dialogueText = this.add.text(this.gameManager.CAM_X + 45,
                                                          this.gameManager.CAM_Y + 136,
                                                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat").setScrollFactor(0);
                        this.dialogueText.setStyle({
                                    color: '#ffffff',
                                    fontSize:10,
                                    fontFamily: "Gadugi"
                        });
                        this.dialogueText.setOrigin(0,0);
                        this.dialogueText.setVisible(false);
                        this.dialogueText.setDepth(6);
                        this.dialogueText.setMaxLines(3);
                        this.dialogueText.setWordWrapWidth(275);


                        this.characters = [
                                    this.physics.add.sprite(1078,879,"monsterstimefantasyrpgspritepack_npc6",8),
                                    this.physics.add.sprite(925,495,"monsterstimefantasyrpgspritepack_npc4",2),
                                    this.physics.add.sprite(951,1117,"monsterstimefantasyrpgspritepack_npc3",50),
                                    this.physics.add.sprite(1576,600,"monsterstimefantasyrpgspritepack_npc6",59)
                        ];
                        this.characters[0].setDepth(3);
                        this.characters[1].setDepth(3);
                        this.characters[2].setDepth(3);
                        this.characters[3].setDepth(3);
                        this.characters[0].dialogue = ["Bonjour jeune etranger.","hohoho","Bonne soirée!"];
                        this.characters[1].dialogue = ["Vous n'êtes pas d'ici je me trompe?"];
                        this.characters[2].dialogue = ["Bienvenue au village !"];
                        this.characters[3].dialogue = ["hohoho"];

                        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

                                 this.cursors = this.input.keyboard.createCursorKeys();

                                 this.cameras.main.startFollow(this.hero,true,0.52,0.52);
                                 this.cameras.main.setZoom(2);
                                 console.log("widthCamera= " + this.cameras.main.width + " heightCamera= " + this.cameras.main.height);
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
                                                   this.showDialogueBox = (this.dialogueIteration>=e2.dialogue.length?false:true);
                                                   console.log("taille tableau dialogue = "+e2.dialogue.length);
                                                   console.log("iteration= " + this.dialogueIteration);
                                                   console.log("condition dialogue: " + (this.dialogueIteration>e2.dialogue.length) ) ;
                                                   console.log("valeur showDialogueBox: " + this.showDialogueBox);
                                                   if(this.showDialogueBox === true){
                                                               console.log("enable dialogueBox");
                                                               this.dialogueBox.setVisible(true);
                                                               console.log(e2.dialogue[this.dialogueIteration]);
                                                               this.dialogueText.setText(e2.dialogue[this.dialogueIteration]);
                                                               this.dialogueText.setVisible(true);
                                                   }else{
                                                               console.log("disable dialogueBox" + " valeur iteration = " + this.dialogueIteration);
                                                               this.dialogueBox.setVisible(false);
                                                               this.dialogueText.setVisible(false);
                                                               this.dialogueIteration = 0;
                                                               return;
                                                   }
                                                   this.dialogueIteration ++;
                                       }

                           },function(){},this);

                           this.physics.add.overlap(this.hero,this.objectLayer[0],function(e1, e2){
                                       if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                                                   this.gameManager.setWarpPosition("TP:village01>map_forest01");
                                                   this.scene.start(this.gameManager.location);
                                       }

                           },function(){},this);


            }
// ------------------------------------------------------------------------------------------------------------------------
//  GOTO:update
// ------------------------------------------------------------------------------------------------------------------------
            update(time, delta){
                    this.hero.body.setVelocity(0);

                        if(this.showDialogueBox === false){
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
                        }

                        this.drawDebug();

            }


// ------------------------------------------------------------------------------------------------------------------------
//  GOTO:debug
// ------------------------------------------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------------------------------------
//  GOTO:createMap
// ------------------------------------------------------------------------------------------------------------------------
            createMap(){
                        this.map = this.make.tilemap({key:'map_village'});

                        var tiles = [
                                    this.map.addTilesetImage('terrain','tileset_terrain'),
                                    this.map.addTilesetImage('water','tileset_water'),
                                    this.map.addTilesetImage('house','tileset_house'),
                                    this.map.addTilesetImage('outside','tileset_outside'),
                                    this.map.addTilesetImage('collision','tileset_collision')

                        ];

                        var layer_background = this.map.createStaticLayer("background", tiles, 0, 0);
                        var layer_environements = this.map.createStaticLayer("environements", tiles, 0, 0);
                        var layer_hills = this.map.createStaticLayer("hill", tiles, 0, 0);
                        var Layer_hills2 = this.map.createStaticLayer("hill2", tiles, 0, 0);
                        var layer_tree = this.map.createStaticLayer("tree", tiles, 0, 0);
                        var layer_house_belowHouse = this.map.createStaticLayer("house_below house", tiles, 0, 0);
                        var layer_house_house2 = this.map.createStaticLayer("house_house2", tiles, 0, 0);
                        var layer_house_house = this.map.createStaticLayer("house_house", tiles, 0, 0);
                        var layer_house_barricade = this.map.createStaticLayer("house_barricade", tiles, 0, 0);
                        var layer_house_decors = this.map.createStaticLayer("house_decors", tiles, 0, 0);
                        var layer_house_decors2 = this.map.createStaticLayer("house_decors2", tiles, 0, 0);
                        var layer_tree2 = this.map.createStaticLayer("tree2", tiles, 0, 0);
                        this.layer_collision = this.map.createStaticLayer("collision", tiles, 0,0);
                        this.objectLayer = this.map.createFromObjects('objects',"forest 01",{key:"tp_image"});

                        this.physics.add.existing(this.objectLayer[0]);
                        this.objectLayer[0].body.setSize(this.objectLayer[0].width,this.objectLayer[0].height);
                        this.layer_collision.setVisible(false);
                        this.map.setCollision(this.layer_collision.tilemap.tilesets[9].firstgid);
                        this.physics.world.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels);
            }


}
