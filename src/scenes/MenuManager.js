export default class MenuManager extends Phaser.Scene {
            constructor(){
                        super({key:"MenuManager"});
            }

            create(){
                        console.log("la scene MenuManager a bien été chargée");

                        this.input.on('pointerup',function(){
                                    this.scene.start("SceneManager");
                                    this.scene.sleep("MenuManager");
                        },this);
            }

}
