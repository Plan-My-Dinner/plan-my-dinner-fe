export interface RandomMealProps {
    strMeal: string;
    idMeal: string;
    strMealThumb: string;
    locked: boolean;
    setLocked: (locked: boolean) => void;
  }