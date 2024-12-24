
import './DiscriptionTM.css'
import React from 'react'
import { ManagersDataTM } from '../../../interfaces/interfaces'
interface ObjectPorps {
    obj: ManagersDataTM
}


const DiscriptionTM: React.FC<ObjectPorps> = ({ obj }) => {
    function truncateToThreeDecimals(num: number): number {
        return Math.floor(num * 1000) / 1000;
    }
    console.log(obj)
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
                        <td className='disc_text'>Кол-во от 30 сек</td>
                        <td className='value_disc'>x</td>
                    </tr>
                    <tr>
                        <td className='disc_text'>Кол-во от 60 сек</td>
                        <td className='value_disc'>x</td>
                    </tr>
                    <tr>
                        <td className='disc_text'>Всего заявок</td>
                        <td className='value_disc'>{obj.application}</td>
                    </tr>
                    <tr>
                        <td className='disc_text'>Качественные заявки</td>
                        <td className='value_disc'>{obj.qualityApplications}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default DiscriptionTM