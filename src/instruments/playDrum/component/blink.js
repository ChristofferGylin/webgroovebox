import { main } from '../../../mainParameters/main.js';
export function blink(id) {

    let padId = `playDrum.Pad.${id}`;
    requestAnimationFrame(function () {
        if (main.instrumentAnimationOk) {
            document.getElementById(padId).setAttribute('opacity', '1');
            setTimeout(function () {
                if (main.instrumentAnimationOk) {
                    document.getElementById(padId).setAttribute('opacity', '0.85');
                }
            }, 80);
        }
    });

}