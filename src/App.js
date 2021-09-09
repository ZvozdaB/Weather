import React, { useState, useEffect } from "react";
import { getData } from './Api';
import './App.css';
import Day from "./weather-table/Day";
import DayDetails from "./weather-table/DayDetails.js";



function App() {
      let [weatherDaily, setWeatherDaily] = useState([])
      useEffect(() => { getData().then(resp => setWeatherDaily(resp.daily)) }, [])
      let [day, setDay] = useState([
            { id: 0, activ: true , date:undefined}, 
            { id: 1, activ: false, date: undefined},
            { id: 2, activ: false, date: undefined},
            { id: 3, activ: false, date: undefined},
            { id: 4, activ: false, date: undefined}
      ])
      let [activId, setActivId] = useState(0)

      
      
      
      
      function makeActiv(id){
            setActivId(id);
            setDay(day.map(item => {
                  item.activ = (item.id === id) ? true : false;
                  return item
            }))      
      }
      
      let newDay = day.map((item,index)=>{
            day[index].date = weatherDaily[index]?.dt * 1000
            return <Day activ={item.activ}
                        id={item.id}
                        dt={weatherDaily[index]?.dt * 1000} 
                        key={index} 
                        min={weatherDaily[index]?.temp.min} 
                        max={weatherDaily[index]?.temp.max} 
                        icon={weatherDaily[index]?.weather[0].icon}
                        makeActiv={makeActiv} />
      })
      
      return (
      <div className="box">
            <div className="day-box">
                    {newDay}
            </div>
            <DayDetails date={day[activId].date}/>
      </div>
  );
}

export default App;
