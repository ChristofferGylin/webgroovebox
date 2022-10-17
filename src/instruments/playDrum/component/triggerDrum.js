export function triggerDrum(drumNumber, time) {
    
    if (this.drums[drumNumber].sampler.loaded === true) {
        this.drums[drumNumber].sampler.triggerAttackRelease(this.drums[drumNumber].freq, this.drums[drumNumber].sampler.attack + this.drums[drumNumber].sampler.release, time);
    } 

}