import { mixer } from './mixer.js'
import { project } from '../index.js';

import { userPreferences } from '../userPreferences.js';

export function newAuxSend(destination, aux) {
    
    if (aux) {

        if (mixer.checkForLoop(this, destination)) {

            console.log('ERROR!!!!!');

        } else {
            
            this.auxSends.push(new AuxSend(this, destination));
            this.selectedAux = this.auxSends.length - 1;

        }

        

    } else {
        
        this.auxSends.push(new AuxSend(this, destination));
        this.selectedAux = this.auxSends.length - 1;

    }

}

export class AuxSend {
    constructor(elem, destination) {

        this.name = destination.name;
        this.input = new Tone.Gain();
        this.output = new Tone.Volume(-60);
        this.knobValue = 0;
        
        switch(userPreferences.defaultSendOrigin) {

            case 'postPan':

                elem.output.connect(this.input);

        }
        this.input.connect(this.output);
        this.output.connect(destination.input);

    }

}