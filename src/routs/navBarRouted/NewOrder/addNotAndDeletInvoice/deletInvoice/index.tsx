import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CGap from '../../../../../components/atoms/CGap/inex';
import CIconGenerator from '../../../../../components/atoms/CIconGenerator/inedx';
import CText from '../../../../../components/atoms/Ctext';
import CModal from '../../../../../components/organisms/CModal';
import { EnumFontSize } from '../../../../../components/utils/enums/EnumFontSize';
import styleValues from '../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../translation/lang/basics/ILangValuesEnum';

export default React.forwardRef(({}, ref) => {
  const moalRef = useRef<any>();
  useImperativeHandle(ref, () => {
    return { showModal };
  });

  useEffect(() => {
    // moalRef.current.setShowModal(true);
  }, []);

  const showModal = () => {
    moalRef.current.setShowModal(true);
  };

  return (
    <>
      <CModal ref={moalRef} screenMode="alert">
        <View style={defStyl.main}>
          <CIconGenerator iconName={Xml.warning} size={20} />
          <CText text={mt(labels.deletOrder)} style={defStyl.title} />
          <CText text={mt(labels.areYouSureTodeletOrder)} />
          <View style={defStyl.yesNoView}>
            <CText text={mt(labels.yes) + mt(labels.cln) + ' ' + mt(labels.delete)} style={[defStyl.yesNoBtn, defStyl.yes]} />
            <CGap thick={10} />
            <CText
              text={mt(labels.no) + mt(labels.cln) + ' ' + mt(labels.cancel)}
              style={[defStyl.yesNoBtn, defStyl.no]}
              events={{
                onPress() {
                  moalRef.current.setShowModal(false);
                },
              }}
            />
          </View>
        </View>
      </CModal>
      <CIconGenerator
        iconName={Xml.delete}
        events={{
          onPress() {
            moalRef.current.setShowModal(true);
          },
        }}
      />
    </>
  );
});

const defStyl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: EnumFontSize.h3,
    marginVertical: styleValues.paddin03,
  },
  yesNoView: {
    marginTop: styleValues.paddin05,
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
  },
  yesNoBtn: { paddingVertical: styleValues.paddin03, paddingHorizontal: styleValues.paddin10, borderRadius: styleValues.radius05, textAlign: 'center' },
  yes: { backgroundColor: ColorSystem.Error, color: ColorSystem.White },
  no: { backgroundColor: ColorSystem.gray!(10), color: ColorSystem.gray!(60) },
});
