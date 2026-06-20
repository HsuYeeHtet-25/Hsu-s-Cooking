import { useEffect, useState} from "react";
import {  useNavigate, useParams } from "react-router"
import type { IMeal } from "../types/menu";

const SubMenu = () => {
    const [meals,setMeals]=useState<IMeal[] >();
    
    const {name}=useParams();
   const navigate=useNavigate();
    const fetchData=async() => { 
        try {
            const res=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+ name);
            const data:{
                meals:IMeal[] |null } =await res.json();
         
           setMeals(data.meals)
  
        } catch (error) {
            console.log(error);
            
        }}
     
 useEffect(() => {
        fetchData();
      },[])

       if (!meals) {
        return <div className="text-3xl text-error text-center">{name} not found...</div>
     }
     
  return (
    // [IMeal]
    <div className="grid grid-cols-12 gap-5 my-auto">
        {meals.map((item) => { 
        return <div onClick={() => {
            navigate("/menu/"+name+"/"+ item.idMeal)
            
            console.log("You", name, item.idMeal);
            
         }} className=" mx-7 p-3 w-2lg h-60px shadow-md col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3" key={item.idMeal}>
            <img src={item.strMealThumb} className="items-center rounded-2xl" alt=""/>
            <p className="text-lg md:text-2xl lg:text-3xl text-center font-extrabold p-3">{item.strMeal}</p>
        </div>
     })}</div>
  )
}

export default SubMenu