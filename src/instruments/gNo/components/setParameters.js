import { project } from '../../../index.js';

export function setParameters() {

    if (this.lastPatch !== this.currentPatch) {
        if (this.lastPatch.buttons.pulseOsc) {
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].pulseOsc.disconnect(this.oscillatorBank[i].highPassFilter);
            }
        }
        if (this.lastPatch.buttons.sawOsc) {
            for (let i = 0; i < 6; i++) {
                this.oscillatorBank[i].sawOsc.disconnect(this.oscillatorBank[i].highPassFilter);
            }
        }

        if (this.lastPatch.buttons.gNoChorus1) {

            this.chorus.disconnect(this.masterGain);
            for (let i = 0; i < 6; i++) {

                this.oscillatorBank[i].vca.disconnect(this.chorus);
                this.oscillatorBank[i].vca.connect(this.masterGain);

            }

        } else if (this.lastPatch.buttons.gNoChorus2) {

            this.chorus.connect(this.masterGain);
            for (let i = 0; i < 6; i++) {

                this.oscillatorBank[i].vca.disconnect(this.chorus);
                this.oscillatorBank[i].vca.connect(this.masterGain);

            }

        }
    }

    // Set slider parameters 


    this.sliderInput(this.currentPatch.gNoLfoSliderRate, `gNo.LFO.Slider.Rate`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoDcoLfoSlider, `gNo.DCO.Slider.LFO`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoDcoPwmSlider, `gNo.DCO.Slider.PWM`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoDcoSubSlider, `gNo.DCO.Slider.Sub`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoDcoNoiseSlider, `gNo.DCO.Slider.Noise`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoHpfSlider, `gNo.HPF.Slider.HPF`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoVcfFreqSlider, `gNo.VCF.Slider.Freq`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoVcfResSlider, `gNo.VCF.Slider.Res`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoVcfEnvSlider, `gNo.VCF.Slider.ENV`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoVcfLfoSlider, `gNo.VCF.Slider.LFO`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoLevelSlider, `gNo.VCA.Slider.Level`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoEnvelopeSliderA, `gNo.ENV.Slider.A`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoEnvelopeSliderD, `gNo.ENV.Slider.D`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoEnvelopeSliderS, `gNo.ENV.Slider.S`.split('.'), true);
    this.sliderInput(this.currentPatch.gNoEnvelopeSliderR, `gNo.ENV.Slider.R`.split('.'), true);

    if (this.currentPatch.buttons.gNoDcoPulseButton) {
        for (let i = 0; i < 6; i++) {
            this.oscillatorBank[i].pulseOsc.connect(this.oscillatorBank[i].highPassFilter);
        }
    }

    if (this.currentPatch.buttons.gNoDcoSawButton) {
        for (let i = 0; i < 6; i++) {
            this.oscillatorBank[i].sawOsc.connect(this.oscillatorBank[i].highPassFilter);
        }
    }

    if (this.currentPatch.buttons.gNoDcoRangeButton1) {
        for (let i = 0; i < 6; i++) {
            this.oscillatorBank[i].pulseOsc.detune.value = -1200;
            this.oscillatorBank[i].sawOsc.detune.value = -1200;
            this.oscillatorBank[i].subOsc.detune.value = -2400;
        }
    } else if (this.currentPatch.buttons.gNoDcoRangeButton2) {
        for (let i = 0; i < 6; i++) {
            this.oscillatorBank[i].pulseOsc.detune.value = 0;
            this.oscillatorBank[i].sawOsc.detune.value = 0;
            this.oscillatorBank[i].subOsc.detune.value = -1200;
        }
    } else if (this.currentPatch.buttons.gNoDcoRangeButton3) {
        for (let i = 0; i < 6; i++) {
            this.oscillatorBank[i].pulseOsc.detune.value = 1200;
            this.oscillatorBank[i].sawOsc.detune.value = 1200;
            this.oscillatorBank[i].subOsc.detune.value = 0;
        }
    }



    if (this.currentPatch.buttons.gNoVcfSwitch) {

        // Write code later

    } else if (!this.currentPatch.buttons.gNoVcfSwitch) {

        // Write code later
    }

    if (this.currentPatch.buttons.gNoVcaSwitch) {

        for (let i = 0; i < 6; i++) {
            this.oscillatorBank[i].ampEnvelope.attack = 0;
            this.oscillatorBank[i].ampEnvelope.decay = 0;
            this.oscillatorBank[i].ampEnvelope.sustain = 1;
            this.oscillatorBank[i].ampEnvelope.release = 0;

        }
    }

    if (this.currentPatch.buttons.gNoChorus1) {
        this.chorus.wet.value = 0.5;
        for (let i = 0; i < 6; i++) {

            this.oscillatorBank[i].vca.disconnect(this.masterGain);
            this.oscillatorBank[i].vca.connect(this.chorus);

        }
        this.chorus.connect(this.masterGain);
    } else if (this.currentPatch.buttons.gNoChorus2) {

        this.chorus.wet.value = 0.7;
        for (let i = 0; i < 6; i++) {

            this.oscillatorBank[i].vca.disconnect(this.masterGain);
            this.oscillatorBank[i].vca.connect(this.chorus);

        }
        this.chorus.connect(this.masterGain);
    }

}