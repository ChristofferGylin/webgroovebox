import { dialogBoxes } from './dialogBoxes.js';
import { mainInterface } from '../mainInterface/mainInterface.js' ;
import { main } from '../mainParameters/main.js'
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';

export function newSend(e) {

    if (e.target.id !== 'newAuxChannelOk') {
        
        main.newSendTarget = e.target.id

    }

    let newSendHtml = `<div class="dialogBox" id="newSend">
    <div class="dialogTitle">ADD NEW SEND</div>
    <div class="newSendInnerContainer">
        Destination:
        <div class="auxChannelList" id="auxChannelList"></div>
        <div class="newSendButtons" id="newSendButtons">
            <button class="dialogButton" id="newAuxChannel">New Aux Channel</button>
            <button class="dialogButton" id="newSendCancel">Cancel</button>
            <button class="dialogButton" id="newSendOk">Ok</button>
        </div>
        
    </div>
    </div>`;

    document.getElementById('dialogBoxContainer').innerHTML = newSendHtml;

    for (let i = 0; i < project.mixer.auxChannels.length; i++) {
        
        let auxName = project.mixer.auxChannels[i].name;
        document.getElementById('auxChannelList').innerHTML += `<div class="auxChannelItem" id="auxChannelItem.${i}">${auxName}</div>`;
        
    }

    if (e.target.id === 'newAuxChannelOk') {
        dialogBoxes.selectNewSend(e);
    }

    for (let i = 0; i < project.mixer.auxChannels.length; i++) {
        
        document.getElementById(`auxChannelItem.${i}`).addEventListener('click', function(e) {
            dialogBoxes.selectNewSend(e);
        });
    }
    
    document.getElementById('newSendCancel').addEventListener('click', function () {
        document.getElementById('dialogBoxContainer').innerHTML = '';
    });

    document.getElementById('newSendOk').addEventListener('click', function () {   

        let channelIndex;
        

        for (let i = 0; i < project.mixer.auxChannels.length; i++) {
            if (document.getElementById(`auxChannelItem.${i}`).className === 'auxChannelItemSelected') {
                channelIndex = i;
                
                break;
            }
            
        }

        document.getElementById('dialogBoxContainer').innerHTML = '';

        if (project.mode === 'pattern') {
            
            project.mixer.channels[project.activeInstrument].master.newAuxSend(project.mixer.auxChannels[channelIndex]);
            
            project.mixer.channels[project.activeInstrument].master.listAuxSends();
            
            mainInterface.statusRing('channelStripActive.knobAuxLightRing', 'Plus', project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue);
            mixer.setKnobs('channelStripActive', false, true);

        } else if (project.mode === 'mixer') {
            
            let buttonSplit = main.newSendTarget.split('.');
            let targetChannel;
            let targetSubChannel;

            if (buttonSplit[0] === 'channelStripAux') {
                
                targetChannel = parseInt(buttonSplit[3]) - project.mixer.channels.length;                
                //mixer.auxAuxSend(project.mixer.auxChannels[targetChannel], channelIndex)
                project.mixer.auxChannels[targetChannel].newAuxSend(project.mixer.auxChannels[channelIndex], true);
                project.mixer.auxChannels[targetChannel].listAuxSends(parseInt(buttonSplit[3]), 0, 'aux');

            } else if (buttonSplit[4] === '0') {

                targetChannel = parseInt(buttonSplit[3]);
                project.mixer.channels[targetChannel].master.newAuxSend(project.mixer.auxChannels[channelIndex]);
                project.mixer.channels[targetChannel].master.listAuxSends(targetChannel, 0);

            } else {
                targetChannel = parseInt(buttonSplit[3]);
                targetSubChannel = parseInt(buttonSplit[4] - 1);
                project.mixer.channels[targetChannel].channels[targetSubChannel].newAuxSend(project.mixer.auxChannels[channelIndex]);
                project.mixer.channels[targetChannel].channels[targetSubChannel].listAuxSends(targetChannel, buttonSplit[4]);
            }

        }

    });

    document.getElementById('newAuxChannel').addEventListener('click', function () {
        dialogBoxes.newAuxChannel(true);
    })

   
}

