export function setDisplay(par) {

    let displays = document.getElementsByClassName('fxValueBox');

    switch (par) {

        case undefined:
            setPar1(this);
            setPar2(this);
            setPar3(this);
            break;

        case 1:
            setPar1(this);
            break;

        case 2:
            setPar2(this);
            break;

        case 3:
            setPar3(this);
            break;
    }


    function setPar1(thisFx) {

        for (let i = 0; i < displays.length; i++) {

            let idSplit = displays[i].id.split('.');

            if (idSplit[1] === 'Par1') {
                let delayTime = Tone.Time(thisFx.fx.delayTime.value);
                delayTime = delayTime.toNotation();
                let delaySplit;
                
                switch (thisFx.syncMode) {

                    case 'note':
                        delaySplit = delayTime.split('n');
                        if (delayTime === '1m') {

                            let displayNote = delayTime.replace('m', '');
                            displays[i].innerHTML = `1/${displayNote}`;

                        } else {

                            displays[i].innerHTML = `1/${delaySplit[0]}`;

                        }
                        
                        break;

                    case 'dot':
                        delayTime = delayTime.replace('n', '');
                        displays[i].innerHTML = `1/${delayTime}`;
                        break;

                    case 'trip':
                        delaySplit = delayTime.split('t');
                        displays[i].innerHTML = `1/${delaySplit[0]}t`;
                        break;

                    case 'free':

                        displays[i].innerHTML = `${parseInt(thisFx.fx.delayTime.value * 1000)}ms`;
                        break;

                }

                


            }

        }

    }

    function setPar2(thisFx) {

        for (let i = 0; i < displays.length; i++) {

            let idSplit = displays[i].id.split('.');

            if (idSplit[1] === 'Par2') {


                displays[i].innerHTML = `${parseInt(thisFx.fx.feedback.value * 100)}%`;


            }

        }

    }

    function setPar3(thisFx) {

        for (let i = 0; i < displays.length; i++) {

            let idSplit = displays[i].id.split('.');

            if (idSplit[1] === 'Par3') {


                displays[i].innerHTML = `${parseInt(thisFx.fx.wet.value * 100)}%`;


            }

        }

    }

}