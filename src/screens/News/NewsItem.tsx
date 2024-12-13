import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../../assets/Logo.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type StackParamList = {
  News2: {route: string; item: any};
};

type NewsItemProps = NativeStackScreenProps<StackParamList, 'News2'>;
function NewsItem({route}: NewsItemProps): React.JSX.Element {
  const item = route.params.item;

  return (
    <View style={styles.box}>
      {item.urlToImage ? (
        <Image source={{uri: item.urlToImage}} style={styles.image} />
      ) : (
        <Logo width={40} height={40} />
      )}
      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{
          fontSize: 18,
        }}>{item.description}</Text>
      </View>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 300,
    marginLeft: 5,
    marginRight: 5,
  },
  textBox: {
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
