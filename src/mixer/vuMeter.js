import { project } from '../index.js';
import { main } from '../mainParameters/main.js';
import { math } from '../math/math.js';
import { mixer } from './mixer.js';

export function vuMeter() {

    if (main.hasInstruments) {

        let vuValueR;
        let vuValueL;
        switch (project.mode) {
    
            case 'pattern':
                vuValueR = project.mixer.master.channelMeterR.getValue();
                vuValueL = project.mixer.master.channelMeterL.getValue();
                setVuCover('master');
                vuValueL = project.mixer.channels[project.activeInstrument].master.channelMeterL.getValue();
                vuValueR = project.mixer.channels[project.activeInstrument].master.channelMeterR.getValue();
                setVuCover('active');
                
                break;
    
            case 'mixer':
    
                for (let i = 0; i < project.mixer.channels.length; i++) {
    
                    let numberOfChannels = mixer.getNumberOfOutputs(i);
    
                    for (let j = 0; j < numberOfChannels; j++) {
    
                        if (j === 0) {
    
                            vuValueR = project.mixer.channels[i].master.channelMeterR.getValue();
                            vuValueL = project.mixer.channels[i].master.channelMeterL.getValue();
    
                        } else {
    
                            vuValueR = project.mixer.channels[i].channels[j - 1].channelMeterR.getValue();
                            vuValueL = project.mixer.channels[i].channels[j - 1].channelMeterL.getValue();
                        }
    
                        setVuCover('mixerChannel', i, j)
                    }
    
                }
    
                for (let i = 0; i < project.mixer.auxChannels.length; i++) {
    
                    vuValueR = project.mixer.auxChannels[i].channelMeterR.getValue();
                    vuValueL = project.mixer.auxChannels[i].channelMeterL.getValue();
                        
                    setVuCover('auxChannel', i + project.mixer.channels.length, 0)
                    
                }
    
                break;
        }
    
    
        let animationId = requestAnimationFrame(vuMeter);
        return animationId;
    
        function setVuCover(target, i, j) {
            let coverIdL;
            let coverIdR;
    
            switch (target) {
                case 'master':
                    coverIdL = 'channelStripMaster.vuMeterCoverL';
                    coverIdR = 'channelStripMaster.vuMeterCoverR';
                    break;
    
                case 'active': 
                    coverIdL = 'channelStripActive.vuMeterCoverL';
                    coverIdR = 'channelStripActive.vuMeterCoverR';
                    break;
    
                case 'mixerChannel':
                    coverIdL = `channelStripMixer.vuMeterCoverL.${i}.${j}`;
                    coverIdR = `channelStripMixer.vuMeterCoverR.${i}.${j}`;
                    break;
    
                case 'auxChannel':
                    coverIdL = `channelStripAux.vuMeterCoverL.${i}.${j}`;
                    coverIdR = `channelStripAux.vuMeterCoverR.${i}.${j}`;
                    break;
            }
    
            if (vuValueR < -60 || vuValueR === '-Infinity') {
                vuValueR = '-Infinity';
            }
    
            if (vuValueL < -60 || vuValueL === '-Infinity') {
                vuValueL = '-Infinity';
            }
    
            let coverHeightR = 92;
            let coverHeightL = 92;
    
            if (vuValueR !== '-Infinity') {
    
                let coverMultiplier = math.scaleValue(vuValueR, [-60, +6], [1, 0]);
                coverHeightR = 92 * coverMultiplier;
    
            }
    
            if (vuValueL !== '-Infinity') {
    
                let coverMultiplier = math.scaleValue(vuValueL, [-60, +6], [1, 0]);
                coverHeightL = 92 * coverMultiplier;
    
            }
    
            document.getElementById(coverIdL).setAttribute("height", coverHeightL);
            document.getElementById(coverIdR).setAttribute("height", coverHeightR);
        }

    }
    
}