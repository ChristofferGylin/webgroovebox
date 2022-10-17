
import { main } from '../mainParameters/main.js';
import { project } from '../index.js';

export function konamiChecker(e) {
    if (e.isComposing || e.keyCode === 229) {
        return;
    }

    if (e.keyCode === main.konamiCodeSolution[main.konamiCounter]) {

        main.konamiCounter++;

    } else {

        main.konamiCounter = 0;

    }

    if (main.konamiCounter === 10) {
        if (project.konami === true) {

            project.konami = false;

        } else {

            project.konami = true;


        }

        if (project.mode === 'pattern' && project.instrumentsArray[project.activeInstrument].modelName === 'G-NO 1106') {

            project.instrumentsArray[project.activeInstrument].drawInstrument();

        }

    }


}