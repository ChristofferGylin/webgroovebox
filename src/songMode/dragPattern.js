import { main } from '../mainParameters/main.js';

export function dragPattern(e) {

    document.getElementById('ghost').style.top = `${e.clientY - main.ghostMouseOffsetY}px`;
    document.getElementById('ghost').style.left = `${e.clientX - main.ghostMouseOffsetX}px`;

}