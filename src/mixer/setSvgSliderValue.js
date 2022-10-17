import { math } from '../math/math.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';


export function setSvgSliderValue(signalValue, id) {
    let idSplit = id.split('.');
    let scaledValue = math.logCurve(signalValue);
    let dBValue = math.scaleValue(scaledValue, [0, +1], [-60, +6]);
    switch (idSplit[0]) {
        case 'channelStripMaster':

            project.mixer.master.sliderPosition = signalValue;
            project.mixer.master.volume.volume.value = dBValue;
            this.setSvgSliderDisplayValue(dBValue, 'channelStripMaster.sliderValueBox');
            break;

        case 'channelStripActive':

            project.mixer.channels[project.activeInstrument].master.sliderPosition = signalValue;
            project.mixer.channels[project.activeInstrument].master.volume.volume.value = dBValue;
            this.setSvgSliderDisplayValue(dBValue, 'channelStripActive.sliderValueBox');
            break;

        case 'channelStripMixer':

            if (idSplit[3] === '0') {

                project.mixer.channels[idSplit[2]].master.sliderPosition = signalValue;
                project.mixer.channels[idSplit[2]].master.volume.volume.value = dBValue;

            } else {

                project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].sliderPosition = signalValue;
                project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].volume.volume.value = dBValue;

            }

            this.setSvgSliderDisplayValue(dBValue, `channelStripMixer.sliderValueBox.${idSplit[2]}.${idSplit[3]}`);
            break;

        case 'channelStripAux':

            let indexNumber = parseInt(idSplit[2]) - project.mixer.channels.length;

            project.mixer.auxChannels[indexNumber].sliderPosition = signalValue;
            project.mixer.auxChannels[indexNumber].volume.volume.value = dBValue;

            this.setSvgSliderDisplayValue(dBValue, `channelStripAux.sliderValueBox.${idSplit[2]}.${idSplit[3]}`);
            break;

        default:
            project.instrumentsArray[project.activeInstrument].sliderInput(signalValue, idSplit);

    }

}