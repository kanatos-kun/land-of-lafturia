export default class SceneManager extends Phaser.Scene {
            constructor(){
                        super({key:"SceneManager"});
            }

            create(){
                        console.log("la scene SceneManager a bien été chargée");

                        this.input.on('pointerup',function(){
                                    this.scene.start("MapManager");
                                    this.scene.sleep("SceneManager");
                        },this);
            }
}
