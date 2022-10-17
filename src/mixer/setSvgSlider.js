import { project } from '../index.js';

function setSvgSliderPosition(svgId, idSlider, signalValue, sliderMax) {
    let svg = document.getElementById(svgId);
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


function setChannelStripInstrumentId(textId, i) {
    let textIdSplit = textId.split('.');
    
    if (i === undefined) {
        i = project.activeInstrument;
    }
    
    if (textIdSplit[0] === 'channelStripAux') {
        document.getElementById(textId).textContent = 'Auxilary Channel';
    } else if (textIdSplit[0] === 'channelStripMaster') {
        document.getElementById(textId).textContent = 'Master Output';
    } else {
        document.getElementById(textId).textContent = project.instrumentsArray[i].modelName;
    }
    


}


function setSvgSliderDisplayValue(signalValue, id) {
    let displayValue;

    if (id === 'channelStripActive.sliderValueBox') {
        displayValue = project.mixer.channels[project.activeInstrument].master.volume.volume.value;
    } else if (id === 'channelStripMaster.sliderValueBox') {
        displayValue = project.mixer.master.volume.volume.value;
    } else {
        let idSplit = id.split('.');
        if (idSplit[0] === 'channelStripMixer') {
            if (idSplit[3] < 1) {
                displayValue = project.mixer.channels[idSplit[2]].master.volume.volume.value;
            } else if (idSplit[0] === 'channelStripMixer'){
                displayValue = project.mixer.channels[idSplit[2]].channels[idSplit[3] - 1].volume.volume.value;
            }
        } else if (idSplit[0] === 'channelStripAux'){
            let indexNumber = parseInt(idSplit[2]) - project.mixer.channels.length;
            displayValue = project.mixer.auxChannels[indexNumber].volume.volume.value;
        }
    }
    if (displayValue > 0) {

        displayValue = `+${displayValue.toFixed(1)}`;

    } else {

        displayValue = displayValue.toFixed(1);
    }
    document.getElementById(id).innerHTML = displayValue;
}


function refreshSvgSlider(svgId, sliderId, signalValue, sliderMax, sliderDisplayId, instrumentTextId, i, j) {
    this.setSvgSliderPosition(svgId, sliderId, signalValue, sliderMax);
    this.setSvgSliderDisplayValue(signalValue, sliderDisplayId);
    if (instrumentTextId !== null && instrumentTextId !== undefined) {
        this.setChannelStripInstrumentId(instrumentTextId, i, j);
    }

}

export { setSvgSliderPosition, setChannelStripInstrumentId, setSvgSliderDisplayValue, refreshSvgSlider };