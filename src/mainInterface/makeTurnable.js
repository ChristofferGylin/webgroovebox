import { mainInterface } from '../mainInterface/mainInterface.js';
import { project } from '../index.js';
import { mixer } from '../mixer/mixer.js';


export function makeTurnable(target) {

    let svg;
    if (target === undefined) {
        svg = evt.target;
    } else {
        svg = target;
    }

    let selectedElement = null;
    let offset;
    let transform;
    let sliderMin = 100;
    let sliderMax = -100
    let isStartDrag = false;
    let startValue;
    let radius;
    let targetType;

    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('touchstart', startDrag);

    function startDrag(evt) {

        if (evt.target.classList.contains('turnable')) {

            window.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', endDrag);

            window.addEventListener('touchmove', drag);
            window.addEventListener('touchend', endDrag);
            window.addEventListener('touchcancel', endDrag);

            isStartDrag = true;
            let idSplit = evt.target.id.split('.');


            switch (idSplit[0]) {

                case 'channelStripMaster':
                case 'channelStripActive':

                    selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis`);

                    if (idSplit[1] === 'knobPan') {

                        radius = 7.223;

                    } else {

                        radius = 6.402;
                    }

                    targetType = 'channelStrip';
                    break;


                case 'channelStripMixer':

                    selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.${idSplit[idSplit.length - 2]}.${idSplit[idSplit.length - 1]}`);

                    if (idSplit[1] === 'knobPan') {

                        radius = 7.223;

                    } else {

                        radius = 6.402;
                    }
                    targetType = 'channelStripMixer';
                    break;


                case 'channelStripAux':

                    selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.${idSplit[idSplit.length - 2]}.${idSplit[idSplit.length - 1]}`);

                    if (idSplit[1] === 'knobPan') {

                        radius = 7.223;

                    } else {

                        radius = 6.402;
                    }
                    targetType = 'channelStrip';
                    break;


                case 'playDrum':

                    selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.${idSplit[3]}`);
                    radius = 13.047;
                    targetType = 'playDrum';
                    break;


                case 'fx':
                    if (project.mode === 'pattern') {

                        if (idSplit[4] === 'channelStripActive') {

                            selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.channelStripActive.${idSplit[5]}`);

                        } else {

                            selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.channelStripMaster.${idSplit[5]}`);

                        }



                    } else if (project.mode === 'mixer') {

                        if (idSplit[4] === 'channelStripMixer') {

                            selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.channelStripMixer.${idSplit[5]}.${idSplit[6]}.${idSplit[7]}`);

                        } else if (idSplit[4] === 'channelStripAux') {

                            selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.channelStripAux.${idSplit[5]}.${idSplit[6]}.${idSplit[7]}`);

                        } else {

                            // Write code for channelStripMaster

                        }



                    }

                    radius = 18.247;
                    targetType = 'fx';
                    break;


            }


            offset = evt.clientY;

            // Get all the transforms currently on this element

            let transforms = selectedElement.transform.baseVal;

            // Ensure the first tranform is a rotate transform

            if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_ROTATE) {

                // Create a transform that rotates by (0, around the center of the element)
                let rotate = svg.createSVGTransform();
                rotate.setRotate(0, radius, radius);

                // Add the translation to the front of the transforms list
                selectedElement.transform.baseVal.insertItemBefore(rotate, 0);
            }

            // Get initial translation amount
            transform = transforms.getItem(0);
            startValue = transform.angle / 270;

        }
    }

    function drag(evt) {

        if (isStartDrag) {
            

            let yPosition = evt.clientY - offset;

            if (yPosition < sliderMax) {
                yPosition = sliderMax
            } else if (yPosition > sliderMin) {
                yPosition = sliderMin;
            }

            if (selectedElement) {


                let signalValue = startValue + (yPosition / sliderMax);
                if (signalValue <= 0) {
                    signalValue = 0;
                }
                if (signalValue > 1) {
                    signalValue = 1;
                }
                let degree = signalValue * 270;


                switch (targetType) {

                    case 'channelStrip':

                        mixer.knobInput(signalValue, selectedElement.id);
                        break;

                    case 'channelStripMixer':

                        mixer.knobInput(signalValue, selectedElement.id);
                        break;

                    case 'playDrum':

                        project.instrumentsArray[project.activeInstrument].knobInput(signalValue, selectedElement.id);
                        break;

                    case 'fx':

                        let fxIdSplit = selectedElement.id.split('.');
                        let insertNumber = parseInt(fxIdSplit[4]);
                        let channel;
                        
                        switch (fxIdSplit[3]) {

                            case 'channelStripActive':
                                
                                project.mixer.channels[project.activeInstrument].master.insertFx[insertNumber].knobInput(signalValue, selectedElement.id);
                                break;

                            case 'channelStripMaster':

                                project.mixer.master.insertFx[insertNumber].knobInput(signalValue, selectedElement.id);
                                break;

                            case 'channelStripMixer':

                                channel = parseInt(fxIdSplit[4]);
                                insertNumber = parseInt(fxIdSplit[6]);

                                if (fxIdSplit[5] === '0') {

                                    project.mixer.channels[channel].master.insertFx[insertNumber].knobInput(signalValue, selectedElement.id);

                                } else {

                                    let subChannel = parseInt(fxIdSplit[5]) - 1;

                                    project.mixer.channels[channel].channels[subChannel].insertFx[insertNumber].knobInput(signalValue, selectedElement.id);

                                }
                                break;

                            case 'channelStripAux':

                                channel = parseInt(fxIdSplit[4]);
                                insertNumber = parseInt(fxIdSplit[6]);

                                project.mixer.auxChannels[channel].insertFx[insertNumber].knobInput(signalValue, selectedElement.id);
                                break;
                        }
                }

                evt.preventDefault();
                transform.setRotate(degree, radius, radius);

            }
        }
    }

    function endDrag() {
        selectedElement = null;
        isStartDrag = false;
        window.removeEventListener('mousemove', drag);
        window.removeEventListener('mouseup', endDrag);

    }

}
