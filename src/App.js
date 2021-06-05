import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Weather from "./components/Weather";
import { weatherActions } from "./store/weatherSlice";
import "./App.css";

function App() {
  const userCity = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather_data);

  function fetchWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ce945fbd27b35f620422f7b0dc33d6&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(weatherActions.weatherDataReducer(data));
      });
  }

  function clickHandler() {
    const city = userCity.current.value;
    if (city.length === 0) alert("Please enter your city first");
    else {
      fetchWeather(city);
      setIsClicked(true);
    }
  }

  return (
    <div className="App">
      {!isClicked ? (
        <div className="index">
          <h1> Enter your city </h1>
          <input type="text" required id="title" ref={userCity} />
          <div>
            <button className="button" onClick={clickHandler}>
              Add
            </button>
          </div>
        </div>
      ) : (
        <Weather data={weatherData} />
      )}
    </div>
  );
}

export default App;
