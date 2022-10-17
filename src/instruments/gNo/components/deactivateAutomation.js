import { main } from '../../../mainParameters/main.js';
import { project } from '../../../index.js';
import { sequencer } from '../../../sequencer/sequencer.js';

export function deactivateAutomation() {

    const targetPattern = project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern];


    // Create first, and clear out unneeded automation points

    let lastValue = 0;

    for (let i = 1; i < targetPattern.length; i++) {

        if (i === 1) {

            let hasFirstPoint = false;

            for (let j = 0; j < targetPattern[1][0].length; j++) {

                if (targetPattern[1][0][j].parameter === main.activeAutomation.parameter) {
                    lastValue = targetPattern[1][0][j].value;
                    hasFirstPoint = true;
                }
            }

            if (!hasFirstPoint) {

                switch (main.activeAutomation.parameter) {
                    case 'LFO Rate':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoLfoSliderRate;
                        break;

                    case 'LFO Delay Time':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoLfoSliderDelay;
                        break;

                    case 'DCO LFO':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoDcoLfoSlider;
                        break;

                    case 'DCO PWM':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoDcoPwmSlider;
                        break;

                    case 'DCO Sub':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoDcoSubSlider;
                        break;

                    case 'DCO Noise':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoDcoNoiseSlider;
                        break;

                    case 'HPF Frequency':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoHpfSlider;
                        break;

                    case 'VCF Frequency':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoVcfFreqSlider;
                        break;

                    case 'VCF Resonance':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoVcfResSlider;
                        break;

                    case 'VCF Envelope':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoVcfEnvSlider;
                        break;

                    case 'VCF LFO':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoVcfLfoSlider;
                        break;

                    case 'VCF KYBD':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoVcfKybdSlider;
                        break;

                    case 'VCA Level':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoLevelSlider;
                        break;

                    case 'ENV A':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoEnvelopeSliderA;
                        break;

                    case 'ENV D':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoEnvelopeSliderD;
                        break;

                    case 'ENV S':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoEnvelopeSliderS;
                        break;

                    case 'ENV R':
                        main.activeAutomation.value = project.instrumentsArray[project.activeInstrument].currentPatch.sliders.gNoEnvelopeSliderR;
                        break;

                    default:
                        break;
                }

                let autoObject = {
                    instrument: project.instrumentsArray[project.activeInstrument].instrumentNumber,
                    parameter: main.activeAutomation.parameter,
                    value: main.activeAutomation.value,
                    hasRamp: false,
                    nextValue: 0,
                    rampDuration: 0
                }

                lastValue = autoObject.value;
                targetPattern[1][0].push(autoObject);

            }

        }

        for (let j = 0; j < targetPattern[i][0].length; j++) {

            if (targetPattern[i][0][j].parameter === main.activeAutomation.parameter) {

                if (i + 1 < targetPattern.length) {

                    for (let k = 0; k < targetPattern[i + 1][0].length; k++) {

                        if (targetPattern[i + 1][0][k].parameter === main.activeAutomation.parameter && targetPattern[i + 1][0][k].value === targetPattern[i][0][j].value) {

                            if (targetPattern[i][0][j].value === lastValue) {

                                targetPattern[i][0].splice(j, 1);
                                j--;

                            } else {

                                lastValue = targetPattern[i][0][j].value;

                            }

                        }
                    }
                }
            }
        }
    }

    for (let i = 1; i < targetPattern.length; i++) {

        for (let j = 0; j < targetPattern[i][0].length; j++)

            project.instrumentsArray[project.activeInstrument].automation.calcAutomationRamp(i, targetPattern, targetPattern[i][0][j]);

    }

    main.activeAutomation.active = false;
    main.activeAutomation.parameter = '';
    main.activeAutomation.value = 0;
    main.activeAutomation.startValue = 0;
    sequencer.drawAutomationLines();
    sequencer.drawAutomationPoints();
}