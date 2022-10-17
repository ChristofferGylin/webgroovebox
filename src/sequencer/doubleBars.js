import { project } from '../index.js';
import { sequencer } from './sequencer.js';

export function doubleBars() {

    let activePatternSteps = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];
    let activePatternLength = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1];


    if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].length - 1 <= activePatternSteps && activePatternLength < 64) {
        for (let i = 1; i <= activePatternSteps; i++) {

            if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length > 0 ||
                project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][1].length > 0) {
                let newCellId0 = [];
                let newCellId1 = [];
                let isCell0 = false;
                let isCell1 = false;

                if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length > 0) {
                    isCell0 = true;
                    for (let j = 0; j < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length; j++) {
                        let oldCellId = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j];
                        let newCellIdSplit = oldCellId.split('.');
                        let newCellNumber = parseInt(newCellIdSplit[2], 10) + activePatternSteps;
                        newCellId0.push(`${newCellIdSplit[0]}.${newCellIdSplit[1]}.${newCellNumber}.${newCellIdSplit[3]}.${newCellIdSplit[4]}`);

                    }
                }

                if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][1].length > 0) {
                    isCell1 = true;
                    for (let j = 0; j < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][1].length; j++) {
                        let oldCellId = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][1][j];
                        let newCellIdSplit = oldCellId.split('.');
                        let newCellNumber = parseInt(newCellIdSplit[2], 10) + activePatternSteps;
                        newCellId1.push(`${newCellIdSplit[0]}.${newCellIdSplit[1]}.${newCellNumber}.${newCellIdSplit[3]}.${newCellIdSplit[4]}`);

                    }
                }

                if (isCell0 && isCell1) {
                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].push([newCellId0, newCellId1]);
                }

                if (!isCell0 && isCell1) {
                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].push([[], newCellId1]);
                }

                if (isCell0 && !isCell1) {
                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].push([newCellId0, []]);
                }


            } else {
                project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern].push([[], []]);
            }
        }
    }

    if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern].length - 1 <= activePatternSteps * 2 && activePatternLength < 64) {

        for (let i = 1; i <= activePatternSteps * 2; i++) {

            if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length > 0) {

                let autoCell = [];


                if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length > 0) {

                    for (let j = 0; j < project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length; j++) {

                        let autoObject = {
                            instrument: project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].instrument,
                            parameter: project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].parameter,
                            value: project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].value,
                            hasRamp: project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].hasRamp,
                            nextValue: project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].nextValue,
                            rampDuration: project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].rampDuration
                        }

                        autoCell.push(autoObject);

                    }
                }

                project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern].push([autoCell]);



            } else {
                project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern].push([[], []]);
            }
        }

    }

    let tempPatternLength = activePatternLength * 2;

    if (tempPatternLength > 64) {
        tempPatternLength = 64;
    }

    let tempActivePatternSteps = tempPatternLength * 4;

    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0] = tempActivePatternSteps;
    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1] = tempPatternLength;
    project.activePatternsMaster[project.activeInstrument] = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern];

    sequencer.checkLongestPattern();
    sequencer.updatePatternLengthValue();
    if (project.mode === 'pattern') {
        sequencer.drawSequencer();
    }

}