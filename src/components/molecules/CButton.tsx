import React, { useState, useRef, useEffect, useImperativeHandle, FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Spinner } from 'native-base';
import { IButton } from '../utils/interfacesUI/IButton';
import styleValues from '../utils/enums/styleValues';
import CIconGenerator from '../atoms/CIconGenerator';
import CText from '../atoms/CText';
import ColorSystem from '../../configs/color/ColorSystem';

export const CButton: FC<IButton> = React.forwardRef(({ iText, iIconSvg, iButtonContainer }, ref) => {
  useImperativeHandle(ref, () => {
    return { setIsloading };
  });

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <TouchableOpacity
      disabled={iButtonContainer?.disabled}
      onPress={iButtonContainer?.events?.onPress && iButtonContainer?.events?.onPress}
      style={[
        !iButtonContainer?.fill && {
          borderWidth: 1,
          borderColor: iButtonContainer?.color,
        },
        {
          flexDirection: 'row',
          padding: styleValues.paddin03,
          borderRadius: styleValues.paddin02,
          // width: '100%',
          backgroundColor: iButtonContainer?.fill ? iButtonContainer?.color + (iButtonContainer?.disabled ? '70' : '') : ColorSystem.White,
          alignItems: 'center',
          justifyContent: 'center',
        },
        iButtonContainer?.style,
      ]}
    >
      {iIconSvg && <CIconGenerator size={iIconSvg.size} iconName={iIconSvg.iconName(iButtonContainer?.fill ? ColorSystem.White! : iButtonContainer.color!)} />}

      <CText
        {...iText}
        style={[
          {
            color: !iButtonContainer?.fill ? iButtonContainer?.color : ColorSystem.White,
            flex: 1,
            textAlign: 'center',
            textAlignVertical: 'center',
          },
          iText?.style,
        ]}
      />
      {isLoading && <Spinner color={ColorSystem.White} />}
    </TouchableOpacity>
  );
});

export default CButton;

const defaultStyle = StyleSheet.create({
  sharedStyle: {
    height: 50,
    width: wp(90),
    margin: 0,
  },

  one: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginHorizontal: 0,
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    // borderWidth: 1,
  },
});
