import 'phaser';
import Boot from './scenes/Boot';
import MenuManager from './scenes/MenuManager';
import SceneManager from './scenes/SceneManager';
import MapManager from './scenes/MapManager';
import GamePrototype from './GamePrototype';
import MenuScene from './MenuScene';


var config = {
    type: Phaser.AUTO,
    width: 348,
    height: 196,
    parent: document.querySelector('id#gameContainer'),
    canvas: document.querySelector('canvas#game'),
    scene: [
            Boot,
            MenuScene,
            GamePrototype,
            SceneManager,
            MenuManager,
            MapManager
],
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: true
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
            document.getElementById("buttonSetSize-x1").addEventListener("click",function(){setCanvasSize(348,196)} );
            document.getElementById("buttonSetSize-x2").addEventListener("click",function(){setCanvasSize(696,392)} );
            document.getElementById("buttonSetSize-x3").addEventListener("click",function(){setCanvasSize(1044,588)} );


            setCanvasSize(696,392);
};
