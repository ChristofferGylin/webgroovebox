

export function setSvgSliderPosition(svgId, idSlider, signalValue, sliderMax) {
    
    let svg = svgId;
    let yPosition = signalValue * sliderMax;
    let transform;
    let selectedElement = document.getElementById(idSlider);
    
    let transforms = selectedElement.transform.baseVal;
    if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        // Create a transform that translates by (0, 0)
        let translate = svg.createSVGTransform();
        translate.setTranslate(0, 0);

        // Add the translation to the front of the transforms list
        selectedElement.transform.baseVal.insertItemBefore(translate, 0);
    }

    // Get initial translation amount
    transform = transforms.getItem(0);
    transform.setTranslate(null, yPosition);
}