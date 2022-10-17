import { main } from '../../../mainParameters/main.js';
import { math } from '../../../math/math.js';
import { sequencer } from '../../../sequencer/sequencer.js';

export function sliderInput(signalValue, idSplit, isLoadPatch) {

    let value;

    if (main.record) {

        main.activeAutomation.value = signalValue;

    }

    switch (idSplit[1]) {

        case 'LFO':

            if (idSplit[3] === 'Rate') {

                if (isLoadPatch) {

                    signalValue = this.currentPatch.sliders.gNoLfoSliderRate;

                }

                value = (Math.exp((signalValue) * (Math.log(1000))) / 1000) * 30;
                this.lfo.frequency.value = value;
                this.currentPatch.sliders.gNoLfoSliderRate = signalValue;

            } else {

                // Write code for LFO Delay Time

            }
            break;

        case 'DCO':

            switch (idSplit[3]) {

                case 'LFO':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoDcoLfoSlider;

                    }

                    if (!this.currentPatch.buttons.gNoDcoPwmSwitch) {

                        this.pwmLfoGain.gain.value = signalValue;
                        this.currentPatch.sliders.gNoDcoLfoSlider = signalValue;

                    }
                    break;

                case 'PWM':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoDcoPwmSlider;

                    }

                    if (!this.currentPatch.buttons.gNoDcoPwmSwitch) {

                        this.pwmScaler.min = signalValue * 0.9;

                    } else {

                        for (let i = 0; i < 6; i++) {
                            this.oscillatorBank[i].pulseOsc.width.value = signalValue;

                        }
                    }

                    this.currentPatch.sliders.gNoDcoPwmSlider = signalValue;
                    break;

                case 'Sub':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoDcoSubSlider;

                    }

                    for (let i = 0; i < 6; i++) {
                        this.oscillatorBank[i].subOscGain.gain.value = signalValue;
                    }

                    this.currentPatch.sliders.gNoDcoSubSlider = signalValue;
                    break;

                case 'Noise':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoDcoNoiseSlider;

                    }

                    for (let i = 0; i < 6; i++) {
                        this.oscillatorBank[i].noiseGain.gain.value = signalValue;
                    }

                    this.currentPatch.sliders.gNoDcoNoiseSlider = signalValue;
                    break;
            }
            break;

        case 'HPF':

            if (isLoadPatch) {

                signalValue = this.currentPatch.sliders.gNoHpfSlider;

            }

            value = Math.exp(Math.log(20) + (signalValue) * (Math.log(20000) - Math.log(20)));
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].highPassFilter.frequency.value = value;
            }

            this.currentPatch.sliders.gNoHpfSlider = signalValue;
            break;

        case 'VCF':

            switch (idSplit[3]) {

                case 'Freq':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoVcfFreqSlider;

                    }

                    value = Math.exp(Math.log(20) + (signalValue) * (Math.log(20000) - Math.log(20)));
                    for (let i = 0; i < 6; i++) {
                        this.oscillatorBank[i].lowPassFilter.frequency.value = value;
                    }

                    this.filterEnvelopeScaler.min = value;
                    this.lfoScaler.min = value;

                    if (main.record) {

                        this.currentParameterPositions.sliders.gNoVcfFreqSlider = signalValue;

                    } else {

                        this.currentPatch.sliders.gNoVcfFreqSlider = signalValue;

                    }
                    break;

                case 'Res':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoVcfResSlider;

                    }

                    for (let i = 0; i < 6; i++) {
                        this.oscillatorBank[i].lowPassFilter.Q.value = signalValue * 20;
                    }

                    this.currentPatch.sliders.gNoVcfResSlider = signalValue;
                    break;

                case 'ENV':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoVcfEnvSlider;

                    }

                    value = Math.exp((signalValue) * (Math.log(1000))) / 1000;
                    this.filterEnvelopeScalerGain.gain.value = value;
                    this.currentPatch.sliders.gNoVcfEnvSlider = signalValue;
                    break;

                case 'LFO':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoVcfLfoSlider;

                    }

                    value = Math.exp((signalValue) * (Math.log(20000))) / 20000;
                    this.lfoGain.gain.value = value;
                    this.currentPatch.sliders.gNoVcfLfoSlider = signalValue;
                    break;

                case 'KYBD':

                    // Write code for KYBD/Filter Key Follow
                    break;

            }

            break;

        case 'VCA':

            if (isLoadPatch) {

                signalValue = this.currentPatch.sliders.gNoLevelSlider;

            }

            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].ampEnvelopeGain.gain.value = signalValue;
            }
            this.currentPatch.sliders.gNoLevelSlider = signalValue;
            break;

        case 'ENV':

            switch (idSplit[3]) {

                case 'A':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoEnvelopeSliderA;

                    }

                    if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                        value = math.scaleValue(math.cubeCurve(signalValue), [0, +1], [+0.001, +3]);
                        for (let i = 0; i < 6; i++) {
                            this.oscillatorBank[i].ampEnvelope.attack = value;
                            this.oscillatorBank[i].filterEnvelope.attack = value;
                        }

                    }

                    this.currentPatch.sliders.gNoEnvelopeSliderA = signalValue;
                    break;

                case 'D':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoEnvelopeSliderD;

                    }

                    if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                        value = math.scaleValue(math.cubeCurve(signalValue), [0, +1], [+0.001, +3]);
                        for (let i = 0; i < 6; i++) {
                            this.oscillatorBank[i].ampEnvelope.decay = value;
                            this.oscillatorBank[i].filterEnvelope.decay = value;
                        }

                    }
                    this.currentPatch.sliders.gNoEnvelopeSliderD = signalValue;
                    break;

                case 'S':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoEnvelopeSliderS;

                    }

                    if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                        value = Math.exp((signalValue) * (Math.log(1000))) / 1000;
                        if (value < 0) {
                            value = 0;
                        }
                        if (value > 1) {
                            value = 1;
                        }
                        for (let i = 0; i < 6; i++) {
                            this.oscillatorBank[i].ampEnvelope.sustain = value;
                            this.oscillatorBank[i].filterEnvelope.sustain = value;
                        }

                    }

                    this.currentPatch.sliders.gNoEnvelopeSliderS = signalValue;
                    break;

                case 'R':

                    if (isLoadPatch) {

                        signalValue = this.currentPatch.sliders.gNoEnvelopeSliderR;

                    }

                    if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                        value = math.scaleValue(math.cubeCurve(signalValue), [0, +1], [+0.001, +3]);
                        for (let i = 0; i < 6; i++) {
                            this.oscillatorBank[i].ampEnvelope.release = value;
                            this.oscillatorBank[i].filterEnvelope.release = value;
                        }

                    }

                    this.currentPatch.sliders.gNoEnvelopeSliderR = signalValue;
                    break;
            }

            break;

        default:

            break;
    }
}