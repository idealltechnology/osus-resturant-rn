import React from 'react';
import { StyleSheet, View } from 'react-native';
import ResOrDel from '../ResOrDel';
import CText from '../../../../components/atoms/CText';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import testStyles from '../../../../components/utils/enums/testStyles';

export default ({ press }: { press: (isIn: boolean) => void }) => {
  return (
    <View>
      <ResOrDel press={press} />
      <CText text="tststtttt" />
    </View>
  );
};
