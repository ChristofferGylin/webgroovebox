import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function deletePattern(e) {

    let targetId = e.target.id;
    let targetIdSplit = targetId.split('.');
    let patternNumber = parseInt(targetIdSplit[1]);

    let auxChannelHtml =
        `<div class="newAuxChannelDialogBox" id="editInstrumentName">
            <div class="dialogTitle">DELETE PATTERN</div>
            <div class="newAuxChannelInnerContainer">
                <div class="dialogBoxTextInput" id="newAuxChannelDialogTextInputDiv">Are you sure you want to delete the selected pattern?</div>
                <div class="newAuxChannelButtons" id="newAuxChannelButtons">
                    <button class="dialogButton" id="newAuxChannelCancel">Cancel</button>
                    <button class="dialogButton" id="newAuxChannelOk">Ok</button>
                </div>

            </div>
        </div>`;

    document.getElementById('dialogBoxContainer').innerHTML = auxChannelHtml;


    document.getElementById('newAuxChannelCancel').addEventListener('click', function () {
        document.getElementById('dialogBoxContainer').innerHTML = '';
    });

    document.getElementById('newAuxChannelOk').addEventListener('click', function (e) {


        if (project.instrumentsArray[project.activeInstrument].patterns.length > 1) {

            project.instrumentsArray[project.activeInstrument].patterns.splice(patternNumber, 1);

            if (project.instrumentsArray[project.activeInstrument].activePattern > project.instrumentsArray[project.activeInstrument].patterns.length - 1) {

                project.instrumentsArray[project.activeInstrument].activePattern--;

            }
        } else {

            project.instrumentsArray[project.activeInstrument].newPattern(document.getElementById('newAuxChannelDialogTextInput').value);
            project.activePatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern]);
            project.activeAutomationPatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern]);
            project.instrumentsArray[project.activeInstrument].patterns.splice(patternNumber, 1);

        }

        project.activePatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern]);
        project.activeAutomationPatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern]);
        sequencer.drawSequencer();
        document.getElementById('dialogBoxContainer').innerHTML = '';
        mainInterface.updateDropdownPatterns();


    });
}

