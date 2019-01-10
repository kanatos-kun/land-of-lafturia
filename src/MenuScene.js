export default class MenuScene  extends Phaser.Scene {
            constructor(){
                        super({key:"MenuScene"});
            }

            create(){
                        console.log("la scene MenuScene a bien été chargée");
                        var newGameButton = this.add.image(180,50,'newgame_normal').setInteractive();
                        var continueButton = this.add.image(180,90,'continue_normal').setInteractive();
                        var quitButton = this.add.image(180,130,'quit_normal').setInteractive();

                        newGameButton.on('pointerover',function(){
                                    this.setTexture('newgame_hover');
                        });
                        newGameButton.on('pointerout',function(){
                                    this.setTexture('newgame_normal');
                        });
                        newGameButton.on('pointerup',function(event){
                                    if(event.buttons === 1){
                                       newGameButton.setTexture('newgame_click');
                                       this.scene.start('GamePrototype');
                                    }
                        },this);

                        continueButton.on('pointerover',function(){
                                    this.setTexture('continue_hover');
                        });
                        continueButton.on('pointerout',function(){
                                    this.setTexture('continue_normal');
                        });
                        continueButton.on('pointerup',function(event){
                                    if(event.buttons === 1){
                                       this.setTexture('continue_click');
                                    }
                        },this);

                        quitButton.on('pointerover',function(){
                                    this.setTexture('quit_hover');
                        });
                        quitButton.on('pointerout',function(){
                                    this.setTexture('quit_normal');
                        });
                        quitButton.on('pointerup',function(event){
                                    if(event.buttons === 1){
                                       this.setTexture('quit_click');
                                    }
                        },this);
            }

            update(){

            }

}
