import { project } from '../index.js';


export function createMixerChannel(type) {
    if (type === 'drums') {

        let instrumentTrackObj = {
            type: 'multi',
            master: new this.ChannelStrip(),
            channels: [],
        };
        
          
        for (let i = 0; i < 12; i++) {
            
            let channelObj = new this.ChannelStrip();
            channelObj.newAuxSend(project.mixer.auxChannels[0]);
            channelObj.output.connect(instrumentTrackObj.master.input);
            instrumentTrackObj.channels.push(channelObj);
        }
        
        instrumentTrackObj.master.newAuxSend(project.mixer.auxChannels[0]);
        instrumentTrackObj.master.output.connect(project.mixer.master.input);
        project.mixer.channels.push(instrumentTrackObj);
        
    } else {

        let instrumentTrackObj = {
            type: 'stereo',
            master: new this.ChannelStrip()
            
        };

        project.mixer.channels.push(instrumentTrackObj);
        project.mixer.channels[project.numberOfInstruments].master.newAuxSend(project.mixer.auxChannels[0]);
        project.mixer.channels[project.numberOfInstruments].master.output.connect(project.mixer.master.input);
        
    }
    
}

