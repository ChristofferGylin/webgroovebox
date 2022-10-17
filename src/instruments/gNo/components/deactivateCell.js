export function deactivateCell(cellId) {
    for (let i = 0; i < this.oscillatorBank.length; i++) {
        if (this.oscillatorBank[i].activeNote === cellId) {
            this.oscillatorBank[i].ampEnvelope.triggerRelease();
            this.oscillatorBank[i].filterEnvelope.triggerRelease();
            this.oscillatorBank[i].activeNote = 'none';
            break;
        }
    }
}