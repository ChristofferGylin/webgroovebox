import { main } from '../mainParameters/main.js';

export function recordButton() {

    let recordButton = document.getElementById('recordButton');

    if (recordButton.className === 'recordButton') {

        recordButton.className = 'recordButtonActive';
        main.record = true;

    } else {

        recordButton.className = 'recordButton';
        main.record = false;
    }
}