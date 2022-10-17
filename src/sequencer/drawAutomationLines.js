import { project } from "./../index.js";
import { sequencer } from "./sequencer.js";;

export function drawAutomationLines() {
    const target = document.getElementById('sequencerAutomationLinesDiv');
    const pattern = project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern];
    let hasAutomation = false;
    let svgLines = '';
    let strokeColor = 'rgb(30, 255, 0)';
    let strokeWidth = '1';
    let cellWidth = 7;
    let rowWidth = (cellWidth + 1) * project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];
    let x1 = 0;
    let x2 = rowWidth;
    let y1 = 0;
    let y2 = 0;

    // Check if automation exists on step 1 and set start point to automation value, if not set the start point to the default value of the patch

    for (let i = 0; i < pattern[1][0].length; i++) {

        if (pattern[1][0][i].parameter === project.instrumentsArray[project.activeInstrument].automation.selectedParameter) {

            hasAutomation = true;
            y1 = 110 - (pattern[1][0][i].value * 110);

        }

    }

    if (!hasAutomation) {

        y1 = 110 - (project.instrumentsArray[project.activeInstrument].getAutomationDefaultValue() * 110);

    } else {

        hasAutomation = false;

    }

    // Set automation points for the rest of the steps


    for (let i = 2; i < pattern.length - 2; i++) {



        for (let j = 0; j < pattern[i][0].length; j++) {

            if (pattern[i][0][j].parameter === project.instrumentsArray[project.activeInstrument].automation.selectedParameter) {

                y2 = 110 - (pattern[i][0][j].value * 110);
                x2 = (cellWidth + 1) * (i / 2) - 0.5;
                svgLines += `<line class="automationLine" x1="${x1}" x2="${x2}" y1="${y1}" y2="${y2}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;
                y1 = y2;
                x1 = x2;
            }

        }




    }

    // Check if automation exists on last step and set point to automation value, if not set the point to the same as last point

    x2 = rowWidth;

    for (let i = 0; i < pattern[pattern.length - 1][0].length; i++) {

        if (pattern[pattern.length - 1][0][i].parameter === project.instrumentsArray[project.activeInstrument].automation.selectedParameter) {

            hasAutomation = true;
            y2 = 110 - (pattern[pattern.length - 1][0][i].value * 110);
            svgLines += `<line class="automationLine" x1="${x1}" x2="${x2}" y1="${y1}" y2="${y2}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;

        }

    }


    if (!hasAutomation) {

        y2 = y1;
        svgLines += `<line class="automationLine" x1="${x1}" x2="${x2}" y1="${y1}" y2="${y2}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;

    }

    target.innerHTML = `<svg id="sequencerAutomationLinesSvg" class="sequencerAutomationSVGs" width="${rowWidth}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${rowWidth} 110">${svgLines}</svg>`;

}