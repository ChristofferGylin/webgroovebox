import { math } from '../math/math.js';
import { project } from '../index.js';

export function setKnobs(svgId, pan, aux) {

    let svg = document.getElementById(svgId);

    if (svgId === 'channelStripMaster') {

        rotate(`channelStripMaster.knobPan.RotateThis`, svg, math.scaleValue(project.mixer.master.pan.pan.value, [-1, +1], [0, +1]));

    } else if (svgId === 'channelStripActive') {
        if (project.numberOfInstruments > 0) {
            
            if (pan) {
                rotate(`channelStripActive.knobPan.RotateThis`, svg, math.scaleValue(project.mixer.channels[project.activeInstrument].master.pan.pan.value, [-1, +1], [0, +1]));
            }
            
            if (aux) {
                rotate(`channelStripActive.knobAux.RotateThis`, svg, project.mixer.channels[project.activeInstrument].master.auxSends[project.mixer.channels[project.activeInstrument].master.selectedAux].knobValue);
            }
            
        } else {
            
            if (pan) {
                rotate(`channelStripActive.knobPan.RotateThis`, svg, math.scaleValue(0, [-1, +1], [0, +1]));
            }
            
            if (aux) {
                rotate(`channelStripActive.knobAux.RotateThis`, svg, 0);
            }
            
        }

    }  else {

        let idSplit = svgId.split('.');

        if (idSplit[0] === 'channelStripAux') {
            let indexNumber = parseInt(idSplit[1]) - project.mixer.channels.length;

            if (pan) {
                rotate(`channelStripAux.knobPan.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, math.scaleValue(project.mixer.auxChannels[indexNumber].pan.pan.value, [-1, +1], [0, +1]));
            }

            if (project.mixer.auxChannels[indexNumber].auxSends.length > 0) {

                if (aux) {
                    rotate(`channelStripAux.knobAux.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, project.mixer.auxChannels[indexNumber].auxSends[project.mixer.auxChannels[indexNumber].selectedAux].knobValue);
                }

            } else {

                if (aux) {
                    rotate(`channelStripAux.knobAux.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, 0);
                }
                

            }

        } else {

            if (idSplit[2] === '0') {
                
                if (pan) {
                    rotate(`channelStripMixer.knobPan.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, math.scaleValue(project.mixer.channels[parseInt(idSplit[1])].master.pan.pan.value, [-1, +1], [0, +1]));
                }
                
                if (aux) {
                    rotate(`channelStripMixer.knobAux.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, project.mixer.channels[parseInt(idSplit[1])].master.auxSends[project.mixer.channels[parseInt(idSplit[1])].master.selectedAux].knobValue);
                }
                
            } else {

                if (pan) {
                    rotate(`channelStripMixer.knobPan.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, math.scaleValue(project.mixer.channels[parseInt(idSplit[1])].channels[parseInt(idSplit[2]) - 1].pan.pan.value, [-1, +1], [0, +1]));
                }
                
                if (aux) {
                    rotate(`channelStripMixer.knobAux.RotateThis.${idSplit[1]}.${idSplit[2]}`, svg, project.mixer.channels[parseInt(idSplit[1])].channels[parseInt(idSplit[2]) - 1].auxSends[project.mixer.channels[parseInt(idSplit[1])].channels[parseInt(idSplit[2]) - 1].selectedAux].knobValue);
                }
                
            }
        }



    }




    function rotate(id, svg, knobValue) {
        let idSplit = id.split('.');
        let radius;
        if (idSplit[1] === 'knobPan') {

            radius = 7.223;

        } else {

            radius = 6.402
        }

        let degree = knobValue * 270;
        // Get all the transforms currently on this element
        let selectedElement = document.getElementById(id);

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
        let transform = transforms.getItem(0);
        transform.setRotate(degree, radius, radius);
    }

}