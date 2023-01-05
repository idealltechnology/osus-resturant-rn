import { useRef } from 'react';
import CText from '../../../../../../components/atoms/CText';

import SimpleTab from '../../../../../../components/organisms/simpleTab';
import { ISimpleTab } from '../../../../../../components/organisms/simpleTab/ISimpleTab';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import FoodSelector from '../../FoodSelector';
import TableOrInvoicer from '../../tableOrInvoicer';

export default () => {
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
    item: <CText text="sum" />,
  };
  const list = [tbls, food, summery];

  return <SimpleTab ref={simpleTabRef} list={list} />;
};
