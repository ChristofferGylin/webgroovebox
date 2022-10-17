import { main } from '../mainParameters/main.js';

export function drawGrid(instrumentNumber) {

    // Vertical lines

    let vertLineCount = main.songModeNumberOfCells;
    let cellWidth = 15;
    let cellsHtml = ``;
    let y1 = 0;
    let y2 = 50; // y2 = cellHeight
    let strokeWidth;
    let strokeColor;

    for (let i = 1; i <= vertLineCount; i++) {

        if (i % 4 === 0) {

            strokeWidth = 0.5;
            strokeColor = '#b3b1b1';

        } else {

            strokeWidth = 0.5;
            strokeColor = '#646464';

        }

        let x1 = (cellWidth + 1) * i - 0.5;
        cellsHtml += `<line id="seqGridVerticalLine.${instrumentNumber}.${i}" x1="${x1}" x2="${x1}" y1="${y1}" y2="${y2}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;
        
    }

    return cellsHtml;

}