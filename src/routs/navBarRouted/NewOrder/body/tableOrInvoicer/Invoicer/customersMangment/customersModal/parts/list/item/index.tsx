import React, { useImperativeHandle } from 'react';
import isTablet from '../../../../../../../../../../../utilities/isTablet';
import Mobile from './mobile';
import { Model } from './Model';
import Tablet from './tablet';

export default React.forwardRef(({ model, noDel }: { noDel?: boolean; model: Model }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return <>{isTablet() ? <Tablet model={model} noDel={noDel} /> : <Mobile {...model} />}</>;
});
