export interface RandomMealProps extends Meal {
  locked: boolean;
}

  export interface Meal {
    strMeal: string;
    idMeal: string;
    strMealThumb: string;
  };