import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CButton from '../../../../../../../components/molecules/CButton/CButton';
import CModal from '../../../../../../../components/organisms/CModal';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../../../translation/lang/basics/ILangValuesEnum';
import ArrayHelper from '../../../../../../../utilities/ArrayHelper';
import { IFood } from '../../intefaces/IFood';
import Additional from './Additional';
import AdditionalFoodItem from './AdditionalFoodItem';

export default React.forwardRef(({}, ref) => {
  const moalRef = useRef<any>();
  const [theFood, theFoodSetter] = useState<IFood>({ code: '', _id: 0, image: '', name: '', price: 0 });
  const [selectedFoods, selectedFoodsSetter] = useState<IFood[]>([]);
  useImperativeHandle(ref, () => {
    return { showModal };
  });

  useEffect(() => {
    reset();
  }, [theFood]);

  const reset = () => {
    selectedFoodsSetter([]);
  };

  const showModal = (food: IFood) => {
    moalRef.current.setShowModal(true);
    theFoodSetter(food);
  };
  function isSelected(food: IFood) {
    return selectedFoods.filter((i) => i._id === food._id).length > 0;
  }
  return (
    <>
      <CModal ref={moalRef} style={defStyl.modal}>
        <View style={defStyl.main}>
          <AdditionalFoodItem food={theFood} />
          <Additional />

          <ScrollView>
            <View style={defStyl.additionalList}>
              {theFood.addList?.map((item, index) => (
                <AdditionalFoodItem
                  isSelected={isSelected(item)}
                  food={item}
                  select={() => {
                    if (!isSelected(item)) {
                      var sdf = ArrayHelper.deepClone(selectedFoods);
                      sdf.push(item);
                      selectedFoodsSetter(sdf);
                    } else {
                      var sdf = ArrayHelper.deepClone(selectedFoods);
                      selectedFoodsSetter(sdf.filter((i: IFood) => i._id !== item._id));
                    }
                  }}
                />
              ))}
            </View>
          </ScrollView>
          <CButton iText={{ text: mt(labels.addItInvoice) }} iButtonContainer={{ color: ColorSystem.BrandColor, fill: 'fill' }} />
        </View>
      </CModal>
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
