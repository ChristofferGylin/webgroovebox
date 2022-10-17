export function loadThisPatch(elem) {
    this.currentPatchNumber = elem.dataset.note;
    this.loadPatch();
}