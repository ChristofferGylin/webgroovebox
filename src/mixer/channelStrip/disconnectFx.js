export function disconnectFx() {
    
    
    if (this.insertFx.length === 0) {
        
        this.input.disconnect(this.preFader);
        
    } else {
        
        this.input.disconnect(this.insertFx[0].input);
        
        for (let i = 0; i < this.insertFx.length; i++) {
            
            if (i === this.insertFx.length -1) {
                
                this.insertFx[i].output.disconnect(this.preFader);
                
            } else {

                if (this.insertFx.length > 1) {

                    
                    this.insertFx[i].output.disconnect(this.insertFx[i + 1].input);
                    

                }
                
            }
        }
    }
}