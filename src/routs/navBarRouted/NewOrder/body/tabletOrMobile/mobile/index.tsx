import { useRef } from 'react';

import SimpleTab from '../../../../../../components/organisms/simpleTab';
import { ISimpleTab } from '../../../../../../components/organisms/simpleTab/ISimpleTab';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import AddNotAndDeletInvoice from '../../../addNotAndDeletInvoice';
import FoodSelector from '../../FoodSelector';
import Sunmery from '../../sunmery';
import TableOrInvoicer from '../../tableOrInvoicer';

export default () => {
  // TODO mobile order body

  const simpleTabRef = useRef<any>();

  const tbls: ISimpleTab = {
    id: 1,
    name: mt(labels.tables),
    item: (
      <TableOrInvoicer
        select={() => {
          simpleTabRef.current.movForward();
        }}
      />
    ),
  };
  const food: ISimpleTab = {
    id: 1,
    name: mt(labels.foods),
    item: (
      <FoodSelector
        select={() => {
          simpleTabRef.current.movForward();
        }}
      />
    ),
  };
  const summery: ISimpleTab = {
    id: 1,
    name: mt(labels.summery),
    item: <Sunmery />,
  };
  const list = [tbls, food, summery];

  return <SimpleTab ref={simpleTabRef} list={list} />;
};
