import './DayPokasatels.css'
import React, { useState, useEffect, useRef } from 'react'

interface DayPokasatelsPops {

    count: string
}

const DayPokasatels: React.FC<DayPokasatelsPops> = ({ count }) => {
    // stroke={countNumber < 80 ? "red" : (countNumber < 100 ? "yellow" : "green")}
    let countNumber = parseFloat(count.trim().slice(0, -1).replace(',', '.'))
    console.log(countNumber)
    const color = {
        backgroundColor: countNumber < 80 ? "red" : (countNumber < 100 ? "yellow" : "#2FC1C3")
    }
    console.log(count)
    return (<div className="day_cel" style={color}>
        <div className="text_cel">{count}</div>
    </div>)
}


export default DayPokasatels