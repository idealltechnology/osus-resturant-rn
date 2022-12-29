import React, { useEffect, useImperativeHandle, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';
import TextHelper from '../../utilities/TextHelper';
import resizer from '../utils/enums/resizer';
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
      <SvgXml width={resizer(wp(size))} height={resizer(wp(size))} xml={iconName} />
    </TouchableOpacity>
  );
});

export default CIconGenerator;
