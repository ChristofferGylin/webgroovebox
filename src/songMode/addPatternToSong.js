import { project } from '../index.js';

export function addPatternToSong(targetInstrument, pattern, start, alien, originInstrument) {

    let patternObject = {

        idNumber: project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][0][3],
        lengthOriginal: project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][0][1] / 4,
        lengthActual: (project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][0][1] / 4),
        start: start,
        end: start + (project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][0][1] / 4) - 1,
        alien: false,
        originInstrument: targetInstrument,
        targetInstrument: targetInstrument

    }

    let arrayStartIndex;

    if (patternObject.start === 1) {

        arrayStartIndex = 1;

    } else {

        arrayStartIndex = ((patternObject.start - 1) * 16) + 1;

    }

    if (alien !== undefined) {

        patternObject.alien = true;
        patternObject.originInstrument = originInstrument;

    }

    project.instrumentsArray[targetInstrument].songModePatterns.push(patternObject);

    while (project.songModePatterns.length <= patternObject.end * 16) {

        let temp = [[], []];
        project.songModePatterns.push(temp);

    }

    if (alien) {

        for (let i = 1; i < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length; i++) {

            for (let j = 0; j < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][0].length; j++) {

                let id = project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][0][j];
                let idSplit = id.split('.');
                let newId = `${idSplit[0]}.${idSplit[1]}.${idSplit[2]}.${idSplit[3]}.${targetInstrument}`;
                project.songModePatterns[arrayStartIndex + i - 1][0].push(newId);

            }

            for (let j = 0; j < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][1].length; j++) {

                let id = project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][1][j];
                let idSplit = id.split('.');
                let newId = `${idSplit[0]}.${idSplit[1]}.${idSplit[2]}.${idSplit[3]}.${targetInstrument}`;
                project.songModePatterns[arrayStartIndex + i - 1][1].push(newId);

            }
        }

    } else {

        for (let i = 1; i < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern].length; i++) {

            for (let j = 0; j < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][0].length; j++) {

                project.songModePatterns[arrayStartIndex + i - 1][0].push(project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][0][j]);

            }

            for (let j = 0; j < project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][1].length; j++) {

                project.songModePatterns[arrayStartIndex + i - 1][1].push(project.instrumentsArray[project.activeInstrumentSongMode].patterns[pattern][i][1][j]);

            }
        }

    }


}