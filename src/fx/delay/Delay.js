import { factoryPresets } from '../../instruments/gNo/components/gNoFactoryPresets.js';
import { drawDelay } from './components/drawDelay.js';
import { knobInput } from './components/knobInput.js';
import { setDisplay } from './components/setDisplay.js';
import { setKnobs } from './components/setKnobs.js';

export class Delay {
    constructor() {
        
        this.name = 'Delay';
        this.input = new Tone.Gain();
        this.output = new Tone.Gain();
        this.fx = new Tone.FeedbackDelay({

            feedback: 0.5,
            maxDelay: 15,
            delayTime: '8n',
            wet: 0.5

        });
        this.knobValueDelayTime = 0.5;
        this.knobValueFeedback = 0.5;
        this.knobValueWet = 0.5;
        this.onScreenMixer = false;
        this.onScreenPattern = false;
        this.positionX = undefined;
        this.positionY = undefined;
        this.syncMode = 'note';
        this.drawFx = drawDelay;
        this.setDisplay = setDisplay;
        this.setKnobs = setKnobs;
        this.knobInput = knobInput;
        this.input.connect(this.fx);
        this.fx.connect(this.output);

        // extraOsc is needed to fool the delay there is allways input, otherwise the decay gets cut off when using sample-based instruments.

        this.extraOsc = new Tone.Oscillator(440, 'sine');
        this.extraOsc.volume.value = '-Infinity';
        this.extraOsc.start();
        this.extraOsc.connect(this.fx);
    }
}