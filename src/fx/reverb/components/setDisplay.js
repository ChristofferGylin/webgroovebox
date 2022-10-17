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

                displays[i].innerHTML = `${parseInt(thisFx.fx.preDelay * 1000)}ms`;

            }

        }

    }

    function setPar2(thisFx) {

        for (let i = 0; i < displays.length; i++) {

            let idSplit = displays[i].id.split('.');

            if (idSplit[1] === 'Par2') {

                

                if (thisFx.fx.decay * 1000 > 9999) {

                    displays[i].innerHTML = `${parseInt(thisFx.fx.decay * 1000)}m`;

                } else {

                    displays[i].innerHTML = `${parseInt(thisFx.fx.decay * 1000)}ms`;

                }

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