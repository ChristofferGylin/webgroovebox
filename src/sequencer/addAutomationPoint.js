import { main } from '../mainParameters/main.js';
import { project } from "../index.js";
import { sequencer } from "./sequencer.js";


export function addAutomationPoint(evt) {


    let svg = document.getElementById('sequencerAutomationPointsSvg');
    let svgPt = svg.createSVGPoint(); // Used to get the mouse cursors position relative to the svg
    let inputTolerance = 3;
    let stepsToAdd = 1;
    let svgPos = getSvgPos(evt);
    let targetIndex = Math.round(svgPos.x / 4);
    let targetValue = 1 - svgPos.y / 110;

    if (targetIndex < 1) {

        targetIndex = 1

    }


    let autoObject = {
        instrument: project.instrumentsArray[project.activeInstrument].instrumentNumber,
        parameter: project.instrumentsArray[project.activeInstrument].automation.selectedParameter,
        value: targetValue,
        hasRamp: false,
        nextValue: 0,
        rampDuration: 0
    }

    project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].push(autoObject);

    /*
    
        if (targetIndex > 1) {
    
            let hasAutomation = false;
    
            for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0].length; i++) {
    
                if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0][i].instrument === autoObject.instrument
                    && project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0][i].parameter === autoObject.parameter) {
    
                    hasAutomation = true;
    
                }
            }
    
            if (!hasAutomation) {
    
                let lastAutoObject = {
                    instrument: project.instrumentsArray[project.activeInstrument].instrumentNumber,
                    parameter: main.activeAutomation.parameter,
                    value: main.activeAutomation.startValue,
                    hasRamp: false,
                    nextValue: 0,
                    rampDuration: 0
                }
    
                project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex - 1][0].push(lastAutoObject);
    
            }
    
        }
    
    
    
    
    
        for (let i = 0; i < project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].length; i++) {
    
            if (project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0][i].instrument === autoObject.instrument
                && project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0][i].parameter === autoObject.parameter) {
    
                project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].splice(i, 1);
    
            }
        }
    
        project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern][targetIndex][0].push(autoObject);
    
    */

    sequencer.drawAutomationLines();
    sequencer.drawAutomationPoints();

    function getSvgPos(evt) {

        svgPt.x = evt.clientX;
        svgPt.y = evt.clientY;

        // The cursor point, translated into svg coordinates return cursorpt.x for X coordinate, return cursorpt.y for Y coordinate

        let cursorpt = svgPt.matrixTransform(svg.getScreenCTM().inverse());
        return cursorpt;

    }

}



