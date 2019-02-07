export default class GameManager extends Phaser.Scene{
            constructor(){
                        super({key:"GameManager"});
                        this.keys;
                        this.location;
                        this.warpPosition;
                        this.CAM_X;
                        this.CAM_Y;
                        this.heroParty = {
                                    hero1:"hero1",
                                    hero2:"hero2",
                                    hero3:"hero3",
                                    hero4:"hero4"
                        };
                        this.heroDB;
                        this.heros;
                        this.monsterDB;
                        this.gold = 200;
                        this.heroPosition = {x: 0, y:0};
            }

            setDB(){
                        this.heroDB = [
                                    {
                                                name: "Max",
                                                level: 1,
                                                experience:[ 292 ,
                                                1358 ,
                                                3225 ,
                                                5892 ,
                                                9361 ,
                                                13633 ,
                                                18708 ,
                                                24589 ,
                                                31278 ,
                                                38776 ,
                                                47086 ,
                                                56211 ,
                                                66152 ,
                                                76913 ,
                                                88498 ,
                                                100910 ,
                                                114153 ,
                                                128232 ,
                                                143150 ,
                                                158913 ,
                                                175526 ,
                                                192994 ,
                                                211322 ,
                                                230518 ,
                                                250587 ,
                                                271536 ,
                                                293372 ,
                                                316103 ,
                                                339737 ,
                                                364283 ,
                                                389748 ,
                                                416143 ,
                                                443477 ,
                                                471760 ,
                                                501004 ,
                                                531218 ,
                                                562416 ,
                                                594610 ,
                                                627812 ,
                                                662036 ,
                                                697297 ,
                                                733610 ,
                                                770997 ,
                                                809471 ,
                                                849040 ,
                                                889727 ,
                                                931554 ,
                                                974541 ,
                                                1018712 ,
                                                1064091 ,
                                                1110693 ,
                                                1158546 ,
                                                1207675 ,
                                                1258109 ,
                                                1309882 ,
                                                1363026 ,
                                                1417571 ,
                                                1473552 ,
                                                1531007 ,
                                                1589976 ,
                                                1650499 ,
                                                1712623 ,
                                                1776395 ,
                                                1841867 ,
                                                1909092 ,
                                                1978131 ,
                                                2049046 ,
                                                2121905 ,
                                                2196781 ,
                                                2273753 ,
                                                2352922 ,
                                                2434373 ,
                                                2518188 ,
                                                2604488 ,
                                                2693387 ,
                                                2785017 ,
                                                2879545 ,
                                                2977132 ,
                                                3077967 ,
                                                3182233 ,
                                                3290148 ,
                                                3401993 ,
                                                3518057 ,
                                                3638663 ,
                                                3764192 ,
                                                3895134 ,
                                                4032020 ,
                                                4175472 ,
                                                4326260 ,
                                                4485329 ,
                                                4653858 ,
                                                4833359 ,
                                                5025817 ,
                                                5233935 ,
                                                5461563 ,
                                                5714521 ,
                                                6002410 ,
                                                6343312 ,
                                                6780935 ,
                                                7536646 ,
                                                ],
                                                currentExperience:0,
                                                maxHP: 170,
                                                currentHP: 170,
                                                maxMP: 20,
                                                currentMP: 20,
                                                str: 5,
                                                int: 5,
                                                wis: 5,
                                                dex: 5,
                                                agi: 5,
                                                end: 5,
                                                def: 20,
                                                atk: 20,
                                                mdef: 10,
                                                dodge: 10,
                                                crit: 10,
                                                currentTime: 30,
                                                maxTime:100
                                    }
                        ];

                     this.monsterDB = [
                                 {
                                             name:"Slime",
                                             level: 1,
                                             experience: 45,
                                             gold: 15,
                                             maxHP: 32,
                                             currentHP: 32,
                                             maxMP:  0,
                                             currentMP: 0,
                                             str: 5,
                                             int: 5,
                                             wis: 5,
                                             dex: 5,
                                             agi: 5,
                                             end: 5,
                                             def: 5,
                                             atk: 30,
                                             mdef: 0,
                                             dodge: 0,
                                             crit: 0,
                                             currentTime: 0,
                                             maxTime:100
                                 }
                     ]
            }
            setCamPosition(posX,posY){
                        this.CAM_X = posX / 4;
                        this.CAM_Y = posY / 4;
            }
            setWarpPosition(strName){
                        if(strName ==="TP:village01>map_forest01"){
                                    this.location="map_forest01",
                                    this.heroPosition.x = 621;
                                    this.heroPosition.y = 1100;
                        }else if(strName ==="TP:map_forest01>village01"){
                                    this.location = "map_village01";
                                    this.heroPosition.x = 882;
                                    this.heroPosition.y = 46;
                        }else if(strName ==="TP:spawnPoint"){
                                    this.location = "map_village01";
                                    this.heroPosition.x = 1254;
                                    this.heroPosition.y = 842;
                        }
            }
            setKey(){
                        return 'UP,'    +
                               'DOWN,'  +
                               'RIGHT,' +
                               'LEFT,'  +
                               'ESC,' +
                               // rajouter les touches ici
                               //-------------------------
                               'T,' +
                               //-------------------------
                               'SPACE';
            }
}
