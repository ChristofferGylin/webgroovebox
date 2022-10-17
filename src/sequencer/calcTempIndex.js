import { project } from '../index.js';

export function calcTempIndex(i) {
    let patternIndex
    let activePatternLength = project.activePatternsMaster[i][0][0] * 2;

    if (project.index > activePatternLength && project.index <= activePatternLength * 2) {


        patternIndex = project.index - activePatternLength;

    } else {

        let foundIt = false;

        for (let j = 3; j <= 64; j++) {

            if (project.index > activePatternLength && project.index <= activePatternLength * j) {
                patternIndex = project.index - activePatternLength * (j - 1);
                foundIt = true;

                break;

            }
        }

        if (!foundIt) {

            patternIndex = project.index;

        }
    }

    return patternIndex;
}