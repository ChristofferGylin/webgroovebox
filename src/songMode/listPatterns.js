import { songMode } from './songMode.js';
import { project } from "../index.js";

export function listPatterns() {

    let html = ``;

    for (let i = 0; i < project.instrumentsArray[project.activeInstrumentSongMode].patterns.length; i++) {

        let svg = this.drawPatternSelection(project.instrumentsArray[project.activeInstrumentSongMode].patterns[i])
        html += `<div class="songModePatternItemContainer" id="songModePatternItemContainer.${i}"><div class="songModePatternItem" id="songModePatternItem.${i}">${svg}</div></div>`;

    }

    document.getElementById('songModeContainerPatterns').innerHTML = html;

    for (let i = 0; i < project.instrumentsArray[project.activeInstrumentSongMode].patterns.length; i++) {

        document.getElementById(`songModePatternItemContainer.${i}`).addEventListener('mousedown', function (e) {

            songMode.pickPattern(e);
            window.addEventListener('mouseup', mouseUpFunction);
            
        });

    }

    function mouseUpFunction(evt) {

        let mousePosition = {

            x: evt.clientX,
            y: evt.clientY

        }

        songMode.dropPattern(mousePosition);
        window.removeEventListener('mouseup', mouseUpFunction);

    }

}