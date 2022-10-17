import { disconnectFx } from './disconnectFx.js';
import { connectFx } from './connectFx.js';
import { listAuxSends } from '../listAuxSends.js';
import { listInsertFx } from '../listInsertFx.js';
import { newAuxSend } from '../AuxSend.js';
import { project } from '../../index.js';


export class ChannelStrip {
    constructor(name, masterChannel) {

        this.disconnectFx = disconnectFx;
        this.connectFx = connectFx;

        this.name;

        if (name !== undefined) {
            this.name = name;
        } else {
            this.name = 'unnamed';
        }

        this.newAuxSend = newAuxSend;
        this.input = new Tone.Gain();
        this.insertFx = [];
        this.auxSends = [];
        this.selectedAux;
        this.preFader = new Tone.Gain();
        this.volume = new Tone.Volume();
        this.postFader = new Tone.Gain();
        this.pan = new Tone.Panner({ channelCount: 2 });
        this.output = new Tone.Gain();
        this.stereoSplit = new Tone.Split();
        this.channelMeterR = new Tone.Meter();
        this.channelMeterL = new Tone.Meter();
        this.channelMeterSource = 'postFader';
        this.listAuxSends = listAuxSends;
        this.listInsertFx = listInsertFx;
        this.mute = false;
        this.soloMuted = false;
        this.solo = false;
        this.sliderPosition = 0.8;



        this.input.connect(this.preFader);
        this.preFader.connect(this.volume);
        this.volume.connect(this.postFader);
        this.postFader.connect(this.pan);
        this.pan.connect(this.output);

        this.output.connect(this.stereoSplit);
        this.stereoSplit.connect(this.channelMeterL, 0, 0);
        this.stereoSplit.connect(this.channelMeterR, 1, 0);

        if (masterChannel) {
            this.output.toDestination();
        }

    }
}