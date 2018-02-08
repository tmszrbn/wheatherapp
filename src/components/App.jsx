import React, { Component } from 'react';
import '../app.css';
import WeatherCurrent from './WeatherCurrent.jsx';
import Weather48h from './Weather48h.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // c = current, t = two days,
      cLabelsPL: [
        "temperatura odczuwalna", "temperatura powietrza", "miasto", "zagęszczenie chmur", "szerokość geograficzna", "długość geograficzna", "opady śniegu", "opady", "kierunek wiatru - skrót", "kierunek wiatru", "prędkość wiatru", "zasięg widzenia", "ostatnia obserwacja", "ts", "station", "wschód słońca", "zachód słońca", "opis", "opis_code", "pora dnia"
      ],
      cLabelsORG: [
        "app_temp", "temp", "city_name", "clouds", "lat", "lon", "snow", "precip", "wind_cdir_full", "wind_dir", "wind_spd", "vis", "ob_time", "ts", "station", "sunrise", "sunset", "description", "description_code", "pod"
      ],
      tLabelsORG: [
        "app_temp", "clouds", "datetime", "dewpt", "dhi", "pod", "pop", "precip", "precip6h", "pres", "rh", "slp", "snow", "snow6h", "snow_depth", "temp", "ts", "uv", "vis", "weather", "wind_spd", "wind_dir"
      ],
      tLabelsPL: [
        "temperatura odczuwalna", "zachmurzenie", "czas", "dewpt", "dhi", "pod", "prawdopodobieństwo opadów", "opady", "precip6h", "ciśnienie", "rh", "slp", "opsady śniegu", "snow6h", "głebokość śniegu", "temperatura", "ts", "uv", "zasięg widzenia", "pogoda", "prędkość wiatru", "kierunek wiatru"
      ]
    }
  }


  getBy(period, lang='PL') {
    if (document.querySelector('#city').value) {
      this.getWeather(document.querySelector('#city').value)
    } else {
      console.log(!!document.querySelector('#city').value);
      navigator.geolocation.getCurrentPosition(pos => this.getWeather(pos, period, lang))
    }
  }

  toggleMenu() {
    const modalCL = document.querySelector('.modal').classList;
    const modal__contentCL = document.querySelector('.modal__content').classList;
    // console.log(modalCL.contains('modal--hidden'));
    if (modalCL.contains('modal--hidden')) {
      modal__contentCL.remove('modal__content--hidden');
      modalCL.remove('modal--hidden');
    } else {
      modal__contentCL.add('modal__content--hidden');
      modalCL.add('modal--hidden');
    }
  }

  toggle48h() {
    const weather48CL = document.querySelector('.weather-48h').classList;
    if (weather48CL.contains('weather-48h--hidden')) {
      weather48CL.remove('weather-48h--hidden')
      weather48CL.add('weather-48h--half')
    } else if (weather48CL.contains('weather-48h--half')) {
      weather48CL.remove('weather-48h--half')
    } else {
      weather48CL.add('weather-48h--hidden')
    }
  }

  // returns part of the day as string - 'day'/'night'
  getPod(sunrise, sunset) {
    let pod;
    const date_now = new Date();
    let hour_now = date_now.getHours();
    hour_now = (hour_now > 9) ? hour_now : `0${hour_now}`
    const time_now = `${hour_now}:${date_now.getMinutes()}`
    if (sunrise < sunset) {
      time_now >= sunrise && time_now <= sunset ? pod = 'day' : pod = 'night';
    } else {
      time_now >= sunrise || time_now <= sunset ? pod = 'day' : pod = 'night';
    }
    return pod;
  }

  getWeather(position, period='current', lang='pl') {
    const WEATHERBIT_KEY = this.state.API;

    const BASE_URL = (position.coords)
    ? `http://api.weatherbit.io/v2.0/${period}?lang=${lang}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${WEATHERBIT_KEY}`
    : `http://api.weatherbit.io/v2.0/${period}?lang=${lang}&city=${position}&key=${WEATHERBIT_KEY}`

    fetch(BASE_URL)
    .then(r => r.json())
    .then(r => {
      if (period === 'current') {
        const {app_temp, temp, city_name, clouds, lat, lon, snow, precip, wind_cdir_full, wind_dir, wind_spd, vis, ob_time, ts, station, sunrise, sunset} = r.data[0];
        const description = r.data[0].weather.description;
        const description_code = r.data[0].weather.code;
        const pod = this.getPod(sunrise, sunset)
        const cValues = [ app_temp, temp, city_name, clouds, lat, lon, snow, precip, wind_cdir_full, wind_dir, wind_spd, vis, ob_time, ts, station, sunrise, sunset, description, description_code, pod ]
        this.setState({
          cValues
        })
        this.toggleMenu();
      }
      else if (period === 'forecast/hourly') {
        const tValues =[];
        fetch(BASE_URL)
        .then(r => r.json())
        .then(r => {
          r.data.map(hour => {
            const {app_temp, clouds, datetime, dewpt, dhi, pod, pop, precip, precip6h, pres, rh, slp, snow, snow6h, snow_depth, temp, ts, uv, vis, weather, wind_spd, wind_dir} = hour;
            tValues.push([app_temp, clouds, datetime, dewpt, dhi, pod, pop, precip, precip6h, pres, rh, slp, snow, snow6h, snow_depth, temp, ts, uv, vis, weather, wind_spd, wind_dir])})

          this.setState({
            tValues
          });
        });
      }
    })
    .catch(error => {
      if (error.message === "JSON.parse: unexpected end of data at line 1 column 1 of the JSON data") {
        console.log('City not found');
      }
      else {
        console.log('ERROR!!!', error);
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="modal">
          <form className="modal__content">
            <input
              placeholder="klucz API"
              type="text"
              onChange={event => this.setState({
                'API': event.target.value
              })}
            />
            <input
              // onClick={event => event.default()}
              id="city"
              placeholder="miasto"
            type="text"
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.getBy();
              }
            }}/>
            <button className="modal__close" onClick={() => this.toggleMenu()}>
              <span className="fas fa-times"></span>
            </button>
            <input
              className={"modal__button"}
              type={"button"}
              value={"miasto"}
              onClick={ () =>  this.getBy() }>
            </input>
            <input
              className={"modal__button"}
              type={"button"}
              value={"geolokalizacja"}
              onClick={ () =>  this.getBy() }>
            </input>
          </form>
        </div>
        <div className="togglers">
          <button
            className="toggler-48h"
            onClick={() => {
              this.toggle48h();
              this.state.tValues ? null : this.getBy('forecast/hourly');
            }}>
            <span>48h</span>
          </button>
          <button className="toggler-menu" onClick={() => this.toggleMenu()}>
            <span className="fas fa-bars" />
          </button>
        </div>
        <div className="weather">
          <WeatherCurrent weather={this.state} />
          <div className="weather-48h weather-48h--hidden">
            <Weather48h weather={this.state} />
          </div>
        </div>
      </div>
    );
  }
}
