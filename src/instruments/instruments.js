import { addNewInstrument } from './addNewInstrument.js';
import { createPlayDrum } from './playDrum/createPlayDrum.js';
import { createGNO1106 } from './gNo/createGNO1106.js';
import { createInstrument } from './createInstrument.js';
import { drumDown } from './drumDown.js';
import { GNO1106 } from './gNo/gno.js';
import { instrumentClick } from './instrumentClick.js';
import { noteDown } from './noteDown.js';
import { noteUp } from './noteUp.js';
import { PlayDrum } from './playDrum/playDrum.js';
import { recordNote } from './recordNote.js';

export let instruments = {

    newInstrumentClicked: 'none',

    addNewInstrument,
    createGNO1106,
    createInstrument,
    createPlayDrum,
    drumDown,
    GNO1106,
    instrumentClick,
    noteDown,
    noteUp,
    PlayDrum,
    recordNote

}