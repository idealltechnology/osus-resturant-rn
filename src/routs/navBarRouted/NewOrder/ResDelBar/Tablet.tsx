import React from 'react';
import { StyleSheet, View } from 'react-native';
import ResOrDel from '../ResOrDel';
import CText from '../../../../components/atoms/CText';
import testStyles from '../../../../components/utils/enums/testStyles';
import CTabletCulomn from '../../../../components/organisms/CTabletCulomn';

export default ({ press }: { press: (isIn: boolean) => void }) => {
  return <CTabletCulomn start={<ResOrDel press={press} />} end={<CText text="tststtttt" />} />;
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'row' },
  part: { borderWidth: 1, flex: 1 },
});
