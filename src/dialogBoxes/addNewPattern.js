import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function addNewPattern() {

    main.textInput = true;

    let name = `Pattern ${project.instrumentsArray[project.activeInstrument].patterns.length + 1}`;

    let auxChannelHtml =
        `<div class="newAuxChannelDialogBox" id="editInstrumentName">
            <div class="dialogTitle">ADD NEW PATTERN</div>
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




        project.instrumentsArray[project.activeInstrument].newPattern(document.getElementById('newAuxChannelDialogTextInput').value);
        project.activePatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern]);
        project.activeAutomationPatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern]);
        document.getElementById('dialogBoxContainer').innerHTML = '';
        main.textInput = false;
        mainInterface.updateDropdownPatterns();
        sequencer.drawSequencer();

    });
}

