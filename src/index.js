import 'phaser';
import Boot from './scenes/Boot';
import MenuManager from './scenes/MenuManager';
import SceneManager from './scenes/SceneManager';
import MapManager from './scenes/MapManager';
import MenuScene from './MenuScene';
import GameManager from './GameManager';
import BattleScene from './scenes/battleScene';

// -----------------------------------------
//               IMPORTS MAP
// -----------------------------------------
import Mapvillage01 from './map/village01';
import MapForest01 from './map/forest01';

var keys;
var config = {
    type: Phaser.AUTO,
    width: 696,
    height: 392,
    parent: document.querySelector('id#gameContainer'),
    canvas: document.querySelector('canvas#game'),
    scene: [
            Boot,
            MenuScene,
            SceneManager,
            MenuManager,
            MapManager,
            BattleScene,
            //-----map-----
            Mapvillage01,
            MapForest01
],
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        // debug: true
    }
},
render: {
     pixelArt: true
}
};

function setCanvasSize(width, height){
            document.querySelector('canvas#game').style.width=width + "px";
            document.querySelector('canvas#game').style.height=height + "px";
}


window.onload = function(){
            var game = new Phaser.Game(config);
            game.manager = new GameManager();
            game.manager.setCamPosition(game.config.width, game.config.height);
            game.manager.setDB();
            document.getElementById("buttonSetSize-x1").addEventListener("click",function(){setCanvasSize(696,392)} );
            document.getElementById("buttonSetSize-x2").addEventListener("click",function(){setCanvasSize(1044,588)} );
            document.getElementById("buttonSetSize-x3").addEventListener("click",function(){setCanvasSize(1392,784)} );


            setCanvasSize(696,392);
};
