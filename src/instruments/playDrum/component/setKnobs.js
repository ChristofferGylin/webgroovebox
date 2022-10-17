import { project } from '../../../index.js';

export function setKnobs() {
    for (let i = 0; i < 12; i++) {
        let svg = document.getElementById(`playDrum.Svg`);

        rotate(`playDrum.Attack.RotateThis.${i}`, svg, project.instrumentsArray[project.activeInstrument].drums[i].knobValues.attack);
        rotate(`playDrum.Decay.RotateThis.${i}`, svg, project.instrumentsArray[project.activeInstrument].drums[i].knobValues.decay);
        rotate(`playDrum.Tune.RotateThis.${i}`, svg, project.instrumentsArray[project.activeInstrument].drums[i].knobValues.tune);

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
            rotate.setRotate(0, 13.047, 13.047);

            // Add the translation to the front of the transforms list
            selectedElement.transform.baseVal.insertItemBefore(rotate, 0);
        }

        // Get initial translation amount
        let transform = transforms.getItem(0);
        transform.setRotate(degree, 13.047, 13.047);
    }

}