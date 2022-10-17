import { instruments } from '../instruments/instruments.js';
import { main } from '../mainParameters/main.js';
import { project } from  '../index.js';

export function noteDown(elem) {
    let note = elem.dataset.note;
    elem.style.background = '#ccc';
    project.instrumentsArray[project.activeInstrument].triggerNoteKey(note);

    if (main.record && main.play) {

        instruments.recordNote(note, 'start');

    }

    event.stopPropagation();
}