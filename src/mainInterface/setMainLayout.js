import { project } from '../index.js'; 

export function setMainLayout(type) {

    switch (type) {

        case 'patternAndMixer':

            document.getElementById('container').innerHTML = this.mainLayoutPattern;
            this.eventListenersPatternAndMixer();
            this.updateDropdownInstruments();
            this.updateDropdownPatterns();
            break;

        case 'song':

            document.getElementById('container').innerHTML = this.mainLayoutSong;
            this.eventListenersSong();
            break;

    }

    document.getElementById('bpmValue').innerHTML = project.bpm;
}