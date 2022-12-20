import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CIconGenerator from '../../components/atoms/CIconGenerator';
import Xml from '../../components/utils/svgs/Xml';
import ColorSystem from '../../configs/color/ColorSystem';
import NewOrder from '../../routs/bottomRouted/NewOrder';
import OrderList from '../../routs/bottomRouted/OrderList';
import Products from '../../routs/bottomRouted/Products';
import Reservation from '../../routs/bottomRouted/Reservation';
import Transaction from '../../routs/bottomRouted/Transaction';
import { RoutsEnum } from './RoutsEnum';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = Xml.newOrder;
          switch (route.name) {
            case RoutsEnum.NewOrder:
              iconName = Xml.newOrder;
              break;

            case RoutsEnum.OrderList:
              iconName = Xml.orderList;
              break;

            case RoutsEnum.Products:
              iconName = Xml.products;
              break;

            case RoutsEnum.Reservation:
              iconName = Xml.reservation;
              break;

            case RoutsEnum.Transaction:
              iconName = Xml.transaction;
              break;

            default:
              break;
          }

          // You can return any component that you like here!
          return <CIconGenerator iconName={iconName(color)} />;
        },
        tabBarActiveTintColor: ColorSystem.BrandColor,
        tabBarInactiveTintColor: ColorSystem.F_Gray!(50),
        headerShown: false,
      })}
    >
      <Tab.Screen name={RoutsEnum.NewOrder} component={NewOrder} />
      <Tab.Screen name={RoutsEnum.OrderList} component={OrderList} />
      <Tab.Screen name={RoutsEnum.Products} component={Products} />
      <Tab.Screen name={RoutsEnum.Reservation} component={Reservation} />
      <Tab.Screen name={RoutsEnum.Transaction} component={Transaction} />
    </Tab.Navigator>
  );
}
export default MyTabs;
