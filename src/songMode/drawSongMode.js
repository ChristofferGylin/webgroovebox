import { main } from '../mainParameters/main.js';
import { project } from '../index.js';
import { songMode } from './songMode.js';
import { closeIcon } from '../mainInterface/closeIcon.js';

export function drawSongMode() {

    let html = ``;
    let width = 16 * main.songModeNumberOfCells + 121; // svg width + controlsDiv width

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        let controls = `<div class="songModeInstrumentControls" id="songModeInstrumentControls.${i}"><div class="songModeTitle" id="songModeTitle.${i}">${project.instrumentsArray[i].name}</div></div>`;
        let grid = `<div class="songModeInstrumentGrid" id="songModeGridSvgContainer.${i}"></div>`;

        if (i === project.activeInstrumentSongMode) {

            html += `<div class="songModeInstrumentItemActive" id="songModeInstrumentItem.${i}" style="width: ${width}px;">${controls}${grid}</div>`;

        } else {

            html += `<div class="songModeInstrumentItem" id="songModeInstrumentItem.${i}" style="width: ${width}px;">${controls}${grid}</div>`;

        }

    }

    html += `<div class="songModeInstrumentItemFiller" id="songModeInstrumentItemFiller" style="width: ${width}px;"></div>`;

    document.getElementById('songModeContainer').innerHTML = html;

    for (let i = 0; i < project.instrumentsArray.length; i++) {

        document.getElementById(`songModeInstrumentItem.${i}`).addEventListener('click', function (e) {

            let itemIdSplit = e.currentTarget.id.split('.');
            songMode.itemClick(itemIdSplit[1]);

        })

        let grid = this.drawGrid(i);
        let activePatterns = this.drawPatternsGrid(project.instrumentsArray[i]);
        let svg = `<svg id="songModeGridSvg.${i}" width="${width - 121}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width - 121} 50"><rect x="0" y="0" width="${width - 121}" height="50" fill="#363636" />${grid}${activePatterns}</svg>`;
        document.getElementById(`songModeGridSvgContainer.${i}`).innerHTML = svg;
        

    }

    let closeIcons = document.getElementsByClassName('songModePatternCloseIcon');

    for (let i = 0; i < closeIcons.length; i++) {

        closeIcons[i].addEventListener('click', function (e) {

            songMode.deletePattern(e)

        });

    }

    let resizeEdge = document.getElementsByClassName('songModePatternResizeEdge');

    for (let i = 0; i < resizeEdge.length; i++) {

        resizeEdge[i].addEventListener('mousedown', function (e) {

            songMode.resizePattern(e)

        });

    }

    this.listPatterns();

}