import { project } from '../index.js';

export function setSongPatternLength() {

    // Check the active songMode patterns on all instruments and check end points for highest number

    let patternLength = 1;

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        for (let j = 0; j < project.instrumentsArray[i].songModePatterns.length; j++) {

            if (patternLength < project.instrumentsArray[i].songModePatterns[j].end) {

                patternLength = project.instrumentsArray[i].songModePatterns[j].end;

            }
        }
    }

    if (patternLength > 1) {

        patternLength = patternLength * 16 + 1; 

    } else {

        patternLength = 2;

    }
    if (project.songModeIndex > patternLength) {

        project.songModeIndex = 1;

    }

    project.songModePatterns.length = patternLength;

}