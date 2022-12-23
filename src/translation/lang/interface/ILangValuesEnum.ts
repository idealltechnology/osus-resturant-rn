import { t } from 'i18next';
import mrvTxtTest from '../../../utilities/mrvTxtTest';
export enum labels {
  name = 'labels',
  inResturent = 'inResturent',
  delivery = 'delivery',
}

export enum routs {
  name = 'routs',
  NewOrder = 'NewOrder',
  OrderList = 'OrderList',
  Products = 'Products',
  Reservation = 'Reservation',
  Transaction = 'Transaction',
}

export default (name: any, label: string) => {
  return t(`${name.name}.${label}`);
};
// 'object';
