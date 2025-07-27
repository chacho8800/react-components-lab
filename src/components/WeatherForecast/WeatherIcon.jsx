
const WeatherIcon = ( props ) => {
  const { src, alt } = props
  
  return (
    <div className="weather-icon">
        <img src={src} alt={alt} />
    </div>
  )
}

export default WeatherIcon