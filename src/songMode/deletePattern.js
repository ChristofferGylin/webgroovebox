import { project } from '../index.js';
import { songMode } from './songMode.js'; 

export function deletePattern(e) {
    
    // determine the right instrument and pattern from event target id
    // id syntax = songModePatternCloseIconSvg.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}
    
    let id = e.currentTarget.id;
    let idSplit = id.split('.');
    let instrumentNumber = parseInt(idSplit[1]);
    let patternIdNumber = parseInt(idSplit[2]);
    let gridPatternStart = parseInt(idSplit[3]);
    let arrayPatternStart;
    let arrayPatternEnd;
    let pattern;

    for (let i = 0; i < project.instrumentsArray[instrumentNumber].songModePatterns.length; i++) {

        if (project.instrumentsArray[instrumentNumber].songModePatterns[i].idNumber === patternIdNumber && project.instrumentsArray[instrumentNumber].songModePatterns[i].start === gridPatternStart) {

            pattern = project.instrumentsArray[instrumentNumber].songModePatterns[i];
            arrayPatternStart = (project.instrumentsArray[instrumentNumber].songModePatterns[i].start - 1) * 16 + 1;
            arrayPatternEnd = (project.instrumentsArray[instrumentNumber].songModePatterns[i].end) * 16;
            
            // delete the pattern from instrument.songModePatterns
            
            project.instrumentsArray[instrumentNumber].songModePatterns.splice(i, 1);
            break;

        }
    }

    // delete the triggers from the song pattern array

    for (let i = arrayPatternStart; i <= arrayPatternEnd; i++) {

        for (let j = 0; j < project.songModePatterns[i][0].length; j++) {

            let arrayItemId = project.songModePatterns[i][0][j];
            let arrayItemSplit = arrayItemId.split('.');

            if (parseInt(arrayItemSplit[4]) === instrumentNumber) {

                project.songModePatterns[i][0].splice(j, 1);
                j--;

            }
        }

        for (let j = 0; j < project.songModePatterns[i][1].length; j++) {

            let arrayItemId = project.songModePatterns[i][1][j];
            let arrayItemSplit = arrayItemId.split('.');

            if (parseInt(arrayItemSplit[4]) === instrumentNumber) {

                project.songModePatterns[i][1].splice(j, 1);
                j--;

            }
        }
    }
    
    songMode.setSongPatternLength();
    songMode.drawSongMode();

}