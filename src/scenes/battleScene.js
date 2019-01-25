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
                        this.enemies;
                        this.emptyHPBar;
                        this.emptyMPBar;
                        this.emptyTIMEBar;
                        this.background;
                        this.textFeedBack;
                        this.window;
                        this.cursors;
            }
            init(data){
                        this.monsters = data.monster;
            }
            create(){
                        this.gameManager = this.game.manager;
                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );

                        console.log(this.gameManager);
                        console.log("Vous êtes dans le battleScene");
                        for(let i = 0; i < this.monsters.length; i++){
                                    console.log("ID monster 0" + i + " = " + this.monsters[i] );
                        }
                        this.initVisuel();
            }

            initVisuel(){
                        this.background = this.add.image(0,0,'battleScene_BG').setOrigin(0);

                        this.UIBackground = [
                                    this.add.image(16,273,'battleScene_UIINFO3').setOrigin(0),
                                    this.add.image(147,5,'battleScene_UIINFO4').setOrigin(0)
                        ];
                        this.UIBackground[1].setVisible(false);

                        this.HPBar = this.add.image(286,296,'battleScene_BarEmpty').setOrigin(0);
                        this.MPBar = this.add.image(417,296,'battleScene_BarEmpty').setOrigin(0);
                        this.TIMEBar = this.add.image(548,296,'battleScene_BarEmpty').setOrigin(0);

                        this.HPBar = this.add.image(286,296,'battleScene_healthBar2').setOrigin(0);
                        this.MPBar = this.add.image(417,296,'battleScene_manaBar2').setOrigin(0);
                        this.TIMEBar = this.add.image(548,296,'battleScene_timeBar2').setOrigin(0);

                        this.textFeedBack = {
                                    static:{
                                                hero1:{
                                                            //
                                                            //HP
                                                            hp:this.add.text(
                                                                        305,
                                                                        296,
                                                                        this.gameManager.heroDB[0].currentHP+"/"+
                                                                        this.gameManager.heroDB[0].maxHP,
                                                            {color: '#ffffff',
                                                            fontSize:14,
                                                            fontFamily: "Gadugi"}).setOrigin(0),
                                                            //
                                                            //MP
                                                            mp:this.add.text(
                                                                        454,
                                                                        296,
                                                                        this.gameManager.heroDB[0].currentMP+"/"+
                                                                        this.gameManager.heroDB[0].maxMP,
                                                                        {color: '#ffffff',
                                                                        fontSize:14,
                                                                        fontFamily: "Gadugi"}).setOrigin(0),
                                                            //
                                                            //TIME
                                                            time:this.add.text(
                                                                        594,
                                                                        296,
                                                                        this.gameManager.heroDB[0].currentTime+"%",
                                                                        {color: '#ffffff',
                                                                        fontSize:14,
                                                                        fontFamily: "Gadugi"}).setOrigin(0)
                                                }
                                    },
                                    dynamic:{

                                    }
                        };

                        this.battler = this.add.sprite(440,152,"superpower_rpg-battle-system_paladin",0).setOrigin(0);
                        this.enemies = this.add.sprite(156,143,"superpower_rpg-battle-system_slime",0).setOrigin(0);
                        this.window = {
                                    base: this.add.image(303,274,"battleScene_window_base").setOrigin(0),
                                    choiceChange: this.add.image(217,274,"battleScene_window_choiceChange").setOrigin(0),
                                    defendre: this.add.image(389,274,"battleScene_window_defendre").setOrigin(0),
                                    item: this.add.image(246,269,"battleScene_window_item").setOrigin(0)
                        };
                        this.window.base.setVisible(true);
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
                                    monster: this.add.image(this.enemies.x + this.enemies.width / 2 - 20,
                                                           this.enemies.y + 30 ,"arrow_down"),
                        };
                        this.cursors.monster.setVisible(false);
            }

            update(){
                        let x;
                        let y;
                        let cursor;
                        let name;
                        if(Phaser.Input.Keyboard.JustDown(keys.DOWN) ){
                                    this.cursors.window.currentPosition ++;
                                    name = this.cursors.window.name;
                                    if(this.cursors.window.currentPosition >= this.cursors.window[name].position.length){
                                                this.cursors.window.currentPosition = this.cursors.window[name].position.length - 1;
                                    }
                                    x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                    y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                    cursor = this.cursors.window.img;
                                    cursor.setPosition(x,y);
                        }
                        if(Phaser.Input.Keyboard.JustDown(keys.UP) ){
                                    this.cursors.window.currentPosition --;
                                    if(this.cursors.window.currentPosition < 0){
                                                this.cursors.window.currentPosition = 0;
                                    }
                                    name = this.cursors.window.name;
                                    x = this.cursors.window[name].position[this.cursors.window.currentPosition].x;
                                    y = this.cursors.window[name].position[this.cursors.window.currentPosition].y;
                                    cursor = this.cursors.window.img;
                                    cursor.setPosition(x,y);
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
                                    }
                        }
            }
}
