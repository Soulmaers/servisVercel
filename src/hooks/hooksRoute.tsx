import { useLocation } from "react-router-dom";


const useRouterType = () => {
    const location = useLocation()
    const type = location.pathname === '/tm' ? true : false
    return type
}


export default useRouterType