import { project } from '../../../index.js';

export function loadKit(kitIndex) {
    
    for (let i = 0; i < 12; i++) {
        
        this.drums[i].name = this.kits[kitIndex].drums[i][0];
        this.drums[i].sampler.add('A4', this.kits[kitIndex].drums[i][1]);
    }
    this.activeKit = kitIndex;
}
