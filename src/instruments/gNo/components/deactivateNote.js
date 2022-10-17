export function deactivateNote(note, cellId) {
    for (let i = 0; i < this.oscillatorBank.length; i++) {
        if (this.oscillatorBank[i].activeNote === cellId) {
            this.oscillatorBank[i].activeNote = 'none';
            break;
        }
    }

}