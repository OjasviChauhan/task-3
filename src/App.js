import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Weather from "./components/Weather";
import { weatherActions } from "./store/weatherSlice";
import axios from "axios";
import "./App.css";

function App() {
  const userCity = useRef();
  const [Clicked, setClicked] = useState(false);
  const [Loading, setLoading] = useState(0);

  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather_data);

  async function fetchWeather(city) {
    setLoading(1);
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ce945fbd27b35f620422f7b0dc33d6&units=metric`
      )
      .then((response) => {
        dispatch(weatherActions.weatherDataReducer(response.data));
      })
      .catch((err) => {});
    setLoading(2);
  }

  function clickHandler() {
    const city = userCity.current.value;
    if (city.length === 0) alert("Please enter your city first");
    else {
      fetchWeather(city);
      setClicked(true);
    }
  }

  return (
    <div className="App">
      {!Clicked && (
        <div className="index">
          <h1> Enter your city </h1>
          <input type="text" required id="title" ref={userCity} />
          <div>
            <button className="button" onClick={clickHandler}>
              Add
            </button>
          </div>
        </div>
      )}
      {Clicked && Loading === 1 && <h1> Loading... </h1>}
      {Loading === 2 && <Weather cityName={userCity} data={weatherData} />}
    </div>
  );
}

export default App;
