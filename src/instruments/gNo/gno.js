import { activateAutomation } from "./components/activateAutomation.js";
import { calcAutomationRamp } from './components/calcAutomationRamp.js';
import { deactivateAutomation } from "./components/deactivateAutomation.js";
import { readAutomation } from "./components/readAutomation.js";


import { main } from '../../mainParameters/main.js';
import { project } from '../../index.js';

import { connectEverything } from './components/connectEverything.js';
import { createOscillators } from './components/createOscillators.js';
import { deactivateCell } from './components/deactivateCell.js';
import { deactivateNote } from './components/deactivateNote.js';
import { drawInstrument } from './components/gNoDrawInstrument.js';
import { eventListeners } from './components/eventListeners.js';
import { factoryPresets } from './components/gNoFactoryPresets.js';
import { getAutomationDefaultValue } from './components/getAutomationDefaultValue.js';
import { loadNextPatch } from './components/loadNextPatch.js';
import { loadPatch } from './components/loadPatch.js';
import { loadPreviousPatch } from './components/loadPreviousPatch.js';
import { newPattern } from '../commonFunctions/newPattern.js';
import { loadThisPatch } from './components/loadThisPatch.js';
import { setButtonValue } from './components/setButtonValue.js';
import { setParameters } from './components/setParameters.js';
import { setSlidersAndButtons } from './components/setSlidersAndButtons.js';
import { setSliderValue } from './components/setSliderValue.js';
import { sliderInput } from './components/sliderInput.js';
import { stopEverything } from './components/stopEverything.js';
import { triggerNote } from './components/triggerNote.js';
import { triggerNoteKey } from './components/triggerNoteKey.js';
import { triggerNoteRelease } from './components/triggerNoteRelease.js';
import { triggerNoteReleaseKey } from './components/triggerNoteReleaseKey.js';
import { pickColor } from '../commonFunctions/pickColor.js';

