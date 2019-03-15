var keys;

import Personnage from '../objects/Personnage';
import Map_Template from './Map_Template';

export default class Map_Castle1_inside2  extends Map_Template{
            constructor(){
                        super("map_castle1_inside2","map_castle1_inside2");
            }

            create(){
                        console.log("test castle inside 2");
                        this._create();
            }

            update(time,delta){
                        this._update(time, delta);
            }
}
