import { main } from './../../../mainParameters/main.js';
import { project } from '../../../index.js';
import { instruments } from '../../instruments.js';

export function eventListeners() {

    // Buttons

    let clickableItems = document.getElementsByClassName('gNo-clickable');

    for (let i = 0; i < clickableItems.length; i++) {

        clickableItems[i].addEventListener('mouseup', function (e) {

            project.instrumentsArray[project.activeInstrument].setButtonValue(e)

        })

    }


    // Sliders

    for (let i = 0; i < this.sliderIds.length; i++) {

        document.getElementById(this.sliderIds[i]).addEventListener('mousedown', function (e) {

            if (main.record) {

                project.instrumentsArray[project.activeInstrument].automation.activateAutomation(e.target.id);
                window.addEventListener('mouseup', automationMouseUpEvent, { once: true });

            }
            e.preventDefault();
        });

    }

    function automationMouseUpEvent() {

        main.activeAutomation.active = false;
        project.instrumentsArray[project.activeInstrument].automation.deactivateAutomation();

    }


    // Keys

    let blackNotes = document.getElementsByClassName('gNo-blacknote');

    for (let i = 0; i < blackNotes.length; i++) {
        blackNotes[i].addEventListener('mousedown', function (e) {

            instruments.noteDown(this);
            e.target.addEventListener('mouseup', function () {
                mouseUpEvent(this);
            });
            e.target.addEventListener('mouseleave', function () {
                mouseUpEvent(this);
            });
        });
        /*
                blackNotes[i].addEventListener('touchstart', function () {
                    instruments.noteDown(this);
                });
                blackNotes[i].addEventListener('touchend', function () {
                    instruments.noteUp(this);
                });
                blackNotes[i].addEventListener('touchleave', function () {
                    instruments.noteUp(this);
                });
                blackNotes[i].addEventListener('touchcancel', function () {
                    instruments.noteUp(this);
                });
                */
    }

    let whiteNotes = document.getElementsByClassName('gNo-whitenote');

    for (let i = 0; i < whiteNotes.length; i++) {
        whiteNotes[i].addEventListener('mousedown', function (e) {

            instruments.noteDown(this);
            e.target.addEventListener('mouseup', function () {
                mouseUpEvent(this);
            });
            e.target.addEventListener('mouseleave', function () {
                mouseUpEvent(this);
            });
        });

        whiteNotes[i].addEventListener('touchstart', function () {
            instruments.noteDown(this);
        });
        whiteNotes[i].addEventListener('touchend', function () {
            instruments.noteUp(this);
        });
        whiteNotes[i].addEventListener('touchleave', function () {
            instruments.noteUp(this);
        });
        whiteNotes[i].addEventListener('touchcancel', function () {
            instruments.noteUp(this);
        });
    }

    document.getElementById('previousPatch').addEventListener('click', function () {
        project.instrumentsArray[project.activeInstrument].loadPreviousPatch()
    });

    document.getElementById('nextPatch').addEventListener('click', function () {
        project.instrumentsArray[project.activeInstrument].loadNextPatch()
    });

    function mouseUpEvent(elem) {

        instruments.noteUp(elem);
        elem.removeEventListener('mouseup', function () {
            mouseUpEvent(this);
        });
        elem.removeEventListener('mouseleave', function () {
            mouseUpEvent(this);
        });

    }
}