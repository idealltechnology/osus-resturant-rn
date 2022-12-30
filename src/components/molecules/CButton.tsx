import React, { useState, useImperativeHandle, FC } from 'react';
import { TouchableOpacity } from 'react-native';
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

  function backColor() {
    let col = iButtonContainer?.color;

    switch (iButtonContainer.fill) {
      case 'dim':
        return col + '60';
      case 'fill':
        return col;
      default:
        return ColorSystem.White;
    }
  }

  function txt_icon_Color() {
    return iButtonContainer?.fill !== 'fill' ? iButtonContainer?.color : ColorSystem.White;
  }
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
          borderRadius: styleValues.radius05,
          backgroundColor: backColor(),
          alignItems: 'center',
          justifyContent: 'center',
        },
        iButtonContainer?.style,
      ]}
    >
      {iIconSvg && <CIconGenerator size={iIconSvg.size} iconName={iIconSvg.iconName(txt_icon_Color()!)} />}

      <CText
        {...iText}
        style={[
          {
            color: txt_icon_Color(),
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
