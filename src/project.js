
import { mixer } from './mixer/mixer.js';


export class Project {
    constructor() {
        this.exporting = false;
        this.konami = false;
        this.nextColor = 0;
        this.mode = 'pattern';
        this.notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        this.octaves = 4;
        this.index = 1;
        this.songModeIndex = 1;
        this.stepLengthMaster = 128;
        this.activeInstrument;
        this.activeInstrumentSongMode = 0;
        this.numberOfInstruments = 0;
        this.instrumentAnimation;
        this.instrumentsArray = [];
        this.activePatternsMaster = [];
        this.activeAutomationPatternsMaster = [];
        this.songModePatterns = [[[], []], [[], []]];
        this.masterRecorder = new Tone.Recorder();
        this.mixer = {

            master: new mixer.ChannelStrip('Master Output', true),

            channels: [],
            auxChannels: []


        };
        this.mixer.master.output.connect(this.masterRecorder);


        this.mixer.master.input.connect(this.mixer.master.preFader);
        this.mixer.master.preFader.connect(this.mixer.master.volume);
        this.mixer.master.volume.connect(this.mixer.master.postFader);
        this.mixer.master.postFader.connect(this.mixer.master.pan);
        this.mixer.master.pan.connect(this.mixer.master.output);


        this.mixer.master.output.connect(this.mixer.master.stereoSplit);
        this.mixer.master.stereoSplit.connect(this.mixer.master.channelMeterL, 0, 0);
        this.mixer.master.stereoSplit.connect(this.mixer.master.channelMeterR, 1, 0);



        this.bpm = parseFloat(Tone.Transport.bpm.value);
        this.bpm = this.bpm.toFixed(2);
        document.getElementById('bpmValue').innerHTML = this.bpm;
    }
}