import { dialogBoxes } from '../dialogBoxes/dialogBoxes.js';
import { mixer } from './mixer.js';
import { project } from '../index.js';
import { mainInterface } from '../mainInterface/mainInterface.js';
import { factoryPresets } from '../instruments/gNo/components/gNoFactoryPresets.js';

export function drawChannelStripMaster() {

    let target = document.getElementById('mainInnerContainerRight');
    let svgHtml = `<svg id="channelStripMaster" width="130" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 79.027 267.718">
    <defs> 
      <linearGradient id="channelStripMasterLinearGradient" x1="17.001" y1="64.834" x2="17.001" y2="0.796" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff"/>
        <stop offset="1" stop-color="#b7c6ce"/>
      </linearGradient> 
      <linearGradient id="channelStripMasterGradientSwatch20" data-name="New Gradient Swatch 20" x1="43.554" y1="262.468" x2="53.554" y2="262.468" gradientUnits="userSpaceOnUse">
        <stop offset="0.017" stop-color="#404040"/>
        <stop offset="1" stop-color="#141414"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch20-2" x1="29.554" y1="262.468" x2="39.554" y2="262.468" xlink:href="#channelStripMasterGradientSwatch20"/>
      <linearGradient id="channelStripMasterGradientSwatch1" data-name="New Gradient Swatch 1" x1="55.554" y1="153.875" x2="55.554" y2="245.875" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#f70000"/>
        <stop offset="0.016" stop-color="#f70500"/>
        <stop offset="0.037" stop-color="#f81500"/>
        <stop offset="0.059" stop-color="#f82f00"/>
        <stop offset="0.084" stop-color="#fa5300"/>
        <stop offset="0.11" stop-color="#fb8200"/>
        <stop offset="0.137" stop-color="#fdba00"/>
        <stop offset="0.164" stop-color="#fffc00"/>
        <stop offset="0.165" stop-color="#ff0"/>
        <stop offset="0.265" stop-color="#f4e600"/>
        <stop offset="0.461" stop-color="#008b13"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch1-2" x1="59.554" x2="59.554" xlink:href="#channelStripMasterGradientSwatch1"/>
      <linearGradient id="channelStripMasterLinearGradient-2" x1="25.554" y1="237.948" x2="25.554" y2="253.002" gradientUnits="userSpaceOnUse">
        <stop offset="0.005" stop-color="#f5f5f5"/>
        <stop offset="0.069" stop-color="#777776"/>
        <stop offset="0.118" stop-color="#999998"/>
        <stop offset="0.172" stop-color="#b6b6b6"/>
        <stop offset="0.23" stop-color="#cdcdcd"/>
        <stop offset="0.292" stop-color="#ddd"/>
        <stop offset="0.36" stop-color="#e7e7e7"/>
        <stop offset="0.449" stop-color="#eaeaea"/>
        <stop offset="0.781" stop-color="#eaeaea"/>
        <stop offset="0.802" stop-color="#e5e5e5"/>
        <stop offset="0.827" stop-color="#d6d6d6"/>
        <stop offset="0.855" stop-color="#bebebe"/>
        <stop offset="0.885" stop-color="#9b9b9b"/>
        <stop offset="0.916" stop-color="#707070"/>
        <stop offset="0.919" stop-color="#6b6b6b"/>
        <stop offset="0.923" stop-color="#767676"/>
        <stop offset="0.941" stop-color="#a4a4a4"/>
        <stop offset="0.958" stop-color="#c8c8c8"/>
        <stop offset="0.974" stop-color="#e2e2e2"/>
        <stop offset="0.989" stop-color="#f2f2f2"/>
        <stop offset="1" stop-color="#f7f7f7"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch11" data-name="New Gradient Swatch 11" x1="33.308" y1="33.472" x2="45.507" y2="44.386" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#545454"/>
        <stop offset="1"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch9" data-name="New Gradient Swatch 9" x1="31.336" y1="33.515" x2="49.242" y2="45.214" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#2e2e2e"/>
        <stop offset="1"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch9-2" x1="32.291" y1="39.024" x2="46.737" y2="39.024" xlink:href="#channelStripMasterGradientSwatch9"/>
      <linearGradient id="channelStripMasterGradientSwatch8" data-name="New Gradient Swatch 8" x1="36.93" y1="34.342" x2="42.333" y2="44.134" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#474747"/>
        <stop offset="1"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch7" data-name="New Gradient Swatch 7" x1="34.761" y1="37.583" x2="52.168" y2="42.862" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#2b2b2b"/>
        <stop offset="0.255" stop-color="#181818"/>
        <stop offset="0.52"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch6" data-name="New Gradient Swatch 6" x1="39.848" y1="33.622" x2="40.062" y2="44.251" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#1a1a1a"/>
        <stop offset="0.421" stop-color="#070707"/>
        <stop offset="0.52" stop-color="#020202"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch5" data-name="New Gradient Swatch 5" x1="36.401" y1="34.07" x2="43.41" y2="44.075" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d6d6d6" stop-opacity="0.7"/>
        <stop offset="1"/>
      </linearGradient>
      <linearGradient id="channelStripMasterGradientSwatch9-3" x1="-10.397" y1="-64.984" x2="4.049" y2="-64.984" gradientTransform="translate(83.22 -9.171) rotate(-135)" xlink:href="#channelStripMasterGradientSwatch9"/>
      <radialGradient id="channelStripMasterGradientSwatch4" data-name="New Gradient Swatch 4" cx="-3.174" cy="-68.837" r="0.704" gradientTransform="translate(83.22 -9.171) rotate(-135)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff"/>
        <stop offset="0.257" stop-color="#5cff62"/>
      </radialGradient>
      <linearGradient id="channelStripMasterLinearGradient-3" x1="0.5" y1="96.625" x2="78.527" y2="96.625" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#292929"/>
        <stop offset="0.002" stop-color="#2e2e2e"/>
        <stop offset="0.016" stop-color="#444"/>
        <stop offset="0.032" stop-color="#555"/>
        <stop offset="0.051" stop-color="#606060"/>
        <stop offset="0.079" stop-color="#676767"/>
        <stop offset="0.155" stop-color="#696969"/>
        <stop offset="0.757" stop-color="#696969"/>
        <stop offset="0.856" stop-color="#696969"/>
        <stop offset="0.927" stop-color="#676767"/>
        <stop offset="0.952" stop-color="#606060"/>
        <stop offset="0.97" stop-color="#555"/>
        <stop offset="0.985" stop-color="#444"/>
        <stop offset="0.998" stop-color="#2e2e2e"/>
        <stop offset="1" stop-color="#292929"/>
      </linearGradient>
      <linearGradient id="channelStripMasterLinearGradient-4" x1="1.004" y1="81.875" x2="78.024" y2="81.875" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#292929"/>
        <stop offset="0.008" stop-color="#2e2e2e"/>
        <stop offset="0.052" stop-color="#444"/>
        <stop offset="0.104" stop-color="#555"/>
        <stop offset="0.168" stop-color="#606060"/>
        <stop offset="0.258" stop-color="#676767"/>
        <stop offset="0.508" stop-color="#696969"/>
        <stop offset="0.75" stop-color="#676767"/>
        <stop offset="0.837" stop-color="#606060"/>
        <stop offset="0.899" stop-color="#555"/>
        <stop offset="0.95" stop-color="#444"/>
        <stop offset="0.992" stop-color="#2e2e2e"/>
        <stop offset="1" stop-color="#292929"/>
      </linearGradient>
      <linearGradient id="channelStripMasterLinearGradient-5" x1="11.108" y1="88.375" x2="67.919" y2="88.375" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#666"/>
        <stop offset="0.01" stop-color="#747474"/>
        <stop offset="0.026" stop-color="#858585"/>
        <stop offset="0.046" stop-color="#909090"/>
        <stop offset="0.075" stop-color="#979797"/>
        <stop offset="0.155" stop-color="#999"/>
        <stop offset="0.752" stop-color="#999"/>
        <stop offset="0.85" stop-color="#999"/>
        <stop offset="0.927" stop-color="#979797"/>
        <stop offset="0.955" stop-color="#909090"/>
        <stop offset="0.975" stop-color="#858585"/>
        <stop offset="0.991" stop-color="#747474"/>
        <stop offset="1" stop-color="#666"/>
      </linearGradient>
      <symbol id="Save_-_Grey" data-name="Save - Grey" viewBox="0 0 33.001 33.001">
        <path d="M27.62,1H1V33H33V6.239ZM21.288,4.5v8.857h-3.5V4.5Zm8.213,25H4.5V4.5h4.43V16.859H24.788V4.5H26.2l3.3,3.217Z" opacity="0.8" fill="url(#channelStripMasterLinearGradient)" style="mix-blend-mode: multiply"/>
        <path d="M26.619,0H0V32H32V5.238ZM20.287,3.5v8.857h-3.5V3.5Zm8.213,25H3.5V3.5H7.93V15.858H23.787V3.5H25.2l3.3,3.217Z" fill="#f4f2f2"/>
      </symbol>
    </defs>
    <g id="channelStripMaster.save">
      <rect id="channelStripMaster.saveButton" x="43.554" y="257.468" width="10" height="10" rx="1.144" stroke="#0f0f0f" stroke-miterlimit="10" stroke-width="0.5" fill="url(#channelStripMasterGradientSwatch20)"/>
      <use id="channelStripMaster.saveIcon" width="33.001" height="33.001" transform="translate(45.281 259.012) scale(0.2)" xlink:href="#Save_-_Grey"/>
    </g>
    <g id="channelStripMaster.mute">
      <rect id="channelStripMaster.muteButton" x="29.554" y="257.468" width="10" height="10" rx="1.144" stroke="#0f0f0f" stroke-miterlimit="10" stroke-width="0.5" fill="url(#channelStripMasterGradientSwatch20-2)"/>     
        <path id="channelStripMaster.muteText" d="M38.435,265.847a.119.119,0,0,1-.02.068.139.139,0,0,1-.07.047.98.98,0,0,1-.129.029,1.389,1.389,0,0,1-.2.012,1.416,1.416,0,0,1-.2-.012.855.855,0,0,1-.131-.029.137.137,0,0,1-.068-.047.119.119,0,0,1-.02-.068v-5.5h-.01l-2.226,5.527a.177.177,0,0,1-.042.059.235.235,0,0,1-.078.042.6.6,0,0,1-.122.023,1.369,1.369,0,0,1-.168.008,1.268,1.268,0,0,1-.176-.01.621.621,0,0,1-.122-.027.216.216,0,0,1-.076-.041.122.122,0,0,1-.036-.054l-2.129-5.527h0v5.5a.119.119,0,0,1-.02.068.138.138,0,0,1-.071.047.928.928,0,0,1-.13.029,1.453,1.453,0,0,1-.206.012,1.412,1.412,0,0,1-.2-.012.861.861,0,0,1-.128-.029.116.116,0,0,1-.065-.047.125.125,0,0,1-.018-.068v-5.811a.355.355,0,0,1,.109-.293.382.382,0,0,1,.243-.088h.516a1.135,1.135,0,0,1,.277.03.589.589,0,0,1,.208.092.535.535,0,0,1,.149.161,1.114,1.114,0,0,1,.1.23l1.807,4.575H35l1.88-4.56a1.317,1.317,0,0,1,.119-.249.606.606,0,0,1,.142-.163.45.45,0,0,1,.171-.088.754.754,0,0,1,.218-.028h.541a.467.467,0,0,1,.141.022.308.308,0,0,1,.115.068.364.364,0,0,1,.076.117.452.452,0,0,1,.03.174Z" transform="translate(-0.446 -0.125)" fill="#efefef"/>
    </g>
    <g id="channelStripMaster.vuMeter">
      <rect id="channelStripMaster.vuMeterL" x="54.054" y="153.875" width="3" height="92" opacity="0.95" fill="url(#channelStripMasterGradientSwatch1)"/>
      <rect id="channelStripMaster.vuMeterR" x="58.054" y="153.875" width="3" height="92" opacity="0.95" fill="url(#channelStripMasterGradientSwatch1-2)"/>
    </g>
    <g id="channelStripMaster.vuMeterCover">
      <rect id="channelStripMaster.vuMeterCoverL" x="54.054" y="153.875" width="3" height="92" opacity="0.8"/>
      <rect id="channelStripMaster.vuMeterCoverR" x="58.054" y="153.875" width="3" height="92" opacity="0.8"/>
    </g>
    <g id="channelStripMaster.vuMeterSettings">
      
    <foreignObject x="62.791" y="225.941" width="15" height="9">
    <div id="channelStripMasterVuPeakSettingText" class="channelStripMasterSettingText" xmlns=http://www.w3.org/1999/xhtml">
    Peak
    </div>
    </foreignObject>

    <foreignObject x="62.791" y="236.875" width="15" height="9">
    <div id="channelStripMasterProPostSettingText" class="channelStripMasterSettingText" xmlns=http://www.w3.org/1999/xhtml">
    Post
    </div>
    </foreignObject>

    </g>
    <g id="channelStripMaster.vuMeterScale">
      <line id="channelStripMaster.vuMeterScale.Line.51" x1="50.848" y1="245.56" x2="52.848" y2="245.56" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.50" x1="51.528" y1="243.739" x2="52.848" y2="243.739" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.49" x1="51.528" y1="241.918" x2="52.848" y2="241.918" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.48" x1="51.528" y1="238.276" x2="52.848" y2="238.276" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.47" x1="51.528" y1="240.097" x2="52.848" y2="240.097" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.46" x1="51.528" y1="234.633" x2="52.848" y2="234.633" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.45" x1="51.528" y1="232.812" x2="52.848" y2="232.812" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.44" x1="51.528" y1="229.17" x2="52.848" y2="229.17" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.43" x1="51.528" y1="230.991" x2="52.848" y2="230.991" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.42" x1="51.528" y1="225.528" x2="52.848" y2="225.528" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.41" x1="51.528" y1="223.707" x2="52.848" y2="223.707" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.40" x1="51.528" y1="220.065" x2="52.848" y2="220.065" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.39" x1="51.528" y1="221.886" x2="52.848" y2="221.886" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.38" x1="51.528" y1="216.422" x2="52.848" y2="216.422" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.37" x1="51.528" y1="214.601" x2="52.848" y2="214.601" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.36" x1="51.528" y1="210.959" x2="52.848" y2="210.959" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.35" x1="51.528" y1="212.78" x2="52.848" y2="212.78" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.34" x1="51.528" y1="207.317" x2="52.848" y2="207.317" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.33" x1="51.528" y1="205.496" x2="52.848" y2="205.496" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.32" x1="51.528" y1="201.854" x2="52.848" y2="201.854" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.31" x1="51.528" y1="203.675" x2="52.848" y2="203.675" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.30" x1="51.528" y1="198.211" x2="52.848" y2="198.211" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.29" x1="51.528" y1="196.39" x2="52.848" y2="196.39" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.28" x1="51.528" y1="192.748" x2="52.848" y2="192.748" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.27" x1="51.528" y1="194.569" x2="52.848" y2="194.569" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.26" x1="51.528" y1="189.106" x2="52.848" y2="189.106" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.25" x1="51.528" y1="187.285" x2="52.848" y2="187.285" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.24" x1="51.528" y1="183.643" x2="52.848" y2="183.643" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.23" x1="51.528" y1="185.464" x2="52.848" y2="185.464" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.22" x1="51.528" y1="180" x2="52.848" y2="180" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.21" x1="51.528" y1="178.179" x2="52.848" y2="178.179" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.20" x1="51.528" y1="174.537" x2="52.848" y2="174.537" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.19" x1="51.528" y1="176.358" x2="52.848" y2="176.358" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.18" x1="51.528" y1="170.895" x2="52.848" y2="170.895" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.17" x1="51.528" y1="169.074" x2="52.848" y2="169.074" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.16" x1="51.528" y1="165.432" x2="52.848" y2="165.432" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.15" x1="51.528" y1="167.253" x2="52.848" y2="167.253" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.14" x1="51.528" y1="161.79" x2="52.848" y2="161.79" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.13" x1="51.528" y1="159.968" x2="52.848" y2="159.968" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.12" x1="51.528" y1="156.326" x2="52.848" y2="156.326" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.11" x1="51.528" y1="158.147" x2="52.848" y2="158.147" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.vuMeterScale.Line.10" x1="50.848" y1="236.454" x2="52.848" y2="236.454" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.9" x1="50.848" y1="227.349" x2="52.848" y2="227.349" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.8" x1="50.848" y1="218.243" x2="52.848" y2="218.243" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.7" x1="50.848" y1="209.138" x2="52.848" y2="209.138" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.6" x1="50.848" y1="200.033" x2="52.848" y2="200.033" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.5" x1="50.848" y1="190.927" x2="52.848" y2="190.927" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.4" x1="50.848" y1="181.822" x2="52.848" y2="181.822" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.3" x1="50.848" y1="172.716" x2="52.848" y2="172.716" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.2" x1="50.848" y1="163.611" x2="52.848" y2="163.611" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.vuMeterScale.Line.1" x1="50.848" y1="154.505" x2="52.848" y2="154.505" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    </g>
    <g id="channelStripMaster.sliderValue">
      <foreignObject x="15.554" y="129.509" width="20" height="13">
        <div id="channelStripMaster.sliderValueBox" class="channelStripValueBox" xmlns="http://www.w3.org/1999/xhtml"></div>
      </foreignObject>
    
    </g>
    <g id="channelStripMaster.vuMeterValue">
    <foreignObject x="47.554" y="129.51" width="20" height="13">
        <div id="channelStripMaster.vuMeterValueBox" class="channelStripValueBox" xmlns="http://www.w3.org/1999/xhtml"></div>
      </foreignObject>
  
    </g>
    <g id="channelStripMaster.slider">
      <line id="channelStripMaster.lineSmall.40" x1="19.179" y1="243.739" x2="24.578" y2="243.739" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.39" x1="19.179" y1="241.918" x2="24.578" y2="241.918" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.38" x1="19.179" y1="238.276" x2="24.578" y2="238.276" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.37" x1="19.179" y1="240.097" x2="24.578" y2="240.097" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.36" x1="19.179" y1="234.633" x2="24.578" y2="234.633" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.35" x1="19.179" y1="232.812" x2="24.578" y2="232.812" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.34" x1="19.179" y1="229.17" x2="24.578" y2="229.17" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.33" x1="19.179" y1="230.991" x2="24.578" y2="230.991" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.32" x1="19.179" y1="225.528" x2="24.578" y2="225.528" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.31" x1="19.179" y1="223.707" x2="24.578" y2="223.707" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.30" x1="19.179" y1="220.065" x2="24.578" y2="220.065" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.29" x1="19.179" y1="221.886" x2="24.578" y2="221.886" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.28" x1="19.179" y1="216.422" x2="24.578" y2="216.422" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.27" x1="19.179" y1="214.601" x2="24.578" y2="214.601" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.26" x1="19.179" y1="210.959" x2="24.578" y2="210.959" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.25" x1="19.179" y1="212.78" x2="24.578" y2="212.78" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.24" x1="19.179" y1="207.317" x2="24.578" y2="207.317" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.23" x1="19.179" y1="205.496" x2="24.578" y2="205.496" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.22" x1="19.179" y1="201.854" x2="24.578" y2="201.854" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.21" x1="19.179" y1="203.675" x2="24.578" y2="203.675" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.20" x1="19.179" y1="198.211" x2="24.578" y2="198.211" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.19" x1="19.179" y1="196.39" x2="24.578" y2="196.39" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.18" x1="19.179" y1="192.748" x2="24.578" y2="192.748" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.17" x1="19.179" y1="194.569" x2="24.578" y2="194.569" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.16" x1="19.179" y1="189.106" x2="24.578" y2="189.106" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.15" x1="19.179" y1="187.285" x2="24.578" y2="187.285" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.14" x1="19.179" y1="183.643" x2="24.578" y2="183.643" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.13" x1="19.179" y1="185.464" x2="24.578" y2="185.464" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.12" x1="19.179" y1="180" x2="24.578" y2="180" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.11" x1="19.179" y1="178.179" x2="24.578" y2="178.179" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.10" x1="19.179" y1="174.537" x2="24.578" y2="174.537" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.9" x1="19.179" y1="176.358" x2="24.578" y2="176.358" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.8" x1="19.179" y1="170.895" x2="24.578" y2="170.895" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.7" x1="19.179" y1="169.074" x2="24.578" y2="169.074" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.6" x1="19.179" y1="165.432" x2="24.578" y2="165.432" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.5" x1="19.179" y1="167.253" x2="24.578" y2="167.253" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.4" x1="19.179" y1="161.79" x2="24.578" y2="161.79" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.3" x1="19.179" y1="159.968" x2="24.578" y2="159.968" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.2" x1="19.179" y1="156.326" x2="24.578" y2="156.326" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineSmall.1" x1="19.179" y1="158.147" x2="24.578" y2="158.147" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      <line id="channelStripMaster.lineBig.11" x1="15.679" y1="245.56" x2="25.679" y2="245.56" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.10" x1="15.679" y1="236.454" x2="25.679" y2="236.454" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.9" x1="15.679" y1="227.349" x2="25.679" y2="227.349" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.8" x1="15.679" y1="218.243" x2="25.679" y2="218.243" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.7" x1="15.679" y1="209.138" x2="25.679" y2="209.138" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.6" x1="15.679" y1="200.033" x2="25.679" y2="200.033" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.5" x1="15.679" y1="190.927" x2="25.679" y2="190.927" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.4" x1="15.679" y1="181.822" x2="25.679" y2="181.822" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.3" x1="15.679" y1="172.716" x2="25.679" y2="172.716" fill="none" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round"/>
      <line id="channelStripMaster.lineBig.2" x1="15.679" y1="163.611" x2="25.679" y2="163.611" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.lineBig.1" x1="15.679" y1="154.505" x2="25.679" y2="154.505" fill="none" stroke="#bfbfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
      <line id="channelStripMaster.sliderPath" x1="25.554" y1="154.505" x2="25.554" y2="245.447" fill="#fff" stroke="#282828" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
    <g id="channelStripMaster.sliderThumb" class="draggable">
      <rect id="channelStripMaster.sliderThumbBackground" class="draggable" x="20.973" y="237.948" width="9.163" height="15.054" rx="2" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" fill="url(#channelStripMasterLinearGradient-2)"/>
      <line id="channelStripMaster.sliderThumbLine" class="draggable" x1="21.136" y1="245.475" x2="29.972" y2="245.475" fill="none" stroke="#7a7a7a" stroke-linejoin="round"/>
    </g>
    <g id="channelStripMaster.knobPan">
      <circle id="channelStripMaster.knobPan.Background" class="turnable" cx="39.514" cy="39.024" r="9.149" fill="url(#channelStripMasterGradientSwatch11)"/>
      <path id="channelStripMaster.knobPan.OuterRing" class="turnable" d="M39.959,30a9.149,9.149,0,1,0,9.15,9.149A9.149,9.149,0,0,0,39.959,30Zm0,18.25a9.1,9.1,0,1,1,9.1-9.1A9.111,9.111,0,0,1,39.959,48.25Z" transform="translate(-0.446 -0.125)" fill="url(#channelStripMasterGradientSwatch9)"/>
      <circle id="channelStripMaster.knobPan.Shadow" class="turnable" cx="39.514" cy="39.024" r="7.223" fill="url(#channelStripMasterGradientSwatch9-2)"/>
      <circle id="channelStripMaster.knobPan.TopBevel" class="turnable" cx="39.514" cy="39.024" r="6.838" fill="url(#channelStripMasterGradientSwatch8)"/>
      <circle id="channelStripMaster.knobPan.Top" class="turnable" cx="39.514" cy="39.024" r="5.778" fill="url(#channelStripMasterGradientSwatch7)"/>
      <path id="channelStripMaster.knobPan.TopBevelInnerRing" class="turnable" d="M39.959,33.371a5.779,5.779,0,1,0,5.779,5.778A5.785,5.785,0,0,0,39.959,33.371Zm0,11.46a5.682,5.682,0,1,1,5.682-5.682A5.689,5.689,0,0,1,39.959,44.831Z" transform="translate(-0.446 -0.125)" fill="url(#channelStripMasterGradientSwatch6)"/>
      <path id="channelStripMaster.knobPan.TopBevelOuterRing" class="turnable" d="M39.959,32.311A6.838,6.838,0,1,0,46.8,39.149,6.846,6.846,0,0,0,39.959,32.311Zm0,13.58A6.742,6.742,0,1,1,46.7,39.149,6.749,6.749,0,0,1,39.959,45.891Z" transform="translate(-0.446 -0.125)" opacity="0.67" fill="url(#channelStripMasterGradientSwatch5)"/>
      <g id="channelStripMaster.knobPan.RotateThis" class="turnable">
        <circle id="channelStripMaster.knobPan.RotateThis.RotateFrame" class="turnable" cx="39.514" cy="39.024" r="7.223" opacity="0" fill="url(#channelStripMasterGradientSwatch9-3)"/>
        <circle id="channelStripMaster.knobPan.RotateThis.Dot" class="turnable" cx="36.79" cy="41.748" r="0.704" fill="url(#channelStripMasterGradientSwatch4)"/>
      </g>
      <path id="channelStripMaster.knobPanLightRingBackground" d="M50.9,39.15a10.894,10.894,0,0,1-3.04,7.55l-1.27-1.28a9.14,9.14,0,1,0-13.26,0L32.06,46.7A10.935,10.935,0,1,1,50.9,39.15Z" transform="translate(-0.446 -0.125)" fill="#5e8a5e"/>
      <circle id="channelStripMaster.knobPanLightRing" class="statusRingPlusMinus" cx="39.514" cy="39.024" r="10.041" fill="none" stroke="#45ff6c" stroke-miterlimit="10" stroke-width="1.8"/>
    </g>
    <g id="channelStripMaster.panText">
      <g id="channelStripMaster.panText0">
        <path d="M37.184,18.441a2.229,2.229,0,0,1-.156.854,1.8,1.8,0,0,1-.447.65,2,2,0,0,1-.713.415,3.081,3.081,0,0,1-1.008.146h-.718v2.276a.107.107,0,0,1-.022.068.139.139,0,0,1-.068.046.682.682,0,0,1-.127.03,1.417,1.417,0,0,1-.2.012,1.4,1.4,0,0,1-.2-.012.768.768,0,0,1-.13-.03.123.123,0,0,1-.068-.046.119.119,0,0,1-.02-.068v-5.83a.338.338,0,0,1,.1-.279.357.357,0,0,1,.229-.083h1.353c.137,0,.267.006.393.017a3.713,3.713,0,0,1,.444.074,1.814,1.814,0,0,1,.523.21,1.6,1.6,0,0,1,.737.9A2.013,2.013,0,0,1,37.184,18.441Zm-.884.068a1.308,1.308,0,0,0-.144-.644,1,1,0,0,0-.356-.386,1.216,1.216,0,0,0-.44-.161,2.929,2.929,0,0,0-.442-.034h-.776v2.534H34.9a1.759,1.759,0,0,0,.632-.1,1.18,1.18,0,0,0,.423-.271,1.143,1.143,0,0,0,.258-.415A1.515,1.515,0,0,0,36.3,18.509Z" transform="translate(-0.446 -0.125)" fill="#f2f0f0"/>
        <path d="M41.471,22.792a.1.1,0,0,1-.039.087.258.258,0,0,1-.107.044,1.008,1.008,0,0,1-.2.015,1.085,1.085,0,0,1-.2-.015.231.231,0,0,1-.11-.044.106.106,0,0,1-.034-.087v-.44a2.173,2.173,0,0,1-.642.479,1.715,1.715,0,0,1-.75.17,2.046,2.046,0,0,1-.627-.09,1.358,1.358,0,0,1-.479-.261,1.166,1.166,0,0,1-.307-.42,1.378,1.378,0,0,1-.11-.566,1.309,1.309,0,0,1,.151-.645,1.266,1.266,0,0,1,.435-.454,2.121,2.121,0,0,1,.693-.271,4.325,4.325,0,0,1,.923-.09h.605v-.342a1.729,1.729,0,0,0-.053-.449.765.765,0,0,0-.174-.325.732.732,0,0,0-.31-.2,1.441,1.441,0,0,0-.468-.066,1.874,1.874,0,0,0-.535.07,2.9,2.9,0,0,0-.415.157c-.119.057-.218.109-.3.156a.416.416,0,0,1-.178.071.124.124,0,0,1-.069-.02.173.173,0,0,1-.051-.058.31.31,0,0,1-.032-.1.936.936,0,0,1-.009-.135.833.833,0,0,1,.017-.193.279.279,0,0,1,.083-.134,1.061,1.061,0,0,1,.227-.149,2.451,2.451,0,0,1,.371-.156,3.411,3.411,0,0,1,.459-.117,2.729,2.729,0,0,1,.5-.047,2.618,2.618,0,0,1,.8.108,1.313,1.313,0,0,1,.538.315,1.225,1.225,0,0,1,.3.515,2.487,2.487,0,0,1,.093.718Zm-.8-2.007h-.688a2.56,2.56,0,0,0-.576.056,1.19,1.19,0,0,0-.406.166.68.68,0,0,0-.236.264.782.782,0,0,0-.076.354.707.707,0,0,0,.217.544.859.859,0,0,0,.608.2,1.128,1.128,0,0,0,.589-.162,2.532,2.532,0,0,0,.568-.493Z" transform="translate(-0.446 -0.125)" fill="#f2f0f0"/>
        <path d="M46.735,22.787a.108.108,0,0,1-.02.066.152.152,0,0,1-.063.046.428.428,0,0,1-.122.029,1.52,1.52,0,0,1-.2.01,1.578,1.578,0,0,1-.2-.01.437.437,0,0,1-.122-.029.152.152,0,0,1-.063-.046.114.114,0,0,1-.02-.066V20.213a2.537,2.537,0,0,0-.058-.605,1.278,1.278,0,0,0-.171-.4.751.751,0,0,0-.291-.254A.925.925,0,0,0,45,18.871a1.043,1.043,0,0,0-.606.214,3.308,3.308,0,0,0-.635.63v3.072a.114.114,0,0,1-.019.066.149.149,0,0,1-.064.046.419.419,0,0,1-.122.029,1.557,1.557,0,0,1-.2.01,1.514,1.514,0,0,1-.2-.01.471.471,0,0,1-.125-.029.108.108,0,0,1-.08-.112V18.392a.146.146,0,0,1,.014-.066.136.136,0,0,1,.059-.049.351.351,0,0,1,.112-.029,2.3,2.3,0,0,1,.359,0,.305.305,0,0,1,.11.029.153.153,0,0,1,.056.049.124.124,0,0,1,.017.066v.581a2.71,2.71,0,0,1,.74-.608,1.6,1.6,0,0,1,.745-.193,1.655,1.655,0,0,1,.739.149,1.317,1.317,0,0,1,.486.4,1.571,1.571,0,0,1,.266.584,3.45,3.45,0,0,1,.081.8Z" transform="translate(-0.446 -0.125)" fill="#f2f0f0"/>
      </g>
    </g>
    <g id="channelStripMaster.insertFxBox">
      <rect id="channelStripMaster.insertFxContainer" x="0.5" y="68.875" width="78.027" height="55.5" rx="3.944" stroke="#282828" stroke-miterlimit="10" fill="url(#channelStripMasterLinearGradient-3)"/>
      <line id="channelStripMaster.sendsBoxTextDivider" x1="1.004" y1="81.875" x2="78.024" y2="81.875" stroke="#282828" stroke-miterlimit="10" fill="url(#channelStripMasterLinearGradient-4)"/>
      <g id="channelStripMaster.insertFxBoxText">
        <path d="M24.791,79.115a.123.123,0,0,1-.019.069.118.118,0,0,1-.064.045.791.791,0,0,1-.123.03,1.133,1.133,0,0,1-.191.012,1.159,1.159,0,0,1-.19-.012.752.752,0,0,1-.124-.03.117.117,0,0,1-.065-.045A.123.123,0,0,1,24,79.115V73.051a.115.115,0,0,1,.02-.069.14.14,0,0,1,.069-.046.676.676,0,0,1,.125-.03,1.214,1.214,0,0,1,.183-.011,1.267,1.267,0,0,1,.191.011.614.614,0,0,1,.123.03.124.124,0,0,1,.064.046.121.121,0,0,1,.019.069Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path d="M29.871,79.119a.118.118,0,0,1-.019.067.149.149,0,0,1-.06.046.42.42,0,0,1-.115.03,1.584,1.584,0,0,1-.185.009,1.611,1.611,0,0,1-.189-.009.419.419,0,0,1-.116-.03.149.149,0,0,1-.06-.046.118.118,0,0,1-.019-.067V76.547a2.673,2.673,0,0,0-.055-.606,1.319,1.319,0,0,0-.161-.4.728.728,0,0,0-.275-.254.827.827,0,0,0-.39-.088.954.954,0,0,0-.573.215,3.174,3.174,0,0,0-.6.631v3.07a.118.118,0,0,1-.019.067.156.156,0,0,1-.06.046.419.419,0,0,1-.116.03,1.611,1.611,0,0,1-.189.009,1.584,1.584,0,0,1-.185-.009.448.448,0,0,1-.117-.03.108.108,0,0,1-.076-.113V74.725a.15.15,0,0,1,.013-.066.126.126,0,0,1,.056-.049.319.319,0,0,1,.106-.029,1.567,1.567,0,0,1,.171-.007,1.588,1.588,0,0,1,.169.007.27.27,0,0,1,.1.029.141.141,0,0,1,.053.049.127.127,0,0,1,.016.066v.582a2.57,2.57,0,0,1,.7-.609,1.447,1.447,0,0,1,.7-.192,1.5,1.5,0,0,1,.7.148,1.28,1.28,0,0,1,.459.4,1.588,1.588,0,0,1,.252.583,3.649,3.649,0,0,1,.077.8Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path d="M33.87,77.924a1.442,1.442,0,0,1-.118.6,1.214,1.214,0,0,1-.335.446,1.494,1.494,0,0,1-.517.273,2.222,2.222,0,0,1-.66.092,2.4,2.4,0,0,1-.423-.036,2.472,2.472,0,0,1-.36-.093,1.755,1.755,0,0,1-.27-.117.84.84,0,0,1-.162-.109.3.3,0,0,1-.074-.137,1.011,1.011,0,0,1-.023-.24,1,1,0,0,1,.01-.157.538.538,0,0,1,.022-.1.115.115,0,0,1,.04-.057.1.1,0,0,1,.058-.017.321.321,0,0,1,.15.066c.066.044.147.092.245.144a2.161,2.161,0,0,0,.343.144,1.453,1.453,0,0,0,.457.065,1.269,1.269,0,0,0,.351-.043.821.821,0,0,0,.273-.129.582.582,0,0,0,.178-.218.719.719,0,0,0,.062-.313.527.527,0,0,0-.09-.312.914.914,0,0,0-.237-.225,2,2,0,0,0-.333-.173c-.124-.049-.25-.1-.381-.159a3.777,3.777,0,0,1-.384-.187,1.527,1.527,0,0,1-.334-.256,1.18,1.18,0,0,1-.238-.362,1.274,1.274,0,0,1-.09-.5,1.33,1.33,0,0,1,.095-.5,1.157,1.157,0,0,1,.284-.415,1.4,1.4,0,0,1,.473-.285,1.857,1.857,0,0,1,.662-.107,1.971,1.971,0,0,1,.333.029,2.283,2.283,0,0,1,.3.072,1.45,1.45,0,0,1,.229.1,1.051,1.051,0,0,1,.143.09.262.262,0,0,1,.065.068.23.23,0,0,1,.023.067c.005.024.009.054.013.09a.972.972,0,0,1,.008.132,1.185,1.185,0,0,1-.008.144.368.368,0,0,1-.023.1.118.118,0,0,1-.039.055.084.084,0,0,1-.05.017.257.257,0,0,1-.121-.053,1.647,1.647,0,0,0-.2-.115,2.161,2.161,0,0,0-.293-.115,1.264,1.264,0,0,0-.386-.053,1.135,1.135,0,0,0-.341.046.629.629,0,0,0-.243.132.548.548,0,0,0-.143.2.661.661,0,0,0-.049.254.533.533,0,0,0,.093.319.9.9,0,0,0,.24.227,1.97,1.97,0,0,0,.337.176l.386.16c.131.056.26.118.388.186a1.438,1.438,0,0,1,.339.25,1.121,1.121,0,0,1,.238.352A1.2,1.2,0,0,1,33.87,77.924Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path d="M38.507,76.732a.346.346,0,0,1-.091.271.3.3,0,0,1-.206.081H35.473a2.871,2.871,0,0,0,.069.658,1.307,1.307,0,0,0,.232.5,1.048,1.048,0,0,0,.422.322,1.605,1.605,0,0,0,.636.112,2.472,2.472,0,0,0,.529-.051,2.875,2.875,0,0,0,.4-.115c.112-.042.205-.08.278-.115a.442.442,0,0,1,.165-.051.1.1,0,0,1,.058.017.113.113,0,0,1,.039.051.41.41,0,0,1,.021.1,1.254,1.254,0,0,1,.007.148c0,.043,0,.08,0,.111s-.007.058-.012.083a.207.207,0,0,1-.023.066.341.341,0,0,1-.042.056.629.629,0,0,1-.15.087,2.064,2.064,0,0,1-.323.121,4.1,4.1,0,0,1-.46.1,3.258,3.258,0,0,1-.556.046,2.467,2.467,0,0,1-.9-.15,1.675,1.675,0,0,1-.649-.45,1.958,1.958,0,0,1-.4-.748,3.668,3.668,0,0,1-.134-1.045,3.475,3.475,0,0,1,.138-1.017,2.208,2.208,0,0,1,.4-.767,1.751,1.751,0,0,1,.63-.483,1.978,1.978,0,0,1,.827-.168,1.9,1.9,0,0,1,.833.166,1.587,1.587,0,0,1,.566.446,1.842,1.842,0,0,1,.326.659,3.054,3.054,0,0,1,.1.809Zm-.767-.24a1.526,1.526,0,0,0-.267-1,.994.994,0,0,0-.834-.361,1.05,1.05,0,0,0-.5.113,1.078,1.078,0,0,0-.358.3,1.365,1.365,0,0,0-.223.433,1.871,1.871,0,0,0-.088.514Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path d="M42.1,75.014c0,.071,0,.131,0,.179a.5.5,0,0,1-.018.116.186.186,0,0,1-.035.063.075.075,0,0,1-.058.023.243.243,0,0,1-.09-.023c-.035-.015-.076-.029-.12-.044s-.095-.028-.15-.041a.742.742,0,0,0-.18-.019.555.555,0,0,0-.227.048.908.908,0,0,0-.233.161,1.981,1.981,0,0,0-.256.3c-.089.123-.188.275-.3.454v2.89a.118.118,0,0,1-.019.067.156.156,0,0,1-.06.046.419.419,0,0,1-.116.03,1.611,1.611,0,0,1-.189.009,1.584,1.584,0,0,1-.185-.009.448.448,0,0,1-.117-.03.108.108,0,0,1-.076-.113V74.725a.15.15,0,0,1,.013-.066.126.126,0,0,1,.056-.049.319.319,0,0,1,.106-.029,1.567,1.567,0,0,1,.171-.007,1.588,1.588,0,0,1,.169.007.27.27,0,0,1,.1.029.141.141,0,0,1,.053.049.127.127,0,0,1,.017.066v.64a3.267,3.267,0,0,1,.321-.429,1.7,1.7,0,0,1,.283-.262.846.846,0,0,1,.266-.132,1,1,0,0,1,.266-.036c.04,0,.085,0,.136.007a1.194,1.194,0,0,1,.159.026,1.374,1.374,0,0,1,.151.045.285.285,0,0,1,.094.049.125.125,0,0,1,.037.046.262.262,0,0,1,.016.055.584.584,0,0,1,.009.1C42.094,74.879,42.1,74.938,42.1,75.014Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path d="M45.124,78.8a1.011,1.011,0,0,1-.019.224.26.26,0,0,1-.055.124.38.38,0,0,1-.111.072.807.807,0,0,1-.168.056c-.063.015-.13.028-.2.038a1.691,1.691,0,0,1-.213.013,1.51,1.51,0,0,1-.554-.09.888.888,0,0,1-.378-.273,1.14,1.14,0,0,1-.215-.464,2.9,2.9,0,0,1-.067-.661V75.268h-.582a.126.126,0,0,1-.111-.079.566.566,0,0,1-.041-.253.969.969,0,0,1,.011-.157.479.479,0,0,1,.03-.1.122.122,0,0,1,.049-.059.136.136,0,0,1,.067-.017h.577V73.553a.126.126,0,0,1,.016-.063.143.143,0,0,1,.06-.052.423.423,0,0,1,.118-.032,1.539,1.539,0,0,1,.184-.01,1.586,1.586,0,0,1,.19.01.389.389,0,0,1,.116.032.174.174,0,0,1,.06.052.118.118,0,0,1,.018.063V74.6h1.067a.126.126,0,0,1,.065.017.147.147,0,0,1,.048.059.328.328,0,0,1,.03.1,1.136,1.136,0,0,1,.009.157.58.58,0,0,1-.041.253.126.126,0,0,1-.111.079H43.905v2.451a1.456,1.456,0,0,0,.127.685.473.473,0,0,0,.455.233.719.719,0,0,0,.189-.023,1.46,1.46,0,0,0,.148-.046c.043-.016.08-.032.111-.047a.2.2,0,0,1,.083-.021.088.088,0,0,1,.044.012.079.079,0,0,1,.032.047.5.5,0,0,1,.021.091A.994.994,0,0,1,45.124,78.8Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path d="M51.5,73.285a1.226,1.226,0,0,1-.009.16.358.358,0,0,1-.032.111.172.172,0,0,1-.054.061.111.111,0,0,1-.062.02H49.151v2.148H51.22a.126.126,0,0,1,.062.017.141.141,0,0,1,.053.055.282.282,0,0,1,.033.106,1.273,1.273,0,0,1,.009.168,1.2,1.2,0,0,1-.009.159.294.294,0,0,1-.033.107.182.182,0,0,1-.053.064.1.1,0,0,1-.062.021H49.151v2.633a.131.131,0,0,1-.018.066.119.119,0,0,1-.065.048.8.8,0,0,1-.12.03,1.149,1.149,0,0,1-.194.012,1.167,1.167,0,0,1-.19-.012.779.779,0,0,1-.124-.03.119.119,0,0,1-.065-.048.131.131,0,0,1-.018-.066V73.266A.322.322,0,0,1,48.452,73a.317.317,0,0,1,.2-.075H51.34a.11.11,0,0,1,.062.019.172.172,0,0,1,.054.063.378.378,0,0,1,.032.115A1.315,1.315,0,0,1,51.5,73.285Z" transform="translate(-0.446 -0.125)" fill="#e8e8e8"/>
        <path d="M56.406,78.939a.626.626,0,0,1,.072.17.1.1,0,0,1-.03.1.268.268,0,0,1-.136.049,1.9,1.9,0,0,1-.252.012c-.1,0-.176,0-.231-.007a.437.437,0,0,1-.132-.028.173.173,0,0,1-.073-.046.215.215,0,0,1-.044-.071l-1.33-2.514-1.344,2.514a.331.331,0,0,1-.051.074.175.175,0,0,1-.076.046.574.574,0,0,1-.132.025c-.055.005-.129.007-.222.007a1.685,1.685,0,0,1-.239-.012.214.214,0,0,1-.123-.049.11.11,0,0,1-.023-.1.586.586,0,0,1,.071-.17l1.631-2.906-1.556-2.806a.837.837,0,0,1-.072-.174.1.1,0,0,1,.021-.1.211.211,0,0,1,.129-.046,2.441,2.441,0,0,1,.254-.009c.092,0,.168,0,.226.006a.581.581,0,0,1,.139.025.146.146,0,0,1,.074.049l.05.07,1.284,2.363,1.275-2.363c.015-.025.031-.049.046-.07a.138.138,0,0,1,.067-.049A.445.445,0,0,1,55.8,72.9c.053,0,.123-.006.213-.006a1.86,1.86,0,0,1,.233.011.244.244,0,0,1,.129.047.1.1,0,0,1,.03.1.62.62,0,0,1-.064.174L54.79,76.014Z" transform="translate(-0.446 -0.125)" fill="#e8e8e8"/>
      </g>

      <foreignObject x="2.514" y="94.875" width="74" height="27.5">
      <div id="channelStripMaster.InsertsDiv" class="channelStripMasterInsertsDiv" width="74" height="27.5" xmlns="http://www.w3.org/1999/xhtml"></div>
      </foreignObject>

      <rect id="channelStripMaster.AddNewInsert.Button" x="11.108" y="84.375" width="56.811" height="8" rx="1.333" stroke="#e2e2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" fill="url(#channelStripMasterLinearGradient-5)"/>
      <g id="channelStripMaster.AddNewInsert.Text">
        <path id="channelStripMaster.AddNewInsert.TextPath1" d="M17.89,90.247a.974.974,0,0,1,.044.167.1.1,0,0,1-.023.093.206.206,0,0,1-.115.037c-.054.005-.129.008-.225.008s-.177,0-.233,0a.72.72,0,0,1-.128-.018.116.116,0,0,1-.061-.037.173.173,0,0,1-.029-.061l-.255-.762H15.441l-.24.741a.215.215,0,0,1-.031.068.115.115,0,0,1-.062.045.478.478,0,0,1-.12.022c-.051,0-.119.006-.2.006a1.907,1.907,0,0,1-.211-.009.166.166,0,0,1-.106-.042.117.117,0,0,1-.02-.1.932.932,0,0,1,.044-.164l1.169-3.363a.249.249,0,0,1,.041-.08.134.134,0,0,1,.074-.047.633.633,0,0,1,.142-.022c.061,0,.141,0,.241,0,.115,0,.207,0,.275,0a.777.777,0,0,1,.16.022.152.152,0,0,1,.082.048.278.278,0,0,1,.042.088Zm-1.74-2.78h0l-.536,1.611h1.075Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath2" d="M21.57,88.583a2.617,2.617,0,0,1-.136.893,1.512,1.512,0,0,1-.392.6,1.574,1.574,0,0,1-.619.345,3.08,3.08,0,0,1-.869.109h-.9a.244.244,0,0,1-.163-.056.239.239,0,0,1-.066-.187v-3.3a.235.235,0,0,1,.066-.186.245.245,0,0,1,.163-.057h.973a2.69,2.69,0,0,1,.859.119,1.531,1.531,0,0,1,.595.352,1.5,1.5,0,0,1,.368.575A2.3,2.3,0,0,1,21.57,88.583Zm-.8.026a1.91,1.91,0,0,0-.063-.5,1.062,1.062,0,0,0-.2-.4.945.945,0,0,0-.358-.265,1.454,1.454,0,0,0-.572-.095h-.39v2.578h.4a1.537,1.537,0,0,0,.534-.082.885.885,0,0,0,.361-.248,1.062,1.062,0,0,0,.217-.411A2.057,2.057,0,0,0,20.773,88.609Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath3" d="M25.352,88.583a2.593,2.593,0,0,1-.136.893,1.511,1.511,0,0,1-.391.6,1.585,1.585,0,0,1-.62.345,3.08,3.08,0,0,1-.869.109h-.9a.242.242,0,0,1-.162-.056.239.239,0,0,1-.066-.187v-3.3a.235.235,0,0,1,.066-.186.242.242,0,0,1,.162-.057H23.4a2.7,2.7,0,0,1,.86.119,1.535,1.535,0,0,1,.594.352,1.49,1.49,0,0,1,.368.575A2.3,2.3,0,0,1,25.352,88.583Zm-.8.026a1.91,1.91,0,0,0-.063-.5,1.062,1.062,0,0,0-.2-.4.95.95,0,0,0-.357-.265,1.463,1.463,0,0,0-.573-.095h-.39v2.578h.4a1.531,1.531,0,0,0,.533-.082.9.9,0,0,0,.362-.248,1.06,1.06,0,0,0,.216-.411A2.057,2.057,0,0,0,24.555,88.609Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath4" d="M30.467,90.265a.3.3,0,0,1-.023.12.271.271,0,0,1-.063.088.245.245,0,0,1-.094.051.412.412,0,0,1-.11.016h-.328a.707.707,0,0,1-.177-.02.349.349,0,0,1-.138-.076.614.614,0,0,1-.121-.146c-.039-.061-.083-.141-.132-.238l-.944-1.773c-.054-.105-.11-.219-.167-.341s-.107-.241-.152-.356h-.006c.008.14.014.281.018.421s.006.283.006.431v1.984a.1.1,0,0,1-.016.053.133.133,0,0,1-.056.04.492.492,0,0,1-.107.024,1.358,1.358,0,0,1-.173.009,1.328,1.328,0,0,1-.17-.009.457.457,0,0,1-.105-.024.115.115,0,0,1-.053-.04.1.1,0,0,1-.015-.053V87.019a.257.257,0,0,1,.081-.207.3.3,0,0,1,.2-.069h.413a.764.764,0,0,1,.187.02.375.375,0,0,1,.136.062.51.51,0,0,1,.113.121,1.621,1.621,0,0,1,.109.193l.738,1.385c.043.084.085.167.127.248s.083.163.122.243l.114.239c.037.078.073.156.109.234h0c-.006-.136-.011-.279-.014-.427s0-.29,0-.425V86.857a.082.082,0,0,1,.018-.052.127.127,0,0,1,.058-.041.382.382,0,0,1,.109-.025,1.574,1.574,0,0,1,.172-.008,1.527,1.527,0,0,1,.167.008.322.322,0,0,1,.1.025.112.112,0,0,1,.052.041.1.1,0,0,1,.014.052Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath5" d="M33.541,90.232a1.092,1.092,0,0,1-.008.142.363.363,0,0,1-.022.093.133.133,0,0,1-.036.052.086.086,0,0,1-.049.015h-1.9a.246.246,0,0,1-.163-.056.239.239,0,0,1-.066-.187v-3.3a.235.235,0,0,1,.066-.186.247.247,0,0,1,.163-.057h1.893a.075.075,0,0,1,.046.015.113.113,0,0,1,.036.052.411.411,0,0,1,.022.093,1.373,1.373,0,0,1,.007.145,1.321,1.321,0,0,1-.007.139.388.388,0,0,1-.022.092.126.126,0,0,1-.036.052.07.07,0,0,1-.046.016H32.061v.925h1.146a.086.086,0,0,1,.048.016.127.127,0,0,1,.037.051.341.341,0,0,1,.021.09,1.1,1.1,0,0,1,.008.139,1.075,1.075,0,0,1-.008.141.333.333,0,0,1-.021.089.108.108,0,0,1-.037.049.092.092,0,0,1-.048.014H32.061v1.07h1.365a.094.094,0,0,1,.049.015.141.141,0,0,1,.036.052.353.353,0,0,1,.022.093A1.086,1.086,0,0,1,33.541,90.232Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath6" d="M38.21,90.338a.291.291,0,0,1-.048.112.178.178,0,0,1-.092.065.612.612,0,0,1-.158.029c-.065.005-.147.008-.246.008s-.2,0-.269-.008a.58.58,0,0,1-.159-.029.155.155,0,0,1-.085-.065.329.329,0,0,1-.041-.112l-.607-2.4H36.5l-.575,2.4a.32.32,0,0,1-.041.11.165.165,0,0,1-.083.066.551.551,0,0,1-.155.03c-.066.005-.152.008-.26.008s-.2,0-.271-.008a.58.58,0,0,1-.159-.029.155.155,0,0,1-.085-.065.348.348,0,0,1-.044-.112l-.862-3.308a.951.951,0,0,1-.029-.166.108.108,0,0,1,.034-.092.211.211,0,0,1,.12-.039c.056,0,.133-.007.233-.007s.164,0,.218,0a.438.438,0,0,1,.122.022.093.093,0,0,1,.055.047.3.3,0,0,1,.024.086l.665,2.9h0L36.1,86.9a.344.344,0,0,1,.031-.091.129.129,0,0,1,.064-.054.475.475,0,0,1,.125-.026c.053,0,.123-.007.211-.007s.168,0,.224,0a.415.415,0,0,1,.129.026.133.133,0,0,1,.066.054.323.323,0,0,1,.032.093l.715,2.883H37.7l.665-2.894a.374.374,0,0,1,.023-.081.108.108,0,0,1,.056-.053.393.393,0,0,1,.117-.026c.051,0,.122-.007.214-.007s.153,0,.2.007a.17.17,0,0,1,.1.039.117.117,0,0,1,.028.1,1.147,1.147,0,0,1-.03.171Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath7" d="M41.788,90.429a.083.083,0,0,1-.019.052.136.136,0,0,1-.063.039.724.724,0,0,1-.118.023,1.574,1.574,0,0,1-.187.009,1.6,1.6,0,0,1-.186-.009.7.7,0,0,1-.119-.023.136.136,0,0,1-.063-.039.083.083,0,0,1-.019-.052v-3.58a.086.086,0,0,1,.019-.053.133.133,0,0,1,.065-.038.621.621,0,0,1,.118-.024c.049,0,.111-.008.185-.008a1.864,1.864,0,0,1,.187.008.621.621,0,0,1,.118.024.136.136,0,0,1,.063.038.086.086,0,0,1,.019.053Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath8" d="M45.74,90.265a.286.286,0,0,1-.024.12.245.245,0,0,1-.063.088.234.234,0,0,1-.093.051.418.418,0,0,1-.11.016h-.328a.71.71,0,0,1-.178-.02.352.352,0,0,1-.137-.076.616.616,0,0,1-.122-.146c-.039-.061-.083-.141-.132-.238l-.943-1.773c-.055-.105-.11-.219-.167-.341s-.108-.241-.152-.356h-.006c.007.14.013.281.017.421s.006.283.006.431v1.984a.092.092,0,0,1-.016.053.126.126,0,0,1-.056.04.492.492,0,0,1-.107.024,1.341,1.341,0,0,1-.172.009,1.317,1.317,0,0,1-.17-.009.481.481,0,0,1-.106-.024.121.121,0,0,1-.053-.04.108.108,0,0,1-.014-.053V87.019a.26.26,0,0,1,.08-.207.3.3,0,0,1,.2-.069h.413a.773.773,0,0,1,.188.02.383.383,0,0,1,.136.062.51.51,0,0,1,.113.121,1.627,1.627,0,0,1,.108.193l.738,1.385.128.248c.042.082.082.163.121.243s.078.161.115.239.073.156.108.234h0c-.006-.136-.01-.279-.013-.427s0-.29,0-.425V86.857a.082.082,0,0,1,.018-.052.131.131,0,0,1,.059-.041.374.374,0,0,1,.108-.025,1.608,1.608,0,0,1,.173-.008,1.541,1.541,0,0,1,.167.008.329.329,0,0,1,.1.025.114.114,0,0,1,.051.041.093.093,0,0,1,.015.052Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath9" d="M48.813,89.4a1.176,1.176,0,0,1-.111.525,1.092,1.092,0,0,1-.3.376,1.292,1.292,0,0,1-.445.227,2.01,2.01,0,0,1-1.207-.034,1.167,1.167,0,0,1-.216-.095.634.634,0,0,1-.124-.087.211.211,0,0,1-.054-.111.962.962,0,0,1-.017-.206c0-.06,0-.111.006-.152a.509.509,0,0,1,.019-.1.109.109,0,0,1,.035-.053.085.085,0,0,1,.052-.017.251.251,0,0,1,.115.048,1.9,1.9,0,0,0,.192.107,1.936,1.936,0,0,0,.28.108,1.378,1.378,0,0,0,.377.047.826.826,0,0,0,.252-.034.541.541,0,0,0,.189-.094.4.4,0,0,0,.118-.153.474.474,0,0,0,.041-.2.352.352,0,0,0-.07-.221.7.7,0,0,0-.183-.164,1.863,1.863,0,0,0-.257-.134c-.095-.042-.194-.087-.3-.134a2.713,2.713,0,0,1-.3-.159,1.18,1.18,0,0,1-.257-.215,1,1,0,0,1-.183-.294,1.063,1.063,0,0,1-.07-.407,1.079,1.079,0,0,1,.1-.479.983.983,0,0,1,.272-.344,1.178,1.178,0,0,1,.405-.2,1.763,1.763,0,0,1,.493-.067,1.887,1.887,0,0,1,.27.02,1.951,1.951,0,0,1,.252.056,1.416,1.416,0,0,1,.208.079.516.516,0,0,1,.12.073.2.2,0,0,1,.039.05.236.236,0,0,1,.018.055.553.553,0,0,1,.01.084c0,.035,0,.077,0,.128s0,.1,0,.143a.523.523,0,0,1-.015.1.118.118,0,0,1-.029.056.077.077,0,0,1-.051.017.235.235,0,0,1-.1-.041c-.047-.027-.1-.056-.173-.09a2.03,2.03,0,0,0-.237-.088,1.1,1.1,0,0,0-.3-.039.667.667,0,0,0-.22.032.432.432,0,0,0-.156.084.342.342,0,0,0-.094.13.421.421,0,0,0-.031.162.347.347,0,0,0,.069.217.606.606,0,0,0,.185.164,1.731,1.731,0,0,0,.262.135c.1.043.2.087.3.134a3.284,3.284,0,0,1,.3.159,1.237,1.237,0,0,1,.261.215,1.008,1.008,0,0,1,.185.293A1.019,1.019,0,0,1,48.813,89.4Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath10" d="M51.649,90.232a1.339,1.339,0,0,1-.007.142.411.411,0,0,1-.022.093.124.124,0,0,1-.037.052.085.085,0,0,1-.048.015h-1.9a.244.244,0,0,1-.162-.056.239.239,0,0,1-.066-.187v-3.3a.235.235,0,0,1,.066-.186.244.244,0,0,1,.162-.057h1.893a.078.078,0,0,1,.047.015.121.121,0,0,1,.035.052.363.363,0,0,1,.022.093,1.147,1.147,0,0,1,.007.145,1.1,1.1,0,0,1-.007.139.345.345,0,0,1-.022.092.135.135,0,0,1-.035.052.072.072,0,0,1-.047.016H50.169v.925h1.146a.081.081,0,0,1,.048.016.127.127,0,0,1,.037.051.338.338,0,0,1,.022.09,1.117,1.117,0,0,1,.007.139,1.1,1.1,0,0,1-.007.141.329.329,0,0,1-.022.089.108.108,0,0,1-.037.049.087.087,0,0,1-.048.014H50.169v1.07h1.366a.093.093,0,0,1,.048.015A.131.131,0,0,1,51.62,90a.4.4,0,0,1,.022.093A1.333,1.333,0,0,1,51.649,90.232Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath11" d="M55.141,90.435a.113.113,0,0,1-.012.054.089.089,0,0,1-.055.036.554.554,0,0,1-.129.021c-.057,0-.134.006-.232.006-.082,0-.147,0-.2-.006a.478.478,0,0,1-.116-.022.121.121,0,0,1-.06-.041.258.258,0,0,1-.029-.06l-.34-.847c-.041-.1-.081-.18-.12-.255a.786.786,0,0,0-.13-.185.47.47,0,0,0-.166-.114.58.58,0,0,0-.217-.038H53.1v1.445a.078.078,0,0,1-.019.052.136.136,0,0,1-.063.039.688.688,0,0,1-.117.023,1.947,1.947,0,0,1-.374,0,.7.7,0,0,1-.118-.023.123.123,0,0,1-.062-.039.081.081,0,0,1-.017-.052V86.986A.235.235,0,0,1,52.4,86.8a.242.242,0,0,1,.162-.057h.982q.148,0,.246.006c.064,0,.123.009.175.015a1.563,1.563,0,0,1,.412.111,1.01,1.01,0,0,1,.311.206.86.86,0,0,1,.194.3,1.1,1.1,0,0,1,.068.4,1.146,1.146,0,0,1-.049.347.87.87,0,0,1-.142.28.93.93,0,0,1-.231.214,1.263,1.263,0,0,1-.314.147.852.852,0,0,1,.16.1.8.8,0,0,1,.141.143,1.315,1.315,0,0,1,.124.189c.039.072.077.152.115.242l.319.747c.029.075.049.129.058.163A.313.313,0,0,1,55.141,90.435Zm-.993-2.573a.558.558,0,0,0-.085-.316.461.461,0,0,0-.278-.182,1.06,1.06,0,0,0-.134-.023,1.806,1.806,0,0,0-.206-.009H53.1v1.075h.393a.953.953,0,0,0,.287-.039.583.583,0,0,0,.2-.111.455.455,0,0,0,.123-.172A.587.587,0,0,0,54.148,87.862Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath12" d="M58.17,87.06a1.183,1.183,0,0,1-.007.144.4.4,0,0,1-.022.1.122.122,0,0,1-.037.053.072.072,0,0,1-.048.018h-.949v3.056a.078.078,0,0,1-.019.052.136.136,0,0,1-.063.039.7.7,0,0,1-.119.023,1.926,1.926,0,0,1-.372,0,.683.683,0,0,1-.118-.023.126.126,0,0,1-.063-.039.079.079,0,0,1-.02-.052V87.373h-.949a.075.075,0,0,1-.05-.018A.139.139,0,0,1,55.3,87.3a.45.45,0,0,1-.022-.1,1.183,1.183,0,0,1-.007-.144,1.279,1.279,0,0,1,.007-.15.45.45,0,0,1,.022-.1.148.148,0,0,1,.035-.053.085.085,0,0,1,.05-.016h2.672a.081.081,0,0,1,.048.016.128.128,0,0,1,.037.053.4.4,0,0,1,.022.1A1.279,1.279,0,0,1,58.17,87.06Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath13" d="M62.1,87.06a1.243,1.243,0,0,1-.007.148.327.327,0,0,1-.024.095.144.144,0,0,1-.036.052.071.071,0,0,1-.047.018H60.749v1.02h1.163a.074.074,0,0,1,.046.014.128.128,0,0,1,.037.05.319.319,0,0,1,.024.094,1.537,1.537,0,0,1,0,.293.353.353,0,0,1-.024.1.135.135,0,0,1-.037.055.07.07,0,0,1-.046.016H60.749v1.412a.091.091,0,0,1-.018.056.143.143,0,0,1-.063.04.634.634,0,0,1-.119.024,1.586,1.586,0,0,1-.187.009,1.6,1.6,0,0,1-.186-.009.6.6,0,0,1-.119-.024.156.156,0,0,1-.063-.04.086.086,0,0,1-.019-.056V86.986a.235.235,0,0,1,.066-.186.245.245,0,0,1,.163-.057h1.784a.081.081,0,0,1,.047.016.149.149,0,0,1,.036.053.35.35,0,0,1,.024.1A1.279,1.279,0,0,1,62.1,87.06Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
        <path id="channelStripMaster.AddNewInsert.TextPath14" d="M65.357,90.244a.889.889,0,0,1,.069.164.089.089,0,0,1-.019.094.231.231,0,0,1-.128.041c-.061.006-.147.009-.256.009-.092,0-.164,0-.217-.006a.541.541,0,0,1-.124-.02.116.116,0,0,1-.066-.036.183.183,0,0,1-.035-.058l-.712-1.369-.709,1.369a.307.307,0,0,1-.038.058.123.123,0,0,1-.066.036.572.572,0,0,1-.126.02q-.081.006-.213.006c-.1,0-.18,0-.236-.009a.179.179,0,0,1-.112-.041.093.093,0,0,1-.012-.094.889.889,0,0,1,.073-.164l.908-1.655L62.5,87.033a1.045,1.045,0,0,1-.072-.169.083.083,0,0,1,.015-.093.215.215,0,0,1,.124-.038c.061,0,.146-.007.258-.007.092,0,.164,0,.218,0a.593.593,0,0,1,.128.02.115.115,0,0,1,.065.036.317.317,0,0,1,.037.059l.665,1.254.648-1.254a.271.271,0,0,1,.036-.059.116.116,0,0,1,.062-.036.482.482,0,0,1,.117-.02c.05,0,.119,0,.206,0s.175,0,.232.007a.19.19,0,0,1,.117.039.091.091,0,0,1,.016.094,1.075,1.075,0,0,1-.066.167l-.843,1.547Z" transform="translate(-0.446 -0.125)" fill="#f4f4f4"/>
      </g>
    </g>
    <g id="channelStripMaster.EqButton">
      <rect id="channelStripMaster.EqButtonBackground" x="18.389" y="53.083" width="42.25" height="11.322" rx="2.931" fill="#038203" stroke="#64ff00" stroke-miterlimit="10" stroke-width="0.75" opacity="0.63"/>
      <g id="channelStripMaster.EqButtonText">
        <path d="M38.725,61.739a.92.92,0,0,1-.009.138.3.3,0,0,1-.03.1.16.16,0,0,1-.051.057.117.117,0,0,1-.064.018H35.842a.309.309,0,0,1-.191-.069.28.28,0,0,1-.09-.239V56.672a.281.281,0,0,1,.09-.239.309.309,0,0,1,.191-.069h2.7a.116.116,0,0,1,.063.018.121.121,0,0,1,.046.057.454.454,0,0,1,.029.1.848.848,0,0,1,.011.147.787.787,0,0,1-.011.138.4.4,0,0,1-.029.1.121.121,0,0,1-.046.055.116.116,0,0,1-.063.018H36.317v1.784h1.907a.1.1,0,0,1,.064.02.153.153,0,0,1,.048.055.28.28,0,0,1,.029.1,1.022,1.022,0,0,1,.009.145.883.883,0,0,1-.009.136.283.283,0,0,1-.029.093.122.122,0,0,1-.048.05.124.124,0,0,1-.064.016H36.317v2.034h2.254a.117.117,0,0,1,.064.018.161.161,0,0,1,.051.055.285.285,0,0,1,.03.1A.994.994,0,0,1,38.725,61.739Z" transform="translate(-0.446 -0.125)" fill="lime"/>
        <path d="M45.277,62.552a1.137,1.137,0,0,1-.011.169.3.3,0,0,1-.033.105.119.119,0,0,1-.048.051.115.115,0,0,1-.053.013.93.93,0,0,1-.283-.073,3.27,3.27,0,0,1-.451-.211,6.324,6.324,0,0,1-.544-.335,4.254,4.254,0,0,1-.563-.462,2.3,2.3,0,0,1-.545.229,2.748,2.748,0,0,1-.765.1,2.955,2.955,0,0,1-1.109-.189,1.938,1.938,0,0,1-.774-.553,2.379,2.379,0,0,1-.454-.908,4.686,4.686,0,0,1-.15-1.246,4.259,4.259,0,0,1,.163-1.223,2.525,2.525,0,0,1,.488-.932,2.161,2.161,0,0,1,.813-.594,2.893,2.893,0,0,1,1.138-.208,2.829,2.829,0,0,1,1.074.189,2.023,2.023,0,0,1,.778.551,2.382,2.382,0,0,1,.472.895,4.263,4.263,0,0,1,.159,1.221,5.485,5.485,0,0,1-.042.681,3.669,3.669,0,0,1-.132.616,2.838,2.838,0,0,1-.226.536,2.248,2.248,0,0,1-.321.444,5.036,5.036,0,0,0,.562.41,4.283,4.283,0,0,0,.4.222q.159.075.246.108a.382.382,0,0,1,.132.075.222.222,0,0,1,.062.119A.994.994,0,0,1,45.277,62.552ZM43.783,59.19a4.51,4.51,0,0,0-.085-.9,2.09,2.09,0,0,0-.286-.718,1.383,1.383,0,0,0-.534-.477,1.8,1.8,0,0,0-.826-.171,1.71,1.71,0,0,0-.826.182,1.524,1.524,0,0,0-.543.493,2.041,2.041,0,0,0-.3.718,4.015,4.015,0,0,0-.09.866,4.766,4.766,0,0,0,.083.92,2.084,2.084,0,0,0,.282.727,1.341,1.341,0,0,0,.529.478,1.836,1.836,0,0,0,.833.168,1.727,1.727,0,0,0,.835-.184,1.5,1.5,0,0,0,.545-.5,2.081,2.081,0,0,0,.294-.73A4.183,4.183,0,0,0,43.783,59.19Z" transform="translate(-0.446 -0.125)" fill="lime"/>
      </g>
    </g>
    <g id="channelStripMaster.InstrumentId">
      
      <rect id="channelStripInstrumentIdBackground" x="2.23" y="0.375" width="74.568" height="11" rx="2.931" fill="#3014a5" stroke="#bf9ffc" stroke-miterlimit="10" stroke-width="0.75" opacity="0.79"/>
      <foreignObject x="2.23" y="0.375" width="74.568" height="11">
        <div class="channelStripInstrumentIdMaster" id="channelStripInstrumentIdMaster">
        Master Output
        </div>
      </foreignObject>
    </g>
  </svg>`;

  target.innerHTML = svgHtml;
  mainInterface.makeTurnable(document.getElementById('channelStripMaster'));
  mainInterface.statusRing('channelStripMaster.knobPanLightRing', 'PlusMinus', project.mixer.master.pan.pan.value);
  this.setKnobs('channelStripMaster', true, false);
  this.makeDraggable(null, -91, document.getElementById('channelStripMaster'));
  this.refreshSvgSlider('channelStripMaster', 'channelStripMaster.sliderThumb', project.mixer.master.sliderPosition,  -91, 'channelStripMaster.sliderValueBox');
  project.mixer.master.listInsertFx(0, 0, 'channelStripMaster');
  document.getElementById('channelStripMaster.muteButton').addEventListener('mousedown', function(e) {
    mixer.muteChannel(e);
  });
  document.getElementById('channelStripMaster.muteText').addEventListener('mousedown', function(e) {
    mixer.muteChannel(e);
  });
  document.getElementById('channelStripMaster.AddNewInsert.Button').addEventListener('mousedown', function (e) {
    dialogBoxes.newInsertFx(e);
  });
  document.getElementById('channelStripMaster.AddNewInsert.Text').addEventListener('mousedown', function (e) {
    dialogBoxes.newInsertFx(e);
  });

}