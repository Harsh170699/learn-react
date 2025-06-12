import { useState } from 'react';
import './ToggleSwitch.css';
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchLight } from "react-icons/pi";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    const checkIsOn = isOn ? 'on' : 'off';
    const toggleBgColor = { backgroundColor: isOn ? '#4caf50' : '#f44336' }
    return (
        <>
            <h1 style={{color: '#000', textAlign: 'center'}}>
                Toggle Switch {' '}<IoIosSwitch style={{color: 'red', textAlign: 'center'}}/>
                <PiUserSwitchLight />
            </h1>
            <div className="toggle-switch" onClick={handleToggleSwitch} style={toggleBgColor}>
                <div className={`switch ${checkIsOn}`}>
                    <span className="switch-state">{checkIsOn}</span>
                </div>
            </div>
        </>
    )
}