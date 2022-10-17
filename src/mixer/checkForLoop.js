import { project } from '../index.js';

export function checkForLoop(source, destination) {

    let loop = false;

    if (source.name === destination.name) {
        
        loop = true;
        return loop;

    }

    for (let i = 0; i < destination.auxSends.length; i++) {

        if (destination.auxSends[i].name === source.name) {

            loop = true;
            break;

        } else {

            let subDestination;
            
            for (let j = 0; j < project.mixer.auxChannels.length; j++) {

                
                if (project.mixer.auxChannels[j].name === destination.auxSends[i].name) {

                    subDestination = project.mixer.auxChannels[j];
                    break;    

                }
            }

            loop = checkForLoop(source, subDestination);
        }

    }

    return loop;

}