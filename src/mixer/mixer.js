import { AuxSend } from './AuxSend.js';
import { checkForLoop } from './checkForLoop.js';
import { fxOnScreen } from './fxOnScreen.js';
import { listAuxSends } from './listAuxSends.js';
import { listInsertFx } from './listInsertFx.js';
import { setSvgSliderPosition, setChannelStripInstrumentId, setSvgSliderDisplayValue, refreshSvgSlider } from './setSvgSlider.js';
import { ChannelStrip } from './channelStrip/channelStrip.js';
import { drawChannelStripActiveInstrument } from './drawChannelStripActiveInstrument.js';
import { makeDraggable } from './sliderDrag.js';
import { setSvgSliderValue } from './setSvgSliderValue.js';
import { drawChannelStripMaster } from './drawChannelStripMaster.js';
import { drawMixer } from './drawMixer.js';
import { getNumberOfOutputs } from './getNumberOfOutputs.js';
import { createMixerChannel } from './createMixerChannel.js';
import { soloChannel } from './soloChannel.js';
import { vuMeter } from './vuMeter.js';
import { muteChannel } from './muteChannel.js';
import { knobInput } from './knobInput.js';
import { setKnobs } from './setKnobs.js';


export let mixer = {
    
    AuxSend, 
    ChannelStrip,
    checkForLoop,
    createMixerChannel,
    drawChannelStripActiveInstrument,
    drawChannelStripMaster,
    drawMixer,
    fxOnScreen,
    getNumberOfOutputs,
    knobInput,
    listAuxSends,
    listInsertFx,
    makeDraggable,
    refreshSvgSlider,
    setChannelStripInstrumentId,
    setKnobs,
    setSvgSliderDisplayValue,
    setSvgSliderPosition,
    setSvgSliderValue,
    soloChannel,
    vuMeter,
    muteChannel
    
}