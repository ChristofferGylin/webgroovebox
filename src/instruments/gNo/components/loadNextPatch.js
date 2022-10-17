export function loadNextPatch() {
    if (this.currentPatchNumber + 1 < this.presets.length) {
        this.currentPatchNumber++;
        this.loadPatch();
    }
}