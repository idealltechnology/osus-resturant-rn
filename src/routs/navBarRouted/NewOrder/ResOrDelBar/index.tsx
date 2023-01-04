import CTabletCulomn from '../../../../components/organisms/CTabletCulomn';
import isTablet from '../../../../utilities/isTablet';
import ResOrDel from './ResOrDel';

export default () => {
  function resDel() {
    return <ResOrDel />;
  }
  return <>{isTablet() ? <CTabletCulomn start={resDel()} /> : resDel()}</>;
};
