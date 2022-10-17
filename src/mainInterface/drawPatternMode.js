import { math } from '../math/math.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';
import { mixer } from '../mixer/mixer.js';

export function drawPatternMode() {

    let mainHtml =
        `<div class="mainInnerContainerSide" id="mainInnerContainerLeft">

    </div>

    <div class="mainInnerContainerMiddle">
        <div class="sequencerContainer" id="sequencerContainer">
            
            <div id="sequencer"></div>
            
        </div>

        <div class="automationContainer" id="automationContainer">


        </div>

        <div class="instrumentContainer" id="instrumentContainer">
        
            <div id="instrument"></div>
    
        </div>
        
    </div>

    <div class="mainInnerContainerSide" id="mainInnerContainerRight"></div>`;

    document.getElementById('mainInnerContainer').innerHTML = mainHtml;
    mixer.drawChannelStripActiveInstrument();
    mixer.drawChannelStripMaster();
    project.instrumentsArray[project.activeInstrument].drawInstrument();

    for (let i = 0; i < project.mixer.channels[project.activeInstrument].master.insertFx.length; i++) {

        if (project.mixer.channels[project.activeInstrument].master.insertFx[i].onScreenPattern === true) {

            project.mixer.channels[project.activeInstrument].master.insertFx[i].drawFx(i, 'channelStripActive');

        }

    }

    mixer.refreshSvgSlider('channelStripActive', 'channelStripActive.sliderThumb', project.mixer.channels[project.activeInstrument].master.sliderPosition, -91, 'channelStripActive.sliderValueBox', 'channelStripActive.InstrumentIdDiv');
    sequencer.updatePatternLengthValue();
    sequencer.drawSequencer();
}




