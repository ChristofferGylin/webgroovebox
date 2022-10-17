export function cubeCurve(inputSignal) {
    
    let scaledValue = this.scaleValue(inputSignal, [0, 1], [0, 10]);
    let returnValue = Math.pow(scaledValue, 3) / 1000;
    return returnValue;
}


