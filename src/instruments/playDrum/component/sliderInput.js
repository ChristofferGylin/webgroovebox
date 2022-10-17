import { project } from '../../../index.js';
 /*
export function sliderInput(signalValue, idSplit) {
    if (project.instrumentsArray[project.activeInstrument].displayTimers[idSplit[2]][1]) {
        clearTimeout(project.instrumentsArray[project.activeInstrument].displayTimers[idSplit[2]][0])
        project.instrumentsArray[project.activeInstrument].displayTimers[idSplit[2]][1] = false;
    }
    document.getElementById(`playDrum.SliderNeon.${idSplit[2]}`).setAttribute("opacity", signalValue);
    this.mixer[idSplit[2]][0].gain.value = signalValue;
    document.getElementById(`playDrum.displayDiv.${idSplit[2]}`).innerHTML = signalValue.toFixed(2);


    project.instrumentsArray[project.activeInstrument].displayTimers[idSplit[2]][0] = setTimeout(function () {
        let idNumber = parseInt(idSplit[2]);
        document.getElementById(`playDrum.displayDiv.${idSplit[2]}`).innerHTML = project.instrumentsArray[project.activeInstrument].mixer[idNumber][1];
    }, 2000);
    project.instrumentsArray[project.activeInstrument].displayTimers[idSplit[2]][1] = true;
}
*/

export function sliderInput(signalValue, idSplit) {
    
    document.getElementById(`playDrum.SliderNeon.${idSplit[2]}`).setAttribute("opacity", signalValue);
    this.mixer[idSplit[2]][0].gain.value = signalValue;
    this.setDisplayParameter(signalValue.toFixed(2), idSplit[2]);
    
}