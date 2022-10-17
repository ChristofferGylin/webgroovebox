import { mainInterface } from './mainInterface.js' ;
import { main } from '../mainParameters/main.js';

export function spaceBar(e) {
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    
    if (e.keyCode === 32 && !main.textInput) {
        e.preventDefault();
        mainInterface.startButton();
    }
}