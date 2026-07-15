import React, {useState, useEffect} from "react";
import './App.css';

function Clock() {

  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
    
  const formattedTime = () => {
    return time.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' })
  }

  return (
    <div className="Clock-container">
      <div className="clock">
      <h1>Digital Clock</h1>
      {formattedTime()}
      <div className="date">
      <p>{date.toLocaleDateString()}</p>
      </div>
      </div>
    </div>
  );

}

export default Clock;