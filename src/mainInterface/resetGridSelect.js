import { project } from '../index.js';

export function resetGridSelect() {

    document.getElementById('controlCell8th').className = 'controlCell8th';
    document.getElementById('controlCell16th').className = 'controlCell16th';
    document.getElementById('controlCell32th').className = 'controlCell32th';
    document.getElementById('controlCell64th').className = 'controlCell64th';

    switch (project.instrumentsArray[project.activeInstrument].gridResolution) {

        case 8:
                         
            document.getElementById('controlCell8th').className = 'controlCell8thActive';           
            break;

        case 16:
            
            document.getElementById('controlCell16th').className = 'controlCell16thActive';
            break;

        case 32:
            
            document.getElementById('controlCell32th').className = 'controlCell32thActive';
            break;

        case 64:
           
            document.getElementById('controlCell64th').className = 'controlCell64thActive';
            break;

    } 

}