export function setSliderValue(elem, val, sliderInput) {
    let value;

    switch (elem.id) {

        case 'gNoLfoSliderRate':

            value = (Math.exp((val / 3000) * (Math.log(1000))) / 1000) * 30;
            this.lfo.frequency.value = value;
            if (sliderInput) {
                this.currentPatch.sliders.gNoLfoSliderRate = parseInt(val);
            }
            break;


        case 'gNoDcoLfoSlider':

            if (document.getElementById('gNoDcoPwmSwitch').className === 'gNoSwitchUp') {
                value = val / 3000;
                this.pwmLfoGain.gain.value = value;
                if (sliderInput) {
                    this.currentPatch.sliders.gNoDcoLfoSlider = parseInt(val);
                }
            }
            break;

        case 'gNoDcoPwmSlider':

            value = val / 1000;

            if (document.getElementById('gNoDcoPwmSwitch').className === 'gNoSwitchUp') {
                this.pwmScaler.min = value;
            } else {
                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].pulseOsc.width.value = value;

                }
            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoDcoPwmSlider = parseInt(val);
            }
            break;

        case 'gNoDcoSubSlider':

            value = val / 3000;
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].subOscGain.gain.value = value;
            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoDcoSubSlider = parseInt(val);
            }
            break;

        case 'gNoDcoNoiseSlider':

            value = val / 3000;
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].noiseGain.gain.value = value;
            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoDcoNoiseSlider = parseInt(val);
            }
            break;



        case 'gNoHpfSlider':

            value = Math.exp(Math.log(20) + (val / 3000) * (Math.log(20000) - Math.log(20)));
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].highPassFilter.frequency.value = value;
            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoHpfSlider = parseInt(val);
            }
            break;

        case 'gNoVcfFreqSlider':

            value = Math.exp(Math.log(20) + (val / 3000) * (Math.log(20000) - Math.log(20)));
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].lowPassFilter.frequency.value = value;
            }

            this.filterEnvelopeScaler.min = value;
            this.lfoScaler.min = value;

            if (sliderInput) {
                this.currentPatch.sliders.gNoVcfFreqSlider = parseInt(val);
            }
            break;

        case 'gNoVcfResSlider':

            value = val / 150;
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].lowPassFilter.Q.value = value;
            }

            if (sliderInput) {
                this.currentPatch.sliders.gNoVcfResSlider = parseInt(val);
            }
            break;

        case 'gNoVcfEnvSlider':

            value = Math.exp((val / 3000) * (Math.log(1000))) / 1000;
            this.filterEnvelopeScalerGain.gain.value = value;

            if (sliderInput) {
                this.currentPatch.sliders.gNoVcfEnvSlider = parseInt(val);
            }
            break;

        case 'gNoVcfLfoSlider':

            value = Math.exp((val / 3000) * (Math.log(20000))) / 20000;
            this.lfoGain.gain.value = value;

            if (sliderInput) {
                this.currentPatch.sliders.gNoVcfLfoSlider = parseInt(val);
            }
            break;

        case 'gNoLevelSlider':

            value = val / 3000;
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].ampEnvelopeGain.gain.value = value;
            }

            if (sliderInput) {
                this.currentPatch.sliders.gNoLevelSlider = parseInt(val);
            }
            break;

        case 'gNoEnvelopeSliderA':

            if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                value = val / 1000;
                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].ampEnvelope.attack = value;
                    this.oscillatorBank[i].filterEnvelope.attack = value;
                }

            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoEnvelopeSliderA = parseInt(val);
            }
            break;

        case 'gNoEnvelopeSliderD':

            if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                value = val / 1000;
                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].ampEnvelope.decay = value;
                    this.oscillatorBank[i].filterEnvelope.decay = value;
                }

            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoEnvelopeSliderD = parseInt(val);
            }
            break;

        case 'gNoEnvelopeSliderS':

            if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                value = Math.exp((val / 3000) * (Math.log(1000))) / 1000;
                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].ampEnvelope.sustain = value;
                    this.oscillatorBank[i].filterEnvelope.sustain = value;
                }

            }
            if (sliderInput) {
                this.currentPatch.sliders.gNoEnvelopeSliderS = parseInt(val);
            }
            break;

        case 'gNoEnvelopeSliderR':

            if (this.currentPatch.buttons.gNoVcaSwitch === false) {
                value = val / 1000;
                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].ampEnvelope.release = value;
                    this.oscillatorBank[i].filterEnvelope.release = value;
                }

            }

            if (sliderInput) {
                this.currentPatch.sliders.gNoEnvelopeSliderR = parseInt(val);
            }
            break;

    }
}