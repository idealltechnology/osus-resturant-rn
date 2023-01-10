import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import resizer from '../../utils/enums/resizer';

export default ({ thick = 1, vertical }: { thick?: number; vertical?: boolean }) => {
  return (
    <View
      style={
        !vertical
          ? {
              width: resizer(thick),
            }
          : { height: resizer(thick) }
      }
    />
  );
};
