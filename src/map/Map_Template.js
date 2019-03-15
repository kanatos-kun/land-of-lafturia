var keys;
import Personnage from '../objects/Personnage';
export default class Map_Template  extends Phaser.Scene{
            constructor(key, tilemapName){
                        super({key:key});
                        this.tilemapName = tilemapName;
                        this.gameManager;
                        this.hero;
                        this.characters;
                        this.map;
                        this.cursors;
                        this.spacekey;
                        this.debugText;
                        this.debugGraphics;
                        this.dialogueIteration = 0;
                        this.showDialogueBox = false;
                        this.showDebug = false;
                        this.tp;
                        this.gidLayer;
                        this.characterLayer;
                        this.textCam;
                        this.textConfig;
                        this.layer_collision;
            }

            _create(){
                        this.textConfig = [
                                    {
                                                color: '#ffffff',
                                                fontSize:20,
                                                fontFamily: 'troika'
                                    },
                                    {           color: '#ffffff',
                                                fontSize:14,
                                                fontFamily: 'Gadugi'//"Gadugi,Georgia, serif"
                                    }
                        ]
                        // console.log("la scene map_template a bien été chargée");
                        // this.gameManager = this.game.manager;
                        // keys = this.input.keyboard.addKeys( this.gameManager.setKey() );
                        //
                        //
                        // this.spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
                        // this.createMap();
                        // this.physics.world.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels);
                        //
                        //
                        // let heroPosition = {x:this.gameManager.heroPosition.x,y:this.gameManager.heroPosition.y};
                        // this.hero = this.add.sprite(heroPosition.x,heroPosition.y,'monsterstimefantasyrpgspritepack_chara6',1);
                        // this.physics.add.existing(this.hero);
                        // this.hero.setDepth(4);
                        // this.hero.body.setSize(12,12);
                        // this.hero.body.setOffset(6,20);
                        // this.hero.body.setCollideWorldBounds(true);
                        // this.hero.setPosition(heroPosition.x,heroPosition.y);
                        // this.physics.add.collider(this.hero,this.layer_collision);
                        //
                        // this.characters = this.physics.add.group();
                        // this.characters.create(1130,833,"monsterstimefantasyrpgspritepack_monster1",2);
                        // this.characters.create(744,322,"monsterstimefantasyrpgspritepack_monster1",2);
                        // this.characters.create(744,322,"monsterstimefantasyrpgspritepack_monster1",2);
                        // var char = this.characters.getChildren();
                        // for(let i = 0; i <this.characters.getLength(); i++){
                        //             char[i].body.setSize(24,24);
                        //             char[i].body.setOffset(10,40);
                        // }
                        // this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
                        // this.cameras.main.startFollow(this.hero,true,0.52,0.52);
                        // this.cameras.main.setZoom(2);
                        //
                        //
                        // this.cursors = this.input.keyboard.createCursorKeys();
                        // this.debugText={
                        //             heroPositionX:this.add.text(this.gameManager.CAM_X,
                        //                                         this.gameManager.CAM_Y,"position X hero: " + this.hero.x,{ color: '#ffffff', fontSize:10, fontFamily: "Gadugi"}),
                        //             heroPositionY:this.add.text(this.gameManager.CAM_X,
                        //                                         this.gameManager.CAM_Y + 20,"position Y hero: " + this.hero.y,{ color: '#ffffff', fontSize:10, fontFamily: "Gadugi"}),
                        //             information:this.add.text(  this.gameManager.CAM_X,
                        //                                         this.gameManager.CAM_Y + 40,"click 'C' for debug tile : " + this.showDebug,{ color: '#ffffff', fontSize:10,fontFamily: "Gadugi"})
                        // };
                        //
                        // this.debugText.heroPositionX.setDepth(999);
                        // this.debugText.heroPositionY.setDepth(999);
                        // this.debugText.information.setDepth(999);
                        //
                        // this.debugText.heroPositionX.setScale(1);
                        // this.debugText.heroPositionX.setScrollFactor(0);
                        //
                        // this.debugText.heroPositionY.setScale(1);
                        // this.debugText.heroPositionY.setScrollFactor(0);
                        //
                        // this.debugText.information.setScale(1);
                        // this.debugText.information.setScrollFactor(0);
                        //
                        //
                        // this.debugText.heroPositionX.setVisible(false);
                        // this.debugText.heroPositionY.setVisible(false);
                        // this.debugText.information.setVisible(false);
                        //
                        //
                        // this.debugGraphics = this.add.graphics();
                        // this.input.keyboard.on('keydown_C', function (event) {
                        //       this.showDebug = !this.showDebug;
                        //       this.drawDebug();
                        // },this);
                        //
                        //
                        // this.physics.add.overlap(this.hero,this.characters,function(e1, e2){
                        //
                        //             if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                        //                         console.log("combat!");
                        //                         this.scene.sleep("map_forest01");
                        //                         this.scene.run("BattleScene",{monster:[Object.create(this.gameManager.monsterDB[0]) ]});
                        //             }
                        //
                        // },function(){},this);
                        //
                        // this.physics.add.overlap(this.hero,this.tpLayer[0],function(hero, tp){
                        //             if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                        //                         this.gameManager.setWarpPosition(tp.data.x, tp.data.y, tp.data.warp);
                        //                         // this.gameManager.setWarpPosition("TP:map_forest01>village01");
                        //                         this.scene.start(this.gameManager.location);
                        //             }
                        //
                        // },function(){},this);








                        this.gameManager = this.game.manager;
                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );
                        this.textCam = this.cameras.add(0,0,this.game.config.width,this.game.config.height);
                        this.textCam.setScroll(-this.game.config.width,0);
                        console.log(keys);
                        this.spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

