export function connectFx() {

    if (this.insertFx.length === 0) {
        this.input.connect(this.preFader);
    } else {
        this.input.connect(this.insertFx[0].input);

        for (let i = 0; i < this.insertFx.length; i++) {
            if (i === this.insertFx.length -1) {
                this.insertFx[i].output.connect(this.preFader);
            } else {
                this.insertFx[i].output.connect(this.insertFx[i + 1].input);
            }
        }
    }
}