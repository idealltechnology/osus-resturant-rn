import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CButton from '../../../../../components/molecules/CButton';
import CInputText from '../../../../../components/molecules/CInputText';
import CModal from '../../../../../components/organisms/CModal';
import styleValues from '../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../translation/lang/basics/ILangValuesEnum';

export default React.forwardRef(({}, ref) => {
  const moalRef = useRef<any>();
  useImperativeHandle(ref, () => {
    return { showModal };
  });

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {};

  const showModal = () => {
    moalRef.current.setShowModal(true);
  };

  return (
    <>
      <CModal ref={moalRef} style={defStyl.modal}>
        <View style={defStyl.main}>
          <CInputText input={{}} />
          <CButton iText={{ text: mt(labels.addItInvoice) }} iButtonContainer={{ color: ColorSystem.BrandColor, fill: 'fill' }} />
        </View>
      </CModal>
      <CButton iText={{ text: 'AddNote' }} iButtonContainer={{ color: ColorSystem.BrandColor }} />
    </>
  );
});

const defStyl = StyleSheet.create({
  modal: {
    marginVertical: styleValues.paddin10,
    padding: styleValues.paddin05,
  },
  main: {
    padding: styleValues.paddin01,
    flex: 1,
    // borderWidth: 1,
  },
  additionalBtn: { flex: 2 },
  additionalTitle: { flex: 5 },
  additional: {
    flexDirection: 'row',
  },
  additionalList: {
    padding: styleValues.paddin01,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },

  foodItem: {
    borderWidth: 1,
    borderColor: ColorSystem.gray!(50),
    borderRadius: styleValues.paddin01,
  },
});
