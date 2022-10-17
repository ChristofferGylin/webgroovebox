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

            switch (this.syncMode) {

                case 'note':
                    
                    if (signalValue < 0.1429) {

                        this.fx.delayTime.value = '64n';

                    } else if (signalValue < 0.2858) {

                        this.fx.delayTime.value = '32n';

                    } else if (signalValue < 0.4287) {

                        this.fx.delayTime.value = '16n';

                    } else if (signalValue < 0.5716) {

                        this.fx.delayTime.value = '8n';

                    } else if (signalValue < 0.7145) {

                        this.fx.delayTime.value = '4n';

                    } else if (signalValue < 0.8574) {

                        this.fx.delayTime.value = '2n';

                    } else if (signalValue >= 0.8574) {

                        this.fx.delayTime.value = '1n';

                    }
                    
                    break;

                case 'dot':
                    
                    if (signalValue < 0.1429) {

                        this.fx.delayTime.value = '64n.';

                    } else if (signalValue < 0.2858) {

                        this.fx.delayTime.value = '32n.';

                    } else if (signalValue < 0.4287) {

                        this.fx.delayTime.value = '16n.';

                    } else if (signalValue < 0.5716) {

                        this.fx.delayTime.value = '8n.';

                    } else if (signalValue < 0.7145) {

                        this.fx.delayTime.value = '4n.';

                    } else if (signalValue < 0.8574) {

                        this.fx.delayTime.value = '2n.';

                    } else if (signalValue >= 0.8574) {

                        this.fx.delayTime.value = '1n.';

                    }

                    break;

                case 'trip':
                    
                    if (signalValue < 0.1429) {

                        this.fx.delayTime.value = '64t';

                    } else if (signalValue < 0.2858) {

                        this.fx.delayTime.value = '32t';

                    } else if (signalValue < 0.4287) {

                        this.fx.delayTime.value = '16t';

                    } else if (signalValue < 0.5716) {

                        this.fx.delayTime.value = '8t';

                    } else if (signalValue < 0.7145) {

                        this.fx.delayTime.value = '4t';

                    } else if (signalValue < 0.8574) {

                        this.fx.delayTime.value = '2t';

                    } else if (signalValue >= 0.8574) {

                        this.fx.delayTime.value = '1t';

                    }

                    break;

                case 'free':

                    this.fx.delayTime.value = math.scaleValue(scaledValue, [0, 1], [0, 15]);
                    break;

            }
            this.knobValueDelayTime = signalValue;
            this.setDisplay(1);
            break;

        case 'Par2':

            this.fx.feedback.value = signalValue;
            this.knobValueFeedback = signalValue;
            this.setDisplay(2);
            break;

        case 'Par3':

            this.fx.wet.value = signalValue;
            this.knobValueWet = signalValue;
            this.setDisplay(3);
            break;


    }
}