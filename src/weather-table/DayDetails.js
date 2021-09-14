import React, { useState, useEffect  } from "react";
import { getData } from "../Api";
import "./DayDetails.css"
import DetailsRow from "./Day-details/DetailsRow";
import DetailsInfo from "./Day-details/DetailsInfo";

function DayDetails(props) {
    let [weatherDet, setWeatherDet] = useState([])
    useEffect(() => { getData(2,props.cord).then(resp => setWeatherDet(resp.list)) }, [props.cord])
    
    
    let now = new Date(props.date);
    let UTC = now.getTimezoneOffset() * 60
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

    let newWeatherDet = weatherDet.filter(item => { return (item.dt >= (today.getTime() / 1000 - UTC) && item.dt < (tomorrow.getTime() / 1000 - UTC)) ? item : null });
    
    let dayliData = [
        { time: "00:00", weather: undefined},
        { time: "03:00", weather: undefined },
        { time: "06:00", weather: undefined },
        { time: "09:00", weather: undefined },
        { time: "12:00", weather: undefined },
        { time: "15:00", weather: undefined },
        { time: "18:00", weather: undefined },
        { time: "21:00", weather: undefined },]

    dayliData.forEach( (item,index) => {
        let ind = 8 - newWeatherDet.length;
        item.weather = newWeatherDet[index-ind]
    })
    
    return (
        <div className="day-details">
            <div className="details__tables">
                <DetailsInfo />
                <div className="details__column">
                    <div className="details__titel">ніч</div>
                    <DetailsRow data={dayliData[0] }/>
                    <DetailsRow data={dayliData[1]}/>
                </div>
                <div className="details__column">
                    <div className="details__titel">ранок</div>
                    <DetailsRow data={dayliData[2]}/>
                    <DetailsRow data={dayliData[3]}/>
                </div>
                <div className="details__column">
                    <div className="details__titel">день</div>
                    <DetailsRow data={dayliData[4]}/>
                    <DetailsRow data={dayliData[5]}/>
                </div>
                <div className="details__column">
                    <div className="details__titel">вечір</div>
                    <DetailsRow data={dayliData[6]}/>
                    <DetailsRow data={dayliData[7]}/>
                </div>
                
            </div>
        </div>
    )
}
export default DayDetails;