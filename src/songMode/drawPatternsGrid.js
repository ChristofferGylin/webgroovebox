
export function drawPatternsGrid(instrument) {


    let activePatterns = ``;

    for (let i = 0; i < instrument.songModePatterns.length; i++) {

        let hasLoop = false;

        if (instrument.songModePatterns[i].lengthActual > instrument.songModePatterns[i].lengthOriginal) {

            hasLoop = true;

        }

        activePatterns += this.drawPatternGrid(instrument.songModePatterns[i], instrument, hasLoop);

        if (hasLoop) {

            activePatterns += this.drawLoopPatternGrid(instrument.songModePatterns[i], instrument, false);

        }

    }

    return activePatterns;

}