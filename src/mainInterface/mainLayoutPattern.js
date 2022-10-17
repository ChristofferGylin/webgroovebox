export let mainLayoutPattern = ` <div class="patternControlsContainer"><div class="patternControls">

<div class="controlsInnerContainerBpm">
    <div class="controlTitle">BPM</div>
    <div class="controlsInnerContainerFlexRow">
        <div class="controlCellMinus" id="bpmMinus"></div>
        <div class="bpmValue" id="bpmValue">120</div>
        <div class="controlCellPlus" id="bpmPlus"></div>
    </div>
</div>

<div class="controlsContainerInstrumentTrack">
    <div class="controlTitle">INSTRUMENT TRACK</div>
    <div class="dropdownMenu" id="instrumentsDropdown">
        <div class="dropdownCurrent" id="instrumentsDropdownCurrent">
            <div class="dropdownCurrentText" id="instrumentsDropdownCurrentText">---</div>
            <div id="dropdownDownArrow">
                <svg id="instrumentsDropdown.DownArrow.svg" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 100 90">

                <rect id="instrumentsDropdown.DownArrow.Background" width="100" height="90" fill="black" opacity="0"/>
                
                  <g id="instrumentsDropdown.DownArrow.Arrow">
                     
                    <line id="instrumentsDropdown.DownArrow.Arrow2" x1="55.304" y1="69.749" x2="5.806" y2="20.251" fill="none" stroke="#ededed" stroke-miterlimit="10" stroke-width="15"/>   
                    <line id="instrumentsDropdown.DownArrow.Arrow1" x1="44.696" y1="69.749" x2="94.194" y2="20.251" fill="none" stroke="#ededed" stroke-miterlimit="10" stroke-width="15"/>
                     
                  </g>
                </svg>
            </div>
        </div>
        
        <div class="dropDownList" id="instrumentsDropdownList"></div>
    </div>

    <div class="addNewInstrumentButton" id="addNewInstrumentButton"></div>
</div>

<div class="controlsContainerPattern">
    <div class="controlTitle">PATTERN</div>
    <div class="dropdownMenu" id="patternsDropdown">
        <div class="dropdownCurrent" id="patternsDropdownCurrent">
            <div class="dropdownCurrentText" id="patternsDropdownCurrentText">---</div>
            <div id="patternsDropdownDownArrow">
                <svg id="patternsDropdown.DownArrow.svg" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 100 90">

                <rect id="patternsDropdown.DownArrow.Background" width="100" height="90" fill="black" opacity="0"/>
                
                  <g id="patternsDropdown.DownArrow.Arrow">
                     
                    <line id="patternsDropdown.DownArrow.Arrow2" x1="55.304" y1="69.749" x2="5.806" y2="20.251" fill="none" stroke="#ededed" stroke-miterlimit="10" stroke-width="15"/>   
                    <line id="patternsDropdown.DownArrow.Arrow1" x1="44.696" y1="69.749" x2="94.194" y2="20.251" fill="none" stroke="#ededed" stroke-miterlimit="10" stroke-width="15"/>
                     
                  </g>
                </svg>
            </div>
        </div>
        <div class="dropDownList" id="patternsDropdownList"></div>
    </div>

    <div class="addNewPatternButton" id="addNewPatternButton"></div>
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
<div class="controlsContainerGrid">
    <div class="controlTitle">GRID RESOLUTION</div>
    <div class="controlsInnerContainerGrid">
        <div class="controlCell8th" id="controlCell8th"></div>
        <div class="controlCell16thActive" id="controlCell16th"></div>
        <div class="controlCell32th" id="controlCell32th"></div>
        <div class="controlCell64th" id="controlCell64th"></div>
    </div>
</div>


<div class="controlsInnerContainerBars">
    <div class="controlTitle">PATTERN LENGTH</div>
    <div class="controlsInnerContainerFlexRow">
        <div class="controlCellMinus" id="lessBars"></div>
        <div class="barValue" id="patternLengthValue">1 Bar</div>
        <div class="controlCellPlus" id="moreBars"></div>
    </div>
    <div class="controlCellDouble" id="doubleBars"></div>
</div>

<div class="controlsInnerContainerMode">
    <div class="controlTitle">MODE</div>
    <div class="controlCellPatternActive" id="patternMode"></div>
    <div class="controlCellSong" id="songMode"></div>
    <div class="controlCellMixer" id="mixerMode"></div>
</div>

</div>
</div>
<div class="mainInnerContainer" id="mainInnerContainer">
<div class="mainInnerContainerSide" id="mainInnerContainerLeft">

</div>

<div class="mainInnerContainerMiddle">
    <div class="sequencerContainer" id="sequencerContainer">

        <div id="sequencer"></div>

    </div>

    <div class="instrumentContainer" id="instrumentContainer">

        <div id="instrument"></div>

    </div>

</div>

<div class="mainInnerContainerSide" id="mainInnerContainerRight"></div>

</div>`;