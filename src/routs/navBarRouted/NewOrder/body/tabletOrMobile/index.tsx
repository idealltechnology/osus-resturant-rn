import isTablet from '../../../../../utilities/isTablet';
import Mobile from './mobile';
import Tablet from './tablet';

export default () => {
  return isTablet() ? <Tablet /> : <Mobile />;
};
