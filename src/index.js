import { createAuxChannel } from './dialogBoxes/newAuxChannel.js';
import { main } from './mainParameters/main.js';
import { Project } from './project.js';
import { Reverb } from './fx/reverb/Reverb.js';



let project;

if (main.newProject) {
    project = new Project();
    createAuxChannel('Aux 1 - Reverb');
    let fx = new Reverb;
    project.mixer.auxChannels[0].disconnectFx();
    project.mixer.auxChannels[0].insertFx.push(fx);
   
    project.mixer.auxChannels[0].insertFx[0].fx.wet.value = 1;
    project.mixer.auxChannels[0].insertFx[0].knobValueWet = 1;
    project.mixer.auxChannels[0].connectFx();
    project.mixer.auxChannels[0].output.connect(project.mixer.master.input);
    document.getElementById('newInstrumentDialog').style.display = 'block';
} else {

    // get project from database

}
console.log(project);
main.initApp();

export { project };