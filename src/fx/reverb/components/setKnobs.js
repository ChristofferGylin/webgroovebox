import { mainInterface } from '../../../mainInterface/mainInterface.js';
import { project } from '../../../index.js';

export function setKnobs(id) {
    
    let svg;
    let idSplit = id.split('.');
    let insertNumber;
    let channel;
    let subChannel;
    let channelType = idSplit[3];

    if (project.mode === 'pattern') {

        
        insertNumber = idSplit[4];
        svg = document.getElementById(`fxSvg.${channelType}.${insertNumber}`)

        mainInterface.statusRing(`fx.Par1.LightRing.${channelType}.${insertNumber}`, 'Plus', this.knobValuePreDelay);
        mainInterface.statusRing(`fx.Par2.LightRing.${channelType}.${insertNumber}`, 'Plus', this.knobValueDecay);
        mainInterface.statusRing(`fx.Par3.LightRing.${channelType}.${insertNumber}`, 'Plus', this.knobValueWet);
        rotate(`fx.Par1.RotateThis.${channelType}.${insertNumber}`, svg, this.knobValuePreDelay);
        rotate(`fx.Par2.RotateThis.${channelType}.${insertNumber}`, svg, this.knobValueDecay);
        rotate(`fx.Par3.RotateThis.${channelType}.${insertNumber}`, svg, this.knobValueWet);

    } else if (project.mode === 'mixer') {

        channel = idSplit[4];
        subChannel = idSplit[5];
        insertNumber = idSplit[6];
        
        svg = document.getElementById(`fxSvg.${channelType}.${channel}.${subChannel}.${insertNumber}`);

        mainInterface.statusRing(`fx.Par1.LightRing.${channelType}.${channel}.${subChannel}.${insertNumber}`, 'Plus', this.knobValuePreDelay);
        mainInterface.statusRing(`fx.Par2.LightRing.${channelType}.${channel}.${subChannel}.${insertNumber}`, 'Plus', this.knobValueDecay);
        mainInterface.statusRing(`fx.Par3.LightRing.${channelType}.${channel}.${subChannel}.${insertNumber}`, 'Plus', this.knobValueWet);
        rotate(`fx.Par1.RotateThis.${channelType}.${channel}.${subChannel}.${insertNumber}`, svg, this.knobValuePreDelay);
        rotate(`fx.Par2.RotateThis.${channelType}.${channel}.${subChannel}.${insertNumber}`, svg, this.knobValueDecay);
        rotate(`fx.Par3.RotateThis.${channelType}.${channel}.${subChannel}.${insertNumber}`, svg, this.knobValueWet);

    }


    function rotate(id, svg, knobValue) {

        let degree = knobValue * 270;
        // Get all the transforms currently on this element
        let selectedElement = document.getElementById(id);

        let transforms = selectedElement.transform.baseVal;

        // Ensure the first tranform is a rotate transform

        if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_ROTATE) {

            // Create a transform that rotates by (0, around the center of the element)
            let rotate = svg.createSVGTransform();
            rotate.setRotate(0, 18.247, 18.247);

            // Add the translation to the front of the transforms list
            selectedElement.transform.baseVal.insertItemBefore(rotate, 0);
        }

        // Get initial translation amount
        let transform = transforms.getItem(0);
        transform.setRotate(degree, 18.247, 18.247);
    }


}





