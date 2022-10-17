import { math } from '../../../math/math.js';
import { project } from '../../../index.js';


export function knobInput(signalValue, id) {

    let idSplit = id.split('.');
    let displayValue;

    switch (idSplit[1]) {

        case 'Attack':

            project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].knobValues.attack = signalValue;
            project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].sampler.attack = math.scaleValue(signalValue, [0, +1], [0, +0.5]);
            
            this.setDisplayParameter(`${project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].sampler.attack.toFixed(3)} S`, idSplit[3]);
            break;
        
        case 'Decay':
            project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].knobValues.decay = signalValue;
            project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].sampler.release = math.scaleValue(math.cubeCurve(signalValue), [0, +1], [+0.001, +10]);
            this.setDisplayParameter(`${project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].sampler.release.toFixed(3)} S`, idSplit[3]);
            break;

        case 'Tune':

            project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].knobValues.tune = signalValue;
            project.instrumentsArray[project.activeInstrument].drums[parseInt(idSplit[3])].freq = math.pitchCurve(signalValue, 220)
            displayValue = math.scaleValue(signalValue, [0, +1], [-12, +12]).toFixed(2)
            if (signalValue > 0.5) {
                displayValue = `+${displayValue}`;
            }
            this.setDisplayParameter(displayValue, idSplit[3]);
            break;
        

    }
}