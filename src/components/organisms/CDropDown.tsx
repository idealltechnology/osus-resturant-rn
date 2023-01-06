import React, { FC, useImperativeHandle, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorSystem from '../../configs/color/ColorSystem';
import CIconGenerator from '../atoms/CIconGenerator/inedx';
import CText from '../atoms/Ctext';
import { EnumFontFamilly } from '../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../utils/enums/EnumFontSize';
import IDropdown from '../utils/interfacesUI/IDropdown';
import { IText } from '../atoms/Ctext/IText';
import Xml from '../utils/svgs/Xml';
import SelectDropdown from './dropdown';

const CDropdown: FC<IDropdown> = React.forwardRef(({ title, data, event, defaultButtonText, style, search, allStyles }, ref) => {
  useImperativeHandle(ref, () => {
    return { _onNotify };
  });

  const [isOpen, set_isOpen] = useState(false);
  const [anySelected, set_anySelected] = useState(false);
  const [notifColor, notifColorSetter] = useState<string | null>();
  const [notif, notifSetter] = useState<IText | null>(null);

  const _onNotify = (text: string | null, type: 'warning' | 'error' | null) => {
    var color = type !== 'warning' ? ColorSystem.Error : ColorSystem.Warning;
    notifColorSetter(color);

    text
      ? notifSetter({
          text: text,
          style: { color: color, textAlign: 'left', fontSize: EnumFontSize.h6 },
        })
      : notifSetter(null);
  };

  const listGenerator = () => {
    var resList: string[] = [];
    data.listPropName
      ? data.list.forEach((element) => {
          resList.push(modelItemsGenerator(element));
        })
      : (resList = data.list);
    return resList;
  };

  function modelItemsGenerator(element: any) {
    return typeof data.listPropName === 'string' ? element[data.listPropName] : combinedValues(element);
  }

  function combinedValues(element: any) {
    var txt = '';
    for (let index = 0; index < data.listPropName!.length; index++) {
      txt = txt + ' ' + element[data?.listPropName![index]];
    }
    return txt;
  }

  return (
    <View style={[DropDownStyles.ModalDropdownContainer, style]}>
      {title && <CText {...title} />}
      <SelectDropdown
        defaultButtonText={defaultButtonText ? defaultButtonText : 'لطفا انتخاب کنید'}
        buttonStyle={[DropDownStyles.buttonStyle, { borderBottomColor: notif ? notifColor : ColorSystem.gray!(30) }, allStyles?.buttonStyle]}
        buttonTextStyle={[DropDownStyles.buttonTextStyle, allStyles?.buttonTextStyle, { color: anySelected ? ColorSystem.gray!(80) : ColorSystem.gray!(30) }]}
        rowStyle={[DropDownStyles.rowStyle, allStyles?.rowStyle]}
        rowTextStyle={[DropDownStyles.rowTextStyle, allStyles?.rowTextStyle]}
        dropdownStyle={[DropDownStyles.dropdownStyle, allStyles?.dropdownStyle]}
        selectedRowStyle={[DropDownStyles.selectedRowStyle, allStyles?.selectedRowStyle]}
        searchInputStyle={[DropDownStyles.searchInputStyle, allStyles?.searchInputStyle]}
        selectedRowTextStyle={[DropDownStyles.selectedRowTextStyle, allStyles?.selectedRowTextStyle]}
        search={search}
        data={listGenerator()}
        onSelect={(value: string, index: number) => {
          // console.log(selectedItem, index)

          event?.onSelect && event.onSelect(data.list[index], index, value);
          set_anySelected(true);
          notifSetter(null);
        }}
        onBlur={() => set_isOpen(false)}
        onFocus={() => set_isOpen(true)}
        renderDropdownIcon={() => {
          return <CIconGenerator iconName={isOpen ? Xml.upOneArrow(ColorSystem.gray!(50)) : Xml.downArrow(ColorSystem.gray!(50))} size={3} />;
        }}
      />
    </View>
  );
});

const DropDownStyles = StyleSheet.create({
  ModalDropdownContainer: { width: '100%', flexDirection: 'column', justifyContent: 'flex-end' },
  buttonStyle: { width: '100%', borderBottomWidth: 1, borderBottomColor: ColorSystem.gray!(30) },
  buttonTextStyle: { fontFamily: EnumFontFamilly.regularYekan, height: '100%', fontSize: EnumFontSize.h5, textAlign: 'left' },
  rowStyle: { borderBottomColor: ColorSystem.White },
  rowTextStyle: { fontFamily: EnumFontFamilly.regularYekan },
  dropdownStyle: {},
  selectedRowStyle: {},
  searchInputStyle: {},
  selectedRowTextStyle: {},
});

export default CDropdown;
