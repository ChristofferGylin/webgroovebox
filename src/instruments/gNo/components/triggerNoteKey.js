export function triggerNoteKey(note) {
    if (this.polyMode = 1) {
        for (let i = 0; i < this.oscillatorBank.length; i++) {
            if (this.oscillatorBank[i].activeNote === 'none') {
                this.oscillatorBank[i].sawOsc.frequency.value = note;
                this.oscillatorBank[i].pulseOsc.frequency.value = note;
                this.oscillatorBank[i].subOsc.frequency.value = note;
                this.oscillatorBank[i].ampEnvelope.triggerAttack();
                this.oscillatorBank[i].filterEnvelope.triggerAttack();
                this.oscillatorBank[i].activeNote = note;
                break;
            }
        }
    }
}