import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  onPress?: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
};

export default function FlyButton({
  onPress,
  title,
  style,
}: Props): React.JSX.Element {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 170,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
});
