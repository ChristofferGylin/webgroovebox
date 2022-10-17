import { dialogBoxes } from './dialogBoxes.js';
import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';

export function editInstrumentName(e) {

    let targetId = e.target.id;
    let targetIdSplit = targetId.split('.');
    let instrumentNumber = parseInt(targetIdSplit[1]);
    main.textInput = true;

    let name = project.instrumentsArray[instrumentNumber].name;

    let auxChannelHtml =
        `<div class="newAuxChannelDialogBox" id="editInstrumentName">
            <div class="dialogTitle">EDIT TRACK NAME</div>
            <div class="newAuxChannelInnerContainer">
                <div class="dialogBoxTextInput" id="newAuxChannelDialogTextInputDiv"><input id="newAuxChannelDialogTextInput" type="text" size="18" value="${name}"></div>
                <div class="newAuxChannelButtons" id="newAuxChannelButtons">
                    <button class="dialogButton" id="newAuxChannelCancel">Cancel</button>
                    <button class="dialogButton" id="newAuxChannelOk">Ok</button>
                </div>

            </div>
        </div>`;

    document.getElementById('dialogBoxContainer').innerHTML = auxChannelHtml;

     
        document.getElementById('newAuxChannelCancel').addEventListener('click', function () {
            document.getElementById('dialogBoxContainer').innerHTML = '';
            main.textInput = false;
        });
    
    document.getElementById('newAuxChannelOk').addEventListener('click', function (e) {
        project.instrumentsArray[instrumentNumber].name = document.getElementById('newAuxChannelDialogTextInput').value;

        if (project.mode === 'mixer') {
            mixer.drawMixer();
        }       
        document.getElementById('dialogBoxContainer').innerHTML = '';
        main.textInput = false;
        mainInterface.updateDropdownInstruments();

    });
}

