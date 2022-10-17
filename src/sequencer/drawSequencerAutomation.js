export function drawSequencerAutomation(rowWidth, tempStepLength, scrollContainerHeight) {

    // Draw the sequencer grid

    let x1 = 0;
    let x2 = rowWidth;
    let y1 = 0;
    let y2 = scrollContainerHeight;
    let strokeWidth = 0.5;
    let strokeColor = '#646464';
    let horLineCount = 3;
    let cellsHtml = ``;
    let cellHeight = 55;
    let cellWidth = 7;
    let vertLineCount = tempStepLength;

    // Horizontal lines
    /*
        for (let i = 0; i < horLineCount; i++) {
    
            y1 = cellHeight * i;
            cellsHtml += `<line id="seqGridHorizontalLine.${i}" x1="${x1}" x2="${x2}" y1="${y1}" y2="${y1}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;
    
        }
    */
    // Vertical lines

    y1 = 0;
    y2 = (cellHeight + 1) * horLineCount;

    for (let i = 1; i <= vertLineCount; i++) {

        if (i % 16 === 0) {

            strokeWidth = 0.5;
            strokeColor = '#b3b1b1';

        } else {

            strokeWidth = 0.5;
            strokeColor = '#646464';

        }

        x1 = (cellWidth + 1) * i - 0.5;
        cellsHtml += `<line id="seqGridVerticalLine.${i}" x1="${x1}" x2="${x1}" y1="${y1}" y2="${y2}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;

    }

    return cellsHtml;

}