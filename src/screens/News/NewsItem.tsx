import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/Logo.svg';


function NewsItem({ route }): React.JSX.Element {
  
  // const navigation = useNavigation();
  const item = route.params.item;
  return (
    <View style={styles.box}>
      {item.urlToImage ? (
        <Image source={{uri: item.urlToImage}} style={styles.image} />
      ) : (
        <Logo width={40} height={40} />
      )}
      <View style={styles.textBox}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

export default NewsItem;

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
  }
});
