export function getAutomationDefaultValue() {

    let value;

    switch (this.automation.selectedParameter) {

        // Sliders

        case 'LFO Rate':
            value = this.currentPatch.sliders.gNoLfoSliderRate;
            break;

        case 'DCO LFO':
            value = this.currentPatch.sliders.gNoDcoLfoSlider;
            break;

        case 'DCO PWM':
            value = this.currentPatch.sliders.gNoDcoPwmSlider;
            break;

        case 'DCO Sub':
            value = this.currentPatch.sliders.gNoDcoSubSlider;
            break;

        case 'DCO Noise':
            value = this.currentPatch.sliders.gNoDcoNoiseSlider;
            break;

        case 'HPF Frequency':
            value = this.currentPatch.sliders.gNoHpfSlider;
            break;

        case 'VCF Frequency':
            value = this.currentPatch.sliders.gNoVcfFreqSlider;
            break;

        case 'VCF Resonance':
            value = this.currentPatch.sliders.gNoVcfResSlider;
            break;

        case 'VCF Envelope':
            value = this.currentPatch.sliders.gNoVcfEnvSlider;
            break;

        case 'VCF LFO':
            value = this.currentPatch.sliders.gNoVcfLfoSlider;
            break;

        case 'VCF KYBD':
            value = this.currentPatch.sliders.gNoVcfKybdSlider;
            break;

        case 'VCA Level':
            value = this.currentPatch.sliders.gNoLevelSlider;
            break;

        case 'ENV A':
            value = this.currentPatch.sliders.gNoEnvelopeSliderA;
            break;

        case 'ENV D':
            value = this.currentPatch.sliders.gNoEnvelopeSliderD;
            break;

        case 'ENV S':
            value = this.currentPatch.sliders.gNoEnvelopeSliderS;
            break;

        case 'ENV R':
            value = this.currentPatch.sliders.gNoEnvelopeSliderR;
            break;

        // Buttons and Switches

        case 'DCO Saw Button':
            if (this.currentPatch.buttons.gNoDcoSawButton) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'DCO PWM Switch':
            if (this.currentPatch.buttons.gNoDcoPwmSwitch) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'DCO Pulse Button':
            if (this.currentPatch.buttons.gNoDcoPulseButton) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'DCO Range Button 1':
            if (this.currentPatch.buttons.gNoDcoRangeButton1) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'DCO Range Button 2':
            if (this.currentPatch.buttons.gNoDcoRangeButton2) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'DCO Range Button 3':
            if (this.currentPatch.buttons.gNoDcoRangeButton3) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'Chorus 1':
            if (this.currentPatch.buttons.gNoChorus1) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'Chorus 2':
            if (this.currentPatch.buttons.gNoChorus2) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'VCF Envelope Invert':
            if (this.currentPatch.buttons.gNoVcfSwitch) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        case 'VCA ENV Gate Switch':
            if (this.currentPatch.buttons.gNoVcaSwitch) {

                value = 1;

            } else {

                value = 0;

            }
            break;

        default:
            break;
    }

    return value;

}