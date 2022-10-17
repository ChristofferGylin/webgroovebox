import { main } from '../../mainParameters/main.js';
import { project } from '../../index.js';

import { blink } from './component/blink.js';
import { drawPlayDrum } from './component/drawComponents/drawPlayDrum.js';
import { eventListeners } from './component/eventListeners.js';
import { getAutomationDefaultValue } from './component/getAutomationDefaultValue.js';
import { initDrums } from './component/initDrums.js';
import { kits } from './component/kits.js';
import { knobInput } from './component/knobInput.js';
import { loadKit } from './component/loadKit.js';
import { loadMixer } from './component/loadMixer.js';
import { loadNextPatch } from './component/loadNextPatch.js';
import { loadPreviousPatch } from './component/loadPreviousPatch.js';
import { makeTurnable } from './component/makeTurnable.js';
import { newPattern } from '../commonFunctions/newPattern.js';
import { setDisplayParameter } from './component/setDisplayParameter.js';
import { setKnobs } from './component/setKnobs.js';
import { sliderInput } from './component/sliderInput.js';
import { triggerDrum } from './component/triggerDrum.js';
import { pickColor } from '../commonFunctions/pickColor.js';

export class PlayDrum {
    constructor() {

        this.automationVisible = false;
        this.color = pickColor();
        this.patternIdCounter = 0;
        this.blink = blink;
        this.drawInstrument = drawPlayDrum;
        this.eventListeners = eventListeners;
        this.getAutomationDefaultValue = getAutomationDefaultValue;
        this.initDrums = initDrums;
        this.loadKit = loadKit;
        this.knobInput = knobInput;
        this.loadMixer = loadMixer;
        this.loadNextPatch = loadNextPatch;
        this.loadPreviousPatch = loadPreviousPatch;
        this.makeTurnable = makeTurnable;
        this.newPattern = newPattern;
        this.setDisplayParameter = setDisplayParameter;
        this.setKnobs = setKnobs;
        this.sliderInput = sliderInput;
        this.triggerDrum = triggerDrum;

        this.counter = 0; // counter for drawing function 
        this.initialized = false;
        this.displayTimers = [[0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]];
        this.outputCount = 12;
        this.instrumentNumber = project.numberOfInstruments;
        this.name = 'play.drum';
        this.modelName = 'play.drum';
        this.type = 'drums';
        this.patterns = [];
        this.patternsAutomation = [];

        this.songModePatterns = [];

        this.activePattern;
        this.activeKit;
        this.zoomLevelY = 1.5;
        this.zoomLevelX = 1;
        this.gridResolutionMultiplier = 1;
        this.gridResolution = 16;
        this.kits = kits;
        this.mixer = [];
        this.newPattern();
        this.drums = [];
        this.loadMixer();
        this.initDrums();
        this.loadKit(0);
        this.automation = {
            automationParameters: [
                'Attack Track 1', 'Attack Track 2', 'Attack Track 3', 'Attack Track 4', 'Attack Track 5', 'Attack Track 6', 'Attack Track 7', 'Attack Track 8', 'Attack Track 9', 'Attack Track 10', 'Attack Track 11', 'Attack Track 12',
                'Decay Track 1', 'Decay Track 2', 'Decay Track 3', 'Decay Track 4', 'Decay Track 5', 'Decay Track 6', 'Decay Track 7', 'Decay Track 8', 'Decay Track 9', 'Decay Track 10', 'Decay Track 11', 'Decay Track 12',
                'Level Track 1', 'Level Track 2', 'Level Track 3', 'Level Track 4', 'Level Track 5', 'Level Track 6', 'Level Track 7', 'Level Track 8', 'Level Track 9', 'Level Track 10', 'Level Track 11', 'Level Track 12',
                'Tune Track 1', 'Tune Track 2', 'Tune Track 3', 'Tune Track 4', 'Tune Track 5', 'Tune Track 6', 'Tune Track 7', 'Tune Track 8', 'Tune Track 9', 'Tune Track 10', 'Tune Track 11', 'Tune Track 12'
            ],
            // activateAutomation,
            // calcAutomationRamp,
            // deactivateAutomation,
            selectedParameter: 'Decay Track 1',
            automationVisiblePattern: false,
            automationVisibleSong: false,
            // readAutomation
        };
        if (project.mode === 'pattern') {
            this.drawInstrument();
        }

    }

}

