import { project } from "../index.js";
import { main } from '../mainParameters/main.js';
export function isSpaceForPattern(targetInstrument, start) {

    let isThereSpace = true;

    let patternObject = {

        start: start,
        end: start + (project.instrumentsArray[project.activeInstrumentSongMode].patterns[main.songModePickedPattern][0][1] / 4) - 1,
            
    }

    for (let i = 0; i < project.instrumentsArray[targetInstrument].songModePatterns.length; i++) {

        if (patternObject.start >= project.instrumentsArray[targetInstrument].songModePatterns[i].start
            && patternObject.start <= project.instrumentsArray[targetInstrument].songModePatterns[i].end) {

                isThereSpace = false;
                break;

        }

        if (patternObject.end >= project.instrumentsArray[targetInstrument].songModePatterns[i].start
            && patternObject.end <= project.instrumentsArray[targetInstrument].songModePatterns[i].end) {
    
                isThereSpace = false;
                break;
    
        }

        if (patternObject.start <= project.instrumentsArray[targetInstrument].songModePatterns[i].start
            && patternObject.end >= project.instrumentsArray[targetInstrument].songModePatterns[i].end) {

                isThereSpace = false;
                break;

            }

    }

    return isThereSpace;
}