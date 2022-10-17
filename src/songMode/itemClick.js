import { project } from '../index.js';

export function itemClick(itemNumber) {

    itemNumber = parseInt(itemNumber);

    if (itemNumber !== project.activeInstrumentSongMode) {

        document.getElementById(`songModeInstrumentItem.${project.activeInstrumentSongMode}`).className = 'songModeInstrumentItem';
        project.activeInstrumentSongMode = itemNumber;
        document.getElementById(`songModeInstrumentItem.${project.activeInstrumentSongMode}`).className = 'songModeInstrumentItemActive';
        this.listPatterns();

    }
}