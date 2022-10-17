import { mainInterface } from '../../../mainInterface/mainInterface.js';
import { math } from '../../../math/math.js';


export function knobInput(signalValue, id) {
    
    let idSplit = id.split('.');

    // id syntax: reverb.PreDelay.RotateThis.channelStripActive.0.0.0

    let statusRingId;

    switch (idSplit[3]) {

        case 'channelStripMaster':
        case 'channelStripActive':

            statusRingId = `fx.${idSplit[1]}.LightRing.${idSplit[3]}.${idSplit[4]}`;
            
            break;

        case 'channelStripMixer':

            statusRingId = `fx.${idSplit[1]}.LightRing.${idSplit[3]}.${idSplit[4]}.${idSplit[5]}.${idSplit[6]}`;

            break;

        case 'channelStripAux':

            statusRingId = `fx.${idSplit[1]}.LightRing.${idSplit[3]}.${idSplit[4]}.${idSplit[5]}.${idSplit[6]}`;
            

            break;

    }
    
    mainInterface.statusRing(statusRingId, 'Plus', signalValue);

    let scaledValue = math.cubeCurve(signalValue);

    switch (idSplit[1]) {

        case 'Par1':
            
            this.fx.preDelay = math.scaleValue(scaledValue, [0, +1], [0, 0.25]);
            this.knobValuePreDelay = signalValue;
            this.setDisplay(1);           
            break;

        case 'Par2':

            this.fx.decay = math.scaleValue(scaledValue, [0, +1], [0.5, +20]);
            this.knobValueDecay = signalValue;
            this.setDisplay(2);
            break;

        case 'Par3':
            
            this.fx.wet.value = signalValue;
            this.knobValueWet = signalValue;
            this.setDisplay(3);
            break;


    } 
}