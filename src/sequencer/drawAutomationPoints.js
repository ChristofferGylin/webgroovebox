import { project } from "./../index.js";
import { sequencer } from "./sequencer.js";

export function drawAutomationPoints() {

    const target = document.getElementById('sequencerAutomationPointsDiv');
    const pattern = project.instrumentsArray[project.activeInstrument].patternsAutomation[project.instrumentsArray[project.activeInstrument].activePattern];
    let hasAutomation = false;
    let x1 = 0;
    let y1 = 0;
    let svgLines = '';
    let cellWidth = 7;
    let pointRectWidth = 5;
    let pointColor = 'rgb(60, 255, 0)';
    let rowWidth = (cellWidth + 1) * project.instrumentsArray[project.activeInstrument].patterns[project.instrumentsArray[project.activeInstrument].activePattern][0][0];

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

    svgLines += `<rect class="automationPoint" x="${x1 - 2.5}" y="${y1 - 2.5}" width="${pointRectWidth}" height="${pointRectWidth}" fill="${pointColor}" />`;

    // Set automation points for the rest of the steps


    for (let i = 2; i < pattern.length - 2; i++) {

        if (true) {

            for (let j = 0; j < pattern[i][0].length; j++) {

                if (pattern[i][0][j].parameter === project.instrumentsArray[project.activeInstrument].automation.selectedParameter) {

                    y1 = 110 - (pattern[i][0][j].value * 110);
                    x1 = (cellWidth + 1) * (i / 2) - 0.5;
                    svgLines += `<rect class="automationPoint" id="automationPoint.${i}.Value.${pattern[i][0][j].value}" x="${x1 - 2.5}" y="${y1 - 2.5}" width="${pointRectWidth}" height="${pointRectWidth}" fill="${pointColor}" />`;

                }
            }

        }


    }

    // Check if automation exists on last step and set point to automation value, if not set the point to the same as last point



    for (let i = 0; i < pattern[pattern.length - 1][0].length; i++) {

        if (pattern[pattern.length - 1][0][i].parameter === project.instrumentsArray[project.activeInstrument].automation.selectedParameter) {

            y1 = 110 - (pattern[pattern.length - 1][0][i].value * 110);

        }

    }

    x1 = rowWidth;
    svgLines += `<rect class="automationPoint" id="lastAutomationPoint" x="${x1 - 2.5}" y="${y1 - 2.5}" width="${pointRectWidth}" height="${pointRectWidth}" fill="${pointColor}" />`;
    target.innerHTML = `<svg id="sequencerAutomationPointsSvg" class="sequencerAutomationSVGs" width="${rowWidth}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${rowWidth} 110">${svgLines}</svg>`;

    document.getElementById('sequencerAutomationPointsSvg').addEventListener('mousedown', function (e) {

        sequencer.addAutomationPoint(e);

    });

}