import { addAutomationPoint } from './addAutomationPoint.js';
import { activate } from './activate.js';
import { activeStep } from './activeStep.js';
import { automationInput } from './automationInput.js';
import { calcTempIndex } from './calcTempIndex.js'
import { calcTime } from './calcTime.js';
import { checkLongestPattern } from './checkLongestPattern.js';
import { doubleBars } from './doubleBars.js';
import { drawAutomationLines } from './drawAutomationLines.js';
import { drawAutomationPoints } from './drawAutomationPoints.js';
import { drawSeqResetScroll } from './drawSeqResetScroll.js';
import { drawSequencer } from './drawSequencer.js';
import { drawSequencerAutomation } from './drawSequencerAutomation.js';
import { drawCells } from './drawCells.js';
import { lessBars } from './lessBars.js';
import { moreBars } from './moreBars.js';
import { movePlayerHead } from './movePlayerHead.js';
import { resizeNote } from './resizeNote.js';
import { sequencerFunction } from './sequencerFunction.js';
import { timeLinePicker } from './timeLinePicker.js';
import { updatePatternLengthValue } from './updatePatternLengthValue.js';
import { zoom } from './zoom.js';


export let sequencer = {
    addAutomationPoint,
    automationInput,
    lastTimeLineRulerCell: 0,
    lastTimeLinePickerCell: 0,
    activeCellsHtml: '',
    cellsHtml: '',
    html: '',
    cellWidth: 0,
    cellHeight: 0,
    tempIndex: 0,
    recordingNotes: [],

    activate,
    activeStep,
    calcTempIndex,
    calcTime,
    checkLongestPattern,
    doubleBars,
    drawAutomationLines,
    drawAutomationPoints,
    drawSeqResetScroll,
    drawSequencer,
    drawSequencerAutomation,
    drawCells,
    lessBars,
    moreBars,
    movePlayerHead,
    resizeNote,
    sequencerFunction,
    timeLinePicker,
    updatePatternLengthValue,
    zoom

}