import { mainInterface } from '../mainInterface/mainInterface.js';
import { fx } from '../fx/fx.js';
import { project } from '../index.js';
import { mixer } from './mixer.js';

export function listInsertFx(i, j, channelType) {

  let closeIcon;
  let upArrowIcon;
  let downArrowIcon;
  let targetId;

  if (project.mode === 'pattern') {

    if (channelType === 'channelStripMaster') {

      targetId = 'channelStripMaster';

    } else {

      targetId = 'channelStripActive';

    }



  } else if (project.mode === 'mixer') {

    if (channelType === 'channelStripAux') {

      targetId = `channelStripAux.${i}.${j}`;

    } else {

      targetId = `channelStripMixer.${i}.${j}`;

    }

  }

  let targetIdSplit = targetId.split('.');

  document.getElementById(`${targetId}.InsertsDiv`).innerHTML = '';

  for (let k = 0; k < this.insertFx.length; k++) {

    let className = 'insertFxItem';

    if (project.mode === 'pattern' && this.insertFx[k].onScreenPattern) {

      className = 'insertFxItemSelected'

    } else if (project.mode === 'mixer' && this.insertFx[k].onScreenMixer) {


      className = 'insertFxItemSelected'

    }

    let insertFxName = this.insertFx[k].name;

    upArrowIcon = mainInterface.upArrow.replace(/ReplaceName/g, `${targetId}.insertFxItem.${k}`);
    downArrowIcon = mainInterface.downArrow.replace(/ReplaceName/g, `${targetId}.insertFxItem.${k}`)
    closeIcon = mainInterface.closeIconSmall.replace(/ReplaceName/g, `${targetId}.insertFxItem.${k}`);
    document.getElementById(`${targetId}.InsertsDiv`).innerHTML += `<div class="${className}" id="${targetId}.insertFxItem.${k}.container"><div id="${targetId}.insertFxItem.${k}">${insertFxName}</div><div width="7px">${upArrowIcon}</div><div width="7px">${downArrowIcon}</div><div width="7px">${closeIcon}</div></div>`;


  }

  for (let k = 0; k < this.insertFx.length; k++) {
    let itemId = `${targetId}.insertFxItem.${k}`;

    document.getElementById(itemId).addEventListener('mouseenter', function (e) {

      let targetId = e.target.id + '.container';
      let target = document.getElementById(targetId);

      if (target.className === 'insertFxItem') {


        target.style.backgroundColor = 'rgb(172, 172, 207)';

      }

    });

    document.getElementById(itemId).addEventListener('mouseleave', function (e) {

      let targetId = e.target.id + '.container';
      let target = document.getElementById(targetId);

      if (target.className === 'insertFxItem') {


        target.style.backgroundColor = 'transparent';

      }

    });

    document.getElementById(itemId).addEventListener('click', function (e) {

      let idSplit = e.target.id.split('.');
      let insertNumber = idSplit[idSplit.length - 1];
      let targetId = e.target.id + '.container';

      fx.resetOnScreenFx();

      if (project.mode === 'pattern') {

        if (idSplit[0] === 'channelStripActive') {

          project.mixer.channels[project.activeInstrument].master.insertFx[insertNumber].drawFx(insertNumber, 'channelStripActive');
          project.mixer.channels[project.activeInstrument].master.listInsertFx(0, 0, 'channelStripActive');

        } else {

          project.mixer.master.insertFx[insertNumber].drawFx(insertNumber, 'channelStripMaster');
          project.mixer.master.listInsertFx(0, 0, 'channelStripMaster');

        }

      } else if (project.mode === 'mixer') {

        let channelNumber;
        let subChannelNumber;
        let subChannel;

        if (idSplit[0] === 'channelStripAux') {

          channelNumber = parseInt(idSplit[1]) - project.mixer.channels.length;
          project.mixer.auxChannels[channelNumber].insertFx[insertNumber].drawFx(insertNumber, 'channelStripAux', channelNumber);
          project.mixer.auxChannels[channelNumber].listInsertFx(parseInt(idSplit[1]), 0, 'channelStripAux');


        } else {

          if (idSplit[2] === '0') {

            channelNumber = parseInt(idSplit[1]);
            subChannelNumber = 0;
            project.mixer.channels[channelNumber].master.insertFx[insertNumber].drawFx(insertNumber, 'channelStripMixer', channelNumber, subChannelNumber);
            project.mixer.channels[channelNumber].master.listInsertFx(channelNumber, 0, 'channelStripMixer');

          } else {

            channelNumber = parseInt(idSplit[1]);
            subChannelNumber = parseInt(idSplit[2]);
            subChannel = parseInt(idSplit[2]) - 1;
            project.mixer.channels[channelNumber].channels[subChannel].insertFx[insertNumber].drawFx(insertNumber, 'channelStripMixerSubChannel', channelNumber, subChannelNumber);
            project.mixer.channels[channelNumber].channels[subChannel].listInsertFx(channelNumber, subChannelNumber, 'channelStripMixer');

          }

        }

      }

      let selectedItemArray = document.getElementsByClassName('insertFxItemSelected')[0];

      if (selectedItemArray !== undefined) {

        selectedItemArray.className = 'insertFxItem';


      } else {

        console.log('error');

      }

      document.getElementById(targetId).className = 'insertFxItemSelected';
    });


    itemId = `${targetId}.insertFxItem.${k}.CloseIcon.svg`;

    document.getElementById(itemId).addEventListener('click', function (e) {

      let idSplit = e.target.id.split('.');
      let insertNumber;

      switch (project.mode) {

        case 'pattern':

          insertNumber = parseInt(idSplit[2]);
          if (idSplit[0] === 'channelStripActive') {

            if (project.mixer.channels[project.activeInstrument].master.insertFx[insertNumber].onScreenPattern) {

              document.getElementById('fxContainer').innerHTML = '';

            }

            project.mixer.channels[project.activeInstrument].master.disconnectFx();
            project.mixer.channels[project.activeInstrument].master.insertFx.splice(insertNumber, 1);
            project.mixer.channels[project.activeInstrument].master.connectFx();
            project.mixer.channels[project.activeInstrument].master.listInsertFx(0, 0, 'channelStripActive');

          } else {

            if (project.mixer.master.insertFx[insertNumber].onScreenPattern) {

              document.getElementById('fxContainer').innerHTML = '';

            }

            project.mixer.master.disconnectFx();
            project.mixer.master.insertFx.splice(insertNumber, 1);
            project.mixer.master.connectFx();
            project.mixer.master.listInsertFx(0, 0, 'channelStripMaster');

          }

          break;

        case 'mixer':

          insertNumber = parseInt(idSplit[4]);
          let channel = parseInt(idSplit[1]);
          let subChannel;

          switch (idSplit[0]) {

            case 'channelStripMixer':

              subChannel = parseInt(idSplit[2]);

              if (subChannel === 0) {

                if (project.mixer.channels[channel].master.insertFx[insertNumber].onScreenMixer) {

                  document.getElementById('fxContainer').innerHTML = '';

                }

                project.mixer.channels[channel].master.disconnectFx();
                project.mixer.channels[channel].master.insertFx.splice(insertNumber, 1);
                project.mixer.channels[channel].master.connectFx();
                project.mixer.channels[channel].master.listInsertFx(channel, 0, 'channelStripMixer');


              } else {
                let subChannelNumber = subChannel;
                subChannel--

                if (project.mixer.channels[channel].channels[subChannel].insertFx[insertNumber].onScreenMixer) {

                  document.getElementById('fxContainer').innerHTML = '';

                }

                project.mixer.channels[channel].channels[subChannel].disconnectFx();
                project.mixer.channels[channel].channels[subChannel].insertFx.splice(insertNumber, 1);
                project.mixer.channels[channel].channels[subChannel].connectFx();
                project.mixer.channels[channel].channels[subChannel].listInsertFx(channel, subChannelNumber, 'channelStripMixer');

              }

              break;


            case 'channelStripMaster':



              if (project.mixer.master.insertFx[insertNumber].onScreenMixer) {

                document.getElementById('fxContainer').innerHTML = '';

              }

              project.mixer.master.disconnectFx();
              project.mixer.master.insertFx.splice(insertNumber, 1);
              project.mixer.master.connectFx();
              project.mixer.master.listInsertFx(0, 0, 'channelStripMaster');

              break;


            case 'channelStripAux':

              channel--;
              subChannel = 0;



              if (project.mixer.auxChannels[channel].insertFx[insertNumber].onScreenMixer) {

                document.getElementById('fxContainer').innerHTML = '';

              }

              project.mixer.auxChannels[channel].disconnectFx();
              project.mixer.auxChannels[channel].insertFx.splice(insertNumber, 1);
              project.mixer.auxChannels[channel].connectFx();
              project.mixer.auxChannels[channel].listInsertFx(channel + 1, 0, 'channelStripAux');
          }
      }

    });


    document.getElementById(itemId).addEventListener('mouseenter', function (e) {

      let targetId = e.target.id.replace('svg', 'Background');
      document.getElementById(targetId).setAttribute('fill', 'red');

    });

    document.getElementById(itemId).addEventListener('mouseleave', function (e) {

      let targetId = e.target.id.replace('svg', 'Background');
      document.getElementById(targetId).setAttribute('fill', 'none');

    });


    if (this.insertFx.length > 1) {

      

      if (k > 0) {

        itemId = `${targetId}.insertFxItem.${k}.UpArrow.svg`;
        arrowEventListeners(itemId);

      }

      if (k < this.insertFx.length -1) {

        itemId = `${targetId}.insertFxItem.${k}.DownArrow.svg`;
        arrowEventListeners(itemId);

      }

      

    }



    function arrowEventListeners(itemId) {

      document.getElementById(itemId).addEventListener('click', function (e) {

        let idSplit = e.target.id.split('.');
        let channel;
        let subChannel;
        let insertFxNumber;
        let direction;

        switch (idSplit[0]) {


          case 'channelStripActive':

            insertFxNumber = parseInt(idSplit[2]);
            direction = idSplit[3];
            project.mixer.channels[project.activeInstrument].master.disconnectFx();

            if (direction === 'UpArrow') {
              
              project.mixer.channels[project.activeInstrument].master.insertFx.splice(insertFxNumber - 1, 0, project.mixer.channels[project.activeInstrument].master.insertFx[insertFxNumber]);
              project.mixer.channels[project.activeInstrument].master.insertFx.splice(insertFxNumber + 1, 1);

            } else {
              
              project.mixer.channels[project.activeInstrument].master.insertFx.splice(insertFxNumber + 2, 0, project.mixer.channels[project.activeInstrument].master.insertFx[insertFxNumber]);
              project.mixer.channels[project.activeInstrument].master.insertFx.splice(insertFxNumber, 1);

            }


            project.mixer.channels[project.activeInstrument].master.connectFx();
            project.mixer.channels[project.activeInstrument].master.listInsertFx(0, 0, 'channelStripActive');
            break;

          case 'channelStripMaster':

            insertFxNumber = parseInt(idSplit[2]);
            direction = idSplit[3];
            project.mixer.master.disconnectFx();

            if (direction === 'UpArrow') {

              project.mixer.master.insertFx.splice(insertFxNumber - 1, 0, project.mixer.master.insertFx[insertFxNumber]);
              project.mixer.master.insertFx.splice(insertFxNumber + 1, 1);

            } else {

              project.mixer.master.insertFx.splice(insertFxNumber + 2, 0, project.mixer.master.insertFx[insertFxNumber]);
              project.mixer.master.insertFx.splice(insertFxNumber, 1);

            }


            project.mixer.master.connectFx();
            project.mixer.master.listInsertFx(0, 0, 'channelStripMaster');
            break;

          case 'channelStripMixer':

            // id syntax example: channelStripMixer.0.0.insertFxItem.1.UpArrow.Background

            insertFxNumber = parseInt(idSplit[4]);
            channel = parseInt(idSplit[1]);
            subChannel = parseInt(idSplit[2]);
            let listSubChannelNumber = parseInt(idSplit[2]);
            direction = idSplit[5];

            if (subChannel === 0) {

              project.mixer.channels[channel].master.disconnectFx();

              if (direction === 'UpArrow') {

                project.mixer.channels[channel].master.insertFx.splice(insertFxNumber - 1, 0, project.mixer.channels[channel].master.insertFx[insertFxNumber]);
                project.mixer.channels[channel].master.insertFx.splice(insertFxNumber + 1, 1);

              } else {

                project.mixer.channels[channel].master.insertFx.splice(insertFxNumber + 2, 0, project.mixer.channels[channel].master.insertFx[insertFxNumber]);
                project.mixer.channels[channel].master.insertFx.splice(insertFxNumber, 1);

              }


              project.mixer.channels[channel].master.connectFx();
              project.mixer.channels[channel].master.listInsertFx(channel, 0, 'channelStripMixer');

            } else {

              subChannel--;

              project.mixer.channels[channel].channels[subChannel].disconnectFx();

              if (direction === 'UpArrow') {

                project.mixer.channels[channel].channels[subChannel].insertFx.splice(insertFxNumber - 1, 0, project.mixer.channels[channel].channels[subChannel].insertFx[insertFxNumber]);
                project.mixer.channels[channel].channels[subChannel].insertFx.splice(insertFxNumber + 1, 1);

              } else {

                project.mixer.channels[channel].channels[subChannel].insertFx.splice(insertFxNumber + 2, 0, project.mixer.channels[channel].channels[subChannel].insertFx[insertFxNumber]);
                project.mixer.channels[channel].channels[subChannel].insertFx.splice(insertFxNumber, 1);

              }


              project.mixer.channels[channel].channels[subChannel].connectFx();
              project.mixer.channels[channel].channels[subChannel].listInsertFx(channel, listSubChannelNumber, 'channelStripMixer');

            }

            break;


          case 'channelStripAux':

            insertFxNumber = parseInt(idSplit[4]);
            channel = parseInt(idSplit[1]) - project.mixer.channels.length;
            let listChannelNumber = parseInt(idSplit[1]);
            direction = idSplit[5];

            project.mixer.auxChannels[channel].disconnectFx();

            if (direction === 'UpArrow') {

              project.mixer.auxChannels[channel].insertFx.splice(insertFxNumber - 1, 0, project.mixer.auxChannels[channel].insertFx[insertFxNumber]);
              project.mixer.auxChannels[channel].insertFx.splice(insertFxNumber + 1, 1);

            } else {

              project.mixer.auxChannels[channel].insertFx.splice(insertFxNumber + 2, 0, project.mixer.auxChannels[channel].insertFx[insertFxNumber]);
              project.mixer.auxChannels[channel].insertFx.splice(insertFxNumber, 1);

            }


            project.mixer.auxChannels[channel].connectFx();
            project.mixer.auxChannels[channel].listInsertFx(listChannelNumber, 0, 'channelStripAux');

            break;

        }

        mixer.fxOnScreen();

      });


      document.getElementById(itemId).addEventListener('mouseenter', function (e) {

        let targetId = e.target.id.replace('svg', 'Background');
        document.getElementById(targetId).setAttribute('opacity', '0.5');

      });

      document.getElementById(itemId).addEventListener('mouseleave', function (e) {

        let targetId = e.target.id.replace('svg', 'Background');
        document.getElementById(targetId).setAttribute('opacity', '0');

      });

    }


  }
}