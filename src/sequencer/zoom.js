import { project } from '../index.js';

export function zoom(direction, axis) {
    if (axis === 'y') {
        if (direction === 'in') {
            if (project.instrumentsArray[project.activeInstrument].zoomLevelY < 1) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY += 0.25;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelY >= 1 && project.instrumentsArray[project.activeInstrument].zoomLevelY < 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY += 0.5;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelY >= 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY++;
            }
            if (project.instrumentsArray[project.activeInstrument].zoomLevelY > 20) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY = 20;
            }
        }

        if (direction === 'out') {
            if (project.instrumentsArray[project.activeInstrument].zoomLevelY <= 1) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY -= 0.25;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelY > 1 && project.instrumentsArray[project.activeInstrument].zoomLevelY <= 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY -= 0.5;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelY > 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY--;
            }

            if (project.instrumentsArray[project.activeInstrument].type === 'drums' && project.instrumentsArray[project.activeInstrument].zoomLevelY < 1.5) {
                project.instrumentsArray[project.activeInstrument].zoomLevelY = 1.5;
            }

        }
    }



    if (axis === 'x') {
        if (direction === 'in') {
            if (project.instrumentsArray[project.activeInstrument].zoomLevelX < 1) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX += 0.25;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelX >= 1 && project.instrumentsArray[project.activeInstrument].zoomLevelX < 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX += 0.5;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelX >= 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX++;
            }
            if (project.instrumentsArray[project.activeInstrument].zoomLevelX > 20) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX = 20;
            }
        }

        if (direction === 'out') {
            if (project.instrumentsArray[project.activeInstrument].zoomLevelX <= 1) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX -= 0.25;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelX > 1 && project.instrumentsArray[project.activeInstrument].zoomLevelX <= 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX -= 0.5;
            } else if (project.instrumentsArray[project.activeInstrument].zoomLevelX > 3) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX--;
            }
            if (project.instrumentsArray[project.activeInstrument].zoomLevelX < 0.5) {
                project.instrumentsArray[project.activeInstrument].zoomLevelX = 0.5;
            }
        }

    }


    this.drawSequencer();

}