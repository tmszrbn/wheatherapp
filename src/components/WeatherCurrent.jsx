import React, { Component } from 'react';
import WeatherIcons from './WeatherIcons';

export default class WeatherCurrent extends Component {

  render() {
    const weather = this.props.weather;
    const cValues = this.props.weather.cValues;
    const cLabelsPL = this.props.weather.cLabelsPL;

    const icons = {
      sunrise: <svg xmlns="http://www.w3.org/2000/svg" width="20mm" height="10mm" viewBox="0 0 104 35" id="svg8">
          <g id="layer1" transform="translate(0 -262)" strokeLinecap="round">
            <path d="M 6.8643132,292.67268 H 92.165154" id="path830" fill="none" strokeWidth="3.093"/>
            <path id="path1628" d="m -338.66665,32.416664 a 18.142857,18.142857 0 0 1 -0.0104,0.61466" fillRule="evenodd" stroke="#fff" strokeWidth="100"/>
            <path id="path1630" d="m 5.9639416,289.90213 a 25.491728,25.491728 0 0 1 12.7458634,-22.07648 25.491728,25.491728 0 0 1 25.491728,0 25.491728,25.491728 0 0 1 12.745864,22.07648 H 31.455669 Z" fillRule="evenodd" stroke="#fff" strokeWidth=".833" strokeOpacity=".007"/>
          </g>
        </svg>,
        sunset: <svg xmlns="http://www.w3.org/2000/svg" width="20mm" height="10mm" viewBox="0 0 104 35" id="svg8">
          <g id="layer1" transform="translate(0 -262)" strokeLinecap="round">
            <path d="M 92.165154,292.67268 H 6.8643132" id="path830" fill="none" strokeWidth="3.093"/>
            <path id="path1628" d="m -338.66665,32.416664 a 18.142857,18.142857 0 0 1 -0.0104,0.61466" fillRule="evenodd" stroke="#fff" strokeWidth="100"/>
            <path id="path1630" d="m -93.065527,289.90213 a 25.491728,25.491728 0 0 1 12.745864,-22.07648 25.491728,25.491728 0 0 1 25.491728,0 25.491728,25.491728 0 0 1 12.745864,22.07648 h -25.491728 z" transform="scale(-1 1)" fillRule="evenodd" stroke="#fff" strokeWidth=".833" strokeOpacity=".007"/>
          </g>
        </svg>,
        wind: <svg xmlns="http://www.w3.org/2000/svg" width="26mm" height="13mm" viewBox="0 0 26 13" id="svg8">
          <g id="layer1" transform="translate(0 -284)" fill="none" strije="#fff"
          strokeLinecap="round">
            <path id="path12" d="M 0.89199922,289.29244 H 14.80122" strokeWidth=".593"
            />
            <path d="M 1.0068392,291.42908 H 20.82449" id="path822" strokeWidth=".708"
            />
            <path id="path828" d="M 0.84912922,293.56571 H 18.04904" strokeWidth=".659"
            />
            <path d="m 18.04904,293.56571 c 0.36272,0.27279 0.586605,0.7213 0.586605,1.17515 0,0.45385 -0.223885,0.90236 -0.586605,1.17515 -0.224095,0.16853 -0.497276,0.27098 -0.776931,0.29136 -0.279655,0.0204 -0.564802,-0.0414 -0.810961,-0.17566 -0.246159,-0.13426 -0.452465,-0.34057 -0.586738,-0.58672 -0.134274,-0.24616 -0.196042,-0.5313 -0.17567,-0.81096"
            id="path830" strokeWidth=".659" />
            <path d="m 14.80122,289.29244 c 0.642888,-6.1e-4 1.281577,-0.26569 1.735953,-0.7205 0.454375,-0.4548 0.718856,-1.09374 0.718856,-1.73663 0,-0.64289 -0.264481,-1.28183 -0.718856,-1.73663 -0.454376,-0.45481 -1.093065,-0.71989 -1.735953,-0.7205 -0.625852,-5.9e-4 -1.248481,0.2489 -1.700748,0.6815 -0.452266,0.43261 -0.729172,1.04354 -0.756382,1.6688"
            id="path834" strokeWidth=".659" />
            <path d="m 20.82449,291.42908 c 1.087997,0.39376 2.3633,0.22409 3.310501,-0.44044 0.947201,-0.66452 1.540739,-1.80597 1.540739,-2.96303 0,-1.15705 -0.593538,-2.2985 -1.540739,-2.96302 -0.947201,-0.66453 -2.222504,-0.8342 -3.310501,-0.44044 -0.574131,0.20778 -1.093972,0.56364 -1.495418,1.02368 -0.401446,0.46005 -0.683629,1.02329 -0.811752,1.62027"
            id="path838" strokeWidth=".659" />
          </g>
        </svg>
    }

    if (weather.cValues) {
      return (
        <div className="current-weather">
          <h2>Aktualna pogoda</h2>
          <ul className="current-weather-list">
            <li className={"current-weather-list__item current-weather-list__city_name tooltip"} data-tooltip={cLabelsPL[2]} >
              {cValues[2]}
            </li>
            <li className={"current-weather-list__item current-weather-list__description tooltip"} data-tooltip={cLabelsPL[17]}>
              {cValues[17] ? cValues[17] : <span className="lack-of-data">brak danych</span>}
            </li>
            <li className={"current-weather-list__item current-weather-list__description_code"} >
              <WeatherIcons period="current" code={cValues[18]} pod={cValues[19]}/>
            </li>
            <li className={"current-weather-list__item current-weather-list__ob_time tooltip"} data-tooltip={cLabelsPL[12]} >
              {cValues[12] ? cValues[12] : <span className="lack-of-data">brak danych</span>}
            </li>
            <ul className="current-weather-list__items_container">
              <li className={"current-weather-list__item current-weather-list__temp tooltip"} data-tooltip={cLabelsPL[1]} >
                <span className="visuallyhidden">{cLabelsPL[1]}</span><span aria-hidden="true" className="fas fa-thermometer-half"/>{typeof cValues[1] === 'number' ? `${cValues[1]}\u00B0C` : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__app_temp tooltip"} data-tooltip={cLabelsPL[0]} >
                <span className="visuallyhidden">{cLabelsPL[0]}</span><span aria-hidden="true" className="fas fa-hand-paper"/>{typeof cValues[0] === 'number' ? `${cValues[0]}\u00B0C` : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__vis tooltip"} data-tooltip={cLabelsPL[11]} >
                <span className="visuallyhidden">{cLabelsPL[11]}</span><span aria-hidden="true" className="fas fa-eye"></span>{typeof cValues[11] === 'number' ? `${cValues[11]}\u0020km` : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__clouds tooltip"} data-tooltip={cLabelsPL[3]}>
                <span className="visuallyhidden">{cLabelsPL[3]}</span><span aria-hidden="true" className="fas fa-cloud"></span>{typeof cValues[3] === 'number' ? `${cValues[3]}%` : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__precip tooltip"} data-tooltip={cLabelsPL[7]} >
                <span className="visuallyhidden">{cLabelsPL[7]}</span><span aria-hidden="true" className="fas fa-tint"></span>{typeof cValues[7] === 'number' ? `${cValues[7]}\u0020mm` : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__snow tooltip"} data-tooltip={cLabelsPL[6]} >
                <span className="visuallyhidden">{cLabelsPL[6]}</span><span aria-hidden="true" className="far fa-snowflake"></span>{typeof cValues[6] === 'number' ? `${cValues[6]}\u0020mm` : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__sunrise tooltip"} data-tooltip={cLabelsPL[15]} >
                {icons['sunrise']}{cValues[15] ? cValues[15] : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__sunset tooltip"} data-tooltip={cLabelsPL[16]} >
                {icons['sunset']}{cValues[16] ? cValues[16] : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__wind_dir tooltip"} data-tooltip={"kierunek wiatru"} >
                {typeof cValues[9] === 'number' ?
                <div><span style={{transform:`rotate(${cValues[9]}deg)`}} aria-hidden="true">↓</span><span className="visuallyhidden">{cValues[8]}</span></div> 
                : <span className="lack-of-data">brak danych</span>}
              </li>
              <li className={"current-weather-list__item current-weather-list__wind_spd tooltip"} data-tooltip={cLabelsPL[10]} >
                {icons['wind']}{typeof cValues[10] === 'number' ? `${cValues[10]}\u0020m/s` : <span className="lack-of-data">brak danych</span>}
              </li>
            </ul>
          </ul>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
}
