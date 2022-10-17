import { math } from '../math/math.js';
import { project } from '../index.js';
import { sequencer } from './sequencer.js';

export function activate(elem) {

    let cellClassList = elem.getAttribute('class');
    let cellClassSplit = cellClassList.split(' ');
    let cellClass = cellClassSplit[0];
    let cellName = elem.id;
    let cellSplit = cellName.split('.');
    let cellNumberRelease;
    let cellNameRelease;
    let resizeCell = document.getElementById(`${cellName}.Resize`);

    if (cellSplit[3] === 'keys') {

        let duration = math.ticksToSteps(parseInt(cellSplit[1]) + 1) - 1;
        cellNumberRelease = parseInt(cellSplit[2]) + duration;
        cellNameRelease = cellName.replace(cellSplit[2], cellNumberRelease);

    }


    if (cellClass === 'sequencerCell') {

        elem.setAttribute('class', `sequencerCellActive ${cellClassSplit[1]}`);

        project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0].push(cellName);
        if (cellSplit[3] === 'keys') {
            project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1].push(cellName);
        }
        resizeCell.setAttribute('class', `sequencerCellResize ${cellClassSplit[1]}`);


    } else if (cellClass === 'sequencerCellActive') {
        elem.setAttribute('class', `sequencerCell ${cellClassSplit[1]}`);

        for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0].length; i++) {
            if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0][i] === cellName) {

                project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0].splice(i, 1);

            }
        }

        if (cellSplit[3] === 'keys') {

            for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1].length; i++) {
                if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1][i] === cellName) {

                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1].splice(i, 1);
                    project.instrumentsArray[project.activeInstrument].deactivateCell(elem.id);

                }
            }
        }

        resizeCell.setAttribute('class', `sequencerCellResize`);
    } else if (cellClass === 'sequencerCellActiveAlien') {

        for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0].length; i++) {
            if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0][i] === cellName) {

                project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellSplit[2]][0].splice(i, 1);

            }
        }

        if (cellSplit[3] === 'keys') {

            for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1].length; i++) {
                if (project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1][i] === cellName) {

                    project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][cellNumberRelease][1].splice(i, 1);
                    project.instrumentsArray[project.activeInstrument].deactivateCell(elem.id);

                }
            }
        }

        sequencer.drawSeqResetScroll();

    }
}

