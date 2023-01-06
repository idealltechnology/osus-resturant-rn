import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default ({ thick = 1, vertical }: { thick?: number; vertical?: boolean }) => {
  return (
    <View
      style={
        !vertical
          ? {
              width: widthPercentageToDP(thick),
            }
          : { height: widthPercentageToDP(thick) }
      }
    />
  );
};
