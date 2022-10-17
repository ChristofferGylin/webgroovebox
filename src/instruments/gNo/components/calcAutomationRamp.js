export function calcAutomationRamp(tempIndex, targetPattern, automationObject) {


    let foundNextPoint = false;
    let counter = 0;
    // const targetPattern = project.instrumentsArray[automationObject.instrument].patterns[project.instrumentsArray[automationObject.instrument].activePattern];

    for (let i = tempIndex + 1; i < targetPattern.length; i++) {

        counter++;

        for (let j = 0; j < targetPattern[i][0].length; j++) {

            if (targetPattern[i][0][j].parameter === automationObject.parameter) {

                if (targetPattern[i][0][j].value !== automationObject.value) {

                    automationObject.hasRamp = true;
                    automationObject.nextValue = targetPattern[i][0][j].value;

                }

                foundNextPoint = true;
                break;

            }

        }

        if (foundNextPoint) {

            break;

        }

    }
    if (automationObject.hasRamp) {

        automationObject.rampDuration = counter * 12 - 1;

    }

}