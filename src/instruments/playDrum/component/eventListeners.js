import { project } from '../../../index.js';
import { instruments } from '../../instruments.js';

export function eventListeners() {
    document.getElementById('previousPatch').addEventListener('click', function () {
        project.instrumentsArray[project.activeInstrument].loadPreviousPatch()
    });

    document.getElementById('nextPatch').addEventListener('click', function () {
        project.instrumentsArray[project.activeInstrument].loadNextPatch()
    });

    for (let i = 0; i < 12; i++) {
        let id = `playDrum.Pad.${i}`;
        document.getElementById(id).addEventListener('mousedown', function () {
            instruments.drumDown(i);
                
        })
    }
}