import Card from './Card'
import DashboardDataprovider from '../../../context/context'
import './Users.css'


const Users = () => {

    return (
        <div className='container_users'>
            <DashboardDataprovider><Card />   </DashboardDataprovider>

        </div>
    )
}

export default Users