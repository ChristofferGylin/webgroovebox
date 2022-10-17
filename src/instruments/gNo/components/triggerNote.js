export function triggerNote(note, time, cellId) {
    if (this.polyMode = 1) {
        for (let i = 0; i < this.oscillatorBank.length; i++) {
            if (this.oscillatorBank[i].activeNote === 'none') {


                this.oscillatorBank[i].sawOsc.frequency.setValueAtTime(note, time)
                this.oscillatorBank[i].pulseOsc.frequency.setValueAtTime(note, time)
                this.oscillatorBank[i].subOsc.frequency.setValueAtTime(note, time)

                this.oscillatorBank[i].vca.gain.setValueAtTime(0, time);
                this.oscillatorBank[i].ampEnvelope.triggerAttack(time);
                this.oscillatorBank[i].filterEnvelope.triggerAttack(time);
                this.oscillatorBank[i].activeNote = cellId;
                break;
            }
        }
    }

}