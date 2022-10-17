export function loadPreviousPatch() {
    if (this.currentPatchNumber > 0) {
        this.currentPatchNumber--;
        this.loadPatch();
    }
}