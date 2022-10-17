import { project } from "../../index.js";
import { main } from "../../mainParameters/main.js";

export function pickColor() {

    let color = project.nextColor;
    project.nextColor++;

    if (project.nextColor >= main.colors.length) {
        project.nextColor = 0;
    }

    return color;

}