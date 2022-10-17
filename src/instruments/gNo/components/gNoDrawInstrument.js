import { mixer } from '../../../mixer/mixer.js'
import { project } from '../../../index.js';
import { gNoSvg } from './gNoSvg.js';
export function drawInstrument() {

    let lineColorLeft;
    let lineColorMiddle;
    let lineColorRight;
    let buttonColor;

    if (project.konami) {

        lineColorLeft = `#DCDBDB`;
        lineColorMiddle = `#D22027`;
        lineColorRight = `#4456A6`;
        buttonColor = `#FFCE0C`;

    } else {

        lineColorLeft = `#8D51A0`;
        lineColorMiddle = `#8D51A0`;
        lineColorRight = `#8D51A0`;
        buttonColor = `#FC0067`;

    }


    let svg = gNoSvg.replace(`replaceWithButtonColor`, buttonColor);
    svg = svg.replace(`replaceWithLineColorLeft`, lineColorLeft);
    svg = svg.replace(`replaceWithLineColorMiddle`, lineColorMiddle);
    svg = svg.replace(`replaceWithLineColorRight`, lineColorRight);

    let html = `<div class="gNoContainer"> <div class="instrumentHeader"><div class="instrumentHeaderControls"><div class="previousPatchGreyed" id="previousPatch"></div><div class="currentPatchDisplay" id="currentPatchDisplay"></div><div class="nextPatchGreyed" id="nextPatch"></div></div></div>
    <div class="gNoMainContainer">${svg}</div>`;

    let drawHere = document.getElementById('instrument');

    drawHere.innerHTML = html;

    this.eventListeners();

    // Make the sliders draggable

    mixer.makeDraggable(null, -159, document.getElementById(`gNo.Svg`));

    if (this.patchLoaded) {

        this.setSlidersAndButtons();
    } else {

        this.loadPatch();
    }

    document.getElementById('currentPatchDisplay').innerHTML = this.currentPatch.name;

}