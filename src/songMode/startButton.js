import { main } from '../mainParameters/main.js';
import { project } from '../index.js';


export function startButton() {

    let playButton = document.getElementById('playButton');

    if (playButton.className === 'playButton') {

        if (project.songModeIndex === project.songModePatterns.length - 1) {

            project.songModeIndex = 1;

        }

        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        }
        Tone.Transport.start('+0.1');
        playButton.className = 'playButtonActive';
        main.play = true;

    } else {

        for (let i = 0; i < project.instrumentsArray.length; i++) {

            if (project.instrumentsArray[i].type === 'keys') {

                project.instrumentsArray[i].stopEverything();
            }
        }
        Tone.Transport.stop();
        playButton.className = 'playButton';
        main.play = false;

    }
}