export class GNO1106 {
    constructor() {


        this.automationVisible = true;
        this.color = pickColor();
        this.patternIdCounter = 0;
        this.connectEverything = connectEverything;
        this.createOscillators = createOscillators;
        this.deactivateCell = deactivateCell;
        this.deactivateNote = deactivateNote;
        this.drawInstrument = drawInstrument;
        this.eventListeners = eventListeners;
        this.loadNextPatch = loadNextPatch;
        this.loadPatch = loadPatch;
        this.loadPreviousPatch = loadPreviousPatch;
        this.newPattern = newPattern;
        this.loadThisPatch = loadThisPatch;
        this.setButtonValue = setButtonValue;
        this.setParameters = setParameters;
        this.setSlidersAndButtons = setSlidersAndButtons;
        this.setSliderValue = setSliderValue;
        this.sliderInput = sliderInput;
        this.stopEverything = stopEverything;
        this.triggerNote = triggerNote;
        this.triggerNoteKey = triggerNoteKey;
        this.triggerNoteRelease = triggerNoteRelease;
        this.triggerNoteReleaseKey = triggerNoteReleaseKey;
        this.instrumentNumber = project.numberOfInstruments;
        this.getAutomationDefaultValue = getAutomationDefaultValue;
        this.name = 'G-NO 1106';
        this.modelName = 'G-NO 1106';
        this.outputCount = 1;
        this.type = 'keys';

        this.patterns = [];
        this.patternsAutomation = [];
        this.activePattern;
        this.songModePatterns = [];

        this.presets = []
        for (let i = 0; i < factoryPresets.length; i++) {
            this.presets.push(factoryPresets[i]);
        }
        this.oscillatorBank = [];
        this.activeNotes = [];
        this.polyMode = 1;
        this.oscSaw = true;
        this.oscPulse = false;
        this.oscSub = false;

        this.chorus = new Tone.Chorus({
            frequency: 4,
            delay: 7,
            depth: 0.5,
            feedback: 0.3

        });

        this.lfoGain = new Tone.Gain(0);
        this.lfoScaler = new Tone.Scale(0, 20000).connect(this.lfoGain);
        this.lfo = new Tone.LFO().start().connect(this.lfoScaler);
        this.masterGain = new Tone.Gain(0.5);
        this.masterGain.connect(project.mixer.channels[this.instrumentNumber].master.input);
        this.createOscillators();
        this.filterEnvelopeScalerGain = new Tone.Gain(0);
        this.filterEnvelopeScaler = new Tone.Scale(0, 20000).connect(this.filterEnvelopeScalerGain);
        this.pwmLfoGain = new Tone.Gain(0);
        this.pwmScaler = new Tone.Scale(0, 0.9)
        this.lfo.connect(this.pwmScaler);
        this.pwmScaler.connect(this.pwmLfoGain);
        this.pwmPosition = this.oscillatorBank[0].pulseOsc.width.value;
        this.filterEnvelopeInverse = new Tone.Negate();
        this.sliderIds = ['gNo.LFO.Slider.Rate', 'gNo.DCO.Slider.LFO', 'gNo.DCO.Slider.PWM',
            'gNo.DCO.Slider.Sub', 'gNo.DCO.Slider.Noise', 'gNo.HPF.Slider.HPF',
            'gNo.VCF.Slider.Freq', 'gNo.VCF.Slider.Res', 'gNo.VCF.Slider.ENV',
            'gNo.VCF.Slider.LFO', 'gNo.VCA.Slider.Level', 'gNo.ENV.Slider.A',
            'gNo.ENV.Slider.D', 'gNo.ENV.Slider.S', 'gNo.ENV.Slider.R'];
        this.buttonIds = ['gNoDcoPulseButton', 'gNoDcoSawButton', 'gNoDcoRangeButton1',
            'gNoDcoRangeButton2', 'gNoDcoRangeButton3', 'gNoDcoPwmSwitch',
            'gNoVcfSwitch', 'gNoVcaSwitch', 'gNoChorusOff',
            'gNoChorus1', 'gNoChorus2'];

        this.newPattern();
        this.currentPatchNumber = 0;
        this.lastPatch = {

            name: 'INIT',
            type: 'init',
            presetNumber: 0,

            buttons: {
                gNoChorus1: false,
                gNoChorus2: false,
                gNoDcoPulseButton: true,
                gNoDcoPwmSwitch: false,
                gNoDcoRangeButton1: false,
                gNoDcoRangeButton2: true,
                gNoDcoRangeButton3: false,
                gNoDcoSawButton: false,
                gNoVcaSwitch: false,
                gNoVcfSwitch: false
            },

            sliders: {
                gNoDcoLfoSlider: 0,
                gNoDcoNoiseSlider: 1,
                gNoDcoPwmSlider: 0,
                gNoDcoSubSlider: 0,
                gNoEnvelopeSliderA: 1,
                gNoEnvelopeSliderD: 1,
                gNoEnvelopeSliderR: 1,
                gNoEnvelopeSliderS: 3000,
                gNoHpfSlider: 0,
                gNoLevelSlider: 1500,
                gNoLfoSliderRate: 1,
                gNoVcfEnvSlider: 0,
                gNoVcfFreqSlider: 3000,
                gNoVcfLfoSlider: 0,
                gNoVcfResSlider: 1
            }

        };
        this.currentPatch = {

            name: 'INIT',
            type: 'init',
            presetNumber: 0,

            buttons: {
                gNoChorus1: false,
                gNoChorus2: false,
                gNoDcoPulseButton: true,
                gNoDcoPwmSwitch: false,
                gNoDcoRangeButton1: false,
                gNoDcoRangeButton2: true,
                gNoDcoRangeButton3: false,
                gNoDcoSawButton: false,
                gNoVcaSwitch: false,
                gNoVcfSwitch: false
            },

            sliders: {
                gNoDcoLfoSlider: 0,
                gNoDcoNoiseSlider: 0,
                gNoDcoPwmSlider: 0,
                gNoDcoSubSlider: 0,
                gNoEnvelopeSliderA: 0,
                gNoEnvelopeSliderD: 0,
                gNoEnvelopeSliderR: 0,
                gNoEnvelopeSliderS: 1,
                gNoHpfSlider: 0,
                gNoLevelSlider: 0.5,
                gNoLfoSliderRate: 0,
                gNoLfoSliderDelay: 0,
                gNoVcfEnvSlider: 0,
                gNoVcfFreqSlider: 1,
                gNoVcfKybdSlider: 0,
                gNoVcfLfoSlider: 0,
                gNoVcfResSlider: 0
            }

        };
        this.currentParameterPositions = {

            buttons: {
                gNoChorus1: false,
                gNoChorus2: false,
                gNoDcoPulseButton: true,
                gNoDcoPwmSwitch: false,
                gNoDcoRangeButton1: false,
                gNoDcoRangeButton2: true,
                gNoDcoRangeButton3: false,
                gNoDcoSawButton: false,
                gNoVcaSwitch: false,
                gNoVcfSwitch: false
            },

            sliders: {
                gNoDcoLfoSlider: 0,
                gNoDcoNoiseSlider: 0,
                gNoDcoPwmSlider: 0,
                gNoDcoSubSlider: 0,
                gNoEnvelopeSliderA: 0,
                gNoEnvelopeSliderD: 0,
                gNoEnvelopeSliderR: 0,
                gNoEnvelopeSliderS: 1,
                gNoHpfSlider: 0,
                gNoLevelSlider: 0.5,
                gNoLfoSliderRate: 0,
                gNoLfoSliderDelay: 0,
                gNoVcfEnvSlider: 0,
                gNoVcfFreqSlider: 1,
                gNoVcfKybdSlider: 0,
                gNoVcfLfoSlider: 0,
                gNoVcfResSlider: 0
            }

        };
        this.automation = {
            automationParameters: ['LFO Rate', 'DCO LFO', 'DCO PWM', 'DCO Pulse Button', 'DCO Saw Button', 'DCO Range Button 1', 'DCO Range Button 2', 'DCO Range Button 3', 'DCO PWM Switch', 'DCO Sub', 'DCO Noise', 'HPF Frequency', 'VCF Frequency', 'VCF Resonance', 'VCF Envelope Invert', 'VCF Envelope', 'VCF LFO', 'VCF KYBD', 'VCA Level', 'VCA ENV Gate Switch', 'ENV A', 'ENV D', 'ENV S', 'ENV R', 'Chorus 1', 'Chorus 2'],
            activateAutomation,
            calcAutomationRamp,
            deactivateAutomation,
            selectedParameter: 'VCF Frequency',
            selectedParameterPresetValue: this.currentPatch.sliders.gNoVcfFreqSlider,
            automationVisiblePattern: false,
            automationVisibleSong: false,
            readAutomation
        };
        this.connectEverything();

        this.patchLoaded = false;
        if (project.mode === 'pattern') {
            this.drawInstrument();
        }
        this.loadPatch();
        this.patchLoaded = true;
        this.zoomLevelY = 1;
        this.zoomLevelX = 1;
        this.gridResolutionMultiplier = 1;
        this.gridResolution = 16;

    }
}
