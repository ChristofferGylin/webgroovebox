
import { instruments } from '../instruments/instruments.js';
import { main } from '../mainParameters/main.js';
import { project } from  '../index.js';

export function midiNoteUp(note) {
    if (project.instrumentsArray[project.activeInstrument].type === 'keys') {
        project.instrumentsArray[project.activeInstrument].triggerNoteReleaseKey(note);
        
        if (main.record && main.play) {

            instruments.recordNote(note, 'end');
    
        }
    }

}