/** eslint-disable */
// esl
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../assets/Logo.svg';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.box}>
      {/* <View style={styles.logoBox}>
        <Logo width={80} height={80} />
      </View>
      <View style={styles.newsBox}>
        <View style={styles.titleBox}>
      <Ionicons name="newspaper-variant-outline" size={50} />
          <Text style={[styles.text, {
        marginLeft: 10,
      }]}>News</Text>
      </View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
  },
  logoBox: {
    marginTop: 20,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  newsBox: {
    width: '100%',
    marginLeft: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
