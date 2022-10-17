export function statusRing(id, range, value) {
    
    let rangeMultiplier;
    if (range === 'PlusMinus') {
        rangeMultiplier = 0.375;
        
    } else if (range === 'Plus') {
        rangeMultiplier = 0.75;
        
    }
    
    let circle = document.getElementById(id);
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    let offset = circumference - value * (circumference * rangeMultiplier);
    circle.style.strokeDashoffset = offset;
       
}