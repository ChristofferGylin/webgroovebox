import { project } from '../index.js';

export function lessBpm() {
    project.bpm = parseFloat(Tone.Transport.bpm.value);
    project.bpm = project.bpm.toFixed(2);
    project.bpm--;
    project.bpm = project.bpm.toFixed(2);
    document.getElementById('bpmValue').innerHTML = project.bpm;
    Tone.Transport.bpm.value = project.bpm;
}