import { useNavigate } from "react-router"

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar sticky top-0 z-10 bg-slate-600">
   
        <div className="container  ">
            <div className="flex gap-3 items-center justify-between">
               <div className="flex gap-3 items-center">
                 <img src="https://cdn-icons-png.flaticon.com/128/1830/1830839.png" className="w-15 h-15" alt="" />
                <p>Hsu's cooking..</p>
               </div>
            
                <div className="gap-5">
                <div className="btn btn-info" onClick={() => { navigate("/menu")}}>Menu</div>

                </div>
            
        </div>
        </div>
    </div>
  )
}

export default NavBar