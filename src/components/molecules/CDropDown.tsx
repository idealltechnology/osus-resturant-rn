import React, { FC, useImperativeHandle, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { EnumFontFamilly } from '../enums/EnumFontFamilly';
import { EnumFontSize } from '../enums/EnumFontSize';
import IDropdown from '../interfacesUI/IDropdown';
import Xml from '../Svgs/Xml';
import CText from '../atoms/CText';
import CIconGenerator from '../atoms/CIconGenerator';
import { IText } from '../interfacesUI/IText';

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
        buttonStyle={[DropDownStyles.buttonStyle, { borderBottomColor: notif ? notifColor : ColorSystem.F_Gray!(30) }, allStyles?.buttonStyle]}
        buttonTextStyle={[DropDownStyles.buttonTextStyle, allStyles?.buttonTextStyle, { color: anySelected ? ColorSystem.F_Gray!(80) : ColorSystem.F_Gray!(30) }]}
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
        // buttonTextAfterSelection={(selectedItem, index) => {
        //     // text represented after item is selected
        //     // if data array is an array of objects then return selectedItem.property to render after item is selected
        //     return selectedItem
        // }}
        // rowTextForSelection={(item, index) => {
        //     // text represented for each item in dropdown
        //     // if data array is an array of objects then return item.property to represent item in dropdown
        //     return item
        // }}

        onBlur={() => set_isOpen(false)}
        onFocus={() => set_isOpen(true)}
        renderDropdownIcon={() => {
          return <CIconGenerator iconName={isOpen ? Xml.upOneArrow(ColorSystem.F_Gray!(50)) : Xml.downArrow(ColorSystem.F_Gray!(50))} size={3} />;
        }}
      />
    </View>
  );
});

const DropDownStyles = StyleSheet.create({
  ModalDropdownContainer: { width: '100%', flexDirection: 'column', justifyContent: 'flex-end' },
  buttonStyle: { width: '100%', borderBottomWidth: 1, borderBottomColor: ColorSystem.F_Gray!(30) },
  buttonTextStyle: { fontFamily: EnumFontFamilly.regularYekan, height: '100%', fontSize: EnumFontSize.h5, textAlign: 'left' },
  rowStyle: { borderBottomColor: ColorSystem.White },
  rowTextStyle: { fontFamily: EnumFontFamilly.regularYekan },
  dropdownStyle: {},
  selectedRowStyle: {},
  searchInputStyle: {},
  selectedRowTextStyle: {},
});

export default CDropdown;
