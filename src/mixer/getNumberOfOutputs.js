import { project } from '../index.js';

export function getNumberOfOutputs(id) {
    let numberOfChannels = project.instrumentsArray[id].outputCount;
    if (numberOfChannels > 1) {
      numberOfChannels++;
    }
    return numberOfChannels;
  }