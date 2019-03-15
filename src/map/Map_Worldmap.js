var keys;

import Personnage from '../objects/Personnage';
import Map_Template from './Map_Template';

export default class Map_Worldmap  extends Map_Template{
            constructor(){
                        super("map_worldmap","map_worldmap");
            }

            create(){
                        this._create();
            }

            update(time,delta){
                        this._update(time, delta);
            }
}
