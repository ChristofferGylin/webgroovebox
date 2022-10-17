import { project } from '../index.js';
export function drawPatternGrid(pattern, instrument, hasLoop) {

    let width = 16 * (pattern.lengthOriginal) - 2;
    let height = 48;
    let name;
    let colorClass = `color`;

    if (pattern.alien) {

        for (let i = 0; i < project.instrumentsArray[pattern.originInstrument].patterns.length; i++) {

            if (pattern.idNumber === project.instrumentsArray[pattern.originInstrument].patterns[i][0][3]) {

                name = project.instrumentsArray[pattern.originInstrument].patterns[i][0][2];
                colorClass += project.instrumentsArray[pattern.originInstrument].color;

            }
        }

    } else {

        for (let i = 0; i < instrument.patterns.length; i++) {

            if (pattern.idNumber === instrument.patterns[i][0][3]) {

                name = instrument.patterns[i][0][2];
                colorClass += instrument.color;

            }
        }
    }


    let baseX = 16 * (pattern.start - 1);
    let closeIcon =
        `<svg id="songModePatternCloseIconSvg.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}" class="songModePatternCloseIcon" xmlns="http://www.w3.org/2000/svg" width="11" viewBox="0 0 100 90">

       <g id="songModePatternCloseIconSvgSS.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}">
  
            <line id="songModePatternCloseIconSvgSS2.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}" x1="11.609" y1="6.109" x2="89.391" y2="83.891" fill="none" stroke="#ededed" stroke-miterlimit="10" stroke-width="15"/>
            <line id="songModePatternCloseIconSvgSS1.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}" x1="89.391" y1="6.109" x2="11.609" y2="83.891" fill="none" stroke="#ededed" stroke-miterlimit="10" stroke-width="15"/>
  
        </g>
    </svg>`;


    let svgRect;

    if (hasLoop) {

        svgRect = `<g id="songModePattern.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}"> <rect y="1.5" class="patternBody ${colorClass}" x="${baseX + 1}" width="${width - 1}" height="${height - 1}" rx="0" opacity="1"/>
    <rect y="1.5" class="patternHeader ${colorClass}" x="${baseX + 1}" width="${width - 1}" height="15" rx="0" opacity="1"/>
    <text y="12.5" x="${baseX + 2.5}" class="songModePatternTitleText" stroke="white">${name}</text>
    
    
    <rect y="1"  x="${baseX + 0.5}" width="${width}" height="${height}" rx="3" stroke="white" stroke-width="1" fill="none" opacity="1"/>
    <foreignObject x="${baseX + width - 12.5}" y="0.25" width="11" height="20">
    ${closeIcon}
    </foreignObject></g>`;


    } else {

        svgRect = `<g id="songModePattern.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}"> <rect y="1.5" class="patternBody ${colorClass}" x="${baseX + 1}" width="${width - 1}" height="${height - 1}" rx="0" opacity="1"/>
        <rect id="songModePatternResizeEdge.${instrument.instrumentNumber}.${pattern.idNumber}.${pattern.start}" class="songModePatternResizeEdge ${colorClass}" y="1.5"  x="${baseX + 1 + width - 3}" width="${3}" height="${height - 1}" rx="0" opacity="1"/>
    <rect y="1.5" class="patternHeader ${colorClass}" x="${baseX + 1}" width="${width - 1}" height="15" rx="0" opacity="1"/>
    <text y="12.5" x="${baseX + 2.5}" class="songModePatternTitleText" stroke="white">${name}</text>
    
    
    <rect y="1"  x="${baseX + 0.5}" width="${width}" height="${height}" rx="3" stroke="white" stroke-width="1" fill="none" opacity="1"/>
    <foreignObject x="${baseX + width - 12.5}" y="0.25" width="11" height="20">
    ${closeIcon}
    </foreignObject></g>`;

    }

    return svgRect;

}