
import { useContext } from 'react'
import DiscriptionHeaderOP from './DiscriptionHeaderOP'
import DiscriptionHeaderTM from './DiscriptionHeaderTM'
import CurcleDiagramm from '../../leftFrame/users/CurcleDiagramm'
import DayPokasatels from '../../leftFrame/users/DayPokasatels'
import SpeedometrUser from '../../leftFrame/users/SpeedometrUser'
import { ContextStateDataGoggle } from '../../../context/context'
import { useRouteContext } from '../../../context/routeContext'
import { GlobalDataTM, GlobalDataOP } from '../../../interfaces/interfaces'


import './Header.css'

const Header = () => {

    const data = useContext(ContextStateDataGoggle);
    const { isTM } = useRouteContext();
    if (!data || !data.opStruktura || !data.tmStruktura) { // Проверяем все необходимые части данных
        return <div className="">Загрузка данных...</div>;
    }
    const globalData = isTM ? data.tmStruktura.globalData : data.opStruktura.globalData
    return (
        <div className="container_header">
            <div className='left_pokasateli'>
                <DayPokasatels count={isTM ? globalData?.factMonth : globalData?.factDay} />
                {isTM ? <DiscriptionHeaderTM obj={globalData as GlobalDataTM} /> : <DiscriptionHeaderOP obj={globalData as GlobalDataOP} />}</div>
            <SpeedometrUser count={isTM ? globalData?.factDay : globalData?.factMonth} style={1} />
        </div>
    )
}

export default Header