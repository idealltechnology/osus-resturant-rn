import { IFood } from './IFood';

export interface IFoodItem {
  food: IFood;
  isSelected?: boolean;
  select?: (item: IFood) => void;
}
