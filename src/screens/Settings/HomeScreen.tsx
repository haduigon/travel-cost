import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.box}>
      <Text>Home Screen Settings</Text>
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