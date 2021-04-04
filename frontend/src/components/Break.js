import { React, useState } from 'react';

function Break() {

    // Break period is 5 mins in Pomodoro Study Technique
    const [breakTime, setBreakTime] = useState(5*60)

    const decrementBreakTime = () => {
        const newBreakTime = breakTime - 60
        if(newBreakTime < 0) {
            setBreakTime(0)
        } else{

        }
        setBreakTime(newBreakTime)
    }

    const incrementBreakTime = () => {
        const newBreakTime = breakTime + 60
        setBreakTime(newBreakTime);
    }

    return (
        <>
        <p id="break-label">Break</p>
        <p id="break-length">{breakTime}</p>
        <button onClick={decrementBreakTime}>-</button>
        <button onClick={incrementBreakTime}>+</button>
        </>
    );
}

export default Break;