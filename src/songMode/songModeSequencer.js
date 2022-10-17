import { main } from '../mainParameters/main.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js'
import { songMode } from './songMode.js';

export function songModeSequencer() {

    Tone.Transport.scheduleRepeat(myRepeat, "64n");


    function myRepeat(time) {

        document.getElementById('currentTimeValue').innerHTML = sequencer.calcTime(true);

        // Move the playerhead


        // Check the sequencer for active cells and trigger instruments


        for (let i = 0; i < project.songModePatterns[project.songModeIndex][0].length; i++) {

            let cellIdSplit = project.songModePatterns[project.songModeIndex][0][i].split('.');

            if (cellIdSplit[3] === 'keys') {

                let ticks = new Tone.Ticks(parseInt(cellIdSplit[1]));
                let duration = ticks.toSeconds();

                project.instrumentsArray[cellIdSplit[4]].triggerNote(cellIdSplit[0], time, project.songModePatterns[project.songModeIndex][0][i]);
                project.instrumentsArray[cellIdSplit[4]].triggerNoteRelease(cellIdSplit[0], (time + duration), project.songModePatterns[project.songModeIndex][0][i]);

            } else if (cellIdSplit[3] === 'drums') {

                project.instrumentsArray[cellIdSplit[4]].triggerDrum(cellIdSplit[0], time);

            }
        }
        for (let j = 0; j < project.songModePatterns[project.songModeIndex][1].length; j++) {
            let cellIdSplit = project.songModePatterns[project.songModeIndex][1][j].split('.');
            project.instrumentsArray[cellIdSplit[4]].deactivateNote(cellIdSplit[0], project.songModePatterns[project.songModeIndex][1][j]);
        }

        /*
                if (main.record && sequencer.tempIndex === project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0]) {
        
                    for (let i = 0; i < sequencer.recordingNotes.length; i++) {
        
                        sequencer.recordingNotes[i].endStep = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];
                        let noteLength = (sequencer.recordingNotes[i].endStep - sequencer.recordingNotes[i].startStep + 1) * 12 - 1;
                        let noteId = `${sequencer.recordingNotes[i].note}.${noteLength}.${sequencer.recordingNotes[i].startStep}.${sequencer.recordingNotes[i].instrumentType}.${sequencer.recordingNotes[i].instrumentNumber}`;
        
                        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][sequencer.recordingNotes[i].startStep][0].push(noteId);
                        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][sequencer.recordingNotes[i].endStep][1].push(noteId);
                        sequencer.recordingNotes[i].startStep = 1;
                    }
        
                }
        */


        if (project.songModeIndex === project.songModePatterns.length - 1) {


            for (let i = 0; i < project.instrumentsArray.length; i++) {

                if (project.instrumentsArray[i].type === 'keys') {

                    project.instrumentsArray[i].stopEverything();
                }
            }

            Tone.Transport.stop();
            document.getElementById('playButton').className = 'playButton';
            main.play = false;
            if (project.exporting) {

                songMode.exportSong('stop');

            }
        } else {
            project.songModeIndex++;
        }

    }



}