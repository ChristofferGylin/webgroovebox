import { sequencer } from '../../../sequencer/sequencer.js';

export function loadNextPatch() {
    if (this.activeKit < this.kits.length - 1) {
        this.loadKit(this.activeKit + 1);
        document.getElementById('currentPatchDisplay').innerHTML = this.kits[this.activeKit].name;
        
        for (let i = 0; i < 12; i++) {
            document.getElementById(`playDrum.displayDiv.${i}`).innerHTML = this.drums[i].name;
        } 
        
        sequencer.drawSequencer();

    }
}