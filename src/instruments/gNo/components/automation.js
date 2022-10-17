import { activateAutomation } from "./activateAutomation.js";
import { calcAutomationRamp } from './calcAutomationRamp.js';
import { deactivateAutomation } from "./deactivateAutomation.js";
import { readAutomation } from "./readAutomation.js";

export let automation = {
    automationParameters: ['LFO Rate', 'DCO LFO', 'DCO PWM', 'DCO Pulse Button', 'DCO Saw Button', 'DCO Range Button 1', 'DCO Range Button 2', 'DCO Range Button 3', 'DCO PWM Switch', 'DCO Sub', 'DCO Noise', 'HPF Frequency', 'VCF Frequency', 'VCF Resonance', 'VCF Envelope Invert', 'VCF Envelope', 'VCF LFO', 'VCA Level', 'VCA ENV Gate Switch', 'ENV A', 'ENV D', 'ENV S', 'ENV R', 'Chorus 1', 'Chorus 2', 'Chorus OFF'],
    activateAutomation,
    calcAutomationRamp,
    deactivateAutomation,
    selectedParameter: 'VCF Frequency',
    automationVisiblePattern: false,
    automationVisibleSong: false,
    readAutomation
}