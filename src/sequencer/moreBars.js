import { sequencer } from './sequencer.js';
import { project } from '../index.js';

export function moreBars() {

    if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] < 16) {
        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] += 4;
    } else {
        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] += 16;
    }

    if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] > 64) {
        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] = 64;
    }

    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] * 4;

    if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].length < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] + 1) {
        for (let i = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].length; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] + 1; i++) {
            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].push([[], []]);
        }
    }

    if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern].length < (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] * 2) + 1) {
        for (let i = project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern].length; i < (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] * 2) + 1; i++) {
            project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern].push([[], []]);
        }
    }


    project.activePatternsMaster[project.activeInstrument] = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern];
    sequencer.checkLongestPattern();
    sequencer.updatePatternLengthValue()
    if (project.mode === 'pattern') {
        sequencer.drawSequencer();
    }
}