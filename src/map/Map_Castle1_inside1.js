var keys;

import Personnage from '../objects/Personnage';
import Map_Template from './Map_Template';

export default class Map_Castle1_inside1  extends Map_Template{
            constructor(){
                        super("map_castle1_inside1","map_castle1_inside1");
            }

            create(){
                        this._create();
            }

            update(time,delta){
                        this._update(time, delta);
            }
}