                        this.createMap();
                        // heroPosition.x => set position in map in position X
                        // heroPosition.y => set position in map in position Y
                        let heroPosition = {x:this.gameManager.heroPosition.x,y:this.gameManager.heroPosition.y};
                        this.physics.world.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels);
                        this.hero = this.add.sprite(heroPosition.x,heroPosition.y,'monsterstimefantasyrpgspritepack_chara6',1);
                        this.physics.add.existing(this.hero);
                        this.hero.setDepth(4);
                        this.hero.body.setSize(12,12);
                        this.hero.body.setOffset(6,20);
                        this.hero.body.setCollideWorldBounds(true);
                        this.hero.setPosition(heroPosition.x,heroPosition.y);
                        this.physics.add.collider(this.hero,this.layer_collision);

                        // this.dialogueBox = this.add.image( -this.game.config.width + 60,
                        //                                    254,
                        //                                   'dialogueBox');
                      this.dialogueBox =this.add.nineslice(
                            -this.game.config.width + 60, 254,   // this is the starting x/y location
                            293, 61,   // the width and height of your object
                            '_sheet_window_06', // a key to an already loaded image
                            6         // the width and height to offset for a corner slice
                            //6          // (optional) pixels to offset when computing the safe usage area
                            ).setScale(2);
                        this.dialogueBox.setOrigin(0,0);
                        this.dialogueBox.setVisible(false);
                        this.dialogueBox.setDepth(6);
                        this.dialogueText = this.add.text(-this.game.config.width + 80,
                                                          272,
                                                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat");
                        this.dialogueText.setStyle(this.textConfig[0]);
                        this.dialogueText.setOrigin(0,0);
                        this.dialogueText.setVisible(false);
                        this.dialogueText.setDepth(6);
                        this.dialogueText.setMaxLines(3);
                        this.dialogueText.setWordWrapWidth(550);



                        // this.characters = [
                        //             this.physics.add.sprite(1078,879,"monsterstimefantasyrpgspritepack_npc6",8),
                        //             this.physics.add.sprite(925,495,"monsterstimefantasyrpgspritepack_npc4",2),
                        //             this.physics.add.sprite(951,1117,"monsterstimefantasyrpgspritepack_npc3",50),
                        //             this.physics.add.sprite(1576,600,"monsterstimefantasyrpgspritepack_npc6",59)
                        // ];
                        // this.characters[0].setDepth(3);
                        // this.characters[1].setDepth(3);
                        // this.characters[2].setDepth(3);
                        // this.characters[3].setDepth(3);
                        // this.characters[0].dialogue = ["Bonjour jeune etranger.","hohoho","Bonne soirée!"];
                        // this.characters[1].dialogue = ["Vous n'êtes pas d'ici je me trompe?"];
                        // this.characters[2].dialogue = ["Bienvenue au village !"];
                        // this.characters[3].dialogue = ["hohoho"];


                        // this.characters.create(1078,879,"monsterstimefantasyrpgspritepack_npc6",8);
                        // this.characters.create(925,495,"monsterstimefantasyrpgspritepack_npc4",2);
                        // this.characters.create(951,1117,"monsterstimefantasyrpgspritepack_npc3",50);
                        // this.characters.create(1576,600,"monsterstimefantasyrpgspritepack_npc6",59);
                        //
                        // var char = this.characters.getChildren();
                        // this.characters.setDepth(3);
                        // for(let i = 0 ; i < this.characters.getLength(); i++ ){
                        //             switch (i){
                        //                         case 0:
                        //                         char[i].dialogue = ["Bonjour jeune etranger.","hohoho","Bonne soirée!"];
                        //                         break;
                        //                         case 1:
                        //                         char[i].dialogue = ["Vous n'êtes pas d'ici je me trompe?"];
                        //                         break;
                        //                         case 2:
                        //                         char[i].dialogue = ["Bienvenue au village !"];
                        //                         break;
                        //                         case 3:
                        //                         char[i].dialogue = ["Bonjour"];
                        //                         break;
                        //                         default:
                        //                         break;
                        //             }
                        // }


                        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

                                 this.cursors = this.input.keyboard.createCursorKeys();

                                 this.cameras.main.startFollow(this.hero,true,0.52,0.52);
                                 this.cameras.main.setZoom(2);
                                 console.log("widthCamera= " + this.cameras.main.width + " heightCamera= " + this.cameras.main.height);
                                 var add = this.add;
                                 this.debugText={
                                             heroPositionX:this.add.text(-this.game.config.width,
                                                                         0,"position X hero: " + this.hero.x,this.textConfig[1]),
                                             heroPositionY:this.add.text(-this.game.config.width,
                                                                          20,"position Y hero: " + this.hero.y,this.textConfig[1]),
                                             information:this.add.text(  -this.game.config.width,
                                                                          40,"click 'C' for debug tile : " + this.showDebug,this.textConfig[1])
                                 };
                                 this.debugText.heroPositionX.setDepth(999);
                                 this.debugText.heroPositionY.setDepth(999);
                                 this.debugText.information.setDepth(999);




                                 // FONT BUG ////
                                 // WebFont.load({
                                 //             custom: {
                                 //                   families: ['Gadugi']
                                 //                },
                                 //                active: function (){
                                 //                      t = add.text(this.hero.x,
                                 //                      this.hero.y,'tessssssssst',{fontFamily:'Gadugi',fontSize: 64});
                                 //                      t.setDepth(999);
                                 //                      console.log("WEBFONT::CHARGEMENT ET RENDU REUSSI!");
                                 //          },
                                 //          inactive: function (){
                                 //                      console.log("WEBFONT:: BROWSER DONT SUPPORT FONT!");
                                 //          },
                                 //          fontinactive: function(){
                                 //                      console.log("WEBFONT:: FONT CANNOT LOAD!");
                                 //          },
                                 //          fontloading: function(){
                                 //                      console.log("WEBFONT:: LOADING...");
                                 //          }
                                 // });


                                 // WebFont.load({
                                 //     custom: {
                                 //         families: [ 'troika', 'Caroni', 'Gadugi' ]
                                 //     },
                                 //     active: function ()
                                 //     {
                                 //         add.text(heroPosition.x, heroPosition.y, 'The face of the\nmoon was in\nshadow.', { fontFamily: 'Gadugi', fontSize: 80, color: '#ff0000' }).setShadow(2, 2, "#333333", 2, false, true);
                                 //
                                 //         add.text(heroPosition.x,  heroPosition.y +350, 'Waves flung themselves\nat the blue evening.', { fontFamily: 'Caroni', fontSize: 64, color: '#5656ee' });
                                 //         console.log("WEBFONT::CHARGEMENT ET RENDU REUSSI!");
                                 //     },
                                 //     inactive: function (){
                                 //                 console.log("WEBFONT:: BROWSER DONT SUPPORT FONT!");
                                 //     },
                                 //     fontinactive: function(){
                                 //                 console.log(this);
                                 //                 console.log("WEBFONT:: FONT CANNOT LOAD!");
                                 //     },
                                 //     fontloading: function(){
                                 //                 console.log("WEBFONT:: LOADING...");
                                 //     }
                                 // });
                                 // console.log("valeur de T ::=>");

                                 // /FONT BUG ////



                                 // this.debugText.heroPositionX.setScale(1);
                                 // this.debugText.heroPositionX.setScrollFactor(0);
                                 //
                                 // this.debugText.heroPositionY.setScale(1);
                                 // this.debugText.heroPositionY.setScrollFactor(0);
                                 //
                                 // this.debugText.information.setScale(1);
                                 // this.debugText.information.setScrollFactor(0);

                                 this.debugText.heroPositionX.setVisible(false);
                                 this.debugText.heroPositionY.setVisible(false);
                                 this.debugText.information.setVisible(false);

                                 this.debugGraphics = this.add.graphics();
                                 this.input.keyboard.on('keydown_C', function (event) {
                                       this.showDebug = !this.showDebug;
                                       this.drawDebug();
                           },this);

                           this.physics.add.overlap(this.hero,this.characters,function(hero, npc){
                                       let dialogue = npc.data.get("dialogue");
                                       if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {
                                                   this.showDialogueBox = (npc.dialogue_iteration>=dialogue.length?false:true);

                                                   if(this.showDialogueBox === true){
                                                               console.log(dialogue);
                                                               console.log(npc.dialogue_iteration);
                                                               this.dialogueBox.setVisible(true);
                                                               this.dialogueText.setText(dialogue[npc.dialogue_iteration]);

                                                               this.dialogueText.setVisible(true);
                                                   }else{
                                                               this.dialogueBox.setVisible(false);
                                                               this.dialogueText.setVisible(false);
                                                               npc.dialogue_iteration = 0;
                                                               return;
                                                   }
                                                   npc.dialogue_iteration ++;
                                       }

                           },function(){},this);

                           this.physics.add.overlap(this.hero,this.tp,function(hero, tp){
                                       if(Phaser.Input.Keyboard.JustDown(this.spacekey) ) {

                                                   this.gameManager.setWarpPosition(tp.data.x, tp.data.y, tp.data.warp);
                                                   console.log("------------------------------");
                                                   console.log("Data =>");
                                                   console.log(tp.data);
                                                   console.log("------------------------------");
                                                   // this.gameManager.setWarpPosition("TP:village01>map_forest01");
                                                   this.scene.start(this.gameManager.location);
                                       }

                           },function(){},this);



            }

            _update(time,delta){
                        this.hero.body.setVelocity(0);

                        if(this.showDialogueBox === false){
                                    if(keys.LEFT.isDown){
                                                this.hero.body.setVelocityX(-100);
                                                // this.hero.body.setSize(24,12);
                                                // this.hero.body.setOffset(-7,15);

                                                if(         this.hero.anims.currentAnim === null ||
                                                            this.hero.anims.currentAnim.key !=="chara6_1_walk_left"){
                                                            if(keys.UP.isUp && keys.RIGHT.isUp && keys.DOWN.isUp){
                                                                        if(!this.hero.isPlaying){
                                                                                    this.hero.play("chara6_1_walk_left");
                                                                        }else{
                                                                                    this.hero.restart();
                                                                        }
                                                            }
                                                }
                                    }
                                    if(keys.RIGHT.isDown){
                                                this.hero.body.setVelocityX(100);
                                                // this.hero.body.setSize(24,12);
                                                // this.hero.body.setOffset(7,15);
                                                if(         this.hero.anims.currentAnim === null ||
                                                            this.hero.anims.currentAnim.key !=="chara6_1_walk_right"){
                                                            if(keys.UP.isUp && keys.DOWN.isUp && keys.LEFT.isUp){
                                                                if(!this.hero.isPlaying){
                                                                            this.hero.play("chara6_1_walk_right");
                                                                }else{
                                                                            this.hero.restart();
                                                                }
                                                            }
                                                }
                                    }
                                    if(keys.DOWN.isDown){
                                                this.hero.body.setVelocityY(100);
                                                if(         this.hero.anims.currentAnim === null ||
                                                            this.hero.anims.currentAnim.key !=="chara6_1_walk_front"){
                                                            if(keys.UP.isUp && keys.RIGHT.isUp && keys.LEFT.isUp){
                                                                        if(!this.hero.isPlaying){
                                                                                    this.hero.play("chara6_1_walk_front");
                                                                        }else{
                                                                                    this.hero.restart();
                                                                        }
                                                            }
                                                }
                                                // this.hero.body.setSize(12,24);
                                                // this.hero.body.setOffset(7,20);
                                    }
                                    if(keys.UP.isDown ){
                                                this.hero.body.setVelocityY(-100);
                                                // this.hero.body.setSize(12,24);
                                                // this.hero.body.setOffset(7,0);
                                                if(         this.hero.anims.currentAnim === null ||
                                                            this.hero.anims.currentAnim.key !=="chara6_1_walk_back"){
                                                            if(keys.DOWN.isUp && keys.RIGHT.isUp && keys.LEFT.isUp){
                                                                        if(!this.hero.isPlaying){
                                                                                    this.hero.play("chara6_1_walk_back");
                                                                        }else{
                                                                                    this.hero.restart();
                                                                        }
                                                            }
                                                }
                                    }


                                    if(keys.UP.isUp &&
                                       this.hero.anims.currentAnim !== null ){
                                                   if(this.hero.anims.currentAnim.key ==="chara6_1_walk_back"){
                                                               this.hero.anims.pause();
                                                               this.hero.setFrame(37);
                                                   }
                                    }

                                    if(keys.DOWN.isUp &&
                                       this.hero.anims.currentAnim !== null ){
                                                   if(this.hero.anims.currentAnim.key ==="chara6_1_walk_front"){
                                                               this.hero.anims.pause();
                                                               this.hero.setFrame(1);
                                                   }
                                    }

                                    if(keys.RIGHT.isUp &&
                                       this.hero.anims.currentAnim !== null ){
                                                   if(this.hero.anims.currentAnim.key ==="chara6_1_walk_right"){
                                                               this.hero.anims.pause();
                                                               this.hero.setFrame(25);
                                                   }
                                    }

                                    if(keys.LEFT.isUp &&
                                       this.hero.anims.currentAnim !== null ){
                                                   if(this.hero.anims.currentAnim.key ==="chara6_1_walk_left"){
                                                               this.hero.anims.pause();
                                                               this.hero.setFrame(13);
                                                   }
                                    }
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
                        this.debugText.heroPositionX.setVisible(this.showDebug);
                        this.debugText.heroPositionY.setVisible(this.showDebug);
                        this.debugText.information.setVisible(this.showDebug);
                        this.debugText.heroPositionX.setText("position X hero: " + Phaser.Math.FloorTo(this.hero.x) );
                        this.debugText.heroPositionY.setText("position Y hero: " + Phaser.Math.FloorTo(this.hero.y) );
                        this.debugText.information.setText("click 'C' for debug tile : " + this.showDebug);
            }


            createMap(){
                        this.map = this.make.tilemap({key:this.tilemapName});
                        console.log(this.map);
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

                        var tpLayer = this.map.createFromObjects("tp","warp",{key:"gid",frame:1});
                        this.tp = this.physics.add.group();
                        this.gidLayer = this.map.createFromObjects("gid","collision",{key:"gid",frame:0});
                        this.characterLayer = this.map.createFromObjects("characters","NPC",{key:"gid",frame:2});
                        console.log("this.characterLaye=>");
                        console.log(this.characterLayer);
                        for(let i =0 ; i < tpLayer.length;i++){
                                    let _tempObj = {};
                                    _.forEach(tpLayer[i].data.list, function(v, key){
                                                _tempObj[v.name] = v.value;
                                    });

                                    tpLayer[i].data.warp = _tempObj.warp;
                                    tpLayer[i].data.x = _tempObj.x;
                                    tpLayer[i].data.y = _tempObj.y;
                                    this.physics.add.existing(tpLayer[i]);
                                    tpLayer[i].body.setSize(tpLayer[i].width,tpLayer[i].height);
                                    tpLayer[i].setVisible(false);
                                    this.tp.add(tpLayer[i]);
                                    // console.log( tpLayer[i].data );
                        }
                        for(let i =0 ; i < this.gidLayer.length;i++){
                                    this.gidLayer[i].setVisible(false);
                        }

                        this.characters = this.physics.add.group();
                        this.characters.setDepth(999);
                        for(let i =0 ; i < this.characterLayer.length;i++){
                                    let _tempObj = {};
                                    _.forEach(this.characterLayer[i].data.list, function(v, key){
                                                _tempObj[v.name] = v.value;
                                    });
                                    this.characterLayer[i].data.texture = _tempObj.texture;
                                    // this.characterLayer[i].data.frame = _tempObj.frame;
                                    this.characterLayer[i].data.dialogue = _.split(_tempObj.dialogue,'\n\n');
                                    let x = this.characterLayer[i].x;
                                    let y = this.characterLayer[i].y;
                                    let texture = _tempObj.texture;
                                    let frame = _tempObj.frame;
                                    var newCharacter = new Personnage(this,x,y,texture,frame);
                                    // this.add.sprite(x,y,texture);
                                    // newCharacter.data.values.dialogue = _.split(_tempObj.dialogue,'\n\n');
                                    // newCharacter.data.set('dialogue',_.split(_tempObj.dialogue,'\n\n') );
                                    let text_array = _.split(_tempObj.dialogue,'\n\n');
                                    newCharacter.data.set("dialogue",text_array);
                                    this.characters.add(newCharacter);
                                    console.log("---------------------");
                                    console.log("character=>");
                                    console.log(newCharacter);
                                    console.log("---------------------");
                                    this.characterLayer[i].destroy();
                        }

                        // this.physics.add.existing(this.tpLayer[0]);
                        // this.tpLayer[0].body.setSize(this.tpLayer[0].width,this.tpLayer[0].height);

                        // this.layer_collision = this.map.createStaticLayer("collision", tiles, 0,0);
                        console.log("------------------------------");
                        console.log("collision=>!  ");
                        console.log(this.layer_collision);
                        console.log("------------------------------");
                        console.log("------------------------------");
                        console.log("map=>!  ");
                        console.log(this.map);
                        console.log("------------------------------");
                        this.layer_collision.setVisible(false);
                        var gid_collision = this.map.objects[this.map.objects.length - 1].objects[0].gid;
                        this.map.setCollision(gid_collision);

            }
}
