import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';
import { sequencer } from '../sequencer/sequencer.js';
import { instruments } from '../instruments/instruments.js';
import { mainInterface } from './mainInterface.js';
import { songMode } from '../songMode/songMode.js';

export function eventListenersSong() {


    document.getElementById('bpmMinus').addEventListener('mousedown', mainInterface.lessBpm);
    document.getElementById('bpmPlus').addEventListener('mousedown', mainInterface.moreBpm);
    document.getElementById('rewindButton').addEventListener('mousedown', mainInterface.rewindButton);
    document.getElementById('playButton').addEventListener('mousedown', function () {
        songMode.startButton();
    });
    document.getElementById('recordButton').addEventListener('click', function () {
        mainInterface.recordButton();
    });

    document.getElementById('mixerMode').addEventListener('click', function () {

        mainInterface.changeMode('mixer')
    });

    document.getElementById('patternMode').addEventListener('click', function () {

        mainInterface.changeMode('pattern')
    });

    document.getElementById('songMode').addEventListener('click', function () {

        mainInterface.changeMode('song')
    });

    document.getElementById('exportButtonSong').addEventListener('click', function () {

        songMode.exportSong('start');
    });

};