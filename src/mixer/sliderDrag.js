import { mixer } from './mixer.js'

export function makeDraggable(evt, sliderMax, target) {

    let svg;
    if (target === undefined) {
        svg = evt.target;
    } else {
        svg = target;
    }

    let selectedElement = null;
    let offset;
    let transform;
    let sliderMin = 0;
    let minY;
    let maxY;
    let bbox;
    let isStartDrag = false;

    svg.addEventListener('mousedown', startDrag);


    svg.addEventListener('touchstart', startDrag);



    function startDrag(evt) {

        if (evt.target.classList.contains('draggable')) {
            window.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', endDrag);
            window.addEventListener('mouseleave', endDrag);
            window.addEventListener('touchmove', drag);
            window.addEventListener('touchend', endDrag);
            window.addEventListener('touchleave', endDrag);
            window.addEventListener('touchcancel', endDrag);
            isStartDrag = true;

            selectedElement = evt.target.parentNode;
            offset = getMousePosition(evt);

            // Get all the transforms currently on this element

            let transforms = selectedElement.transform.baseVal;

            // Ensure the first tranform is a translate transform

            if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                // Create a transform that translates by (0, 0)
                let translate = svg.createSVGTransform();
                translate.setTranslate(0, 0);

                // Add the translation to the front of the transforms list
                selectedElement.transform.baseVal.insertItemBefore(translate, 0);
            }

            // Get initial translation amount
            transform = transforms.getItem(0);

            offset.x -= transform.matrix.e;
            offset.y -= transform.matrix.f;

            bbox = selectedElement.getBBox();
            minY = sliderMax - bbox.y;
            maxY = sliderMin - bbox.y - bbox.height;
        }
    }

    function drag(evt) {

        if (isStartDrag) {
            let coord = getMousePosition(evt);
            let yPosition = coord.y - offset.y;
            if (yPosition < sliderMax) {
                yPosition = sliderMax
            } else if (yPosition > sliderMin) {
                yPosition = sliderMin;
            }
            if (selectedElement) {
                evt.preventDefault();
                transform.setTranslate(null, yPosition);
                let signalValue = yPosition / sliderMax;
                if (signalValue <= 0) {
                    signalValue = 0;
                }

                mixer.setSvgSliderValue(signalValue, selectedElement.id);
            }
        }

    }

    function endDrag(evt) {
        selectedElement = null;
        isStartDrag = false;
    }

    function getMousePosition(evt) {
        let CTM = svg.getScreenCTM();
        if (evt.touches) { evt = evt.touches[0]; }
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d
        };
    }
}
