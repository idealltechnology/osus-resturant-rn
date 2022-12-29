import React from 'react';
import isTablet from '../../../../utilities/isTablet';
import Mobile from './Mobile';
import Tablet from './Tablet';

export default ({ press }: { press: (isIn: boolean) => void }) => {
  return <>{isTablet() ? <Tablet press={press} /> : <Mobile press={press} />}</>;
};
