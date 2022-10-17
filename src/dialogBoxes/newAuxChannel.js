import { dialogBoxes } from './dialogBoxes.js';
import { main } from '../mainParameters/main.js';
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';

export function newAuxChannel(openNewSend) {

    main.textInput = true;

    let name = `Aux ${project.mixer.auxChannels.length + 1}`;

    let auxChannelHtml =
        `<div class="newAuxChannelDialogBox" id="newAux">
            <div class="dialogTitle">ADD NEW AUX CHANNEL</div>
            <div class="newAuxChannelInnerContainer">
                <div class="dialogBoxTextInput" id="newAuxChannelDialogTextInputDiv"><input id="newAuxChannelDialogTextInput" type="text" size="18" value="${name}"></div>
                <div class="newAuxChannelButtons" id="newAuxChannelButtons">
                    <button class="dialogButton" id="newAuxChannelCancel">Cancel</button>
                    <button class="dialogButton" id="newAuxChannelOk">Ok</button>
                </div>

            </div>
        </div>`;

    document.getElementById('dialogBoxContainer').innerHTML = auxChannelHtml;

    if (openNewSend) {
        document.getElementById('newAuxChannelCancel').addEventListener('click', function (e) {
            dialogBoxes.newSend(e);
            main.textInput = false;
        });
    } else {
        document.getElementById('newAuxChannelCancel').addEventListener('click', function () {
            document.getElementById('dialogBoxContainer').innerHTML = '';
            main.textInput = false;
        });
    }
    document.getElementById('newAuxChannelOk').addEventListener('click', function (e) {
        createAuxChannel(document.getElementById('newAuxChannelDialogTextInput').value);

        if (project.mode === 'mixer') {
            mixer.drawMixer();
        }

        if (openNewSend) {

            dialogBoxes.newSend(e);

        } else {
            document.getElementById('dialogBoxContainer').innerHTML = '';
        }

        main.textInput = false;

    });



}

export function createAuxChannel(name) {

    let channelObj = new mixer.ChannelStrip(name);
    //channelObj.newAuxSend(project.mixer.auxChannels[0]);
    channelObj.output.connect(project.mixer.master.input);
    project.mixer.auxChannels.push(channelObj);
    //project.mixer.auxChannels[project.mixer.auxChannels.length -1].newAuxSend(project.mixer.auxChannels[0], project.mixer.auxChannels.length -1);

}
