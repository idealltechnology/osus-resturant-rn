import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CText from '../../../atoms/Ctext';
import { Iitem } from './Iitem';
import { t } from 'i18next';
import { routs } from '../../../../translation/lang/basics/ILangValuesEnum';
import isTablet from '../../../../utilities/isTablet';
import CIconGenerator from '../../../atoms/CIconGenerator/inedx';
import ColorSystem from '../../../../configs/color/ColorSystem';
import Xml from '../../../utils/svgs/Xml';
import { RoutsEnum } from '../../../../navigation/router/RoutsEnum';

export default ({ item, current, navigation }: { item: Iitem; current: string; navigation: NavigationProp<ParamListBase, string, string | undefined, any, any, any> | any }) => {
  let isSelected = item.navTo === current;

  const color = isSelected ? ColorSystem.BrandColor : ColorSystem.gray!(60);
  const routName = (name: string) => {
    return t(`routs.${JSON.parse(JSON.stringify(routs))[name]}`);
  };

  const icon = () => {
    let res = <></>;
    if (isTablet()) {
      res = item.drawerDown ? <CIconGenerator iconName={Xml.downArrow(color)} size={1.5} /> : <></>;
    } else {
      res = <CIconGenerator iconName={item.iconName(color)} />;
    }
    return res;
  };

  return (
    <TouchableOpacity
      style={[defStyle.container, { flexDirection: isTablet() ? 'row-reverse' : 'column' }]}
      onPress={() => {
        current === RoutsEnum.NewOrder ? navigation.navigate(item.navTo) : navigation.replace(item.navTo);
      }}
    >
      {icon()}
      <CText text={routName(item.navTo)} style={[{ color: color }]} />
    </TouchableOpacity>
  );
};

const defStyle = StyleSheet.create({
  container: { height: '100%', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
});
