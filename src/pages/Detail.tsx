import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { IDetail } from "../types/menu";




const Detail = () => {
    const [details,setDetails]=useState<IDetail[]>();
    const {name,id}= useParams()
    const fetchData= (async() => { 
        try {
            const res= await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
            const data:{meals:[IDetail[] |null]} =await res.json();
          console.log(data);
          setDetails(data.meals)
            
        } catch (error) {
            console.log(error);
            
        }
    })
   console.log(name);
    useEffect(() => { 
        fetchData()
     },[])
      

  return (
    <div className="">{details?.map((item) => { 
        return <div className="items-center text-3xl font-extrabold justify-center p-5 " key={item.idMeal}>
            <img className="w-150 h-auto items-center rounded-2xl shadow mx-150" src={item.strMealThumb} alt="img" />
            <div className="text-center">Food Name: {item.strMeal}</div>
            <div className="text-center"> Product from : {item.strCategory}</div>
           <div className="text-lg text-center link">Instruction video: {item.strYoutube}</div>
            <div className="text-lg text-center p-10">Cooking Instruction: {item.strInstructions}</div>
             
            
            
        </div>
        
     })}</div>
     
  )
}

export default Detail