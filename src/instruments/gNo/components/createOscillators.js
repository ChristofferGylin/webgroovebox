export function createOscillators() {
    for (let i = 0; i < 6; i++) {
        let voiceShip = {
            lowPassFilter: new Tone.Filter({
                frequency: 20000,
                rolloff: -24,
                Q: 6
            }),
            highPassFilter: new Tone.Filter({
                frequency: 0,
                type: 'highpass'
            }),
            ampEnvelope: new Tone.Envelope({
                attack: 0.5,
                decay: 0.5,
                sustain: 1,
                release: 0.8,
            }),

            filterEnvelope: new Tone.Envelope({
                attack: 0.5,
                decay: 0.5,
                sustain: 1,
                release: 0.8,
            }),
            ampEnvelopeGain: new Tone.Gain(0.5),
            vca: new Tone.Gain(0),
            oscGain: new Tone.Gain(0),
            subOscGain: new Tone.Gain(0),
            noiseGain: new Tone.Gain(0),
            pulseOsc: new Tone.PulseOscillator(440).start(Tone.Now),
            sawOsc: new Tone.Oscillator(440, 'sawtooth').start(Tone.Now),
            subOsc: new Tone.Oscillator(440, 'square').start(Tone.Now),
            noiseOsc: new Tone.Noise('white').start(Tone.Now),
            
            activeNote: 'none'
        };

        this.oscillatorBank.push(voiceShip);

    }

}