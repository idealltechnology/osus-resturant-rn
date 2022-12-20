import React, { useEffect, useImperativeHandle, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';
import TextHelper from '../../utilities/TextHelper';
import { IICon } from '../utils/interfacesUI/IICon';

export const CIconGenerator: FC<IICon> = React.forwardRef(({ iconName, size = 5, style, events }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <TouchableOpacity style={style} disabled={TextHelper.empty(events?.onPress)} onPress={events?.onPress}>
      <SvgXml width={widthPercentageToDP(size)} height={widthPercentageToDP(size)} xml={iconName} />
    </TouchableOpacity>
  );
});

export default CIconGenerator;
