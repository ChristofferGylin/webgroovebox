import { main } from '../mainParameters/main.js';
import { songMode } from '../songMode/songMode.js';
import { mixer } from '../mixer/mixer.js';
import { project } from '../index.js';
import { sequencer } from '../sequencer/sequencer.js';

export function changeMode(changeTo) {
    switch (changeTo) {
        case 'mixer':
            if (project.mode !== 'mixer') {

                if (project.mode === 'song') {

                    this.setMainLayout('patternAndMixer');
                    Tone.Transport.cancel();
                    Tone.Transport.scheduleRepeat(sequencer.sequencerFunction(), "64n");

                }

                main.instrumentAnimationOk = false;
                document.getElementById('mainInnerContainer').className = 'mainInnerContainerMixer';
                document.getElementById('fxContainer').innerHTML = '';
                project.mode = 'mixer';
                mixer.drawMixer();

                document.getElementById('patternMode').className = 'controlCellPattern';
                document.getElementById('songMode').className = 'controlCellSong';
                document.getElementById('mixerMode').className = 'controlCellMixerActive';
            }
            break;

        case 'pattern':
            if (project.mode !== 'pattern') {

                if (project.mode === 'song') {

                    this.setMainLayout('patternAndMixer');
                    Tone.Transport.cancel();
                    Tone.Transport.scheduleRepeat(sequencer.sequencerFunction(), "128n");

                }

                document.getElementById('mainInnerContainer').className = 'mainInnerContainer';
                document.getElementById('fxContainer').innerHTML = '';
                project.mode = 'pattern'
                this.drawPatternMode();

                document.getElementById('patternMode').className = 'controlCellPatternActive';
                document.getElementById('songMode').className = 'controlCellSong';
                document.getElementById('mixerMode').className = 'controlCellMixer';

                setTimeout(function () {
                    main.instrumentAnimationOk = true;
                }, 100);
            }

            break;

        case 'song':

            if (project.mode !== 'song') {
                Tone.Transport.cancel();
                Tone.Transport.scheduleRepeat(songMode.songModeSequencer(), "64n");
                this.setMainLayout('song');
                songMode.drawSongMode();
                project.mode = 'song';
                document.getElementById('patternMode').className = 'controlCellPattern';
                document.getElementById('songMode').className = 'controlCellSongActive';
                document.getElementById('mixerMode').className = 'controlCellMixer';

            }

            break;

    }
}