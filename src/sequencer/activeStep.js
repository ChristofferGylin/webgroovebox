export function activeStep(elem) {

    if (elem.className === 'timeLineCell') {
        elem.className = 'timeLineCellActive';
    } else if (elem.className === 'timeLineCellActive') {
        elem.className = 'timeLineCell';
    }
}