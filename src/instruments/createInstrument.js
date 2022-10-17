import { project } from  '../index.js';
import { sequencer } from '../sequencer/sequencer.js';
import { main } from '../mainParameters/main.js';
import { mixer } from '../mixer/mixer.js'
import { instruments } from './instruments.js';
import { mainInterface } from '../mainInterface/mainInterface.js';


export function createInstrument(instrument) {

    document.getElementById('newInstrumentDialog').style.display = 'none';
    sequencer.updatePatternLengthValue();
    main.hasInstruments = true;
       
    if (project.mode === 'pattern') {
        
        mixer.drawChannelStripActiveInstrument();
        document.getElementById('fxContainer').innerHTML = '';
        
    } else if (project.mode === 'mixer') {
        
        mixer.drawMixer();
    }

    mainInterface.resetGridSelect();
    mainInterface.updateDropdownInstruments();
    mainInterface.updateDropdownPatterns();
}