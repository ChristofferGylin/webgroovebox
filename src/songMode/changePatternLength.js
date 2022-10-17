import { project } from '../index.js';
import { checkLongestPattern } from '../sequencer/checkLongestPattern.js';
import { songMode } from './songMode.js';

export function changePatternLength(initialLength, targetPattern) {

    targetPattern.end = targetPattern.start - 1 + targetPattern.lengthActual;
    let instrumentNumber = targetPattern.targetInstrument;
    let arrayPatternStart = (targetPattern.start - 1) * 16 + 1;
    let arrayPatternEnd = (targetPattern.end + 1) * 16;

    if (initialLength > targetPattern.lengthActual) {

        // Check the difference between old and new loop length

        let difference = initialLength - targetPattern.lengthActual;
        arrayPatternStart = (targetPattern.end) * 16 + 1;
        arrayPatternEnd = (targetPattern.start + initialLength - 1) * 16;

        // delete the triggers from the song pattern array within the span of the loop length difference

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

    } else {

        // Check the difference between old and new loop length

        let difference = targetPattern.lengthActual - initialLength;
        arrayPatternStart = (initialLength + targetPattern.start - 1) * 16 + 1;
        arrayPatternEnd = (initialLength + difference + targetPattern.start - 1) * 16;
        let newArrayStartIndex = arrayPatternStart;
        let pattern;

        for (let i = 0; i < project.instrumentsArray[targetPattern.originInstrument].patterns.length; i++) {

            if (project.instrumentsArray[targetPattern.originInstrument].patterns[i][0][3] === targetPattern.idNumber) {

                pattern = i;

            }

        }

        // determine newArrayStartIndex

        if (arrayPatternStart < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length) {

            newArrayStartIndex = arrayPatternStart;

        } else {

            while (true) {

                if (newArrayStartIndex > project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length - 1) {

                    newArrayStartIndex = newArrayStartIndex - (project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length - 1);

                } else {

                    break;
                }

            }
            /*
            for (let i = 1; i < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length; i++) {

                newArrayStartIndex++;

                if (newArrayStartIndex === arrayPatternStart) {

                    break;

                } else {

                    if (i + 1 === project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length) {

                        i = 1;

                    }
                }
            }
            */
        }

        // make songModePatterns Array longer if necesary

        while (project.songModePatterns.length <= arrayPatternEnd) {

            let temp = [[], []];
            project.songModePatterns.push(temp);

        }

        // Add triggers to the song pattern array 

        if (targetPattern.alien) {

            for (let i = arrayPatternStart; i <= arrayPatternEnd; i++) {



                for (let j = 0; j < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][newArrayStartIndex][0].length; j++) {

                    let id = project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][newArrayStartIndex][0][j];
                    let idSplit = id.split('.');
                    let newId = `${idSplit[0]}.${idSplit[1]}.${idSplit[2]}.${idSplit[3]}.${instrumentNumber}`;
                    project.songModePatterns[i][0].push(newId);

                }

                for (let j = 0; j < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][newArrayStartIndex][1].length; j++) {

                    let id = project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][newArrayStartIndex][1][j];
                    let idSplit = id.split('.');
                    let newId = `${idSplit[0]}.${idSplit[1]}.${idSplit[2]}.${idSplit[3]}.${instrumentNumber}`;
                    project.songModePatterns[i][1].push(newId);

                }
                newArrayStartIndex++;

                if (newArrayStartIndex > project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length) {

                    newArrayStartIndex = 1;

                }

            }

        } else {

            for (let i = arrayPatternStart; i <= arrayPatternEnd; i++) {

                for (let j = 0; j < project.instrumentsArray[targetPattern.originInstrument].patterns[pattern][newArrayStartIndex][0].length; j++) {

                    project.songModePatterns[i][0].push(project.instrumentsArray[targetPattern.originInstrument].patterns[pattern][newArrayStartIndex][0][j]);

                }

                for (let j = 0; j < project.instrumentsArray[targetPattern.originInstrument].patterns[pattern][newArrayStartIndex][1].length; j++) {

                    project.songModePatterns[i][1].push(project.instrumentsArray[targetPattern.originInstrument].patterns[pattern][newArrayStartIndex][1][j]);

                }

                newArrayStartIndex++;

                if (newArrayStartIndex >= project.instrumentsArray[targetPattern.originInstrument].patterns[pattern].length) {

                    newArrayStartIndex = 1;

                }

            }



        }

    }

    songMode.setSongPatternLength();
    songMode.drawSongMode();

}