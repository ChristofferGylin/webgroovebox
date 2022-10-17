import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';
import { instruments } from '../instruments/instruments.js';
import { project } from '../index.js';

export function updateDropdownInstruments() {

    let html = ``;

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        let namesObject = this.setDropdownName(project.instrumentsArray[i].name);
        let instrumentNumberText;

        if (project.instrumentsArray[i].instrumentNumber < 9) {

            instrumentNumberText = `0${i + 1}`;

        } else {

            instrumentNumberText = i + 1

        }
        let title = ` title="${namesObject.title}"`;
        let id = `dropdownInstrument.${project.instrumentsArray[i].instrumentNumber}`;
        html += `<div class="dropdownListItem" id="${id}"><div class="dropdownListText" id="instrumentsDropdownText.${i}"${title}>${instrumentNumberText}. ${namesObject.name}</div><div class="dropdownListEdit"><div class="dropdownEditIcon" id="instrumentsDropdownEdit.${i}" title="Edit Track Name"></div><div class="dropdownDeleteIcon" id="instrumentsDropdownDelete.${i}" title="Delete Track"></div></div></div>`;

    }

    let instrumentNumberText;
    let namesObject;

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        if (i === parseInt(project.activeInstrument)) {

            if (i < 9) {

                instrumentNumberText = `0${i + 1}`;

            } else {

                instrumentNumberText = i + 1

            }

            namesObject = this.setDropdownName(project.instrumentsArray[i].name);
            break;

        }    
    }
    
    document.getElementById('instrumentsDropdownList').innerHTML = html;
    document.getElementById('instrumentsDropdownCurrentText').innerHTML = `${instrumentNumberText}. ${namesObject.name}`;
    document.getElementById('instrumentsDropdownCurrentText').title = namesObject.title;

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        document.getElementById(`instrumentsDropdownText.${i}`).addEventListener('click', function (e) {

            instruments.instrumentClick(e.target);

        });
    }

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        document.getElementById(`instrumentsDropdownEdit.${i}`).addEventListener('click', function (e) {

            dialogBoxes.editInstrumentName(e);

        });
    }

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        document.getElementById(`instrumentsDropdownDelete.${i}`).addEventListener('click', function (e) {

            dialogBoxes.deleteInstrument(e);

        });
    }
}