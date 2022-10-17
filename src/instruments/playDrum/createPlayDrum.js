import { project } from '../../index.js';
import { main } from '../../mainParameters/main.js';
import { mixer } from '../../mixer/mixer.js';
import { sequencer } from '../../sequencer/sequencer.js';
import { instruments } from '../instruments.js';

export function createPlayDrum() {
    main.instrumentAnimationOk = false;

    if (main.instrumentAnimation !== undefined) {
        main.instrumentAnimation.cancel(0);
    }
    mixer.createMixerChannel('drums');
    project.instrumentsArray.push(new instruments.PlayDrum());
    project.activeInstrument = project.numberOfInstruments;

    if (project.mode === 'pattern') {

        project.instrumentsArray[project.activeInstrument].setKnobs();

    }


    project.activePatternsMaster.push(project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern]);
    project.activeAutomationPatternsMaster.push(project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern]);
    instruments.createInstrument(project.instrumentsArray[project.activeInstrument].name);
    if (project.mode === 'pattern') {
        sequencer.drawSequencer();
    }
    project.numberOfInstruments++;
    project.instrumentsArray[project.activeInstrument].initialized = true;
    setTimeout(function () {
        main.instrumentAnimationOk = true;
    }, 100);

}