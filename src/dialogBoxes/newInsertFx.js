import { dialogBoxes } from './dialogBoxes.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { main } from '../mainParameters/main.js'
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';
import { fx } from '../fx/fx.js';

export function newInsertFx(e) {

    main.newSendTarget = e.target.id

    let newInsertFxHtml = `<div class="dialogBox" id="newInsert">
    <div class="dialogTitle">ADD NEW INSERT FX</div>
    <div class="newSendInnerContainer">
        <div class="auxChannelList" id="insertFxList"></div>
        <div class="newSendButtons" id="newSendButtons">
            <button class="dialogButton" id="newInsertCancel">Cancel</button>
            <button class="dialogButton" id="newInsertOk">Ok</button>
        </div>
        
    </div>
    </div>`;

    document.getElementById('dialogBoxContainer').innerHTML = newInsertFxHtml;

    for (let i = 0; i < fx.fxList.length; i++) {
        
        document.getElementById('insertFxList').innerHTML += `<div class="insertFxItem" id="newInsertFxItem.${i}">${fx.fxList[i].name}</div>`;

    }

    for (let i = 0; i < fx.fxList.length; i++) {

        document.getElementById(`newInsertFxItem.${i}`).addEventListener('click', function (e) {

            for (let j = 0; j < fx.fxList.length; j++) {
                document.getElementById(`newInsertFxItem.${j}`).className = 'auxChannelItem'
            }

            e.target.className = 'insertFxItemSelected';
            let targetIdSplit = e.target.id.split('.');
            main.tempSelected = parseInt(targetIdSplit[1]);

        });

        document.getElementById(`newInsertFxItem.${i}`).addEventListener('dblclick', function (e) {

            let targetIdSplit = e.target.id.split('.');
            main.tempSelected = parseInt(targetIdSplit[1]);
            document.getElementById('dialogBoxContainer').innerHTML = '';
            createInsert();
            e.preventDefault();

        });

    }



    document.getElementById('newInsertCancel').addEventListener('click', function () {
        document.getElementById('dialogBoxContainer').innerHTML = '';
    });

    document.getElementById('newInsertOk').addEventListener('click', function () {


        document.getElementById('dialogBoxContainer').innerHTML = '';
        createInsert();

    });


    function createInsert() {

        let buttonSplit = main.newSendTarget.split('.');
        let channelType;
        let insertNumber;
        let fxItemPrefix;

        if (project.mode === 'pattern') {

            if (buttonSplit[0] === 'channelStripMaster') {

                insertNumber = project.mixer.master.insertFx.length;
                fxItemPrefix = 'channelStripMaster';
                channelType = 'channelStripMaster';
                let newFx = new fx.fxList[main.tempSelected](insertNumber, channelType);
                project.mixer.master.disconnectFx();
                project.mixer.master.insertFx.push(newFx);
                project.mixer.master.listInsertFx(0, 0, channelType);
                project.mixer.master.connectFx();
                project.mixer.master.insertFx[project.mixer.master.insertFx.length - 1].drawFx(insertNumber, channelType);

            } else {

                insertNumber = project.mixer.channels[project.activeInstrument].master.insertFx.length;
                fxItemPrefix = 'channelStripActive';
                channelType = 'channelStripActive';
                let newFx = new fx.fxList[main.tempSelected](insertNumber, channelType, project.activeInstrument);              
                project.mixer.channels[project.activeInstrument].master.disconnectFx();
                project.mixer.channels[project.activeInstrument].master.insertFx.push(newFx);
                project.mixer.channels[project.activeInstrument].master.listInsertFx();
                project.mixer.channels[project.activeInstrument].master.connectFx();
                project.mixer.channels[project.activeInstrument].master.insertFx[project.mixer.channels[project.activeInstrument].master.insertFx.length - 1].drawFx(insertNumber, channelType);
                

            }



        } else if (project.mode === 'mixer') {

            let targetChannel;
            let targetSubChannel = 0;
            let channelType;

            if (buttonSplit[0] === 'channelStripAux') {
                


                targetChannel = parseInt(buttonSplit[3]) - project.mixer.channels.length;
                insertNumber = project.mixer.auxChannels[targetChannel].insertFx.length;
                fxItemPrefix = `channelStripAux.${buttonSplit[3]}.${buttonSplit[4]}`;
                channelType = 'channelStripAux';
                project.mixer.auxChannels[targetChannel].disconnectFx();
                let newFx = new fx.fxList[main.tempSelected](insertNumber, channelType, targetChannel);
                project.mixer.auxChannels[targetChannel].insertFx.push(newFx);
                project.mixer.auxChannels[targetChannel].listInsertFx(parseInt(buttonSplit[3]), 0, 'channelStripAux');
                project.mixer.auxChannels[targetChannel].connectFx();
                project.mixer.auxChannels[targetChannel].insertFx[project.mixer.auxChannels[targetChannel].insertFx.length - 1].drawFx(insertNumber, channelType, targetChannel)

            } else if (buttonSplit[4] === '0') {
                
                targetChannel = parseInt(buttonSplit[3]);
                insertNumber = project.mixer.channels[targetChannel].master.insertFx.length;
                fxItemPrefix = `channelStripMixer.${buttonSplit[3]}.${buttonSplit[4]}`;
                channelType = 'channelStripMixer';                
                project.mixer.channels[targetChannel].master.disconnectFx();
                let newFx = new fx.fxList[main.tempSelected](insertNumber, channelType, targetChannel, 0);
                project.mixer.channels[targetChannel].master.insertFx.push(newFx);
                project.mixer.channels[targetChannel].master.listInsertFx(targetChannel, 0);
                project.mixer.channels[targetChannel].master.connectFx();
                project.mixer.channels[targetChannel].master.insertFx[project.mixer.channels[targetChannel].master.insertFx.length - 1].drawFx(insertNumber, channelType, targetChannel, targetSubChannel)

            } else {

                

                targetChannel = parseInt(buttonSplit[3]);
                targetSubChannel = parseInt(buttonSplit[4]) - 1;
                insertNumber = project.mixer.channels[targetChannel].channels[targetSubChannel].insertFx.length;
                fxItemPrefix = `channelStripMixer.${buttonSplit[3]}.${buttonSplit[4]}`;
                channelType = 'channelStripMixerSubChannel';
                project.mixer.channels[targetChannel].channels[targetSubChannel].disconnectFx();
                let newFx = new fx.fxList[main.tempSelected]();
                project.mixer.channels[targetChannel].channels[targetSubChannel].insertFx.push(newFx);
                project.mixer.channels[targetChannel].channels[targetSubChannel].listInsertFx(targetChannel, parseInt(buttonSplit[4]));
                project.mixer.channels[targetChannel].channels[targetSubChannel].connectFx();
                project.mixer.channels[targetChannel].channels[targetSubChannel].insertFx[project.mixer.channels[targetChannel].channels[targetSubChannel].insertFx.length - 1].drawFx(insertNumber, channelType, targetChannel, parseInt(buttonSplit[4]));
            }

        }
        
        document.getElementById(`${fxItemPrefix}.insertFxItem.${insertNumber}.container`).className = 'insertFxItemSelected';

    }
}

