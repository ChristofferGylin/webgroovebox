export function initDrums() {
    this.drums.length = 0;
    for (let i = 0; i < 12; i++) {
        let drum = {
    
            name: '',
            sampler: new Tone.Sampler({
                release: 1.272, 
                attack: 0
                
            }),
        
            freq: 440,
            knobValues: { 
                attack: 0,
                decay: 0.5,
                tune: 0.5
            }
        
        };
        drum.sampler.connect(this.mixer[i][0]);
        this.drums.push(drum);

    }

}