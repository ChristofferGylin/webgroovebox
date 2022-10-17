import { project } from  '../index.js';

export function timeLinePicker(elem) {
    let rulerId = elem.id.replace('Picker', 'Ruler');
    let rulerCell = document.getElementById(rulerId);
    let pickerIdSplit = elem.id.split('Cell');
    project.index = pickerIdSplit[1];
    this.activeStep(elem);
    this.activeStep(rulerCell);

    if (this.lastTimeLineRulerCell !== 0) {
        this.activeStep(this.lastTimeLineRulerCell);
        this.activeStep(this.lastTimeLinePickerCell);
    }

    this.lastTimeLineRulerCell = rulerCell;
    this.lastTimeLinePickerCell = elem;
}