export default class Personnage  extends Phaser.GameObjects.Sprite {
            constructor(scene, x, y, texture, frame){
                        super(scene, x, y, texture);
                        this.dialogue;
                        scene.add.existing(this);
                        scene.physics.add.existing(this);
                        this.setFrame(frame);
                        this.setDataEnabled();
                        this.body.setSize(this.width,this.height);
                        this.dialogue_iteration = 0;
            }
}
