import { main } from '../../../mainParameters/main.js';
import { project } from '../../../index.js';
import { sequencer } from '../../../sequencer/sequencer.js';

export function activateAutomation(id) {


    // Determine parameter 

    let idSplit = id.split('.');
    let parameterId = `gNo.${idSplit[1]}.${idSplit[3]}`;

    main.activeAutomation.active = true;
    main.activeAutomation.first = true;


    // Butons: ['DCO Pulse Button', 'DCO Saw Button', 'DCO Range Button 1', 'DCO Range Button 2', 'DCO Range Button 3', 'DCO PWM Switch', 'VCF Envelope Invert', 'VCA ENV Gate Switch', 'Chorus 1', 'Chorus 2', 'Chorus OFF'],

    switch (parameterId) {
        case 'gNo.LFO.Rate':
            main.activeAutomation.parameter = 'LFO Rate';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoLfoSliderRate;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoLfoSliderRate;
            break;

        case 'gNo.LFO.DelayTime':
            main.activeAutomation.parameter = 'LFO Delay Time';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoLfoSliderDelay;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoLfoSliderDelay;
            break;

        case 'gNo.DCO.LFO':
            main.activeAutomation.parameter = 'DCO LFO';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoLfoSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoLfoSlider;
            break;

        case 'gNo.DCO.PWM':
            main.activeAutomation.parameter = 'DCO PWM';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoPwmSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoPwmSlider;
            break;

        case 'gNo.DCO.Sub':
            main.activeAutomation.parameter = 'DCO Sub';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoSubSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoSubSlider;
            break;

        case 'gNo.DCO.Noise':
            main.activeAutomation.parameter = 'DCO Noise';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoNoiseSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoDcoNoiseSlider;
            break;

        case 'gNo.HPF.HPF':
            main.activeAutomation.parameter = 'HPF Frequency';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoHpfSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoHpfSlider;
            break;

        case 'gNo.VCF.Freq':
            main.activeAutomation.parameter = 'VCF Frequency';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfFreqSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfFreqSlider;
            break;

        case 'gNo.VCF.Res':
            main.activeAutomation.parameter = 'VCF Resonance';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfResSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfResSlider;
            break;

        case 'gNo.VCF.ENV':
            main.activeAutomation.parameter = 'VCF Envelope';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfEnvSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfEnvSlider;
            break;

        case 'gNo.VCF.LFO':
            main.activeAutomation.parameter = 'VCF LFO';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfLfoSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfLfoSlider;
            break;

        case 'gNo.VCF.KYBD':
            main.activeAutomation.parameter = 'VCF KYBD';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfKybdSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoVcfKybdSlider;
            break;

        case 'gNo.VCA.Level':
            main.activeAutomation.parameter = 'VCA Level';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoLevelSlider;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoLevelSlider;
            break;

        case 'gNo.ENV.A':
            main.activeAutomation.parameter = 'ENV A';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderA;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderA;
            break;

        case 'gNo.ENV.D':
            main.activeAutomation.parameter = 'ENV D';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderD;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderD;
            break;

        case 'gNo.ENV.S':
            main.activeAutomation.parameter = 'ENV S';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderS;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderS;
            break;

        case 'gNo.ENV.R':
            main.activeAutomation.parameter = 'ENV R';
            main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderR;
            main.activeAutomation.startValue = project.instrumentsArray[project.activeInstrument].currentParameterPositions.sliders.gNoEnvelopeSliderR;
            break;

        default:
            break;
    }
}