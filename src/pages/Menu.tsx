import { useEffect, useState } from "react";
import type { IMenu } from "../types/menu"
import CategoryCard from "../compontents/CategoryCard";




const Menu = () => {
  const  [categories, setCategories] = useState <IMenu[] | undefined>()
  
  

  const fetchData= async () => { 
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const data: {categories: IMenu[]} = await response.json();
      setCategories(data.categories)
      
    } catch (error) {
      console.log(error);
      
    }
  }
 
 useEffect(() => { fetchData() },[])
  return (
    
     
      <div className=" grid grid-cols-12 gap-10 ">{
        categories?.map((item ) => {
          return(
          <CategoryCard key={item.idCategory}  idCategory={item.idCategory} strCategory={item.strCategory}
             strCategoryThumb={item.strCategoryThumb} strCategoryDescription={item.strCategoryDescription}/>
          )
          
          
})}
      </div>  
    
)
}

export default Menu