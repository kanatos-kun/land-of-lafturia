import 'phaser';
import MenuManager from './scenes/MenuManager';
import SceneManager from './scenes/SceneManager';
import MapManager from './scenes/MapManager';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [SceneManager,
            MenuManager,
            MapManager
   ]
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprite/logo.png');
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
