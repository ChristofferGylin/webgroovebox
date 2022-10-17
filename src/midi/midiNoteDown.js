import { instruments } from '../instruments/instruments.js';
import { main } from '../mainParameters/main.js';
import { project } from  '../index.js';

export function midiNoteDown(note) {
    if (project.instrumentsArray[project.activeInstrument].type === 'keys') {
        project.instrumentsArray[project.activeInstrument].triggerNoteKey(note);
        
        if (main.record && main.play) {

            instruments.recordNote(note, 'start');
    
        }

    } else if (project.instrumentsArray[project.activeInstrument].type === 'drums') {
        let noteSlice = note.slice(0, -1);
        let drumNumber;
        switch (noteSlice) {
            case 'C':
                drumNumber = 0;
                break;

            case 'C#':
                drumNumber = 1;
                break;

            case 'D':
                drumNumber = 2;
                break;

            case 'D#':
                drumNumber = 3;
                break;

            case 'E':
                drumNumber = 4;
                break;

            case 'F':
                drumNumber = 5;
                break;

            case 'F#':
                drumNumber = 6;
                break;

            case 'G':
                drumNumber = 7;
                break;

            case 'G#':
                drumNumber = 8;
                break;

            case 'A':
                drumNumber = 9;
                break;

            case 'A#':
                drumNumber = 10;
                break;

            case 'B':
                drumNumber = 11;
                break;

            

            default:
                break;

        }
        
        project.instrumentsArray[project.activeInstrument].triggerDrum(drumNumber);

        if (main.record && main.play) {

            instruments.recordNote(drumNumber, 'drum');
    
        }

    }
}