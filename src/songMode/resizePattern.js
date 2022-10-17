import { project } from "../index.js";
import { songMode } from "./songMode.js";

export function resizePattern(elem) {

    let nextPatternStart = 0;
    let id = elem.currentTarget.id;
    let idSplit = id.split(".");
    let instrumentNumber = parseInt(idSplit[1]);
    let instrument = project.instrumentsArray[instrumentNumber];
    let patternIdNumber = parseInt(idSplit[2]);
    let initialLength;
    let hasLoop = false;
    let gridPatternStart = parseInt(idSplit[3]);
    let targetPattern;
    let svg = document.getElementById(`songModeGridSvg.${instrumentNumber}`);
    let svgPt = svg.createSVGPoint(); // Used to get the mouse cursors position relative to the svg
    let isStartDrag = false;
    let targetSvgElement;
    let colorClass = `color`;

    if (idSplit[0] === 'songModePatternLoopResizeEdge') {

        hasLoop = true;

    }

    for (let i = 0; i < project.instrumentsArray[instrumentNumber].songModePatterns.length; i++) {



        if (project.instrumentsArray[instrumentNumber].songModePatterns[i].start > gridPatternStart) {

            nextPatternStart = project.instrumentsArray[instrumentNumber].songModePatterns[i].start

        }


        if (project.instrumentsArray[instrumentNumber].songModePatterns[i].idNumber === patternIdNumber &&
            project.instrumentsArray[instrumentNumber].songModePatterns[i].start === gridPatternStart) {

            targetPattern = project.instrumentsArray[instrumentNumber].songModePatterns[i];

        }
    }

    if (targetPattern.alien) {

        colorClass += project.instrumentsArray[targetPattern.originInstrument].color;

    } else {

        colorClass += project.instrumentsArray[instrumentNumber].color;

    }

    initialLength = targetPattern.lengthActual;

    startDrag(elem);

    function startDrag() {
        window.addEventListener("mousemove", function (event) {
            drag(event);
        });
        window.addEventListener("mouseup", endDrag);
        window.addEventListener("touchmove", drag);
        window.addEventListener("touchend", endDrag);
        window.addEventListener("touchcancel", endDrag);
        svg.style.cursor = "ew-resize";
        isStartDrag = true;

        if (hasLoop) {
            let replacedId = id.replace('songModePatternLoopResizeEdge', 'songModePatternLoop');
            targetSvgElement = document.getElementById(replacedId);

        } else {

            let newSvgElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            newSvgElement.style.stroke = 'white';
            newSvgElement.classList = `patternLoop ${colorClass}`;
            newSvgElement.style.strokeWidth = '1px';
            newSvgElement.id = 'targetSvgElement';
            svg.appendChild(newSvgElement);
            targetSvgElement = document.getElementById('targetSvgElement');

        }

    }

    function endDrag(elem) {
        window.removeEventListener("mousemove", function (event) {
            drag(event);
        });
        window.removeEventListener("mouseup", endDrag);
        window.removeEventListener("touchmove", drag);
        window.removeEventListener("touchend", endDrag);
        window.removeEventListener("touchcancel", endDrag);
        svg.style.cursor = "default";
        isStartDrag = false;

        if (initialLength !== targetPattern.lengthActual) {

            songMode.changePatternLength(initialLength, targetPattern);

        }

        songMode.drawSongMode();

    }

    function getSvgPos(evt) {
        svgPt.x = evt.clientX;
        svgPt.y = evt.clientY;

        // The cursor point, translated into svg coordinates return cursorpt.x for X coordinate, return cursorpt.y for Y coordinate

        let cursorpt = svgPt.matrixTransform(svg.getScreenCTM().inverse());
        return cursorpt.x;
    }

    function drag(event) {
        if (isStartDrag) {
            let svgPos = getSvgPos(event);
            let cellNumber = Math.ceil(svgPos / 16);


            if (cellNumber > targetPattern.start + targetPattern.lengthOriginal - 1) {

                if (nextPatternStart === 0 && targetPattern.lengthActual !== cellNumber - targetPattern.start + 1) {

                    targetPattern.lengthActual = cellNumber - targetPattern.start + 1;

                } else {

                    if (cellNumber < nextPatternStart && targetPattern.lengthActual !== cellNumber - targetPattern.start + 1) {

                        targetPattern.lengthActual = cellNumber - targetPattern.start + 1;

                    }
                }
            } else {

                targetPattern.lengthActual = targetPattern.lengthOriginal;

            }

            let pathD = songMode.drawLoopPatternGrid(targetPattern, instrument, true);
            targetSvgElement.setAttribute("d", pathD);

        }
    }
}
