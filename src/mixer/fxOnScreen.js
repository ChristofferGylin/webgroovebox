import { project } from '../index.js';

export function fxOnScreen() {

    if (project.mode === 'pattern') {

        for (let i = 0; i < project.mixer.channels[project.activeInstrument].master.insertFx.length; i++) {

            if (project.mixer.channels[project.activeInstrument].master.insertFx[i].onScreenPattern === true) {

                project.mixer.channels[project.activeInstrument].master.insertFx[i].drawFx(i, 'channelStripActive');
                break;

            }

        }

        for (let i = 0; i < project.mixer.master.insertFx.length; i++) {

            if (project.mixer.master.insertFx[i].onScreenPattern === true) {

                project.mixer.master.insertFx[i].drawFx(i, 'channelStripMaster');
                break;

            }

        }

    } else if (project.mode === 'mixer') {

        for (let i = 0; i < project.mixer.channels.length; i++) {

            for (let j = 0; j < project.mixer.channels[i].master.insertFx.length; j++) {

                if (project.mixer.channels[i].master.insertFx[j].onScreenMixer === true) {

                    project.mixer.channels[i].master.insertFx[j].drawFx(j, 'channelStripMixer', i, 0);
                    break;

                }

            }

            if (project.mixer.channels[i].type === 'multi') {

                for (let j = 0; j < project.mixer.channels[i].channels.length; j++) {

                    for (let k = 0; k < project.mixer.channels[i].channels[j].insertFx.length; k++) {

                        if (project.mixer.channels[i].channels[j].insertFx[k].onScreenMixer === true) {

                            project.mixer.channels[i].channels[j].insertFx[k].drawFx(k, 'channelStripMixer', i, j);
                            break;

                        }

                    }

                }

            }


        }

        for (let i = 0; i < project.mixer.auxChannels.length; i++) {

            for (let j = 0; j < project.mixer.auxChannels[i].insertFx.length; j++) {

                if (project.mixer.auxChannels[i].insertFx[j].onScreenMixer === true) {

                    project.mixer.auxChannels[i].insertFx[j].drawFx(j, 'channelStripAux', i);
                    break;

                }

            }

        }

    }

}