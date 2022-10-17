import { project } from './../../../index.js';
import { sequencer } from '../../../sequencer/sequencer.js';

export function readAutomation(automationObject, tempIndex, time) {

    switch (automationObject.parameter) {

        case 'VCF Frequency':

            let value = Math.exp(Math.log(20) + (parseFloat(automationObject.value)) * (Math.log(20000) - Math.log(20)));

            for (let i = 0; i < 6; i++) {
                project.instrumentsArray[automationObject.instrument].oscillatorBank[i].lowPassFilter.frequency.setValueAtTime(value, time);

            }

            project.instrumentsArray[automationObject.instrument].filterEnvelopeScaler.min = value;
            project.instrumentsArray[automationObject.instrument].lfoScaler.min = value;

        default:
            break;
    }
}

/*

Parameter Id's:

gNo.LFO.Rate
gNo.LFO.DelayTime
gNo.DCO.LFO
gNo.DCO.PWM
gNo.DCO.Sub
gNo.DCO.Noise
gNo.HPF.HPF

gNo.VCF.Res
gNo.VCF.ENV
gNo.VCF.LFO
gNo.VCF.KYBD
gNo.VCA.Level
gNo.ENV.A
gNo.ENV.D
gNo.ENV.S
gNo.ENV.R

*/