import React, { useState, useEffect } from "react";
import { getData } from './Api';
import './App.css';
import Day from "./weather-table/Day";
import DayDetails from "./weather-table/DayDetails.js";
import Input from "./weather-table/Input";



function App() {
      let [weatherDaily, setWeatherDaily] = useState([])
      let [cord, setCord] = useState({ lat: 49.838261, lng: 24.023239})
      const [address, setAddress] = useState('');
      let [city,setCity] = useState('Львів, Львівська область, Україна');

      useEffect(() => { getData(1, cord).then(resp => setWeatherDaily(resp.daily)) }, [cord])
      
      
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
            <Input address={address} setAddress={setAddress} cord={cord} setCord={setCord} setCity={setCity}/>
                  <div className="city">Погода у<span> {city}</span></div>
            <div className="day-box">
                    {newDay}
            </div>
            <DayDetails date={day[activId].date} cord={cord}/>
      </div>
  );
}

export default App;
