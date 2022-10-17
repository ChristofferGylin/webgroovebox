import { project } from  '../index.js';
import { sequencer } from './sequencer.js';

export function lessBars() {
    let activePatternLength = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1];
    let activePatternSteps = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];
    let isActiveCells = false;
    if (activePatternLength <= 16 && activePatternLength > 4) {

        for (let i = activePatternSteps - 16; i < activePatternSteps; i++) {
            if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i].length > 0) {
                isActiveCells = true;
            }
        }

        if (!isActiveCells) {
            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].length -= 16;
        }

        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] -= 4;

    } else if (activePatternLength > 4) {

        for (let i = activePatternSteps - 64; i < activePatternSteps; i++) {
            if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length > 0) {
                isActiveCells = true;
            }
        }

        if (!isActiveCells) {
            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].length -= 64;
        }

        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] -= 16;
    }
    if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] < 4) {

        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] = 4;
    }
    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] * 4;
    project.activePatternsMaster[project.activeInstrument] = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern];

    sequencer.checkLongestPattern();
    sequencer.updatePatternLengthValue()
    if (project.mode === 'pattern') {
        sequencer.drawSequencer();
    }
}