import "./Day.css"
function Day(props){
    
    return(
        <div className={`day ${props.activ && "day-activ"}`} onClick={() => props.makeActiv(props.id)} >
            <div className="day-titel">{props.day}</div>
            <div className="day-number">{(props.date > 9) ? props.date : "0" + props.date }</div>
            <div className="day-month">{props.month}</div>
            <div className="day_weather"><img src={`http://openweathermap.org/img/wn/${props.icon || "01d"}@2x.png`} alt="day_weather" /></div>
            <div className="day-temperature">
                <div className="temperature_min"><p className={"temp"}>мін</p><p>{(props.min > 0)&&"+"}{Math.floor(props.min) || "--"}</p></div>
                <div className="temperature_max"><p className={"temp"}>макс</p><p>{(props.max > 0) && "+"}{Math.floor(props.max) || "--"}</p></div>
            </div>
        </div>
    )
}
export default Day;