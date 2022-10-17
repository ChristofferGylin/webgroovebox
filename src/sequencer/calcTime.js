import { project } from '../index.js';

export function calcTime(songMode) {
    
    let milliSeconds;
    
    if (songMode) {

        milliSeconds = (project.songModeIndex - 1) * (3750 / project.bpm);

    } else {

        milliSeconds = (project.index - 1) * (3750 / project.bpm);

    }
    
    let minutes = Math.floor(milliSeconds / 60000);
    let seconds = Math.floor(milliSeconds / 1000) - (minutes * 60000);
    milliSeconds = Math.floor(milliSeconds - (minutes * 60000) - (seconds * 1000));

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if (milliSeconds > 99) { milliSeconds = Math.floor(milliSeconds / 10);}
    if (milliSeconds < 10) {milliSeconds = "0"+milliSeconds;}
    

    
    return `${minutes}:${seconds}:${milliSeconds}`;
}