import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  onChangeText?: (text: string) => void;
  title: string;
  style?: StyleProp<ViewStyle>;
};

export default function NewTravelInput({
  style,
  title,
  onChangeText,
}: Props): React.JSX.Element {
  return (
    <View style={[styles.inputBigBox, style]}>
      <Text
        style={{
          width: 75,
        }}>
        {title}{' '}
      </Text>
      <View style={styles.inputBox}>
        <TextInput
          placeholder={title}
          style={styles.input}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    width: '65%',
    marginRight: 10,
  },
  inputBigBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
});
