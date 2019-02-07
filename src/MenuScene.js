var keys;

export default class MenuScene  extends Phaser.Scene {
            constructor(){
                        super({key:"MenuScene"});
                        this.currentOption;
                        this.optionList;
                        this.gameManager;
                        this.newGameButton;
                        this.continueButton;
                        // this.tweenEXP;
            }

            create(){
                        this.gameManager = this.game.manager;

                        this.tweenEXP = this.tweens.addCounter({
                                    duration:10000,
                                    ease:"Circ.easeIn",
                                    from:15,
                                    to:8000000,
                                    paused: true

                        });

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
                        this.newGameButton = this.add.image(180,90,'newgame_normal').setInteractive();
                        this.continueButton = this.add.image(180,130,'continue_normal').setInteractive();
            }

            update(){
                        if(Phaser.Input.Keyboard.JustDown(keys.DOWN) ){
                                    this.currentOption ++;
                                    if(this.currentOption > 1 ){
                                                this.currentOption = 0;
                                    }

                        }

                        if(Phaser.Input.Keyboard.JustDown(keys.UP) ){
                                    this.currentOption --;
                                    if(this.currentOption < 0 ){
                                                this.currentOption = 1;
                                    }
                        }

                        if(Phaser.Input.Keyboard.JustDown(keys.SPACE) ){
                                    if(this.currentOption === 0){
                                                //reset la base de donnée
                                                this.gameManager.setDB();
                                                // this.gameManager.heros = [ Object.create(this.gameManager.heroDB[0]) ];
                                                this.gameManager.setWarpPosition("TP:village01>map_forest01");
                                                this.scene.start(this.gameManager.location);
                                                // this.scene.start("map_village01");
                                                // this.scene.start("BattleScene",{monster:[
                                                //             this.gameManager.monsterDB[0]
                                                //             ]});
                                    }
                        }

                        if(this.currentOption === 0){
                                    this.newGameButton.setTexture('newgame_hover');
                        }else{
                                    this.newGameButton.setTexture('newgame_normal');
                        }

                        if(this.currentOption === 1){
                                    this.continueButton.setTexture('continue_hover');
                        }else{
                                    this.continueButton.setTexture('continue_normal');
                        }

                        if(Phaser.Input.Keyboard.JustDown(keys.T) ){
                                    this.tweenEXP.play();
                        }

                        if(this.tweenEXP.isPlaying() ){
                                    // console.log(this.tweenEXP.totalElapsed);
                                    if((this.tweenEXP.totalElapsed % 100)>=90 ){
                                                var value = Phaser.Math.FloorTo(this.tweenEXP.getValue() );
                                                console.log(value);
                                                // console.log(this.tweenEXP.totalElapsed % 100);

                                    }
                        }
            }


}
