import { project } from '../index.js';

export function selectNewSend(e) {
    
    for (let i = 0; i < project.mixer.auxChannels.length; i++) {
        
        let deselectTarget = document.getElementById(`auxChannelItem.${i}`);

        if (deselectTarget.className === 'auxChannelItemSelected') {
            deselectTarget.className = 'auxChannelItem';
            break;
        }
        
    }
    
    if (e.target.id === 'newAuxChannelOk') {
        
        document.getElementById(`auxChannelItem.${project.mixer.auxChannels.length - 1}`).className = 'auxChannelItemSelected';
    } else {
       
        e.target.className = 'auxChannelItemSelected';
    }
    

}



        

       
