export function triggerNoteRelease(note, time, cellId) {

    for (let i = 0; i < this.oscillatorBank.length; i++) {
        if (this.oscillatorBank[i].activeNote === cellId) {
            this.oscillatorBank[i].ampEnvelope.triggerRelease(time);
            this.oscillatorBank[i].filterEnvelope.triggerRelease(time);

            break;
        }
    }
}