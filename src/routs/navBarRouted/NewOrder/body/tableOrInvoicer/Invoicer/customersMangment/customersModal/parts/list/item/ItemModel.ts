import { Model } from './Model';

export interface ItemModel {
  model: Model;
  select: (model: Model) => void;
  delet: (model: Model) => void;
}
