var keys;

export default class BattleSceneVictory  extends Phaser.Scene {

            constructor(){
                        super({key:"BattleSceneVictory"});
                        this.gameManager;
                        this.windows;
                        this.faceset;
                        this.text;
                        this.gold;
                        this.exp;
                        this.objet;
                        this.state = "EXP";  // EXP : apparition du menu d'experience
                                             // EXP-END : fin du menu d'experience
                                             // OBJ : apparition du menu d'objet
                                             // OBJ-END : fin du menu d'objet
            }

            init(data){
                        this.gold = data.gold;
                        this.exp = data.exp;
                        this.objet = data.objet;
            }

            create(){
                        this.state="EXP";
                        this.gameManager = this.game.manager;
                        this.windows = {
                                                top:this.add.nineslice(
                                                            0, 18,   // this is the starting x/y location
                                                            348, 24,   // the width and height of your object
                                                            '_sheet_window_06', // a key to an already loaded image
                                                            6         // the width and height to offset for a corner slice
                                                            //6          // (optional) pixels to offset when computing the safe usage area
                                                ).setScale(2),
                                                middle_1:this.add.nineslice(
                                                            47, 79,   // this is the starting x/y location
                                                            302, 124,   // the width and height of your object
                                                            '_sheet_window_06', // a key to an already loaded image
                                                            6         // the width and height to offset for a corner slice
                                                            //6          // (optional) pixels to offset when computing the safe usage area
                                                ).setScale(2),
                                                middle_2:this.add.nineslice(
                                                            149, 79,   // this is the starting x/y location
                                                            200, 125,   // the width and height of your object
                                                            '_sheet_window_06', // a key to an already loaded image
                                                            6         // the width and height to offset for a corner slice
                                                            //6          // (optional) pixels to offset when computing the safe usage area
                                                ).setScale(2),
                                                bottom:this.add.nineslice(
                                                            0, 340,   // this is the starting x/y location
                                                            348, 24,   // the width and height of your object
                                                            '_sheet_window_06', // a key to an already loaded image
                                                            6         // the width and height to offset for a corner slice
                                                            //6          // (optional) pixels to offset when computing the safe usage area
                                                ).setScale(2)
                        }
                        this.faceset = this.add.image(59,101,"faceset_paladin").setOrigin(0);

                        this.text = {
                                    exp_acquis:this.add.text(
                                                24,
                                                34,
                                                this.exp,
                                    {color: '#ffffff',
                                    fontSize:20,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    exp: this.add.text(
                                                100,
                                                34,
                                                "EXP",
                                    {color: '#ffffff',
                                    fontSize:18,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    gold: this.add.text(
                                                10,
                                                29,
                                                "Gold acquis",
                                    {color: '#ffffff',
                                    fontSize:18,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    gold_acquis: this.add.text(
                                                124,
                                                31,
                                                this.gold,
                                    {color: '#ffffff',
                                    fontSize:18,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    current_gold_text: this.add.text(
                                                355,
                                                31,
                                                "Gold(s)",
                                    {color: '#ffffff',
                                    fontSize:18,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    current_gold_value: this.add.text(
                                                433,
                                                29,
                                                this.gameManager.gold + " G",
                                    {color: '#ffffff',
                                    fontSize:18,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    empty_item:  this.add.text(
                                                244,
                                                187,
                                                "Aucun objet obtenu",
                                    {color: '#ffffff',
                                    fontSize:22,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                    hero1:{
                                                name:this.add.text(
                                                            155,
                                                            94,
                                                            this.gameManager.heroDB[0].name,
                                                {color: '#ffffff',
                                                fontSize:22,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                                level:this.add.text(
                                                            267,
                                                            98,
                                                            "Level " + this.gameManager.heroDB[0].level,
                                                {color: '#ffffff',
                                                fontSize:15,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                                exp:this.add.text(
                                                            155,
                                                            163,
                                                            "EXP",
                                                {color: '#ffffff',
                                                fontSize:15,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                                niv_suiv:this.add.text(
                                                            155,
                                                            184,
                                                            "niv.suiv.",
                                                {color: '#ffffff',
                                                fontSize:15,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                                exp_give:this.add.text(
                                                            269,
                                                            162,
                                                            this.exp,
                                                {color: '#ffffff',
                                                fontSize:17,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),

                                                exp_remain:this.add.text(
                                                            269,
                                                            187,
                                                            this.gameManager.heroDB[0].experience[this.gameManager.heroDB[0].level - 1] -this.gameManager.heroDB[0].currentExperience,
                                                {color: '#ffffff',
                                                fontSize:17,
                                                fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0),
                                    },
                                    press_space: this.add.text(
                                                412,
                                                350,
                                                "click 'spacebar' to continue",
                                    {color: '#ffffff',
                                    fontSize:21,
                                    fontFamily: "Gadugi,Georgia, serif"}).setOrigin(0)
                        }
                        this.windows.middle_2.setVisible(false);
                        this.text.gold.setVisible(false);
                        this.text.gold_acquis.setVisible(false);
                        this.text.current_gold_text.setVisible(false);
                        this.text.current_gold_value.setVisible(false);
                        this.text.empty_item.setVisible(false);

                        keys = this.input.keyboard.addKeys( this.gameManager.setKey() );
            }
            update(){
                        if(Phaser.Input.Keyboard.JustDown(keys.SPACE) ){
                                    console.log(this.state);
                                                         // EXP : apparition du menu d'experience
                                                         // EXP-END : fin du menu d'experience
                                                         // OBJ : apparition du menu d'objet
                                                         // OBJ-END : fin du menu d'objet
                                    if(this.state ==="EXP"){
                                                var exp = this.exp + this.gameManager.heroDB[0].currentExperience;
                                                var nbr_lv = this.exp;
                                                if(exp >= this.gameManager.heroDB[0].experience[this.gameManager.heroDB[0].level - 1]){

                                                            while(exp>=this.gameManager.heroDB[0].experience[this.gameManager.heroDB[0].level - 1]){
                                                                        exp = exp - ( this.gameManager.heroDB[0].experience[this.gameManager.heroDB[0].level - 1]-
                                                                                    this.gameManager.heroDB[0].currentExperience);
                                                                        this.gameManager.heroDB[0].level ++;
                                                                        this.gameManager.heroDB[0].currentExperience = 0;
                                                                        console.log(" CExp: " + this.gameManager.heroDB[0].currentExperience +"  / ExpToLvUp: "+ this.gameManager.heroDB[0].experience[this.gameManager.heroDB[0].level - 1])
                                                            }

                                                }

                                                this.gameManager.heroDB[0].currentExperience = exp;
                                                this.text.hero1.level.setText("Level " + this.gameManager.heroDB[0].level);
                                                this.text.hero1.exp_give.setText("0 ");
                                                this.text.hero1.exp_remain.setText(this.gameManager.heroDB[0].experience[this.gameManager.heroDB[0].level - 1] -this.gameManager.heroDB[0].currentExperience);

                                                this.state ="EXP-END";
                                                return;
                                    }
                                    if(this.state ==="EXP-END"){
                                                //set OFF
                                                this.faceset.setVisible(false);
                                                this.text.exp_acquis.setVisible(false);
                                                this.text.exp.setVisible(false);
                                                this.text.hero1.name.setVisible(false);
                                                this.text.hero1.level.setVisible(false);
                                                this.text.hero1.exp.setVisible(false);
                                                this.text.hero1.niv_suiv.setVisible(false);
                                                this.text.hero1.exp_give.setVisible(false);
                                                this.text.hero1.exp_remain.setVisible(false);

                                                //set ON
                                                this.text.gold.setVisible(true);
                                                this.text.gold_acquis.setVisible(true);
                                                this.text.current_gold_text.setVisible(true);
                                                this.text.current_gold_value.setVisible(true);
                                                this.text.empty_item.setVisible(true);
                                                this.state ="OBJ";
                                                return;
                                    }

                                    if(this.state ==="OBJ"){
                                                var gold = this.gameManager.gold + this.gold;
                                                this.gameManager.gold = gold;
                                                this.text.current_gold_value.setText(this.gameManager.gold + " G");
                                                this.text.gold_acquis.setText(0);
                                                this.state = "OBJ-END";
                                                return;
                                    }

                                    if(this.state ==="OBJ-END"){
                                                this.scene.stop("BattleSceneVictory");
                                                this.scene.wake("map_forest01");
                                    }

                        }
            }
}
