import { channelStripSvg } from './channelStrip/channelStripSvg.js';
import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { mixer } from './mixer.js';
import { project } from '../index.js';

export function drawMixer() {

  let mixerHtml = `<div class="filler"></div><div class="mixerContainer">`;

  for (let i = 0; i < project.mixer.channels.length; i++) {

    let numberOfChannels = this.getNumberOfOutputs(i);

    for (let j = 0; j < numberOfChannels; j++) {


      let channelStrip = channelStripSvg.replace(/ReplaceNumber/g, `${i}.${j}`);
      channelStrip = channelStrip.replace(/channelStripActive/g, 'channelStripMixer');
      let channelTitle;
      let mixerChannelClass;

      if (j > 0) {
        channelTitle = project.instrumentsArray[i].drums[j - 1].name;
        mixerChannelClass = 'mixerChannelMulti'
      } else {
        channelTitle = project.instrumentsArray[i].name;
        mixerChannelClass = 'mixerChannelMaster';
      }

      mixerHtml += `<div class="${mixerChannelClass}"><div class="mixerChannelName">${channelTitle}</div>${channelStrip}</div>`;
    }
  }

  for (let i = 0; i < project.mixer.auxChannels.length; i++) { 

      let channelStrip = channelStripSvg.replace(/ReplaceNumber/g, `${i + project.mixer.channels.length}.${0}`);
      channelStrip = channelStrip.replace(/channelStripActive/g, 'channelStripAux');
      let channelTitle;
      let mixerChannelClass;

      
      channelTitle = project.mixer.auxChannels[i].name;
      mixerChannelClass = 'mixerChannelMaster';
      

      mixerHtml += `<div class="${mixerChannelClass}"><div class="mixerChannelName">${channelTitle}</div>${channelStrip}</div>`;

  }
  mixerHtml += `</div><div class="filler"></div>`;
  document.getElementById('mainInnerContainer').innerHTML = mixerHtml;



  for (let i = 0; i < project.mixer.channels.length; i++) {

    let numberOfChannels = this.getNumberOfOutputs(i);

    for (let j = 0; j < numberOfChannels; j++) {



      this.makeDraggable(null, -91, document.getElementById(`channelStripMixer.${i}.${j}`));
      mainInterface.makeTurnable(document.getElementById(`channelStripMixer.${i}.${j}`));


      if (project.numberOfInstruments > 0) {
        if (j === 0) {
          mainInterface.statusRing(`channelStripMixer.knobPanLightRing.${i}.${j}`, 'PlusMinus', project.mixer.channels[i].master.pan.pan.value);
          mainInterface.statusRing(`channelStripMixer.knobAuxLightRing.${i}.${j}`, 'Plus', project.mixer.channels[i].master.auxSends[project.mixer.channels[i].master.selectedAux].knobValue);
        } else {
          mainInterface.statusRing(`channelStripMixer.knobPanLightRing.${i}.${j}`, 'PlusMinus', project.mixer.channels[i].channels[j -1].pan.pan.value);
          mainInterface.statusRing(`channelStripMixer.knobAuxLightRing.${i}.${j}`, 'Plus', project.mixer.channels[i].channels[j - 1].auxSends[project.mixer.channels[i].channels[j - 1].selectedAux].knobValue);
        }
        
      } else {
        mainInterface.statusRing(`channelStripMixer.knobPanLightRing.${i}.${j}`, 'PlusMinus', 0);
      }

      this.setKnobs(`channelStripMixer.${i}.${j}`, true, true);
      

      if (j === 0) {
        
        this.refreshSvgSlider(`channelStripMixer.${i}.${j}`, `channelStripMixer.sliderThumb.${i}.${j}`, project.mixer.channels[i].master.sliderPosition, -91, `channelStripMixer.sliderValueBox.${i}.${j}`, `channelStripMixer.InstrumentIdDiv.${i}.${j}`, i, j);
        project.mixer.channels[i].master.listAuxSends(i, j);
        project.mixer.channels[i].master.listInsertFx(i, j);

      } else {

        this.refreshSvgSlider(`channelStripMixer.${i}.${j}`, `channelStripMixer.sliderThumb.${i}.${j}`, project.mixer.channels[i].channels[j - 1].sliderPosition, -91, `channelStripMixer.sliderValueBox.${i}.${j}`, `channelStripMixer.InstrumentIdDiv.${i}.${j}`, i, j);
        project.mixer.channels[i].channels[j - 1].listAuxSends(i, j);
        project.mixer.channels[i].channels[j - 1].listInsertFx(i, j);
      }

      document.getElementById(`channelStripMixer.soloButton.${i}.${j}`).addEventListener('mousedown', function (e) {
        mixer.soloChannel(e);
      });

      document.getElementById(`channelStripMixer.soloText.${i}.${j}`).addEventListener('mousedown', function (e) {
        mixer.soloChannel(e);
      });

      document.getElementById(`channelStripMixer.muteButton.${i}.${j}`).addEventListener('mousedown', function (e) {
        mixer.muteChannel(e);
      });

      document.getElementById(`channelStripMixer.muteText.${i}.${j}`).addEventListener('mousedown', function (e) {
        mixer.muteChannel(e);
      });

      document.getElementById(`channelStripMixer.AddNewSend.Button.${i}.${j}`).addEventListener('mousedown', function (e) {
        dialogBoxes.newSend(e);
        
      });
      document.getElementById(`channelStripMixer.AddNewSend.Text.${i}.${j}`).addEventListener('mousedown', function (e) {
        dialogBoxes.newSend(e);
        e.stopPropagation();
      });
      document.getElementById(`channelStripMixer.AddNewInsert.Button.${i}.${j}`).addEventListener('mousedown', function (e) {
        dialogBoxes.newInsertFx(e);
        
      });
      document.getElementById(`channelStripMixer.AddNewInsert.Text.${i}.${j}`).addEventListener('mousedown', function (e) {
        dialogBoxes.newInsertFx(e);
        e.stopPropagation();
      });
    }

  }

  for (let i = 0; i < project.mixer.auxChannels.length; i++) {

      let number = i + project.mixer.channels.length;

      this.makeDraggable(null, -91, document.getElementById(`channelStripAux.${number}.0`));
      mainInterface.makeTurnable(document.getElementById(`channelStripAux.${number}.0`)); 
      mainInterface.statusRing(`channelStripAux.knobPanLightRing.${number}.0`, 'PlusMinus', project.mixer.auxChannels[i].pan.pan.value);
      
      if (project.mixer.auxChannels[i].auxSends.length > 0) {
        mainInterface.statusRing(`channelStripAux.knobAuxLightRing.${number}.0`, 'Plus', project.mixer.auxChannels[i].auxSends[project.mixer.auxChannels[i].selectedAux].knobValue);
      } else {
        mainInterface.statusRing(`channelStripAux.knobAuxLightRing.${number}.0`, 'Plus', 0);
      }
      
      project.mixer.auxChannels[i].listAuxSends(number, 0, 'channelStripAux');
      project.mixer.auxChannels[i].listInsertFx(number, 0, 'channelStripAux');
      mixer.fxOnScreen();

      this.setKnobs(`channelStripAux.${number}.0`, true, true);
    
      this.refreshSvgSlider(`channelStripAux.${number}.0`, `channelStripAux.sliderThumb.${number}.0`, project.mixer.auxChannels[i].sliderPosition, -91, `channelStripAux.sliderValueBox.${number}.0`, `channelStripAux.InstrumentIdDiv.${number}.0`, i);

      document.getElementById(`channelStripAux.soloButton.${number}.0`).addEventListener('mousedown', function (e) {
        mixer.soloChannel(e);
      });

      document.getElementById(`channelStripAux.soloText.${number}.0`).addEventListener('mousedown', function (e) {
        mixer.soloChannel(e);
      });

      document.getElementById(`channelStripAux.muteButton.${number}.0`).addEventListener('mousedown', function (e) {
        mixer.muteChannel(e);
      });

      document.getElementById(`channelStripAux.muteText.${number}.0`).addEventListener('mousedown', function (e) {
        mixer.muteChannel(e);
      });

      document.getElementById(`channelStripAux.AddNewSend.Button.${number}.0`).addEventListener('mousedown', function (e) {
        dialogBoxes.newSend(e);
        
      });
      document.getElementById(`channelStripAux.AddNewSend.Text.${number}.0`).addEventListener('mousedown', function (e) {
        dialogBoxes.newSend(e);
        e.stopPropagation();
      });
      document.getElementById(`channelStripAux.AddNewInsert.Button.${number}.0`).addEventListener('mousedown', function (e) {
        dialogBoxes.newInsertFx(e);
        
      });
      document.getElementById(`channelStripAux.AddNewInsert.Text.${number}.0`).addEventListener('mousedown', function (e) {
        dialogBoxes.newInsertFx(e);
        e.stopPropagation();
      });


    

  }

}




