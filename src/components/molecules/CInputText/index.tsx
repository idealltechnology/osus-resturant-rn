import React, { FC, useImperativeHandle, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import TextHelper from '../../../utilities/TextHelper';
import CIconGenerator from '../../atoms/CIconGenerator/inedx';
import { IText } from '../../atoms/Ctext/IText';
import CTextStared from '../../atoms/CTextStared/CTextStared';
import { EnumFontFamilly } from '../../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import styleValues from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import { IInputText } from './IInputText';

export const CInputText: FC<IInputText> = React.forwardRef(({ startIcon, endIcon, title, input, style }, ref) => {
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

  const keyboardType = () => {
    switch (input.keyboardType) {
      case 'mobile':
        return 'phone-pad';
      case 'pass':
        return 'default';

      default:
        input.keyboardType;
    }
  };

  return (
    <View style={[defStyl.main, style]}>
      {title && <CTextStared {...title} />}
      <View style={[defStyl.inputContainer]}>
        {startIcon && <CIconGenerator style={defStyl.icons} iconName={startIcon!.iconName(notif ? notifColor! : startIcon.color!)} size={startIcon!.size} />}
        <TextInput
          multiline={input?.editable}
          editable={input?.editable}
          value={input.keyboardType === 'pass' ? ''.padEnd(value.length, '*') : value}
          keyboardType={keyboardType()}
          onChangeText={(e) => {
            input?.events?.onChangeText && input?.events?.onChangeText(_textCorrecter(e));
            setValue(_textCorrecter(e));
            notifSetter(null);
          }}
          onSubmitEditing={input?.events?.onSubmitEditing}
          style={[
            {
              height: '100%',
              textAlign: 'right',
              fontFamily: EnumFontFamilly.regularYekan,
              flex: 1,
            },
            input.style,
          ]}
          maxLength={input.maxLength ? input.maxLength : input?.keyboardType === 'mobile' || 'phone-pad' ? 11 : 5000}
          placeholder={input?.placeHoldr?.text}
          placeholderTextColor={input?.placeHoldr?.color ? input?.placeHoldr?.color : ColorSystem.gray!(50)}
          textAlignVertical={input?.textAlignVertical}
          textAlign={input?.textAlign}
        />

        {endIcon ? (
          <CIconGenerator events={endIcon.event} iconName={endIcon!.iconName(notif ? notifColor! : endIcon!.color!)} size={endIcon!.size} style={defStyl.icons} />
        ) : value ? (
          <CIconGenerator
            style={defStyl.icons}
            iconName={Xml.clearInputText()}
            size={3}
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
    </View>
  );
});
// }
export default CInputText;
const defStyl = StyleSheet.create({
  main: {},
  inputContainer: {
    // height: '100%',

    // width: '100%',
    borderColor: ColorSystem.gray!(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: styleValues.paddin02,
    backgroundColor: ColorSystem.gray!(5),
    justifyContent: 'center',
  },
  icons: {
    marginHorizontal: styleValues.paddin02,
  },
  title: {
    marginTop: styleValues.paddin04,
    marginBottom: styleValues.paddin01,
  },
});
