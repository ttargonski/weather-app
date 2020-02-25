import React from "react";

const DisplayWeather = props => {
  const { weather, err, time } = props.data;

  let content = null;

  if (err === false && weather.name) {
    content = (
      <>
        <p>Aktualna pogoda dla miasta:</p>
        <h1>{weather.name}</h1>
        <h2>{weather.weather[0].description}</h2>
        <h3>
          Aktualna temperatura: <strong>{weather.main.temp} °C</strong>
        </h3>
        <h3>
          Zachmurzenie: <strong>{weather.clouds.all} %</strong>
        </h3>
        <h3>
          Ciśnienie: <strong>{weather.main.pressure} hPa</strong>
        </h3>
        <h3>
          Wilgotność: <strong>{weather.main.humidity} %</strong>
        </h3>
        <h3>
          Prędkość wiatru: <strong>{weather.wind.speed} m/s</strong>
        </h3>
        <p>Czas: {time}</p>
        <p></p>
      </>
    );
  }

  return (
    <div className="weather">
      {err ? <p>Nie znaleziono takiego miasta</p> : content}
    </div>
  );
};

export default DisplayWeather;
