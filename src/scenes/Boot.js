export default class Boot extends Phaser.Scene {
            constructor(){
                        super({key:"Boot"});
            }

            preload(){
                        var game = this;
// ------------------------------------------------------------------------
//                              LOADING FILES
// ------------------------------------------------------------------------

                        //spritesheet files
                        this.load.image('logo','assets/sprites/logo.png');
                        this.load.image('menuScene','assets/sprites/menuScene2.png');

                        //monstertimefantasy spritesheet
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_monster1','assets/atlas/monsterstimefantasyrpgspritepack/monster1.png',{
                                    frameWidth:62,
                                    frameHeight:64
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc6','assets/atlas/monsterstimefantasyrpgspritepack/npc6.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_chara6','assets/atlas/monsterstimefantasyrpgspritepack/chara6.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_chara7','assets/atlas/monsterstimefantasyrpgspritepack/chara7.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_chara8','assets/atlas/monsterstimefantasyrpgspritepack/chara8.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_monster_cacto','assets/atlas/monsterstimefantasyrpgspritepack/monster_cacto.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_elemental','assets/atlas/monsterstimefantasyrpgspritepack/elemental.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_emote6','assets/atlas/monsterstimefantasyrpgspritepack/emote6.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_emote7','assets/atlas/monsterstimefantasyrpgspritepack/emote7.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_emote8','assets/atlas/monsterstimefantasyrpgspritepack/emote8.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_horse1','assets/atlas/monsterstimefantasyrpgspritepack/horse1.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc1','assets/atlas/monsterstimefantasyrpgspritepack/npc1.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc2','assets/atlas/monsterstimefantasyrpgspritepack/npc2.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc3','assets/atlas/monsterstimefantasyrpgspritepack/npc3.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc4','assets/atlas/monsterstimefantasyrpgspritepack/npc4.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc5','assets/atlas/monsterstimefantasyrpgspritepack/npc5.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('monsterstimefantasyrpgspritepack_npc6','assets/atlas/monsterstimefantasyrpgspritepack/npc6.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('over80characterswithanimations_animals1','assets/atlas/over80characterwithanimation/animals1.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('over80characterswithanimations_chara2','assets/atlas/over80characterwithanimation/chara2.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('over80characterswithanimations_military1','assets/atlas/over80characterwithanimation/military1.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('over80characterswithanimations_military2','assets/atlas/over80characterwithanimation/military2.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        this.load.spritesheet('over80characterswithanimations_military3','assets/atlas/over80characterwithanimation/military3.png',{
                                    frameWidth:26,
                                    frameHeight:36
                        });
                        //superpower spritesheet
                        this.load.spritesheet('superpower_rpg-battle-system_paladin','assets/atlas/superpower_rpg-battle-system/char/paladin/sprite-sheet-249x100.png',{
                                    frameWidth:249,
                                    frameHeight:100
                        });
                        this.load.spritesheet('superpower_rpg-battle-system_slime','assets/atlas/superpower_rpg-battle-system/monster/slime/sprite-sheet-141x107.png',{
                                    frameWidth:141,
                                    frameHeight:107
                        });

                        //sprite
                        this.load.image('tp_image','assets/sprites/15-01-19_tpIcon.png');
                        this.load.image('collision_image','assets/sprites/collision.png');
                        this.load.spritesheet('gid','assets/atlas/gid.png',{
                                    frameWidth:16,
                                    frameHeight:16
                        });

                        this.load.image('battleScene_BG','assets/sprites/battleScene_BG.png');
                        this.load.image('battleScene_healthBar2','assets/gui/battleScene_healthBar2.png');
                        this.load.image('battleScene_manaBar2','assets/gui/battleScene_manaBar2.png');
                        this.load.image('battleScene_timeBar2','assets/gui/battleScene_timeBar2.png');
                        this.load.image('battleScene_BarEmpty2','assets/gui/battleScene_BarEmpty2.png');
                        this.load.image('battleScene_UIINFO5','assets/gui/battleScene_UIINFO5.png');

                        this.load.image('dialogueBox','assets/gui/dialogueBox.png');
                        this.load.image('gameOver','assets/sprites/gameover.png');

                        //faceset
                        this.load.image('faceset_paladin','assets/sprites/faceset_paladin.png');

                        //gui
                        this.load.image('_sheet_window_06','assets/gui/_sheet_window_06.png');
                        this.load.image('_sheet_window_06-alpha','assets/gui/_sheet_window_06-alpha.png');

                        //gui menu
                        this.load.image('newgame_normal','assets/gui/newgame_normal.png');
                        this.load.image('newgame_hover','assets/gui/newgame_hover.png');
                        this.load.image('newgame_click','assets/gui/newgame_click.png');
                        this.load.image('continue_normal','assets/gui/continue_normal.png');
                        this.load.image('continue_hover','assets/gui/continue_hover.png');
                        this.load.image('continue_click','assets/gui/continue_click.png');
                        this.load.image('quit_normal','assets/gui/quit_normal.png');
                        this.load.image('quit_hover','assets/gui/quit_hover.png');
                        this.load.image('quit_click','assets/gui/quit_click.png');
                        this.load.image('arrow_down',"assets/gui/small_cursor1.png");
                        this.load.image('arrow_right',"assets/gui/small_cursor2.png");

                        //gui window battleScene
                        this.load.image('battleScene_window_base','assets/gui/battleScene_window_base.png');
                        this.load.image('battleScene_window_choiceChange','assets/gui/battleScene_window_choiceChange.png');
                        this.load.image('battleScene_window_defendre','assets/gui/battleScene_window_defendre.png');
                        this.load.image('battleScene_window_item','assets/gui/battleScene_window_item.png');

                        //tileset
                        this.load.image('tileset_castle','assets/tileset/fantasyrpgtilesetpack/castle.png');
                        this.load.image('tileset_desert','assets/tileset/fantasyrpgtilesetpack/desert.png');
                        this.load.image('tileset_terrain','assets/tileset/fantasyrpgtilesetpack/terrain.png');
                        this.load.image('tileset_house','assets/tileset/fantasyrpgtilesetpack/house.png');
                        this.load.image('tileset_inside','assets/tileset/fantasyrpgtilesetpack/inside.png');
                        this.load.image('tileset_outside','assets/tileset/fantasyrpgtilesetpack/outside.png');
                        this.load.image('tileset_dungeon','assets/tileset/fantasyrpgtilesetpack/dungeon.png');
                        this.load.image('tileset_water','assets/tileset/fantasyrpgtilesetpack/water.png');
                        this.load.image('tileset_world','assets/tileset/fantasyrpgtilesetpack/world.png');
                        this.load.image('tileset_collision','assets/sprites/collision.png');



                        //data
                        //map
                        this.load.tilemapTiledJSON('map_village','assets/data/map/0003 - village01.json');
                        this.load.tilemapTiledJSON('map_forest01','assets/data/map/0004 - forest01.json');
                        this.load.tilemapTiledJSON('map_castle1','assets/data/map/0013 -castle1.json');
                        this.load.tilemapTiledJSON('map_village_castle1','assets/data/map/0014 -village_castle1.json');
                        this.load.tilemapTiledJSON('map_worldmap','assets/data/map/10001 - worldmap.json');
                        this.load.tilemapTiledJSON('map_castle1_inside1','assets/data/map/0015 -castle1-inside1.json');
                        this.load.tilemapTiledJSON('map_castle1_inside2','assets/data/map/0016 -castle1-inside2.json');


                        //bge files
                        this.load.audio('bge_background_air_compressor_pump_loop_01','assets/bge/background_air_compressor_pump_loop_01.wav');
                        this.load.audio('bge_background_air_vent_fan_loop_01','assets/bge/background_air_vent_fan_loop_01.wav');
                        this.load.audio('bge_background_crowd_people_chatter_loop_01','assets/bge/background_crowd_people_chatter_loop_01.wav');
                        this.load.audio('bge_background_room_interior_hum_loop_01','assets/bge/background_room_interior_hum_loop_01.wav');

                        //bgm files
                        this.load.audio('bgm_music_bytes_the_retro_adventure','assets/bgm/prosoundcollection/music_bytes_the_retro_adventure.wav');
                        this.load.audio('bgm_music_calm_green_lake_serenade','assets/bgm/prosoundcollection/music_calm_green_lake_serenade.wav');
                        this.load.audio('bgm_music_calm_tree_of_life','assets/bgm/prosoundcollection/music_calm_tree_of_life.wav');
                        this.load.audio('bgm_music_harp_peaceful_loop','assets/bgm/prosoundcollection/music_harp_peaceful_loop.wav');

                        //script
                        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');


// ------------------------------------------------------------------------
//                              /end CHARGEMENT FILES
// ------------------------------------------------------------------------
var progress= this.add.graphics();
                        this.load.on('filecomplete',function(key, type, data){
                                    if(key ==="logo" ){
                                                game.add.image(347,163,'logo');
                                                progress.depth =2;
                                    }
                        });
                        this.load.on('progress', function (value) {
                                       progress.clear();
                                       progress.fillStyle(0xffffff, 1);
                                       progress.fillRect(5, 354, 690 * value - 10, 15);
                        });

                        this.load.on('complete', function () {

                           progress.destroy();

                        });

            }

            create(){
                        console.log("la scene Boot a bien été chargée");
                        this.setAnimation();
                        WebFont.load({
                           custom: {
                                families: [ 'troika', 'Caroni', 'Gadugi' ]
                           }
                        });
                        var m = this.sound.add('bgm_music_bytes_the_retro_adventure',{loop:true});
                        this.add.image(0,0,'monsterstimefantasyrpgspritepack_animation3');
                        m.play();
                        m.stop();
                        this.scene.start('MenuScene');
            }

            setAnimation(){
                        this.anims.create({
                                    key:"chara6_1_walk_front",
                                    frames: [
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:0,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:1,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:2,
                                                duration:100
                                                }
                                    ],
                                    repeat: -1
                        })
                        this.anims.create({
                                    key:"chara6_1_walk_back",
                                    frames: [
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:36,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:37,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:38,
                                                duration:100
                                                }
                                    ],
                                    repeat: -1
                        })
                        this.anims.create({
                                    key:"chara6_1_walk_right",
                                    frames: [
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:24,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:25,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:26,
                                                duration:100
                                                }
                                    ],
                                    repeat: -1
                        })
                        this.anims.create({
                                    key:"chara6_1_walk_left",
                                    frames: [
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:12,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:13,
                                                duration:100
                                                },
                                                {
                                                key:"monsterstimefantasyrpgspritepack_chara6",
                                                frame:14,
                                                duration:100
                                                }
                                    ],
                                    repeat: -1
                        })
            }
}
