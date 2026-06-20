import { useNavigate } from "react-router";
import type { IMenu } from "../types/menu";


const CategoryCard = (prop:IMenu) => {
   const navigate =useNavigate();
    
  return (
    
        <div  className="  card bg-base-200   shadow-sm col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
  <div className="card bg-base-100  shadow-sm ">
  <figure className="px-10 pt-10">
    <img
      src={prop.strCategoryThumb}
      alt="img"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{prop.strCategory}</h2>


    <p>{prop.strCategoryDescription.substring(0,150)}...</p>

      <button className="btn btn-primary" onClick={() => { 
        navigate("/menu/"+ prop.strCategory)
      }}>Check Menu</button>

</div>  
  </div>
</div>

    

  )
}

export default CategoryCard