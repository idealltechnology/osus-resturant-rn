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
  additionalFood = 'additionalFood',
  addItInvoice = 'addItInvoice',
  tables = 'tables',
  foods = 'foods',
  summery = 'summery',

  finishInvoice = 'finishInvoice',
  newCustomer = 'newCustomer',
  pausInvoice = 'pausInvoice',
  previewInvoice = 'previewInvoice',
  save = 'save',
  AddNote = 'AddNote',
  yes = 'yes',
  no = 'no',
  delete = 'delete',
  cancel = 'cancel',
  deletOrder = 'deletOrder',
  areYouSureTodeletOrder = 'areYouSureTodeletOrder',
  cln = 'cln',
  smiCln = 'smiCln',

  tableNumber = 'tableNumber',
  typeTable = 'typeTable',

  productName = 'productName',
  quantity = 'quantity',
  price = 'price',
  discount = 'discount',
  total = 'total',
  action = 'action',

  subtotal = 'subtotal',
  tax = 'tax',

  paymentMethod = 'paymentMethod',
  cahs = 'cahs',
  creditCard = 'creditCard',

  amount = 'amount',
  add = 'add',
  customers = 'customers',
  address = 'address',
  phone = 'phone',
  Name = 'Name',
  page = 'page',
  from = 'from',
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
