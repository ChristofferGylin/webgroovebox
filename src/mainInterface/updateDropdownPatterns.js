import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';
import { mainInterface } from './mainInterface.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function updateDropdownPatterns() {

    let html = ``;

    for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns.length; i++) {

        let namesObject = this.setDropdownName(project.instrumentsArray[project.activeInstrument].patterns[i][0][2]);
        let patternNumberText;

        if (i < 9) {

            patternNumberText = `0${i + 1}`;

        } else {

            patternNumberText = i + 1

        }
        let title = ` title="${namesObject.title}"`;
        let id = `dropdownPattern.${i}`;
        html += `<div class="dropdownListItem" id="${id}"><div class="dropdownListText" id="patternsDropdownText.${i}"${title}>${patternNumberText}. ${namesObject.name}</div><div class="dropdownListEdit"><div class="dropdownEditIcon" id="patternsDropdownEdit.${i}" title="Edit Pattern Name"></div><div class="dropdownDeleteIcon" id="patternsDropdownDelete.${i}" title="Delete Pattern"></div></div></div>`;

    }

    let patternNumberText;
    let namesObject;

    for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns.length; i++) {

        if (i === parseInt(project.instrumentsArray[project.activeInstrument].activePattern)) {

            if (i < 9) {

                patternNumberText = `0${i + 1}`;

            } else {

                patternNumberText = i + 1

            }

            namesObject = this.setDropdownName(project.instrumentsArray[project.activeInstrument].patterns[i][0][2]);
            break;

        }
    }

    document.getElementById('patternsDropdownList').innerHTML = html;
    document.getElementById('patternsDropdownCurrentText').innerHTML = `${patternNumberText}. ${namesObject.name}`;
    document.getElementById('patternsDropdownCurrentText').title = namesObject.title;

    for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patterns.length; i++) {

        document.getElementById(`patternsDropdownText.${i}`).addEventListener('click', function (e) {

            let idSplit = e.target.id.split('.');
            let patternNumber = parseInt(idSplit[1]);

            if (project.instrumentsArray[project.activeInstrument].activePattern !== patternNumber) {

                project.instrumentsArray[project.activeInstrument].activePattern = patternNumber;
                project.activePatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern]);
                project.activeAutomationPatternsMaster.splice(project.activeInstrument, 1, project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern]);
                mainInterface.updateDropdownPatterns();

                sequencer.drawSequencer();


            }


        });

        document.getElementById(`patternsDropdownEdit.${i}`).addEventListener('click', function (e) {

            dialogBoxes.editPatternName(e);

        });

        document.getElementById(`patternsDropdownDelete.${i}`).addEventListener('click', function (e) {

            dialogBoxes.deletePattern(e);

        });
    }
}