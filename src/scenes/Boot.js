export default class Boot extends Phaser.Scene {
            constructor(){
                        super({key:"Boot"});
            }

            preload(){
                        var game = this;
// ------------------------------------------------------------------------
//                              CHARGEMENT FILES
// ------------------------------------------------------------------------

                        //spritesheet files
                        this.load.image('logo','assets/sprites/logo.png');
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

                        this.load.image('battleScene_BG','assets/sprites/battleScene_BG.png');
                        this.load.image('battleScene_healthBar','assets/gui/battleScene_healthBar.png');
                        this.load.image('battleScene_healthBar2','assets/gui/battleScene_healthBar2.png');
                        this.load.image('battleScene_healthBarEmpty','assets/gui/battleScene_healthBarEmpty.png');
                        this.load.image('battleScene_manaBar','assets/gui/battleScene_manaBar.png');
                        this.load.image('battleScene_manaBar2','assets/gui/battleScene_manaBar2.png');
                        this.load.image('battleScene_manaBarEmpty','assets/gui/battleScene_manaBarEmpty.png');
                        this.load.image('battleScene_timeBar','assets/gui/battleScene_timeBar.png');
                        this.load.image('battleScene_timeBar2','assets/gui/battleScene_timeBar2.png');
                        this.load.image('battleScene_timeBarEmpty','assets/gui/battleScene_timeBarEmpty.png');
                        this.load.image('battleScene_BarEmpty2','assets/gui/battleScene_BarEmpty2.png');
                        this.load.image('battleScene_UIINFO','assets/gui/battleScene_UIINFO.png');
                        this.load.image('battleScene_UIINFO2','assets/gui/battleScene_UIINFO2.png');
                        this.load.image('battleScene_UIINFO3','assets/gui/battleScene_UIINFO3.png');
                        this.load.image('battleScene_UIINFO4','assets/gui/battleScene_UIINFO4.png');
                        this.load.image('battleScene_UIINFO5','assets/gui/battleScene_UIINFO5.png');

                        this.load.image('battleScene_BarEmpty','assets/gui/battleScene_BarEmpty.png');
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

                        var m = this.sound.add('bgm_music_bytes_the_retro_adventure',{loop:true});
                        this.add.image(0,0,'monsterstimefantasyrpgspritepack_animation3');
                        m.play();
                        m.stop();
                        this.scene.start('MenuScene');
            }
}
