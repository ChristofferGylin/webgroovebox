import { mainInterface } from './mainInterface.js';

export function eventListenersKeys() {

    //document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', mainInterface.spaceBar);
    document.addEventListener('keydown', mainInterface.konamiChecker);
};