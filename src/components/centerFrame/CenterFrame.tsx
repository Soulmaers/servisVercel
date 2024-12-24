import Header from './header/Header'
import CenterBody from './CenterBody'
import DashboardDataprovider from '../../context/context'
import './CenterFrame.css'

const CenterFrame = () => {
    return (
        <div className='container_center'>

            <DashboardDataprovider><Header /></DashboardDataprovider>
            <DashboardDataprovider><CenterBody /></DashboardDataprovider>
        </div>

    )
}


export default CenterFrame