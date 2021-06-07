import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Weather.css";
import { cityActions } from "../store/citySlice";
import axios from "axios";
import Home from "./Home";

function Weather(props) {
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.city.city_data);
  const [imageData, setImageData] = useState({});

  const state = {
    apiUrl: "https://pixabay.com/api/",
    apiKey: "21959088-a46bf6f32e34570148e8ef1db",
  };

  async function fetchImageHandler() {
    await axios
      .get(
        `${state.apiUrl}?key=${state.apiKey}&q=${props.data.name}&image_type=photo`
      )
      .then((res) => {
        dispatch(cityActions.cityDataReducer(res.data));
      });
  }

  useEffect(() => {
    fetchImageHandler();
    setImageData(cityData);
  }, [props.cityName]);

  // style={{ backgroundImage: `url(${})` }}
  console.log(cityData);
  // console.log(typeof cityData);
  // console.log(imageData);
  // console.log(props.data);

  return props.data.name ? (
    <div>
      <Home city={props.cityName} data={cityData} />
      <h1>{props.data?.main?.temp} °C</h1>
      <h5>
        {props.data?.name}, {props.data.sys.country}
      </h5>
    </div>
  ) : (
    <h2>City Not Found</h2>
  );
}

export default Weather;
