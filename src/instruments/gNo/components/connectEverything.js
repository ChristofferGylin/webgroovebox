export function connectEverything() {

    for (let i = 0; i < 6; i++) {
        this.oscillatorBank[i].subOsc.connect(this.oscillatorBank[i].subOscGain);
        this.oscillatorBank[i].subOscGain.connect(this.oscillatorBank[i].highPassFilter);
        this.oscillatorBank[i].noiseOsc.connect(this.oscillatorBank[i].noiseGain);
        this.oscillatorBank[i].noiseGain.connect(this.oscillatorBank[i].highPassFilter);
        this.oscillatorBank[i].oscGain.connect(this.oscillatorBank[i].vca);
        this.oscillatorBank[i].highPassFilter.connect(this.oscillatorBank[i].lowPassFilter);
        this.oscillatorBank[i].lowPassFilter.connect(this.oscillatorBank[i].vca);
        this.oscillatorBank[i].vca.connect(this.masterGain);

        this.oscillatorBank[i].filterEnvelope.connect(this.filterEnvelopeScaler);
        this.filterEnvelopeScalerGain.connect(this.oscillatorBank[i].lowPassFilter.frequency);
        this.oscillatorBank[i].ampEnvelope.connect(this.oscillatorBank[i].ampEnvelopeGain);
        this.oscillatorBank[i].ampEnvelopeGain.connect(this.oscillatorBank[i].vca.gain);
        this.lfoGain.connect(this.oscillatorBank[i].lowPassFilter.frequency);
        this.oscillatorBank[i].subOsc.detune.value = -1200;
        this.pwmLfoGain.connect(this.oscillatorBank[i].pulseOsc.width);
    }

}