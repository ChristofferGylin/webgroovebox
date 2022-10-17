import { project } from '../../../index.js';

export function loadPatch() {

    this.stopEverything();


    // --- Set Last Patch --- //

    // Identification

    this.lastPatch.name = this.currentPatch.name;
    this.lastPatch.type = this.currentPatch.type;
    this.lastPatch.presetNumber = this.currentPatch.presetNumber;

    // Buttons

    this.lastPatch.buttons.gnoChorus1 = this.currentPatch.buttons.gnoChorus1;
    this.lastPatch.buttons.gnoChorus2 = this.currentPatch.buttons.gnoChorus2;
    this.lastPatch.buttons.gNoDcoPulseButton = this.currentPatch.buttons.gNoDcoPulseButton;
    this.lastPatch.buttons.gNoDcoPwmSwitch = this.currentPatch.buttons.gNoDcoPwmSwitch;
    this.lastPatch.buttons.gNoDcoRangeButton1 = this.currentPatch.buttons.gNoDcoRangeButton1;
    this.lastPatch.buttons.gNoDcoRangeButton2 = this.currentPatch.buttons.gNoDcoRangeButton2;
    this.lastPatch.buttons.gNoDcoRangeButton3 = this.currentPatch.buttons.gNoDcoRangeButton3;
    this.lastPatch.buttons.gNoDcoSawButton = this.currentPatch.buttons.gNoDcoSawButton;
    this.lastPatch.buttons.gNoVcaSwitch = this.currentPatch.buttons.gNoVcaSwitch;
    this.lastPatch.buttons.gNoVcfSwitch = this.currentPatch.buttons.gNoVcfSwitch;

    // Sliders

    this.lastPatch.sliders.gNoDcoLfoSlider = this.currentPatch.sliders.gNoDcoLfoSlider;
    this.lastPatch.sliders.gNoDcoNoiseSlider = this.currentPatch.sliders.gNoDcoNoiseSlider;
    this.lastPatch.sliders.gNoDcoPwmSlider = this.currentPatch.sliders.gNoDcoPwmSlider;
    this.lastPatch.sliders.gNoDcoSubSlider = this.currentPatch.sliders.gNoDcoSubSlider;
    this.lastPatch.sliders.gNoEnvelopeSliderA = this.currentPatch.sliders.gNoEnvelopeSliderA;
    this.lastPatch.sliders.gNoEnvelopeSliderD = this.currentPatch.sliders.gNoEnvelopeSliderD;
    this.lastPatch.sliders.gNoEnvelopeSliderS = this.currentPatch.sliders.gNoEnvelopeSliderS;
    this.lastPatch.sliders.gNoEnvelopeSliderR = this.currentPatch.sliders.gNoEnvelopeSliderR;
    this.lastPatch.sliders.gNoHpfSlider = this.currentPatch.sliders.gNoHpfSlider;
    this.lastPatch.sliders.gNoLevelSlider = this.currentPatch.sliders.gNoLevelSlider;
    this.lastPatch.sliders.gNoLfoSliderRate = this.currentPatch.sliders.gNoLfoSliderRate;
    this.lastPatch.sliders.gNoVcfEnvSlider = this.currentPatch.sliders.gNoVcfEnvSlider;
    this.lastPatch.sliders.gNoVcfFreqSlider = this.currentPatch.sliders.gNoVcfFreqSlider;
    this.lastPatch.sliders.gNoVcfLfoSlider = this.currentPatch.sliders.gNoVcfLfoSlider;
    this.lastPatch.sliders.gNoVcfResSlider = this.currentPatch.sliders.gNoVcfResSlider;


    // --- Set Current Patch --- //

    // Identification

    this.currentPatch.name = this.presets[this.currentPatchNumber].name;
    this.currentPatch.type = this.presets[this.currentPatchNumber].type;
    this.currentPatch.presetNumber = this.presets[this.currentPatchNumber].presetNumber;

    // Buttons

    this.currentPatch.buttons.gnoChorus1 = this.presets[this.currentPatchNumber].buttons.gnoChorus1;
    this.currentPatch.buttons.gnoChorus2 = this.presets[this.currentPatchNumber].buttons.gnoChorus2;
    this.currentPatch.buttons.gNoDcoPulseButton = this.presets[this.currentPatchNumber].buttons.gNoDcoPulseButton;
    this.currentPatch.buttons.gNoDcoPwmSwitch = this.presets[this.currentPatchNumber].buttons.gNoDcoPwmSwitch;
    this.currentPatch.buttons.gNoDcoRangeButton1 = this.presets[this.currentPatchNumber].buttons.gNoDcoRangeButton1;
    this.currentPatch.buttons.gNoDcoRangeButton2 = this.presets[this.currentPatchNumber].buttons.gNoDcoRangeButton2;
    this.currentPatch.buttons.gNoDcoRangeButton3 = this.presets[this.currentPatchNumber].buttons.gNoDcoRangeButton3;
    this.currentPatch.buttons.gNoDcoSawButton = this.presets[this.currentPatchNumber].buttons.gNoDcoSawButton;
    this.currentPatch.buttons.gNoVcaSwitch = this.presets[this.currentPatchNumber].buttons.gNoVcaSwitch;
    this.currentPatch.buttons.gNoVcfSwitch = this.presets[this.currentPatchNumber].buttons.gNoVcfSwitch;

    // Sliders

    this.currentPatch.sliders.gNoDcoLfoSlider = this.presets[this.currentPatchNumber].sliders.gNoDcoLfoSlider;
    this.currentPatch.sliders.gNoDcoNoiseSlider = this.presets[this.currentPatchNumber].sliders.gNoDcoNoiseSlider;
    this.currentPatch.sliders.gNoDcoPwmSlider = this.presets[this.currentPatchNumber].sliders.gNoDcoPwmSlider;
    this.currentPatch.sliders.gNoDcoSubSlider = this.presets[this.currentPatchNumber].sliders.gNoDcoSubSlider;
    this.currentPatch.sliders.gNoEnvelopeSliderA = this.presets[this.currentPatchNumber].sliders.gNoEnvelopeSliderA;
    this.currentPatch.sliders.gNoEnvelopeSliderD = this.presets[this.currentPatchNumber].sliders.gNoEnvelopeSliderD;
    this.currentPatch.sliders.gNoEnvelopeSliderS = this.presets[this.currentPatchNumber].sliders.gNoEnvelopeSliderS;
    this.currentPatch.sliders.gNoEnvelopeSliderR = this.presets[this.currentPatchNumber].sliders.gNoEnvelopeSliderR;
    this.currentPatch.sliders.gNoHpfSlider = this.presets[this.currentPatchNumber].sliders.gNoHpfSlider;
    this.currentPatch.sliders.gNoLevelSlider = this.presets[this.currentPatchNumber].sliders.gNoLevelSlider;
    this.currentPatch.sliders.gNoLfoSliderRate = this.presets[this.currentPatchNumber].sliders.gNoLfoSliderRate;
    this.currentPatch.sliders.gNoVcfEnvSlider = this.presets[this.currentPatchNumber].sliders.gNoVcfEnvSlider;
    this.currentPatch.sliders.gNoVcfFreqSlider = this.presets[this.currentPatchNumber].sliders.gNoVcfFreqSlider;
    this.currentPatch.sliders.gNoVcfLfoSlider = this.presets[this.currentPatchNumber].sliders.gNoVcfLfoSlider;
    this.currentPatch.sliders.gNoVcfResSlider = this.presets[this.currentPatchNumber].sliders.gNoVcfResSlider;

    if (project.mode === 'pattern') {

        this.setSlidersAndButtons();
        document.getElementById('currentPatchDisplay').innerHTML = this.currentPatch.name;

    }

    this.setParameters();

}

