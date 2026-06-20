export interface IMenu {
    idCategory:string;
    strCategory:string;
    strCategoryThumb:string;
    strCategoryDescription:string;
}

export interface IMeal {
    strMeal: string;
      strMealThumb: string;
      idMeal: string;
      strArea: string;
      strCountry: string;
}

export interface IDetail {
    idMeal: string;
      strMeal: string;
      strMealAlternate: string;
      strCategory:string;
      strArea: string;
      strCountry: string;
      strInstructions:string;
      strYoutube:string;
}