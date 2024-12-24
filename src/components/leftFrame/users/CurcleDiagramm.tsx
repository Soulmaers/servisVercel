

import './CurcleDiagramm.css'
import React, { useState, useEffect, useRef } from 'react'


interface CurcleDiagrammProps {
    radius: number,
    strokeWidth: number,
    width: number,
    height: number,
    borderRadius: string,
    count: string
}

const CurcleDiagramm: React.FC<CurcleDiagrammProps> = ({ count, radius, strokeWidth, width, height, borderRadius }) => {
    const [state, setState] = useState<number>(0)
    const intervalId = useRef<NodeJS.Timeout | null>(null);

    console.log(radius, strokeWidth, width, height)
    let countNumber = parseFloat(count.trim().slice(0, -1).replace(',', '.'))
    console.log(countNumber)
    countNumber = !isNaN(countNumber) ? countNumber : 0
    useEffect(() => {
        intervalId.current = setInterval(() => {
            setState((prev) => (prev >= 100 ? 0 : prev + 1)); // Увеличиваем до 100
        }, 60000);
        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };

    }, [state])



    const normalizedRadius = radius - strokeWidth / 2; // Нормализованный радиус
    const circumference = 2 * Math.PI * normalizedRadius; // Длина окружности

    // Прокачка окружности визуализирует выполнение
    console.log(countNumber)
    const value = countNumber > 100 ? 100 : countNumber
    const strokeDashoffset = circumference - (value / 100) * circumference;
    console.log(strokeDashoffset)
    return (
        <div className='curcle_diagramm_low' style={{ borderRadius: borderRadius }}>
            <svg width={width} height={height}>

                <circle
                    stroke="red"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke={countNumber < 80 ? "red" : (countNumber < 100 ? "yellow" : "green")}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeDasharray={circumference + ' ' + circumference} // Устанавливаем длину окружности
                    strokeDashoffset={strokeDashoffset} // Устанавливаем прокачку
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} // Плавная анимация
                />
                <text className='text_proc'
                    x={radius + 2}
                    y={radius + 3}
                    alignmentBaseline="middle"
                    textAnchor="middle"
                    fill='#fff'

                >
                    {countNumber}%
                </text>
            </svg></div>
    );
}


export default CurcleDiagramm