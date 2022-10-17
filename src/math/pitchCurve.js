
export function pitchCurve(inputSignal, startFrequency) {

    let scaledValue = this.scaleValue(inputSignal, [0, 1], [0, 2]);

    return startFrequency * Math.pow(2, scaledValue);

}