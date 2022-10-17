import { main } from '../mainParameters/main.js';
import { songMode } from './songMode.js';

export function dropPattern(mousePosition) {

    let patternTarget = songMode.setPatternTarget(mousePosition);
    
    if (patternTarget !== false) {

        let isThereSpace = songMode.isSpaceForPattern(patternTarget.instrument, patternTarget.start);

        if (isThereSpace) {

            if (patternTarget.alien) {

                songMode.addPatternToSong(patternTarget.instrument, main.songModePickedPattern, patternTarget.start, true, patternTarget.originInstrument);
    
            } else {
    
                songMode.addPatternToSong(patternTarget.instrument, main.songModePickedPattern, patternTarget.start);
    
            }
            
            songMode.drawSongMode();

        }    
    } 
   
    document.getElementById('ghost').innerHTML = ``;
    window.removeEventListener('mousemove', songMode.dragPattern);

}