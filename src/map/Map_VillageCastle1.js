var keys;

import Personnage from '../objects/Personnage';
import Map_Template from './Map_Template';

export default class Map_VillageCastle1  extends Map_Template{
            constructor(){
                        super("map_village_castle1","map_village_castle1");
            }

            create(){
                        this._create();
            }

            update(time,delta){
                        this._update(time, delta);
            }
}
