import { project } from '../index.js';
export function drawLoopPatternGrid(pattern, instrument, isResize) {

    let loopLength = pattern.lengthActual - pattern.lengthOriginal; // The loops length not including original pattern length
    let baseWidth = 16 * (pattern.lengthOriginal) - 2;
    let height = 48;
    let colorClass = `color`;
    let baseX = 16 * (pattern.lengthOriginal + pattern.start - 1);
    let pathD = ``;
    let resizePath = ``;
    let width;


    if (loopLength === 0) {

        let emptyD = ``;
        return emptyD;

    }

    if (pattern.alien) {

        colorClass += project.instrumentsArray[pattern.originInstrument].color;

    } else {

        colorClass += instrument.color;

    }

    while (loopLength >= 1) {

        if (loopLength === pattern.lengthOriginal) {

            width = baseWidth;

            generatePath(true);

            loopLength = 0;

        } else if (loopLength < pattern.lengthOriginal) {

            let loopPercentage = loopLength / pattern.lengthOriginal;
            width = baseWidth * loopPercentage;

            generatePath(true);

            loopLength = 0;

        } else {

            width = baseWidth;

            generatePath(false);

            loopLength = loopLength - pattern.lengthOriginal;
            baseX = baseX + 16 * (pattern.lengthOriginal);

        }

    }

    if (!isResize) {

        let svgRect = `<path id="songModePatternLoop.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}" stroke="white" stroke-width="1" class="patternLoop ${colorClass}"
        d="${pathD} Z" />${resizePath}`;

        return svgRect;

    } else {

        return pathD;

    }

    function generatePath(resize) {

        pathD += `M ${baseX + 0.5} 4
            A 3 3 0 0 1 ${baseX + 3.5} 1
            L ${baseX + width - 2.5} 1
            A 3 3 0 0 1 ${baseX + width + 0.5} 4
            L ${baseX + width + 0.5} ${height - 2}
            A 3 3 0 0 1 ${baseX + width - 2.5} ${height + 1}
            L ${baseX + 3.5} ${height + 1}
            A 3 3 0 0 1 ${baseX + 0.5} ${height - 2}
            L ${baseX + 0.5} 4`;

        if (resize) {

            resizePath = ` <path id="songModePatternLoopResizeEdge.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}" class="songModePatternResizeEdge" stroke="transparent" stroke-width="1" fill="transparent"
            d="M ${baseX + width - 4.5} 1
            L ${baseX + width - 2.5} 1
            A 3 3 0 0 1 ${baseX + width + 0.5} 4
            L ${baseX + width + 0.5} ${height - 2}
            A 3 3 0 0 1 ${baseX + width - 2.5} ${height + 1}
            L ${baseX + width - 4.5} ${height + 1} Z" />`;

        }
    }
}