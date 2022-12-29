import { t } from 'i18next';
export enum labels {
  name = 'labels',
  inResturent = 'inResturent',
  delivery = 'delivery',
  HelloAgain = 'HelloAgain',
  Hello = 'Hello',
  loginGuid = 'loginGuid',
  userName = 'userName',
  password = 'password',
  enterYour = 'enterYour',
}

export enum routs {
  name = 'routs',
  NewOrder = 'NewOrder',
  OrderList = 'OrderList',
  Products = 'Products',
  Reservation = 'Reservation',
  Transaction = 'Transaction',
  Login = 'Login',
}

const mt = (label: string) => {
  var enumS = [labels, routs];
  var name = '';
  enumS.forEach((element) => {
    Object.keys(element).forEach((k) => {
      if (k === label) {
        name = element.name;
        return;
      }
    });
  });

  return t(`${name}.${label}`);
};
export default mt;
