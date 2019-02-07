var keys;

export default class BattleScene  extends Phaser.Scene{
            constructor(monster){
                        super({key:"BattleScene"});
                        this.gameManager;
                        this.monsters;
                        this.UIbackground;
                        this.HPBar;
                        this.MPBar;
                        this.TIMEBar;
                        this.battler;
                        this.monstersBattler;
                        this.heros;
                        this.emptyBar;
                        this.background;
                        this.textFeedBack;
                        this.window;
                        this.battleState = "STAND-BY";
                        this.targets;
                        this.cursors;
                        this.victory = 0; // 0 = pas de resultat
                                          // 1 = victoire
                                          // 2 = fuite
                                          // 3 = defaite
                        this.tweenObj;

            }
            init(data){
                        this.monsters =data.monster;
            }
            create(){
                        this.gameManager = this.game.manager;
                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );
                        this.victory = 0;
                        this.heros = [ this.gameManager.heroDB[0] ];
                        this.heros[0].currentTime = 30;
                        console.log("Vous êtes dans le battleScene");
                        for(let i = 0; i < this.monsters.length; i++){
                                    console.dir(this.monsters[i] );
                        }
                        this.initBattleVisuel();
            }

            initBattleVisuel(){
                        this.background = this.add.image(0,0,'battleScene_BG').setOrigin(0);
                        this.UIBackground = [
                                    this.add.image(13,268,'battleScene_UIINFO5').setOrigin(0),
                                    this.add.nineslice(
                                          147, 5,   // this is the starting x/y location
                                          196, 24,   // the width and height of your object
                                          '_sheet_window_06-alpha', // a key to an already loaded image
                                          6         // the width and height to offset for a corner slice
                                          //6          // (optional) pixels to offset when computing the safe usage area
                              ).setScale(2)
                        ];
                        this.UIBackground[1].setOrigin(0);
                        // this.UIBackground[1].setVisible(false);

                        this.emptyBar = this.add.image(286,296,'battleScene_BarEmpty2').setOrigin(0);
                        // this.emptyMPBar = this.add.image(417,296,'battleScene_BarEmpty').setOrigin(0);
                        // this.emptyTIMEBar = this.add.image(548,296,'battleScene_BarEmpty').setOrigin(0);

                        this.HPBar = this.add.image(286,296,'battleScene_healthBar2').setOrigin(0);
                        this.MPBar = this.add.image(417,296,'battleScene_manaBar2').setOrigin(0);
                        this.TIMEBar = this.add.image(548,296,'battleScene_timeBar2').setOrigin(0);
                        this.battler = this.add.sprite(440,152,"superpower_rpg-battle-system_paladin",0).setOrigin(0);
                        this.monstersBattler = this.add.sprite(156,143,"superpower_rpg-battle-system_slime",0).setOrigin(0);
                        this.TIMEBar.setCrop(0,0,(121 * 30) / 100,15);
                        this.textFeedBack = {
                                    static:{
                                                hero1:{
                                                            //
                                                            //NAME
                                                            name:this.add.text(
                                                                        152,
                                                                        296,
                                                                        this.heros[0].name,
                                                            {color: '#ffffff',
                                                            fontSize:14,
                                                            fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),
                                                            //
                                                            //HP
                                                            hp:this.add.text(
                                                                        305,
                                                                        296,
                                                                        this.heros[0].currentHP+"/"+
                                                                        this.heros[0].maxHP,
                                                            {color: '#ffffff',
                                                            fontSize:14,
                                                            fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),
                                                            //
                                                            //MP
                                                            mp:this.add.text(
                                                                        454,
                                                                        296,
                                                                        this.heros[0].currentMP+"/"+
                                                                        this.heros[0].maxMP,
                                                                        {color: '#ffffff',
                                                                        fontSize:14,
                                                                        fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),
                                                            //
                                                            //TIME
                                                            time:this.add.text(
                                                                        594,
                                                                        296,
                                                                        this.heros[0].currentTime+"%",
                                                                        {color: '#ffffff',
                                                                        fontSize:14,
                                                                        fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0)
                                                },
                                                monster:[],
                                                ui: this.add.text(
                                                            158,
                                                            20,
                                                            "Un slime apparait!",
                                                            {color: '#ffffff',
                                                            fontSize:14,
                                                            fontFamily: "Gadugi,Georgia, serif"})
                                    },
                                    dynamic:{
                                                degat:{      monsters:[
                                                            this.add.text(
                                                            this.monstersBattler.x + 40,
                                                            this.monstersBattler.y + 10,
                                                            "0",
                                                            {color: '#ffffff',
                                                            fontSize:32,
                                                            fontFamily: "Gadugi,Georgia, serif"})
                                                            ],
                                                            heros:[
                                                                        this.add.text(
                                                                        this.battler.x + 130,
                                                                        this.battler.y - 30,
                                                                        "0",
                                                                        {color: '#ffffff',
                                                                        fontSize:32,
                                                                        fontFamily: "Gadugi,Georgia, serif"})
                                                            ]
                                                }

                                    }
                        };

                        this.textFeedBack.dynamic.degat.monsters[0].setVisible(false);
                        this.textFeedBack.dynamic.degat.heros[0].setVisible(false);

                        this.textFeedBack.static.ui.setAlign('center');

                        for(let i= 0; i < this.monsters.length;i++){
                                    let tempText = this.textFeedBack.static.monster[i];
                                    tempText = this.add.text(
                                                26,
                                                300 + 23 * i,
                                                this.monsters[i].name,
                                                {color: '#ffffff',
                                                fontSize:14,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0);
                                                this.textFeedBack.static.monster[i] = tempText;
                        }
                        console.log(this.textFeedBack.static.monster);

                        this.window = {
                                    base: this.add.image(303,274,"battleScene_window_base").setOrigin(0),
                                    choiceChange: this.add.image(217,274,"battleScene_window_choiceChange").setOrigin(0),
                                    defendre: this.add.image(389,274,"battleScene_window_defendre").setOrigin(0),
                                    item: this.add.image(246,269,"battleScene_window_item").setOrigin(0)
                        };
                        this.window.base.setVisible(false);
                        this.window.choiceChange.setVisible(false);
                        this.window.defendre.setVisible(false);
                        this.window.item.setVisible(false);
                        this.cursors = {
                                    player: this.add.image(this.battler.x + this.battler.width / 2 + 20,
                                                           this.battler.y - 10,"arrow_down"),
                                    window: {
                                                img:this.add.image(303,287,"arrow_right"),
                                                base:{
                                                            position:[
                                                                        {x:303,y:287},
                                                                        {x:303,y:302},
                                                                        {x:303,y:321},
                                                                        {x:303,y:338}
                                                            ]
                                                },
                                                defend:{
                                                            position:[
                                                                        {x:391,y:285}
                                                            ]
                                                },
                                                change:{
                                                            position:[
                                                                        {x:216,y:284},
                                                                        {x:216,y:302}
                                                            ]
                                                },
                                                item:{
                                                            position:[
                                                                        {x:247,y:280}
                                                            ]
                                                },
                                                competence:{
                                                            position:[
                                                                        {x:247,y:280}
                                                            ]
                                                },
                                                magie:{
                                                            position:[
                                                                        {x:247,y:280}
                                                            ]
                                                },
                                                position:[
                                                            {x:303,y:287},
                                                            {x:303,y:302},
                                                            {x:303,y:321},
                                                            {x:303,y:338}

                                                ],
                                                name: "base",
                                                currentPosition:0
                                            },
                                    monster: {   img:this.add.image(this.monstersBattler.x + this.monstersBattler.width / 2 - 20,
                                                           this.monstersBattler.y + 30 ,"arrow_down"),
                                                 isTarget: false
                                             },
                        };
                        this.cursors.monster.img.setVisible(false);
                        this.cursors.player.setVisible(false);
                        this.cursors.window.img.setVisible(false);

                        this.tweenObj = [
                                    this.tweens.addCounter({
                                                duration: 2000,
                                                from:0,
                                                to:100,
                                                ease: 'Linear'
                                    }),
                                    this.tweens.add({
                                                targets: this.textFeedBack.dynamic.degat.monsters[0],
                                                x: this.textFeedBack.dynamic.degat.monsters[0].x,
                                                y: this.textFeedBack.dynamic.degat.monsters[0].y - 30,
                                                ease: "Power3",
                                                yoyo: true,
                                                duration: 250
                                    }),
                                    this.tweens.add({
                                                targets: this.textFeedBack.dynamic.degat.heros[0],
                                                x: this.textFeedBack.dynamic.degat.heros[0].x,
                                                y: this.textFeedBack.dynamic.degat.heros[0].y - 30,
                                                ease: "Power3",
                                                yoyo: true,
                                                duration: 250
                                    })

                        ]
                        // tween.play();

            }

            update(time, delta){
                        if(this.battleState ==="ACTION"){
                                    this.tweenObj[0].restart();
                                    if(this.targets === this.monstersBattler){
                                                this.textFeedBack.dynamic.degat.monsters[0].setVisible(true);
                                                this.tweenObj[1].restart();
                                    }else if(this.targets === this.battler){
                                                this.textFeedBack.dynamic.degat.heros[0].setVisible(true);
                                                this.tweenObj[2].restart();
                                    }
                                    this.UIBackground[1].setVisible(true);
                                    this.textFeedBack.static.ui.setVisible(true);
                                    // this.tweenObj.play();
                        }else if(this.battleState ==="STAND-BY"){
                                    this.updateTimeBar(time,delta);
                        }

                        if(this.tweenObj[0].isPlaying() ){
                                    this.battleState ="SUB-ACTION";
                        }
                        if(!this.tweenObj[0].isPlaying() && this.battleState ==="SUB-ACTION"){
                                    console.log("fin");
                                    this.UIBackground[1].setVisible(false);
                                    this.textFeedBack.static.ui.setVisible(false);
                                    if(this.targets === this.monstersBattler){
                                                this.textFeedBack.dynamic.degat.monsters[0].setVisible(false);
                                    }else if(this.targets === this.battler){
                                                this.textFeedBack.dynamic.degat.heros[0].setVisible(false);
                                    }
                                    this.battleState = "STAND-BY";
                        }

                        if(this.monsters[0].currentHP < 0){
                                    this.victory = 1;
                        }
                        if(this.heros[0].currentHP < 0){
                                    this.victory = 3;
                        }

                        if(this.victory === 1){

                                    console.log("Victoire!");
                                    console.log("hp:"+this.monsters[0].currentHP);
                                    console.log("hpGameManager:"+this.gameManager.monsterDB[0].currentHP);
                                    this.scene.stop("BattleScene");
                                    this.scene.start("BattleSceneVictory",{gold:this.gameManager.monsterDB[0].gold,
                                                                           exp:this.gameManager.monsterDB[0].experience,
                                                                           objet:null});
                                    // this.scene.wake("map_forest01");
                                    //affichage du menu de victoire
                        }else if(this.victory === 2){
                                    console.log("Fuite reussit!");
                        }else if(this.victory === 3){
                                    console.log("defaite!");
                                    this.scene.start("GameOverScene");
                        }

                        this.feedBackBar();

            }

            updateTimeBar(time, delta){
                        if(this.heros[0].currentTime>=100 &&
                           this.monsters[0].currentTime <= 100){
                                       this.playerWindow();
                                       // this.battleState ="ACTION";
                           }
                         if(this.heros[0].currentTime < 100) this.monsters[0].currentTime += delta / 100;

                        if(this.monsters[0].currentTime >= 100){
                                    this.battleState = "ACTION";
                                    let degat = this.monsters[0].atk - this.heros[0].def;
                                    if(degat < 0) degat = 0;
                                    this.heros[0].currentHP -= degat;
                                    this.monsters[0].currentTime = 0;
                                    // console.log(`${this.monsters[0].name} inflige ${degat} de degat à ${this.heros[0].name}
                                    //             \nIl reste ${this.heros[0].currentHP} HP à ${this.heros[0].name}. `);
                                                this.textFeedBack.static.ui.setText(`${this.monsters[0].name} attaque ${this.heros[0].name} !`);
                                                this.targets = this.battler;
                                                // this.textFeedBack.dynamic.degat.heros[0].setPosition(this.targets[0].x,this.targets[0].y - 10);
                                                // this.tweenObj[1]
                                                this.textFeedBack.dynamic.degat.heros[0].setText(degat);
                        }else{
                                    this.heros[0].currentTime += delta / 100;
                                    let cur_time = Phaser.Math.FloorTo(this.heros[0].currentTime);
                                    if(cur_time > 100) {
                                                cur_time = 100;
                                                this.heros[0].currentTime = 100;

                                                if(this.cursors.monster.img.visible === false){
                                                            this.cursors.window.img.setVisible(true);
                                                };
                                                this.window.base.setVisible(true);
                                                this.cursors.player.setVisible(true);
                                    }
                                    this.TIMEBar.setCrop(0,0,(121 * cur_time) / 100,15);
                                    this.textFeedBack.static.hero1.time.setText(cur_time + "%");
                        }
            }

            feedBackBar(){
                        this.textFeedBack.static.hero1.hp.setText(this.heros[0].currentHP+"/"+
                        this.heros[0].maxHP);
                        this.HPBar.setCrop(0,0,(121 * this.heros[0].currentHP) / this.heros[0].maxHP,15);
            }
            playerWindow(){
                        let x;
                        let y;
                        let cursor;
                        let name;
                        if(Phaser.Input.Keyboard.JustDown(keys.DOWN) ){
                                    this.cursors.window.currentPosition ++;
                                    name = this.cursors.window.name;
                                    if(name ==="base" ||
                                       name === "defend"||
                                       name === "competence" ||
                                       name === "magie" ||
                                       name === "item"){
                                                   if(this.cursors.window.currentPosition >= this.cursors.window[name].position.length){
                                                               this.cursors.window.currentPosition = this.cursors.window[name].position.length - 1;
                                                   }
                                                   x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                   y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                   cursor = this.cursors.window.img;
                                                   cursor.setPosition(x,y);
                                       }

                        }
                        if(Phaser.Input.Keyboard.JustDown(keys.UP) ){
                                    this.cursors.window.currentPosition --;
                                    name = this.cursors.window.name;
                                    if(name ==="base" ||
                                       name === "defend"||
                                       name === "competence" ||
                                       name === "magie" ||
                                       name === "item"){
                                                   if(this.cursors.window.currentPosition < 0){
                                                               this.cursors.window.currentPosition = 0;
                                                   }
                                                   name = this.cursors.window.name;
                                                   x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                   y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                   cursor = this.cursors.window.img;
                                                   cursor.setPosition(x,y);
                                       }

                        }
                        if(Phaser.Input.Keyboard.JustDown(keys.RIGHT) ){
                                    name = this.cursors.window.name;
                                    if(name === "base"){
                                                this.cursors.window.name = "defend";
                                                name = this.cursors.window.name;
                                                this.window.defendre.setVisible(true);
                                                this.cursors.window.currentPosition = 0;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                    }else if(name === "change"){
                                                this.cursors.window.name = "base";
                                                name = this.cursors.window.name;
                                                this.window.choiceChange.setVisible(false);
                                                this.cursors.window.currentPosition = 0;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                    }

                        }
                        if(Phaser.Input.Keyboard.JustDown(keys.LEFT) ){
                                    name = this.cursors.window.name;
                                    if(name === "base"){
                                                this.cursors.window.name = "change";
                                                name = this.cursors.window.name;
                                                this.window.choiceChange.setVisible(true);
                                                this.cursors.window.currentPosition = 0;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                    }else if(name === "defend"){
                                                this.cursors.window.name = "base";
                                                name = this.cursors.window.name;
                                                this.window.defendre.setVisible(false);
                                                this.cursors.window.currentPosition = 0;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                    }

                        }
                        if(Phaser.Input.Keyboard.JustDown(keys.ESC) ){
                                    name = this.cursors.window.name;
                                    if(name==="competence" ||
                                       name==="magie"      ||
                                       name==="item"          ){
                                                this.window.item.setVisible(false);
                                                this.cursors.window.name = "base";
                                                this.cursors.window.currentPosition = 0;
                                                name = this.cursors.window.name;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                    }else if(name ==="base"){
                                    }else if(name ==="choiceState"){
                                                this.cursors.monster.img.setVisible(false);
                                                this.cursors.window.name = "base";
                                    }
                        }
                        if(Phaser.Input.Keyboard.JustDown(keys.SPACE) ){
                                    name = this.cursors.window.name;
                                    if(name==="competence"){

                                    }else if(name==="item"){

                                    }else if(name ==="magie"){

                                    }else if(name ==="base"){
                                                if(this.cursors.window.currentPosition === 0){
                                                            //attaquer
                                                            this.cursors.monster.img.setVisible(true);
                                                            this.cursors.window.img.setVisible(false);
                                                            this.cursors.window.name = "choiceState";
                                                }else if(this.cursors.window.currentPosition === 1){
                                                            //competence
                                                            this.window.item.setVisible(true);
                                                            this.cursors.window.name = "competence";
                                                            this.cursors.window.currentPosition = 0;
                                                            name = this.cursors.window.name;
                                                            x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                            y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                            cursor = this.cursors.window.img;
                                                            cursor.setPosition(x,y);
                                                }else if(this.cursors.window.currentPosition === 2){
                                                            //magie
                                                            this.window.item.setVisible(true);
                                                            this.cursors.window.name = "magie";
                                                            this.cursors.window.currentPosition = 0;
                                                            name = this.cursors.window.name;
                                                            x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                            y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                            cursor = this.cursors.window.img;
                                                            cursor.setPosition(x,y);
                                                }else if(this.cursors.window.currentPosition === 3){
                                                            //item
                                                            this.window.item.setVisible(true);
                                                            this.cursors.window.name = "item";
                                                            this.cursors.window.currentPosition = 0;
                                                            name = this.cursors.window.name;
                                                            x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                            y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                            cursor = this.cursors.window.img;
                                                            cursor.setPosition(x,y);
                                                }
                                    }else if(name === "defend"){
                                                //information battle
                                                console.log(`${this.heros[0].name} se defend !`);
                                                this.window.defendre.setVisible(false);
                                                this.window.base.setVisible(false);
                                                this.cursors.player.setVisible(false);
                                                this.cursors.window.img.setVisible(false);
                                                this.cursors.window.name = "base";
                                                this.heros[0].currentTime = 0;
                                                name = this.cursors.window.name;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                    }else if(name === "choiceState"){
                                                let degat = this.heros[0].atk - this.monsters[0].def;
                                                this.monsters[0].currentHP -= degat;
                                                //information battle
                                                // console.log(`${this.heros[0].name}  inflige ${degat} de degat à ${this.monsters[0].name} \n
                                                // Il reste ${this.monsters[0].currentHP} HP à ${this.monsters[0].name}`);
                                                this.textFeedBack.static.ui.setText(`${this.heros[0].name} attaque ${this.monsters[0].name}`);
                                                this.window.defendre.setVisible(false);
                                                this.window.base.setVisible(false);
                                                this.cursors.player.setVisible(false);
                                                this.cursors.window.img.setVisible(false);
                                                this.cursors.monster.img.setVisible(false);
                                                this.cursors.window.name = "base";
                                                this.heros[0].currentTime = 0;
                                                name = this.cursors.window.name;
                                                x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                                y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                                cursor = this.cursors.window.img;
                                                cursor.setPosition(x,y);
                                                this.battleState ="ACTION";
                                                this.targets = this.monstersBattler;
                                                // this.textFeedBack.dynamic.degat.monsters[0].setPosition(this.targets.x,this.targets.y - 10);
                                                this.textFeedBack.dynamic.degat.monsters[0].setText(degat);
                                    }
                        }
            }
}
