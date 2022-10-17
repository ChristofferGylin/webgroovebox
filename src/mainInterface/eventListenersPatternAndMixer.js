import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';
import { sequencer } from '../sequencer/sequencer.js';
import { instruments } from '../instruments/instruments.js';
import { mainInterface } from './mainInterface.js';

export function eventListenersPatternAndMixer() {
    
    document.getElementById('bpmMinus').addEventListener('mousedown', mainInterface.lessBpm);
    document.getElementById('bpmPlus').addEventListener('mousedown', mainInterface.moreBpm);
    document.getElementById('rewindButton').addEventListener('mousedown', mainInterface.rewindButton);
    document.getElementById('playButton').addEventListener('mousedown', function () {
        mainInterface.startButton();
    });
    document.getElementById('recordButton').addEventListener('click', function () {
        mainInterface.recordButton();
    });
    document.getElementById('controlCell8th').addEventListener('mousedown', function () {
        mainInterface.gridSelect(this, 8);
    });
    document.getElementById('controlCell16th').addEventListener('mousedown', function () {
        mainInterface.gridSelect(this, 16);
    });
    document.getElementById('controlCell32th').addEventListener('mousedown', function () {
        mainInterface.gridSelect(this, 32);
    });
    document.getElementById('controlCell64th').addEventListener('mousedown', function () {
        mainInterface.gridSelect(this, 64);
    });
    document.getElementById('lessBars').addEventListener('mousedown', sequencer.lessBars);
    document.getElementById('moreBars').addEventListener('mousedown', sequencer.moreBars);
    document.getElementById('doubleBars').addEventListener('mousedown', sequencer.doubleBars);

    document.getElementById('mixerMode').addEventListener('click', function () {

        mainInterface.changeMode('mixer')
    });

    document.getElementById('patternMode').addEventListener('click', function () {

        mainInterface.changeMode('pattern')
    });

    document.getElementById('songMode').addEventListener('click', function () {

        mainInterface.changeMode('song')
    });

    document.getElementById('gNo').addEventListener('click', instruments.createGNO1106);
    document.getElementById('play.drum').addEventListener('click', instruments.createPlayDrum);

    document.getElementById('addNewInstrumentButton').addEventListener('click', function () {

        document.getElementById('newInstrumentDialog').style.display = 'block';

    });

    document.getElementById('addNewPatternButton').addEventListener('click', function () {

        dialogBoxes.addNewPattern();

    });
};