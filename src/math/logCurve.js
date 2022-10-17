export function logCurve(inputSignal) {
    
    let scaledValue = this.scaleValue(inputSignal, [0, 1], [1, 10]),
        min = Math.log(1) / Math.log(10),
        max = Math.log(10) / Math.log(10),
        range = max - min;
    
        return (Math.log(scaledValue) / Math.log(10) - min) / range;
}

