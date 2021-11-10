import React from 'react'

const CountDownTimer = ({hoursMinSecs = {hours:1, minutes: 1, seconds: 10}}) => {
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    
    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div className="timer mt-4 mb-2">
            <div className="time-count">
                <span className="text-time">00</span>
                <span className="text-day">Dias</span>
            </div>
            <div className="time-count">
                <span className="text-time">{hrs.toString().padStart(2, '0')}</span>
                <span className="text-day">Horas</span>
            </div>
            <div className="time-count">
                <span className="text-time">{mins.toString().padStart(2, '0')}</span>
                <span className="text-day">Min</span>
            </div>
            <div className="time-count">
                <span className="text-time">{secs.toString().padStart(2, '0')}</span>
                <span className="text-day">Seg</span>
            </div>
        </div>
    );
}

export default CountDownTimer;