export function drawSeqResetScroll() {

    let scrollContainer = document.getElementById('scrollContainer');
        let scrollPositionLeft = scrollContainer.scrollLeft;
        let scrollPositionTop = scrollContainer.scrollTop;
        this.drawSequencer();
        scrollContainer = document.getElementById('scrollContainer');
        scrollContainer.scrollLeft = scrollPositionLeft;
        scrollContainer.scrollTop = scrollPositionTop;

}