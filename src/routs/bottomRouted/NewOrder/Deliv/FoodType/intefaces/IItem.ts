import {IFoodCategory} from './IFoodCategory';

export interface IItem {
  food: IFoodCategory;
  isSelected: boolean;
  select: (item: IFoodCategory) => void;
}
