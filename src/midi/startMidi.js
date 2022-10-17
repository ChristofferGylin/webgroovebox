import { midi } from './midi.js';

export function startMidi() {
    WebMidi.enable(function () {
        
        if (WebMidi.inputs.length > 0) {
            let midiInput = WebMidi.inputs[0];

            midiInput.addListener('noteon', 'all',
                function (e) {
                    
                    midi.midiNoteDown(e.note.name + e.note.octave);
                })
    
                midiInput.addListener('noteoff', 'all',
                function (e) {      
                    midi.midiNoteUp(e.note.name + e.note.octave);
                })
    
            midiInput.addListener('controlchange', 'all',
                function (e) {

                })
        }
        
    })
}