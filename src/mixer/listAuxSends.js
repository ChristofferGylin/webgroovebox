import { mainInterface } from '../mainInterface/mainInterface.js';
import { mixer } from './mixer.js';
import { project } from '../index.js';

export function listAuxSends(i, j, aux) {

  let className;
  let targetId;
  let auxKnobValue;
  let lightRingTarget;



  if (project.mode === 'pattern') {

    targetId = 'channelStripActive';
    lightRingTarget = 'channelStripActive.knobAuxLightRing';
    auxKnobValue = project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue;

  } else if (project.mode === 'mixer') {

    if (aux) {

      targetId = `channelStripAux.${i}.${j}`;
      lightRingTarget = `channelStripAux.knobAuxLightRing.${i}.${j}`;

      if (project.mixer.auxChannels[i - project.mixer.channels.length].auxSends.length > 0) {

        let targetChannel = i - project.mixer.channels.length
        auxKnobValue = project.mixer.auxChannels[targetChannel].auxSends[project.mixer.auxChannels[targetChannel].selectedAux].knobValue;

      } else {

        auxKnobValue = 0;

      }


    } else {
      
      targetId = `channelStripMixer.${i}.${j}`;
      lightRingTarget = `channelStripMixer.knobAuxLightRing.${i}.${j}`;
      if (j === 0) {
        auxKnobValue = project.mixer.channels[i].master.auxSends[project.mixer.channels[i].master.selectedAux].knobValue;

      } else {
        auxKnobValue = project.mixer.channels[i].channels[j - 1].auxSends[project.mixer.channels[i].channels[j - 1].selectedAux].knobValue;
      }

    }

  }

  let targetIdSplit = targetId.split('.');

  mainInterface.statusRing(lightRingTarget, 'Plus', auxKnobValue);

  mixer.setKnobs(targetId, false, true);

  document.getElementById(`${targetId}.AuxDiv`).innerHTML = '';

  for (let k = 0; k < this.auxSends.length; k++) {


    if (k === this.selectedAux) {
      className = 'auxChannelItemSelected';
    } else {
      className = 'auxChannelItem';
    }
    let auxName = this.auxSends[k].name;

    if (project.mode === 'pattern') {
      document.getElementById(`${targetId}.AuxDiv`).innerHTML += `<div class="${className}" id="auxChannelItem.${k}">${auxName}</div>`;
    } else if (project.mode === 'mixer') {
      
      if (targetIdSplit[0] === 'channelStripAux') {
        document.getElementById(`${targetId}.AuxDiv`).innerHTML += `<div class="${className}" id="channelStripAux.auxChannelItem.${i}.${j}.${k}">${auxName}</div>`;
      } else {

        document.getElementById(`${targetId}.AuxDiv`).innerHTML += `<div class="${className}" id="auxChannelItem.${i}.${j}.${k}">${auxName}</div>`;

      }
    }
  }

  for (let k = 0; k < this.auxSends.length; k++) {
    let itemId;

    if (project.mode === 'pattern') {

      itemId = `auxChannelItem.${k}`;

    } else if (project.mode === 'mixer') {


      if (targetIdSplit[0] === 'channelStripAux') {

        itemId = `channelStripAux.auxChannelItem.${i}.${j}.${k}`;

      } else {

        itemId = `auxChannelItem.${i}.${j}.${k}`;

      }
    }

    document.getElementById(itemId).addEventListener('click', function (e) {

      let idSplit = e.target.id.split('.');

      if (project.mode === 'pattern') {


        project.mixer.channels[project.activeInstrument].master.selectedAux = parseInt(idSplit[1]);
        project.mixer.channels[project.activeInstrument].master.listAuxSends();


      } else if (project.mode === 'mixer') {

        if (idSplit[0] === 'channelStripAux') {


          project.mixer.auxChannels[parseInt(idSplit[2]) - project.mixer.channels.length].selectedAux = parseInt(idSplit[4]);
          project.mixer.auxChannels[parseInt(idSplit[2]) - project.mixer.channels.length].listAuxSends(parseInt(idSplit[2]), parseInt(idSplit[3]), 'aux');

        } else {

          if (idSplit[2] === '0') {

            project.mixer.channels[parseInt(idSplit[1])].master.selectedAux = parseInt(idSplit[3]);
            project.mixer.channels[parseInt(idSplit[1])].master.listAuxSends(parseInt(idSplit[1]), parseInt(idSplit[2]));

          } else {

            project.mixer.channels[parseInt(idSplit[1])].channels[parseInt(idSplit[2]) - 1].selectedAux = parseInt(idSplit[3]);
            project.mixer.channels[parseInt(idSplit[1])].channels[parseInt(idSplit[2]) - 1].listAuxSends(parseInt(idSplit[1]), parseInt(idSplit[2]));

          }

        }

      }
    })
  }
}