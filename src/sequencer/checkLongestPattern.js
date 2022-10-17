import { project } from '../index.js';

export function checkLongestPattern() {
    let longestPattern = 0;
    for (let i = 0; i < project.activePatternsMaster.length; i++) {
        if (project.activePatternsMaster[i][0][0] > longestPattern) {
            longestPattern = project.activePatternsMaster[i][0][0];
        }
    }
    project.stepLengthMaster = longestPattern * 2;
}