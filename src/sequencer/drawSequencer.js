import { mainInterface } from "../mainInterface/mainInterface.js";
import { project } from "../index.js";
import { instruments } from "../instruments/instruments.js";
import { sequencer } from "./sequencer.js";

export function drawSequencer() {
  let sequencerRoll = document.getElementById("sequencer");
  let baseCellWidth = 32;
  let baseCellHeight = 10;

  let rowWidth;
  let timeLineCellWidth;
  let timeLineBarWidth;

  // Draw the sequencer piano roll

  let numberOfCells;

  switch (project.instrumentsArray[project.activeInstrument].gridResolution) {
    case 8:
      numberOfCells =
        project.instrumentsArray[project.activeInstrument].patterns[
          project.instrumentsArray[project.activeInstrument].activePattern
        ][0][0] / 8;
      break;
    case 16:
      numberOfCells =
        project.instrumentsArray[project.activeInstrument].patterns[
          project.instrumentsArray[project.activeInstrument].activePattern
        ][0][0] / 4;
      break;

    case 32:
      numberOfCells =
        project.instrumentsArray[project.activeInstrument].patterns[
          project.instrumentsArray[project.activeInstrument].activePattern
        ][0][0] / 2;
      break;

    case 64:
      numberOfCells =
        project.instrumentsArray[project.activeInstrument].patterns[
          project.instrumentsArray[project.activeInstrument].activePattern
        ][0][0];
      break;
  }

  this.cellWidth =
    baseCellWidth *
      project.instrumentsArray[project.activeInstrument]
        .gridResolutionMultiplier *
      project.instrumentsArray[project.activeInstrument].zoomLevelX -
    1;
  this.cellHeight =
    baseCellHeight *
    project.instrumentsArray[project.activeInstrument].zoomLevelY;
  rowWidth = (this.cellWidth + 1) * numberOfCells;
  timeLineCellWidth =
    baseCellWidth *
    0.25 *
    project.instrumentsArray[project.activeInstrument].zoomLevelX;
  timeLineBarWidth = timeLineCellWidth * 16;
  let scrollContainerHeight;

  if (project.instrumentsArray[project.activeInstrument].type === "drums") {
    scrollContainerHeight = (this.cellHeight + 1) * 32 + 23;
  } else {
    scrollContainerHeight =
      (this.cellHeight + 1) * (project.octaves * project.notes.length) + 23;
  }

  if (scrollContainerHeight < 548) {
    scrollContainerHeight = 548;
  }

  this.html = `<div class="keyRollContainer"><div class="keyRollFiller"></div>`;
  let divClass;

  if (project.instrumentsArray[project.activeInstrument].type === "drums") {
    for (
      let i = 0;
      i <
        project.instrumentsArray[project.activeInstrument].kits[
          project.instrumentsArray[project.activeInstrument].activeKit
        ].drums.length || i < 32;
      i++
    ) {
      divClass = 'class="drumname"';

      if (
        i >=
        project.instrumentsArray[project.activeInstrument].kits[
          project.instrumentsArray[project.activeInstrument].activeKit
        ].drums.length
      ) {
        divClass = 'class="drumnameDummy"';
        this.html += `<div ${divClass} style="height:${
          this.cellHeight + 0.36
        }px"></div>`;
      } else {
        this.html += `<div ${divClass} style="height:${
          this.cellHeight + 0.36
        }px" data-note="${i}">${
          project.instrumentsArray[project.activeInstrument].kits[
            project.instrumentsArray[project.activeInstrument].activeKit
          ].drums[i][0]
        }</div>`;
      }
    }
  } else if (
    project.instrumentsArray[project.activeInstrument].type === "keys"
  ) {
    for (let octave = project.octaves; octave > 0; octave--) {
      for (let i = project.notes.length - 1; i >= 0; i--) {
        let note = project.notes[i];
        let isSharp = false;

        if (note.length > 1) {
          divClass = `class="rollBlacknote"`;
          isSharp = true;
        } else {
          divClass = `class="rollWhitenote"`;
        }

        this.html += `<div ${divClass} style="height:${
          this.cellHeight + 0.35
        }px" data-note="${note + octave}">`;
        if (note === "C") {
          this.html += `${note + octave}</div>`;
        } else {
          this.html += `</div>`;
        }
      }
    }
  }

  // Draw the sequencer cells

  this.html += `</div><div id="scrollContainer" class="scrollContainer" style="height:${scrollContainerHeight}px"><div class="cellContainer" style="width:${rowWidth}px"><div class="timeLineRow" style="width:${rowWidth}px">`;
  let timeLineCellIndex = 1;

  let barCounter = 0;
  let measureCounter = 1;
  let rulerCells = "";
  let pickerCells = "";
  let tempStepLength =
    project.instrumentsArray[project.activeInstrument].patterns[
      project.instrumentsArray[project.activeInstrument].activePattern
    ][0][0];

  for (let i = 1; i < tempStepLength + 1; i++) {
    if (i % 16 === 0 || i === 1) {
      if (i !== tempStepLength) {
        this.cellsHtml += `<div class="timeLineBar" style="width:${timeLineBarWidth}px">`;
        barCounter++;
        if (barCounter === 5) {
          measureCounter++;
          barCounter = 1;
        }

        rulerCells = `<div class="timeLineRuler">`;
        pickerCells = `<div class="timeLinePicker">`;
        for (let j = 1; j <= 16; j++) {
          if (j === 16) {
            rulerCells += `<div class="timeLineCell" id="timeLineRulerCell${timeLineCellIndex}" style="border-right:1px solid white; width:${
              timeLineCellWidth - 1
            }px"></div>`;
          } else if (j % 4 === 0 && j !== 16) {
            rulerCells += `<div class="timeLineCell" id="timeLineRulerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px"><div class="timeLineTickNote" style="width:${
              timeLineCellWidth - 1
            }px"></div></div>`;
          } else if (j % 2 === 0 && j !== 16) {
            rulerCells += `<div class="timeLineCell" id="timeLineRulerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px"><div class="timeLineTickHalf" style="width:${
              timeLineCellWidth - 1
            }px"></div></div>`;
          } else {
            rulerCells += `<div class="timeLineCell" id="timeLineRulerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px"></div>`;
          }

          if (j === 16) {
            pickerCells += `<div class="timeLinePickerCell" id="timeLinePickerCell${timeLineCellIndex}" style="border-right:1px solid white; width:${
              timeLineCellWidth - 1
            }px"></div>`;
          } else if (j === 1) {
            pickerCells += `<div class="timeLinePickerCell" id="timeLinePickerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px">${measureCounter}</div>`;
          } else if (j === 2) {
            pickerCells += `<div class="timeLinePickerCell" id="timeLinePickerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px">.</div>`;
          } else if (j === 3) {
            pickerCells += `<div class="timeLinePickerCell" id="timeLinePickerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px">${barCounter}</div>`;
          } else {
            pickerCells += `<div class="timeLineCell" id="timeLinePickerCell${timeLineCellIndex}" style="width:${timeLineCellWidth}px"></div>`;
          }

          timeLineCellIndex++;
        }

        this.cellsHtml += `${rulerCells}</div>${pickerCells}</div></div>`;
      }
    }
  }

  this.html += this.cellsHtml;
  this.cellsHtml = "";
  this.html += `</div>`;

  // Draw the sequencer grid

  let x1 = 0;
  let x2 = rowWidth;
  let y1 = 0;
  let y2 = scrollContainerHeight;
  let strokeWidth;
  let strokeColor;
  let horLineCount;

  // Horizontal lines

  if (project.instrumentsArray[project.activeInstrument].type === "drums") {
    if (
      project.instrumentsArray[project.activeInstrument].kits[
        project.instrumentsArray[project.activeInstrument].activeKit
      ].drums.length < 32
    ) {
      horLineCount = 32;
    } else {
      horLineCount =
        project.instrumentsArray[project.activeInstrument].kits[
          project.instrumentsArray[project.activeInstrument].activeKit
        ].drums.length;
    }
  } else if (
    project.instrumentsArray[project.activeInstrument].type === "keys"
  ) {
    horLineCount = project.octaves * project.notes.length;
  }

  for (let i = 0; i < horLineCount; i++) {
    if (i % 12 === 0) {
      strokeWidth = 0.5;
      strokeColor = "#949494";
    } else {
      strokeWidth = 0.5;
      strokeColor = "#646464";
    }

    y1 = (this.cellHeight + 1) * i;
    this.cellsHtml += `<line id="seqGridHorizontalLine.${i}" x1="${x1}" x2="${x2}" y1="${y1}" y2="${y1}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;
  }

  // Vertical lines

  let vertLineCount;
  let highlightLineMultiplier;
  y1 = 0;

  switch (project.instrumentsArray[project.activeInstrument].gridResolution) {
    case 8:
      vertLineCount = tempStepLength / 8;
      highlightLineMultiplier = 0.5;
      break;

    case 16:
      vertLineCount = tempStepLength / 4;
      highlightLineMultiplier = 1;
      break;

    case 32:
      vertLineCount = tempStepLength / 2;
      highlightLineMultiplier = 2;
      break;

    case 64:
      vertLineCount = tempStepLength;
      highlightLineMultiplier = 4;
      break;
  }

  y2 = (this.cellHeight + 1) * horLineCount;

  for (let i = 1; i <= vertLineCount; i++) {
    if (i % (4 * highlightLineMultiplier) === 0) {
      strokeWidth = 0.5;
      strokeColor = "#b3b1b1";
    } else {
      strokeWidth = 0.5;
      strokeColor = "#646464";
    }

    x1 = (this.cellWidth + 1) * i - 0.5;
    this.cellsHtml += `<line id="seqGridVerticalLine.${i}" x1="${x1}" x2="${x1}" y1="${y1}" y2="${y2}" stroke-width="${strokeWidth}" stroke="${strokeColor}" opacity="1" />`;
  }

  // Draw Cells

  if (project.instrumentsArray[project.activeInstrument].type === "drums") {
    for (
      let i = 0;
      i <
      project.instrumentsArray[project.activeInstrument].kits[
        project.instrumentsArray[project.activeInstrument].activeKit
      ].drums.length;
      i++
    ) {
      for (let j = tempStepLength; j > 0; j--) {
        this.drawCells(j, i);
      }
    }
  } else if (
    project.instrumentsArray[project.activeInstrument].type === "keys"
  ) {
    for (let o = 1; o <= project.octaves; o++) {
      for (let i = project.notes.length - 1; i >= 0; i--) {
        let note = project.notes[i];
        for (let j = tempStepLength; j > 0; j--) {
          this.drawCells(j, note, o);
        }
      }
    }
  }

  this.html += `<svg id="sequencerCellsSvg" width="${rowWidth}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${rowWidth} ${
    y2 - 1
  }"><rect x="0" y="0" width="${rowWidth}" height="${y2}" fill="#363636" />${
    this.cellsHtml
  }${this.activeCellsHtml}</svg>`;
  this.cellsHtml = "";
  this.activeCellsHtml = "";
  this.html += `</div></div>`;
  sequencerRoll.innerHTML = this.html;

  // Draw Automation Section

  let autoDownArrowSvg = mainInterface.downArrow.replace(
    /ReplaceName/g,
    `showAutomationIconSvg`
  );
  autoDownArrowSvg = autoDownArrowSvg.replace(/width="6"/g, `width="10"`);

  let automationCells = this.drawSequencerAutomation(
    rowWidth,
    tempStepLength,
    scrollContainerHeight
  );
  this.html = `<div class="sequencerAutomationSettings"><div class="sequencerAutomationTitle" id="sequencerAutomationToggle"><div class="showAutomationIcon" id="showAutomationIcon">${autoDownArrowSvg}</div><div>Auto.</div></div></div><div class="sequencerAutomationCells" id="sequencerAutomationCells"><div class="sequencerAutomationCellsContent" id="sequencerAutomationCellsContent"><div id="sequencerAutomationCellsDiv" class="sequencerAutomationSVGs"><svg id="sequencerAutomationCellsSvg" class="sequencerAutomationSVGs" width="${rowWidth}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${rowWidth} 110"><rect x="0" y="0" width="${rowWidth}" height="${110}" fill="#363636" />${automationCells}</svg></div><div id="sequencerAutomationLinesDiv" class="sequencerAutomationSVGs"></div><div id="sequencerAutomationPointsDiv" class="sequencerAutomationSVGs"></div></div></div>`;
  document.getElementById("automationContainer").innerHTML = this.html;

  this.drawAutomationLines();
  this.drawAutomationPoints();

  if (
    project.instrumentsArray[project.activeInstrument].automation
      .automationVisiblePattern === false
  ) {
    document.getElementById("sequencerAutomationCellsContent").className =
      "sequencerAutomationCellsContentHidden";
    document.getElementById("showAutomationIcon").style.transform =
      "rotate(-90deg)";
  }

  // Event Listeners

  let blacknotes = document.getElementsByClassName("rollBlacknote");

  for (let i = 0; i < blacknotes.length; i++) {
    blacknotes[i].addEventListener("mousedown", function (e) {
      instruments.noteDown(this);
      e.target.addEventListener("mouseup", function () {
        mouseUpEvent(this);
      });
      e.target.addEventListener("mouseleave", function () {
        mouseUpEvent(this);
      });
    });

    blacknotes[i].addEventListener("touchstart", function () {
      instruments.noteDown(blacknotes[i]);
    });

    blacknotes[i].addEventListener("touchend", function () {
      instruments.noteUp(blacknotes[i]);
    });

    blacknotes[i].addEventListener("touchleave", function () {
      instruments.noteUp(blacknotes[i]);
    });

    blacknotes[i].addEventListener("touchcancel", function () {
      instruments.noteUp(blacknotes[i]);
    });
  }

  let whitenotes = document.getElementsByClassName("rollWhitenote");

  for (let i = 0; i < whitenotes.length; i++) {
    whitenotes[i].addEventListener("mousedown", function (e) {
      instruments.noteDown(this);
      e.target.addEventListener("mouseup", function () {
        mouseUpEvent(this);
      });
      e.target.addEventListener("mouseleave", function () {
        mouseUpEvent(this);
      });
    });

    whitenotes[i].addEventListener("touchstart", function () {
      instruments.noteDown(blacknotes[i]);
    });

    whitenotes[i].addEventListener("touchend", function () {
      instruments.noteUp(blacknotes[i]);
    });

    whitenotes[i].addEventListener("touchleave", function () {
      instruments.noteUp(blacknotes[i]);
    });

    whitenotes[i].addEventListener("touchcancel", function () {
      instruments.noteUp(blacknotes[i]);
    });
  }

  let tempPickerCells = document.getElementsByClassName("timeLinePickerCell");

  for (let i = 0; i < tempPickerCells.length; i++) {
    tempPickerCells[i].addEventListener("mousedown", function () {
      this.timeLinePicker(tempPickerCells[i]);
    });
  }

  let tempDrums = document.getElementsByClassName("drumname");

  for (let i = 0; i < tempDrums.length; i++) {
    tempDrums[i].addEventListener("mousedown", function () {
      instruments.drumDown(tempDrums[i].dataset.note);
    });
  }

  let tempCells = document.getElementsByClassName("sequencerCell");
  let tempActiveCells = document.getElementsByClassName("sequencerCellActive");
  let tempAlienCells = document.getElementsByClassName(
    "sequencerCellActiveAlien"
  );
  let tempResizeCells = document.getElementsByClassName("sequencerCellResize");

  for (let i = 0; i < tempCells.length; i++) {
    tempCells[i].addEventListener("click", function (e) {
      sequencer.activate(this);
      e.preventDefault();
    });
  }

  for (let i = 0; i < tempActiveCells.length; i++) {
    tempActiveCells[i].addEventListener("click", function (e) {
      sequencer.activate(this);
      e.preventDefault();
    });
  }

  for (let i = 0; i < tempAlienCells.length; i++) {
    tempAlienCells[i].addEventListener("click", function (e) {
      sequencer.activate(this);
      e.preventDefault();
    });
  }

  for (let i = 0; i < tempResizeCells.length; i++) {
    tempResizeCells[i].addEventListener("mousedown", function (e) {
      sequencer.resizeNote(e);
      e.preventDefault();
    });
  }

  document
    .getElementById("sequencerAutomationCells")
    .addEventListener("scroll", function (e) {
      document.getElementById("scrollContainer").scrollLeft =
        e.target.scrollLeft;
    });

  document
    .getElementById("sequencerAutomationToggle")
    .addEventListener("mouseup", function () {
      if (
        project.instrumentsArray[project.activeInstrument].automation
          .automationVisiblePattern
      ) {
        project.instrumentsArray[
          project.activeInstrument
        ].automation.automationVisiblePattern = false;
        document.getElementById("sequencerAutomationCellsContent").className =
          "sequencerAutomationCellsContentHidden";
        document.getElementById("showAutomationIcon").style.transform =
          "rotate(-90deg)";
      } else {
        project.instrumentsArray[
          project.activeInstrument
        ].automation.automationVisiblePattern = true;
        document.getElementById("sequencerAutomationCellsContent").className =
          "sequencerAutomationCellsContent";
        document.getElementById("showAutomationIcon").style.transform =
          "rotate(0)";
      }
    });

  function mouseUpEvent(elem) {
    instruments.noteUp(elem);
    elem.removeEventListener("mouseup", function () {
      mouseUpEvent(this);
    });
    elem.removeEventListener("mouseleave", function () {
      mouseUpEvent(this);
    });
  }
}
