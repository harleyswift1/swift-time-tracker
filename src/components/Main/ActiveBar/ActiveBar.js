import "./ActiveBar.css"
import {useEffect, useState} from "react";
import Divider from "../../Utils/Divider/Divider";

export default function ActiveBar() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return(
        <div className="main-active">
            <div className="main-active-content">
                <p className="main-active-title">What's being worked on...?</p>
                <div className="main-active-content-tools">
                    <p>£8.43</p>
                    <Divider vertical={true} length={30}/>
                    <p>{(Math.floor(seconds / 60 / 60).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                    }))}:{Math.floor(seconds / 60).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                    })}:{(seconds % 60).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                    })}</p>
                    <button onClick={toggle} style={{backgroundColor: isActive ? "#CE4848" : "#6bc94f"}} className="stop-start-button">{isActive ? "STOP" : "START"}</button>
                </div>

            </div>
        </div>
    )

}