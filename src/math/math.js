import { calcNoteLength } from './calcNoteLength.js';
import { cubeCurve } from './cubeCurve.js';
import { logCurve } from './logCurve.js';
import { pitchCurve } from './pitchCurve.js';
import { scaleValue } from './scaleValue.js';
import { ticksToSteps } from './ticksToSteps.js';


export let math = {
    
    calcNoteLength,
    cubeCurve,
    logCurve,
    pitchCurve,
    scaleValue,
    ticksToSteps,

    // Note lengths in ticks:

    noteLengths: {

        note8: 96,
        note16: 48,
        note32: 24,
        note64: 12

    },

}