import { project } from '../index.js'

export function movePlayerHead() {

    let tempIndex = this.calcTempIndex(project.activeInstrument);

    if (tempIndex % 2 !== 0) {


        if (tempIndex !== 1) {

            tempIndex = (tempIndex - 1) / 2 + 1;

        }

        let currentTimeLineRulerCellName = `timeLineRulerCell${tempIndex}`;
        let currentTimeLineRulerCell = document.getElementById(currentTimeLineRulerCellName);
        let currentTimeLinePickerCellName = `timeLinePickerCell${tempIndex}`;
        let currentTimeLinePickerCell = document.getElementById(currentTimeLinePickerCellName);

        this.activeStep(currentTimeLineRulerCell);
        this.activeStep(currentTimeLinePickerCell);


        if (this.lastTimeLineRulerCell !== 0) {

            this.activeStep(this.lastTimeLineRulerCell);
            this.activeStep(this.lastTimeLinePickerCell);

        }

        this.lastTimeLineRulerCell = currentTimeLineRulerCell;
        this.lastTimeLinePickerCell = currentTimeLinePickerCell;

    }

}