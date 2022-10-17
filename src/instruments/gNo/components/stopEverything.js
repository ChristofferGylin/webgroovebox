export function stopEverything() {
    for (let i = 0; i < this.oscillatorBank.length; i++) {
        if (this.oscillatorBank[i].activeNote !== 'none') {
            this.oscillatorBank[i].ampEnvelope.triggerRelease();
            this.oscillatorBank[i].filterEnvelope.triggerRelease();
            this.oscillatorBank[i].activeNote = 'none';
            break;
        }
    }
}