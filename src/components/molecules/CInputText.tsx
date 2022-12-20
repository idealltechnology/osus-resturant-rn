import React, { useState, useRef, useEffect, useImperativeHandle, FC, Ref } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import ColorSystem from '../../configs/color/ColorSystem';
import TextHelper from '../../utilities/TextHelper';
import CIconGenerator from '../atoms/CIconGenerator';
import CText from '../atoms/CText';
import CTextStared from '../atoms/CTextStared';
import { EnumFontFamilly } from '../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../utils/enums/EnumFontSize';
import styleValues from '../utils/InterfaceStyles/styleValues';
import { IInputText } from '../utils/interfacesUI/IInputText';
import { IText } from '../utils/interfacesUI/IText';
import Xml from '../utils/svgs/Xml';

export const CInputText: FC<IInputText> = React.forwardRef(({ requier, startIcon, endIcon, title, input, style: style }, ref) => {
  useImperativeHandle(ref, () => {
    return { _onNotify };
  });

  const [value, setValue] = useState<string>('');
  const [notif, notifSetter] = useState<IText | null>(null);
  const [notifColor, notifColorSetter] = useState<string | null>();

  const _onNotify = (text: string | null, type: 'warning' | 'error' | null) => {
    var color = type !== 'warning' ? ColorSystem.Error : ColorSystem.Warning;
    notifColorSetter(color);

    notifSetter({
      text: text!,
      style: { color: color, textAlign: 'left', fontSize: EnumFontSize.h6 },
    });
  };

  function isMobileNumber(e: string) {
    return e.substring(0, 2) === '09' || e.substring(0, 2) === '۰۹';
  }

  function _textCorrecter(e: string) {
    if (input?.keyboardType === 'phone-pad' || input?.keyboardType === 'mobile') {
      e = TextHelper.numOnly(e);

      if (input.keyboardType === 'mobile') {
        !isMobileNumber(e) ? _onNotify('فرمت شماره موبایل نادرست است.', 'error') : _onNotify(null, null);
      } else {
        isMobileNumber(e) ? _onNotify('فرمت شماره نادرست', 'error') : _onNotify(null, null);
      }
    }

    return e;
  }

  return (
    <TouchableOpacity
      disabled={input?.editable || input?.editable === undefined}
      onPress={input.events?.onPress}
      style={[
        //   testStyles.tstG,
        {
          flexDirection: 'row',
          width: '100%',
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: ColorSystem.F_Gray!(20),
          borderRadius: styleValues.radius03,
          paddingHorizontal: styleValues.paddin02,
        },
        style,
      ]}
    >
      {title && <CTextStared {...title} />}

      <View
        style={[
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        {startIcon && <CIconGenerator iconName={startIcon!.iconName(notif ? notifColor! : startIcon.color!)} size={startIcon!.size} style={[{ marginEnd: styleValues.paddin01 }]} />}
        <TextInput
          editable={input?.editable}
          value={value}
          keyboardType={input?.keyboardType === 'mobile' ? 'phone-pad' : input?.keyboardType}
          onChangeText={(e) => {
            input?.events?.onChangeText && input?.events?.onChangeText(_textCorrecter(e));
            setValue(_textCorrecter(e));
            notifSetter(null);
          }}
          onSubmitEditing={input?.events?.onSubmitEditing}
          style={[
            {
              textAlign: 'right',
              fontFamily: EnumFontFamilly.regularYekan,
              flex: 1,
            },
            input.style,
          ]}
          // borderColor={notif ? notifColor : input?.borderColor}
          // borderColor={'rgb1(0,0,0,0.9)'}
          // variant={input?.variant ? input?.variant : 'underlined'}
          maxLength={input.maxLength ? input.maxLength : input?.keyboardType === 'mobile' || 'phone-pad' ? 11 : 5000}
          placeholder={input?.placeHoldr?.text}
          placeholderTextColor={input?.placeHoldr?.color ? input?.placeHoldr?.color : ColorSystem.BrandColor}
          textAlignVertical={input?.textAlignVertical}
          textAlign={input?.textAlign}
        />

        {endIcon ? (
          <CIconGenerator iconName={endIcon!.iconName(notif ? notifColor! : endIcon!.color!)} size={endIcon!.size} style={{ marginStart: styleValues.paddin01 }} />
        ) : value ? (
          <CIconGenerator
            iconName={Xml.clearInputText()}
            size={3}
            style={{ marginStart: styleValues.paddin01 }}
            events={{
              onPress() {
                setValue('');
                input?.events?.onChangeText && input?.events?.onChangeText('');
              },
            }}
          />
        ) : (
          <></>
        )}
      </View>
      {notif?.text && <CText {...notif} />}
    </TouchableOpacity>
  );
});
// }
export default CInputText;
