import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default ({ thick = 1, vertical }: { thick?: number; vertical?: boolean }) => {
  return (
    <View
      style={
        !vertical
          ? {
              width: thick,
            }
          : { height: thick }
      }
    />
  );
};
