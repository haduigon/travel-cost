import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  onChangeText?: (text: string) => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
};

export default function ProfileInput({
  style,
  title,
  value,
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
          value={value || ''}
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
    // marginBottom: 20,
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
