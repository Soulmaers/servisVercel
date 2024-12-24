
import './DiscriptionHeaderTM.css'
import React from 'react'
import { GlobalDataTM } from '../../../interfaces/interfaces'

interface ObjectProps {
    obj: GlobalDataTM
}

const DiscriptionHeaderTM: React.FC<ObjectProps> = ({ obj }) => {
    console.log(obj)
    function truncateToThreeDecimals(num: number): number {
        return Math.floor(num * 1000) / 1000;
    }
    return (


        <div className='discription_header'>
            <div className='title_user'> <div className='child_title_user'>Итого</div></div>
            <table className="disc_table">
                <tbody>
                    <tr>
                        <td className="disc_text_all">Рабочий день</td>
                        <td className='value_disc_all'>{obj.jobDay}</td>
                    </tr>
                    <tr>
                        <td className="disc_text_all">План месяца</td>
                        <td className='value_disc_all'>{obj.planMonth}</td>
                    </tr>
                    <tr>
                        <td className="disc_text_all">Факт месяца</td>
                        <td className='value_disc_all'>{obj.factMonth}</td>
                    </tr>
                    <tr>
                        <td className="disc_text_all">Всего заявок</td>
                        <td className='value_disc_all'>{truncateToThreeDecimals(obj.application)}</td>
                    </tr>
                    <tr>
                        <td className="disc_text_all">Факт на текущий день</td>
                        <td className='value_disc_all'>{obj.factDay}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default DiscriptionHeaderTM