var keys;

import Personnage from '../objects/Personnage';
import Map_Template from './Map_Template';

export default class Map_Village01_test  extends Map_Template {
// -------------// TODO:
// - Affichage map  => DONE
// - Interraction Personnage => DONE
// - Systeme combat (creer gfx ui/ personnage)
// - Boite de dialogue => DONE
// - changement de zone
//
            constructor(){
                        super("map_village01_test","map_village");
            }

            create(){
                        this._create();
                        console.log("map village TEST");
            }

            update(time,delta){
                        this._update(time, delta);
            }

}
