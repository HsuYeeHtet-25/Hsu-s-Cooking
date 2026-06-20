import { Outlet } from "react-router"
import NavBar from "../compontents/NavBar"


const MenuLayout = () => {
  return (
    <>
    <NavBar/>
    <div className="p-3 mx-auto container "></div>
    <Outlet />
    
    </>
  )
}

export default MenuLayout