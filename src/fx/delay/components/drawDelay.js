import { delayExtras } from './delayExtras.js';
import { mainInterface } from '../../../mainInterface/mainInterface.js'
import { math } from '../../../math/math.js';
import { project } from '../../../index.js';
import { fxSvg } from '../../fx3ParSvg.js';
import { titleText, par1Text, par2Text, par3Text } from './delayTexts.js';



export function drawDelay(insertNumber, channelType, channel, subChannel) {

    let svg = fxSvg.replace(/Par1TextReplace/g, par1Text);
    svg = svg.replace(/Par2TextReplace/g, par2Text);
    svg = svg.replace(/Par3TextReplace/g, par3Text);
    svg = svg.replace(/TitleTextReplace/g, titleText);
    svg = svg.replace(/ExtrasReplace/g, delayExtras);



    let svgId;
    let closeIcon;
    let closeIconId;
    let tempoModeId;

    if (project.mode === 'pattern') {

        this.onScreenPattern = true;

        if (channelType === 'channelStripActive') {

            closeIconId = `channelStripActive.insertFx.${insertNumber}.CloseIcon.svg`;
            tempoModeId = `fx.TempoMode.channelStripActive.${insertNumber}`;
            closeIcon = mainInterface.closeIcon.replace(/ReplaceName/g, `channelStripActive.insertFx.${insertNumber}`);
            svgId = `fxSvg.channelStripActive.${insertNumber}`;
            svg = svg.replace(/ReplaceName/g, `channelStripActive.${insertNumber}`);


        } else {

            closeIconId = `channelStripMaster.insertFx.${insertNumber}.CloseIcon.svg`;
            tempoModeId = `fx.TempoMode.channelStripMaster.${insertNumber}`;
            closeIcon = mainInterface.closeIcon.replace(/ReplaceName/g, `channelStripMaster.insertFx.${insertNumber}`);
            svgId = `fxSvg.channelStripMaster.${insertNumber}`;
            svg = svg.replace(/ReplaceName/g, `channelStripMaster.${insertNumber}`);


        }

    } else if (project.mode === 'mixer') {

        this.onScreenMixer = true;

        if (channelType === 'channelStripAux') {

            closeIconId = `channelStripAux.insertFx.${channel}.0.${insertNumber}.CloseIcon.svg`;
            tempoModeId = `fx.TempoMode.channelStripAux.${channel}.0.${insertNumber}`;
            closeIcon = mainInterface.closeIcon.replace(/ReplaceName/g, `channelStripAux.insertFx.${channel}.0.${insertNumber}`);
            svgId = `fxSvg.channelStripAux.${channel}.0.${insertNumber}`;
            svg = svg.replace(/ReplaceName/g, `channelStripAux.${channel}.0.${insertNumber}`);

        } else if (channelType === 'channelStripMixer') {

            closeIconId = `channelStripMixer.insertFx.${channel}.${subChannel}.${insertNumber}.CloseIcon.svg`;
            tempoModeId = `fx.TempoMode.channelStripMixer.${channel}.${subChannel}.${insertNumber}`;
            closeIcon = mainInterface.closeIcon.replace(/ReplaceName/g, `channelStripMixer.insertFx.${channel}.${subChannel}.${insertNumber}`);
            svgId = `fxSvg.channelStripMixer.${channel}.${subChannel}.${insertNumber}`;
            svg = svg.replace(/ReplaceName/g, `channelStripMixer.${channel}.${subChannel}.${insertNumber}`);

        } else if (channelType === 'channelStripMixerSubChannel') {

            closeIconId = `channelStripMixer.insertFx.${channel}.${subChannel}.${insertNumber}.CloseIcon.svg`;
            tempoModeId = `fx.TempoMode.channelStripMixer.${channel}.${subChannel}.${insertNumber}`;
            closeIcon = mainInterface.closeIcon.replace(/ReplaceName/g, `channelStripMixer.insertFx.${channel}.${subChannel}.${insertNumber}`);
            svgId = `fxSvg.channelStripMixer.${channel}.${subChannel}.${insertNumber}`;
            svg = svg.replace(/ReplaceName/g, `channelStripMixer.${channel}.${subChannel}.${insertNumber}`);

        } else if (channelType === 'channelStripMaster') {

            closeIconId = `channelStripMaster.insertFx.${insertNumber}.CloseIcon.svg`;
            tempoModeId = `fx.TempoMode.channelStripMaster.${insertNumber}`;
            closeIcon = mainInterface.closeIcon.replace(/ReplaceName/g, `channelStripMaster.insertFx.${insertNumber}`);
            svgId = `fxSvg.channelStripMaster.${insertNumber}`;
            svg = svg.replace(/ReplaceName/g, `channelStripMaster.${insertNumber}`);

        }

    }
    svg = svg.replace(/fxSvg/g, svgId);

    let html = `<div id="reverbContainer" class="reverbContainer"><div class="fxTitle"><div id="reverbTitleCenter" class="fxTitleCenter"></div><div id="reverbCloseIcon" class="closeIconDiv">${closeIcon}</div></div><div id="innerReverbContainer" class="innerReverbContainer">${svg}</div></div>`;

    document.getElementById('fxContainer').innerHTML = html;

    document.getElementById(closeIconId).addEventListener('mouseenter', function (e) {

        let backgroundId = getCloseIconBGId(e.target.id);
        document.getElementById(backgroundId).setAttribute('fill', 'red');

    });

    document.getElementById(closeIconId).addEventListener('mouseleave', function (e) {

        let backgroundId = getCloseIconBGId(e.target.id);
        document.getElementById(backgroundId).setAttribute('fill', 'none');

    });

    document.getElementById(closeIconId).addEventListener('click', function (e) {

        document.getElementById('fxContainer').innerHTML = '';

        let selectedItemArray = document.getElementsByClassName('insertFxItemSelected')[0];

        if (selectedItemArray !== undefined) {

            selectedItemArray.className = 'insertFxItem';

        }

        if (project.mode === 'pattern') {

            let idSplit = e.target.id.split('.');
            let insertNumber;

            switch (idSplit[0]) {

                case 'channelStripMaster':

                    insertNumber = parseInt(idSplit[2]);
                    project.mixer.master.insertFx[insertNumber].onScreenPattern = false;
                    break;

                case 'channelStripActive':

                    insertNumber = parseInt(idSplit[2]);
                    project.mixer.channels[project.activeInstrument].master.insertFx[insertNumber].onScreenPattern = false;
                    break;

            }


        } else if (project.mode === 'mixer') {

            for (let i = 0; i < project.mixer.channels.length; i++) {

                for (let j = 0; j < project.mixer.channels[i].master.insertFx.length; j++) {

                    if (project.mixer.channels[i].master.insertFx[j].onScreenMixer === true) {

                        project.mixer.channels[i].master.insertFx[j].onScreenMixer = false;
                        break;

                    }

                }

                if (project.mixer.channels[i].type === 'multi') {

                    for (let j = 0; j < project.mixer.channels[i].channels.length; j++) {

                        for (let k = 0; k < project.mixer.channels[i].channels[j].insertFx.length; k++) {

                            if (project.mixer.channels[i].channels[j].insertFx[k].onScreenMixer === true) {

                                project.mixer.channels[i].channels[j].insertFx[k].onScreenMixer = false;
                                break;

                            }

                        }

                    }

                }


            }

            for (let i = 0; i < project.mixer.auxChannels.length; i++) {

                for (let j = 0; j < project.mixer.auxChannels[i].insertFx.length; j++) {

                    if (project.mixer.auxChannels[i].insertFx[j].onScreenMixer === true) {

                        project.mixer.auxChannels[i].insertFx[j].onScreenMixer = false;
                        break;

                    }

                }

            }

        }

    });

    document.getElementById(tempoModeId).addEventListener('mouseenter', function (e) {

        e.target.style.backgroundColor = 'rgb(37, 37, 37)';

    });

    document.getElementById(tempoModeId).addEventListener('mouseleave', function (e) {

        e.target.style.backgroundColor = 'transparent';

    });


    document.getElementById(tempoModeId).addEventListener('click', function (e) {

        let idSplit = e.target.id.split('.');
        let targetFx;
        let insertNumber;
        let channel;
        let subChannel;

        switch (idSplit[2]) {

            case 'channelStripActive':

                insertNumber = parseInt(idSplit[3]);
                targetFx = project.mixer.channels[project.activeInstrument].master.insertFx[insertNumber];
                break;

            case 'channelStripMaster':

                insertNumber = parseInt(idSplit[3]);
                targetFx = project.mixer.master.insertFx[insertNumber];
                break;

            case 'channelStripMixer':
                
                insertNumber = parseInt(idSplit[5]);

                if (idSplit[4] === '0') {

                    targetFx = project.mixer.channels[parseInt(idSplit[3])].master.insertFx[insertNumber];

                } else {

                    targetFx = project.mixer.channels[parseInt(idSplit[3])].channels[parseInt(idSplit[4]) - 1].insertFx[insertNumber];

                }
                break;

            case 'channelStripAux':

                insertNumber = parseInt(idSplit[5]);
                targetFx = project.mixer.auxChannels[parseInt(idSplit[3])].insertFx[insertNumber];
                break;
                

        };

        let note = new Tone.Time(targetFx.fx.delayTime.value);
        note = note.toNotation();

        switch (targetFx.syncMode) {

            case 'note':
               
                note += '.';
                targetFx.fx.delayTime.value = note;
                targetFx.syncMode = 'dot';
                e.target.innerHTML = 'DOT';
                break;

            case 'dot':
                note = new Tone.Time(targetFx.fx.delayTime.value);
                note = note.toNotation();
                note = note.replace('.', '');
                note = note.replace('n', 't');
                targetFx.fx.delayTime.value = note;
                targetFx.syncMode = 'trip';
                e.target.innerHTML = 'TRIP';
                break;

            case 'trip':
                let scaledValue = math.cubeCurve(targetFx.knobValueDelayTime);
                targetFx.fx.delayTime.value = math.scaleValue(scaledValue, [0, 1], [0, 15]);
                targetFx.syncMode = 'free';
                e.target.innerHTML = 'FREE';
                break;

            case 'free':
                if (targetFx.knobValueDelayTime < 0.1429) {

                    targetFx.fx.delayTime.value = '64n';

                } else if (targetFx.knobValueDelayTime < 0.2858) {

                    targetFx.fx.delayTime.value = '32n';

                } else if (targetFx.knobValueDelayTime < 0.4287) {

                    targetFx.fx.delayTime.value = '16n';

                } else if (targetFx.knobValueDelayTime < 0.5716) {

                    targetFx.fx.delayTime.value = '8n';

                } else if (targetFx.knobValueDelayTime < 0.7145) {

                    targetFx.fx.delayTime.value = '4n';

                } else if (targetFx.knobValueDelayTime < 0.8574) {

                    targetFx.fx.delayTime.value = '2n';

                } else if (targetFx.knobValueDelayTime >= 0.8574) {

                    targetFx.fx.delayTime.value = '1n';

                }
                targetFx.syncMode = 'note';
                e.target.innerHTML = 'NOTE';
                break;

        }

        targetFx.setDisplay(1);

    });

    mainInterface.makeTurnable(document.getElementById(svgId));

    if (project.mode === 'pattern') {

        if (channelType === 'channelStripActive') {

            project.mixer.channels[project.activeInstrument].master.insertFx[insertNumber].setKnobs(`fx.Setting.RotateThis.channelStripActive.${insertNumber}`);

        } else {

            project.mixer.master.insertFx[insertNumber].setKnobs(`fx.Setting.RotateThis.channelStripMaster.${insertNumber}`);


        }



    } else if (project.mode === 'mixer') {

        if (channelType === 'channelStripAux') {

            project.mixer.auxChannels[channel].insertFx[insertNumber].setKnobs(`fx.Setting.RotateThis.channelStripAux.${channel}.0.${insertNumber}`);


        } else if (channelType === 'channelStripMixer') {


            project.mixer.channels[channel].master.insertFx[insertNumber].setKnobs(`fx.Setting.RotateThis.channelStripMixer.${channel}.${subChannel}.${insertNumber}`);




        } else if (channelType === 'channelStripMixerSubChannel') {

            project.mixer.channels[channel].channels[subChannel - 1].insertFx[insertNumber].setKnobs(`fx.Setting.RotateThis.channelStripMixer.${channel}.${subChannel}.${insertNumber}`);

        } else if (channelType === 'channelStripMaster') {

            project.mixer.master.insertFx[insertNumber].setKnobs(`fx.Setting.RotateThis.channelStripMaster.${insertNumber}`);

        }
    }

    this.setDisplay();
}

function getCloseIconBGId(id) {

    let idSplit = id.split('.');
    let backgroundId;

    switch (idSplit[0]) {

        case 'channelStripMaster':

            backgroundId = `channelStripMaster.insertFx.${idSplit[2]}.CloseIcon.Background`;
            break;

        case 'channelStripActive':

            backgroundId = `channelStripActive.insertFx.${idSplit[2]}.CloseIcon.Background`;
            break;

        case 'channelStripMixer':

            backgroundId = `channelStripMixer.insertFx.${idSplit[2]}.${idSplit[3]}.${idSplit[4]}.CloseIcon.Background`;
            break;

        case 'channelStripAux':

            backgroundId = `channelStripAux.insertFx.${idSplit[2]}.${idSplit[3]}.${idSplit[4]}.CloseIcon.Background`;
            break;


    }

    return backgroundId;
}