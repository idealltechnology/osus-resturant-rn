import { View, Text, Dimensions, StyleSheet } from 'react-native';
import styleValues from '../../../utils/enums/styleValues';
import { ITabProps } from './SwipeableTabs';

const { width, height } = Dimensions.get('screen');

export default function TabBar({ labels, tabCount, selectedIndex, onPress }: ITabProps) {
  let labelArray = [...Array(tabCount)].map((_, i) => i);

  return (
    <View style={styles.body}>
      {labelArray.map((index) => {
        let label = labels[index] || '?';
        return (
          <Text
            onPress={() => {
              !!onPress && onPress(index);
            }}
            style={selectedIndex == index ? { color: 'black' } : { color: 'gray' }}
            key={index}
          >
            {label}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    padding: styleValues.paddin04,
    paddingTop: height * 0.01,
    paddingHorizontal: width * 0.1,
  },
});
