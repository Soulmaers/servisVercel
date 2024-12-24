
import './CenterBody.css'
import React from 'react'
import { IoMdStar } from "react-icons/io";

import { useContext } from 'react'
import { ContextStateDataGoggle } from '../../context/context'
import { useRouteContext } from '../../context/routeContext'

const CenterBody = () => {
    const data = useContext(ContextStateDataGoggle)
    const { isTM } = useRouteContext();
    if (!data || !data.opStruktura || !data.tmStruktura) { // Проверяем все необходимые части данных
        return <div className="">Загрузка данных...</div>;
    }
    const managersData = isTM ? data.tmStruktura.managersData : data.opStruktura.managersData

    const card = managersData.map((user, index) => {
        if (index === 0) {
            return (
                <div className='card_manager_lider cm'>
                    <div className='number_lider'></div>
                    <div className='star_rate row'>{user.name}</div>
                    <div className='star_rate row'>{user.factMonth}</div>
                </div >
            )

        }
        else if (index === 1) {
            return (
                <div className='card_manager_two cm'>
                    <div className='number'>2</div>
                    <div className='manager_rate row'>{user.name}</div>
                    <div className='manager_rate row'>{user.factMonth}</div>
                </div>
            )
        }
        else if (index === 2) {
            return (
                <div className='card_manager_three cm'>
                    <div className='number'>3</div>
                    <div className='manager_rate row'>{user.name}</div>
                    <div className='manager_rate row'>{user.factMonth}</div>
                </div>
            )
        }

    })
    return (
        <div className="container_body">
            <>
                <div className='title_rate row'>РЕЙТИНГ</div>
                <div className='wrap_managers'>
                    {card}
                </div>
            </>
        </div>
    )
}

export default CenterBody