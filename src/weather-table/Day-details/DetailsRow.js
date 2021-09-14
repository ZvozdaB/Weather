import "./DetailsRow.css"

function DetailsRow({data}){
    let temp = Math.round(data.weather?.main.temp);
    temp = (temp > 0) ? "+" + temp + "°" : temp + "°";
    let feelsLike = Math.round(data.weather?.main.feels_like)
    feelsLike = (feelsLike > 0) ? "+" + feelsLike + "°" : feelsLike + "°";
    let humidity = data.weather?.main.humidity;
    let wind = data.weather?.wind.speed;
    let pop = data.weather?.pop.toString() ;
    

    return (
        
            <div className="details__row">
                <div className="row__time">{data.time}</div>
                <div className="row__img"><img src={`http://openweathermap.org/img/wn/${data.weather?.weather[0].icon || "01d"}.png`} alt="day_weather"></img></div>
                <div className="row__temp">{(temp !== "NaN°") ? temp : "--" }</div>
                <div className="row__temp-fils">{(feelsLike !== "NaN°") ? feelsLike : "--" }</div>
                <div>{humidity || "--"}</div>
                <div>{wind || "--"}</div>
            <div>{(pop >= 0) ? Math.round(pop * 100)  : "--"}</div>
            </div>
            
    )
}

export default DetailsRow;