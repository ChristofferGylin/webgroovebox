import { project } from '../../index.js';
import { main } from '../../mainParameters/main.js';
import { mixer } from '../../mixer/mixer.js';
import { sequencer } from '../../sequencer/sequencer.js';
import { instruments } from '../instruments.js';

export function createGNO1106() {
    main.instrumentAnimationOk = false;

    if (main.instrumentAnimation !== undefined) {
        main.instrumentAnimation.cancel(0);
    }
    mixer.createMixerChannel('keys');
    project.instrumentsArray.push(new instruments.GNO1106());
    project.activeInstrument = project.numberOfInstruments;
    project.activePatternsMaster.push(project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern]);
    project.activeAutomationPatternsMaster.push(project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern]);
    instruments.createInstrument(project.instrumentsArray[project.activeInstrument].name);
    if (project.mode === 'pattern') {
        sequencer.drawSequencer();
    }
    project.numberOfInstruments++;
}