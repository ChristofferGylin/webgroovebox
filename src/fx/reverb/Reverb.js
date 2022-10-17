import { factoryPresets } from '../../instruments/gNo/components/gNoFactoryPresets.js';
import { drawReverb } from './components/drawReverb.js';
import { knobInput } from './components/knobInput.js';
import { setDisplay } from  './components/setDisplay.js';
import { setKnobs } from './components/setKnobs.js';

export class Reverb {
    constructor() {
        
        this.name = 'Reverb';
        this.input = new Tone.Gain();
        this.output = new Tone.Gain();
        this.fx = new Tone.Reverb({

            decay: 5,
            preDelay: 0,
            wet: 0.5

        });
        this.knobValuePreDelay = 0;
        this.knobValueDecay = 0.5;
        this.knobValueWet = 0.5;
        this.onScreenMixer = false;
        this.onScreenPattern = false;
        this.positionX = undefined;
        this.positionY = undefined;
        this.drawFx = drawReverb;
        this.setDisplay = setDisplay;
        this.setKnobs = setKnobs;
        this.knobInput = knobInput;
        this.input.connect(this.fx);
        this.fx.connect(this.output);

        // extraOsc is needed to fool the reverb there is allways input, otherwise the decay gets cut off when using sample-based instruments.

        this.extraOsc = new Tone.Oscillator(440, 'sine');
        this.extraOsc.volume.value = '-Infinity';
        this.extraOsc.start();
        this.extraOsc.connect(this.fx);
    }
}