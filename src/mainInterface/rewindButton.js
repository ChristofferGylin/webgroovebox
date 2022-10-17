import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function rewindButton() {
    for (let i = 0; i < project.instrumentsArray.length; i++) {
        if (project.instrumentsArray[i].type === 'keys') {
            project.instrumentsArray[i].stopEverything();
        }
    }
    project.index = 1;
    document.getElementById('currentTimeValue').innerHTML = sequencer.calcTime();
}