var keys;

export default class GameOverScene  extends Phaser.Scene {

            constructor(){
                        super({key:"GameOverScene"});
                        this.gameManager;
            }
            create(){
                        this.gameManager = this.game.manager;
                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );
                        this.add.image(0,0,"gameOver").setOrigin(0);
            }
            update(){
                        if(Phaser.Input.Keyboard.JustDown(keys.SPACE) ){
                                    this.scene.stop( this.gameManager.location );
                                    this.scene.start("MenuScene");
                        }
            }
}
