import { project } from '../../../index.js';

export function setDisplayParameter(parameterValue, id) {
    let oldInstrumentId = project.activeInstrument
    if (project.instrumentsArray[project.activeInstrument].displayTimers[id][1]) {
        clearTimeout(project.instrumentsArray[project.activeInstrument].displayTimers[id][0])
        project.instrumentsArray[project.activeInstrument].displayTimers[id][1] = false;
    }
    document.getElementById(`playDrum.displayDiv.${id}`).innerHTML = parameterValue;
    project.instrumentsArray[project.activeInstrument].displayTimers[id][1] = true;
    
    project.instrumentsArray[project.activeInstrument].displayTimers[id][0] = setTimeout(function () {
        
        if (project.mode === 'pattern' && oldInstrumentId === project.activeInstrument) {
            let idNumber = parseInt(id);
            document.getElementById(`playDrum.displayDiv.${id}`).innerHTML = project.instrumentsArray[project.activeInstrument].drums[idNumber].name;
        }
        
        project.instrumentsArray[oldInstrumentId].displayTimers[id][1] = false;
    }, 2000);
    
}