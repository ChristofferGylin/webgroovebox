import { math } from '../math/math.js';
import { project } from '../index.js';

export function drawCells(j, note, octave, alien, alienId) {

    let divClass = `class="sequencerCell color${project.instrumentsArray[project.activeInstrument].color}"`;
    let noteLength;
    let divId;
    let xPos;
    let yPos;
    let height;
    let width;
    let isActive = false;
    let hasAlienActive = false;

    // id syntax: note.length.cellNumber.type.instrumentnumber example: A3.95.9.keys.0

    let alienIdSplit;

    if (alien) {

        alienIdSplit = alienId.split('.');
        noteLength = parseInt(alienIdSplit[1]);

    } else {

        noteLength = math.calcNoteLength();

    }

    if (j % (64 / project.instrumentsArray[project.activeInstrument].gridResolution) === 0 || alien) {

        if (project.instrumentsArray[project.activeInstrument].type === 'drums') {

            divId = `${note}.${noteLength}`;

        } else if ((project.instrumentsArray[project.activeInstrument].type === 'keys')) {

            divId = `${note + octave}.${noteLength}`;

        }

        let divIdString;
        let minus = (64 / project.instrumentsArray[project.activeInstrument].gridResolution) - 1;
        let cellNumber = j - minus;

        if (alien) {

            cellNumber = parseInt(alienIdSplit[2]);

        }

        divId += `.${cellNumber}`;
        divId += `.${project.instrumentsArray[project.activeInstrument].type}.${project.instrumentsArray[project.activeInstrument].instrumentNumber}`;

        if (alien) {

            divClass = `class="sequencerCellActiveAlien color${project.instrumentsArray[project.activeInstrument].color}"`;
            isActive = true;

        } else {

            for (let k = 0; k < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumber][0].length; k++) {

                if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumber][0][k] === divId) {

                    divClass = `class="sequencerCellActive color${project.instrumentsArray[project.activeInstrument].color}"`;
                    isActive = true;
                    break;
                }
            }

        }

        let numberOfTicks = noteLength + 1;
        let widthMultiplier = numberOfTicks / 12;
        width = 8 * widthMultiplier - 1;
        let noteStepLength;

        if (!isActive && !alien) {



            switch (project.instrumentsArray[project.activeInstrument].gridResolution) {

                case 8:
                    noteStepLength = 8;
                    break;

                case 16:
                    noteStepLength = 4;
                    break;

                case 32:
                    noteStepLength = 2;
                    break;

                case 64:
                    noteStepLength = 1;
                    break;

            }

            width = this.cellWidth;
            let endStep = cellNumber + noteStepLength - 1;

            if (endStep > project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0]) {

                endStep = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];

            }

            if (project.instrumentsArray[project.activeInstrument].gridResolution === 64) {

                for (let k = 0; k < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumber][0].length; k++) {

                    // id syntax: note.length.cellNumber.type.instrumentnumber example: A3.95.9.keys.0

                    let splitId = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumber][0][k].split('.');

                    if (project.instrumentsArray[project.activeInstrument].type === 'drums') {

                        if (parseInt(splitId[0]) === note) {

                            if (parseInt(splitId[4]) === project.instrumentsArray[project.activeInstrument].instrumentNumber) {

                                hasAlienActive = true;
                                this.drawCells(cellNumber, note, 0, true, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumber][0][k]);

                            }


                        }

                    } else if (project.instrumentsArray[project.activeInstrument].type === 'keys') {

                        if (splitId[0] === note + octave) {

                            if (parseInt(splitId[4]) === project.instrumentsArray[project.activeInstrument].instrumentNumber) {

                                hasAlienActive = true;
                                this.drawCells(cellNumber, note, octave, true, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumber][0][k]);

                            }
                        }
                    }
                }

            } else {

                for (let l = endStep; l >= cellNumber; l--) {


                    for (let k = 0; k < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][l][0].length; k++) {
                        // id syntax: note.length.cellNumber.type.instrumentnumber example: A3.95.9.keys.0
                        let splitId = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][l][0][k].split('.');

                        if (parseInt(splitId[4]) === project.instrumentsArray[project.activeInstrument].instrumentNumber) {

                            if (project.instrumentsArray[project.activeInstrument].type === 'drums') {

                                if (parseInt(splitId[0]) === note) {

                                    if (parseInt(splitId[4]) === project.instrumentsArray[project.activeInstrument].instrumentNumber) {

                                        hasAlienActive = true;
                                        this.drawCells(parseInt(splitId[2]), note, 0, true, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][l][0][k]);

                                    }
                                }

                            } else if (project.instrumentsArray[project.activeInstrument].type === 'keys') {

                                if (splitId[0] === note + octave) {

                                    if (parseInt(splitId[4]) === project.instrumentsArray[project.activeInstrument].instrumentNumber) {

                                        hasAlienActive = true;
                                        this.drawCells(parseInt(splitId[2]), note, octave, true, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][l][0][k]);

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        height = this.cellHeight - 1;
        let noteMultiplier;
        let octaveMultiplier;

        switch (note) {

            case 'C':
                noteMultiplier = 11;
                break;

            case 'C#':
                noteMultiplier = 10;
                break;

            case 'D':
                noteMultiplier = 9;
                break;

            case 'D#':
                noteMultiplier = 8;
                break;

            case 'E':
                noteMultiplier = 7;
                break;

            case 'F':
                noteMultiplier = 6;
                break;

            case 'F#':
                noteMultiplier = 5;
                break;

            case 'G':
                noteMultiplier = 4;
                break;

            case 'G#':
                noteMultiplier = 3;
                break;

            case 'A':
                noteMultiplier = 2;
                break;

            case 'A#':
                noteMultiplier = 1;
                break;

            case 'B':
                noteMultiplier = 0;
                break;

        }

        switch (octave) {

            case 1:
                octaveMultiplier = 3;
                break;

            case 2:
                octaveMultiplier = 2;
                break;

            case 3:
                octaveMultiplier = 1;
                break;

            case 4:
                octaveMultiplier = 0;
                break;

        }

        let xPosMultiplier;

        if (alien) {

            xPosMultiplier = 1;
            xPos = (8) * (j / xPosMultiplier) - (8);

        } else {

            switch (project.instrumentsArray[project.activeInstrument].gridResolution) {

                case 8:
                    xPosMultiplier = 8;
                    break;

                case 16:
                    xPosMultiplier = 4;
                    break;

                case 32:
                    xPosMultiplier = 2;
                    break;

                case 64:
                    xPosMultiplier = 1;
                    break;

            }

            xPos = (width + 1) * (j / xPosMultiplier) - (width + 1);

        }

        if (project.instrumentsArray[project.activeInstrument].type === 'drums') {

            yPos = (height + 2) * note + 1;

        } else if (project.instrumentsArray[project.activeInstrument].type === 'keys') {

            yPos = (height + 2) * (noteMultiplier + (octaveMultiplier * 12)) + 1;

        }

        divIdString = `id="${divId}"`;

        if (!hasAlienActive) {

            let resizeWidth;

            // if notelength is 11 it is a 64th note, set a smaller resize area of 2px, else set 3px

            if (noteLength === 11) {

                resizeWidth = 2;

            } else {

                resizeWidth = 3;

            }

            let resizeXPos = xPos + width - resizeWidth;
            let resizeIdString = `id="${divId}.Resize"`;
            let resizeClass = ``;

            if (divClass === `class="sequencerCell color${project.instrumentsArray[project.activeInstrument].color}"`) {

                resizeClass = `class="sequencerCellResize"`;

            } else {

                resizeClass = `class="sequencerCellResize color${project.instrumentsArray[project.activeInstrument].color}"`;

            }

            this.cellsHtml += `<rect ${divClass} ${divIdString} x="${xPos}" y="${yPos}" width="${width}" height="${height}" /><rect ${resizeClass} ${resizeIdString} x="${resizeXPos}" y="${yPos}" width="${resizeWidth}" height="${height}" fill="none" />`;

        }
    }
}