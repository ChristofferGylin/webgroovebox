import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { midi } from '../midi/midi.js';
import { mixer } from '../mixer/mixer.js';
import { sequencer } from '../sequencer/sequencer.js';



export function initApp() {

    main.colors = main.createColors();
    mainInterface.eventListenersKeys();
    mainInterface.eventListenersPatternAndMixer();

    mixer.drawChannelStripActiveInstrument();
    mixer.drawChannelStripMaster();

    continueInit();

    function continueInit() {
        if (main.hasInstruments) {
            main.meterId = requestAnimationFrame(mixer.vuMeter);
            midi.startMidi();
            Tone.Transport.scheduleRepeat(sequencer.sequencerFunction(), "64n");
        } else {
            setTimeout(continueInit, 100);
        }
    }

}