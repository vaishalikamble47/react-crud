import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
const RouteLayout =()=>{
    return(
        <>
        <Navbar/>
        <Outlet />
        </>
    )
}
export default RouteLayout;