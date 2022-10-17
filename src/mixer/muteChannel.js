import { project } from '../index.js';
export function muteChannel(e) {

    let idSplit = e.target.id.split('.');
    let target;

    if (project.mode === 'pattern') {

        if (idSplit[0] === 'channelStripActive') {

            target = document.getElementById('channelStripActive.muteText');

            if (project.mixer.channels[project.activeInstrument].master.mute === true) {

                project.mixer.channels[project.activeInstrument].master.mute = false;

                if (project.mixer.channels[project.activeInstrument].master.soloMuted === false) {

                    project.mixer.channels[project.activeInstrument].master.output.gain.value = 1;

                }
                
                target.setAttribute('fill', '#efefef');

            } else if (project.mixer.channels[project.activeInstrument].master.mute === false) {
                
                project.mixer.channels[project.activeInstrument].master.mute = true;
                project.mixer.channels[project.activeInstrument].master.output.gain.value = 0;
                target.setAttribute('fill', '#6AFC00');

            }
        } else {

            target = document.getElementById('channelStripMaster.muteText');
            
            if (project.mixer.master.mute === true) {

                
                project.mixer.master.mute = false;

                if (project.mixer.master.soloMuted === false) {

                    project.mixer.master.output.gain.value = 1;

                }

                
                target.setAttribute('fill', '#efefef');

            } else if (project.mixer.master.mute === false) {

                
                project.mixer.master.mute = true;
                project.mixer.master.output.gain.value = 0;
                target.setAttribute('fill', '#6AFC00');

            }
        }

    } else if (project.mode === 'mixer') {

        if (idSplit[0] === 'channelStripMixer') {

            target = document.getElementById(`channelStripMixer.muteText.${idSplit[2]}.${idSplit[3]}`);

            if (idSplit[3] === '0') {

                if (project.mixer.channels[idSplit[2]].master.mute === true) {
                    project.mixer.channels[idSplit[2]].master.mute = false;

                    if (project.mixer.channels[idSplit[2]].master.soloMuted === false) {

                        project.mixer.channels[idSplit[2]].master.output.gain.value = 1;

                    }

                    
                    target.setAttribute('fill', '#efefef');

                } else if (project.mixer.channels[idSplit[2]].master.mute === false) {

                    project.mixer.channels[idSplit[2]].master.mute = true;
                    project.mixer.channels[idSplit[2]].master.output.gain.value = 0;
                    target.setAttribute('fill', '#6AFC00');

                }
            } else {

                if (project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].mute === true) {

                    project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].mute = false;

                    if (project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].soloMuted === false) {

                        project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].output.gain.value = 1;

                    }
                    
                    target.setAttribute('fill', '#efefef');

                } else if (project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].mute === false) {
                    project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].mute = true;
                    project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].output.gain.value = 0;
                    target.setAttribute('fill', '#6AFC00');
                }
            }

        } else {

            target = document.getElementById(`channelStripAux.muteText.${idSplit[2]}.${idSplit[3]}`);
            let auxChannelNr = parseInt(idSplit[2]) - project.mixer.channels.length;
            if (project.mixer.auxChannels[auxChannelNr].mute === true) {
                project.mixer.auxChannels[auxChannelNr].mute = false;
                if (project.mixer.auxChannels[auxChannelNr].soloMuted === false) {

                    project.mixer.auxChannels[auxChannelNr].output.gain.value = 1;

                }
                
                target.setAttribute('fill', '#efefef');
            } else if (project.mixer.auxChannels[auxChannelNr].mute === false) {
                project.mixer.auxChannels[auxChannelNr].mute = true;
                project.mixer.auxChannels[auxChannelNr].output.gain.value = 0;
                target.setAttribute('fill', '#6AFC00');
            }
        }




    }
}