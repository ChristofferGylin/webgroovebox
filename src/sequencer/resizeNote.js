
import { project } from '../index.js';
import { sequencer } from './sequencer.js';

export function resizeNote(elem) {

    let svg = document.getElementById('sequencerCellsSvg');
    let svgPt = svg.createSVGPoint(); // Used to get the mouse cursors position relative to the svg
    let targetId = elem.target.id.replace('.Resize', '');
    let targetIdSplit = targetId.split('.');
    let stepIndexStart = parseInt(targetIdSplit[2]);
    let stepIndexEnd;
    let target = document.getElementById(targetId);
    let ticksToAdd;
    let stepsToAdd;
    let widthToAdd
    let isStartDrag = false;
    let targetXPos = parseInt(target.getAttribute('x'));
    let targetWidth = parseInt(target.getAttribute('width'));
    let targetEndPos = targetXPos + targetWidth;
    let targetTicks = parseInt(targetIdSplit[1]);
    let orgStepIndexEnd = stepIndexStart + ((targetTicks + 1) / 12);
    let inputTolerance = 10;
    let newId;
    let note = targetIdSplit[0];
    let isFirstResize = true;

    switch (project.instrumentsArray[project.activeInstrument].gridResolution) {

        case 8:

            ticksToAdd = 96;
            stepsToAdd = 8;
            break;

        case 16:

            ticksToAdd = 48;
            stepsToAdd = 4;
            break;

        case 32:

            ticksToAdd = 24;
            stepsToAdd = 2;
            break;

        case 64:

            ticksToAdd = 12;
            stepsToAdd = 1;
            inputTolerance = 3;
            break;

    }

    widthToAdd = 8 * stepsToAdd;
    stepIndexEnd = orgStepIndexEnd - 1;

    startDrag(elem)

    function startDrag() {

        window.addEventListener('mousemove', function (event) {

            drag(event);

        });
        window.addEventListener('mouseup', endDrag);

        window.addEventListener('touchmove', drag);
        window.addEventListener('touchend', endDrag);
        window.addEventListener('touchcancel', endDrag);
        svg.style.cursor = 'ew-resize';
        isStartDrag = true;
        elem.target.setAttribute('class', 'sequencerCellResize');


    }

    function drag(event) {

        if (isStartDrag) {

            let svgPos = getSvgPos(event);
            let tempWidth;
            let tempWidthMinus;
            let tempTicksToAdd;
            let tempStepsToAdd;
            let tempTicksToSubtract;
            let tempStepsToSubtract;
            let blockingNote = false;

            if (isFirstResize) {

                let newEndIndexMinus = orgStepIndexEnd;

                while (true) {

                    if (newEndIndexMinus % (64 / project.instrumentsArray[project.activeInstrument].gridResolution) === 0) {

                        break;

                    }

                    newEndIndexMinus--;

                }

                tempStepsToSubtract = orgStepIndexEnd - 1 - newEndIndexMinus;
                tempTicksToSubtract = tempStepsToSubtract * 12;
                tempWidthMinus = 8 * tempStepsToSubtract;

            } else {

                tempWidthMinus = widthToAdd;
                tempTicksToSubtract = ticksToAdd
                tempStepsToSubtract = stepsToAdd;

            }

            if (svgPos > targetEndPos + inputTolerance) {

                if (isFirstResize) {

                    let newEndIndex = orgStepIndexEnd;

                    while (true) {

                        if (newEndIndex % (64 / project.instrumentsArray[project.activeInstrument].gridResolution) === 0) {

                            break;

                        }

                        newEndIndex++;

                    }

                    tempStepsToAdd = newEndIndex - orgStepIndexEnd + 1;
                    tempTicksToAdd = tempStepsToAdd * 12;
                    tempWidth = 8 * tempStepsToAdd;

                } else {

                    tempWidth = widthToAdd;
                    tempTicksToAdd = ticksToAdd
                    tempStepsToAdd = stepsToAdd;

                }

                let tempStepIndexEnd = stepIndexEnd;

                if (isFirstResize) {


                    tempStepIndexEnd += tempStepsToAdd;

                } else {

                    tempStepIndexEnd += stepsToAdd;

                }

                for (let i = stepIndexEnd; i <= tempStepIndexEnd; i++) {

                    for (let j = 0; j < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0].length; j++) {

                        let tempSplit = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][i][0][j].split('.');

                        if (tempSplit[0] === note) {

                            blockingNote = true;

                        }
                    }

                }

                if (!blockingNote) {

                    targetIdSplit = targetId.split('.');
                    targetWidth += tempWidth;
                    target.setAttribute('width', targetWidth);
                    targetEndPos = targetXPos + targetWidth;

                    targetTicks += tempTicksToAdd
                    newId = `${targetIdSplit[0]}.${targetTicks}.${targetIdSplit[2]}.${targetIdSplit[3]}.${targetIdSplit[4]}`;

                    for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0].length; i++) {

                        let tempSplit = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0][i].split('.');

                        if (tempSplit[0] === note && parseInt(tempSplit[2]) === stepIndexStart) {

                            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0].splice(i, 1);

                        }
                    }

                    if (targetIdSplit[3] === 'keys') {

                        for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1].length; i++) {

                            let tempSplit = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1][i].split('.');

                            if (tempSplit[0] === note && parseInt(tempSplit[2]) === stepIndexStart) {

                                project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1].splice(i, 1);

                            }
                        }
                    }

                    targetId = newId;

                    if (isFirstResize) {

                        isFirstResize = false;
                        stepIndexEnd += tempStepsToAdd;

                    } else {

                        stepIndexEnd += stepsToAdd;

                    }

                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0].push(newId);

                    if (targetIdSplit[3] === 'keys') {

                        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1].push(newId);

                    }
                }

            } else if (svgPos < targetEndPos - tempWidthMinus - inputTolerance && targetWidth > widthToAdd) {



                targetWidth -= tempWidthMinus;
                target.setAttribute('width', targetWidth);
                targetEndPos = targetXPos + targetWidth;
                targetIdSplit = targetId.split('.');

                targetTicks -= tempTicksToSubtract;
                newId = `${targetIdSplit[0]}.${targetTicks}.${targetIdSplit[2]}.${targetIdSplit[3]}.${targetIdSplit[4]}`;

                for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0].length; i++) {

                    let tempSplit = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0][i].split('.');

                    if (tempSplit[0] === note && parseInt(tempSplit[2]) === stepIndexStart) {

                        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0].splice(i, 1);

                    }
                }

                if (targetIdSplit[3] === 'keys') {

                    for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1].length; i++) {

                        let tempSplit = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1][i].split('.');

                        if (tempSplit[0] === note && parseInt(tempSplit[2]) === stepIndexStart) {

                            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1].splice(i, 1);

                        }
                    }
                }

                targetId = newId;

                if (isFirstResize) {

                    isFirstResize = false;
                    stepIndexEnd -= tempStepsToSubtract;

                } else {

                    stepIndexEnd -= stepsToAdd;

                }

                project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexStart][0].push(newId);

                if (targetIdSplit[3] === 'keys') {

                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][stepIndexEnd][1].push(newId);

                }
            }
        }
    }

    function endDrag() {

        window.removeEventListener('mousemove', function (event) {

            drag(event);

        });
        window.removeEventListener('mouseup', endDrag);
        window.removeEventListener('touchmove', drag);
        window.removeEventListener('touchend', endDrag);
        window.removeEventListener('touchcancel', endDrag);
        svg.style.cursor = 'default';
        isStartDrag = false;
        sequencer.drawSeqResetScroll();

    }

    function getSvgPos(evt) {

        svgPt.x = evt.clientX;
        svgPt.y = evt.clientY;

        // The cursor point, translated into svg coordinates return cursorpt.x for X coordinate, return cursorpt.y for Y coordinate

        let cursorpt = svgPt.matrixTransform(svg.getScreenCTM().inverse());
        return cursorpt.x;

    }
}