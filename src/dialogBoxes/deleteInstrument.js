import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function deleteInstrument(e) {

    let targetId = e.target.id;
    let targetIdSplit = targetId.split('.');
    let instrumentNumber = parseInt(targetIdSplit[1]);

    let auxChannelHtml =
        `<div class="newAuxChannelDialogBox" id="editInstrumentName">
            <div class="dialogTitle">DELETE TRACK</div>
            <div class="newAuxChannelInnerContainer">
                <div class="dialogBoxTextInput" id="newAuxChannelDialogTextInputDiv">Are you sure you want to delete the instrument track and all it´s patterns?</div>
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

        project.instrumentsArray.splice(instrumentNumber, 1);
        project.mixer.channels.splice(instrumentNumber, 1);
        project.activePatternsMaster.splice(instrumentNumber, 1);
        project.activeAutomationPatternsMaster.splice(instrumentNumber, 1);
        project.numberOfInstruments--;

        for (let i = instrumentNumber; i < project.instrumentsArray.length; i++) {

            project.instrumentsArray[i].instrumentNumber = i;

            for (let j = 0; j < project.instrumentsArray[i].patterns.length; j++) {

                for (let k = 1; k < project.instrumentsArray[i].patterns[j].length; k++) {

                    for (let l = 0; l < project.instrumentsArray[i].patterns[j][k][0].length; l++) {

                        let oldId = project.instrumentsArray[i].patterns[j][k][0][l];
                        let idSplit = oldId.split('.');
                        let newId = `${idSplit[0]}.${idSplit[1]}.${idSplit[2]}.${idSplit[3]}.${parseInt(idSplit[4]) - 1}`;
                        project.instrumentsArray[i].patterns[j][k][0][l] = newId;

                    }

                    for (let l = 0; l < project.instrumentsArray[i].patterns[j][k][1].length; l++) {

                        let oldId = project.instrumentsArray[i].patterns[j][k][1][l];
                        let idSplit = oldId.split('.');
                        let newId = `${idSplit[0]}.${idSplit[1]}.${idSplit[2]}.${idSplit[3]}.${parseInt(idSplit[4]) - 1}`;
                        project.instrumentsArray[i].patterns[j][k][1][l] = newId;

                    }

                    for (let l = 0; l < project.instrumentsArray[i].patterns[j][k][2].length; l++) {

                        project.instrumentsArray[i].patterns[j][k][2][l].instrument--;

                    }
                }
            }
        }

        if (project.instrumentsArray.length > 0) {

            if (instrumentNumber <= project.activeInstrument) {

                project.activeInstrument--;

            }

            if (project.mode === 'mixer') {

                mixer.drawMixer();

            } else {

                if (instrumentNumber <= project.activeInstrument + 1) {

                    sequencer.drawSeqResetScroll();
                    project.instrumentsArray[project.activeInstrument].drawInstrument();

                }

            }

            mainInterface.updateDropdownInstruments();


        } else {

            main.hasInstruments = false;
            document.getElementById('newInstrumentDialog').style.display = 'block';

        }


        document.getElementById('dialogBoxContainer').innerHTML = '';


    });
}

