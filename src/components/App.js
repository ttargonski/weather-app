import React, { Component } from "react";
import SearchWeather from "./SearchWeather";
import DisplayWeather from "./DisplayWeather";
import "./App.scss";

const APIkey = "a49bd9d09b807b3e76b97a9d1d9d8375";

class App extends Component {
  state = {
    city: "",
    weather: {},
    err: null,
    time: ""
  };

  handlePress = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  };

  handleChange = value => {
    this.setState({
      city: value
    });
  };

  handleClick = () => {
    const currentAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${APIkey}&units=metric&lang=pl`;
    fetch(currentAPI)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie znaleziono miasta");
      })
      .then(response => response.json())
      .then(data => {
        console.log("Pobrano bazę");
        const time = new Date().toLocaleString();
        this.setState({
          weather: data,
          time: time,
          err: false,
          city: ""
        });
      })
      .catch(err => {
        console.log("Nie pobrano z bazy");
        this.setState({
          err: true
        });
      });
    this.setState({
      city: ""
    });
  };

  render() {
    return (
      <div className="app">
        <SearchWeather
          change={this.handleChange}
          click={this.handleClick}
          city={this.state.city}
          press={this.handlePress}
        ></SearchWeather>
        <DisplayWeather data={this.state}></DisplayWeather>
      </div>
    );
  }
}

export default App;
