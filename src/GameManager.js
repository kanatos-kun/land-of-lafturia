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
                        this.monsterDB;
                        this.heroPosition = {x: 0, y:0};
            }

            setDB(){
                        this.heroDB = [
                                    {
                                                name: "Max",
                                                level: 1,
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
                                                currentTime: 0,
                                                maxTime:100
                                    }
                        ];

                     this.monsterDB = [
                                 {
                                             name:"Slime",
                                             level: 1,
                                             maxHP: 40,
                                             currentHP: 40,
                                             maxMP:  0,
                                             currentMP: 0,
                                             str: 5,
                                             int: 5,
                                             wis: 5,
                                             dex: 5,
                                             agi: 5,
                                             end: 5,
                                             def: 5,
                                             atk: 8,
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
                               'SPACE';
            }
}
