import { project } from '../index.js';

export function calcNoteLength() {

    let noteLength;

    switch (project.instrumentsArray[project.activeInstrument].gridResolution) {

        case 8:
            noteLength = this.noteLengths.note8;
            break;

        case 16:
            noteLength = this.noteLengths.note16;
            break;

        case 32:
            noteLength = this.noteLengths.note32;
            break;

        case 64:
            noteLength = this.noteLengths.note64;
            break;

    }

    noteLength--;

    return noteLength;

}