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
                                                experience:[
                                                292 ,
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
            setWarpPosition(x, y, name){
                        this.location = name;
                        this.heroPosition.x = x;
                        this.heroPosition.y = y;
                        // if(strName ==="TP:village01>map_forest01"){
                        //             this.location="map_forest01",
                        //             this.heroPosition.x = 621;
                        //             this.heroPosition.y = 1100;
                        // }else if(strName ==="TP:map_forest01>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 882;
                        //             this.heroPosition.y = 46;
                        // }else if(strName ==="TP:spawnPoint"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 1254;
                        //             this.heroPosition.y = 842;
                        //
                        // //village01 exterior>interior
                        // }else if(strName ==="TP:village01>village01_interior1"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 44;
                        //             this.heroPosition.y = 238;
                        // }else if(strName ==="TP:village01>village01_interior2"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 64;
                        //             this.heroPosition.y = 234;
                        // }else if(strName ==="TP:village01>village01_interior3(1)"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 66;
                        //             this.heroPosition.y = 238;
                        // }else if(strName ==="TP:village01>village01_interior3(2)"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 26;
                        //             this.heroPosition.y = 131;
                        // }else if(strName ==="TP:village01>village01_shop"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 79;
                        //             this.heroPosition.y = 201;
                        // }else if(strName ==="TP:village01>village01_interior4"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 94;
                        //             this.heroPosition.y = 202;
                        // }else if(strName ==="TP:village01>village01_interior5"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 48;
                        //             this.heroPosition.y = 219;
                        // }else if(strName ==="TP:village01>village01_interior6"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 44;
                        //             this.heroPosition.y = 204;
                        //
                        // //village01 interior
                        // }else if(strName ==="TP:village01_interior1>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 1511;
                        //             this.heroPosition.y = 571;
                        // }else if(strName ==="TP:village01_shop>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 988;
                        //             this.heroPosition.y = 474;
                        // }else if(strName ==="TP:village01_interior2>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 1412;
                        //             this.heroPosition.y = 904;
                        // }else if(strName ==="TP:village01_interior3>village01(2)"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 1082;
                        //             this.heroPosition.y = 809;
                        // }else if(strName ==="TP:village01_interior3>village01(1)"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 1045;
                        //             this.heroPosition.y = 777;
                        // }else if(strName ==="TP:village01_interior4>village01_interior4-1"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 278;
                        //             this.heroPosition.y = 215;
                        // }else if(strName ==="TP:village01_interior4>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 555;
                        //             this.heroPosition.y = 507;
                        // }else if(strName ==="TP:village01_interior4-1>village01_interior4"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 27;
                        //             this.heroPosition.y = 141;
                        // }else if(strName ==="TP:village01_interior5>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 569;
                        //             this.heroPosition.y = 776;
                        // }else if(strName ==="TP:village01_interior6>village01"){
                        //             this.location = "map_village01";
                        //             this.heroPosition.x = 247;
                        //             this.heroPosition.y = 732;
                        // }


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
                               'C,' +
                               'MINUS,'+
                               'PLUS,'+
                               //-------------------------
                               'SPACE';
            }
}
