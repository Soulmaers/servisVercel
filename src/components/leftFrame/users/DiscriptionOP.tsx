
import './DiscriptionOP.css'
import React from 'react'
import { ManagersDataOP } from '../../../interfaces/interfaces'
interface ObjectPorps {
    obj: ManagersDataOP
}


const DiscriptionOP: React.FC<ObjectPorps> = ({ obj }) => {
    function truncateToThreeDecimals(num: number): number {
        return Math.floor(num * 1000) / 1000;
    }
    return (
        <div className='wrap_disc'>
            <div className='title_user'> <div className='child_title_user'>{obj.name}</div></div>
            <table className="disc_table">
                <tbody>
                    <tr>
                        <td className='disc_text'>Звонки</td>
                        <td className='value_disc'>x</td>
                    </tr>
                    <tr>
                        <td className='disc_text'>План на текущий день</td>
                        <td className='value_disc'>{truncateToThreeDecimals(obj.planDay)}</td>
                    </tr>
                    <tr>
                        <td className='disc_text'>Факт на текущий день</td>
                        <td className='value_disc'>{truncateToThreeDecimals(obj.factballs)}</td>
                    </tr>
                    <tr>
                        <td className='disc_text'>Месяц</td>
                        <td className='value_disc'>{obj.planMonth}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default DiscriptionOP