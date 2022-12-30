//#region ... imports
import { useEffect, FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CInputText from '../../../../components/molecules/CInputText';
import ColorSystem from '../../../../configs/color/ColorSystem';
import CButton from '../../../../components/molecules/CButton';
import mt, { labels, routs } from '../../../../translation/lang/basics/ILangValuesEnum';
import styleValues from '../../../../components/utils/enums/styleValues';
import Xml from '../../../../components/utils/svgs/Xml';

//#endregion

const Form: FC = () => {
  const [showPass, set_showPass] = useState(false);

  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <View style={defStyyl.mainView}>
      <CInputText
        title={{ text: mt(`${labels.userName}`) }}
        input={{
          borderColor: ColorSystem.BrandColor,
          placeHoldr: { text: mt(`${labels.enterYour}`) + ' ' + mt(`${labels.userName}`) },
        }}
        endIcon={{ iconName: Xml.atSign, color: ColorSystem.gray!(30) }}
        // requier
      />
      <CInputText
        title={{ text: mt(`${labels.password}`) }}
        input={{
          borderColor: ColorSystem.BrandColor,
          placeHoldr: { text: mt(`${labels.enterYour}`) + ' ' + mt(`${labels.password}`) },
          keyboardType: !showPass ? 'pass' : 'visible-password',
        }}
        endIcon={{
          iconName: showPass ? Xml.eye : Xml.dontShowPass,
          color: ColorSystem.gray!(30),
          event: {
            onPress() {
              set_showPass(!showPass);
            },
          },
        }}
      />
      <CButton
        iButtonContainer={{
          fill: 'fill',
          events: {
            onPress() {},
          },
          color: ColorSystem.BrandColor,
          style: defStyyl.btn,
        }}
        iText={{ text: mt(routs.Login) }}
      />
    </View>
  );
};
export default Form;
const defStyyl = StyleSheet.create({
  mainView: { flex: 1, justifyContent: 'center', marginTop: styleValues.paddin05 },
  btn: { marginTop: styleValues.paddin05 },
});
