import { project } from '../index.js';
import { main } from '../mainParameters/main.js';

export function setPatternTarget(mousePosition) {

    let targetAcquired = false;
    let html = document.querySelector('html');
    let targetPositionX = mousePosition.x - main.ghostMouseOffsetX - html.scrollLeft;
    let targetPositionY = mousePosition.y - main.ghostMouseOffsetY - html.scrollTop;

    let returnObject = {

        alien: false,
        originInstrument: project.instrumentsArray[project.activeInstrumentSongMode].instrumentNumber,
        instrument: 0,
        start: 1
    }

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        let gridPosition = document.getElementById(`songModeGridSvg.${i}`).getBoundingClientRect();
        let targetPositionYBottom = targetPositionY + gridPosition.height;

        if (targetPositionX > gridPosition.left && targetPositionX < gridPosition.right) {



            if (targetPositionY > gridPosition.top && targetPositionY < gridPosition.bottom - (gridPosition.height / 2)) {

                returnObject.instrument = i;
                targetAcquired = true;
                break;

            } else if (targetPositionYBottom > gridPosition.top + (gridPosition.height / 2) && targetPositionYBottom < gridPosition.bottom) {

                returnObject.instrument = i;
                targetAcquired = true;
                break;
            }

        }

    }

    if (targetAcquired) {

        if (returnObject.originInstrument !== returnObject.instrument) {

            if (project.instrumentsArray[returnObject.originInstrument].type === project.instrumentsArray[returnObject.instrument].type) {

                returnObject.alien = true;

            } else {

                return false;

            }



        }

        for (let i = 1; i <= main.songModeNumberOfCells; i++) {

            let linePosition = document.getElementById(`seqGridVerticalLine.${returnObject.instrument}.${i}`).getBoundingClientRect();

            if (targetPositionX > linePosition.left - 16.5 && targetPositionX < linePosition.left) {

                returnObject.start = i;
                break;

            }

        }
        return returnObject;

    } else {

        return false;

    }
}