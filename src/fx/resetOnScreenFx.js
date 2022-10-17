import { project } from '../index.js';

export function resetOnScreenFx() {

    switch (project.mode) {

        case 'pattern':

            for (let i = 0; i < project.mixer.master.insertFx.length; i++) {

                project.mixer.master.insertFx[i].onScreenPattern = false;

            }

            for (let j = 0; j < project.mixer.channels[project.activeInstrument].master.insertFx.length; j++) {

                project.mixer.channels[project.activeInstrument].master.insertFx[j].onScreenPattern = false;

            }


            break;


        case 'mixer':

            for (let i = 0; i < project.mixer.master.insertFx.length; i++) {

                project.mixer.master.insertFx[i].onScreenMixer = false;

            }



            for (let i = 0; i < project.mixer.channels.length; i++) {

                for (let j = 0; j < project.mixer.channels[i].master.insertFx.length; j++) {

                    project.mixer.channels[i].master.insertFx[j].onScreenMixer = false;

                }

                if (project.mixer.channels[i].type === 'multi') {

                    for (let j = 0; j < project.mixer.channels[i].channels.length; j++) {

                        for (let k = 0; k < project.mixer.channels[i].channels[j].insertFx.length; k++) {

                            project.mixer.channels[i].channels[j].insertFx[k].onScreenMixer = false;

                        }

                    }

                }

            }

            for (let i = 0; i < project.mixer.auxChannels.length; i++) {

                for (let j = 0; j < project.mixer.auxChannels[i].insertFx.length; j++) {

                    project.mixer.auxChannels[i].insertFx[j].onScreenMixer = false;

                }

            }

            break;
    }
    
}