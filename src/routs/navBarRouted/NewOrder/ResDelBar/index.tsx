import CTabletCulomn from '../../../../components/organisms/CTabletCulomn';
import isTablet from '../../../../utilities/isTablet';
import ResOrDel from '../ResOrDel';

export default ({ press, inRes }: { press: (isIn: boolean) => void; inRes: boolean }) => {
  function resDel() {
    return <ResOrDel inRes={inRes} press={press} />;
  }
  return <>{isTablet() ? <CTabletCulomn start={resDel()} /> : resDel()}</>;
};
