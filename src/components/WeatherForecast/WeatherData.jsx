
const WeatherData = ( props ) => {
    const { day, conditions, time } = props

  return (
    <div className="weather-data">
        <h2>{day}</h2>
        <p><span>Conditions: </span> {conditions} </p>
        <p><span>Time: </span> {time} </p>
    </div>
  )
}

export default WeatherData