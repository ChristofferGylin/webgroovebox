import { project } from '../index.js';
import { main } from '../mainParameters/main.js';

export function drawPatternSelection(pattern, startIndex) {


    let color = main.colors[project.instrumentsArray[project.activeInstrumentSongMode].color];
    let width = 15 * (pattern[0][1] / 4) + 1;
    let height = 48;
    let name = pattern[0][2];
    let nameLength;
    let baseX = 0;

    if (startIndex !== undefined) {

        baseX = width * (startIndex - 1);

    }

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width + 1}" viewBox="0 0 ${width + 1} ${height + 1}">
    
    <rect y="1"  x="${baseX + 1}" width="${width - 1}" height="${height - 1}" rx="0" fill="${color.body}" opacity="1"/>
    <rect y="1" " x="${baseX + 1}" width="${width - 1}" height="15" rx="0" fill="${color.header}" opacity="1"/>
    <text y="12.5" x="${baseX + 2.5}" class="songModePatternTitleText" stroke="white">${name}</text>
    <rect y="0.5"  x="${baseX + 0.5}" width="${width}" height="${height}" rx="3" stroke="white" stroke-width="1" fill="none" opacity="1"/>
    
    </svg>`

    return svg;

}