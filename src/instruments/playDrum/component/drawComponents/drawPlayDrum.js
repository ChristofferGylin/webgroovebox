import { mixer } from '../../../../mixer/mixer.js';
import { playDrumSvg } from './playDrumSvg.js';


export function drawPlayDrum() {

  let html = `<div class="playDrumContainer">
      <div class="instrumentHeader"><div class="instrumentHeaderControls"><div class="previousPatchGreyed" id="previousPatch"></div><div class="currentPatchDisplay" id="currentPatchDisplay"></div><div class="nextPatchGreyed" id="nextPatch"></div></div></div>
      <div class="playDrumInnerContainer">
        ${playDrumSvg}
      </div></div>`;

  let drawHere = document.getElementById('instrument');
  drawHere.innerHTML = html;
  mixer.makeDraggable(null, -142, document.getElementById(`playDrum.Svg`));
  this.makeTurnable(document.getElementById(`playDrum.Svg`));

  for (let i = 0; i < 12; i++) {

    mixer.setSvgSliderPosition(`playDrum.Svg`, `playDrum.Thumb.${i}`, this.mixer[i][0].gain.value, -142);
    document.getElementById(`playDrum.SliderNeon.${i}`).setAttribute("opacity", this.mixer[i][0].gain.value);
    document.getElementById(`playDrum.displayDiv.${i}`).innerHTML = this.mixer[i][1];
  }

  document.getElementById('currentPatchDisplay').innerHTML = this.kits[this.activeKit].name;
  this.eventListeners();

  if (this.initialized) {
    this.setKnobs();
  }

}