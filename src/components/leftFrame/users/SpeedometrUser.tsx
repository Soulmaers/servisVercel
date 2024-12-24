
import './SpeedometrUser.css'
import React, { useState, useEffect, useRef } from 'react'


interface PropsSpeedometrs {
    count: string,
    style: number
}
const SpeedometrUser: React.FC<PropsSpeedometrs> = ({ count, style }) => {
    const value = parseFloat(count.trim().slice(0, -1).replace(',', '.'))
    const getRotation = (percentage: number) => {
        const maxAngle = 180; // Максимальный угол
        console.log(percentage * (maxAngle / 100))
        return percentage * (maxAngle / 100); // Угол для вращения
    };

    const flexDirection = style === 1 ? 'column' : 'row';
    const order = style === 1 ? 1 : 0
    const marginLeft = style === 1 ? 0 : 'auto'
    const marginTop = style === 1 ? '10px' : 0
    console.log(count)
    return (
        <div className='speedometr_user all' style={{ display: 'flex', flexDirection, marginLeft }}>
            <div className='numbers_procent' style={{ order, marginTop }}>{count}</div>
            <div className='speedometr'><div className='arrow' style={{
                transform: `rotate(${getRotation(value)}deg)`, // Применение вращения
            }}></div></div>
        </div>
    );
};


export default SpeedometrUser