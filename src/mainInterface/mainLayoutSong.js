export let mainLayoutSong = ` <div class="patternControlsContainer"><div class="patternControls">

<div class="controlsInnerContainerBpm">
    <div class="controlTitle">BPM</div>
    <div class="controlsInnerContainerFlexRow">
        <div class="controlCellMinus" id="bpmMinus"></div>
        <div class="bpmValue" id="bpmValue">120</div>
        <div class="controlCellPlus" id="bpmPlus"></div>
    </div>
</div>

<div class="controlsInnerContainerTransport">
    <div class="transportWindow" id="transportWindow">
        <div class="currentTimeValue" id="currentTimeValue">00.00.00</div>
    </div>
    <div class="transportButtonsFlexBox">
        <div class="rewindButton" id="rewindButton"></div>
        <div class="playButton" id="playButton"></div>
        <div class="recordButton" id="recordButton"></div>
    </div>
</div>

<div class="controlsInnerContainerMode">
    <div class="controlTitle">MODE</div>
    <div class="controlCellPatternActive" id="patternMode"></div>
    <div class="controlCellSong" id="songMode"></div>
    <div class="controlCellMixer" id="mixerMode"></div>
</div>

<div id="exportButtonSong" class="exportButton">Export</div>

</div>
</div>

<div class="songModeInnerContainer" id="songModeInnerContainer">
<div class="songModeContainerSpacer" id="songModeContainerLeft">

</div>

<div class="mainInnerContainerMiddle">
<div class="songModeContainer" id="songModeContainer">
    
    Nothing here yet. Coming soonish.
</div>
</div>
<div class="songModeContainerSpacer"></div>
<div class="songModeContainerSpacer"></div>
<div class="songModeContainerPatterns" id="songModeContainerPatterns"></div> 
<div class="songModeContainerSpacer"></div>
<div class="songModeContainerSpacer"></div>
<div class="songModeContainerSpacer"></div>
<div class="songModeContainerSpacer"></div>
</div>`;