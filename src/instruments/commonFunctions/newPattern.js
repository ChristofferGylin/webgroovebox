export function newPattern(name) {

    let patternName;
    let patternIdNumber = this.patternIdCounter;
    this.patternIdCounter++;

    if (name === undefined) {

        patternName = `Pattern ${this.patterns.length + 1}`

    } else {

        patternName = name;

    }
    this.patterns.push([]);
    this.activePattern = this.patterns.length - 1;

    for (let i = 0; i <= 64; i++) {
        if (i === 0) {
            this.patterns[this.activePattern].push([64, 16, patternName, patternIdNumber]);
        } else {
            this.patterns[this.activePattern].push([[], []]);
        }

    }

    this.patternsAutomation.push([]);

    for (let i = 0; i <= 128; i++) {
        if (i === 0) {
            this.patternsAutomation[this.activePattern].push([128, 16, patternName, patternIdNumber]);
        } else {
            this.patternsAutomation[this.activePattern].push([[], []]);
        }

    }
}