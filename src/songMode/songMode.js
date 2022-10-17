import { addPatternToSong } from './addPatternToSong.js';
import { changePatternLength } from './changePatternLength.js';
import { exportSong } from './exportSong.js';
import { pickPattern } from './pickPattern.js';
import { deletePattern } from './deletePattern.js';
import { dragPattern } from './dragPattern.js';
import { drawGrid } from './drawGrid.js';
import { dropPattern } from './dropPattern.js';
import { drawPatternGrid } from './drawPatternGrid.js';
import { drawLoopPatternGrid } from './drawLoopPatternGrid.js';
import { drawPatternsGrid } from './drawPatternsGrid.js';
import { drawPatternSelection } from './drawPatternSelection.js';
import { drawSongMode } from './drawSongMode.js';
import { isSpaceForPattern } from './isSpaceForPattern.js';
import { itemClick } from './itemClick.js';
import { listPatterns } from './listPatterns.js';
import { resizePattern } from './resizePattern.js';
import { setPatternTarget } from './setPatternTarget.js';
import { setSongPatternLength } from './setSongPatternLength.js';
import { songModeSequencer } from './songModeSequencer.js';
import { startButton } from './startButton.js';

export let songMode = {

    addPatternToSong,
    exportSong,
    changePatternLength,
    pickPattern,
    deletePattern,
    dragPattern,
    drawGrid,
    dropPattern,
    drawPatternGrid,
    drawLoopPatternGrid,
    drawPatternsGrid,
    drawPatternSelection,
    drawSongMode,
    isSpaceForPattern,
    itemClick,
    listPatterns,
    resizePattern,
    setPatternTarget,
    setSongPatternLength,
    songModeSequencer,
    startButton

}