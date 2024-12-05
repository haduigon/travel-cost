import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../../assets/Logo.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type StackParamList = {
  TravelItem: {route: string; item: any};
};

type HomeItemProps = NativeStackScreenProps<StackParamList, 'TravelItem'>;

function TravelItem({route}: HomeItemProps): React.JSX.Element {
  const item = route.params.item;
  // console.log('NewsItemProps', item);

  return (
    <View style={styles.box}>
      {item.urlToImage ? (
        <Image source={{uri: item.urlToImage}} style={styles.image} />
      ) : (
        <Logo width={40} height={40} />
      )}
      <View style={styles.textBox}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

export default TravelItem;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 100,
    marginLeft: 5,
    marginRight: 5,
  },
  textBox: {
    marginTop: 10,
  },
});
