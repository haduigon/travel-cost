import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.box}>
      <Text>Home Screen News</Text>
    <Ionicons name="glass" size={30} color={'blue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})