import { main } from '../mainParameters/main.js';
import { project } from '../index.js';

export function noteUp(elem) {
    let note = elem.dataset.note;

    if (note.length > 2) {
        elem.style.background = 'rgb(36, 36, 36)';
    } else {
        elem.style.background = 'white';
    }
    project.instrumentsArray[project.activeInstrument].triggerNoteReleaseKey(note);

    if (main.record && main.play) {

        this.recordNote(note, 'end');

    }

}