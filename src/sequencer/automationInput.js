import { main } from '../mainParameters/main.js';
import { project } from "../index.js";
import { sequencer } from "./sequencer.js";


export function automationInput(targetIndex) {

    let autoObject = {
        instrument: project.instrumentsArray[project.activeInstrument].instrumentNumber,
        parameter: main.activeAutomation.parameter,
        value: main.activeAutomation.value,
        hasRamp: false,
        nextValue: 0,
        rampDuration: 0
    }

    if (main.activeAutomation.first) {

        main.activeAutomation.first = false;

        if (targetIndex > 1) {

            let hasAutomation = false;

            for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0].length; i++) {

                if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0][i].instrument === autoObject.instrument
                    && project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0][i].parameter === autoObject.parameter) {

                    hasAutomation = true;

                }
            }

            if (!hasAutomation) {

                let lastAutoObject = {
                    instrument: project.instrumentsArray[project.activeInstrument].instrumentNumber,
                    parameter: main.activeAutomation.parameter,
                    value: main.activeAutomation.startValue,
                    hasRamp: false,
                    nextValue: 0,
                    rampDuration: 0
                }

                project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0].push(lastAutoObject);

            }

        }



    }

    for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].length; i++) {

        if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0][i].instrument === autoObject.instrument
            && project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0][i].parameter === autoObject.parameter) {

            project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].splice(i, 1);

        }
    }

    project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].push(autoObject);

    sequencer.drawAutomationLines();
    sequencer.drawAutomationPoints();

}



