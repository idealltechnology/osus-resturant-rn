import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CGap from '../../../../../components/atoms/CGap/inex';
import CText from '../../../../../components/atoms/Ctext';
import CButton from '../../../../../components/molecules/CButton/CButton';
import CInputText from '../../../../../components/molecules/CInputText';
import CModal from '../../../../../components/organisms/CModal';
import styleValues from '../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../translation/lang/basics/ILangValuesEnum';

export default React.forwardRef(({}, ref) => {
  const moalRef = useRef<any>();
  useImperativeHandle(ref, () => {
    return {
      // showModal
    };
  });

  useEffect(() => {
    // moalRef.current.setShowModal(true);

    reset();
  }, []);

  const reset = () => {};

  // const showModal = () => {
  //   moalRef.current.setShowModal(true);
  // };

  return (
    <>
      <CModal name={mt(labels.AddNote)} ref={moalRef} style={defStyl.modal}>
        <View style={defStyl.main}>
          <CInputText input={{}} style={defStyl.input} />
          <CGap vertical thick={2} />
          <CButton
            iText={{ text: mt(labels.save) }}
            iButtonContainer={{
              events: {
                onPress() {
                  moalRef.current.setShowModal(false);
                },
              },
              color: ColorSystem.BrandColor,
              fill: 'fill',
            }}
          />
        </View>
      </CModal>
      <CText
        events={{
          onPress() {
            moalRef.current.setShowModal(true);
          },
        }}
        text={mt(labels.AddNote)}
        style={defStyl.addNote}
      />
    </>
  );
});

const defStyl = StyleSheet.create({
  modal: {
    // marginVertical: styleValues.paddin15,
    padding: styleValues.paddin05,
  },
  main: {
    padding: styleValues.paddin01,
    flex: 1,
    // borderWidth: 1,
  },
  input: {
    flex: 1,
  },

  addNote: {
    borderBottomWidth: 1.5,
    borderBottomColor: ColorSystem.gray!(50),
  },
});
