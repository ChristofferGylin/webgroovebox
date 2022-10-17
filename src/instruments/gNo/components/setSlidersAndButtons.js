import { mixer } from '../../../mixer/mixer.js';

export function setSlidersAndButtons() {
    let ledOn = `#ee2a28`;
    let ledOff = `#640d0d`;
    // Sliders

    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.LFO.Slider.Rate`, this.currentPatch.sliders.gNoLfoSliderRate, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.DCO.Slider.LFO`, this.currentPatch.sliders.gNoDcoLfoSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.DCO.Slider.PWM`, this.currentPatch.sliders.gNoDcoPwmSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.DCO.Slider.Sub`, this.currentPatch.sliders.gNoDcoSubSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.HPF.Slider.HPF`, this.currentPatch.sliders.gNoHpfSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.VCF.Slider.Freq`, this.currentPatch.sliders.gNoVcfFreqSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.VCF.Slider.Res`, this.currentPatch.sliders.gNoVcfResSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.VCF.Slider.ENV`, this.currentPatch.sliders.gNoVcfEnvSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.VCF.Slider.LFO`, this.currentPatch.sliders.gNoVcfLfoSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.VCA.Slider.Level`, this.currentPatch.sliders.gNoLevelSlider, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.ENV.Slider.A`, this.currentPatch.sliders.gNoEnvelopeSliderA, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.ENV.Slider.D`, this.currentPatch.sliders.gNoEnvelopeSliderD, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.ENV.Slider.S`, this.currentPatch.sliders.gNoEnvelopeSliderS, -159);
    mixer.setSvgSliderPosition(`gNo.Svg`, `gNo.ENV.Slider.R`, this.currentPatch.sliders.gNoEnvelopeSliderR, -159);


    // Buttons  

    if (this.currentPatch.buttons.gNoDcoPulseButton) {
        document.getElementById('gNo.DCO.WaveLed.Pulse').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.DCO.WaveLed.Pulse').setAttribute('fill', ledOff);
    }

    if (this.currentPatch.buttons.gNoDcoSawButton) {
        document.getElementById('gNo.DCO.WaveLed.Saw').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.DCO.WaveLed.Saw').setAttribute('fill', ledOff);
    }

    if (this.currentPatch.buttons.gNoDcoRangeButton1) {
        document.getElementById('gNo.DCO.RangeLed.1').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.DCO.RangeLed.1').setAttribute('fill', ledOff);
    }

    if (this.currentPatch.buttons.gNoDcoRangeButton2) {
        document.getElementById('gNo.DCO.RangeLed.2').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.DCO.RangeLed.2').setAttribute('fill', ledOff);
    }

    if (this.currentPatch.buttons.gNoDcoRangeButton3) {
        document.getElementById('gNo.DCO.RangeLed.3').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.DCO.RangeLed.3').setAttribute('fill', ledOff);
    }

    if (this.currentPatch.buttons.gNoDcoPwmSwitch) {
        document.getElementById('gNo.DCO.Switch.Switch').setAttribute('transform', 'translate(0, 14)');
    } else {
        document.getElementById('gNo.DCO.Switch.Switch').setAttribute('transform', 'translate(0, 0)');
    }

    if (this.currentPatch.buttons.gNoVcfSwitch) {
        document.getElementById('gNo.VCF.Switch.Switch').setAttribute('transform', 'translate(0, 14)');
    } else {
        document.getElementById('gNo.VCF.Switch.Switch').setAttribute('transform', 'translate(0, 0)');
    }

    if (this.currentPatch.buttons.gNoVcaSwitch) {
        document.getElementById('gNo.VCA.Switch.Switch').setAttribute('transform', 'translate(0, 14)');
    } else {
        document.getElementById('gNo.VCA.Switch.Switch').setAttribute('transform', 'translate(0, 0)');
    }

    if (this.currentPatch.buttons.gNoChorus1) {
        document.getElementById('gNo.Chorus.Buttons.Led.1').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.Chorus.Buttons.Led.1').setAttribute('fill', ledOff);
    }

    if (this.currentPatch.buttons.gNoChorus2) {
        document.getElementById('gNo.Chorus.Buttons.Led.2').setAttribute('fill', ledOn);
    } else {
        document.getElementById('gNo.Chorus.Buttons.Led.2').setAttribute('fill', ledOff);
    }

}