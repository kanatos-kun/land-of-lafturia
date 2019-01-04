export default class PrototypeGameScene  extends Phaser.Scene {
            constructor(){
                        super({key:"MapManager"});
            }

            create(){
                        console.log("la scene PrototypeGameScene a bien été chargée");

                        this.input.on('pointerup',function(){
                                    this.scene.start("MenuManager");
                                    this.scene.sleep("MapManager");
                        },this);
            }
}
