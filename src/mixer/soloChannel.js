import { project } from '../index.js';
export function soloChannel(e) {
    let target;

    if (project.mode === 'pattern') {

        target = document.getElementById('channelStripActive.soloText');

        if (project.mixer.channels[project.activeInstrument].master.solo === true) {
            project.mixer.channels[project.activeInstrument].master.solo = false;
            setSoloChannels('unsolo');
            target.setAttribute('fill', '#efefef');

        } else if (project.mixer.channels[project.activeInstrument].master.solo === false) {
            project.mixer.channels[project.activeInstrument].master.solo = true;
            setSoloChannels('unsolo');
            target.setAttribute('fill', '#6AFC00');

        }




    } else if (project.mode === 'mixer') {

        let idSplit = e.target.id.split('.');

        target = document.getElementById(`channelStripMixer.soloText.${idSplit[2]}.${idSplit[3]}`);

        if (idSplit[3] === '0') {

            if (project.mixer.channels[idSplit[2]].master.solo === true) {
                project.mixer.channels[idSplit[2]].master.solo = false;
                target.setAttribute('fill', '#efefef');

                if (project.mixer.channels[idSplit[2]].type === 'multi') {
                    for (let i = 0; i < project.mixer.channels[idSplit[2]].channels.length; i++) {
                        project.mixer.channels[idSplit[2]].channels[i].solo = false;
                        target = document.getElementById(`channelStripMixer.soloText.${idSplit[2]}.${i + 1}`);
                        target.setAttribute('fill', '#efefef');
                    }
                }

                setSoloChannels('unsolo');

            } else if (project.mixer.channels[idSplit[2]].master.solo === false) {
                project.mixer.channels[idSplit[2]].master.solo = true;
                target.setAttribute('fill', '#6AFC00');

                if (project.mixer.channels[idSplit[2]].type === 'multi') {

                    for (let i = 0; i < project.mixer.channels[idSplit[2]].channels.length; i++) {
                        project.mixer.channels[idSplit[2]].channels[i].solo = true;
                        target = document.getElementById(`channelStripMixer.soloText.${idSplit[2]}.${i + 1}`);
                        target.setAttribute('fill', '#6AFC00');
                    }
                }

                setSoloChannels('unsolo');
            }
        } else {
            if (project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].solo === true) {
                project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].solo = false;
                target.setAttribute('fill', '#efefef');
                let soloChannels = false;
                for (let i = 0; i < project.mixer.channels[idSplit[2]].channels.length; i++) {
                    if (project.mixer.channels[idSplit[2]].channels[i].solo) {
                        soloChannels = true;
                        break;

                    }
                }

                if (!soloChannels) {

                    project.mixer.channels[idSplit[2]].master.solo = false;

                    target = document.getElementById(`channelStripMixer.soloText.${idSplit[2]}.${0}`)
                    target.setAttribute('fill', '#efefef');
                }

                setSoloChannels('unsolo');

            } else if (project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].solo === false) {
                project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].solo = true;
                project.mixer.channels[idSplit[2]].master.solo = true;
                setSoloChannels('unsolo');
                target.setAttribute('fill', '#6AFC00');
                target = document.getElementById(`channelStripMixer.soloText.${idSplit[2]}.${0}`)
                target.setAttribute('fill', '#6AFC00');


            }
        }


    }

    function setSoloChannels(state) {

        switch (state) {

            case 'solo':

                switch (project.mode) {

                    case 'pattern':

                        for (let i = 0; i < project.mixer.channels.length; i++) {

                            if (project.mixer.channels[i].master.solo === false) {

                                project.mixer.channels[i].master.soloMuted = true;
                                project.mixer.channels[i].master.output.gain.value = 0;

                            }

                        }
                        break;

                    case 'mixer':

                        for (let i = 0; i < project.mixer.channels.length; i++) {

                            if (project.mixer.channels[i].master.solo === false) {

                                project.mixer.channels[i].master.soloMuted = true;
                                project.mixer.channels[i].master.output.gain.value = 0;

                            }

                            if (project.mixer.channels[i].type === 'multi') {

                                for (let j = 0; j < project.mixer.channels[i].channels.length; j++) {

                                    if (project.mixer.channels[i].channels[j].solo === false) {

                                        project.mixer.channels[i].channels[j].soloMuted = true;
                                        project.mixer.channels[i].channels[j].output.gain.value = 0;

                                    }

                                }

                            }

                        }
                        break;


                }
                break;


            case 'unsolo':


                switch (project.mode) {

                    case 'pattern':

                        for (let i = 0; i < project.mixer.channels.length; i++) {

                            project.mixer.channels[i].master.soloMuted = false;

                            if (project.mixer.channels[i].master.mute === false) {

                                project.mixer.channels[i].master.output.gain.value = 1;

                            }
                        }

                        for (let i = 0; i < project.mixer.channels.length; i++) {

                            if (project.mixer.channels[i].master.solo === true) {

                                setSoloChannels('solo');
                                break;

                            }

                        }
                        break;

                    case 'mixer':

                        for (let i = 0; i < project.mixer.channels.length; i++) {

                            project.mixer.channels[i].master.soloMuted = false;

                            if (project.mixer.channels[i].master.mute === false) {

                                project.mixer.channels[i].master.output.gain.value = 1;

                            }

                            if (project.mixer.channels[i].type === 'multi') {

                                for (let j = 0; j < project.mixer.channels[i].channels.length; j++) {

                                    project.mixer.channels[i].channels[j].soloMuted = false;

                                    if (project.mixer.channels[i].channels[j].mute === false) {

                                        project.mixer.channels[i].channels[j].output.gain.value = 1;

                                    }

                                }
                            }

                        }

                        let hasSolos = false;

                        for (let i = 0; i < project.mixer.channels.length; i++) {

                            if (project.mixer.channels[i].master.solo === true) {

                                hasSolos = true;
                                break;

                            }

                            if (project.mixer.channels[i].type === 'multi') {

                                for (let j = 0; j < project.mixer.channels[i].channels.length; j++) {

                                    if (project.mixer.channels[i].channels[j].solo === true) {

                                        hasSolos = true;

                                    }

                                }

                            }

                        }

                        if (hasSolos) {

                            setSoloChannels('solo');

                        }

                        break;

                }

        }
    }
}