import { project } from '../../../index.js';

export function loadMixer() {

    for (let i = 0; i < 12; i++) {
        let thisKit;
        let mixerChannel = new Tone.Gain(0.8);
        mixerChannel.connect(project.mixer.channels[this.instrumentNumber].channels[i].input);
        if (this.activeKit === null || this.activeKit === undefined) {
            thisKit = 0;
        } else {
            thisKit = this.activeKit;
        }
        this.mixer.push([mixerChannel, this.kits[thisKit].drums[i][0]]);
    }
}