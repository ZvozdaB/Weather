import React, { useState, useEffect } from "react";
import { getData } from './Api';
import './App.css';
import Day from "./weather-table/Day";
import DayDetails from "./weather-table/Day-details";



function App() {
      let [weatherDaily, setWeatherDaily] = useState([])
      useEffect(() => { getData().then(resp => setWeatherDaily(resp.daily)) }, [])

      let [day, setDay] = useState([
            { id: 0, activ: true }, 
            { id: 1, activ: false }, 
            { id: 2, activ: false }, 
            { id: 3, activ: false }, 
            { id: 4, activ: false }
      ])
      
      let dayData = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця","Субота"]
      let mounth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
      
      
      
      function makeActiv(id){
            setDay(day.map(item => {
                  item.activ = (item.id === id) ? true : false;
                  return item
            }))      
      }
      
      let newDay = day.map((item,index)=>{
            let date = new Date()
            date.setDate(date.getDate() + index)
            return <Day activ={item.activ}
                        id={item.id}
                        day={dayData[date.getDay()]} 
                        date={date.getDate()} 
                        month={mounth[date.getMonth()]} 
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
            <DayDetails/>
      </div>
  );
}

export default App;
