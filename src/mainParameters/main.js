
import { createColors } from './createColors.js';
import { initApp } from './initApp.js';

export let main = {

    activeAutomation: {
        active: false,
        first: false,
        parameter: '',
        value: 0,
        startValue: 0
    },
    dialogBox: false,
    hasInstruments: false,
    instrumentAnimation: undefined,
    instrumentAnimationOk: true,
    konamiCodeSolution: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    konamiCounter: 0,
    newInsertTarget: undefined,
    newProject: true,
    meterId: null,
    newSendTarget: '',
    play: false,
    record: false,
    tempSelected: '',
    textInput: false,
    ghostMouseOffsetX: 0,
    ghostMouseOffsetY: 0,
    songModeNumberOfCells: 64,
    songModePickedPattern: 0,
    colors: undefined,

    createColors,
    initApp
}