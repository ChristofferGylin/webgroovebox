import { mainInterface } from '../mainInterface/mainInterface.js';
import { math } from '../math/math.js';
import { project } from '../index.js';



export function knobInput(signalValue, id) {
    
    let idSplit = id.split('.');

    switch (idSplit[0]) {

        case 'channelStripMaster':

            project.mixer.master.pan.pan.value = math.scaleValue(signalValue, [0, +1], [-1, +1]);
            mainInterface.statusRing('channelStripMaster.knobPanLightRing', 'PlusMinus', project.mixer.master.pan.pan.value);
            break;

        case 'channelStripActive':

            if (idSplit[1] === 'knobPan') {

                project.mixer.channels[project.activeInstrument].master.pan.pan.value = math.scaleValue(signalValue, [0, +1], [-1, +1]);
                mainInterface.statusRing('channelStripActive.knobPanLightRing', 'PlusMinus', project.mixer.channels[project.activeInstrument].master.pan.pan.value);
            } else if (idSplit[1] === 'knobAux') {

                let scaledValue = math.logCurve(signalValue);
                let dBValue = math.scaleValue(scaledValue, [0, +1], [-60, +6]);

                project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].output.volume.value = dBValue;
                project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue = signalValue;
                mainInterface.statusRing('channelStripActive.knobAuxLightRing', 'Plus', project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue);

            }

            break;

        case 'channelStripMixer':

            if (idSplit[1] === 'knobPan') {

                if (idSplit[idSplit.length - 1] === '0') {

                    project.mixer.channels[idSplit[idSplit.length - 2]].master.pan.pan.value = math.scaleValue(signalValue, [0, +1], [-1, +1]);
                    mainInterface.statusRing(`channelStripMixer.knobPanLightRing.${idSplit[idSplit.length - 2]}.${idSplit[idSplit.length - 1]}`, 'PlusMinus', project.mixer.channels[idSplit[idSplit.length - 2]].master.pan.pan.value);
                } else {

                    project.mixer.channels[idSplit[idSplit.length - 2]].channels[parseInt(idSplit[idSplit.length - 1]) - 1].pan.pan.value = math.scaleValue(signalValue, [0, +1], [-1, +1]);
                    mainInterface.statusRing(`channelStripMixer.knobPanLightRing.${idSplit[idSplit.length - 2]}.${idSplit[idSplit.length - 1]}`, 'PlusMinus', project.mixer.channels[idSplit[idSplit.length - 2]].channels[parseInt(idSplit[idSplit.length - 1]) - 1].pan.pan.value);
                }

            } else if (idSplit[1] === 'knobAux') {

                let scaledValue = math.logCurve(signalValue);
                let dBValue = math.scaleValue(scaledValue, [0, +1], [-60, +6]);

                if (idSplit[idSplit.length - 1] === '0') {

                    project.mixer.channels[idSplit[idSplit.length - 2]].master.auxSends[project.mixer.channels[idSplit[idSplit.length - 2]].master.selectedAux].output.volume.value = dBValue;
                    project.mixer.channels[idSplit[idSplit.length - 2]].master.auxSends[project.mixer.channels[idSplit[idSplit.length - 2]].master.selectedAux].knobValue = signalValue;
                    mainInterface.statusRing(`channelStripMixer.knobAuxLightRing.${idSplit[idSplit.length - 2]}.0`, 'Plus', signalValue);

                } else {

                    project.mixer.channels[idSplit[idSplit.length - 2]].channels[parseInt(idSplit[idSplit.length - 1]) - 1].auxSends[project.mixer.channels[idSplit[idSplit.length - 2]].channels[parseInt(idSplit[idSplit.length - 1]) - 1].selectedAux].output.volume.value = dBValue;
                    project.mixer.channels[idSplit[idSplit.length - 2]].channels[parseInt(idSplit[idSplit.length - 1]) - 1].auxSends[project.mixer.channels[idSplit[idSplit.length - 2]].channels[parseInt(idSplit[idSplit.length - 1]) - 1].selectedAux].knobValue = signalValue;
                    mainInterface.statusRing(`channelStripMixer.knobAuxLightRing.${idSplit[idSplit.length - 2]}.${idSplit[idSplit.length - 1]}`, 'Plus', signalValue);

                }

            }

            break;

        case 'channelStripAux':
            let indexNumber = parseInt(idSplit[idSplit.length - 2]) - project.mixer.channels.length;
            if (idSplit[1] === 'knobPan') {

                project.mixer.auxChannels[indexNumber].pan.pan.value = math.scaleValue(signalValue, [0, +1], [-1, +1]);
                mainInterface.statusRing(`channelStripAux.knobPanLightRing.${idSplit[idSplit.length - 2]}.${idSplit[idSplit.length - 1]}`, 'PlusMinus', project.mixer.auxChannels[indexNumber].pan.pan.value);
              
            } else if (idSplit[1] === 'knobAux') {

                let scaledValue = math.logCurve(signalValue);
                let dBValue = math.scaleValue(scaledValue, [0, +1], [-60, +6]);

                if (project.mixer.auxChannels[indexNumber].auxSends.length > 0) {

                    project.mixer.auxChannels[indexNumber].auxSends[project.mixer.auxChannels[indexNumber].selectedAux].output.volume.value = dBValue;
                    project.mixer.auxChannels[indexNumber].auxSends[project.mixer.auxChannels[indexNumber].selectedAux].knobValue = signalValue;
                }
                mainInterface.statusRing(`channelStripAux.knobAuxLightRing.${idSplit[idSplit.length - 2]}.0`, 'Plus', signalValue);
                
            }

            break;

    }
}