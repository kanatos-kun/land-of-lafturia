var keys;

import Personnage from '../objects/Personnage';
import Map_Template from './Map_Template';

export default class Map_Forest01_test  extends Map_Template{
            constructor(){
                        super("map_forest01_test","map_forest01");
            }

            create(){
                        console.log("mapForest TEST");
                        this._create();
            }

            update(time,delta){
                        this._update(time, delta);
            }
}
