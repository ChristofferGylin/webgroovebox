import { project } from '../index.js';

export function updatePatternLengthValue() {
    let tempPatternLength = project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][1]

    if (tempPatternLength === 16) {
        document.getElementById('patternLengthValue').innerHTML = `1 Bar`;
    } else if (tempPatternLength === 12) {
        document.getElementById('patternLengthValue').innerHTML = `3/4 Bar`;
    } else if (tempPatternLength === 8) {
        document.getElementById('patternLengthValue').innerHTML = `1/2 Bar`;
    } else if (tempPatternLength === 4) {
        document.getElementById('patternLengthValue').innerHTML = `1/4 Bar`;
    }

    else {
        document.getElementById('patternLengthValue').innerHTML = `${tempPatternLength / 16} Bars`;
    }

}