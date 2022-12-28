import { RoutsEnum } from '../../../navigation/router/RoutsEnum';
import Xml from '../../utils/svgs/Xml';
import { Iitem } from './item/Iitem';

const NewOrder: Iitem = { navTo: RoutsEnum.NewOrder, iconName: Xml.newOrder };
const OrderList: Iitem = { navTo: RoutsEnum.OrderList, iconName: Xml.orderList };
const Products: Iitem = { navTo: RoutsEnum.Products, iconName: Xml.products };
const Reservation: Iitem = { navTo: RoutsEnum.Reservation, iconName: Xml.reservation, drawerDown: true };
const Transaction: Iitem = { navTo: RoutsEnum.Transaction, iconName: Xml.transaction, drawerDown: true };

export default [NewOrder, OrderList, Products, Reservation, Transaction];
