var keys;

export default class MenuScene  extends Phaser.Scene {
            constructor(){
                        super({key:"MenuScene"});
                        this.currentOption;
                        this.optionList;
                        this.gameManager;
                        this.newGameButton;
                        this.continueButton;
            }

            create(){
                        this.gameManager = this.game.manager;
                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );

                        this.currentOption = 0;
                        console.log(Phaser.Input.Keyboard.KeyCodes);
                        console.log("la scene MenuScene a bien été chargée");
                        this.newGameButton = this.add.image(180,90,'newgame_normal').setInteractive();
                        this.continueButton = this.add.image(180,130,'continue_normal').setInteractive();


                        // newGameButton.on('pointerover',function(){
                        //             this.setTexture('newgame_hover');
                        // });
                        // newGameButton.on('pointerout',function(){
                        //             this.setTexture('newgame_normal');
                        // });
                        // newGameButton.on('pointerup',function(event){
                        //             if(event.buttons === 1){
                        //                newGameButton.setTexture('newgame_click');
                        //                this.gameManager = this.game.manager;
                        //                this.gameManager.setWarpPosition("TP:spawnPoint");
                        //                this.scene.start('GamePrototype');
                        //             }
                        // },this);
                        //
                        // continueButton.on('pointerover',function(){
                        //             this.setTexture('continue_hover');
                        // });
                        // continueButton.on('pointerout',function(){
                        //             this.setTexture('continue_normal');
                        // });
                        // continueButton.on('pointerup',function(event){
                        //             if(event.buttons === 1){
                        //                this.setTexture('continue_click');
                        //             }
                        // },this);

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
                                                this.gameManager.setWarpPosition("TP:spawnPoint");
                                                this.scene.start(this.gameManager.location);
                                                // this.scene.start("map_village01");
                                                // this.scene.start("BattleScene",{monster:[0,0,0]});
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
            }


}
