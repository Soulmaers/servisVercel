import DiscriptionTM from './DiscriptionTM'
import DiscriptionOP from './DiscriptionOP'
import SpeedometrUser from './SpeedometrUser'
import CurcleDiagramm from './CurcleDiagramm'
import DayPokasatels from './DayPokasatels'
import { useState, useEffect, useContext } from 'react'
import { ContextStateDataGoggle } from '../../../context/context'
import useRouterType from '../../../hooks/hooksRoute'
import { useRouteContext } from '../../../context/routeContext'
import { ManagersDataTM, ManagersDataOP } from '../../../interfaces/interfaces'
import './Card.css'



const Card = () => {
    const data = useContext(ContextStateDataGoggle)
    const { isTM } = useRouteContext();


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!data || !data.opStruktura || !data.tmStruktura) { // Проверяем все необходимые части данных
        return <div className="">Загрузка данных...</div>;
    }
    const managersData = isTM ? data.tmStruktura?.managersData : data.opStruktura?.managersData
    console.log(managersData)
    const card = managersData?.map((user, index) => <div className="user_card" key={`${user.name}-${user.factDay}`}>
        <div className='body_content'>
            <DayPokasatels count={isTM ? user.factMonth : user.factDay} />
            {isTM ? <DiscriptionTM obj={user as ManagersDataTM} /> : <DiscriptionOP obj={user as ManagersDataOP} />}
            <SpeedometrUser count={isTM ? user.factDay : user.factMonth} style={0} />

        </div>
    </div>)

    console.log(windowWidth)
    return (
        <>
            {card}
        </>
    )
}

export default Card