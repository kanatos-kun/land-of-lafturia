var keys;

export default class MenuScene  extends Phaser.Scene {
            constructor(){
                        super({key:"MenuScene"});
                        this.currentOption;
                        this.optionList;
                        this.gameManager;
                        this.newGameButton;
                        this.continueButton;
                        this.textMenu;
                        this.textConfig;
                        this.cursorImg;
                        // this.tweenEXP;
            }

            init(){
                        //  Inject our CSS
                        var element = document.createElement('style');

                        document.head.appendChild(element);

                        var sheet = element.sheet;

                        var styles = '@font-face { font-family: "troika"; src: url("assets/fonts/troika.otf") format("opentype"); }\n';

                        sheet.insertRule(styles, 0);

                        styles = '@font-face { font-family: "Caroni"; src: url("assets/fonts/Caroni-Regular.otf") format("opentype"); }';

                        sheet.insertRule(styles, 0);
                        console.log(sheet);

            }

            create(){
                        this.gameManager = this.game.manager;
                        this.add.image(0,0,'menuScene').setOrigin(0);
                        this.textConfig = [
                                    {
                                                color:'#ffffff',
                                                fontSize:14,
                                                fontFamily:'Times New Roman'
                                    },
                                    {
                                                color:'#cccccc',
                                                fontSize:14,
                                                fontFamily:'Times New Roman'
                                    }
                        ]
                        this.cursorImg = {
                                    img: this.add.image(15,355,'arrow_right'),
                                    position: [
                                                {x:15,y:355},
                                                {x:116,y:355},
                                                {x:234,y:355}
                                    ]
                        }
                        this.tweenEXP = this.tweens.addCounter({
                                    duration:10000,
                                    ease:"Circ.easeIn",
                                    from:15,
                                    to:8000000,
                                    paused: true

                        });

                        var add = this.add;
                        var input = this.input;
                        this.textMenu = [
                                    this.add.text(26,346,"new game",this.textConfig[0]),
                                    this.add.text(135,346,"load",this.textConfig[0]),
                                    this.add.text(248,346,"credits",this.textConfig[0])
                        ]
                        // WebFont.load({
                        //     custom: {
                        //         families: [ 'troika', 'Caroni', 'Gadugi' ]
                        //     },
                        //     active: function ()
                        //     {
                        //         add.text(32, 32, 'The face of the\nmoon was in\nshadow.', { fontFamily: 'Gadugi', fontSize: 80, color: '#ff0000' }).setShadow(2, 2, "#333333", 2, false, true);
                        //
                        //         add.text(150, 350, 'Waves flung themselves\nat the blue evening.', { fontFamily: 'Caroni', fontSize: 64, color: '#5656ee' });
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

                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );
                  //       this.add.nineslice(
                  //             110, 110,   // this is the starting x/y location
                  //             100, 100,   // the width and height of your object
                  //             '_sheet_window_06', // a key to an already loaded image
                  //             6         // the width and height to offset for a corner slice
                  //             //6          // (optional) pixels to offset when computing the safe usage area
                  // ).setScale(2);
                        this.currentOption = 0;
                        console.log(Phaser.Input.Keyboard.KeyCodes);
                        console.log("la scene MenuScene a bien été chargée");
                        // this.newGameButton = this.add.image(180,90,'newgame_normal').setInteractive();
                        // this.continueButton = this.add.image(180,130,'continue_normal').setInteractive();
            }

            update(){
                        if(Phaser.Input.Keyboard.JustDown(keys.RIGHT) ){
                                    this.currentOption ++;

                                    if(this.currentOption > this.cursorImg.position.length - 1 ){
                                                this.currentOption = 0;
                                    }
                                    this.cursorImg.img.setPosition(this.cursorImg.position[this.currentOption].x,
                                                               this.cursorImg.position[this.currentOption].y);
                        }

                        if(Phaser.Input.Keyboard.JustDown(keys.LEFT) ){
                                    this.currentOption --;

                                    if(this.currentOption < 0 ){
                                                this.currentOption = this.cursorImg.position.length - 1;
                                    }
                                    this.cursorImg.img.setPosition(this.cursorImg.position[this.currentOption].x,
                                                               this.cursorImg.position[this.currentOption].y);
                        }

                        if(Phaser.Input.Keyboard.JustDown(keys.SPACE) ){
                                    if(this.currentOption === 0){
                                                //reset la base de donnée
                                                this.gameManager.setDB();
                                                // this.gameManager.heros = [ Object.create(this.gameManager.heroDB[0]) ];
                                                this.gameManager.setWarpPosition(388,245,"map_worldmap");
                                                this.scene.start(this.gameManager.location);
                                                // this.scene.start("map_village01");
                                                // this.scene.start("BattleScene",{monster:[
                                                //             this.gameManager.monsterDB[0]
                                                //             ]});
                                    }
                        }

                        // if(this.currentOption === 0){
                        //             this.newGameButton.setTexture('newgame_hover');
                        // }else{
                        //             this.newGameButton.setTexture('newgame_normal');
                        // }
                        //
                        // if(this.currentOption === 1){
                        //             this.continueButton.setTexture('continue_hover');
                        // }else{
                        //             this.continueButton.setTexture('continue_normal');
                        // }

                        if(Phaser.Input.Keyboard.JustDown(keys.T) ){
                                    this.tweenEXP.play();
                        }

                        if(this.tweenEXP.isPlaying() ){
                                    // console.log(this.tweenEXP.totalElapsed);
                                    if((this.tweenEXP.totalElapsed % 100)>=90 ){
                                                var value = Phaser.Math.FloorTo(this.tweenEXP.getValue() );
                                                console.log(value);

                                    }
                        }
            }


}
