import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function gridSelect(elem, gridRez) {

    switch (gridRez) {
        case 8:
            if (elem.className === 'controlCell8th') {
                project.instrumentsArray[project.activeInstrument].gridResolution = 8;
                project.instrumentsArray[project.activeInstrument].gridResolutionMultiplier = 2;
                this.resetGridSelect();
                sequencer.drawSequencer();
            }
            break;

        case 16:
            if (elem.className === 'controlCell16th') {
                project.instrumentsArray[project.activeInstrument].gridResolution = 16;
                project.instrumentsArray[project.activeInstrument].gridResolutionMultiplier = 1;
                this.resetGridSelect();
                sequencer.drawSequencer();
            }
            break;
        case 32:
            if (elem.className === 'controlCell32th') {
                project.instrumentsArray[project.activeInstrument].gridResolution = 32;
                project.instrumentsArray[project.activeInstrument].gridResolutionMultiplier = 0.5;
                this.resetGridSelect();
                sequencer.drawSequencer();
            }
            break;
        case 64:
            if (elem.className === 'controlCell64th') {
                project.instrumentsArray[project.activeInstrument].gridResolution = 64;
                project.instrumentsArray[project.activeInstrument].gridResolutionMultiplier = 0.25;
                this.resetGridSelect();               
                sequencer.drawSequencer();
            }
            break;
    }
}