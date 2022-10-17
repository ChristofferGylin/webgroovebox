import { math } from '../../../math/math.js'
import { project } from "../../../index.js";

export function setButtonValue(elem) {

    switch (elem.currentTarget.id) {

        case 'gNo.DCO.WaveButton.Pulse':
            if (!this.currentPatch.buttons.gNoDcoPulseButton) {

                document.getElementById('gNo.DCO.WaveLed.Pulse').setAttribute('fill', '#ee2a28');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].pulseOsc.connect(this.oscillatorBank[i].highPassFilter);
                }

                this.currentPatch.buttons.gNoDcoPulseButton = true;

            } else {

                document.getElementById('gNo.DCO.WaveLed.Pulse').setAttribute('fill', '#640d0d');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].pulseOsc.disconnect(this.oscillatorBank[i].highPassFilter);
                }

                this.currentPatch.buttons.gNoDcoPulseButton = false;
            }
            break;

        case 'gNo.DCO.WaveButton.Saw':
            if (!this.currentPatch.buttons.gNoDcoSawButton) {

                document.getElementById('gNo.DCO.WaveLed.Saw').setAttribute('fill', '#ee2a28');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].sawOsc.connect(this.oscillatorBank[i].highPassFilter);
                }
                this.currentPatch.buttons.gNoDcoSawButton = true;

            } else {

                document.getElementById('gNo.DCO.WaveLed.Saw').setAttribute('fill', '#640d0d');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].sawOsc.disconnect(this.oscillatorBank[i].highPassFilter);
                }
                this.currentPatch.buttons.gNoDcoSawButton = false;
            }
            break;

        case 'gNo.DCO.RangeButton.1':
            if (!this.currentPatch.buttons.gNoDcoRangeButton1) {

                document.getElementById('gNo.DCO.RangeLed.1').setAttribute('fill', '#ee2a28');
                document.getElementById('gNo.DCO.RangeLed.2').setAttribute('fill', '#640d0d');
                document.getElementById('gNo.DCO.RangeLed.3').setAttribute('fill', '#640d0d');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].pulseOsc.detune.value = -1200;
                    this.oscillatorBank[i].sawOsc.detune.value = -1200;
                    this.oscillatorBank[i].subOsc.detune.value = -2400;
                }
                this.currentPatch.buttons.gNoDcoRangeButton1 = true;
                this.currentPatch.buttons.gNoDcoRangeButton2 = false;
                this.currentPatch.buttons.gNoDcoRangeButton3 = false;
            }
            break;

        case 'gNo.DCO.RangeButton.2':
            if (!this.currentPatch.buttons.gNoDcoRangeButton2) {

                document.getElementById('gNo.DCO.RangeLed.1').setAttribute('fill', '#640d0d');
                document.getElementById('gNo.DCO.RangeLed.2').setAttribute('fill', '#ee2a28');
                document.getElementById('gNo.DCO.RangeLed.3').setAttribute('fill', '#640d0d');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].pulseOsc.detune.value = 0;
                    this.oscillatorBank[i].sawOsc.detune.value = 0;
                    this.oscillatorBank[i].subOsc.detune.value = -1200;
                }
                this.currentPatch.buttons.gNoDcoRangeButton1 = false;
                this.currentPatch.buttons.gNoDcoRangeButton2 = true;
                this.currentPatch.buttons.gNoDcoRangeButton3 = false;
            }
            break;

        case 'gNo.DCO.RangeButton.3':
            if (!this.currentPatch.buttons.gNoDcoRangeButton3) {

                document.getElementById('gNo.DCO.RangeLed.1').setAttribute('fill', '#640d0d');
                document.getElementById('gNo.DCO.RangeLed.2').setAttribute('fill', '#640d0d');
                document.getElementById('gNo.DCO.RangeLed.3').setAttribute('fill', '#ee2a28');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].pulseOsc.detune.value = 1200;
                    this.oscillatorBank[i].sawOsc.detune.value = 1200;
                    this.oscillatorBank[i].subOsc.detune.value = 0;
                }
                this.currentPatch.buttons.gNoDcoRangeButton1 = false;
                this.currentPatch.buttons.gNoDcoRangeButton2 = false;
                this.currentPatch.buttons.gNoDcoRangeButton3 = true;
            }
            break;

        case 'gNo.DCO.Switch':




            if (!this.currentPatch.buttons.gNoDcoPwmSwitch) {
                this.pwmLfoGain.gain.value = 0;
                this.pwmPosition = this.oscillatorBank[0].pulseOsc.width.value;
                for (let i = 0; i < 6; i++) {

                    this.oscillatorBank[i].pulseOsc.width.value = this.currentPatch.sliders.gNoDcoPwmSlider * 0.9;

                }

                document.getElementById('gNo.DCO.Switch.Switch').setAttribute('transform', 'translate(0, 14)');
                this.currentPatch.buttons.gNoDcoPwmSwitch = true;

            } else {

                this.pwmScaler.min = this.currentPatch.sliders.gNoDcoPwmSlider * 0.9;
                this.pwmLfoGain.gain.value = this.currentPatch.sliders.gNoDcoLfoSlider;

                for (let i = 0; i < 6; i++) {

                    this.oscillatorBank[i].pulseOsc.width.value = this.pwmPosition;

                }
                document.getElementById('gNo.DCO.Switch.Switch').setAttribute('transform', 'translate(0, 0)');
                this.currentPatch.buttons.gNoDcoPwmSwitch = false;
            }
            break;

        case 'gNo.VCF.Switch':
            if (!this.currentPatch.buttons.gNoVcfSwitch) {

                // Write code for inverted ENV curve to filter

                /*
                this.filterEnvelopeInverse.connect(this.filterEnvelopeScaler);
                this.filterEnvelopeScaler.min = 0;
                this.filterEnvelopeScaler.max = this.oscillatorBank[0].lowPassFilter.frequency.value;
                for (let i = 0; i < 6; i++) {
                    this.filterEnvelopeScaler = new Tone.Scale(0, 20000).connect(this.filterEnvelopeScalerGain);
                    this.oscillatorBank[i].filterEnvelope.disconnect(this.filterEnvelopeScaler);
                    this.oscillatorBank[i].filterEnvelope.connect(this.filterEnvelopeInverse);
                }
                */
                document.getElementById('gNo.VCF.Switch.Switch').setAttribute('transform', 'translate(0, 14)');
                this.currentPatch.buttons.gNoVcfSwitch = true;

            } else {

                document.getElementById('gNo.VCF.Switch.Switch').setAttribute('transform', 'translate(0, 0)');
                this.currentPatch.buttons.gNoVcfSwitch = false;
            }
            break;

        case 'gNo.VCA.Switch':
            if (!this.currentPatch.buttons.gNoVcaSwitch) {

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].ampEnvelope.attack = 0;
                    this.oscillatorBank[i].ampEnvelope.decay = 0;
                    this.oscillatorBank[i].ampEnvelope.sustain = 1;
                    this.oscillatorBank[i].ampEnvelope.release = 0;

                }
                document.getElementById('gNo.VCA.Switch.Switch').setAttribute('transform', 'translate(0, 14)');
                this.currentPatch.buttons.gNoVcaSwitch = true;

            } else {

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].ampEnvelope.attack = math.scaleValue(math.cubeCurve(this.currentPatch.sliders.gNoEnvelopeSliderA), [0, +1], [+0.001, +3]);
                    this.oscillatorBank[i].ampEnvelope.decay = math.scaleValue(math.cubeCurve(this.currentPatch.sliders.gNoEnvelopeSliderD), [0, +1], [+0.001, +3]);
                    let sustainValue = Math.exp((this.currentPatch.sliders.gNoEnvelopeSliderS) * (Math.log(1000))) / 1000;
                    if (sustainValue < 0) {
                        sustainValue = 0;
                    }
                    if (sustainValue > 1) {
                        sustainValue = 1;
                    }
                    this.oscillatorBank[i].ampEnvelope.sustain = sustainValue;
                    this.oscillatorBank[i].ampEnvelope.release = math.scaleValue(math.cubeCurve(this.currentPatch.sliders.gNoEnvelopeSliderR), [0, +1], [+0.001, +3]);;

                }
                document.getElementById('gNo.VCA.Switch.Switch').setAttribute('transform', 'translate(0, 0)');
                this.currentPatch.buttons.gNoVcaSwitch = false;

            }
            break;

        case 'gNo.Chorus.Buttons.Button.Off':

            if (this.currentPatch.buttons.gNoChorus1 || this.currentPatch.buttons.gNoChorus2) {
                document.getElementById('gNo.Chorus.Buttons.Led.1').setAttribute('fill', '#640d0d');
                document.getElementById('gNo.Chorus.Buttons.Led.2').setAttribute('fill', '#640d0d');

                for (let i = 0; i < 6; i++) {
                    this.oscillatorBank[i].vca.disconnect(this.chorus);
                    this.oscillatorBank[i].vca.connect(this.masterGain);
                }

                this.chorus.disconnect(this.masterGain);
                this.currentPatch.buttons.gNoChorus1 = false;
                this.currentPatch.buttons.gNoChorus2 = false;

            }
            break;

        case 'gNo.Chorus.Buttons.Button.1':

            this.chorus.wet.value = 0.5;
            if (!this.currentPatch.buttons.gNoChorus1 && !this.currentPatch.buttons.gNoChorus2) {
                for (let i = 0; i < 6; i++) {

                    this.oscillatorBank[i].vca.disconnect(this.masterGain);
                    this.oscillatorBank[i].vca.connect(this.chorus);

                }
                this.chorus.connect(this.masterGain);
            }

            document.getElementById('gNo.Chorus.Buttons.Led.1').setAttribute('fill', '#ee2a28');
            document.getElementById('gNo.Chorus.Buttons.Led.2').setAttribute('fill', '#640d0d');
            this.currentPatch.buttons.gNoChorus1 = true;
            this.currentPatch.buttons.gNoChorus2 = false;
            break;

        case 'gNo.Chorus.Buttons.Button.2':

            this.chorus.wet.value = 0.7;

            if (!this.currentPatch.buttons.gNoChorus1 && !this.currentPatch.buttons.gNoChorus2) {
                for (let i = 0; i < 6; i++) {

                    this.oscillatorBank[i].vca.disconnect(this.masterGain);
                    this.oscillatorBank[i].vca.connect(this.chorus);

                }
                this.chorus.connect(this.masterGain);
            }

            document.getElementById('gNo.Chorus.Buttons.Led.1').setAttribute('fill', '#640d0d');
            document.getElementById('gNo.Chorus.Buttons.Led.2').setAttribute('fill', '#ee2a28');
            this.currentPatch.buttons.gNoChorus1 = false;
            this.currentPatch.buttons.gNoChorus2 = true;
            break;
    }
}