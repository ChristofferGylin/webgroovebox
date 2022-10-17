import { main } from '../mainParameters/main.js';
import { songMode } from './songMode.js';

export function pickPattern(e) {

    let targetId = e.currentTarget.id;
    let idSplit = targetId.split('.');
    main.songModePickedPattern = parseInt(idSplit[1]);
    let targetPostition = e.currentTarget.getBoundingClientRect();
    let html = document.querySelector('html');
    const ghost = document.getElementById('ghost');
    ghost.innerHTML = e.currentTarget.innerHTML;
    ghost.style.top = `${targetPostition.top}px`;
    ghost.style.left = `${targetPostition.left}px`;
    main.ghostMouseOffsetX = e.clientX - targetPostition.left - html.scrollLeft;
    main.ghostMouseOffsetY = e.clientY - targetPostition.top - html.scrollTop;
    window.addEventListener('mousemove', songMode.dragPattern);

}