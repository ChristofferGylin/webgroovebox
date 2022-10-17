import { main } from '../mainParameters/main.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { project } from '../index.js';
import { channelStripSvg } from './channelStrip/channelStripSvg.js';
import { mixer } from './mixer.js';
import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';

export function drawChannelStripActiveInstrument() {

  let target = document.getElementById('mainInnerContainerLeft');;
  let svgHtml = channelStripSvg.replace(/.ReplaceNumber/g, '');

  target.innerHTML = svgHtml;

  mainInterface.makeTurnable(document.getElementById('channelStripActive'));
  if (project.numberOfInstruments > 0) {
    mainInterface.statusRing('channelStripActive.knobPanLightRing', 'PlusMinus', project.mixer.channels[project.activeInstrument].master.pan.pan.value);
    mainInterface.statusRing('channelStripActive.knobAuxLightRing', 'Plus', project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue);
  } else {
    mainInterface.statusRing('channelStripActive.knobPanLightRing', 'PlusMinus', 0);
    mainInterface.statusRing('channelStripActive.knobAuxLightRing', 'Plus', 0);
  }

  if (main.hasInstruments) {

    project.mixer.channels[project.activeInstrument].master.listAuxSends();
    mixer.refreshSvgSlider('channelStripActive', 'channelStripActive.sliderThumb', project.mixer.channels[project.activeInstrument].master.sliderPosition, -91, 'channelStripActive.sliderValueBox', 'channelStripActive.InstrumentIdDiv'); 
    project.mixer.channels[project.activeInstrument].master.listInsertFx(0, 0, 'channelStripActive');
    
  }

  this.setKnobs('channelStripActive', true, true);

  


  this.makeDraggable(null, -91, document.getElementById('channelStripActive'));
  document.getElementById('channelStripActive.soloButton').addEventListener('mousedown', function (e) {
    mixer.soloChannel(e);
  });
  document.getElementById('channelStripActive.soloText').addEventListener('mousedown', function (e) {
    mixer.soloChannel(e);
  });

  document.getElementById('channelStripActive.muteButton').addEventListener('mousedown', function (e) {
    mixer.muteChannel(e);
  });
  document.getElementById('channelStripActive.muteText').addEventListener('mousedown', function (e) {
    mixer.muteChannel(e);
  });
  document.getElementById('channelStripActive.AddNewSend.Button').addEventListener('mousedown', function (e) {
    dialogBoxes.newSend(e);
  });
  document.getElementById('channelStripActive.AddNewSend.Text').addEventListener('mousedown', function (e) {
    dialogBoxes.newSend(e);
  });
  document.getElementById('channelStripActive.AddNewInsert.Button').addEventListener('mousedown', function (e) {
    dialogBoxes.newInsertFx(e);
  });
  document.getElementById('channelStripActive.AddNewInsert.Text').addEventListener('mousedown', function (e) {
    dialogBoxes.newInsertFx(e);
  });


}
