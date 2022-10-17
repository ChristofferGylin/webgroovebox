import { project } from "../index.js";

export function exportSong(type) {

    if (type === 'start') {

        Tone.Transport.stop();
        project.songModeIndex = 1;
        project.exporting = true;
        project.masterRecorder.start();
        Tone.Transport.start('+0.1');

    } else {

        project.exporting = false;


        checkMeterValue();

        function checkMeterValue() {

            setTimeout(function () {

                let valueR = project.mixer.master.channelMeterR.getValue();
                let valueL = project.mixer.master.channelMeterL.getValue();

                if (valueL < -100 && valueR < -100) {

                    stopRecording();

                } else {

                    checkMeterValue();

                }

            }, 50);
        }

        async function stopRecording() {

            const recording = await project.masterRecorder.stop();
            const url = URL.createObjectURL(recording);
            const anchor = document.createElement('a');
            anchor.download = 'recording.webm';
            anchor.href = url;
            anchor.click();
        };
    }


}