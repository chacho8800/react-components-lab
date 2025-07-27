import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon.jsx";
import WeatherData from "./WeatherData.jsx";

const WeatherForecast = ( props ) => {
    const { day, img, imgAlt, conditions, time } = props

    return (
        <div className="weather">
            <WeatherIcon src={img} alt={imgAlt} />
            <WeatherData day={day} conditions={conditions} time={time} />
        </div>
    )
}

export default WeatherForecast