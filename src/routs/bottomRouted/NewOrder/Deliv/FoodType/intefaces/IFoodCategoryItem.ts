import { IFoodCategory } from './IFoodCategory';

export interface IFoodCategoryItem {
  food: IFoodCategory;
  isSelected: boolean;
  select: (item: IFoodCategory) => void;
}
