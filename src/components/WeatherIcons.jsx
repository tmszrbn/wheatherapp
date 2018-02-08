import React, {Component} from 'react';

class WeatherIcons extends Component {

  styling(code,pod) {
    // code = 602;
    let obj;
    if (code <= 202) {
      obj = {
        cloudLight: {display:'none'},
        fog: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
      }
    } else if (code <= 233) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
        sun: {display:'none'}
      }
    } else if (code <= 520) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
        sun: {display:'none'},
        moon: {display:'none'}
      }
    } else if (code === 521) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        snow: {display:'none'}
      }
    } else if (code === 600) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        rain: {display:'none'}
      }
    } else if (code <= 602) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        rain: {display:'none'},
        sun: {display:'none'},
        moon: {display:'none'}
      }
    } else if (code <= 610) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
      }
    } else if (code <= 612) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        rain: {display:'none'},
        sun: {display:'none'},
        moon: {display:'none'}
      }
    } else if (code <= 623) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        rain: {display:'none'},
        sun: {display:'none'},
        moon: {display:'none'}
      }
    } else if (code <= 751) {
      obj = {
        cloudLight: {display:'none'},
        cloudDark: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
        rain: {display:'none'},
        sun: {display:'none'},
        moon: {display:'none'}
      }
    } else if (code <= 800) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        cloudDark: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
        rain: {display:'none'},
      }
    } else if (code <= 803) {
      obj = {
        fog: {display:'none'},
        cloudLight: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
        rain: {display:'none'},
      }
    } else if (code <= 804) {
      obj = {
        fog: {display:'none'},
        lightningBig: {display:'none'},
        lightningSmall: {display:'none'},
        snowUp: {display:'none'},
        snowDown: {display:'none'},
        rain: {display:'none'},
        sun: {display:'none'},
        moon: {display:'none'}
      }
    }
    if (pod === 'day') {
        obj.moon = {display:'none'}
    } else if (pod === 'night') {
      obj.sun = {display:'none'}
    }
    return obj;
  }

  render() {
    if (this.props.period === 'current') {
      const styles = this.styling(this.props.code, this.props.pod);
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="115mm" height="100mm" viewBox="0 0 135 151"
        id="svg8" stroke="">
            <defs id="defs2">
                <marker overflow="visible" orient="auto" id="marker12448">
                    <path id="path12446" d="m -2.5,-1 c 0,2.76 -2.24,5 -5,5 -2.76,0 -5,-2.24 -5,-5 0,-2.76 2.24,-5 5,-5 2.76,0 5,2.24 5,5 z"
                    transform="matrix(.8 0 0 .8 5.92 .8)" fill="#0000f7" stroke="#0000f7" />
                </marker>
                <marker overflow="visible" orient="auto" id="marker12438">
                    <path id="path12436" d="m -2.5,-1 c 0,2.76 -2.24,5 -5,5 -2.76,0 -5,-2.24 -5,-5 0,-2.76 2.24,-5 5,-5 2.76,0 5,2.24 5,5 z"
                    transform="matrix(.8 0 0 .8 5.92 .8)" fill="#0000f7" stroke="#0000f7" />
                </marker>
                <marker overflow="visible" orient="auto" id="marker12428">
                    <path id="path12426" d="m -2.5,-1 c 0,2.76 -2.24,5 -5,5 -2.76,0 -5,-2.24 -5,-5 0,-2.76 2.24,-5 5,-5 2.76,0 5,2.24 5,5 z"
                    transform="matrix(.8 0 0 .8 5.92 .8)" fill="#0000f7" stroke="#0000f7" />
                </marker>
                <marker overflow="visible" orient="auto" id="marker12330">
                    <path id="path12328" d="M 0,0 5,-5 -12.5,0 5,5 Z" transform="matrix(.8 0 0 .8 10 0)"
                    fill="#0000f7" stroke="#0000f7" />
                </marker>
                <marker overflow="visible" orient="auto" id="marker12320">
                    <path id="path12318" d="M 0,0 5,-5 -12.5,0 5,5 Z" transform="matrix(.8 0 0 .8 10 0)"
                    fill="#0000f7" stroke="#0000f7" />
                </marker>
                <marker overflow="visible" orient="auto" id="marker12310">
                    <path id="path12308" d="M 0,0 5,-5 -12.5,0 5,5 Z" transform="matrix(.8 0 0 .8 10 0)"
                    fill="#0000f7" stroke="#0000f7" />
                </marker>
            </defs>
            <g style={styles.cloudLight} id="layer4" transform="translate(0 -146)">
                <g id="g1580" transform="translate(-25.703 92.228)" fill="#ccc" strokeWidth=".265">
                    <ellipse id="ellipse1564" cx="65.39" cy="117.84" ry="16.631" rx="20.033"
                    />
                    <ellipse id="ellipse1566" cx="104.7" cy="105.74" ry="21.923" rx="51.027"
                    />
                    <ellipse id="ellipse1568" cx="81.265" cy="95.539" ry="17.765" rx="15.497"
                    />
                    <ellipse id="ellipse1570" cx="114.53" cy="84.955" ry="24.568" rx="30.616"
                    />
                    <ellipse id="ellipse1572" cx="65.012" cy="119.35" ry="9.827" rx="14.363"
                    />
                    <ellipse id="ellipse1574" cx="82.399" cy="125.4" ry="10.583" rx="9.071"
                    />
                    <ellipse id="ellipse1576" cx="104.7" cy="128.04" ry="9.449" rx="22.301"
                    />
                    <ellipse id="ellipse1578" cx="134.18" cy="121.24" ry="11.717" rx="17.009"
                    />
                </g>
            </g>
            <g id="layer1" transform="translate(0 -146)">
                <g id="g1477">
                  <g style={styles.moon} id="layer1" transform="translate(0 0), scale(0.8)">
                    <path d="M 33.137348,295.505 C 17.333783,291.25445 4.4815178,277.68225 0.86447081,261.42432 -2.9521122,244.26951 4.8204648,225.41839 19.813487,215.46659 c 3.600847,-2.3901 11.62849,-6.06079 12.120626,-5.54222 0.113109,0.11918 -0.806289,3.23389 -2.043102,6.92156 -4.496975,13.40815 -3.581107,26.5273 2.75115,39.40823 1.839548,3.74197 4.923809,8.59387 6.853913,10.782 7.111872,8.06264 18.414203,14.51248 29.13039,16.62369 l 6.17082,1.21571 -2.54489,2.11096 c -3.83692,3.18267 -11.80256,7.16746 -17.017118,8.51277 -5.734092,1.47934 -16.608512,1.48215 -22.097928,0.006 z" id="path3188" fill="#faeda0" fillOpacity=".979" fillRule="evenodd" strokeWidth="1.917" />
                  </g>
                    <g style={styles.rain} id="layer1-3" transform="translate(5.31 -4.674)">
                        <g id="g9195" transform="translate(-2.645 2.268)">
                            <g id="g9193" transform="translate(-21.167 42.333)">
                                <g id="g9179" transform="translate(37.797 -66.906)">
                                    <g className="rain-up" style={styles.rainUp} id="g9177" transform="translate(-60.476 179.92)" fill="none" stroke="#0000f7">
                                        <path id="path9169" d="m 70.304,101.21 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                        <path id="path9171" d="m 90.714,101.96 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                        <path id="path9173" d="m 110.37,101.96 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                        <path id="path9175" d="m 130.78,102.72 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                    </g>
                                </g>
                                <g id="g9191" transform="translate(21.922 -41.203)">
                                    <g className="rain-down" style={styles.rainDown} id="g9189" transform="translate(-60.476 179.92)" fill="none" stroke="#0000f7">
                                        <path id="path9181" d="m 70.304,101.21 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                        <path id="path9183" d="m 90.714,101.96 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                        <path id="path9185" d="m 110.37,101.96 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                        <path id="path9187" d="m 130.78,102.72 c -2.5196,3.7795 -5.0395,7.5592 -7.5595,11.339"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g className="lightning-big" style={styles.lightningBig} id="g9448" transform="translate(29.597 15)">
                            <path id="path9446" d="m 1.0591,242.11 1.2333,28.365 12.333,-7.3997 -3.6998,33.299 9.8662,-44.398 -13.566,6.1664 1.2333,-16.033 z"
                            fill="#fffc22" />
                        </g>
                        <g className="lightning-small" style={styles.lightningSmall} transform="translate(58.314 65.769) scale(.77014)" id="g9460">
                            <path d="m 1.0591,242.11 1.2333,28.365 12.333,-7.3997 -3.6998,33.299 9.8662,-44.398 -13.566,6.1664 1.2333,-16.033 z"
                            id="path9458" fill="#fffc22" />
                        </g>
                    </g>
                    <g style={styles.fog} transform="translate(1.648 -152.432) scale(1.42314)" id="layer1-6"
                    fill="none" stroke="white" strokeWidth="7.4" strokeLinecap="round">
                        <g id="g1502">
                            <path id="path12934" d="m 5.1490076,288.47515 c 6.1682384,-2.13848 12.3362874,-4.2769 18.4030074,-4.24834 6.06672,0.0286 12.074544,2.23958 18.061034,4.44274"
                            />
                            <path d="m 78.043894,288.0809 c -5.797324,2.26701 -11.594468,4.53396 -17.651692,4.63676 -6.057223,0.1028 -12.432822,-1.97743 -18.779153,-4.04811"
                            id="path12938" />
                        </g>
                        <g id="g1498">
                            <path d="m 5.1490076,269.57634 c 6.1682384,-2.13848 12.3362874,-4.2769 18.4030074,-4.24834 6.06672,0.0286 12.074544,2.23958 18.061034,4.44274"
                            id="path12968" />
                            <path id="path12970" d="m 78.043894,269.18209 c -5.797324,2.26701 -11.594468,4.53396 -17.651692,4.63676 -6.057223,0.1028 -12.432822,-1.97743 -18.779153,-4.04811"
                            />
                        </g>
                        <g id="g1494">
                            <path id="path12986" d="m 5.1490076,250.67753 c 6.1682384,-2.13848 12.3362874,-4.2769 18.4030074,-4.24834 6.06672,0.0286 12.074544,2.23958 18.061034,4.44274"
                            />
                            <path d="m 78.043894,250.28328 c -5.797324,2.26701 -11.594468,4.53396 -17.651692,4.63676 -6.057223,0.1028 -12.432822,-1.97743 -18.779153,-4.04811"
                            id="path12988" />
                        </g>
                    </g>
                    <g className="snow-up" style={styles.snowUp} id="g9032" transform="translate(20.596 247.613)" stroke="#fff" fill="red"
                    strokeWidth="1.161">
                        <path id="path8458" d="m 67.496086,9.7355977 2.144208,4.6085933 0.505481,-5.057795 -0.44734,5.063262 2.966657,-4.127426 -2.919055,4.16126 4.632915,-2.091138 -4.608593,2.144207 5.057794,0.505481 -5.063262,-0.44734 4.127427,2.966657 -4.16126,-2.919055 2.091138,4.632915 -2.144208,-4.608593 -0.505481,5.057795 0.44734,-5.063263 -2.966657,4.127427 2.919055,-4.16126 -4.632915,2.091138 4.608593,-2.144208 -5.057794,-0.50548 5.063262,0.447339 -4.127427,-2.966656 4.16126,2.919054 z"
                        />
                        <path id="path8460" d="m 45.89038,10.050485 2.144207,4.608592 0.505481,-5.0577941 -0.44734,5.0632621 2.966657,-4.127427 -2.919055,4.16126 4.632915,-2.091138 -4.608593,2.144208 5.057795,0.505481 -5.063263,-0.44734 4.127427,2.966657 -4.16126,-2.919055 2.091138,4.632915 -2.144208,-4.608593 -0.50548,5.057794 0.447339,-5.063262 -2.966656,4.127427 2.919054,-4.16126 -4.632914,2.091138 4.608593,-2.144208 -5.057795,-0.505481 5.063262,0.44734 -4.127426,-2.966657 4.16126,2.919055 z"
                        />
                        <path id="path8462" d="m 23.390078,9.9346613 2.144208,4.6085927 0.505487,-5.0577945 -0.447347,5.0632625 2.966657,-4.127427 -2.919054,4.16126 4.632914,-2.091138 -4.608593,2.144208 5.057795,0.505488 -5.063262,-0.447347 4.127426,2.966657 -4.16126,-2.919055 2.091138,4.632915 -2.144207,-4.608593 -0.505481,5.057794 0.44734,-5.063262 -2.966657,4.127427 2.919054,-4.16126 -4.632914,2.091138 4.608593,-2.144208 -5.057795,-0.505481 5.063263,0.44734 -4.127427,-2.966657 4.16126,2.919055 z"
                        />
                        <path id="path8464" d="M 3.4033745,9.785828 5.5475822,14.39442 6.0530629,9.3366264 5.6057231,14.399888 8.5723798,10.272462 5.6533252,14.433721 10.28624,12.342584 5.677647,14.486791 10.735442,14.992279 5.6721791,14.544932 9.7996059,17.511589 5.638346,14.592534 7.7294838,19.225449 5.5852761,14.616856 5.0797884,19.674651 5.5271352,14.611388 2.5604785,18.738815 5.4795331,14.577555 0.8466186,16.668693 5.4552113,14.524485 0.39741689,14.019004 5.4606792,14.466344 1.3332524,11.499688 5.4945123,14.418742 Z"
                        />
                    </g>
                    <g className="snow-down" style={styles.snowDown} transform="translate(20.596 266.512)" id="g1236" stroke="#fff" fill="red"
                    strokeWidth="1.161">
                        <path d="m 67.496086,9.7355977 2.144208,4.6085933 0.505481,-5.057795 -0.44734,5.063262 2.966657,-4.127426 -2.919055,4.16126 4.632915,-2.091138 -4.608593,2.144207 5.057794,0.505481 -5.063262,-0.44734 4.127427,2.966657 -4.16126,-2.919055 2.091138,4.632915 -2.144208,-4.608593 -0.505481,5.057795 0.44734,-5.063263 -2.966657,4.127427 2.919055,-4.16126 -4.632915,2.091138 4.608593,-2.144208 -5.057794,-0.50548 5.063262,0.447339 -4.127427,-2.966656 4.16126,2.919054 z"
                        id="path1228" />
                        <path d="m 45.89038,10.050485 2.144207,4.608592 0.505481,-5.0577941 -0.44734,5.0632621 2.966657,-4.127427 -2.919055,4.16126 4.632915,-2.091138 -4.608593,2.144208 5.057795,0.505481 -5.063263,-0.44734 4.127427,2.966657 -4.16126,-2.919055 2.091138,4.632915 -2.144208,-4.608593 -0.50548,5.057794 0.447339,-5.063262 -2.966656,4.127427 2.919054,-4.16126 -4.632914,2.091138 4.608593,-2.144208 -5.057795,-0.505481 5.063262,0.44734 -4.127426,-2.966657 4.16126,2.919055 z"
                        id="path1230" />
                        <path d="m 23.390078,9.9346613 2.144208,4.6085927 0.505487,-5.0577945 -0.447347,5.0632625 2.966657,-4.127427 -2.919054,4.16126 4.632914,-2.091138 -4.608593,2.144208 5.057795,0.505488 -5.063262,-0.447347 4.127426,2.966657 -4.16126,-2.919055 2.091138,4.632915 -2.144207,-4.608593 -0.505481,5.057794 0.44734,-5.063262 -2.966657,4.127427 2.919054,-4.16126 -4.632914,2.091138 4.608593,-2.144208 -5.057795,-0.505481 5.063263,0.44734 -4.127427,-2.966657 4.16126,2.919055 z"
                        id="path1232" />
                        <path d="M 3.4033745,9.785828 5.5475822,14.39442 6.0530629,9.3366264 5.6057231,14.399888 8.5723798,10.272462 5.6533252,14.433721 10.28624,12.342584 5.677647,14.486791 10.735442,14.992279 5.6721791,14.544932 9.7996059,17.511589 5.638346,14.592534 7.7294838,19.225449 5.5852761,14.616856 5.0797884,19.674651 5.5271352,14.611388 2.5604785,18.738815 5.4795331,14.577555 0.8466186,16.668693 5.4552113,14.524485 0.39741689,14.019004 5.4606792,14.466344 1.3332524,11.499688 5.4945123,14.418742 Z"
                        id="path1234" />
                    </g>
                    <g transform="translate(5.31 161.326)" id="layer3">
                        <g transform="translate(-.755 -206.445)" id="g11372">
                            <circle style={styles.sun} cx="35.53" cy="243.33" r="30.238" id="circle11352" fill="#ff0"
                            />
                            <g style={styles.cloudDark} transform="translate(-44.602 159.51)" id="g11370" fill="gray">
                                <ellipse rx="20.033" ry="16.631" cy="117.84" cx="65.39" id="ellipse11354"
                                />
                                <ellipse rx="51.027" ry="21.923" cy="105.74" cx="104.7" id="ellipse11356"
                                />
                                <ellipse rx="15.497" ry="17.765" cy="95.539" cx="81.265" id="ellipse11358"
                                />
                                <ellipse rx="30.616" ry="24.568" cy="84.955" cx="114.53" id="ellipse11360"
                                />
                                <ellipse rx="14.363" ry="9.827" cy="119.35" cx="65.012" id="ellipse11362"
                                />
                                <ellipse rx="9.071" ry="10.583" cy="125.4" cx="82.399" id="ellipse11364"
                                />
                                <ellipse rx="22.301" ry="9.449" cy="128.04" cx="104.7" id="ellipse11366"
                                />
                                <ellipse rx="17.009" ry="11.717" cy="121.24" cx="134.18" id="ellipse11368"
                                />
                            </g>
                        </g>
                    </g>

                </g>
            </g>
        </svg>
      )
    }
  }
}

export default WeatherIcons;
