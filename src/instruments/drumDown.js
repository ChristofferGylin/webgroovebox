import { main } from '../mainParameters/main.js';
import { project } from '../index.js';

export function drumDown(drumIndex) {

    project.instrumentsArray[project.activeInstrument].triggerDrum(drumIndex);
    let padIndex = parseInt(drumIndex);
    project.instrumentsArray[project.activeInstrument].blink(padIndex);
    
    if (main.record && main.play) {

        this.recordNote(drumIndex, 'drum');

    }
}
