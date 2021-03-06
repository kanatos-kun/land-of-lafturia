import 'phaser';
// Assuming you use use ES6 imports...
import { Plugin as NineSlicePlugin } from 'phaser3-nineslice';
import Boot from './scenes/Boot';
import MenuManager from './scenes/MenuManager';
import SceneManager from './scenes/SceneManager';
import MapManager from './scenes/MapManager';
import MenuScene from './scenes/MenuScene';
import GameManager from './GameManager';
import BattleScene from './scenes/BattleScene';
import GameOverScene from './scenes/GameOverScene';
import BattleSceneVictory from './scenes/BattleSceneVictory';

// -----------------------------------------
//               IMPORTS MAP
// -----------------------------------------
import Map_Village01 from './map/Map_Village01';
import Map_Village01_test from './map/Map_Village01_test';
import Map_Forest01 from './map/Map_Forest01';
import Map_Forest01_test from './map/Map_Forest01_test';
import Map_Worldmap from './map/Map_Worldmap';
import Map_Castle1 from './map/Map_Castle1';
import Map_VillageCastle1 from './map/Map_VillageCastle1';
import Map_Castle1_inside1 from './map/Map_Castle1_inside1';
import Map_Castle1_inside2 from './map/Map_Castle1_inside2';



var keys;
var config = {
    type: Phaser.AUTO,
    width: 696,
    height: 392,
    parent: document.querySelector('id#gameContainer'),
    canvas: document.querySelector('canvas#game'),
    plugins: {
                global: [ NineSlicePlugin.DefaultCfg ],
            },
    scene: [
            Boot,
            MenuScene,
            SceneManager,
            MenuManager,
            MapManager,
            BattleScene,
            GameOverScene,
            BattleSceneVictory,
            //-----map-----
            Map_Village01,
            Map_Village01_test,
            Map_Forest01,
            Map_Forest01_test,
            Map_Worldmap,
            Map_Castle1,
            Map_Castle1_inside1,
            Map_Castle1_inside2,
            Map_VillageCastle1
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
