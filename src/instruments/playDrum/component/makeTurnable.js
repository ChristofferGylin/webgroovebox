import { project } from '../../../index.js';
import { logCurve } from '../../../math/logCurve.js';
import { math } from '../../../math/math.js';


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
            selectedElement = document.getElementById(`${idSplit[0]}.${idSplit[1]}.RotateThis.${idSplit[3]}`);
            
            offset = evt.clientY;
            

            // Get all the transforms currently on this element

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
                evt.preventDefault();
                transform.setRotate(degree, 13.047, 13.047);

                project.instrumentsArray[project.activeInstrument].knobInput(signalValue, selectedElement.id);
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
