import "./Day.css"
function Day(props){
    let dayData = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
    let mounth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
    
    let date = new Date(props.dt);
    let day = dayData[date.getDay()]
    let dayNumber = date.getDate()
    dayNumber = (dayNumber > 9) ? dayNumber : "0" + dayNumber
    let month = mounth[date.getMonth()]
    
        
    return(
        <div className={`day ${props.activ && "day-activ"}`} onClick={() => props.makeActiv(props.id)} >
            <div className="day-titel">{day}</div>
            <div className="day-number">{dayNumber }</div>
            <div className="day-month">{month}</div>
            <div className="day_weather"><img src={`http://openweathermap.org/img/wn/${props.icon || "01n"}@2x.png`} alt="day_weather" /></div>
            <div className="day-temperature">
                <div className="temperature_min"><p className="temp">мін</p><p>{(props.min > 0) && "+"}{Math.floor(props.min) }&#176;</p></div>
                <div className="temperature_max"><p className="temp">макс</p><p>{(props.max > 0) && "+"}{Math.floor(props.max)}&#176;</p></div>
            </div>
        </div>
    )
}
export default Day;