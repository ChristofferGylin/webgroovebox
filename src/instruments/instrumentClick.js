import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { mixer } from '../mixer/mixer.js';
import { sequencer } from '../sequencer/sequencer.js';
import { project } from '../index.js';

export function instrumentClick(elem) {
    main.instrumentAnimationOk = false;
   
    if (main.instrumentAnimation !== undefined) {
        main.instrumentAnimation.cancel(0);
    }
    
    let instrumentClicked = elem;
    let instrumentClickedSplit = instrumentClicked.id.split('.');
    project.activeInstrument = instrumentClickedSplit[1];

    if (project.mode === 'pattern') {
        
            project.instrumentsArray[project.activeInstrument].drawInstrument();
            project.mixer.channels[project.activeInstrument].master.listAuxSends();
            project.mixer.channels[project.activeInstrument].master.listInsertFx(0, 0, 'channelStripActive');
            document.getElementById('fxContainer').innerHTML = '';

            for (let i = 0; i < project.mixer.channels[project.activeInstrument].master.insertFx.length; i++) {

                if (project.mixer.channels[project.activeInstrument].master.insertFx[i].onScreenPattern === true) {
        
                    project.mixer.channels[project.activeInstrument].master.insertFx[i].drawFx(i, 'channelStripActive');
        
                }
        
            }

            mixer.refreshSvgSlider('channelStripActive', 'channelStripActive.sliderThumb', project.mixer.channels[project.activeInstrument].master.sliderPosition, -91, 'channelStripActive.sliderValueBox', 'channelStripActive.InstrumentIdDiv');
            mixer.setKnobs('channelStripActive', true, true);
            mainInterface.statusRing('channelStripActive.knobPanLightRing', 'PlusMinus', project.mixer.channels[project.activeInstrument].master.pan.pan.value);
            mainInterface.statusRing('channelStripActive.knobAuxLightRing', 'Plus', project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue);
            sequencer.updatePatternLengthValue();
            sequencer.drawSequencer();
            if (project.instrumentsArray[project.activeInstrument].type === 'drums') {
                
                setTimeout(function() {
                    main.instrumentAnimationOk = true;
                }, 100);
            }
    }

    mainInterface.resetGridSelect();
    mainInterface.updateDropdownInstruments();
    mainInterface.updateDropdownPatterns();

}