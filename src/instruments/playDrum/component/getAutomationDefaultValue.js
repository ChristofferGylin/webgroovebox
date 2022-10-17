import { project } from "../../../index.js";

export function getAutomationDefaultValue() {

    let value;
    let idSplit = this.automation.selectedParameter.split(' ');
    let drumNumber = parseInt(idSplit[2]) - 1;

    switch (idSplit[0]) {

        case 'Attack':
            value = project.instrumentsArray[project.activeInstrument].drums[drumNumber].knobValues.attack;
            break;

        case 'Decay':
            value = project.instrumentsArray[project.activeInstrument].drums[drumNumber].knobValues.decay;
            break;

        case 'Level':

            break;

        case 'Tune':
            value = project.instrumentsArray[project.activeInstrument].drums[drumNumber].knobValues.tune;
            break;


        default:
            break;
    }

    return value;

}