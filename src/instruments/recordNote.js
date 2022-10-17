import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';


export function recordNote(note, type) {

    let notesTempIndex;

    if (sequencer.tempIndex === 1) {

        notesTempIndex = 1;

    } else if (sequencer.tempIndex % 2 !== 0) {

        notesTempIndex = (sequencer.tempIndex - 1) / 2 + 1;

    } else {

        notesTempIndex = (sequencer.tempIndex - 2) / 2 + 1;

    }

    let noteLength;
    let noteId;
    let recordNote = {

        note: note,
        startStep: notesTempIndex,
        endStep: 0,
        instrumentType: project.instrumentsArray[project.activeInstrument].type,
        instrumentNumber: project.instrumentsArray[project.activeInstrument].instrumentNumber

    }

    switch (type) {

        case 'start':

            sequencer.recordingNotes.push(recordNote);

            break;

        case 'end':

            for (let i = 0; i < sequencer.recordingNotes.length; i++) {

                if (sequencer.recordingNotes[i].note === note) {


                    sequencer.recordingNotes[i].endStep = notesTempIndex;

                    noteLength = (sequencer.recordingNotes[i].endStep - sequencer.recordingNotes[i].startStep + 1) * 12 - 1;
                    noteId = `${sequencer.recordingNotes[i].note}.${noteLength}.${sequencer.recordingNotes[i].startStep}.${sequencer.recordingNotes[i].instrumentType}.${sequencer.recordingNotes[i].instrumentNumber}`;
                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][sequencer.recordingNotes[i].startStep][0].push(noteId);
                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][sequencer.recordingNotes[i].endStep][1].push(noteId);
                    sequencer.recordingNotes.splice(i, 1);
                    sequencer.drawSeqResetScroll();
                    break;
                }

            }

            break;

        case 'drum':

            noteLength = 11;
            noteId = `${recordNote.note}.${noteLength}.${recordNote.startStep}.${recordNote.instrumentType}.${recordNote.instrumentNumber}`;
            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][recordNote.startStep][0].push(noteId);
            sequencer.drawSeqResetScroll();
            break;

    }



}