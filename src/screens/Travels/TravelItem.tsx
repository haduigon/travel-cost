import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const defPic = require('../../assets/pic2.png');
import { Travel } from '../../types/types';

type StackParamList = {
  TravelItem: {route: string; item: Travel};
};

type HomeItemProps = NativeStackScreenProps<StackParamList, 'TravelItem'>;

function TravelItem({route}: HomeItemProps): React.JSX.Element {
  const item = route.params.item;

  return (
    <ScrollView style={styles.box}>
      <Image source={defPic} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.textRow}>Name: {item.name}</Text>
        <Text style={styles.textRow}>Description: {item.description}</Text>
        <Text style={styles.textRow}>Statistics: {item.description}</Text>
        <Text style={styles.textRow}>Budget: {item.budget}</Text>
        <Text style={styles.textRow}>Place: {item.place}</Text>
        <Text style={styles.textRow}>Date: {item.date}</Text>
        <Text style={styles.textRow}>Comments: {item.comments}</Text>
      </View>
    </ScrollView>
  );
}

export default TravelItem;

const styles = StyleSheet.create({
  box: {
    flex: 1,
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
  textRow: {
    marginTop: 20,
  }
});
