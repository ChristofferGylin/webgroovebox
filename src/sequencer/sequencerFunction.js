import { main } from '../mainParameters/main.js';
import { project } from '../index.js';
import { sequencer } from './sequencer.js'

export function sequencerFunction() {

    this.lastTimeLineRulerCell = 0;
    Tone.Transport.scheduleRepeat(myRepeat, "128n");
    function myRepeat(time) {

        document.getElementById('currentTimeValue').innerHTML = sequencer.calcTime();


        // Move the playerhead

        if (project.mode === 'pattern') {
            sequencer.movePlayerHead();
        }


        // Check the sequencer for active cells and trigger instruments



        for (let i = 0; i < project.activePatternsMaster.length; i++) {
            sequencer.tempIndex = sequencer.calcTempIndex(i);

            if (sequencer.tempIndex % 2 !== 0) {

                let notesTempIndex;

                if (sequencer.tempIndex === 1) {

                    notesTempIndex = 1;

                } else {

                    notesTempIndex = (sequencer.tempIndex - 1) / 2 + 1;

                }





                for (let j = 0; j < project.activePatternsMaster[i][notesTempIndex][0].length; j++) {
                    let cellIdSplit = project.activePatternsMaster[i][notesTempIndex][0][j].split('.');

                    if (cellIdSplit[3] === 'keys') {

                        let ticks = new Tone.Ticks(parseInt(cellIdSplit[1]));
                        let duration = ticks.toSeconds();

                        project.instrumentsArray[cellIdSplit[4]].triggerNote(cellIdSplit[0], time, project.activePatternsMaster[i][notesTempIndex][0][j]);
                        project.instrumentsArray[cellIdSplit[4]].triggerNoteRelease(cellIdSplit[0], (time + duration), project.activePatternsMaster[i][notesTempIndex][0][j]);

                    } else if (cellIdSplit[3] === 'drums') {

                        project.instrumentsArray[cellIdSplit[4]].triggerDrum(cellIdSplit[0], time);

                        if (cellIdSplit[4] == project.activeInstrument && main.instrumentAnimationOk) {


                            main.instrumentAnimation = Tone.Draw.schedule(() => {
                                project.instrumentsArray[project.activeInstrument].blink(parseInt(cellIdSplit[0]));
                            }, time)

                        }
                    }
                }
                for (let j = 0; j < project.activePatternsMaster[i][notesTempIndex][1].length; j++) {
                    let cellIdSplit = project.activePatternsMaster[i][notesTempIndex][1][j].split('.');
                    project.instrumentsArray[cellIdSplit[4]].deactivateNote(cellIdSplit[0], project.activePatternsMaster[i][notesTempIndex][1][j]);
                }

                if (main.record && notesTempIndex === project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0]) {

                    for (let i = 0; i < sequencer.recordingNotes.length; i++) {

                        sequencer.recordingNotes[i].endStep = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];
                        let noteLength = (sequencer.recordingNotes[i].endStep - sequencer.recordingNotes[i].startStep + 1) * 12 - 1;
                        let noteId = `${sequencer.recordingNotes[i].note}.${noteLength}.${sequencer.recordingNotes[i].startStep}.${sequencer.recordingNotes[i].instrumentType}.${sequencer.recordingNotes[i].instrumentNumber}`;

                        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][sequencer.recordingNotes[i].startStep][0].push(noteId);
                        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][sequencer.recordingNotes[i].endStep][1].push(noteId);
                        sequencer.recordingNotes[i].startStep = 1;
                    }

                }

            }



            // Read Automation unless the parameter is currently recording new automation

            for (let j = 0; j < project.activeAutomationPatternsMaster[i][sequencer.tempIndex][0].length; j++) {

                let automationObject = project.activeAutomationPatternsMaster[i][sequencer.tempIndex][0][j];


                if (automationObject.parameter !== main.activeAutomation.parameter || automationObject.instrument !== project.activeInstrument) {

                    project.instrumentsArray[automationObject.instrument].automation.readAutomation(automationObject, sequencer.tempIndex, time);

                }

            }

        }

        // Record Automation if Record is enabled

        if (main.record && main.activeAutomation.active) {

            sequencer.automationInput(sequencer.tempIndex);

        }

        if (project.index === project.stepLengthMaster) {
            project.index = 1;
        } else {
            project.index++;
        }
    }
}